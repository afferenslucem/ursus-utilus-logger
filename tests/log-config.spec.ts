import {LogConfig} from '../src/configuration/log-config';
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

    it('should configuration by fullname', () => {
        const conf = config.getConfiguration({
            namespace: 'namespace1',
            loggerName: 'logger1'
        });

        assert.deepEqual(conf, {
            id: 'id',
            logLevel: LogLevel.Fatal
        });
    });
});