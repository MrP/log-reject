/*global jasmine, expect, spyOn*/
'use strict';
const logReject = require('../index.js');

describe('logReject', function () {
    let spyLog;
    beforeEach(function () {
        spyLog = spyOn(console, 'log');
    });
    describe('When a promise doesn\'t reject', function () {
        it('shouldn\'t do anything', function (done) {
            const initialCalls = spyLog.calls.count();
            Promise.resolve()
                .catch(logReject)
                .then(function () {
                    expect(spyLog.calls.count()).toBe(initialCalls);
                })
                .then(done);
        });
    });
    describe('When a promise rejects', function () {
        it('logs and rejects with the same error', function (done) {
            const initialCalls = spyLog.calls.count();
            Promise.reject('bbb')
                .catch(logReject)
                .then(done.fail)
                .catch(function (error) {
                    expect(error).toBe('bbb');
                    expect(spyLog.calls.count()).toBe(initialCalls + 1);
                    expect(spyLog).toHaveBeenCalledWith('bbb');
                    done();
                });
        });
    });
});
describe('logReject.withMessage', function () {
    let spyLog;
    beforeEach(function () {
        spyLog = spyOn(console, 'log');
    });
    describe('When a promise doesn\'t reject', function () {
        it('shouldn\'t do anything', function (done) {
            const initialCalls = spyLog.calls.count();
            Promise.resolve()
                .catch(logReject.withMessage('message'))
                .then(function () {
                    expect(spyLog.calls.count()).toBe(initialCalls);
                })
                .then(done);
        });
    });
    describe('When a promise rejects', function () {
        it('logs and rejects with the same error', function (done) {
            const initialCalls = spyLog.calls.count();
            Promise.reject('bbb')
                .catch(logReject.withMessage('message'))
                .then(done.fail)
                .catch(function (error) {
                    expect(error).toBe('bbb');
                    expect(spyLog.calls.count()).toBe(initialCalls + 1);
                    expect(spyLog).toHaveBeenCalledWith('message', 'bbb');
                    done();
                });
        });
    });
});
