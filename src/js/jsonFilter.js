import {store} from "./store.js";
import {filter} from "lodash";

const jsonFilter = {
  filter: (speciesToFilter) => {
    return new Promise(function (resolve, reject) {
      // $("#paginator").jPages("destroy");

      store.filteredItems = filter(store.allItems, {
        species: speciesToFilter
      });

      resolve(store.state);
      // reject(Error("error"));

    }).then(function (resolved) {
      // success
      console.log("resolved"); 
      return store.state;
      
    }, function (err) {
      console.log(err); // error
    });
  },
  filterId: (idToFilter) => {
    store.state.filteredId = filter(store.state, {
      id: idToFilter
    });
    console.log(store.state.filteredId);
  }
};

export {jsonFilter};