export interface ILogData {
    /**
     * Log id. String what can identify message, logger, or client
     */
    id?: string;
    /**
     * Log message
     */
    message: string;
    /**
     * Additional log data
     */
    objects: any[];
    /**
     * Logger namespace
     */
    namespace?: string;
    /**
     * Loger name
     */
    loggerName: string;
}