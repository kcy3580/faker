// page.js
// user
// 1. page number
// 
// 
// 
// 
// 
// 
// 
// 

const { createConnection } = require('mysql')
const db = require('./db')
const conn = createConnection(db.mysqlInfo)
conn.connect()

let page = {
    pageNumber: process.argv[2] || 1,
    totalRecord: 0,
    totalPage: 0,
    startRecord: 0,
    pageSize: 15
}

const q = {
    count: 'select count(id) as totalCount from study1.member',
    page: 'select * from study1.member order by id desc limit ?, ?'
}

conn.query(q.count, (err, res) =>{
    if (err) throw new Error('count query' + err)

    page.totalRecord = res[0].totalCount
    console.log(`total record: ${page.totalRecord}`)

    page.totalPage = Math.ceil(page.totalRecord / page.pageSize)
    console.log(`total pages: ${page.totalPage}`)

    page.startRecord = (page.pageNumber - 1) * page.pageSize

    conn.query(q.page, [page.startRecord, page.pageSize], (err, res) =>{
        if (err) throw new Error('page query' + err)

        res.map(item => {
            console.log(`member id: ${item.id}\t${item.phone_number}\t${item.name}`)
        })

        conn.destroy()
    })
})
