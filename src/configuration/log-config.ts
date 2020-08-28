import { IConfiguration, ILoggerConfiguration, ILoggerName as ILoggerName } from "./i-configuration";
import { LogLevel } from "../log-level";

export declare type Config = Array<IConfiguration>;

export const EMPTY_LOGGER_NAME = '__empty__';

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
            const name = this.readLoggerName(line.name);
            const logger = this.readLoggerConfiguration(line.logger);

            this.configs.set(name, logger);
        })
    }

    public readLoggerName(name: ILoggerName | string): string {
        if (typeof name == 'object') {
            return [name.namespace, name.loggerName || EMPTY_LOGGER_NAME].join('_');
        } else if (typeof name == 'string') {
            return name;
        } else {
            throw new Error('Unexpected type of logger name')
        }
    }

    public readLoggerConfiguration(configuration: ILoggerConfiguration | number): ILoggerConfiguration {
        if (typeof configuration == 'object') {
            return configuration;
        } else if (typeof configuration == 'number') {
            return {
                logLevel: configuration
            };
        } else {
            throw new Error('Unexpected type of logger cobfiguration')
        }
    }

    public getConfiguration(name: string | ILoggerName): ILoggerConfiguration {
        let loggerName = this.readLoggerName(name);
        let result = this.configs.get(loggerName);

        if (result) {
            return result;
        }

        if (typeof name == 'object') {
            result = this.findOnlyByNamespace(name.namespace);

            if (result) {
                return result;
            }
        }

        const $default = this.configs.get('default');

        // @ts-ignore
        return $default;
    }

    public findOnlyByNamespace(namespace: string): ILoggerConfiguration | undefined {
        const loggerName = this.readLoggerName({ namespace: namespace })
        return this.configs.get(loggerName);
    }
}