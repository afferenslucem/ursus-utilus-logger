import { describe, it, beforeEach } from 'mocha';
import 'mocha-sinon';
import { assert } from 'chai';
import { ConsoleAppender } from '../src/log-appenders/console-appender';
import { AccumulatorAppender } from '../src/log-appenders/accumulator-appender';
import { ProxyAppender } from '../src/log-appenders/proxy-appender';
import sinon from 'sinon';

describe('ProxyAppender', function () {
    const consoleAppender = new ConsoleAppender();
    // @ts-ignore
    consoleAppender.getCurrentDate = sinon.stub().returns(new Date('2020-08-05 13:22:43.134'));

    const accumulatorAppender = new AccumulatorAppender();
    // @ts-ignore
    accumulatorAppender.getCurrentDate = sinon.stub().returns(new Date('2020-08-05 13:22:43.134'));

    const proxyAppender = new ProxyAppender([consoleAppender, accumulatorAppender]);

    beforeEach(function() {
        consoleAppender.writeDebug = sinon.stub();
        consoleAppender.writeInfo = sinon.stub();
        consoleAppender.writeWarning = sinon.stub();
        consoleAppender.writeError = sinon.stub();
        consoleAppender.writeFatal = sinon.stub();

        accumulatorAppender.writeDebug = sinon.stub();
        accumulatorAppender.writeInfo = sinon.stub();
        accumulatorAppender.writeWarning = sinon.stub();
        accumulatorAppender.writeError = sinon.stub();
        accumulatorAppender.writeFatal = sinon.stub();
    });
  
    it('should log debug both', () => {
        const obj = {};

        proxyAppender.writeDebug({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        // @ts-ignore
        assert.isTrue(consoleAppender.writeDebug.calledOnce);
        // @ts-ignore
        assert.isTrue(accumulatorAppender.writeDebug.calledOnce);
    });  
  
    it('should log info both', () => {
        const obj = {};

        proxyAppender.writeInfo({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        // @ts-ignore
        assert.isTrue(consoleAppender.writeInfo.calledOnce);
        // @ts-ignore
        assert.isTrue(accumulatorAppender.writeInfo.calledOnce);
    });  
  
    it('should log warn both', () => {
        const obj = {};

        proxyAppender.writeWarning({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        // @ts-ignore
        assert.isTrue(consoleAppender.writeWarning.calledOnce);
        // @ts-ignore
        assert.isTrue(accumulatorAppender.writeWarning.calledOnce);
    });  
  
    it('should log error both', () => {
        const obj = {};

        proxyAppender.writeError({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        // @ts-ignore
        assert.isTrue(consoleAppender.writeError.calledOnce);
        // @ts-ignore
        assert.isTrue(accumulatorAppender.writeError.calledOnce);
    });  
  
    it('should log fatal both', () => {
        const obj = {};

        proxyAppender.writeFatal({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            objects: [obj]
        })

        // @ts-ignore
        assert.isTrue(consoleAppender.writeFatal.calledOnce);
        // @ts-ignore
        assert.isTrue(accumulatorAppender.writeFatal.calledOnce);
    });  
  });