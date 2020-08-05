export interface ILogger {    /**
    * Method for append debug message
    *
    * @param message Log message
    * @param data Any log data
    * @param id String which can be used for identify client, logger or etc. Override logger prop
    */
    debug(message: string, data?: any, id?: string): void;
    /**
     * Method for append info message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    info(message: string, data?: any, id?: string): void;
    /**
     * Method for warn debug message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    warn(message: string, data?: any, id?: string): void;
    /**
     * Method for append error message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    error(message: string, data?: any, id?: string): void;
    /**
     * Method for append fatal message
     *
     * @param message Log message
     * @param data Any log data
     * @param id String which can be used for identify client, logger or etc. Override logger prop
     */
    fatal(message: string, data?: any, id?: string): void;
}