import {store} from "./store.js";

const Mediator = require("./vendor/mediator.min.js");
const mediator = new Mediator();

// store state setter
// ======================================================/
mediator.subscribe("store", function (arg) {
  store.state = arg;
  console.log("store state: " + store.state);
});

// jsonloader
// ======================================================/
mediator.subscribe("jsonLoader", function (arg) {
  const jsonUrl = "./js/ajax/bonsai.json";

  console.log("mediator jsonloader url: " + arg);
  // inject to store after loading
  mediator.publish("store", arg);  
});

export {mediator};

