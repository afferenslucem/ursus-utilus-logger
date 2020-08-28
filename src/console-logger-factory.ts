import { LogConfig, Config } from "./configuration/log-config";
import { ILoggerName } from "./configuration/i-configuration";
import { ILogger } from "./loggers/i-logger";
import { ConsoleAppender } from "./log-appenders/console-appender";
import { Logger } from "./loggers/logger";

export class ConsoleLoggerFactory {
    private config: LogConfig;
    private readonly appender = new ConsoleAppender();

    /**
     * @constructor
     * @param config loggers configuration
     * @param id factory id. Will uses at log's id for identify client, logger or log
     */
    public constructor(config: Config, private id?: string) {
        this.config = new LogConfig(config);
    }

    /**
     * Creates logger
     * @param name logger name
     * @returns ILogger instance
     */
    public getLogger(name: string | ILoggerName) : ILogger {
        const configuration = this.config.getConfiguration(name);

        const fullname = typeof name == 'string' ? {
            namespace: undefined,
            loggerName: name
        } : <ILoggerName> name;

        return new Logger(this.appender, 
            fullname.loggerName, 
            configuration.logLevel, 
            configuration.id ?? this.id, 
            fullname.namespace);
    }
}