import { ConsoleAppender } from "../src/log-appenders/console-appender";
import { Logger } from "../src/loggers/logger";
import { ILogData } from "../src/i-log-data";
import 'mocha-sinon';
import { assert } from 'chai';
import { LogLevel } from "../src/log-level";

describe('Logger', function () {
    let appender = null;

    beforeEach(function() {
      appender = new ConsoleAppender();
      this.sinon.stub(appender, 'writeDebug');
      this.sinon.stub(appender, 'writeInfo');
      this.sinon.stub(appender, 'writeWarning');
      this.sinon.stub(appender, 'writeError');
      this.sinon.stub(appender, 'writeFatal');
    });
  
    it('should append debug correct with all constructor params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.debug('message', obj);

        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '1',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    });
  
    it('should append debug correct with all constructor and write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.debug('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    }); 
  
    it('should append debug correct with all write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.debug('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: undefined,
            obj: obj
        } as ILogData), 'Had other args');
    });  
  
    it('should append debug correct with only required params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.debug('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: undefined,
            namespace: undefined,
            obj: undefined
        } as ILogData), 'Had other args');
    });
  
    it('should append info correct with all constructor params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.info('message', obj);

        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '1',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    });
  
    it('should append info correct with all constructor and write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.info('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    }); 
  
    it('should append info correct with all write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.info('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: undefined,
            obj: obj
        } as ILogData), 'Had other args');
    });  
  
    it('should append info correct with only required params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.info('message');

        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: undefined,
            namespace: undefined,
            obj: undefined
        } as ILogData), 'Had other args');
    });  
      
    it('should append warn correct with all constructor params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.warn('message', obj);

        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '1',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    });
  
    it('should append warn correct with all constructor and write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.warn('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    }); 
  
    it('should append warn correct with all write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.warn('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: undefined,
            obj: obj
        } as ILogData), 'Had other args');
    });  
  
    it('should append warn correct with only required params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.warn('message');

        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: undefined,
            namespace: undefined,
            obj: undefined
        } as ILogData), 'Had other args');
    });  
      
    it('should append error correct with all constructor params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.error('message', obj);

        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '1',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    });
  
    it('should append error correct with all constructor and write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.error('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    }); 
  
    it('should append error correct with all write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.error('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: undefined,
            obj: obj
        } as ILogData), 'Had other args');
    });  
  
    it('should append error correct with only required params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.error('message');

        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: undefined,
            namespace: undefined,
            obj: undefined
        } as ILogData), 'Had other args');
    }); 
      
    it('should append fatal correct with all constructor params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.fatal('message', obj);

        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '1',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    });
  
    it('should append fatal correct with all constructor and write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All, '1', 'namespace');

        const obj = {};

        logger.fatal('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: 'namespace',
            obj: obj
        } as ILogData), 'Had other args');
    }); 
  
    it('should append fatal correct with all write params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.fatal('message', obj, '2');

        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: '2',
            namespace: undefined,
            obj: obj
        } as ILogData), 'Had other args');
    });  
  
    it('should append fatal correct with only required params', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        const obj = {};

        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledWith({
            loggerName: 'logger',
            message: 'message',
            id: undefined,
            namespace: undefined,
            obj: undefined
        } as ILogData), 'Had other args');
    }); 
  
    it('should append all logs for all level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.All);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
    });  
  
    it('should append all logs for debug level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.Debug);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
    });  
  
    it('should append all logs upper debug for info level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.Info);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
    });  
  
    it('should append all logs upper info for warning level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.Warning);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
    });  
  
    it('should append all logs upper warning for error level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.Error);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeError.calledOnce, 'Didn\'t called once');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
    }); 
  
    it('should append all logs upper error for fatal level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.Fatal);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeError.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.calledOnce, 'Didn\'t called once');
    }); 
  
    it('should not append all logs upper for disable level', () => {
        const logger = new Logger(appender, 'logger', LogLevel.Disable);

        logger.debug('message');
        logger.info('message');
        logger.warn('message');
        logger.error('message');
        logger.fatal('message');

        // @ts-ignore
        assert.isTrue(appender.writeDebug.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeInfo.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeWarning.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeError.notCalled, 'Was called');
        // @ts-ignore
        assert.isTrue(appender.writeFatal.notCalled, 'Was called');
    });  
});