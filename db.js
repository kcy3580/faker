const { mysqlInfo } = require('./config')
const query = require('./query')
const { fakeData } = require('./faker')

function initialize(conn, callback) {
    conn.query(query.create1, (err, res) => {
        console.log(err, res)
        conn.query(query.show1, (err, res) => {
            console.log(err, res)
            conn.query(query.user1, (err, res) => {
                console.log(err, res)
                conn.query(query.grant1, (err, res) => {
                    console.log(err, res)
                    callback()
                })
            })
        })
    })
}

function selectAll(conn, callback) {
    conn.query(query.select1, (err, res) => {
        console.log(err, res)
        callback()
    })
}

function selectMembers1(conn, callback) {
    conn.query(query.members1, (err, res) => {
        if (err) throw new Error(err)

        callback(res)
    })
}

function selectMembers2(conn, callback) {
    conn.query(query.members2, (err, res) => {
          if (err) throw new Error(err)

        callback(res)
    })
}

function selectMembers3(conn, callback) {
    conn.query(query.members3, (err, res) => {
          if (err) throw new Error(err)

        callback(res)
    })
}

function selectMembers4(conn, callback) {
    conn.query(query.members4, (err, res) => {
          if (err) throw new Error(err)

        callback(res)
    })
}

function insertFakeData(conn, callback) {
    conn.query(query.table1, (err, res) => {
        if (err) throw new Error(err)

        let list = []

        for (let i = 0; i < 50000; i += 1) {
            let data = fakeData()

            list.push([data.name, data.email, data.phone])
        }
        
        conn.query(query.insertMembers, [list], (err, res) => {
            if (err) throw new Error(err)

            conn.query(query.members, (err, res) => {
                if (err) throw new Error(err)

                callback(res)
            })
        })
    })
}

function selectMembers(conn, callback) {
    conn.query(query.members, (err, res) => {
        if (err) {
            console.error(err)
        }
        callback(res)
    })
}

function selectActors(conn, callback) {
    conn.query(query.actors, (err, res) => {
        if (err) {
            console.error(err)
        }
        callback(res)
    })
}

function showToday(conn, callback) {
    conn.query(query.today, (err, res) => {
        console.log(res)
        callback(res)
    })
}

function copyTable(conn, callback) {
    conn.query(query.deletetable1, (err, res) => {
        console.log(err, res)
        conn.query(query.copytable1, (err, res) => {
            console.log(err, res)
            conn.query(query.copyrecord1, (err, res) => {
                console.log(err, res)
                callback()
            })
        })    
    })
}

module.exports = {
    mysqlInfo,
    initialize,
    insertFakeData,
    selectAll,
    selectMembers,
    selectMembers1,
    selectMembers2,
    selectMembers3,
    selectMembers4,
    selectActors,
    showToday,
    copyTable,
}