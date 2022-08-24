const express = require("express");
const Training = require("../models/training.model");

const router = express.Router();

router.route('/:id').get((req, res) => {
    const id = req.params.id
    Training.findOne({ userId: id }, (error, training) => {
        if (training) {
            res.json(training)
        } else {
            res.status(404).send(`not found ${error}`)
        }
    })
})

module.exports = router;