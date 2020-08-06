import {ConsoleLoggerFactory} from '../src/console-logger-factory'
import { LogLevel } from '../src/log-level';
import { assert } from 'chai';

describe('ConsoleLoggerFactory', function () {
    beforeEach(function() {
      this.sinon.stub(console, 'log');
      this.sinon.stub(console, 'warn');
      this.sinon.stub(console, 'error');
    });
  
    it('should log debug by console.log', () => {        
        const factory = new ConsoleLoggerFactory([
            {
                name: 'logger1',
                logger: LogLevel.Error
            }
        ]);

        // @ts-ignore
        factory.appender.getDateFunc = () => new Date('2020-08-05 13:22:43.134');

        const logger = factory.getLogger('logger1');

        logger.warn('message');
        logger.error('message');

        // @ts-ignore
        assert.isTrue(console.warn.notCalled, 'Was called');

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t was called');

        // @ts-ignore
        assert.isTrue(console.error.calledWith('2020-08-05 13:22:43.134 logger1 - ERROR - message'), 'Had other args');
    });  
  
    it('should log warn by console.warn', () => {        
        const factory = new ConsoleLoggerFactory([
            {
                name: 'logger1',
                logger: LogLevel.Error
            }
        ], '1');

        // @ts-ignore
        factory.appender.getDateFunc = () => new Date('2020-08-05 13:22:43.134');

        const logger = factory.getLogger({
            namespace: 'namespace1',
            loggerName: 'logger2'
        });

        logger.error('message');
        logger.warn('message');
        logger.debug('message');

        // @ts-ignore
        assert.isTrue(console.log.notCalled, 'Was called');

        // @ts-ignore
        assert.isTrue(console.warn.calledOnce, 'Didn\'t was called');

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t was called');

        // @ts-ignore
        assert.isTrue(console.warn.calledWith('[1] 2020-08-05 13:22:43.134 namespace1.logger2 - WARN - message'), 'Had other args');
        
        // @ts-ignore
        assert.isTrue(console.error.calledWith('[1] 2020-08-05 13:22:43.134 namespace1.logger2 - ERROR - message'), 'Had other args');
    });  
    
    it('logger\'s id should overwrite factory\'s id', () => {        
        const factory = new ConsoleLoggerFactory([
            {
                name: 'logger1',
                logger: {
                    logLevel: LogLevel.Error,
                    id: '2'
                }
            }
        ], '1');

        // @ts-ignore
        factory.appender.getDateFunc = () => new Date('2020-08-05 13:22:43.134');

        const logger = factory.getLogger('logger1');

        logger.error('message');

        // @ts-ignore
        assert.isTrue(console.error.calledOnce, 'Didn\'t was called');

        // @ts-ignore
        assert.isTrue(console.error.calledWith('[2] 2020-08-05 13:22:43.134 logger1 - ERROR - message'), 'Had other args');
    });  
});