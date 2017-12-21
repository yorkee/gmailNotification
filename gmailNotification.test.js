import {expect} from "chai";
import proxyquire from "proxyquire";
import sinon from 'sinon';
import * as nodemailer from 'nodemailer';
import GmailNotification from "./GmailNotification.js"

describe('GmailNotification', () => {
	let createTransportStub, sendMailStub;

	beforeEach(() => {
		sendMailStub = sinon.stub();
		createTransportStub = sinon.stub(nodemailer, 'createTransport').returns(() =>{
			console.log("hahha called!!");
			return {
				sendMail:sendMailStub
			};
		});
	});

	afterEach(() => {
		createTransportStub.restore();
	});

	it('should exist', () => {
		let gmailNotification = new GmailNotification();
		expect(gmailNotification).to.not.be.equal(null);
	})

	it('declare a transpoter', () => {
		let gmailNotification = new GmailNotification();
		expect(createTransportStub.calledOnce).to.equal(true);
	})
})