const chai = require('chai')
const { expect } = require('chai')
const chaiHttp = require('chai-http')
const server = require('../../server.js')


chai.use(chaiHttp)

describe('testing the requests on database', () => {

    describe('Gradates', () => {
        it('testing GET requests', async () => {
            const res = await chai.request(server).get(`/graduates/${1234}`).send()
            expect(res).to.have.status(200);

        })
    })

})
