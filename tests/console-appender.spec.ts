import { describe, it, beforeEach } from 'mocha';
import 'mocha-sinon';
import { assert } from 'chai';
import { ConsoleAppender } from '../src/log-appenders/console-appender';

describe('ConsoleAppender', function () {

    const app = new ConsoleAppender();
    app.getDateFunc = () => new Date('2020-08-05 13:22:43.134')

    beforeEach(function() {
      this.sinon.stub(console, 'log');
      this.sinon.stub(console, 'warn');
      this.sinon.stub(console, 'error');
    });
  
    it('should log debug by console.log', () => {
        const obj = {};

        app.writeDebug({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            obj
        })

        // @ts-ignore
        assert.isTrue(console.log.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.log.calledWith('[1] 2020-08-05 13:22:43.134 namespace.loggerName - DEBUG - message', obj), 'Had other args');
    });  
  
    it('should log debug by console.log whithout optional', () => {
        app.writeDebug({
            loggerName: 'loggerName',
            message: 'message'
        })

        // @ts-ignore
        assert.isTrue(console.log.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.log.calledWith('2020-08-05 13:22:43.134 loggerName - DEBUG - message'), 'Had other args');
    });  
  
    it('should log info by console.log', () => {
        const obj = {};

        app.writeInfo({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            obj
        })

        // @ts-ignore
        assert.isTrue(console.log.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.log.calledWith('[1] 2020-08-05 13:22:43.134 namespace.loggerName - INFO - message', obj), 'Had other args');
    });  
  
    it('should log info by console.log whithout optional', () => {
        app.writeInfo({
            loggerName: 'loggerName',
            message: 'message'
        })

        // @ts-ignore
        assert.isTrue(console.log.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.log.calledWith('2020-08-05 13:22:43.134 loggerName - INFO - message'), 'Had other args');
    });  
  
    it('should log warning by console.warn', () => {
        const obj = {};

        app.writeWarning({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            obj
        })

        // @ts-ignore
        assert.isTrue(console.warn.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.warn.calledWith('[1] 2020-08-05 13:22:43.134 namespace.loggerName - WARN - message', obj), 'Had other args');
    });  
  
    it('should log warning by console.warn whithout optional', () => {
        app.writeWarning({
            loggerName: 'loggerName',
            message: 'message'
        })

        // @ts-ignore
        assert.isTrue(console.warn.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.warn.calledWith('2020-08-05 13:22:43.134 loggerName - WARN - message'), 'Had other args');
    });  
  
    it('should log error by console.error', () => {
        const obj = {};

        app.writeError({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            obj
        })

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.error.calledWith('[1] 2020-08-05 13:22:43.134 namespace.loggerName - ERROR - message', obj), 'Had other args');
    });  
  
    it('should log error by console.error whithout optional', () => {
        app.writeError({
            loggerName: 'loggerName',
            message: 'message'
        })

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.error.calledWith('2020-08-05 13:22:43.134 loggerName - ERROR - message'), 'Had other args');
    });  
  
    it('should log fatal by console.error', () => {
        const obj = {};

        app.writeFatal({
            id: '1',
            namespace: 'namespace',
            loggerName: 'loggerName',
            message: 'message',
            obj
        })

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.error.calledWith('[1] 2020-08-05 13:22:43.134 namespace.loggerName - FATAL - message', obj), 'Had other args');
    });  
  
    it('should log fatal by console.error whithout optional', () => {
        app.writeFatal({
            loggerName: 'loggerName',
            message: 'message'
        })

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(console.error.calledWith('2020-08-05 13:22:43.134 loggerName - FATAL - message'), 'Had other args');
    });  
  });