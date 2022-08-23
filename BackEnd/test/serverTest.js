const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server.js')
const Graduate = require("../models/graduate.model");

const testData = require('../utils/data/testUsers.json')

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
        it('should GET a graduate given the id', async () => {
            const id = testData[0].userId
            const res = await chai.request(server).get(`/graduate/${id}`).send()
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        })

    })

    describe('Personal Story', () => {

    })

})
