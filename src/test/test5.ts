import { setTimer } from "../lib";


require("colors");

let message: string | undefined= undefined;

let timer= setTimer((str1: string, str2:string)=> { message= str1+str2; }, 1000, "o", "k");

let window= 100;

setTimeout(()=> {

    console.assert(timer.hasExec === false);
    console.assert(timer.hasBeenCleared === false);

    let expectRemindingMs= 500;

    //console.log(timer.remindingMs, expectRemindingMs);
    console.assert( expectRemindingMs - window < timer.remindingMs );
    console.assert( timer.remindingMs < expectRemindingMs + window);


    timer.resetDelay();

    expectRemindingMs= 1000;

    //console.log(timer.remindingMs, expectRemindingMs);
    console.assert( expectRemindingMs - window < timer.remindingMs );
    console.assert( timer.remindingMs < expectRemindingMs + window);


    console.assert(timer.hasExec === false);
    console.assert(timer.hasBeenCleared === false);

},500);

setTimeout(()=> {


    let expectRemindingMs= 300;

    //console.log(timer.remindingMs, expectRemindingMs);
    console.assert( expectRemindingMs - window < timer.remindingMs );
    console.assert( timer.remindingMs < expectRemindingMs + window);


    console.assert(timer.hasExec === false);
    console.assert(timer.hasBeenCleared === false);

}, 1200); 


setTimeout(()=> {

    let expectRemindingMs= -100;

    //console.log(timer.remindingMs, expectRemindingMs);
    console.assert( expectRemindingMs - window < timer.remindingMs );
    console.assert( timer.remindingMs < expectRemindingMs + window);


    console.assert(timer.hasExec === true);
    console.assert(timer.hasBeenCleared === false);

    console.assert(message === "ok");

    console.log("PASS".green);

}, 1600); 


