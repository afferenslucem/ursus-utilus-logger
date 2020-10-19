import { LogConfig, Config } from "../configuration/log-config";
import { ILoggerName } from "../configuration/i-configuration";
import { ILogger } from "../loggers/i-logger";
import { ConsoleAppender } from "../log-appenders/console-appender";
import { Logger } from "../loggers/logger";
import { LoggerFactory } from "./logger-factory";

export class ConsoleLoggerFactory extends LoggerFactory {
    private readonly appender = new ConsoleAppender()

    public constructor(config: Config, id?: string) {
        super(config, id);
    }

    public getLogger(name: string | ILoggerName): ILogger {
        const configuration = this.getConfiguration(name)

        const fullname = this.getFullname(name);

        return new Logger(this.appender,
            fullname.loggerName || 'unnamed',
            configuration.logLevel,
            configuration.id ?? this.id,
            fullname.namespace);
    }
}