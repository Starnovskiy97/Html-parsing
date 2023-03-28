const express = require('express');
const cors = require('cors');
const path = require('path');
const puppeteer = require('puppeteer');
const dotenv = require('dotenv').config('./.env');
const fs = require('fs');
const vk = require('./src/vk.js');

const PORT = process.env.PORT || 2000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.post('/api', async (req, res) => {
	const url = req.body.url;
	let data = null;

	const browser = await puppeteer.launch({
		headless: true,
		slowMo: 5,
		ignoreDefaultArgs: ['--disable-extensions'],
	});

	const page = await browser.newPage();

	if (url.includes('vk')) {
		data = await vk(req.body, page);
	}

	//logic for another social network
	if (url.includes('instagram')) {
		//...
	}

	await browser.close();

	fs.writeFileSync('./public/data.json', JSON.stringify(data));

	res.json({
		success: true,
		data
	});
});

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`);
});