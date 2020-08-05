import { LogLevel } from "../log-level";

export interface ILoggerAddress {
    namespace: string;
    loggerName: string; 
}

export interface ILoggerConfiguration {
    logLevel: LogLevel,
    id?: string
}

export interface IConfiguration {
    name: ILoggerAddress | string,
    logger: ILoggerConfiguration | LogLevel
}