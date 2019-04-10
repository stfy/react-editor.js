(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "./editor"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("./editor"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.editor);
    global.index = mod.exports;
  }
})(this, function (_exports, _editor) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function get() {
      return _editor.default;
    }
  });
  _editor = _interopRequireDefault(_editor);
});