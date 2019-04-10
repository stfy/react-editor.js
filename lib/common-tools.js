(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@editorjs/header", "@editorjs/list", "@editorjs/inline-code", "@editorjs/image", "@editorjs/embed", "@editorjs/quote", "@editorjs/marker", "@editorjs/code", "@editorjs/link", "@editorjs/delimiter", "@editorjs/raw", "@editorjs/table", "@editorjs/warning", "@editorjs/paragraph", "@editorjs/checklist"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@editorjs/header"), require("@editorjs/list"), require("@editorjs/inline-code"), require("@editorjs/image"), require("@editorjs/embed"), require("@editorjs/quote"), require("@editorjs/marker"), require("@editorjs/code"), require("@editorjs/link"), require("@editorjs/delimiter"), require("@editorjs/raw"), require("@editorjs/table"), require("@editorjs/warning"), require("@editorjs/paragraph"), require("@editorjs/checklist"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.header, global.list, global.inlineCode, global.image, global.embed, global.quote, global.marker, global.code, global.link, global.delimiter, global.raw, global.table, global.warning, global.paragraph, global.checklist);
    global.commonTools = mod.exports;
  }
})(this, function (_exports, _header, _list, _inlineCode, _image, _embed, _quote, _marker, _code, _link, _delimiter, _raw, _table, _warning, _paragraph, _checklist) {
  "use strict";

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _header = _interopRequireDefault(_header);
  _list = _interopRequireDefault(_list);
  _inlineCode = _interopRequireDefault(_inlineCode);
  _image = _interopRequireDefault(_image);
  _embed = _interopRequireDefault(_embed);
  _quote = _interopRequireDefault(_quote);
  _marker = _interopRequireDefault(_marker);
  _code = _interopRequireDefault(_code);
  _link = _interopRequireDefault(_link);
  _delimiter = _interopRequireDefault(_delimiter);
  _raw = _interopRequireDefault(_raw);
  _table = _interopRequireDefault(_table);
  _warning = _interopRequireDefault(_warning);
  _paragraph = _interopRequireDefault(_paragraph);
  _checklist = _interopRequireDefault(_checklist);
  var _default = {
    header: _header.default,
    list: _list.default,
    image: _image.default,
    inlineCode: _inlineCode.default,
    embed: _embed.default,
    quote: _quote.default,
    marker: _marker.default,
    code: _code.default,
    link: _link.default,
    delimiter: _delimiter.default,
    raw: _raw.default,
    table: _table.default,
    warning: _warning.default,
    paragraph: _paragraph.default,
    checklist: _checklist.default
  };
  _exports.default = _default;
});