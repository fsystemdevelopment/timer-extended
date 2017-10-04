import { Timer, setTimer } from "./Timer";

export class Timers {

    private garbageCollector(){

        for( let timer of this._values ){

            if( timer.hasExec || timer.hasBeenCleared ){

                this._values.delete(timer);

            }

        }

    }

    private readonly _values= new Set<Timer<any>>();

    public get values() {

        this.garbageCollector();

        return this._values;

    }

    public readonly add: typeof setTimer= (...inputs)=>{

        let timer= setTimer.apply(null, inputs);

        this.values.add(timer);

        return timer;

    }


    public clearAll(): void {

        for( let timer of this.values){

            timer.clear();

        }

    }

}
