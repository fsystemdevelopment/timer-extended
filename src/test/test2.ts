import { setTimer } from "../lib";

require("colors");

let message: string | undefined= undefined;

let timer= setTimer((str: string)=> { message= str; return "good"; }, 0, "ok");

console.assert(timer.hasExec===false);

setTimeout(()=> {

    console.assert(message === "ok");

    console.assert(timer.hasExec === true);
    console.assert(timer.hasBeenCleared === false);

    console.assert(timer.returnValue === "good");

    console.log("PASS".green);

},100);
