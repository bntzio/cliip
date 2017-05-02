const axios = require('axios');

let url = 'https://ipinfo.io';

module.exports = {
  fetchIpData: function(arg) {
    if (arg) {
      return axios.get(url)
        .then(function(res) {
          return res.data[arg];
        })
        .catch(function(err) {
          return err;
        });
    } else {
      return axios.get(url)
        .then(function(res) {
          return res.data;
        })
        .catch(function(err) {
          return err;
        });
    }
  }
};
