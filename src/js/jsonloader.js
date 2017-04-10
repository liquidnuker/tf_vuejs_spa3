const jsonLoader = {
  start: (url) => {
    return new Promise(function (resolve, reject) {
      let req = new XMLHttpRequest();
      req.open("GET", url);

      req.onload = () => {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          reject(Error(req.statusText));
        }
      };

      req.onerror = () => {
        reject(Error("error fetching json"));
      };

      req.send();
    });
  },
  getJSON: (url) => {
    return jsonLoader.start(url).then(JSON.parse);
  }
};

export {jsonLoader};