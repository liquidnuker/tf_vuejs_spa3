import {store} from "./store.js";
import {jsonLoader} from './jsonloader.js';

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


mediator.subscribe("loadAll", function () {
  const jsonUrl = "./src/js/ajax/bonsai.json";
  jsonLoader.getJSON(jsonUrl).then(function (response) {
    // store.state.message = response.bonsai;
    // vmA.loading = false;
    console.log(response.bonsai.length);
  }).then(function () {
    // showPages();
    console.log("done");
  });
});

export {mediator};