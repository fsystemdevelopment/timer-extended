import { Timers } from "../lib";

let timers= new Timers();

let success= 0;

let t1= timers.add(message => {

    console.assert("foo bar" === message, "m1");

    success++;

    return "ok";

}, 2000, "foo bar");

console.assert(timers.values.size === 1, "m2");

console.assert(t1.runNow() === "ok", "m3");

console.assert(timers.values.size === 0, "m4");

let t2= timers.add(()=> console.assert(false), 0);

t2.clear();

console.assert(timers.values.size === 0);

timers.add(()=> console.assert(false, "m5"), 10);
timers.add(()=> console.assert(false, "m6"), 200);
timers.add(()=> console.assert(false, "m7"), 35);

console.assert(timers.values.size === 3, "m8");

timers.clearAll();

console.assert(timers.values.size === 0, "m9");

timers.add(()=> { success++ }, 10);
timers.add(()=> { success++ }, 10);
timers.add(()=> { success++ }, 10);

setTimeout(()=> {

    console.assert(success === 4 , "m10");

    console.log("PASS 6".green);

}, 2000);
