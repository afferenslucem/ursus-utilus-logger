import { LogConfig, EMPTY_LOGGER_NAME } from '../src/configuration/log-config';
import { LogLevel } from '../src/log-level';
import { assert } from 'chai';

describe('LogConfig', function () {
    let config: LogConfig = null;
    const $default = {
        logLevel: LogLevel.Warning
    };

    beforeEach(() => {
        config = new LogConfig([
            {
                name: {
                    namespace: 'namespace1',
                    loggerName: 'logger1'
                },
                logger: {
                    id: 'id',
                    logLevel: LogLevel.Fatal
                }
            },
            {
                name: {
                    namespace: 'namespace2',
                },
                logger: {
                    id: 'id2',
                    logLevel: LogLevel.Warning
                }
            },
            {
                name: 'logger2',
                logger: LogLevel.Error
            }
        ]);
    })

    it('should return default configuration for undefined configuration', () => {
        const conf = config.getConfiguration('myPrettyLogger');

        assert.deepEqual(conf, $default);
    });

    it('should override default configuration', () => {
        config = new LogConfig([{
            name: 'default',
            logger: LogLevel.Info
        }])
        const conf = config.getConfiguration('myPrettyLogger');

        assert.deepEqual(conf, {
            logLevel: LogLevel.Info
        });
    });

    it('should configuration by shortname', () => {
        const conf = config.getConfiguration('logger2');

        assert.deepEqual(conf, {
            logLevel: LogLevel.Error
        });
    });

    it('should get configuration by fullname', () => {
        const conf = config.getConfiguration({
            namespace: 'namespace1',
            loggerName: 'logger1'
        });

        assert.deepEqual(conf, {
            id: 'id',
            logLevel: LogLevel.Fatal
        });
    });

    it('should get configuration by namespace', () => {
        const conf = config.getConfiguration({
            namespace: 'namespace2',
            loggerName: 'logger1'
        });

        assert.deepEqual(conf, {
            id: 'id2',
            logLevel: LogLevel.Warning
        });
    });
});

describe('LogConfig reading logger name', function () {
    let config: LogConfig = null;

    beforeEach(() => {
        config = new LogConfig([]);
    })

    it('should read full obj', () => {
        const name = config.readLoggerName({
            namespace: 'namespace',
            loggerName: 'logger'
        });

        assert.deepEqual(name, 'namespace_logger');
    });

    it('should read only loggerName', () => {
        const name = config.readLoggerName('logger');

        assert.deepEqual(name, 'logger');
    });

    it('should read only namespace', () => {
        const name = config.readLoggerName({
            namespace: 'namespace'
        });

        assert.deepEqual(name, ['namespace', EMPTY_LOGGER_NAME].join('_'));
    });
});

describe('LogConfig reading configuration', function () {
    let config: LogConfig = null;

    beforeEach(() => {
        config = new LogConfig([]);
    })

    it('should read full obj', () => {
        const log = config.readLoggerConfiguration({
            logLevel: LogLevel.All,
            id: 'q'
        });

        assert.deepEqual(log, {
            logLevel: LogLevel.All,
            id: 'q'
        });
    });

    it('should read only logLevel', () => {
        const log = config.readLoggerConfiguration(LogLevel.All);

        assert.deepEqual(log, {
            logLevel: LogLevel.All,
        });
    });
});