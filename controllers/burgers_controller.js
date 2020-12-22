const express = require("express");

// routes
const router = express.Router();
const burger = require("../models/burger.js");

// index
router.get("/", function (req, res) {
    // redirect to /burgers route
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    // callback
    burger.all(function (data) {
        // Wrapper for bugger
        // get burger data
        // and display to homepage
        res.render("index", { burger_data: data });
    });
});

// POST --> create burger
router.post("/burgers/create", function (req, res) {
    // accept a request
    // execute command to add burger data
    burger.create(req.body.burger_name, function (response) {
        // redirect to home page
        res.redirect("/");
    });
});

// PUT request
router.put("/burgers/:id", function (req, res) {
    burger.update(req.params.id, function (response) {
        // return burger given ID
        // response status
        res.sendStatus(200);
    });
});

// export route
module.exports = router;