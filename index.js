const { prompt } = require('inquirer')
const { createConnection } = require('mysql')
const db = require('./db')
const { question1 } = require('./question')
const { fakeData } = require('./faker')

const conn = createConnection(db.mysqlInfo)
conn.connect()

prompt([question1]).then(ans => {
    switch (ans.command) {
        case 'init user and database':
            db.initialize(conn, () => {
                conn.destroy()
            })
            break;

        case 'insert fake data':
            db.insertFakeData(conn, (res) => {
                console.log(res)
                conn.destroy()
            })
            
            break;

        case 'show member list1':
            // order by name
            db.selectMembers1(conn, (res) =>{
                let limit = 10
                
                for (let i = 0; i < limit; i += 1) {
                    console.log(res[i].name, res[i].phone_number)
                }

                conn.destroy()
            })
            break;

        case 'show member list2':
            // order by phobe 
            db.selectMembers2(conn, (res) =>{
                let limit = 10
                
                for (let i = 0; i < limit; i += 1) {
                    console.log(res[i].name, res[i].phone_number)
                }

                conn.destroy()
            })
            break;

        case 'show member list3':
            //where named start with 'B'
            db.selectMembers3(conn, (res) =>{
                let limit = 100
                
                for (let i = 0; i < limit; i += 1) {
                    console.log(res[i].name, res[i].phone_number)
                }
                
                conn.destroy()
            })
            break;

        case 'show member list4':
            //where named start with 'B' only 3
            db.selectMembers4(conn, (res) =>{
                let limit = 3
                
                for (let i = 0; i < limit; i += 1) {
                    console.log(res[i].name, res[i].phone_number)
                }
                conn.destroy()
            })
            break;

        case 'select all from exist table':
            db.selectAll(conn, () => {
                conn.destroy()
            })
            break;
        case 'show fake data':
            let data = fakeData()
            console.log(data)
            conn.destroy()
            break;
        case 'select all actors':
            db.selectActors(conn, (res) => {
                // res 는 배열데이터
                // for (let i = 0; i < res.length; i += 1) {
                //     console.log(res[i]['NAME'])
                // }
                const ittr = (item) => {
                    console.log(item['FIRST_CHAR'], item['NAME'],
                        `(${item['NAME_LENGTH']})`)
                }
                res.map(ittr)

                conn.destroy()
            })
            break;
        case 'show today':
            db.showToday(conn, (res) => {
                let today = res[0]['today']
                console.log(today)
                conn.destroy()
            })
            break;
        case 'copy database from samples':
            db.copyTable(conn, () => {
                conn.destroy()
            })
            break;
        default:
            console.log('mysql command line interface v 0.1.0')
            console.log(ans)
            conn.destroy()
            break;
    }
})
