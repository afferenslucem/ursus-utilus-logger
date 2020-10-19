import { LogAppender } from "./log-appender";
import { ILogData } from "../i-log-data";

export class ProxyAppender extends LogAppender {
    public constructor(private appenders: LogAppender[]) {
        super();
    }

    protected append(message: string, obj: any[], id?: string): void {
        throw new Error("Method not implemented.");
    }
    
    writeDebug(data: ILogData): void {
        this.appenders.forEach(appender => appender.writeDebug(data));
    }
    
    writeInfo(data: ILogData): void {
        this.appenders.forEach(appender => appender.writeInfo(data));
    }
    
    writeWarning(data: ILogData): void {
        this.appenders.forEach(appender => appender.writeWarning(data));
    }
    
    writeError(data: ILogData): void {
        this.appenders.forEach(appender => appender.writeError(data));
    }
    
    writeFatal(data: ILogData): void {
        this.appenders.forEach(appender => appender.writeFatal(data));
    }
}