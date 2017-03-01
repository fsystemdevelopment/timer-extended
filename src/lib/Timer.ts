export class Timer<T> {

    public hasBeenCleared= false;
    private timer: NodeJS.Timer;

    private startTime: number;

    public get remindingMs(): number {
        return this.ms - (Date.now() - this.startTime);
    }

    public get hasExec(): boolean {
        return !(this._returnValue === undefined);
    }

    private _returnValue: [T] | undefined = undefined;

    public get returnValue(): T | undefined {
        if (!this._returnValue) return undefined;
        else return this._returnValue[0];
    }

    public constructor(
        private readonly callback: (...inputs: any[]) => T,
        private readonly ms: number,
        private readonly args: any[]
    ) {

        this.startTime= Date.now();
        this.timer = setTimeout(
            () => this._returnValue = [callback.apply(null, args)], 
            ms
        );

    }

    public runNow(...args: any[]): T {

        if (this.hasExec) throw new Error("Timer has exec already");
        if (this.hasBeenCleared) throw new Error("Timer has been cleared");

        this.clear();

        this._returnValue = [this.callback.apply(null, (args.length) ? args : this.args)];

        return this._returnValue[0];

    }

    public clear(): void {
        if (this.hasExec) return;

        this.hasBeenCleared = true;
        clearTimeout(this.timer);
    }

    public resetDelay(): void {

        if (this.hasExec) throw new Error("Timer has exec already");
        if (this.hasBeenCleared) throw new Error("Timer has been cleared");

        clearTimeout(this.timer);

        this.startTime= Date.now();
        this.timer = setTimeout(
            () => this._returnValue = [this.callback.apply(null, this.args)],
            this.ms
        );

    }


}

export function setTimeoutExt<T>(callback: (...inputs: any[]) => T, ms: number, ...args: any[]): Timer<T> {

    return new Timer(callback, ms, args);

}
