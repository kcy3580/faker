const faker = require('faker')

function fakeData() {
    let email = faker.internet.email()
    let name = faker.name.findName()
    let phone = faker.phone.phoneNumberFormat(2)

    let member = { name, email, phone }

    return member
}

module.exports = {
    fakeData
}
