import { ILogData } from "../i-log-data";

export interface ILogAppender {
    writeDebug(data: ILogData): void; 
    writeInfo(data: ILogData): void; 
    writeWarning(data: ILogData): void; 
    writeError(data: ILogData): void; 
    writeFatal(data: ILogData): void; 
}