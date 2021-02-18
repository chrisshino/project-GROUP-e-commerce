"use strict";
const companies = require("./data/companies.json");
const items = require("./data/items.json");

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);
const cors = require("cors");

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
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }))
    .use("/", express.static(__dirname + "/"))
    .use(cors())

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

    .get("/company/:id", (req, res) => {
        const getAllCompanies = companies;
        const id = parseInt(req.params.id, 10);
        const company = getAllCompanies.filter((item) => item._id === id);
        console.log(company);

        try {
            res.status(200).send({
                status: 200,
                data: company,
                message: "HERE IS YOUR COMPANY!",
            });
        } catch (e) {
            res.status(404).send({
                status: 404,
                message: e,
            });
        }
    })

    .post("/stripe/charge", cors(), async (req, res) => {
        console.log("stripe-routes.js 9 | route reached", req.body);
        let { amount, id } = req.body;
        console.log("stripe-routes.js 10 | amount and id", amount, id);
        try {
            const payment = await stripe.paymentIntents.create({
                amount: amount,
                currency: "CAD",
                description: "Your Company Description",
                payment_method: id,
                confirm: true,
            });
            console.log("stripe-routes.js 19 | payment", payment);
            res.json({
                message: "Payment Successful",
                success: true,
            });
        } catch (error) {
            console.log("stripe-routes.js 17 | error", error);
            res.json({
                message: "Payment Failed",
                success: false,
            });
        }
    })

    .listen(PORT, () => console.info(`Listening on port ${PORT}`));

