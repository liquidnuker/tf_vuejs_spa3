import {mediator} from "./mediator.js";

mediator.subscribe("store", function (arg) {
  this.state = arg;
  console.log("store state " + arg);
});