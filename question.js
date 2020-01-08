const { Separator } = require('inquirer')

const question1 = {
    type: 'list',
    name: 'command',
    message: 'What do you want to do?',
    choices: [
        'init user and database',
        new Separator(),
        'insert fake data',
        new Separator(),
        'show member list1',
        'show member list2',
        'show member list3',
        'show member list4',
        new Separator(),
        'show fake data',
        'show today',
        new Separator(),
        'select all from exist table',
        'select all actors',
        new Separator(),
        'copy database from samples'
    ]
}

module.exports = {
    question1
}