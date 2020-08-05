import { ILogger } from "./i-logger";
import { ILogAppender } from "../log-appenders/i-log-appender";
import { ILogData } from "../i-log-data";

export class Logger implements ILogger {
    public constructor(private appender: ILogAppender, private name: string, private id?: string, private namespace?: string){}

    /**
     * Method for append debug message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    debug(message: string, data?: any, id?: string | undefined): void {
        const log = this.getLogData(message, data, id);
        this.appender.writeDebug(log);
    }
    /**
     * Method for append info message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    info(message: string, data?: any, id?: string | undefined): void {
        const log = this.getLogData(message, data, id);
        this.appender.writeInfo(log);
    }
    /**
     * Method for warn debug message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    warn(message: string, data?: any, id?: string | undefined): void {
        const log = this.getLogData(message, data, id);
        this.appender.writeWarning(log);
    }
    /**
     * Method for append error message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    error(message: string, data?: any, id?: string | undefined): void {
        const log = this.getLogData(message, data, id);
        this.appender.writeError(log);
    }
    /**
     * Method for append fatal message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    fatal(message: string, data?: any, id?: string | undefined): void {
        const log = this.getLogData(message, data, id);
        this.appender.writeFatal(log);
    }

    /**
     * Method for accumulating log object
     * @private
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     * 
     * @returns {ILogData} log object
     */
    private getLogData(message: string, data?: any, id?: string): ILogData {
        return {
            loggerName: this.name,
            message: message,
            id: id ?? this.id,
            namespace: this.namespace,
            obj: data
        }
    }
}