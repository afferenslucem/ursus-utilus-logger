import { describe, it, beforeEach } from 'mocha';
import 'mocha-sinon';
import { assert } from 'chai';
import { AccumulatorAppender } from '../src/log-appenders/accumulator-appender';
import sinon from 'sinon';

describe('AccumulatorAppender', function () {
    let accumulatorAppender = null;

    beforeEach(function() {
        accumulatorAppender = new AccumulatorAppender();
        // @ts-ignore
        accumulatorAppender.getCurrentDate = sinon.stub().returns(new Date('2020-08-05 13:22:43.134'));
    });
  
    it('should log debug', () => {
        const obj = {};

        accumulatorAppender.writeDebug({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        assert.equal(accumulatorAppender.logs.length, 1);
        assert.deepEqual(accumulatorAppender.logs[0], {
            message: '[1] 2020-08-05 13:22:43.134 namespace.loggerName - DEBUG - message',
            objects: [obj],
            id: '1'
        });
    });
  
    it('should log debug', () => {
        const obj = {};

        accumulatorAppender.writeError({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        assert.equal(accumulatorAppender.logs.length, 1);
        assert.deepEqual(accumulatorAppender.logs[0], {
            message: '[1] 2020-08-05 13:22:43.134 namespace.loggerName - ERROR - message',
            objects: [obj],
            id: '1'
        });
    });  
  });