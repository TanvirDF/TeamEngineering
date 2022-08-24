const express = require("express");
const Information = require("../models/information.model");

const router = express.Router();


router.route('/:id')
    .get((req, res) => {
        const id = req.params.id;
        Information.findOne({ userId: id }, (error, information) => {
            if (information) {
                res.json(information);
            }
            else {
                res.status(404).send(`not found ${error}`);
            }
        });
    });

module.exports = router;