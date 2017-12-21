import express from "express"
import GmailNotification from "./gmailNotification.js"

const app = express(),
	gmailNotification = new GmailNotification(),
	port = process.env.NODE_PORT || 3000;

app.get('/sendMail', (req, res) => gmailNotification.sendMail("hahaha").then(res.send, res.status(500).send))

app.listen(port, () => console.log("gmailNotification serving port: " + port));