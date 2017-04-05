import {mediator} from "./mediator.js";

let store = {
  state: ''
};

mediator.subscribe("store", function (arg) {
  store.state = arg;
  console.log("store state: " + store.state);
});

export {store}