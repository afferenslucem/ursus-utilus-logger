import { LogLevel } from "../log-level";
import { LogAppender } from "../log-appenders/log-appender";

export interface ILoggerName {
    namespace: string;
    loggerName?: string; 
}

export interface ILoggerConfiguration {
    logLevel: LogLevel,
    id?: string,
    appenders?: LogAppender[] | LogAppender,
}

export interface IConfiguration {
    name: ILoggerName | string,
    logger: ILoggerConfiguration | LogLevel
}