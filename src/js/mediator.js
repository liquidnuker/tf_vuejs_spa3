import {store} from "./store.js";

const Mediator = require("./vendor/mediator.min.js");
const mediator = new Mediator();

// store state setter
// ======================================================/
mediator.subscribe("store", function (arg) {
  
});

// jsonloader
// ======================================================/
mediator.subscribe("jsonLoader", function (arg) {
  
});


mediator.subscribe("single", function () {
  console.log("single no param");
});

export {mediator};

