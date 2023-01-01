const express = require("express");
const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");
const path = require('path');
const axios = require("axios");
const fs = require('fs');
const Order = require('../models/orderModel');
const pdfGenerate = require('../utils/invoiceGeneration/pdfCreation');

const confirmOrder = asyncHandler(async (req, res) => {
    const { total, orders, schoolInfo } = req.body

    const order = await Order.create({
        total,
        orders,
        schoolInfo
    })
    if(order) {
        // const fileStream = pdfGenerate(order._id, schoolInfo);
        res.status(200).json({
            id: order._id,
            // fileStream: fileStream
        })
    }
    else {
        res.status(400);
        throw new Error("Order creation failed");
    }

    var sender = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'barathkumarv98@gmail.com',
            pass: 'ptftkebjtqzisvar'
        }
    });
    var orderStr = JSON.stringify(orders);
    var mail = {
        from: "barathkumarv98@gmail.com",
        to: "barathkumarv98@gmail.com",
        subject: `Order details - ${order._id}`,
        text: `Order details - ${orderStr}`,
    };
    sender.sendMail(mail, function(error, info) {
        if (error)
            console.log(error);
        else
            console.log("Email sent successfully: " + info);
    });


    // try{
    // const data = await axios({
    //     method: "post",
    //     url: "https://graph.facebook.com/v15.0/108303245421452/messages",
    //     data: {
    //         "messaging_product": "whatsapp",
    //         "to": "919486748367",
    //         "type": "template",
    //         "template": {
    //             "name": "sample_flight_confirmation",
    //             "language": {
    //                 "policy": "deterministic",
    //                 "code": "en_US"
    //             },
    //             "components": [
    //                 {
    //                     "type": "header",
    //                     "parameters": [
    //                         {
    //                             "type": "document",
    //                             "document": {
    //                                 "filename": "invoice.pdf",
    //                                 "link": ""
    //                             }
    //                         }
    //                     ],
    //                 },
    //                 {
    //                     "type" : "body",
    //                     "parameters": [
    //                       {
    //                         "type": "text",
    //                         "text": "replacement_text"
    //                       },
    //                       {
    //                         "type": "text",
    //                         "text": "replacement_text"
    //                       },
    //                       {
    //                         "type": "text",
    //                         "text": "replacement_text"
    //                       },
    //                     ]
    //                 }
    //             ]
    //         }
    //     },
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": "Bearer EAALO6b0aB1kBACvDr9gZBflQxtMeEBN0ktblciv91vHzDG2h1V9UJOxeFYpZAGFh9QgOxdYjRSDWmM7y4qf3q2RHjpTOIIbLqGc3BimrgczF57CdZCnsWGwSi3HE1SIZASHRycnuWGoFprgffsen7N3ZBA5jjqNOGbuu7fgywOBAJREM1ZBBfASEhjZAYdO7ub02sxn0ugMLQZDZD"
    //     },
    // })
    // }
    // catch(err) {
    //     console.log(err.response)
    // }
    // console.log(data);
    // res.sendFile(path.join(__dirname, '../documents', 'invoice_123.pdf'))
});

module.exports = { confirmOrder }