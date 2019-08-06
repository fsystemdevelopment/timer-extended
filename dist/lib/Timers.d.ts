import { Timer, setTimer } from "./Timer";
export declare class Timers {
    private garbageCollector;
    private readonly _values;
    readonly values: Set<Timer<any>>;
    readonly add: typeof setTimer;
    clearAll(): void;
}
