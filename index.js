'use strict';

const semver = require('semver');
const schedule = require('./data/schedule.json');

function isMaintained({ start, end }) {
	const now = Date.now();

	start = (new Date(start)).getTime();
	end = (new Date(end)).getTime();

	return now >= start && now <= end;
}

module.exports = function (versionRange) {
	const versions = Object.keys(schedule);
	let anyMaintained = false;

	for (const version of versions) {
		if (semver.satisfies(semver.coerce(version), versionRange)) {
			if (isMaintained(schedule[version])) {
				anyMaintained = true;
			} else {
				return false;
			}
		}
	}

	return anyMaintained;
};
