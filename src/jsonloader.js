import {mediator} from "./mediator.js";
// import {store} from "./store.js";

// const jsonLoader = {
//   url: ""
// };
// send to main store when json is fetched

mediator.subscribe("jsonLoader", function (arg) {
  console.log("mediator jsonloader url: " + arg);
  mediator.publish("store", arg);  
});