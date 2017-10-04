import { setTimer } from "../lib";

require("colors");

let message: string | undefined= undefined;

let timer= setTimer((str: string)=> { message= str; return "good"; }, 10);

console.assert(timer.hasExec===false);

setTimeout(()=> {

    console.assert(message === undefined);

    console.assert(timer.hasExec === true);
    console.assert(timer.hasBeenCleared === false);

    console.assert(timer.returnValue === "good");

    console.log("PASS".green);

},100);
