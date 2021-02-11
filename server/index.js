"use strict";
const companies = require("./data/companies.json");
const items = require("./data/items.json");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const PORT = 4000;

express()
    .use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Methods",
            "OPTIONS, HEAD, GET, PUT, POST, DELETE"
        );
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    })
    .use(morgan("tiny"))
    .use(express.static("./server/assets"))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))

    // REST endpoints?
    .get("/products", (req, res) => {
        const getAllItems = items;
        try {
            res.status(200).send({
                status: 200,
                data: getAllItems,
                message: "HERE ARE YOUR ITEMS!",
            });
        } catch (e) {
            res.status(404).send({
                status: 404,
                message: e,
            });
        }
    })

    .get("/products/top5", (req, res) => {
        const getAllItems = items;
        const top5 = [];
        for (let i = 0; i < 5; i++) {
            const random = Math.floor(Math.random() * getAllItems.length);
            top5.push(getAllItems[random]);
        }
        try {
            res.status(200).send({
                status: 200,
                data: top5,
                message: "HERE ARE YOUR 5 ITEMS!",
            });
        } catch (e) {
            res.status(404).send({
                status: 404,
                message: e,
            });
        }
    })

    .get("/products/:bodypart", (req, res) => {
        const getAllItems = items;
        const bodyPart = req.params.bodypart.toLowerCase();
        const filteredBodyParts = getAllItems.filter(
            (item) => item.body_location.toLowerCase() === bodyPart
        );

        try {
            res.status(200).send({
                status: 200,
                data: filteredBodyParts,
                message: "HERE ARE YOUR BODY PARTS!",
            });
        } catch (e) {
            res.status(404).send({
                status: 404,
                message: e,
            });
        }
    })

    .get("/product/:id", (req, res) => {
        const getAllItems = items;
        const id = parseInt(req.params.id, 10);
        const filteredBodyParts = getAllItems.filter((item) => item._id === id);
        console.log(filteredBodyParts);
        try {
            res.status(200).send({
                status: 200,
                data: filteredBodyParts,
                message: "HERE IS YOUR PRODUCTS!",
            });
        } catch (e) {
            res.status(404).send({
                status: 404,
                message: e,
            });
        }
    })

    .listen(PORT, () => console.info(`Listening on port ${PORT}`));

// app.get("/spotify_access_token", async (req, res, next) => {
//   const clientId = process.env.SPOTIFY_CLIENT_ID;
//   const clientSecret = process.env.SPOTIFY_SECRET;

//   // We need, annoyingly, a base64-encoded string of our id:secret, for spotify.
//   // We can use Buffers to do this for us.
//   const authString = Buffer.from(clientId + ":" + clientSecret).toString(
//     "base64"
//   );
