const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server.js')

const Graduate = require("../models/graduate.model");
const PersonalStory = require('../models/personalStory.model.js');
const graduateData = require('../utils/data/testUsers.json');
const personalStoryData = require('../utils/data/personalStory.json')


chai.use(chaiHttp)

describe('testing the requests on database', () => {
    const id = graduateData[0].userId

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
            const res = await chai.request(server).get(`/graduate/${id}`).send()
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        })
        it(`Should give code 404 when id doesn't exist `, async () => {
            const res = await chai.request(server).get(`/graduate/9898`).send()
            expect(res).to.have.status(404);
        })
        it('should GET a graduate email info', async () => {
            const res = await chai.request(server).get(`/graduate/${id}`).send()
            expect(res).to.have.status(200);
            expect(res.body).to.have.property(`name`);
            expect(res.body).to.have.property(`personalEmail`);
            expect(res.body).to.have.property(`dfEmail`);
            expect(res.body).to.have.property(`github`);
            expect(res.body).to.have.property(`nationality`);
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
            const res = await chai.request(server).get(`/personalStory/${id}`).send()
            expect(res).to.have.status(200);
            expect(res.body).to.be.an(`object`);
        })

        it('should POST changes of personal stories', async () => {

        })



    })


})

