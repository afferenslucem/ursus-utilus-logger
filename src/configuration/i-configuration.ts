import { LogLevel } from "../log-level";

export interface ILoggerName {
    namespace: string;
    loggerName: string; 
}

export interface ILoggerConfiguration {
    logLevel: LogLevel,
    id?: string
}

export interface IConfiguration {
    name: ILoggerName | string,
    logger: ILoggerConfiguration | LogLevel
}