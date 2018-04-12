#!/usr/bin/env node

'use strict';

const DOWNLOAD_URL = 'https://raw.githubusercontent.com/nodejs/Release/master/schedule.json';

const https = require('https');
const path = require('path');
const fs = require('fs');

const req = https.get(DOWNLOAD_URL, (res) => {
	res.setEncoding('utf8');

	let schedule = '';

	res.on('data', (str) => {
		schedule += str;
	});

	res.on('end', () => {
		const outPath = path.resolve(__dirname, '..', 'data', 'schedule.json');
		fs.writeFile(outPath, schedule, (error) => {
			if (error) {
				throw error;
			}

			console.log('Finished downloading schedule to ./data/schedule.json:');
			console.log();
			console.log(schedule);
		});
	});
});
