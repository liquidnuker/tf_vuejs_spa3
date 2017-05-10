const removeParamColons = function(routeParam) {
  let replacer = routeParam.replace(/:/g, '');
  return replacer;
};
export {removeParamColons}