import test from 'ava';

import api from './api';

test('should properly run tests', t => {
  t.pass();
});

test('should get object with ip data', async t => {
	const res = await api.fetchIpData();
	var value = undefined;

	if (typeof res === 'object') {
		value = true;
	} else {
		value = false;
	}

	t.is(value, true);
});

test('should get ip data object with 8 keys when no arguments passed', async t => {
	const res = await api.fetchIpData();
	var value = undefined;

	if (Object.keys(res).length === 8) {
		value = true;
	} else {
		value = false;
	}

	t.is(value, true);
});

test('should get the ip country from the api', async t => {
	const res = await api.fetchIpData();
	var value = undefined;

	if (res.country) {
		value = true;
	} else {
		value = false;
	}

	t.is(value, true);
});

test('should only get the ip city from the api when passing city argument', async t => {
	const res = await api.fetchIpData('city');
	var value = undefined;

	if (res && typeof res === 'string') {
		value = true;
	} else {
		value = false;
	}

	t.is(value, true);
});
