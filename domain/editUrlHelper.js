/* jshint node: true */
/* jshint esnext: true */
'use strict';
const crypto = require('crypto');
const config = require('config');

const editUrlHelper = function () {
  const constantUrlPart = `${config.get('pace-url')}/editparticipant/?edit=`;

  let generateUrl = function (value) {
    return constantUrlPart + encodeURIComponent(value);
  };

  let generateSecureID = function () {
    return crypto.randomBytes(32).toString('hex');
  };

  let getIdFromUrl = function (url) {
    return url.replace(constantUrlPart, '');
  };

  return {
    generateUrl: generateUrl,
    getIdFromUrl: getIdFromUrl,
    generateSecureID: generateSecureID
  };
}();

module.exports = editUrlHelper;
