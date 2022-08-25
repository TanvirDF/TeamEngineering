const express = require("express");

const Graduate = require("../models/graduate.model");

const router = express.Router();

router.route('/:id')
    .get((req, res) => {
        const id = req.params.id
        Graduate.findOne({ userId: id }, (error, graduate) => {

            graduate ? res.json(graduate) : res.status(404).send(`not found ${error}`)
        })

    });
router.route('/:id')

    .put((req, res) => {
        console.log('from post req');
        const id = req.params.id;
        Graduate.findOne({ userId: id }, (error, graduate) => {
            if (graduate) {
                graduate.name = rq.body.name
                graduate.personalEmail = req.body.personalEmail
                graduate.dfEmail = req.body.dfEmail
                graduate.github = req.body.github
                graduate.linkedin = req.body.linkedin
                graduate.phone = req.body.phone
                graduate.save().then(graduate => {
                    res.send('data updated', graduate)
                }).catch(
                    () => {
                        res.status(400).send('Error')
                    }
                )
            }
            else {
                res.status(404).send(`info not found ${error}`)
            }
        })
    })

module.exports = router;
