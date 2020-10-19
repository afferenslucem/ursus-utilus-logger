import { LogConfig, Config } from "../configuration/log-config";
import { ILoggerName, IConfiguration, ILoggerConfiguration } from "../configuration/i-configuration";
import { ILogger } from "../loggers/i-logger";
import { Logger } from "../loggers/logger";
import { LogAppender } from "../log-appenders/log-appender";
import { ProxyAppender } from "../log-appenders/proxy-appender";

export class LoggerFactory {
    private config: LogConfig;

    public constructor(config: Config, protected id?: string) {
        this.config = new LogConfig(config);
    }

    public getLogger(name: string | ILoggerName): ILogger {
        const config = this.getConfiguration(name);

        const fullname = this.getFullname(name);

        const appender = this.getAppender(config.appenders)

        return new Logger(
            appender,
            fullname.loggerName || 'unnamed',
            config.logLevel,
            config.id ?? this.id,
            fullname.namespace);
    }

    protected getConfiguration(name: string | ILoggerName): ILoggerConfiguration {
        const configuration = this.config.getConfiguration(name);
        const defaultConfiguration = this.config.getConfiguration('default');

        const result = Object.assign(defaultConfiguration, configuration);

        return result;
    }

    protected getFullname(name: string | ILoggerName): ILoggerName {
        // @ts-ignore
        return typeof name == 'string' ? {
            namespace: undefined,
            loggerName: name
        } : <ILoggerName>name;
    }

    protected getAppender(appenders: LogAppender[] | LogAppender | undefined): LogAppender {
        if (appenders == undefined) {
            throw Error("No appender found");
        } else if (Array.isArray(appenders)) {
            return new ProxyAppender(appenders);
        } else {
            return appenders;
        }
    }
}