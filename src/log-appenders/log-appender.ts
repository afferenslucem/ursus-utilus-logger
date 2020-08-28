import { ILogAppender } from "./i-log-appender";
import { ILogData } from "../i-log-data";
import moment from 'moment';

export abstract class LogAppender implements ILogAppender {

    /**
     * Writes debug message
     * @param data Logging data
     */
    writeDebug(data: ILogData): void {
        const formatted = this.formatMessage(data, 'DEBUG');

        this.appendDebug(formatted, data.objects, data.id)
    }
    /**
     * Writes info message
     * @param data Logging data
     */
    writeInfo(data: ILogData): void {
        const formatted = this.formatMessage(data, 'INFO');

        this.appendInfo(formatted, data.objects, data.id)
    }
    /**
     * Writes warning message
     * @param data Logging data
     */
    writeWarning(data: ILogData): void {
        const formatted = this.formatMessage(data, 'WARN');

        this.appendWarning(formatted, data.objects, data.id)
    }
    /**
     * Writes error message
     * @param data Logging data
     */
    writeError(data: ILogData): void {
        const formatted = this.formatMessage(data, 'ERROR');

        this.appendError(formatted, data.objects, data.id)
    }
    /**
     * Writes fatal message
     * @param data Logging data
     */
    writeFatal(data: ILogData): void {
        const formatted = this.formatMessage(data, 'FATAL');

        this.appendFatal(formatted, data.objects, data.id)
    }

    /**
     * Formats log data to message
     * @protected
     * @param data Logging data
     * @param logLevelName Name of log level
     * @returns message which will appended
     */
    protected formatMessage(data: ILogData, logLevelName: string): string {
        const id = data.id ? `[${data.id}] ` : '';

        const namespace = data.namespace ? (data.namespace + '.') : '';

        const date = moment(this.getCurrentDate()).format('YYYY-MM-DD HH:mm:ss.SSS')
        
        return id + `${date} ${namespace}${data.loggerName} - ${logLevelName} - ${data.message}`;
    }

    /**
     * Returns log datetime
     * @protected
     * @returns Log datetime
     */
    protected getCurrentDate(): Date {
        return new Date();
    }

    /**
     * Debug append method
     * @protected
     * @virtual
     */
    protected appendDebug(message: string, obj: any[], id?: string): void {
        this.append(message, obj, id);
    }
    /**
     * Info append method
     * @protected
     * @virtual
     */
    protected appendInfo(message: string, obj: any[], id?: string): void {
        this.append(message, obj, id);
    }
    /**
     * Warning append method
     * @protected
     * @virtual
     */
    protected appendWarning(message: string, obj: any[], id?: string): void {
        this.append(message, obj, id);
    }
    /**
     * Error append method
     * @protected
     * @virtual
     */
    protected appendError(message: string, obj: any[], id?: string): void {
        this.append(message, obj, id);
    }
    /**
     * Fatal append method
     * @protected
     * @virtual
     */
    protected appendFatal(message: string, obj: any[], id?: string): void {
        this.append(message, obj, id);
    }

    /**
     * Default append method. It's use for all levels if they doen't overrided
     * @protected
     * @abstract
     */
    protected abstract append(message: string, obj: any[], id?: string): void;
}