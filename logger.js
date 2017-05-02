const api = require('./api');

function logger(arg) {
  const promise = api.fetchIpData(arg);

  switch (arg) {
    case 'ip':
      promise.then(function(res) {
        console.log('your ip is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'hostname':
      promise.then(function(res) {
        console.log('your hostname is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'city':
      promise.then(function(res) {
        console.log('your city is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'region':
      promise.then(function(res) {
        console.log('your region is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'country':
      promise.then(function(res) {
        console.log('your country is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'loc':
      promise.then(function(res) {
        console.log('your location is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'org':
      promise.then(function(res) {
        console.log('your organization is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    case 'postal':
      promise.then(function(res) {
        console.log('your postal is:', res);
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
    default:
      promise.then(function(res) {
        for (const key in res) {
          console.log(key + ': ' + res[key]);
        }
      })
      .catch(function(err) {
        console.log('An error occurred:', err);
      });
      break;
  };
};

module.exports = logger;
