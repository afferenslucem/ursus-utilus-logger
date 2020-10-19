import { LogAppender } from "./log-appender";
import { ILogMessage } from "../i-log-message";

export class AccumulatorAppender extends LogAppender {
    private _logs: ILogMessage[] = [];

    protected append(message: string, objects: any[], id?: string | undefined): void {
        this._logs.push({
            message,
            objects,
            id
        })
    }

    public get logs() {
        return this._logs;
    }
}