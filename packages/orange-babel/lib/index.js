"use strict";

require("core-js/modules/es.array.includes");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

var array = [1, 2, 3, 4, 5, 6];
array.includes(function (item) {
  return item > 2;
});
new Promise();