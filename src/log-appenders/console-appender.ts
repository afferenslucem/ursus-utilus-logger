import { LogAppender } from "./log-appender";

export class ConsoleAppender extends LogAppender {

    public constructor() {
        super();
    }

    protected append(message: string,  obj: any[] = []): void {
        if(obj.length > 0) {
            console.log(message, ...obj)
        } else {
            console.log(message);
        }
    }

    protected appendWarning(message: string,  obj: any[] = []): void {
        if(obj.length > 0) {
            console.warn(message, ...obj)
        } else {
            console.warn(message);
        }
    }

    protected appendError(message: string,  obj: any[] = []): void {
        if(obj.length > 0) {
            console.error(message, ...obj)
        } else {
            console.error(message);
        }
    }

    protected appendFatal(message: string,  obj: any[] = []): void {
        if(obj.length > 0) {
            console.error(message, ...obj)
        } else {
            console.error(message);
        }
    }
}