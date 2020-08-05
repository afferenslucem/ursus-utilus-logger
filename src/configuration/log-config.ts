import { ILoggerCofigaration } from "./i-logger-configuration";
import { LogLevel } from "../log-level";
import { IConfiguration, ILoggerAddress, ILoggerConfiguration } from "./i-configuration";

declare type Config = Array<IConfiguration>;


export class LogConfig {
    private configs = new Map<string, ILoggerCofigaration>();

    public constructor(config: Config) {
        this.readConfig(config);
    }

    private readConfig(config: Config): void {
        config.forEach(line => {
            const name = this.readLoggerName(line);
            const logger = this.readLoggerConfiguration(line);

            const key = name.filter(item => Boolean(item)).join('_');

            this.configs.set(key, logger);
        })
    }

    private readLoggerName(configuration: IConfiguration): [string | null, string] {
        if (configuration.name instanceof Object) {
            return [configuration.name.namespace, configuration.name.loggerName];
        } else if (typeof configuration.name == 'string'){
            return [null, configuration.name];
        } else {
            throw new Error('Unexpected type of logger name')
        }
    }

    private readLoggerConfiguration(configuration: IConfiguration): ILoggerConfiguration {
        if (configuration.logger instanceof Object) {
            return configuration.logger;
        } else if (typeof configuration.logger == 'number'){
            return {
                logLevel: configuration.logger
            };
        } else {
            throw new Error('Unexpected type of logger cobfiguration')
        }
    }
}