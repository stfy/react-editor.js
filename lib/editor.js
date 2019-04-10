require("core-js/modules/es.string.includes");

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@babel/runtime/helpers/objectSpread", "@babel/runtime/helpers/asyncToGenerator", "react", "prop-types", "@editorjs/editorjs", "./common-tools"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@babel/runtime/helpers/objectSpread"), require("@babel/runtime/helpers/asyncToGenerator"), require("react"), require("prop-types"), require("@editorjs/editorjs"), require("./common-tools"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.objectSpread, global.asyncToGenerator, global.react, global.propTypes, global.editorjs, global.commonTools);
    global.editor = mod.exports;
  }
})(this, function (_exports, _objectSpread2, _asyncToGenerator2, _react, _propTypes, _editorjs, _commonTools) {
  "use strict";

  var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

  var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _objectSpread2 = _interopRequireDefault(_objectSpread2);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _react = _interopRequireWildcard(_react);
  _propTypes = _interopRequireDefault(_propTypes);
  _editorjs = _interopRequireDefault(_editorjs);
  _commonTools = _interopRequireDefault(_commonTools);

  class Editor extends _react.Component {
    constructor(props) {
      var _this;

      _this = super(props);

      this._initEditor = () => {
        this.editor = new _editorjs.default({
          holderId: this._holderId,
          tools: this._tools,
          onChange: this._handleChange,
          onReady: this._handleReady,
          data: this._initialData
        });
      };

      this._handleChange =
      /*#__PURE__*/
      (0, _asyncToGenerator2.default)(function* () {
        const data = yield _this.editor.save();

        _this._onChange(data);
      });

      this._handleReady = () => {
        this._onReady();
      };

      this._initTools = (tools, excludeTools) => {
        let toolsList = tools.length === 0 ? _commonTools.default : tools;

        if (excludeTools.length !== 0) {
          toolsList = Object.keys(toolsList).filter(tool => !excludeTools.includes(tool)).map(toolKey => ({
            [toolKey]: toolsList[toolKey]
          }));
        }

        return toolsList.reduce((acc, current) => (0, _objectSpread2.default)({}, acc, current), {});
      };

      this._holderId = props.holderId;
      this._tools = this._initTools(props.tools, props.excludeTools);
      this._onChange = props.onChange;
      this._onReady = props.onReady;
      this._initialData = props.data;
      this._el = _react.default.createRef();
    }

    componentDidMount() {
      this._initEditor();
    }

    componentWillUnmount() {
      this.editor.destroy();
    }

    render() {
      return _react.default.createElement('div', {
        id: this._holderId,
        ref: this._el
      });
    }

  }

  Editor.defaultProps = {
    holderId: 'editorjs-holder',
    tools: [],
    excludeTools: [],
    onChange: () => {},
    onReady: () => {},
    data: {},
    autofocus: true
  };
  Editor.propTypes = {
    holderId: _propTypes.default.string,
    tools: _propTypes.default.array,
    excludeTools: _propTypes.default.array,
    onChange: _propTypes.default.func,
    onReady: _propTypes.default.func,
    data: _propTypes.default.object,
    autofocus: _propTypes.default.bool
  };
  var _default = Editor;
  _exports.default = _default;
});