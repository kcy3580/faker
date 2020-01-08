const create1 = `
    CREATE DATABASE 
    IF NOT EXISTS study1
    CHARACTER SET utf8mb4 
    COLLATE utf8mb4_unicode_ci;
`
const table1 = `
    CREATE TABLE
    IF NOT EXISTS study1.member
    (
        id int primary key auto_increment,
        name varchar(100),
        email varchar(100),
        phone_number varchar(24)
    )
`
const show1 = `
    SELECT schema_name 
    FROM information_schema.schemata;
`
const user1 = `
    CREATE USER 
    IF NOT EXISTS 'soomtong1'@'%' 
    IDENTIFIED WITH mysql_native_password
    BY '123qwe123qwe';
`
const grant1 = `
    GRANT ALL PRIVILEGES ON *.* 
    TO 'soomtong1'@'%';
`
const insertMembers = `
    INSERT INTO study1.member
    (name, email, phone_number)
    VALUES ?;
`
const select1 = `
    SELECT 
    concat(first_name, ' ', last_name)
    AS name
    FROM sakila.actor;
`
const members = `
    select * from
    study1.member
`

const members1 = `
    select * from
    study1.member order by name
`

const members2 = `
    select * from
    study1.member order by phone_number
`

const members3 = `
    select * from
    study1.member where name like 'B%';
`

const members4 = `
    select * from 
    study1.member where name like 'B%'
    order by length(name) desc
    limit 3;
`

const actors = `
    SELECT
    actor_id 
        as ID,
    concat(first_name, ' ', last_name) 
        as NAME,
    length(concat(first_name, ' ', last_name)) 
        as NAME_LENGTH,
    substring(last_name, 1, 1)
        as FIRST_CHAR
    FROM sakila.actor;
`
const today = `
    select
        now() as today;
`
const deletetable1 = `
    DROP TABLE study1.country;
`
const copytable1 = `
    CREATE TABLE 
    IF NOT EXISTS study1.country 
    LIKE sakila.country;
`
const copyrecord1 = `
    INSERT INTO study1.country 
    SELECT * FROM sakila.country;
`
module.exports = {
    create1,
    table1,
    show1,
    user1,
    grant1,
    select1,
    insertMembers,
    members,
    members1,
    members2,
    members3,
    members4,
    actors,
    today,
    deletetable1,
    copytable1,
    copyrecord1,
}
