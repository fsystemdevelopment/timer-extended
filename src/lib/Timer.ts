export class Timer<T> {

    public hasBeenCleared= false;
    private readonly timer: NodeJS.Timer;

    public get hasExec(): boolean {
        return !(this._returnValue === undefined);
    }

    private _returnValue: [T] | undefined= undefined;

    public get returnValue(): T | undefined {
        if( !this._returnValue ) return undefined;
        else return this._returnValue[0];
    }

    public constructor(
        public readonly callback: (...inputs: any[])=> T,
        public readonly ms: number,
        private readonly args: any[]
    ){

        this.timer= setTimeout(()=>{
            this._returnValue= [ callback.apply(null,args) ];
        }, ms);

    }

    public runNow(...args: any[]): T{

        if( this.hasExec ) throw new Error("Timer has exec already");
        if( this.hasBeenCleared ) throw new Error("Timer has been cleared");

        this.clear();

        this._returnValue = [this.callback.apply(null, (args.length)?args:this.args)];

        return this._returnValue[0];

    }

    public clear(): void {
        if (this.hasExec) return;

        this.hasBeenCleared = true;
        clearTimeout(this.timer);
    }


}



export function setTimeoutExt<T>(callback: (...inputs: any[]) => T, ms: number, ...args: any[]): Timer<T> {

    return new Timer(callback, ms, args);

}
