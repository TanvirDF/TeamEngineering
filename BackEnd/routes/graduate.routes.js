const express = require("express");

const Graduate = require("../models_take2/graduate.model");

const router = express.Router();


router.route('/:id').get((req, res) => {
    const id = req.params.id
    Graduate.findOne({ userId: id }, (error, graduate) => {


        graduate ? res.json(graduate) : res.status(404).send(`not found ${error}`)

    })


})


module.exports = router;