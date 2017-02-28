import { setTimeout } from "../lib/index";


require("colors");

let message: string | undefined= undefined;

let timer= setTimeout((str: string)=> { message= str; return "good"; }, 0, "ok");

console.assert(timer.hasExec===false);

setImmediate(()=> {

    console.assert(message === "ok");

    console.assert(timer.hasExec === true);
    console.assert(timer.hasBeenCleared === false);

    console.assert(timer.returnValue === "good");

    console.log("PASS".green);

});
