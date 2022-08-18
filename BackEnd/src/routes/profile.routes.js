const express = require("express");

const router = express.Router();

router.route('/:id').get((req, res) => {
    const id = req.params.id

}).put((req, res) => {

})

module.exports = router;