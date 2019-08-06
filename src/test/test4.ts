import { setTimer } from "../lib";

let message: string | undefined= undefined;

let timer= setTimer((str: string)=> { message= str; }, 1000);

console.assert(timer.hasExec===false);

setTimeout(()=> {

    timer.runNow("ok");

    console.assert(timer.hasExec === true);
    console.assert(timer.hasBeenCleared === true);


    console.log("PASS 4".green);

},100);
