const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server.js')
const Graduate = require("../models_take2/graduate.model");

const testData = require('../models_take2/testUsers.json')

chai.use(chaiHttp)

describe('testing the requests on database', () => {

    beforeEach(async () => {
        try {
            await Graduate.deleteMany()
            console.log('collection cleared')

        } catch (err) {
            console.log('error clearing the collection')
            throw new Error()
        }

        try {
            await Graduate.insertMany(testData)
            console.log('data inserted')

        } catch (err) {
            console.log(`error populating the data ${err}`)
            throw new Error()

        }
    })

    describe('Gradate', () => {
        it('testing GET requests', async () => {

            const res = await chai.request(server).get(`/graduate/${1234}`).send()
            expect(res).to.have.status(200);

        })
    })

})
