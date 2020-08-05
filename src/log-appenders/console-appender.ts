import { LogAppender } from "./log-appender";

export class ConsoleAppender extends LogAppender {
    private _getDateFunc: () => Date | undefined;

    public constructor() {
        super();
        this._getDateFunc = undefined;
    }

    protected append(message: string, obj?: any): void {
        console.log(message, obj)
    }

    protected appendWarning(message: string, obj?: any): void {
        console.warn(message, obj);
    }

    protected appendError(message: string, obj?: any): void {
        console.error(message, obj);
    }

    protected appendFatal(message: string, obj?: any): void {
        console.error(message, obj);
    }

    protected getCurrentDate(): Date {
        return this._getDateFunc() ?? super.getCurrentDate();
    }

    public set getDateFunc(v: () => Date) {
        this._getDateFunc = v;
    }
}