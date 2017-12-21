import express from "express"
import GmailNotification from "./gmailNotification.js"

const app = express(),
	gmailNotification = new GmailNotification("elvinyeung@gmail.com", "hehehe"),
	port = process.env.NODE_PORT || 3001;

app.get('/sendMail', (req, res) => {
	gmailNotification.sendMail("hahaha").then(req, res);
})

app.listen(port, () => console.log("gmailNotification serving port: " + port));