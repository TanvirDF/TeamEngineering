const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server.js')
const Graduate = require("../models_take2/graduate.model");
const PersonalStory = require('../models_take2/personalStory.model.js');
const graduateData = require('../models_take2/testUsers.json');
const personalStoryData = require('../models_take2/personalStory.json')

chai.use(chaiHttp)

describe('testing the requests on database', () => {
    describe('Gradate', () => {
        beforeEach(async () => {
            try {
                await Graduate.deleteMany()
                console.log('collection cleared')

            } catch (err) {
                console.log('error clearing the collection')
                throw new Error()
            }

            try {
                await Graduate.insertMany(graduateData)
                console.log('data inserted')

            } catch (err) {
                console.log(`error populating the data ${err}`)
                throw new Error()

            }
        })
        it('should GET a graduate info given the id', async () => {
            const id = graduateData[0].userId
            const res = await chai.request(server).get(`/graduate/${id}`).send()
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        })

    })

    describe('Personal Story', () => {
        beforeEach(async () => {
            try {
                await PersonalStory.deleteMany()
                console.log('collection cleared')

            } catch (err) {
                console.log('error clearing the collection')
                throw new Error()
            }

            try {
                await PersonalStory.insertMany(personalStoryData)
                console.log('data inserted')

            } catch (err) {
                console.log(`error populating the data ${err}`)
                throw new Error()

            }
        })
        it('should GET a personal story info given the id', async () => {
            const id = graduateData[0].userId
            const res = await chai.request(server).get(`/personalStory/${1234}`).send()
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        })

    })


})

