import { setTimer } from "../lib";

let message: string | undefined= undefined;

let timer= setTimer((str: string)=> { message= str; return "good"; }, 0, "ok");

console.assert(timer.hasExec===false);

setTimeout(()=> {

    console.assert(message === "ok");

    console.assert(timer.hasExec === true);
    console.assert(timer.hasBeenCleared === false);

    console.assert(timer.returnValue === "good");

    console.log("PASS 2".green);

},100);
