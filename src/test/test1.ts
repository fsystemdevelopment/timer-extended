import { setTimeout } from "../lib/index";


require("colors");


let timer= setTimeout((str: string)=> { return str; }, 1000, "ok");


console.assert(timer.hasBeenCleared===false);
console.assert(timer.hasExec===false);

console.assert(timer.runNow()==="ok");
console.log(timer.hasBeenCleared===true);

console.assert(timer.hasBeenCleared===true);
console.assert(timer.hasExec===true);

console.log("PASS".green);
