'use strict';
/* jshint node: true */
/* jshint esnext: true */
/* global describe, beforeEach, afterAll, spyOn, it, expect, fail */

describe('startblock service', () => {

  const helper = require('../journeyHelper');
  const startblocks = require('../../service/startblocks');
  const pg = require('pg');

  beforeEach((done) => {
    helper.setupDbConnection(done);
  });

  afterAll((done) => {
    helper.closeDbConnection(done);
  });

  it('should save and read a startblock', (done) => {
    let name = 'My first startblock';
    startblocks.add(name)
      .then(startblocks.get) 
      .then(function(data) {
        expect(data.length).toBe(1);
        expect(data[0].name).toBe(name);
        done();
      })
      .catch(done.fail);
   });
})
;
