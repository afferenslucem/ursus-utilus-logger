export interface ILogger {    /**
    * Method for append debug message
    *
    * @param message Log message
    * @param data Any log data
    */
    debug(message: string, ...data: any[]): void;
    /**
     * Method for append info message
     *
     * @param message Log message
     * @param data Any log data
     */
    info(message: string, ...data: any[]): void;
    /**
     * Method for warn debug message
     *
     * @param message Log message
     * @param data Any log data
     */
    warn(message: string, ...data: any[]): void;
    /**
     * Method for append error message
     *
     * @param message Log message
     * @param data Any log data
     */
    error(message: string, ...data: any[]): void;
    /**
     * Method for append fatal message
     *
     * @param message Log message
     * @param data Any log data
     */
    fatal(message: string, ...data: any[]): void;
}