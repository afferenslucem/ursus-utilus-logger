import { LogAppender } from "./log-appender";

export class ConsoleAppender extends LogAppender {
    private _getDateFunc?: () => Date;

    public constructor() {
        super();
        this._getDateFunc = undefined;
    }

    protected append(message: string, obj?: any): void {
        if(obj) {
            console.log(message, obj)
        } else {
            console.log(message);
        }
    }

    protected appendWarning(message: string, obj?: any): void {
        if(obj) {
            console.warn(message, obj)
        } else {
            console.warn(message);
        }
    }

    protected appendError(message: string, obj?: any): void {
        if(obj) {
            console.error(message, obj)
        } else {
            console.error(message);
        }
    }

    protected appendFatal(message: string, obj?: any): void {
        if(obj) {
            console.error(message, obj)
        } else {
            console.error(message);
        }
    }

    protected getCurrentDate(): Date {
        if (!this._getDateFunc) {
            return super.getCurrentDate();
        }

        return this._getDateFunc();
    }

    public set getDateFunc(v: () => Date) {
        this._getDateFunc = v;
    }
}