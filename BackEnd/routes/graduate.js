import express from 'express'
import Graduate from '../model/graduate.model.js'

export const router = express.Router()

router.route('/:id').get((req, res) => {
    const id = req.params.id
    Graduate.find((error, graduates) => {

        graduates ? res.json(graduates) : res.status(404).send(`not found ${error}`)
    })


})