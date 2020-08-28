import { IConfiguration, ILoggerConfiguration, ILoggerName as ILoggerName } from "./i-configuration";
import { LogLevel } from "../log-level";

export declare type Config = Array<IConfiguration>;

export class LogConfig {
    private configs = new Map<string, ILoggerConfiguration>();

    public constructor(config: Config = []) {
        this.pushDefault();
        this.readConfig(config);
    }

    private pushDefault(): void {
        this.configs.set('default', {
            logLevel: LogLevel.Warning
        })
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

    public getConfiguration(name: string | ILoggerName): ILoggerConfiguration {
        const logger = this.convertNameToString(name);

        const result = this.configs.get(logger);

        if (result) {
            return result;
        } else {
            const def = this.configs.get('default');

            // @ts-ignore
            return def;
        }
    }

    private convertNameToString(name: string | ILoggerName): string {
        if(typeof name == 'string') {
            return name;
        } else {
            return `${name.namespace}_${name.loggerName}`;
        }
    }
}