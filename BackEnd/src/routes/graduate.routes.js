const express = require("express");

const Graduate = require("../model/graduate.model");

const router = express.Router();


router.route('/:id').get((req, res) => {
    const id = req.params.id
    Graduate.find((error, graduates) => {

        graduates ? res.json(graduates) : res.status(404).send(`not found ${error}`)
    })


})


module.exports = router;