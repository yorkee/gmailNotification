import nodemailer from "nodemailer";

class GmailNotification {
	constructor(distributionList, title){

		this.user = process.env.notification_email;
		this.pass = process.env.notification_password;
		if (process.env.https_proxy){
			this.proxy = process.env.https_proxy; 	
		}

		this.distributionList = distributionList;
		this.messgeTitle = title;

		const createTransportOpt = {
			host: "smpt.gmail.com",
			secure: true,
			port: 465,
			requiresAuth: true,
			domains: ["gmail.com", "googlemail.com"],
			auth: {
				user: this.user,
				pass: this.pass
			}
		};

		this.transporter = nodemailer.createTransport(createTransportOpt);
	}

	sendMail(messageBody) {
		var mailOptions = {
			from: this.user,
			to: this.distributionList,
			subject: this.messageTitle,
			text: messageBody,
			html: '<b>${messageBody}</b>'
		};

		return new Promise((resolve, reject) => {
			this.transporter,sendMail(mailOptions, (error, info) => {
				if (error){
					console.log(error);
					reject(error);
				} else {
					console.log('Message sent: ' + info.response);
					resolve(info.response);
				}
			});
		});
	}
	
}

module.exports = GmailNotification;
