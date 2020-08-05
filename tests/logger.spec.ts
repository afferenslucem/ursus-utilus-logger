import { ConsoleAppender } from "../src/log-appenders/console-appender";
import { Logger } from "../src/loggers/logger";
import { ILogData } from "../src/i-log-data";
import 'mocha-sinon';
import { assert } from 'chai';

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger', '1', 'namespace');

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
        const logger = new Logger(appender, 'logger');

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
        const logger = new Logger(appender, 'logger');

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
});