export declare class Timer<T> {
    private readonly callback;
    private readonly ms;
    private readonly args;
    hasBeenCleared: boolean;
    private timer;
    private startTime;
    readonly remindingMs: number;
    readonly hasExec: boolean;
    private _returnValue;
    readonly returnValue: T | undefined;
    constructor(callback: (...inputs: any[]) => T, ms: number, args: any[]);
    runNow(...args: any[]): T;
    clear(): void;
    resetDelay(): void;
}
export declare function setTimeoutExt<T>(callback: (...inputs: any[]) => T, ms: number, ...args: any[]): Timer<T>;
