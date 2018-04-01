'use strict';

const axios = require('axios');

console.log('Loading function');

exports.handler = (event, context, callback) => {
    let { name, email, message } = JSON.parse(event.body);

    const
        OK_STAT_CODE = 200,
        OK_MESSAGE = 'OK',
        UNPROCESSABLE_STAT_CODE = 422,
        UNPROCESSABLE_MESSAGE = 'Unprocessable entity',
        SERVER_ERR_STAT_CODE = 500,
        SERVER_ERR_MESSAGE = 'Something went wrong';

    const generateResponse = (responseCode, responseMessage) => ({
        statusCode: responseCode,
        headers: {
            "Content-Type" : "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({ message: responseMessage })
    });
    const respond = (err, response) => {
        console.log("response: " + JSON.stringify(response))
        callback(err, response);
    };

    if(typeof(name) === 'undefined' || typeof(email) === 'undefined' || typeof(message) === 'undefined') {
        respond(null, generateResponse(UNPROCESSABLE_STAT_CODE, UNPROCESSABLE_MESSAGE));
    } else {
        axios({
            method: 'post',
            url: `https://api.mailgun.net/v3/${process.env.MAILGUN_DOMAIN}/messages`,
            auth: {
                username: 'api',
                password: process.env.MAILGUN_KEY
            },
            params: {
                from: `postmaster@${process.env.MAILGUN_DOMAIN}`,
                to: process.env.EMAIL_RECIPIENT,
                subject: 'Cell 5 Contact Form Message',
                html: '<article><b>Name:</b> ' + name + '<br />' +
                    '<b>Email: </b>' + email + '<br />' +
                    '<b>Message: </b>' + '<p>' + message + '</p></article>'
            }
        }).then(response => {
            respond(null, generateResponse(OK_STAT_CODE, OK_MESSAGE));
        }).catch(error => {
            respond(null, generateResponse(SERVER_ERR_STAT_CODE, SERVER_ERR_MESSAGE));
        });
    }
};
