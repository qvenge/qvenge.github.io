/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./src/MassSpringWidget/index.js":
/*!***************************************!*\
  !*** ./src/MassSpringWidget/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassSpringWidget": () => (/* binding */ MassSpringWidget)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _components_mass_spring_mass_spring__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/mass-spring/mass-spring */ "./src/components/mass-spring/mass-spring.js");
/* harmony import */ var _components_range_input_range_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/range-input/range-input */ "./src/components/range-input/range-input.js");
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/button/button */ "./src/components/button/button.js");
/* harmony import */ var _components_label_label__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/label/label */ "./src/components/label/label.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings */ "./src/MassSpringWidget/settings.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css */ "./src/MassSpringWidget/style.css");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var MassSpringWidget = /*#__PURE__*/function () {
  function MassSpringWidget(model) {
    var _params$massRadiusFac;

    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, MassSpringWidget);

    this._model = model;
    this._className = 'mass-spring';
    this._elem = null;
    this._requestId = null;
    this._inputComponents = null;
    this._massSpring = null;
    this._startStopButton = null;
    this._resetButton = null;
    this._labels = null;
    this._massRadiusFactor = (_params$massRadiusFac = params.massRadiusFactor) !== null && _params$massRadiusFac !== void 0 ? _params$massRadiusFac : _settings__WEBPACK_IMPORTED_MODULE_8__.default.massRadiusFactor;
    this.update = this.update.bind(this);

    this._init(params);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MassSpringWidget, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    } // метод обновляет представление в соответствии с состоянием модели

  }, {
    key: "update",
    value: function update() {
      var modelState = this._model.getState(); // обновляем область визуализации


      this._updateVisualizationPanel(modelState); // обновляем область параметров


      this._updateControllPanel(modelState); // обновляем область характеристик


      this._updateInformationPanel(modelState); // запускаем или останваливаем анимацию процесса


      if (this._model.isActive()) {
        this._disableControllPanel();

        this._requestId = requestAnimationFrame(this.update);
      } else {
        this._enableControllPanel();

        cancelAnimationFrame(this._requestId);
      }
    } // ---- контроллер -----

  }, {
    key: "_toggleProcess",
    value: function _toggleProcess() {
      this._model.isActive() ? this._model.stop() : this._model.start();
    }
  }, {
    key: "_resetProcess",
    value: function _resetProcess() {
      this._model.reset();
    }
  }, {
    key: "_setModelParam",
    value: function _setModelParam(param, value) {
      this._model.setParams((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, param, Number(value)));
    } // ---------------------

  }, {
    key: "_init",
    value: function _init(params) {
      this._elem = document.createElement('div');
      this._elem.className = this._className;

      var visualizationPanel = this._createVisualizationPanel(params);

      var controllPanel = this._createControllPanel(params);

      var informationPanel = this._createInformationPanel(params);

      this._elem.append(visualizationPanel, controllPanel, informationPanel); // подписываемся на обновления модели


      this._model.attach(this.update); // сразу синхронизируем представление с моделью


      this.update();
    }
  }, {
    key: "_createVisualizationPanel",
    value: function _createVisualizationPanel(params) {
      var visualizationPanel = document.createElement('div');
      visualizationPanel.className = "".concat(this._className, "__panel ").concat(this._className, "__panel_visualization"); // создаем пружинный маятник

      this._massSpring = new _components_mass_spring_mass_spring__WEBPACK_IMPORTED_MODULE_4__.MassSpring(params);
      var buttonList = document.createElement('div');
      buttonList.className = "".concat(this._className, "__button-list"); // создаем кнопку старта и остановки

      this._startStopButton = new _components_button_button__WEBPACK_IMPORTED_MODULE_6__.Button({
        text: _settings__WEBPACK_IMPORTED_MODULE_8__.default.startButtonText,
        onClick: this._toggleProcess.bind(this)
      });
      var startStopButtonWrapper = document.createElement('div');
      startStopButtonWrapper.className = "".concat(this._className, "__button");
      startStopButtonWrapper.append(this._startStopButton.getElem()); // создаем кнопку сброса

      this._resetButton = new _components_button_button__WEBPACK_IMPORTED_MODULE_6__.Button({
        text: _settings__WEBPACK_IMPORTED_MODULE_8__.default.resetButtonText,
        onClick: this._resetProcess.bind(this)
      });
      var resetButtonWrapper = document.createElement('div');
      resetButtonWrapper.className = "".concat(this._className, "__button");
      resetButtonWrapper.append(this._resetButton.getElem());
      buttonList.append(startStopButtonWrapper, resetButtonWrapper);
      visualizationPanel.append(this._massSpring.getElem(), buttonList);
      return visualizationPanel;
    }
  }, {
    key: "_createControllPanel",
    value: function _createControllPanel() {
      var _this = this;

      var controllPanel = document.createElement('div');
      controllPanel.className = "".concat(this._className, "__panel ").concat(this._className, "__panel_controll");
      this._inputComponents = _settings__WEBPACK_IMPORTED_MODULE_8__.default.inputs.map(function (_ref) {
        var paramName = _ref.paramName,
            inputParams = _ref.inputParams,
            getText = _ref.getText;
        return {
          paramName: paramName,
          getText: getText,
          input: new _components_range_input_range_input__WEBPACK_IMPORTED_MODULE_5__.RangeInput(_objectSpread(_objectSpread({}, inputParams), {}, {
            label: getText(inputParams.value),
            onChange: function onChange(input) {
              _this._setModelParam(paramName, input.getValue()); // отменям изменение значения инпута
              // любые изменения view происходят в методе update


              input.abortChange();
            }
          }))
        };
      });

      var inputElems = this._inputComponents.map(function (_ref2) {
        var input = _ref2.input;
        var inputWrapper = document.createElement('div');
        inputWrapper.className = "".concat(_this._className, "__input");
        inputWrapper.append(input.getElem());
        return inputWrapper;
      });

      controllPanel.append.apply(controllPanel, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(inputElems));
      return controllPanel;
    }
  }, {
    key: "_createInformationPanel",
    value: function _createInformationPanel() {
      var _this2 = this;

      var informationPanel = document.createElement('div');
      informationPanel.className = "".concat(this._className, "__panel ").concat(this._className, "__panel_information");
      this._labels = _settings__WEBPACK_IMPORTED_MODULE_8__.default.labels.map(function (getText) {
        return {
          getText: getText,
          label: new _components_label_label__WEBPACK_IMPORTED_MODULE_7__.Label()
        };
      });

      var labelElems = this._labels.map(function (_ref3) {
        var label = _ref3.label;
        var labelWrapper = document.createElement('div');
        labelWrapper.className = "".concat(_this2._className, "__label");
        labelWrapper.append(label.getElem());
        return labelWrapper;
      });

      informationPanel.append.apply(informationPanel, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(labelElems));
      return informationPanel;
    }
  }, {
    key: "_updateVisualizationPanel",
    value: function _updateVisualizationPanel(modelState) {
      // сначала устанавливаем радиус сферы, а потом растяжение пружины
      // т. к. положение сферы после растяжения пружины зависит от радиуса сферы
      this._massSpring.setMassRadius(this._calcMassRadius(modelState.m));

      this._massSpring.extendSpring(modelState.x);

      this._startStopButton.setText(modelState.active ? _settings__WEBPACK_IMPORTED_MODULE_8__.default.stopButtonText : _settings__WEBPACK_IMPORTED_MODULE_8__.default.startButtonText);
    }
  }, {
    key: "_updateControllPanel",
    value: function _updateControllPanel(modelState) {
      this._inputComponents.forEach(function (_ref4) {
        var paramName = _ref4.paramName,
            input = _ref4.input,
            getText = _ref4.getText;
        var value = modelState[paramName];

        if (value !== undefined) {
          input.setValue(value);
          input.setLabel(getText(value));
        }
      });
    }
  }, {
    key: "_updateInformationPanel",
    value: function _updateInformationPanel(modelState) {
      this._labels.forEach(function (_ref5) {
        var getText = _ref5.getText,
            label = _ref5.label;
        return label.setText(getText(modelState));
      });
    }
  }, {
    key: "_enableControllPanel",
    value: function _enableControllPanel() {
      var screen = this._elem.querySelector(".".concat(this._className, "__panel_controll .").concat(this._className, "__screen"));

      if (screen) {
        screen.remove();
      }
    }
  }, {
    key: "_disableControllPanel",
    value: function _disableControllPanel() {
      var panel = this._elem.querySelector(".".concat(this._className, "__panel_controll"));

      var screen = panel.querySelector(".".concat(this._className, "__screen"));

      if (!screen) {
        screen = document.createElement('div');
        screen.className = "".concat(this._className, "__screen");
      }

      panel.append(screen);
    }
  }, {
    key: "_calcMassRadius",
    value: function _calcMassRadius(mass) {
      return this._massRadiusFactor * Math.cbrt(mass);
    }
  }]);

  return MassSpringWidget;
}();

/***/ }),

/***/ "./src/MassSpringWidget/model.js":
/*!***************************************!*\
  !*** ./src/MassSpringWidget/model.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassSpringModel": () => (/* binding */ MassSpringModel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



/* 
  все длины в сантиметрах, а время в секундах

  m   - масса груза
  k   - коэффициент упругости пружины
  A   - амплитуда колебаний (отклонение от состояния равновесия)
  w   - циклическая частота
  t   - время прошедшее после старта
  x0  - положение конца пружины в состоянии равновесия
  dx  - отколнение конца пружины относительно состояния равновесия
  x   - текущее положение конца пружины
  n   - количество колебаний
*/
var DEFAULT_PARAMS = {
  m: 0.5,
  k: 5,
  A: 10
};

var calcExtension = function calcExtension(_ref) {
  var m = _ref.m,
      k = _ref.k;
  return 100 * 9.8 * m / k;
};

var calcAngularFrequency = function calcAngularFrequency(_ref2) {
  var m = _ref2.m,
      k = _ref2.k;
  return Math.sqrt(k / m);
};

var MassSpringModel = /*#__PURE__*/function () {
  function MassSpringModel() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, MassSpringModel);

    this._callbacks = new Set();
    this._time = 0;
    this._startTime = null;
    this._params = _objectSpread({}, DEFAULT_PARAMS);
    this._angularFrequency = calcAngularFrequency(DEFAULT_PARAMS); // растяжение пружины под действием веса в состоянии покоя

    this._initialExtension = calcExtension(DEFAULT_PARAMS);
    this.setParams(params);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(MassSpringModel, [{
    key: "isActive",
    value: function isActive() {
      return this._startTime !== null;
    }
  }, {
    key: "getState",
    value: function getState() {
      var time = this._getTime();

      var offset = this._calcOffset(time);

      return _objectSpread(_objectSpread({}, this._params), {}, {
        w: this._angularFrequency,
        t: time,
        x0: this._initialExtension,
        dx: offset,
        x: this._initialExtension + offset,
        n: this._calcNumberOfVibration(time),
        active: this.isActive()
      });
    }
  }, {
    key: "setParams",
    value: function setParams(params) {
      var _this = this;

      var newParams = _objectSpread({}, this._params);

      var stateChanged = false;
      Object.entries(this._params).forEach(function (_ref3) {
        var _ref4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_ref3, 2),
            paramName = _ref4[0],
            prevParamValue = _ref4[1];

        if (Object.prototype.hasOwnProperty.call(params, paramName)) {
          var paramValue = params[paramName];

          if (_this._isValidParam(paramName, paramValue) && prevParamValue !== paramValue) {
            stateChanged = true;
            newParams[paramName] = paramValue;
          }
        }
      });

      if (stateChanged) {
        this._params = newParams;
        this._initialExtension = calcExtension(newParams);
        this._angularFrequency = calcAngularFrequency(newParams);
        this.reset();
        this.notify();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this._time = 0;
      this._startTime = this.isActive() ? performance.now() : null;
      this.notify();
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.isActive()) {
        if (this._startTime === null) {
          this._startTime = performance.now();
        }

        this.notify();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.isActive()) {
        this._time = this._getTime();
        this._startTime = null;
        this.notify();
      }
    }
  }, {
    key: "attach",
    value: function attach(callback) {
      this._callbacks.add(callback);
    }
  }, {
    key: "detach",
    value: function detach(callback) {
      this._callbacks["delete"](callback);
    }
  }, {
    key: "notify",
    value: function notify() {
      var _this2 = this;

      this._callbacks.forEach(function (callback) {
        callback.call(null, _this2);
      });
    }
  }, {
    key: "_isValidParam",
    value: function _isValidParam(name, value) {
      switch (name) {
        case 'm':
        case 'k':
          // масса и коэффициент упругости не могут быть отрицательными
          return typeof value === 'number' && value > 0;

        case 'A':
          // заданное отклонение не может быть по модулю больше изначального растяжения пружины
          return typeof value === 'number' && Math.abs(value) <= this._initialExtension;

        default:
          return false;
      }
    } // возвращает время прошедшее с начала процесса

  }, {
    key: "_getTime",
    value: function _getTime() {
      var shift = this.isActive() ? (performance.now() - this._startTime) / 1000 : 0;
      return this._time + shift;
    }
  }, {
    key: "_calcNumberOfVibration",
    value: function _calcNumberOfVibration(time) {
      return this._angularFrequency * time / (2 * Math.PI);
    }
  }, {
    key: "_calcOffset",
    value: function _calcOffset(time) {
      return this._params.A * Math.cos(this._angularFrequency * time);
    }
  }]);

  return MassSpringModel;
}();

/***/ }),

/***/ "./src/MassSpringWidget/settings.js":
/*!******************************************!*\
  !*** ./src/MassSpringWidget/settings.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  massRadiusFactor: 16,
  startButtonText: 'Запустить',
  stopButtonText: 'Остановить',
  resetButtonText: 'Сбросить',
  inputs: [{
    paramName: 'm',
    inputParams: {
      min: 0.5,
      max: 1,
      step: 0.1,
      value: 0.5
    },
    getText: function getText(value) {
      return "\u041C\u0430\u0441\u0441\u0430 \u0433\u0440\u0443\u0437\u0430 (m): ".concat(value, " \u043A\u0433");
    }
  }, {
    paramName: 'k',
    inputParams: {
      min: 5,
      max: 9,
      step: 1,
      value: 5
    },
    getText: function getText(value) {
      return "\u0416\u0435\u0441\u0442\u043A\u043E\u0441\u0442\u044C \u043F\u0440\u0443\u0436\u0438\u043D\u044B (k): ".concat(value, " \u041D/\u043C");
    }
  }, {
    paramName: 'A',
    inputParams: {
      min: 0,
      max: 20,
      step: 2,
      value: 10
    },
    getText: function getText(value) {
      return "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 (x0): ".concat(value, " \u0441\u043C");
    }
  }],
  labels: [function (modelParams) {
    return "\u0426\u0438\u043A\u043B\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0447\u0430\u0441\u0442\u043E\u0442\u0430: ".concat(modelParams.w.toFixed(2), " \u0440\u0430\u0434/\u0441");
  }, function (modelParams) {
    return "\u0412\u0440\u0435\u043C\u044F \u043F\u0440\u043E\u0448\u0435\u0434\u0448\u0435\u0435 \u043F\u043E\u0441\u043B\u0435 \u0441\u0442\u0430\u0440\u0442\u0430: ".concat(modelParams.t.toFixed(2), " \u0441\u0435\u043A\u0443\u043D\u0434");
  }, function (modelParams) {
    return "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u043B\u043D\u044B\u0445 \u043A\u043E\u043B\u0435\u0431\u0430\u043D\u0438\u0439: ".concat(Math.floor(modelParams.n));
  }, function (modelParams) {
    return "\u041E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 \u043E\u0442 \u0440\u0430\u0432\u043D\u043E\u0432\u0435\u0441\u0438\u044F: ".concat(Math.round(modelParams.dx), " \u0441\u043C");
  }]
});

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css */ "./src/components/button/button.css");



var Button = /*#__PURE__*/function () {
  function Button() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Button);

    this._className = 'button';
    this._elem = null;

    this._init(props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Button, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    }
  }, {
    key: "_init",
    value: function _init(props) {
      var _props$text,
          _this = this;

      this._elem = document.createElement('button');
      this._elem.className = this._className;
      this._elem.textContent = (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : 'Button';

      if (typeof props.onClick === 'function') {
        this._elem.addEventListener('click', function () {
          return props.onClick.call(null, _this);
        });
      }
    }
  }, {
    key: "getText",
    value: function getText() {
      return this._elem.textContent;
    }
  }, {
    key: "setText",
    value: function setText(value) {
      this._elem.textContent = value;
    }
  }]);

  return Button;
}();

/***/ }),

/***/ "./src/components/label/label.js":
/*!***************************************!*\
  !*** ./src/components/label/label.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _label_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./label.css */ "./src/components/label/label.css");



var Label = /*#__PURE__*/function () {
  function Label() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Label);

    this._className = 'label';
    this._elem = null;

    this._init(props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Label, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    }
  }, {
    key: "_init",
    value: function _init(props) {
      var _props$text;

      this._elem = document.createElement('div');
      this._elem.className = this._className;
      this._elem.textContent = (_props$text = props.text) !== null && _props$text !== void 0 ? _props$text : 'Text';
    }
  }, {
    key: "getText",
    value: function getText() {
      return this._elem.textContent;
    }
  }, {
    key: "setText",
    value: function setText(value) {
      this._elem.textContent = value;
    }
  }]);

  return Label;
}();

/***/ }),

/***/ "./src/components/mass-spring/mass-spring.js":
/*!***************************************************!*\
  !*** ./src/components/mass-spring/mass-spring.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MassSpring": () => (/* binding */ MassSpring)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _spring_sprite_spring_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spring-sprite/spring-sprite */ "./src/components/spring-sprite/spring-sprite.js");
/* harmony import */ var _sphere_sprite_sphere_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sphere-sprite/sphere-sprite */ "./src/components/sphere-sprite/sphere-sprite.js");
/* harmony import */ var _mass_spring_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mass-spring.css */ "./src/components/mass-spring/mass-spring.css");





var DEFAULT_VIEWBOX = [400, 300];
var MassSpring = /*#__PURE__*/function () {
  function MassSpring() {
    var _props$viewbox;

    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, MassSpring);

    this._className = 'mass-spring';
    this._elem = null;
    this._springSprite = null;
    this._massSprite = null;
    this._viewbox = (_props$viewbox = props.viewbox) !== null && _props$viewbox !== void 0 ? _props$viewbox : DEFAULT_VIEWBOX;

    this._init(props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(MassSpring, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    }
  }, {
    key: "setMassRadius",
    value: function setMassRadius(value) {
      this._massSprite.setRadius(value);
    }
  }, {
    key: "extendSpring",
    value: function extendSpring(value) {
      this._springSprite.extend(value);

      this._updateMassPosition();
    }
  }, {
    key: "_init",
    value: function _init(props) {
      this._elem = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

      this._elem.classList.add(this._className);

      this._elem.setAttribute('viewBox', "0 0 ".concat(this._viewbox[0], " ").concat(this._viewbox[1]));

      this._elem.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

      this._springSprite = this._createSpringSptite(props);
      this._massSprite = this._createMassSprite(props);

      this._updateMassPosition();

      this._elem.append(this._springSprite.getElem(), this._massSprite.getElem());
    }
  }, {
    key: "_createSpringSptite",
    value: function _createSpringSptite(props) {
      return new _spring_sprite_spring_sprite__WEBPACK_IMPORTED_MODULE_2__.SpringSprite({
        position: [this._viewbox[0] / 2, 0],
        coils: props.coils,
        coilDiameter: props.coilDiameter,
        springWidth: props.springWidth,
        extension: props.extension
      });
    }
  }, {
    key: "_createMassSprite",
    value: function _createMassSprite(props) {
      var position = this._springSprite.getEndPoint();

      return new _sphere_sprite_sphere_sprite__WEBPACK_IMPORTED_MODULE_3__.SphereSprite({
        cx: position.x,
        cy: position.y,
        radius: props.massRadius
      });
    }
  }, {
    key: "_updateMassPosition",
    value: function _updateMassPosition() {
      var massPosition = this._springSprite.getEndPoint();

      var radius = this._massSprite.getRadius();

      this._massSprite.setPosition({
        x: massPosition.x,
        y: massPosition.y + radius - 2
      });
    }
  }]);

  return MassSpring;
}();

/***/ }),

/***/ "./src/components/range-input/range-input.js":
/*!***************************************************!*\
  !*** ./src/components/range-input/range-input.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RangeInput": () => (/* binding */ RangeInput)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _range_input_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./range-input.css */ "./src/components/range-input/range-input.css");



var PARAM_NAMES = ['min', 'max', 'step', 'value', 'name'];
var RangeInput = /*#__PURE__*/function () {
  function RangeInput() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, RangeInput);

    this._className = 'range-input';
    this._elem = null;
    this._value = props.value;
    this._inputElem = null;
    this._labelElem = null;

    this._init(props);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(RangeInput, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    } // имеет смысл вызывать только в обработчике onChange

  }, {
    key: "abortChange",
    value: function abortChange() {
      this._inputElem.value = this._value;
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return this._labelElem.textContent;
    }
  }, {
    key: "setLabel",
    value: function setLabel(text) {
      this._labelElem.textContent = text;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this._inputElem.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this._inputElem.value = value;
      this._value = this._inputElem.value;
    }
  }, {
    key: "getStep",
    value: function getStep() {
      return this._inputElem.step;
    }
  }, {
    key: "setStep",
    value: function setStep(value) {
      this._inputElem.step = value;
    }
  }, {
    key: "getMin",
    value: function getMin() {
      return this._inputElem.min;
    }
  }, {
    key: "setMin",
    value: function setMin(value) {
      this._inputElem.min = value;
    }
  }, {
    key: "getMax",
    value: function getMax() {
      return this._inputElem.max;
    }
  }, {
    key: "setMax",
    value: function setMax(value) {
      this._inputElem.max = value;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._inputElem.disabled = true;
    }
  }, {
    key: "enable",
    value: function enable() {
      this._inputElem.disabled = false;
    }
  }, {
    key: "_init",
    value: function _init(props) {
      var _props$label,
          _this = this;

      this._elem = document.createElement('label');
      this._elem.className = this._className;
      this._labelElem = document.createElement('span');
      this._labelElem.className = "".concat(this._className, "__label");
      this._labelElem.textContent = (_props$label = props.label) !== null && _props$label !== void 0 ? _props$label : '';
      this._inputElem = document.createElement('input');
      this._inputElem.className = "".concat(this._className, "__input");

      this._inputElem.setAttribute('type', 'range');

      var params = Array.from(Object.keys(props)).filter(function (attr) {
        return PARAM_NAMES.includes(attr);
      });
      params.forEach(function (paramName) {
        _this._inputElem.setAttribute(paramName, "".concat(props[paramName]));
      });

      this._inputElem.addEventListener('input', typeof props.onChange === 'function' ? function () {
        props.onChange.call(null, _this);
        _this._value = _this._inputElem.value;
      } : function () {
        _this._value = _this._inputElem.value;
      });

      this._elem.append(this._labelElem, this._inputElem);
    }
  }]);

  return RangeInput;
}();

/***/ }),

/***/ "./src/components/sphere-sprite/sphere-sprite.js":
/*!*******************************************************!*\
  !*** ./src/components/sphere-sprite/sphere-sprite.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SphereSprite": () => (/* binding */ SphereSprite)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.json */ "./src/components/sphere-sprite/settings.json");
/* harmony import */ var _sphere_sprite_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sphere-sprite.css */ "./src/components/sphere-sprite/sphere-sprite.css");





var SphereSprite = /*#__PURE__*/function () {
  function SphereSprite() {
    var _params$radius, _params$cx, _params$cy;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SphereSprite);

    this._className = 'sphere-sprite';
    this._elem = null;
    this._r = (_params$radius = params.radius) !== null && _params$radius !== void 0 ? _params$radius : _settings_json__WEBPACK_IMPORTED_MODULE_3__.r;
    this._cx = (_params$cx = params.cx) !== null && _params$cx !== void 0 ? _params$cx : _settings_json__WEBPACK_IMPORTED_MODULE_3__.cx;
    this._cy = (_params$cy = params.cy) !== null && _params$cy !== void 0 ? _params$cy : _settings_json__WEBPACK_IMPORTED_MODULE_3__.cy;

    this._init();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SphereSprite, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    }
  }, {
    key: "getPosition",
    value: function getPosition() {
      return {
        x: this._cx,
        y: this._cy
      };
    }
  }, {
    key: "setPosition",
    value: function setPosition(_ref) {
      var x = _ref.x,
          y = _ref.y;
      this._cx = x;
      this._cy = y;

      this._circle.setAttributeNS(null, 'cx', x);

      this._circle.setAttributeNS(null, 'cy', y);
    }
  }, {
    key: "getRadius",
    value: function getRadius() {
      return this._r;
    }
  }, {
    key: "setRadius",
    value: function setRadius(radius) {
      this._r = radius;

      this._circle.setAttributeNS(null, 'r', radius);
    }
  }, {
    key: "_init",
    value: function _init() {
      this._elem = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      this._elem.classList.add(this._className);

      var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      circle.classList.add("".concat(this._className, "__circle"));
      circle.setAttributeNS(null, 'cx', this._cx);
      circle.setAttributeNS(null, 'cy', this._cy);
      circle.setAttributeNS(null, 'r', this._r);
      this._circle = circle;
      var gradients = _settings_json__WEBPACK_IMPORTED_MODULE_3__.gradients.filter(function (gradient) {
        var _gradient$colors;

        return (gradient === null || gradient === void 0 ? void 0 : (_gradient$colors = gradient.colors) === null || _gradient$colors === void 0 ? void 0 : _gradient$colors.length) > 1;
      }).map(function (gradient) {
        var _gradient$cx, _gradient$cy, _gradient$r;

        return ["<radialGradient id=\"SphereGradient\" cx=\"".concat((_gradient$cx = gradient.cx) !== null && _gradient$cx !== void 0 ? _gradient$cx : 0.5, "\" cy=\"").concat((_gradient$cy = gradient.cy) !== null && _gradient$cy !== void 0 ? _gradient$cy : 0.5, "\" r=\"").concat((_gradient$r = gradient.r) !== null && _gradient$r !== void 0 ? _gradient$r : 0.5, "\">")].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(gradient.colors.map(function (color, index, _ref2) {
          var length = _ref2.length;
          return "<stop offset=\"".concat(index / (length - 1), "\" stop-color=\"").concat(color, "\"/>");
        })), ['</radialGradient>']).join('');
      });

      if (gradients.length) {
        this._elem.innerHTML = "<defs>\n".concat(gradients.join('\n'), "\n</defs>");
      }

      this._elem.append(circle);
    }
  }]);

  return SphereSprite;
}();

/***/ }),

/***/ "./src/components/spring-sprite/spring-sprite.js":
/*!*******************************************************!*\
  !*** ./src/components/spring-sprite/spring-sprite.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpringSprite": () => (/* binding */ SpringSprite)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _settings_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.json */ "./src/components/spring-sprite/settings.json");
/* harmony import */ var _spring_sprite_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spring-sprite.css */ "./src/components/spring-sprite/spring-sprite.css");




/* eslint-disable class-methods-use-this */

 // коэффициент, который помогает высчитывать положение контрольных точек кривых

var K = 0.37;
var SpringSprite = /*#__PURE__*/function () {
  function SpringSprite() {
    var _params$coils, _params$position, _params$springWidth, _params$coilDiameter, _params$extension;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SpringSprite);

    this._className = 'spring-sprite';
    this._elem = null;
    this._paths = [];
    this._coils = (_params$coils = params.coils) !== null && _params$coils !== void 0 ? _params$coils : _settings_json__WEBPACK_IMPORTED_MODULE_3__.coils;
    this._startPosition = (_params$position = params.position) !== null && _params$position !== void 0 ? _params$position : _settings_json__WEBPACK_IMPORTED_MODULE_3__.position;
    this._springWidth = (_params$springWidth = params.springWidth) !== null && _params$springWidth !== void 0 ? _params$springWidth : _settings_json__WEBPACK_IMPORTED_MODULE_3__.springWidth;
    this._coilDiameter = (_params$coilDiameter = params.coilDiameter) !== null && _params$coilDiameter !== void 0 ? _params$coilDiameter : _settings_json__WEBPACK_IMPORTED_MODULE_3__.coilDiameter;
    this._endPoint = null;

    this._init((_params$extension = params.extension) !== null && _params$extension !== void 0 ? _params$extension : _settings_json__WEBPACK_IMPORTED_MODULE_3__.extension);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(SpringSprite, [{
    key: "getElem",
    value: function getElem() {
      return this._elem;
    } // метод растягивает пружину

  }, {
    key: "extend",
    value: function extend(value) {
      var _this = this;

      var pathsData = this._generateCommandsOfPaths(value);

      this._paths.forEach(function (path, index) {
        var d = _this._renderPathData(pathsData[index].commands);

        path.setAttributeNS(null, 'd', d); // this._applyPoints(path, pathsData[index].data);
      });
    } // метод возращает координаты конца пружины
    // это нужно, чтобы спозиционировать шар

  }, {
    key: "getEndPoint",
    value: function getEndPoint() {
      var lastSeg = this._paths[this._paths.length - 1].pathSegList.getItem(2);

      return {
        x: lastSeg.x + this._springWidth / 4,
        y: lastSeg.y
      };
    }
  }, {
    key: "_init",
    value: function _init(extension) {
      var _this2 = this,
          _this$_elem;

      this._paths = this._generateCommandsOfPaths(extension).map(function (_ref) {
        var type = _ref.type,
            commands = _ref.commands;
        return _this2._createPath(type, _this2._renderPathData(commands));
      });
      this._elem = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      this._elem.classList.add(this._className);

      (_this$_elem = this._elem).append.apply(_this$_elem, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this._paths));
    }
  }, {
    key: "_calcHalfPeriod",
    value: function _calcHalfPeriod(extension) {
      return (extension / (this._coils + 1) + this._springWidth) / 2;
    } // метод высчитывает комманды для всех путей
    // возвращает двойной массив

  }, {
    key: "_generateCommandsOfPaths",
    value: function _generateCommandsOfPaths(extension) {
      var startPosition = this._startPosition,
          coilDiameter = this._coilDiameter,
          coils = this._coils; // половина расстояние между витками пружины

      var halfPeriod = this._calcHalfPeriod(extension); // длина одного витка


      var L = Math.PI * coilDiameter;
      var frontPaths = [];
      var backPaths = [];

      if (halfPeriod > L / 2) {
        halfPeriod = L / 2;
      }

      var xShift = coilDiameter - 2 * halfPeriod / L * coilDiameter;
      var rectHeight = 20;
      var startPoint = startPosition; // создаем верхний стержень

      var startRectPoints = {
        startPoint: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(startPoint),
        endPoint: [startPoint[0], startPoint[1] + rectHeight]
      };
      frontPaths.push(this._calcRectCommands(startRectPoints));
      startPoint = [startPosition[0], startPosition[1] + rectHeight - this._springWidth]; // создаем верхнюю четвертинку витка

      var startCurvePoints = {};
      startCurvePoints.startPoint = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(startPoint);
      startCurvePoints.endPoint = [startPoint[0] - xShift / 2, startPoint[1] + halfPeriod / 2];
      startCurvePoints.controlPoint1 = startCurvePoints.startPoint;
      startCurvePoints.controlPoint2 = [startCurvePoints.endPoint[0], startCurvePoints.endPoint[1] - K * halfPeriod];
      frontPaths.push(this._calcCurveCommands(startCurvePoints));
      startPoint = startCurvePoints.endPoint; // создаем полувитки пружины

      for (var i = 0; i < 2 * coils - 1; ++i) {
        var dir = i % 2 ? -1 : 1;
        var pathPoints = {};
        pathPoints.startPoint = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(startPoint);
        pathPoints.endPoint = [startPoint[0] + dir * xShift, startPoint[1] + halfPeriod];
        pathPoints.controlPoint1 = [startPoint[0], startPoint[1] + K * halfPeriod];
        pathPoints.controlPoint2 = [pathPoints.endPoint[0], pathPoints.endPoint[1] - K * halfPeriod];

        var data = this._calcCurveCommands(pathPoints);

        if (dir < 0) frontPaths.push(data);else backPaths.push(data);
        startPoint = pathPoints.endPoint;
      } // Создаем нижнюю четвертинку витка


      var endCurvePoints = {};
      endCurvePoints.startPoint = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(startPoint);
      endCurvePoints.endPoint = [startPoint[0] - xShift / 2, startPoint[1] + halfPeriod / 2];
      endCurvePoints.controlPoint1 = [startPoint[0], startPoint[1] + K * halfPeriod];
      endCurvePoints.controlPoint2 = endCurvePoints.endPoint;
      frontPaths.push(this._calcCurveCommands(endCurvePoints));
      startPoint = endCurvePoints.endPoint; // создаем нижний стержень

      var endRectPoints = {
        startPoint: (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(startPoint),
        endPoint: [startPoint[0], startPoint[1] + rectHeight]
      };
      frontPaths.push(this._calcRectCommands(endRectPoints)); // для корректного порядка отбражения путей
      // первыми в dom пойдут отдаленные части витков пружины

      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(backPaths.map(function (commands) {
        return {
          type: 'back',
          commands: commands
        };
      })), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(frontPaths.map(function (commands) {
        return {
          type: 'front',
          commands: commands
        };
      })));
    } // создает прямоугольник вдоль прямой с шириной springWidth / 2

  }, {
    key: "_calcRectCommands",
    value: function _calcRectCommands(_ref2) {
      var startPoint = _ref2.startPoint,
          endPoint = _ref2.endPoint;
      var width = this._springWidth / 4;
      return [{
        command: 'M',
        x: startPoint[0] + width,
        y: startPoint[1]
      }, {
        command: 'L',
        x: startPoint[0] - width,
        y: startPoint[1]
      }, {
        command: 'L',
        x: startPoint[0] - width,
        y: endPoint[1]
      }, {
        command: 'L',
        x: startPoint[0] + width,
        y: endPoint[1]
      }, {
        command: 'Z'
      }];
    } // метод на вход принимает контрольные точки кубической кривой безье
    // создает такую же кривую ниже, соединяет эти кривые прямыми
    // и возвращает данные получившегося пути в виде массива комманд

  }, {
    key: "_calcCurveCommands",
    value: function _calcCurveCommands(_ref3) {
      var startPoint = _ref3.startPoint,
          endPoint = _ref3.endPoint,
          controlPoint1 = _ref3.controlPoint1,
          controlPoint2 = _ref3.controlPoint2;
      var springWidth = this._springWidth;
      return [{
        command: 'M',
        x: startPoint[0],
        y: startPoint[1]
      }, {
        command: 'C',
        x1: controlPoint1[0],
        y1: controlPoint1[1],
        x2: controlPoint2[0],
        y2: controlPoint2[1],
        x: endPoint[0],
        y: endPoint[1]
      }, {
        command: 'L',
        x: endPoint[0],
        y: endPoint[1] + springWidth
      }, {
        command: 'C',
        x1: controlPoint2[0],
        y1: controlPoint2[1] + springWidth,
        x2: controlPoint1[0],
        y2: controlPoint1[1] + springWidth,
        x: startPoint[0],
        y: startPoint[1] + springWidth
      }, {
        command: 'Z'
      }];
    } // на вход принимает массив комманд и возвращает строку

  }, {
    key: "_renderPathData",
    value: function _renderPathData(segments) {
      return segments.map(function (seg) {
        var result = seg.command;

        if (seg.x1 !== undefined && seg.y1 !== undefined) {
          result += " ".concat(seg.x1, " ").concat(seg.y1);
        }

        if (seg.x2 !== undefined && seg.y2 !== undefined) {
          result += " ".concat(seg.x2, " ").concat(seg.y2);
        }

        if (seg.x !== undefined && seg.y !== undefined) {
          result += " ".concat(seg.x, " ").concat(seg.y);
        }

        return result;
      }).join(' ');
    } // возвращает path элемент

  }, {
    key: "_createPath",
    value: function _createPath(type, d) {
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.classList.add("".concat(this._className, "__path"));
      path.classList.add("".concat(this._className, "__path_").concat(type));
      path.setAttributeNS(null, 'd', d);
      return path;
    } // _applyPoints(path, segments) {
    //   for (let i = 0; i < segments.length; ++i) {
    //     const pathSeg = path.pathSegList.getItem(i);
    //     const seg = segments[i];
    //     const props = Object.keys(seg);
    //     props.forEach((prop) => {
    //       if (prop in pathSeg) {
    //         pathSeg[prop] = seg[prop];
    //       }
    //     });
    //   }
    // }

  }]);

  return SpringSprite;
}();

/***/ }),

/***/ "./node_modules/core-js/internals/a-possible-prototype.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/a-possible-prototype.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/correct-prototype-getter.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-prototype-getter.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "./node_modules/core-js/internals/create-iterator-constructor.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-iterator-constructor.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var IteratorPrototype = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js").IteratorPrototype;
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var createIteratorConstructor = __webpack_require__(/*! ../internals/create-iterator-constructor */ "./node_modules/core-js/internals/create-iterator-constructor.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var setPrototypeOf = __webpack_require__(/*! ../internals/object-set-prototype-of */ "./node_modules/core-js/internals/object-set-prototype-of.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var IteratorsCore = __webpack_require__(/*! ../internals/iterators-core */ "./node_modules/core-js/internals/iterators-core.js");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ ((module) => {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-is-node.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/engine-is-node.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var path = __webpack_require__(/*! ../internals/path */ "./node_modules/core-js/internals/path.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var objectHas = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/iterators-core.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/iterators-core.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var getPrototypeOf = __webpack_require__(/*! ../internals/object-get-prototype-of */ "./node_modules/core-js/internals/object-get-prototype-of.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "./node_modules/core-js/internals/iterators.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/iterators.js ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_NODE = __webpack_require__(/*! ../internals/engine-is-node */ "./node_modules/core-js/internals/engine-is-node.js");
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // eslint-disable-next-line es/no-symbol -- required for testing
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__(/*! ../internals/correct-prototype-getter */ "./node_modules/core-js/internals/correct-prototype-getter.js");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = __webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf;
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/object-set-prototype-of.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-set-prototype-of.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aPossiblePrototype = __webpack_require__(/*! ../internals/a-possible-prototype */ "./node_modules/core-js/internals/a-possible-prototype.js");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global;


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module) => {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-to-string-tag.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/set-to-string-tag.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.10.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/string-repeat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/string-repeat.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `String.prototype.repeat` method implementation
// https://tc39.es/ecma262/#sec-string.prototype.repeat
module.exports = function repeat(count) {
  var str = String(requireObjectCoercible(this));
  var result = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/this-number-value.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/this-number-value.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `thisNumberValue` abstract operation
// https://tc39.es/ecma262/#sec-thisnumbervalue
module.exports = function (value) {
  if (typeof value != 'number' && classof(value) != 'Number') {
    throw TypeError('Incorrect invocation');
  }
  return +value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module) => {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.iterator.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.iterator.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");
var Iterators = __webpack_require__(/*! ../internals/iterators */ "./node_modules/core-js/internals/iterators.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var defineIterator = __webpack_require__(/*! ../internals/define-iterator */ "./node_modules/core-js/internals/define-iterator.js");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.to-fixed.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.to-fixed.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var thisNumberValue = __webpack_require__(/*! ../internals/this-number-value */ "./node_modules/core-js/internals/this-number-value.js");
var repeat = __webpack_require__(/*! ../internals/string-repeat */ "./node_modules/core-js/internals/string-repeat.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var nativeToFixed = 1.0.toFixed;
var floor = Math.floor;

var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};

var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

var multiply = function (data, n, c) {
  var index = -1;
  var c2 = c;
  while (++index < 6) {
    c2 += n * data[index];
    data[index] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};

var divide = function (data, n) {
  var index = 6;
  var c = 0;
  while (--index >= 0) {
    c += data[index];
    data[index] = floor(c / n);
    c = (c % n) * 1e7;
  }
};

var dataToString = function (data) {
  var index = 6;
  var s = '';
  while (--index >= 0) {
    if (s !== '' || index === 0 || data[index] !== 0) {
      var t = String(data[index]);
      s = s === '' ? t : s + repeat.call('0', 7 - t.length) + t;
    }
  } return s;
};

var FORCED = nativeToFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !fails(function () {
  // V8 ~ Android 4.3-
  nativeToFixed.call({});
});

// `Number.prototype.toFixed` method
// https://tc39.es/ecma262/#sec-number.prototype.tofixed
$({ target: 'Number', proto: true, forced: FORCED }, {
  toFixed: function toFixed(fractionDigits) {
    var number = thisNumberValue(this);
    var fractDigits = toInteger(fractionDigits);
    var data = [0, 0, 0, 0, 0, 0];
    var sign = '';
    var result = '0';
    var e, z, j, k;

    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
    // eslint-disable-next-line no-self-compare -- NaN check
    if (number != number) return 'NaN';
    if (number <= -1e21 || number >= 1e21) return String(number);
    if (number < 0) {
      sign = '-';
      number = -number;
    }
    if (number > 1e-21) {
      e = log(number * pow(2, 69, 1)) - 69;
      z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(data, 0, z);
        j = fractDigits;
        while (j >= 7) {
          multiply(data, 1e7, 0);
          j -= 7;
        }
        multiply(data, pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(data, 1 << 23);
          j -= 23;
        }
        divide(data, 1 << j);
        multiply(data, 1, 1);
        divide(data, 2);
        result = dataToString(data);
      } else {
        multiply(data, 0, z);
        multiply(data, 1 << -e, 0);
        result = dataToString(data) + repeat.call('0', fractDigits);
      }
    }
    if (fractDigits > 0) {
      k = result.length;
      result = sign + (k <= fractDigits
        ? '0.' + repeat.call('0', fractDigits - k) + result
        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
    } else {
      result = sign + result;
    } return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.iterator.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.iterator.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var ArrayIteratorMethods = __webpack_require__(/*! ../modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "./src/MassSpringWidget/style.css":
/*!****************************************!*\
  !*** ./src/MassSpringWidget/style.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/button/button.css":
/*!******************************************!*\
  !*** ./src/components/button/button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/label/label.css":
/*!****************************************!*\
  !*** ./src/components/label/label.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/mass-spring/mass-spring.css":
/*!****************************************************!*\
  !*** ./src/components/mass-spring/mass-spring.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/range-input/range-input.css":
/*!****************************************************!*\
  !*** ./src/components/range-input/range-input.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/sphere-sprite/sphere-sprite.css":
/*!********************************************************!*\
  !*** ./src/components/sphere-sprite/sphere-sprite.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/spring-sprite/spring-sprite.css":
/*!********************************************************!*\
  !*** ./src/components/spring-sprite/spring-sprite.css ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/sphere-sprite/settings.json":
/*!****************************************************!*\
  !*** ./src/components/sphere-sprite/settings.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"r":10,"cx":5,"cy":5,"gradients":[{"id":"SphereGradient","r":0.65,"cx":0.65,"cy":0.25,"colors":["#D3D3D3","#696969"]}]}');

/***/ }),

/***/ "./src/components/spring-sprite/settings.json":
/*!****************************************************!*\
  !*** ./src/components/spring-sprite/settings.json ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"position":[10,0],"coils":7,"springWidth":3,"coilDiameter":20,"extension":0}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MassSpringWidget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MassSpringWidget */ "./src/MassSpringWidget/index.js");
/* harmony import */ var _MassSpringWidget_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MassSpringWidget/model */ "./src/MassSpringWidget/model.js");
/* harmony import */ var _MassSpringWidget_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MassSpringWidget/settings */ "./src/MassSpringWidget/settings.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.css */ "./src/main.css");




var params = {};
_MassSpringWidget_settings__WEBPACK_IMPORTED_MODULE_2__.default.inputs.forEach(function (_ref) {
  var paramName = _ref.paramName,
      value = _ref.inputParams.value;
  params[paramName] = value;
});
var container = document.querySelector('.container');
var model = new _MassSpringWidget_model__WEBPACK_IMPORTED_MODULE_1__.MassSpringModel(params);
var widget = new _MassSpringWidget__WEBPACK_IMPORTED_MODULE_0__.MassSpringWidget(model, {
  viewbox: [400, 350],
  coils: 4,
  springWidth: 8,
  coilDiameter: 40,
  massRadiusFactor: 20
});
container.append(widget.getElem());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL01hc3NTcHJpbmdXaWRnZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL01hc3NTcHJpbmdXaWRnZXQvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL01hc3NTcHJpbmdXaWRnZXQvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9tYXNzLXNwcmluZy9tYXNzLXNwcmluZy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9yYW5nZS1pbnB1dC9yYW5nZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9zcGhlcmUtc3ByaXRlL3NwaGVyZS1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvc3ByaW5nLXNwcml0ZS9zcHJpbmctc3ByaXRlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLnRvLWZpeGVkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvTWFzc1NwcmluZ1dpZGdldC9zdHlsZS5jc3M/YmNiZCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcz85NjhmIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL3NyYy9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNzcz8yZmYxIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL3NyYy9jb21wb25lbnRzL21hc3Mtc3ByaW5nL21hc3Mtc3ByaW5nLmNzcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9yYW5nZS1pbnB1dC9yYW5nZS1pbnB1dC5jc3M/ZjUyMiIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9zcGhlcmUtc3ByaXRlL3NwaGVyZS1zcHJpdGUuY3NzPzY3ZTkiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvc3ByaW5nLXNwcml0ZS9zcHJpbmctc3ByaXRlLmNzcz83ODM1Iiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL2Zpemlrb25fdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYXNzU3ByaW5nV2lkZ2V0IiwibW9kZWwiLCJwYXJhbXMiLCJfbW9kZWwiLCJfY2xhc3NOYW1lIiwiX2VsZW0iLCJfcmVxdWVzdElkIiwiX2lucHV0Q29tcG9uZW50cyIsIl9tYXNzU3ByaW5nIiwiX3N0YXJ0U3RvcEJ1dHRvbiIsIl9yZXNldEJ1dHRvbiIsIl9sYWJlbHMiLCJfbWFzc1JhZGl1c0ZhY3RvciIsIm1hc3NSYWRpdXNGYWN0b3IiLCJzZXR0aW5ncyIsInVwZGF0ZSIsImJpbmQiLCJfaW5pdCIsIm1vZGVsU3RhdGUiLCJnZXRTdGF0ZSIsIl91cGRhdGVWaXN1YWxpemF0aW9uUGFuZWwiLCJfdXBkYXRlQ29udHJvbGxQYW5lbCIsIl91cGRhdGVJbmZvcm1hdGlvblBhbmVsIiwiaXNBY3RpdmUiLCJfZGlzYWJsZUNvbnRyb2xsUGFuZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfZW5hYmxlQ29udHJvbGxQYW5lbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsInN0YXJ0IiwicmVzZXQiLCJwYXJhbSIsInZhbHVlIiwic2V0UGFyYW1zIiwiTnVtYmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidmlzdWFsaXphdGlvblBhbmVsIiwiX2NyZWF0ZVZpc3VhbGl6YXRpb25QYW5lbCIsImNvbnRyb2xsUGFuZWwiLCJfY3JlYXRlQ29udHJvbGxQYW5lbCIsImluZm9ybWF0aW9uUGFuZWwiLCJfY3JlYXRlSW5mb3JtYXRpb25QYW5lbCIsImFwcGVuZCIsImF0dGFjaCIsIk1hc3NTcHJpbmciLCJidXR0b25MaXN0IiwiQnV0dG9uIiwidGV4dCIsIm9uQ2xpY2siLCJfdG9nZ2xlUHJvY2VzcyIsInN0YXJ0U3RvcEJ1dHRvbldyYXBwZXIiLCJnZXRFbGVtIiwiX3Jlc2V0UHJvY2VzcyIsInJlc2V0QnV0dG9uV3JhcHBlciIsInBhcmFtTmFtZSIsImlucHV0UGFyYW1zIiwiZ2V0VGV4dCIsImlucHV0IiwiUmFuZ2VJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJfc2V0TW9kZWxQYXJhbSIsImdldFZhbHVlIiwiYWJvcnRDaGFuZ2UiLCJpbnB1dEVsZW1zIiwibWFwIiwiaW5wdXRXcmFwcGVyIiwiTGFiZWwiLCJsYWJlbEVsZW1zIiwibGFiZWxXcmFwcGVyIiwic2V0TWFzc1JhZGl1cyIsIl9jYWxjTWFzc1JhZGl1cyIsIm0iLCJleHRlbmRTcHJpbmciLCJ4Iiwic2V0VGV4dCIsImFjdGl2ZSIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsInNldExhYmVsIiwic2NyZWVuIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsInBhbmVsIiwibWFzcyIsIk1hdGgiLCJjYnJ0IiwiREVGQVVMVF9QQVJBTVMiLCJrIiwiQSIsImNhbGNFeHRlbnNpb24iLCJjYWxjQW5ndWxhckZyZXF1ZW5jeSIsInNxcnQiLCJNYXNzU3ByaW5nTW9kZWwiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX3RpbWUiLCJfc3RhcnRUaW1lIiwiX3BhcmFtcyIsIl9hbmd1bGFyRnJlcXVlbmN5IiwiX2luaXRpYWxFeHRlbnNpb24iLCJ0aW1lIiwiX2dldFRpbWUiLCJvZmZzZXQiLCJfY2FsY09mZnNldCIsInciLCJ0IiwieDAiLCJkeCIsIm4iLCJfY2FsY051bWJlck9mVmlicmF0aW9uIiwibmV3UGFyYW1zIiwic3RhdGVDaGFuZ2VkIiwiT2JqZWN0IiwiZW50cmllcyIsInByZXZQYXJhbVZhbHVlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicGFyYW1WYWx1ZSIsIl9pc1ZhbGlkUGFyYW0iLCJub3RpZnkiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbGxiYWNrIiwiYWRkIiwibmFtZSIsImFicyIsInNoaWZ0IiwiUEkiLCJjb3MiLCJzdGFydEJ1dHRvblRleHQiLCJzdG9wQnV0dG9uVGV4dCIsInJlc2V0QnV0dG9uVGV4dCIsImlucHV0cyIsIm1pbiIsIm1heCIsInN0ZXAiLCJsYWJlbHMiLCJtb2RlbFBhcmFtcyIsInRvRml4ZWQiLCJmbG9vciIsInJvdW5kIiwicHJvcHMiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJERUZBVUxUX1ZJRVdCT1giLCJfc3ByaW5nU3ByaXRlIiwiX21hc3NTcHJpdGUiLCJfdmlld2JveCIsInZpZXdib3giLCJzZXRSYWRpdXMiLCJleHRlbmQiLCJfdXBkYXRlTWFzc1Bvc2l0aW9uIiwiY3JlYXRlRWxlbWVudE5TIiwiY2xhc3NMaXN0Iiwic2V0QXR0cmlidXRlIiwiX2NyZWF0ZVNwcmluZ1NwdGl0ZSIsIl9jcmVhdGVNYXNzU3ByaXRlIiwiU3ByaW5nU3ByaXRlIiwicG9zaXRpb24iLCJjb2lscyIsImNvaWxEaWFtZXRlciIsInNwcmluZ1dpZHRoIiwiZXh0ZW5zaW9uIiwiZ2V0RW5kUG9pbnQiLCJTcGhlcmVTcHJpdGUiLCJjeCIsImN5IiwieSIsInJhZGl1cyIsIm1hc3NSYWRpdXMiLCJtYXNzUG9zaXRpb24iLCJnZXRSYWRpdXMiLCJzZXRQb3NpdGlvbiIsIlBBUkFNX05BTUVTIiwiX3ZhbHVlIiwiX2lucHV0RWxlbSIsIl9sYWJlbEVsZW0iLCJkaXNhYmxlZCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJmaWx0ZXIiLCJhdHRyIiwiaW5jbHVkZXMiLCJfciIsIl9jeCIsIl9jeSIsIl9jaXJjbGUiLCJzZXRBdHRyaWJ1dGVOUyIsImNpcmNsZSIsImdyYWRpZW50cyIsImdyYWRpZW50IiwiY29sb3JzIiwibGVuZ3RoIiwiciIsImNvbG9yIiwiaW5kZXgiLCJqb2luIiwiaW5uZXJIVE1MIiwiSyIsIl9wYXRocyIsIl9jb2lscyIsImRlZmF1bHRTZXR0aW5ncyIsIl9zdGFydFBvc2l0aW9uIiwiX3NwcmluZ1dpZHRoIiwiX2NvaWxEaWFtZXRlciIsIl9lbmRQb2ludCIsInBhdGhzRGF0YSIsIl9nZW5lcmF0ZUNvbW1hbmRzT2ZQYXRocyIsInBhdGgiLCJkIiwiX3JlbmRlclBhdGhEYXRhIiwiY29tbWFuZHMiLCJsYXN0U2VnIiwicGF0aFNlZ0xpc3QiLCJnZXRJdGVtIiwidHlwZSIsIl9jcmVhdGVQYXRoIiwic3RhcnRQb3NpdGlvbiIsImhhbGZQZXJpb2QiLCJfY2FsY0hhbGZQZXJpb2QiLCJMIiwiZnJvbnRQYXRocyIsImJhY2tQYXRocyIsInhTaGlmdCIsInJlY3RIZWlnaHQiLCJzdGFydFBvaW50Iiwic3RhcnRSZWN0UG9pbnRzIiwiZW5kUG9pbnQiLCJwdXNoIiwiX2NhbGNSZWN0Q29tbWFuZHMiLCJzdGFydEN1cnZlUG9pbnRzIiwiY29udHJvbFBvaW50MSIsImNvbnRyb2xQb2ludDIiLCJfY2FsY0N1cnZlQ29tbWFuZHMiLCJpIiwiZGlyIiwicGF0aFBvaW50cyIsImRhdGEiLCJlbmRDdXJ2ZVBvaW50cyIsImVuZFJlY3RQb2ludHMiLCJ3aWR0aCIsImNvbW1hbmQiLCJ4MSIsInkxIiwieDIiLCJ5MiIsInNlZ21lbnRzIiwic2VnIiwicmVzdWx0IiwibWFzc1NwcmluZ1NldHRpbmdzIiwiY29udGFpbmVyIiwid2lkZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnFEO0FBQ3RDO0FBQ2YsaUNBQWlDLDZEQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNB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QXdDO0FBQUEsTUFBZHhCLEtBQWMsUUFBN0J5QixXQUE2QixDQUFkekIsS0FBYztBQUMzRTlCLFFBQU0sQ0FBQ3NELFNBQUQsQ0FBTixHQUFvQnhCLEtBQXBCO0FBQ0QsQ0FGRDtBQUlBLElBQU1nTyxTQUFTLEdBQUc3TixRQUFRLENBQUNpRCxhQUFULENBQXVCLFlBQXZCLENBQWxCO0FBQ0EsSUFBTW5GLEtBQUssR0FBRyxJQUFJK0Ysb0VBQUosQ0FBb0I5RixNQUFwQixDQUFkO0FBQ0EsSUFBTStQLE1BQU0sR0FBRyxJQUFJalEsK0RBQUosQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQ3pDd0osU0FBTyxFQUFFLENBQUMsR0FBRCxFQUFNLEdBQU4sQ0FEZ0M7QUFFekNXLE9BQUssRUFBRSxDQUZrQztBQUd6Q0UsYUFBVyxFQUFFLENBSDRCO0FBSXpDRCxjQUFZLEVBQUUsRUFKMkI7QUFLekN4SixrQkFBZ0IsRUFBRTtBQUx1QixDQUE1QixDQUFmO0FBT0FtUCxTQUFTLENBQUNwTixNQUFWLENBQWlCcU4sTUFBTSxDQUFDNU0sT0FBUCxFQUFqQixFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7XG4gIHJldHVybiBhcnJheVdpdGhIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgeyBNYXNzU3ByaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9tYXNzLXNwcmluZy9tYXNzLXNwcmluZyc7XHJcbmltcG9ydCB7IFJhbmdlSW5wdXQgfSBmcm9tICcuLi9jb21wb25lbnRzL3JhbmdlLWlucHV0L3JhbmdlLWlucHV0JztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uJztcclxuaW1wb3J0IHsgTGFiZWwgfSBmcm9tICcuLi9jb21wb25lbnRzL2xhYmVsL2xhYmVsJztcclxuaW1wb3J0IHNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFzc1NwcmluZ1dpZGdldCB7XHJcbiAgY29uc3RydWN0b3IobW9kZWwsIHBhcmFtcyA9IHt9KSB7XHJcbiAgICB0aGlzLl9tb2RlbCA9IG1vZGVsO1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJ21hc3Mtc3ByaW5nJztcclxuICAgIHRoaXMuX2VsZW0gPSBudWxsO1xyXG4gICAgdGhpcy5fcmVxdWVzdElkID0gbnVsbDtcclxuICAgIHRoaXMuX2lucHV0Q29tcG9uZW50cyA9IG51bGw7XHJcbiAgICB0aGlzLl9tYXNzU3ByaW5nID0gbnVsbDtcclxuICAgIHRoaXMuX3N0YXJ0U3RvcEJ1dHRvbiA9IG51bGw7XHJcbiAgICB0aGlzLl9yZXNldEJ1dHRvbiA9IG51bGw7XHJcbiAgICB0aGlzLl9sYWJlbHMgPSBudWxsO1xyXG4gICAgdGhpcy5fbWFzc1JhZGl1c0ZhY3RvciA9IHBhcmFtcy5tYXNzUmFkaXVzRmFjdG9yID8/IHNldHRpbmdzLm1hc3NSYWRpdXNGYWN0b3I7XHJcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5faW5pdChwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gIH1cclxuXHJcbiAgLy8g0LzQtdGC0L7QtCDQvtCx0L3QvtCy0LvRj9C10YIg0L/RgNC10LTRgdGC0LDQstC70LXQvdC40LUg0LIg0YHQvtC+0YLQstC10YLRgdGC0LLQuNC4INGBINGB0L7RgdGC0L7Rj9C90LjQtdC8INC80L7QtNC10LvQuFxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIGNvbnN0IG1vZGVsU3RhdGUgPSB0aGlzLl9tb2RlbC5nZXRTdGF0ZSgpO1xyXG4gICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC+0LHQu9Cw0YHRgtGMINCy0LjQt9GD0LDQu9C40LfQsNGG0LjQuFxyXG4gICAgdGhpcy5fdXBkYXRlVmlzdWFsaXphdGlvblBhbmVsKG1vZGVsU3RhdGUpO1xyXG4gICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC+0LHQu9Cw0YHRgtGMINC/0LDRgNCw0LzQtdGC0YDQvtCyXHJcbiAgICB0aGlzLl91cGRhdGVDb250cm9sbFBhbmVsKG1vZGVsU3RhdGUpO1xyXG4gICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC+0LHQu9Cw0YHRgtGMINGF0LDRgNCw0LrRgtC10YDQuNGB0YLQuNC6XHJcbiAgICB0aGlzLl91cGRhdGVJbmZvcm1hdGlvblBhbmVsKG1vZGVsU3RhdGUpO1xyXG4gICAgLy8g0LfQsNC/0YPRgdC60LDQtdC8INC40LvQuCDQvtGB0YLQsNC90LLQsNC70LjQstCw0LXQvCDQsNC90LjQvNCw0YbQuNGOINC/0YDQvtGG0LXRgdGB0LBcclxuICAgIGlmICh0aGlzLl9tb2RlbC5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVDb250cm9sbFBhbmVsKCk7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9lbmFibGVDb250cm9sbFBhbmVsKCk7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX3JlcXVlc3RJZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tINC60L7QvdGC0YDQvtC70LvQtdGAIC0tLS0tXHJcblxyXG4gIF90b2dnbGVQcm9jZXNzKCkge1xyXG4gICAgdGhpcy5fbW9kZWwuaXNBY3RpdmUoKSA/IHRoaXMuX21vZGVsLnN0b3AoKSA6IHRoaXMuX21vZGVsLnN0YXJ0KCk7XHJcbiAgfVxyXG5cclxuICBfcmVzZXRQcm9jZXNzKCkge1xyXG4gICAgdGhpcy5fbW9kZWwucmVzZXQoKTtcclxuICB9XHJcblxyXG4gIF9zZXRNb2RlbFBhcmFtKHBhcmFtLCB2YWx1ZSkge1xyXG4gICAgdGhpcy5fbW9kZWwuc2V0UGFyYW1zKHsgW3BhcmFtXTogTnVtYmVyKHZhbHVlKSB9KTtcclxuICB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBfaW5pdChwYXJhbXMpIHtcclxuICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuX2VsZW0uY2xhc3NOYW1lID0gdGhpcy5fY2xhc3NOYW1lO1xyXG5cclxuICAgIGNvbnN0IHZpc3VhbGl6YXRpb25QYW5lbCA9IHRoaXMuX2NyZWF0ZVZpc3VhbGl6YXRpb25QYW5lbChwYXJhbXMpO1xyXG4gICAgY29uc3QgY29udHJvbGxQYW5lbCA9IHRoaXMuX2NyZWF0ZUNvbnRyb2xsUGFuZWwocGFyYW1zKTtcclxuICAgIGNvbnN0IGluZm9ybWF0aW9uUGFuZWwgPSB0aGlzLl9jcmVhdGVJbmZvcm1hdGlvblBhbmVsKHBhcmFtcyk7XHJcbiAgICB0aGlzLl9lbGVtLmFwcGVuZCh2aXN1YWxpemF0aW9uUGFuZWwsIGNvbnRyb2xsUGFuZWwsIGluZm9ybWF0aW9uUGFuZWwpO1xyXG5cclxuICAgIC8vINC/0L7QtNC/0LjRgdGL0LLQsNC10LzRgdGPINC90LAg0L7QsdC90L7QstC70LXQvdC40Y8g0LzQvtC00LXQu9C4XHJcbiAgICB0aGlzLl9tb2RlbC5hdHRhY2godGhpcy51cGRhdGUpO1xyXG4gICAgLy8g0YHRgNCw0LfRgyDRgdC40L3RhdGA0L7QvdC40LfQuNGA0YPQtdC8INC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1INGBINC80L7QtNC10LvRjNGOXHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZVZpc3VhbGl6YXRpb25QYW5lbChwYXJhbXMpIHtcclxuICAgIGNvbnN0IHZpc3VhbGl6YXRpb25QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdmlzdWFsaXphdGlvblBhbmVsLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX3BhbmVsICR7dGhpcy5fY2xhc3NOYW1lfV9fcGFuZWxfdmlzdWFsaXphdGlvbmA7XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0L/RgNGD0LbQuNC90L3Ri9C5INC80LDRj9GC0L3QuNC6XHJcbiAgICB0aGlzLl9tYXNzU3ByaW5nID0gbmV3IE1hc3NTcHJpbmcocGFyYW1zKTtcclxuXHJcbiAgICBjb25zdCBidXR0b25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBidXR0b25MaXN0LmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX2J1dHRvbi1saXN0YDtcclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQutC90L7Qv9C60YMg0YHRgtCw0YDRgtCwINC4INC+0YHRgtCw0L3QvtCy0LrQuFxyXG4gICAgdGhpcy5fc3RhcnRTdG9wQnV0dG9uID0gbmV3IEJ1dHRvbih7XHJcbiAgICAgIHRleHQ6IHNldHRpbmdzLnN0YXJ0QnV0dG9uVGV4dCxcclxuICAgICAgb25DbGljazogdGhpcy5fdG9nZ2xlUHJvY2Vzcy5iaW5kKHRoaXMpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzdGFydFN0b3BCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGFydFN0b3BCdXR0b25XcmFwcGVyLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX2J1dHRvbmA7XHJcbiAgICBzdGFydFN0b3BCdXR0b25XcmFwcGVyLmFwcGVuZCh0aGlzLl9zdGFydFN0b3BCdXR0b24uZ2V0RWxlbSgpKTtcclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQutC90L7Qv9C60YMg0YHQsdGA0L7RgdCwXHJcbiAgICB0aGlzLl9yZXNldEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xyXG4gICAgICB0ZXh0OiBzZXR0aW5ncy5yZXNldEJ1dHRvblRleHQsXHJcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX3Jlc2V0UHJvY2Vzcy5iaW5kKHRoaXMpLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCByZXNldEJ1dHRvbldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHJlc2V0QnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19idXR0b25gO1xyXG4gICAgcmVzZXRCdXR0b25XcmFwcGVyLmFwcGVuZCh0aGlzLl9yZXNldEJ1dHRvbi5nZXRFbGVtKCkpO1xyXG5cclxuICAgIGJ1dHRvbkxpc3QuYXBwZW5kKHN0YXJ0U3RvcEJ1dHRvbldyYXBwZXIsIHJlc2V0QnV0dG9uV3JhcHBlcik7XHJcbiAgICB2aXN1YWxpemF0aW9uUGFuZWwuYXBwZW5kKHRoaXMuX21hc3NTcHJpbmcuZ2V0RWxlbSgpLCBidXR0b25MaXN0KTtcclxuICAgIHJldHVybiB2aXN1YWxpemF0aW9uUGFuZWw7XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlQ29udHJvbGxQYW5lbCgpIHtcclxuICAgIGNvbnN0IGNvbnRyb2xsUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRyb2xsUGFuZWwuY2xhc3NOYW1lID0gYCR7dGhpcy5fY2xhc3NOYW1lfV9fcGFuZWwgJHt0aGlzLl9jbGFzc05hbWV9X19wYW5lbF9jb250cm9sbGA7XHJcblxyXG4gICAgdGhpcy5faW5wdXRDb21wb25lbnRzID0gc2V0dGluZ3MuaW5wdXRzLm1hcCgoeyBwYXJhbU5hbWUsIGlucHV0UGFyYW1zLCBnZXRUZXh0IH0pID0+ICh7XHJcbiAgICAgIHBhcmFtTmFtZSxcclxuICAgICAgZ2V0VGV4dCxcclxuICAgICAgaW5wdXQ6IG5ldyBSYW5nZUlucHV0KHtcclxuICAgICAgICAuLi5pbnB1dFBhcmFtcyxcclxuICAgICAgICBsYWJlbDogZ2V0VGV4dChpbnB1dFBhcmFtcy52YWx1ZSksXHJcbiAgICAgICAgb25DaGFuZ2U6IChpbnB1dCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fc2V0TW9kZWxQYXJhbShwYXJhbU5hbWUsIGlucHV0LmdldFZhbHVlKCkpO1xyXG4gICAgICAgICAgLy8g0L7RgtC80LXQvdGP0Lwg0LjQt9C80LXQvdC10L3QuNC1INC30L3QsNGH0LXQvdC40Y8g0LjQvdC/0YPRgtCwXHJcbiAgICAgICAgICAvLyDQu9GO0LHRi9C1INC40LfQvNC10L3QtdC90LjRjyB2aWV3INC/0YDQvtC40YHRhdC+0LTRj9GCINCyINC80LXRgtC+0LTQtSB1cGRhdGVcclxuICAgICAgICAgIGlucHV0LmFib3J0Q2hhbmdlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRFbGVtcyA9IHRoaXMuX2lucHV0Q29tcG9uZW50cy5tYXAoKHsgaW5wdXQgfSkgPT4ge1xyXG4gICAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgaW5wdXRXcmFwcGVyLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX2lucHV0YDtcclxuICAgICAgaW5wdXRXcmFwcGVyLmFwcGVuZChpbnB1dC5nZXRFbGVtKCkpO1xyXG4gICAgICByZXR1cm4gaW5wdXRXcmFwcGVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29udHJvbGxQYW5lbC5hcHBlbmQoLi4uaW5wdXRFbGVtcyk7XHJcbiAgICByZXR1cm4gY29udHJvbGxQYW5lbDtcclxuICB9XHJcblxyXG4gIF9jcmVhdGVJbmZvcm1hdGlvblBhbmVsKCkge1xyXG4gICAgY29uc3QgaW5mb3JtYXRpb25QYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mb3JtYXRpb25QYW5lbC5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19wYW5lbCAke3RoaXMuX2NsYXNzTmFtZX1fX3BhbmVsX2luZm9ybWF0aW9uYDtcclxuXHJcbiAgICB0aGlzLl9sYWJlbHMgPSBzZXR0aW5ncy5sYWJlbHMubWFwKChnZXRUZXh0KSA9PiAoe1xyXG4gICAgICBnZXRUZXh0LFxyXG4gICAgICBsYWJlbDogbmV3IExhYmVsKCksXHJcbiAgICB9KSk7XHJcblxyXG4gICAgY29uc3QgbGFiZWxFbGVtcyA9IHRoaXMuX2xhYmVscy5tYXAoKHsgbGFiZWwgfSkgPT4ge1xyXG4gICAgICBjb25zdCBsYWJlbFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgbGFiZWxXcmFwcGVyLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX2xhYmVsYDtcclxuICAgICAgbGFiZWxXcmFwcGVyLmFwcGVuZChsYWJlbC5nZXRFbGVtKCkpO1xyXG4gICAgICByZXR1cm4gbGFiZWxXcmFwcGVyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaW5mb3JtYXRpb25QYW5lbC5hcHBlbmQoLi4ubGFiZWxFbGVtcyk7XHJcblxyXG4gICAgcmV0dXJuIGluZm9ybWF0aW9uUGFuZWw7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlVmlzdWFsaXphdGlvblBhbmVsKG1vZGVsU3RhdGUpIHtcclxuICAgIC8vINGB0L3QsNGH0LDQu9CwINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INGA0LDQtNC40YPRgSDRgdGE0LXRgNGLLCDQsCDQv9C+0YLQvtC8INGA0LDRgdGC0Y/QttC10L3QuNC1INC/0YDRg9C20LjQvdGLXHJcbiAgICAvLyDRgi4g0LouINC/0L7Qu9C+0LbQtdC90LjQtSDRgdGE0LXRgNGLINC/0L7RgdC70LUg0YDQsNGB0YLRj9C20LXQvdC40Y8g0L/RgNGD0LbQuNC90Ysg0LfQsNCy0LjRgdC40YIg0L7RgiDRgNCw0LTQuNGD0YHQsCDRgdGE0LXRgNGLXHJcbiAgICB0aGlzLl9tYXNzU3ByaW5nLnNldE1hc3NSYWRpdXModGhpcy5fY2FsY01hc3NSYWRpdXMobW9kZWxTdGF0ZS5tKSk7XHJcbiAgICB0aGlzLl9tYXNzU3ByaW5nLmV4dGVuZFNwcmluZyhtb2RlbFN0YXRlLngpO1xyXG4gICAgdGhpcy5fc3RhcnRTdG9wQnV0dG9uLnNldFRleHQobW9kZWxTdGF0ZS5hY3RpdmUgPyBzZXR0aW5ncy5zdG9wQnV0dG9uVGV4dCA6IHNldHRpbmdzLnN0YXJ0QnV0dG9uVGV4dCk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlQ29udHJvbGxQYW5lbChtb2RlbFN0YXRlKSB7XHJcbiAgICB0aGlzLl9pbnB1dENvbXBvbmVudHMuZm9yRWFjaCgoeyBwYXJhbU5hbWUsIGlucHV0LCBnZXRUZXh0IH0pID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBtb2RlbFN0YXRlW3BhcmFtTmFtZV07XHJcbiAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaW5wdXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIGlucHV0LnNldExhYmVsKGdldFRleHQodmFsdWUpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlSW5mb3JtYXRpb25QYW5lbChtb2RlbFN0YXRlKSB7XHJcbiAgICB0aGlzLl9sYWJlbHMuZm9yRWFjaCgoeyBnZXRUZXh0LCBsYWJlbCB9KSA9PiBsYWJlbC5zZXRUZXh0KGdldFRleHQobW9kZWxTdGF0ZSkpKTtcclxuICB9XHJcblxyXG4gIF9lbmFibGVDb250cm9sbFBhbmVsKCkge1xyXG4gICAgY29uc3Qgc2NyZWVuID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jbGFzc05hbWV9X19wYW5lbF9jb250cm9sbCAuJHt0aGlzLl9jbGFzc05hbWV9X19zY3JlZW5gKTtcclxuXHJcbiAgICBpZiAoc2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbi5yZW1vdmUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9kaXNhYmxlQ29udHJvbGxQYW5lbCgpIHtcclxuICAgIGNvbnN0IHBhbmVsID0gdGhpcy5fZWxlbS5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jbGFzc05hbWV9X19wYW5lbF9jb250cm9sbGApO1xyXG4gICAgbGV0IHNjcmVlbiA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoYC4ke3RoaXMuX2NsYXNzTmFtZX1fX3NjcmVlbmApO1xyXG5cclxuICAgIGlmICghc2NyZWVuKSB7XHJcbiAgICAgIHNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBzY3JlZW4uY2xhc3NOYW1lID0gYCR7dGhpcy5fY2xhc3NOYW1lfV9fc2NyZWVuYDtcclxuICAgIH1cclxuXHJcbiAgICBwYW5lbC5hcHBlbmQoc2NyZWVuKTtcclxuICB9XHJcblxyXG4gIF9jYWxjTWFzc1JhZGl1cyhtYXNzKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWFzc1JhZGl1c0ZhY3RvciAqIE1hdGguY2JydChtYXNzKTtcclxuICB9XHJcbn1cclxuIiwiLyogXHJcbiAg0LLRgdC1INC00LvQuNC90Ysg0LIg0YHQsNC90YLQuNC80LXRgtGA0LDRhSwg0LAg0LLRgNC10LzRjyDQsiDRgdC10LrRg9C90LTQsNGFXHJcblxyXG4gIG0gICAtINC80LDRgdGB0LAg0LPRgNGD0LfQsFxyXG4gIGsgICAtINC60L7RjdGE0YTQuNGG0LjQtdC90YIg0YPQv9GA0YPQs9C+0YHRgtC4INC/0YDRg9C20LjQvdGLXHJcbiAgQSAgIC0g0LDQvNC/0LvQuNGC0YPQtNCwINC60L7Qu9C10LHQsNC90LjQuSAo0L7RgtC60LvQvtC90LXQvdC40LUg0L7RgiDRgdC+0YHRgtC+0Y/QvdC40Y8g0YDQsNCy0L3QvtCy0LXRgdC40Y8pXHJcbiAgdyAgIC0g0YbQuNC60LvQuNGH0LXRgdC60LDRjyDRh9Cw0YHRgtC+0YLQsFxyXG4gIHQgICAtINCy0YDQtdC80Y8g0L/RgNC+0YjQtdC00YjQtdC1INC/0L7RgdC70LUg0YHRgtCw0YDRgtCwXHJcbiAgeDAgIC0g0L/QvtC70L7QttC10L3QuNC1INC60L7QvdGG0LAg0L/RgNGD0LbQuNC90Ysg0LIg0YHQvtGB0YLQvtGP0L3QuNC4INGA0LDQstC90L7QstC10YHQuNGPXHJcbiAgZHggIC0g0L7RgtC60L7Qu9C90LXQvdC40LUg0LrQvtC90YbQsCDQv9GA0YPQttC40L3RiyDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L4g0YHQvtGB0YLQvtGP0L3QuNGPINGA0LDQstC90L7QstC10YHQuNGPXHJcbiAgeCAgIC0g0YLQtdC60YPRidC10LUg0L/QvtC70L7QttC10L3QuNC1INC60L7QvdGG0LAg0L/RgNGD0LbQuNC90YtcclxuICBuICAgLSDQutC+0LvQuNGH0LXRgdGC0LLQviDQutC+0LvQtdCx0LDQvdC40LlcclxuKi9cclxuXHJcbmNvbnN0IERFRkFVTFRfUEFSQU1TID0geyBtOiAwLjUsIGs6IDUsIEE6IDEwIH07XHJcbmNvbnN0IGNhbGNFeHRlbnNpb24gPSAoeyBtLCBrIH0pID0+ICgxMDAgKiA5LjggKiBtKSAvIGs7XHJcbmNvbnN0IGNhbGNBbmd1bGFyRnJlcXVlbmN5ID0gKHsgbSwgayB9KSA9PiBNYXRoLnNxcnQoayAvIG0pO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hc3NTcHJpbmdNb2RlbCB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcyA9IG5ldyBTZXQoKTtcclxuICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gbnVsbDtcclxuICAgIHRoaXMuX3BhcmFtcyA9IHsgLi4uREVGQVVMVF9QQVJBTVMgfTtcclxuICAgIHRoaXMuX2FuZ3VsYXJGcmVxdWVuY3kgPSBjYWxjQW5ndWxhckZyZXF1ZW5jeShERUZBVUxUX1BBUkFNUyk7XHJcbiAgICAvLyDRgNCw0YHRgtGP0LbQtdC90LjQtSDQv9GA0YPQttC40L3RiyDQv9C+0LQg0LTQtdC50YHRgtCy0LjQtdC8INCy0LXRgdCwINCyINGB0L7RgdGC0L7Rj9C90LjQuCDQv9C+0LrQvtGPXHJcbiAgICB0aGlzLl9pbml0aWFsRXh0ZW5zaW9uID0gY2FsY0V4dGVuc2lvbihERUZBVUxUX1BBUkFNUyk7XHJcbiAgICB0aGlzLnNldFBhcmFtcyhwYXJhbXMpO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKSB7XHJcbiAgICBjb25zdCB0aW1lID0gdGhpcy5fZ2V0VGltZSgpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5fY2FsY09mZnNldCh0aW1lKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnRoaXMuX3BhcmFtcyxcclxuICAgICAgdzogdGhpcy5fYW5ndWxhckZyZXF1ZW5jeSxcclxuICAgICAgdDogdGltZSxcclxuICAgICAgeDA6IHRoaXMuX2luaXRpYWxFeHRlbnNpb24sXHJcbiAgICAgIGR4OiBvZmZzZXQsXHJcbiAgICAgIHg6IHRoaXMuX2luaXRpYWxFeHRlbnNpb24gKyBvZmZzZXQsXHJcbiAgICAgIG46IHRoaXMuX2NhbGNOdW1iZXJPZlZpYnJhdGlvbih0aW1lKSxcclxuICAgICAgYWN0aXZlOiB0aGlzLmlzQWN0aXZlKCksXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2V0UGFyYW1zKHBhcmFtcykge1xyXG4gICAgY29uc3QgbmV3UGFyYW1zID0geyAuLi50aGlzLl9wYXJhbXMgfTtcclxuICAgIGxldCBzdGF0ZUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICBPYmplY3QuZW50cmllcyh0aGlzLl9wYXJhbXMpLmZvckVhY2goKFtwYXJhbU5hbWUsIHByZXZQYXJhbVZhbHVlXSkgPT4ge1xyXG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHBhcmFtcywgcGFyYW1OYW1lKSkge1xyXG4gICAgICAgIGNvbnN0IHBhcmFtVmFsdWUgPSBwYXJhbXNbcGFyYW1OYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2lzVmFsaWRQYXJhbShwYXJhbU5hbWUsIHBhcmFtVmFsdWUpICYmIHByZXZQYXJhbVZhbHVlICE9PSBwYXJhbVZhbHVlKSB7XHJcbiAgICAgICAgICBzdGF0ZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgbmV3UGFyYW1zW3BhcmFtTmFtZV0gPSBwYXJhbVZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLl9wYXJhbXMgPSBuZXdQYXJhbXM7XHJcbiAgICAgIHRoaXMuX2luaXRpYWxFeHRlbnNpb24gPSBjYWxjRXh0ZW5zaW9uKG5ld1BhcmFtcyk7XHJcbiAgICAgIHRoaXMuX2FuZ3VsYXJGcmVxdWVuY3kgPSBjYWxjQW5ndWxhckZyZXF1ZW5jeShuZXdQYXJhbXMpO1xyXG4gICAgICB0aGlzLnJlc2V0KCk7XHJcbiAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuX3RpbWUgPSAwO1xyXG4gICAgdGhpcy5fc3RhcnRUaW1lID0gdGhpcy5pc0FjdGl2ZSgpID8gcGVyZm9ybWFuY2Uubm93KCkgOiBudWxsO1xyXG4gICAgdGhpcy5ub3RpZnkoKTtcclxuICB9XHJcblxyXG4gIHN0YXJ0KCkge1xyXG4gICAgaWYgKCF0aGlzLmlzQWN0aXZlKCkpIHtcclxuICAgICAgaWYgKHRoaXMuX3N0YXJ0VGltZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdG9wKCkge1xyXG4gICAgaWYgKHRoaXMuaXNBY3RpdmUoKSkge1xyXG4gICAgICB0aGlzLl90aW1lID0gdGhpcy5fZ2V0VGltZSgpO1xyXG4gICAgICB0aGlzLl9zdGFydFRpbWUgPSBudWxsO1xyXG4gICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXR0YWNoKGNhbGxiYWNrKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MuYWRkKGNhbGxiYWNrKTtcclxuICB9XHJcblxyXG4gIGRldGFjaChjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBub3RpZnkoKSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MuZm9yRWFjaCgoY2FsbGJhY2spID0+IHtcclxuICAgICAgY2FsbGJhY2suY2FsbChudWxsLCB0aGlzKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2lzVmFsaWRQYXJhbShuYW1lLCB2YWx1ZSkge1xyXG4gICAgc3dpdGNoIChuYW1lKSB7XHJcbiAgICAgIGNhc2UgJ20nOlxyXG4gICAgICBjYXNlICdrJzpcclxuICAgICAgICAvLyDQvNCw0YHRgdCwINC4INC60L7RjdGE0YTQuNGG0LjQtdC90YIg0YPQv9GA0YPQs9C+0YHRgtC4INC90LUg0LzQvtCz0YPRgiDQsdGL0YLRjCDQvtGC0YDQuNGG0LDRgtC10LvRjNC90YvQvNC4XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgdmFsdWUgPiAwO1xyXG4gICAgICBjYXNlICdBJzpcclxuICAgICAgICAvLyDQt9Cw0LTQsNC90L3QvtC1INC+0YLQutC70L7QvdC10L3QuNC1INC90LUg0LzQvtC20LXRgiDQsdGL0YLRjCDQv9C+INC80L7QtNGD0LvRjiDQsdC+0LvRjNGI0LUg0LjQt9C90LDRh9Cw0LvRjNC90L7Qs9C+INGA0LDRgdGC0Y/QttC10L3QuNGPINC/0YDRg9C20LjQvdGLXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgJiYgTWF0aC5hYnModmFsdWUpIDw9IHRoaXMuX2luaXRpYWxFeHRlbnNpb247XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8g0LLQvtC30LLRgNCw0YnQsNC10YIg0LLRgNC10LzRjyDQv9GA0L7RiNC10LTRiNC10LUg0YEg0L3QsNGH0LDQu9CwINC/0YDQvtGG0LXRgdGB0LBcclxuICBfZ2V0VGltZSgpIHtcclxuICAgIGNvbnN0IHNoaWZ0ID0gdGhpcy5pc0FjdGl2ZSgpID8gKHBlcmZvcm1hbmNlLm5vdygpIC0gdGhpcy5fc3RhcnRUaW1lKSAvIDEwMDAgOiAwO1xyXG4gICAgcmV0dXJuIHRoaXMuX3RpbWUgKyBzaGlmdDtcclxuICB9XHJcblxyXG4gIF9jYWxjTnVtYmVyT2ZWaWJyYXRpb24odGltZSkge1xyXG4gICAgcmV0dXJuICh0aGlzLl9hbmd1bGFyRnJlcXVlbmN5ICogdGltZSkgLyAoMiAqIE1hdGguUEkpO1xyXG4gIH1cclxuXHJcbiAgX2NhbGNPZmZzZXQodGltZSkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmFtcy5BICogTWF0aC5jb3ModGhpcy5fYW5ndWxhckZyZXF1ZW5jeSAqIHRpbWUpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbWFzc1JhZGl1c0ZhY3RvcjogMTYsXHJcbiAgc3RhcnRCdXR0b25UZXh0OiAn0JfQsNC/0YPRgdGC0LjRgtGMJyxcclxuICBzdG9wQnV0dG9uVGV4dDogJ9Ce0YHRgtCw0L3QvtCy0LjRgtGMJyxcclxuICByZXNldEJ1dHRvblRleHQ6ICfQodCx0YDQvtGB0LjRgtGMJyxcclxuICBpbnB1dHM6IFtcclxuICAgIHtcclxuICAgICAgcGFyYW1OYW1lOiAnbScsXHJcbiAgICAgIGlucHV0UGFyYW1zOiB7XHJcbiAgICAgICAgbWluOiAwLjUsXHJcbiAgICAgICAgbWF4OiAxLFxyXG4gICAgICAgIHN0ZXA6IDAuMSxcclxuICAgICAgICB2YWx1ZTogMC41LFxyXG4gICAgICB9LFxyXG4gICAgICBnZXRUZXh0OiAodmFsdWUpID0+IGDQnNCw0YHRgdCwINCz0YDRg9C30LAgKG0pOiAke3ZhbHVlfSDQutCzYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhcmFtTmFtZTogJ2snLFxyXG4gICAgICBpbnB1dFBhcmFtczoge1xyXG4gICAgICAgIG1pbjogNSxcclxuICAgICAgICBtYXg6IDksXHJcbiAgICAgICAgc3RlcDogMSxcclxuICAgICAgICB2YWx1ZTogNSxcclxuICAgICAgfSxcclxuICAgICAgZ2V0VGV4dDogKHZhbHVlKSA9PiBg0JbQtdGB0YLQutC+0YHRgtGMINC/0YDRg9C20LjQvdGLIChrKTogJHt2YWx1ZX0g0J0v0LxgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGFyYW1OYW1lOiAnQScsXHJcbiAgICAgIGlucHV0UGFyYW1zOiB7XHJcbiAgICAgICAgbWluOiAwLFxyXG4gICAgICAgIG1heDogMjAsXHJcbiAgICAgICAgc3RlcDogMixcclxuICAgICAgICB2YWx1ZTogMTAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRleHQ6ICh2YWx1ZSkgPT4gYNCe0YLQutC70L7QvdC10L3QuNC1ICh4MCk6ICR7dmFsdWV9INGB0LxgLFxyXG4gICAgfSxcclxuICBdLFxyXG4gIGxhYmVsczogW1xyXG4gICAgKG1vZGVsUGFyYW1zKSA9PiBg0KbQuNC60LvQuNGH0LXRgdC60LDRjyDRh9Cw0YHRgtC+0YLQsDogJHttb2RlbFBhcmFtcy53LnRvRml4ZWQoMil9INGA0LDQtC/RgWAsXHJcbiAgICAobW9kZWxQYXJhbXMpID0+IGDQktGA0LXQvNGPINC/0YDQvtGI0LXQtNGI0LXQtSDQv9C+0YHQu9C1INGB0YLQsNGA0YLQsDogJHttb2RlbFBhcmFtcy50LnRvRml4ZWQoMil9INGB0LXQutGD0L3QtGAsXHJcbiAgICAobW9kZWxQYXJhbXMpID0+IGDQmtC+0LvQuNGH0LXRgdGC0LLQviDQv9C+0LvQvdGL0YUg0LrQvtC70LXQsdCw0L3QuNC5OiAke01hdGguZmxvb3IobW9kZWxQYXJhbXMubil9YCxcclxuICAgIChtb2RlbFBhcmFtcykgPT4gYNCe0YLQutC70L7QvdC10L3QuNC1INC+0YIg0YDQsNCy0L3QvtCy0LXRgdC40Y86ICR7TWF0aC5yb3VuZChtb2RlbFBhcmFtcy5keCl9INGB0LxgLFxyXG4gIF0sXHJcbn07XHJcbiIsImltcG9ydCAnLi9idXR0b24uY3NzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcclxuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICdidXR0b24nO1xyXG4gICAgdGhpcy5fZWxlbSA9IG51bGw7XHJcbiAgICB0aGlzLl9pbml0KHByb3BzKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICB9XHJcblxyXG4gIF9pbml0KHByb3BzKSB7XHJcbiAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0aGlzLl9lbGVtLmNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzTmFtZTtcclxuICAgIHRoaXMuX2VsZW0udGV4dENvbnRlbnQgPSBwcm9wcy50ZXh0ID8/ICdCdXR0b24nO1xyXG5cclxuICAgIGlmICh0eXBlb2YgcHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICB0aGlzLl9lbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcHJvcHMub25DbGljay5jYWxsKG51bGwsIHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbS50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldFRleHQodmFsdWUpIHtcclxuICAgIHRoaXMuX2VsZW0udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL2xhYmVsLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiZWwge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcclxuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICdsYWJlbCc7XHJcbiAgICB0aGlzLl9lbGVtID0gbnVsbDtcclxuICAgIHRoaXMuX2luaXQocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gIH1cclxuXHJcbiAgX2luaXQocHJvcHMpIHtcclxuICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuX2VsZW0uY2xhc3NOYW1lID0gdGhpcy5fY2xhc3NOYW1lO1xyXG4gICAgdGhpcy5fZWxlbS50ZXh0Q29udGVudCA9IHByb3BzLnRleHQgPz8gJ1RleHQnO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtLnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0VGV4dCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZWxlbS50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTcHJpbmdTcHJpdGUgfSBmcm9tICcuLi9zcHJpbmctc3ByaXRlL3NwcmluZy1zcHJpdGUnO1xyXG5pbXBvcnQgeyBTcGhlcmVTcHJpdGUgfSBmcm9tICcuLi9zcGhlcmUtc3ByaXRlL3NwaGVyZS1zcHJpdGUnO1xyXG5pbXBvcnQgJy4vbWFzcy1zcHJpbmcuY3NzJztcclxuXHJcbmNvbnN0IERFRkFVTFRfVklFV0JPWCA9IFs0MDAsIDMwMF07XHJcblxyXG5leHBvcnQgY2xhc3MgTWFzc1NwcmluZyB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJ21hc3Mtc3ByaW5nJztcclxuICAgIHRoaXMuX2VsZW0gPSBudWxsO1xyXG4gICAgdGhpcy5fc3ByaW5nU3ByaXRlID0gbnVsbDtcclxuICAgIHRoaXMuX21hc3NTcHJpdGUgPSBudWxsO1xyXG4gICAgdGhpcy5fdmlld2JveCA9IHByb3BzLnZpZXdib3ggPz8gREVGQVVMVF9WSUVXQk9YO1xyXG5cclxuICAgIHRoaXMuX2luaXQocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gIH1cclxuXHJcbiAgc2V0TWFzc1JhZGl1cyh2YWx1ZSkge1xyXG4gICAgdGhpcy5fbWFzc1Nwcml0ZS5zZXRSYWRpdXModmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgZXh0ZW5kU3ByaW5nKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9zcHJpbmdTcHJpdGUuZXh0ZW5kKHZhbHVlKTtcclxuICAgIHRoaXMuX3VwZGF0ZU1hc3NQb3NpdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgX2luaXQocHJvcHMpIHtcclxuICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzTmFtZSk7XHJcbiAgICB0aGlzLl9lbGVtLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt0aGlzLl92aWV3Ym94WzBdfSAke3RoaXMuX3ZpZXdib3hbMV19YCk7XHJcbiAgICB0aGlzLl9lbGVtLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuXHJcbiAgICB0aGlzLl9zcHJpbmdTcHJpdGUgPSB0aGlzLl9jcmVhdGVTcHJpbmdTcHRpdGUocHJvcHMpO1xyXG4gICAgdGhpcy5fbWFzc1Nwcml0ZSA9IHRoaXMuX2NyZWF0ZU1hc3NTcHJpdGUocHJvcHMpO1xyXG4gICAgdGhpcy5fdXBkYXRlTWFzc1Bvc2l0aW9uKCk7XHJcblxyXG4gICAgdGhpcy5fZWxlbS5hcHBlbmQodGhpcy5fc3ByaW5nU3ByaXRlLmdldEVsZW0oKSwgdGhpcy5fbWFzc1Nwcml0ZS5nZXRFbGVtKCkpO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZVNwcmluZ1NwdGl0ZShwcm9wcykge1xyXG4gICAgcmV0dXJuIG5ldyBTcHJpbmdTcHJpdGUoe1xyXG4gICAgICBwb3NpdGlvbjogW3RoaXMuX3ZpZXdib3hbMF0gLyAyLCAwXSxcclxuICAgICAgY29pbHM6IHByb3BzLmNvaWxzLFxyXG4gICAgICBjb2lsRGlhbWV0ZXI6IHByb3BzLmNvaWxEaWFtZXRlcixcclxuICAgICAgc3ByaW5nV2lkdGg6IHByb3BzLnNwcmluZ1dpZHRoLFxyXG4gICAgICBleHRlbnNpb246IHByb3BzLmV4dGVuc2lvbixcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZU1hc3NTcHJpdGUocHJvcHMpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5fc3ByaW5nU3ByaXRlLmdldEVuZFBvaW50KCk7XHJcbiAgICByZXR1cm4gbmV3IFNwaGVyZVNwcml0ZSh7XHJcbiAgICAgIGN4OiBwb3NpdGlvbi54LFxyXG4gICAgICBjeTogcG9zaXRpb24ueSxcclxuICAgICAgcmFkaXVzOiBwcm9wcy5tYXNzUmFkaXVzLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBfdXBkYXRlTWFzc1Bvc2l0aW9uKCkge1xyXG4gICAgY29uc3QgbWFzc1Bvc2l0aW9uID0gdGhpcy5fc3ByaW5nU3ByaXRlLmdldEVuZFBvaW50KCk7XHJcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLl9tYXNzU3ByaXRlLmdldFJhZGl1cygpO1xyXG4gICAgdGhpcy5fbWFzc1Nwcml0ZS5zZXRQb3NpdGlvbih7XHJcbiAgICAgIHg6IG1hc3NQb3NpdGlvbi54LFxyXG4gICAgICB5OiBtYXNzUG9zaXRpb24ueSArIHJhZGl1cyAtIDIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0ICcuL3JhbmdlLWlucHV0LmNzcyc7XHJcblxyXG5jb25zdCBQQVJBTV9OQU1FUyA9IFsnbWluJywgJ21heCcsICdzdGVwJywgJ3ZhbHVlJywgJ25hbWUnXTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSYW5nZUlucHV0IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XHJcbiAgICB0aGlzLl9jbGFzc05hbWUgPSAncmFuZ2UtaW5wdXQnO1xyXG4gICAgdGhpcy5fZWxlbSA9IG51bGw7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHByb3BzLnZhbHVlO1xyXG4gICAgdGhpcy5faW5wdXRFbGVtID0gbnVsbDtcclxuICAgIHRoaXMuX2xhYmVsRWxlbSA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5faW5pdChwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgfVxyXG5cclxuICAvLyDQuNC80LXQtdGCINGB0LzRi9GB0Lsg0LLRi9C30YvQstCw0YLRjCDRgtC+0LvRjNC60L4g0LIg0L7QsdGA0LDQsdC+0YLRh9C40LrQtSBvbkNoYW5nZVxyXG4gIGFib3J0Q2hhbmdlKCkge1xyXG4gICAgdGhpcy5faW5wdXRFbGVtLnZhbHVlID0gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRMYWJlbCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9sYWJlbEVsZW0udGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRMYWJlbCh0ZXh0KSB7XHJcbiAgICB0aGlzLl9sYWJlbEVsZW0udGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbS52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnB1dEVsZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRTdGVwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbS5zdGVwO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RlcCh2YWx1ZSkge1xyXG4gICAgdGhpcy5faW5wdXRFbGVtLnN0ZXAgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldE1pbigpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW0ubWluO1xyXG4gIH1cclxuXHJcbiAgc2V0TWluKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW0ubWluID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRNYXgoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtLm1heDtcclxuICB9XHJcblxyXG4gIHNldE1heCh2YWx1ZSkge1xyXG4gICAgdGhpcy5faW5wdXRFbGVtLm1heCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIF9pbml0KHByb3BzKSB7XHJcbiAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRoaXMuX2VsZW0uY2xhc3NOYW1lID0gdGhpcy5fY2xhc3NOYW1lO1xyXG5cclxuICAgIHRoaXMuX2xhYmVsRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRoaXMuX2xhYmVsRWxlbS5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19sYWJlbGA7XHJcbiAgICB0aGlzLl9sYWJlbEVsZW0udGV4dENvbnRlbnQgPSBwcm9wcy5sYWJlbCA/PyAnJztcclxuXHJcbiAgICB0aGlzLl9pbnB1dEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdGhpcy5faW5wdXRFbGVtLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX2lucHV0YDtcclxuICAgIHRoaXMuX2lucHV0RWxlbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcclxuXHJcbiAgICBjb25zdCBwYXJhbXMgPSBBcnJheS5mcm9tKE9iamVjdC5rZXlzKHByb3BzKSkuZmlsdGVyKChhdHRyKSA9PiBQQVJBTV9OQU1FUy5pbmNsdWRlcyhhdHRyKSk7XHJcblxyXG4gICAgcGFyYW1zLmZvckVhY2goKHBhcmFtTmFtZSkgPT4ge1xyXG4gICAgICB0aGlzLl9pbnB1dEVsZW0uc2V0QXR0cmlidXRlKHBhcmFtTmFtZSwgYCR7cHJvcHNbcGFyYW1OYW1lXX1gKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2lucHV0RWxlbS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAnaW5wdXQnLFxyXG4gICAgICB0eXBlb2YgcHJvcHMub25DaGFuZ2UgPT09ICdmdW5jdGlvbidcclxuICAgICAgICA/ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMub25DaGFuZ2UuY2FsbChudWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aGlzLl9pbnB1dEVsZW0udmFsdWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5wdXRFbGVtLnZhbHVlO1xyXG4gICAgICAgICAgfSxcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5fZWxlbS5hcHBlbmQodGhpcy5fbGFiZWxFbGVtLCB0aGlzLl9pbnB1dEVsZW0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgc2V0dGluZ3MgZnJvbSAnLi9zZXR0aW5ncy5qc29uJztcclxuXHJcbmltcG9ydCAnLi9zcGhlcmUtc3ByaXRlLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3BoZXJlU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJ3NwaGVyZS1zcHJpdGUnO1xyXG4gICAgdGhpcy5fZWxlbSA9IG51bGw7XHJcbiAgICB0aGlzLl9yID0gcGFyYW1zLnJhZGl1cyA/PyBzZXR0aW5ncy5yO1xyXG4gICAgdGhpcy5fY3ggPSBwYXJhbXMuY3ggPz8gc2V0dGluZ3MuY3g7XHJcbiAgICB0aGlzLl9jeSA9IHBhcmFtcy5jeSA/PyBzZXR0aW5ncy5jeTtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIHsgeDogdGhpcy5fY3gsIHk6IHRoaXMuX2N5IH07XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih7IHgsIHkgfSkge1xyXG4gICAgdGhpcy5fY3ggPSB4O1xyXG4gICAgdGhpcy5fY3kgPSB5O1xyXG4gICAgdGhpcy5fY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIHgpO1xyXG4gICAgdGhpcy5fY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFkaXVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3I7XHJcbiAgfVxyXG5cclxuICBzZXRSYWRpdXMocmFkaXVzKSB7XHJcbiAgICB0aGlzLl9yID0gcmFkaXVzO1xyXG4gICAgdGhpcy5fY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG4gICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2NpcmNsZScpO1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5fY2xhc3NOYW1lfV9fY2lyY2xlYCk7XHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgdGhpcy5fY3gpO1xyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIHRoaXMuX2N5KTtcclxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIHRoaXMuX3IpO1xyXG4gICAgdGhpcy5fY2lyY2xlID0gY2lyY2xlO1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50cyA9IHNldHRpbmdzLmdyYWRpZW50c1xyXG4gICAgICAuZmlsdGVyKChncmFkaWVudCkgPT4gZ3JhZGllbnQ/LmNvbG9ycz8ubGVuZ3RoID4gMSlcclxuICAgICAgLm1hcCgoZ3JhZGllbnQpID0+XHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgYDxyYWRpYWxHcmFkaWVudCBpZD1cIlNwaGVyZUdyYWRpZW50XCIgY3g9XCIke2dyYWRpZW50LmN4ID8/IDAuNX1cIiBjeT1cIiR7Z3JhZGllbnQuY3kgPz8gMC41fVwiIHI9XCIke1xyXG4gICAgICAgICAgICBncmFkaWVudC5yID8/IDAuNVxyXG4gICAgICAgICAgfVwiPmAsXHJcbiAgICAgICAgICAuLi5ncmFkaWVudC5jb2xvcnMubWFwKFxyXG4gICAgICAgICAgICAoY29sb3IsIGluZGV4LCB7IGxlbmd0aCB9KSA9PiBgPHN0b3Agb2Zmc2V0PVwiJHtpbmRleCAvIChsZW5ndGggLSAxKX1cIiBzdG9wLWNvbG9yPVwiJHtjb2xvcn1cIi8+YCxcclxuICAgICAgICAgICksXHJcbiAgICAgICAgICAnPC9yYWRpYWxHcmFkaWVudD4nLFxyXG4gICAgICAgIF0uam9pbignJyksXHJcbiAgICAgICk7XHJcblxyXG4gICAgaWYgKGdyYWRpZW50cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fZWxlbS5pbm5lckhUTUwgPSBgPGRlZnM+XFxuJHtncmFkaWVudHMuam9pbignXFxuJyl9XFxuPC9kZWZzPmA7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWxlbS5hcHBlbmQoY2lyY2xlKTtcclxuICB9XHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgY2xhc3MtbWV0aG9kcy11c2UtdGhpcyAqL1xyXG5pbXBvcnQgZGVmYXVsdFNldHRpbmdzIGZyb20gJy4vc2V0dGluZ3MuanNvbic7XHJcbmltcG9ydCAnLi9zcHJpbmctc3ByaXRlLmNzcyc7XHJcblxyXG4vLyDQutC+0Y3RhNGE0LjRhtC40LXQvdGCLCDQutC+0YLQvtGA0YvQuSDQv9C+0LzQvtCz0LDQtdGCINCy0YvRgdGH0LjRgtGL0LLQsNGC0Ywg0L/QvtC70L7QttC10L3QuNC1INC60L7QvdGC0YDQvtC70YzQvdGL0YUg0YLQvtGH0LXQuiDQutGA0LjQstGL0YVcclxuY29uc3QgSyA9IDAuMzc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaW5nU3ByaXRlIHtcclxuICBjb25zdHJ1Y3RvcihwYXJhbXMgPSB7fSkge1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJ3NwcmluZy1zcHJpdGUnO1xyXG4gICAgdGhpcy5fZWxlbSA9IG51bGw7XHJcbiAgICB0aGlzLl9wYXRocyA9IFtdO1xyXG4gICAgdGhpcy5fY29pbHMgPSBwYXJhbXMuY29pbHMgPz8gZGVmYXVsdFNldHRpbmdzLmNvaWxzO1xyXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHBhcmFtcy5wb3NpdGlvbiA/PyBkZWZhdWx0U2V0dGluZ3MucG9zaXRpb247XHJcbiAgICB0aGlzLl9zcHJpbmdXaWR0aCA9IHBhcmFtcy5zcHJpbmdXaWR0aCA/PyBkZWZhdWx0U2V0dGluZ3Muc3ByaW5nV2lkdGg7XHJcbiAgICB0aGlzLl9jb2lsRGlhbWV0ZXIgPSBwYXJhbXMuY29pbERpYW1ldGVyID8/IGRlZmF1bHRTZXR0aW5ncy5jb2lsRGlhbWV0ZXI7XHJcbiAgICB0aGlzLl9lbmRQb2ludCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5faW5pdChwYXJhbXMuZXh0ZW5zaW9uID8/IGRlZmF1bHRTZXR0aW5ncy5leHRlbnNpb24pO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gIH1cclxuXHJcbiAgLy8g0LzQtdGC0L7QtCDRgNCw0YHRgtGP0LPQuNCy0LDQtdGCINC/0YDRg9C20LjQvdGDXHJcbiAgZXh0ZW5kKHZhbHVlKSB7XHJcbiAgICBjb25zdCBwYXRoc0RhdGEgPSB0aGlzLl9nZW5lcmF0ZUNvbW1hbmRzT2ZQYXRocyh2YWx1ZSk7XHJcbiAgICB0aGlzLl9wYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBkID0gdGhpcy5fcmVuZGVyUGF0aERhdGEocGF0aHNEYXRhW2luZGV4XS5jb21tYW5kcyk7XHJcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCBkKTtcclxuICAgICAgLy8gdGhpcy5fYXBwbHlQb2ludHMocGF0aCwgcGF0aHNEYXRhW2luZGV4XS5kYXRhKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8g0LzQtdGC0L7QtCDQstC+0LfRgNCw0YnQsNC10YIg0LrQvtC+0YDQtNC40L3QsNGC0Ysg0LrQvtC90YbQsCDQv9GA0YPQttC40L3Ri1xyXG4gIC8vINGN0YLQviDQvdGD0LbQvdC+LCDRh9GC0L7QsdGLINGB0L/QvtC30LjRhtC40L7QvdC40YDQvtCy0LDRgtGMINGI0LDRgFxyXG4gIGdldEVuZFBvaW50KCkge1xyXG4gICAgY29uc3QgbGFzdFNlZyA9IHRoaXMuX3BhdGhzW3RoaXMuX3BhdGhzLmxlbmd0aCAtIDFdLnBhdGhTZWdMaXN0LmdldEl0ZW0oMik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB4OiBsYXN0U2VnLnggKyB0aGlzLl9zcHJpbmdXaWR0aCAvIDQsXHJcbiAgICAgIHk6IGxhc3RTZWcueSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBfaW5pdChleHRlbnNpb24pIHtcclxuICAgIHRoaXMuX3BhdGhzID0gdGhpcy5fZ2VuZXJhdGVDb21tYW5kc09mUGF0aHMoZXh0ZW5zaW9uKS5tYXAoKHsgdHlwZSwgY29tbWFuZHMgfSkgPT5cclxuICAgICAgdGhpcy5fY3JlYXRlUGF0aCh0eXBlLCB0aGlzLl9yZW5kZXJQYXRoRGF0YShjb21tYW5kcykpLFxyXG4gICAgKTtcclxuICAgIHRoaXMuX2VsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2cnKTtcclxuICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc05hbWUpO1xyXG4gICAgdGhpcy5fZWxlbS5hcHBlbmQoLi4udGhpcy5fcGF0aHMpO1xyXG4gIH1cclxuXHJcbiAgX2NhbGNIYWxmUGVyaW9kKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIChleHRlbnNpb24gLyAodGhpcy5fY29pbHMgKyAxKSArIHRoaXMuX3NwcmluZ1dpZHRoKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvLyDQvNC10YLQvtC0INCy0YvRgdGH0LjRgtGL0LLQsNC10YIg0LrQvtC80LzQsNC90LTRiyDQtNC70Y8g0LLRgdC10YUg0L/Rg9GC0LXQuVxyXG4gIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC00LLQvtC50L3QvtC5INC80LDRgdGB0LjQslxyXG4gIF9nZW5lcmF0ZUNvbW1hbmRzT2ZQYXRocyhleHRlbnNpb24pIHtcclxuICAgIGNvbnN0IHsgX3N0YXJ0UG9zaXRpb246IHN0YXJ0UG9zaXRpb24sIF9jb2lsRGlhbWV0ZXI6IGNvaWxEaWFtZXRlciwgX2NvaWxzOiBjb2lscyB9ID0gdGhpcztcclxuICAgIC8vINC/0L7Qu9C+0LLQuNC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQstC40YLQutCw0LzQuCDQv9GA0YPQttC40L3Ri1xyXG4gICAgbGV0IGhhbGZQZXJpb2QgPSB0aGlzLl9jYWxjSGFsZlBlcmlvZChleHRlbnNpb24pO1xyXG4gICAgLy8g0LTQu9C40L3QsCDQvtC00L3QvtCz0L4g0LLQuNGC0LrQsFxyXG4gICAgY29uc3QgTCA9IE1hdGguUEkgKiBjb2lsRGlhbWV0ZXI7XHJcblxyXG4gICAgY29uc3QgZnJvbnRQYXRocyA9IFtdO1xyXG4gICAgY29uc3QgYmFja1BhdGhzID0gW107XHJcblxyXG4gICAgaWYgKGhhbGZQZXJpb2QgPiBMIC8gMikge1xyXG4gICAgICBoYWxmUGVyaW9kID0gTCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeFNoaWZ0ID0gY29pbERpYW1ldGVyIC0gKCgyICogaGFsZlBlcmlvZCkgLyBMKSAqIGNvaWxEaWFtZXRlcjtcclxuICAgIGNvbnN0IHJlY3RIZWlnaHQgPSAyMDtcclxuXHJcbiAgICBsZXQgc3RhcnRQb2ludCA9IHN0YXJ0UG9zaXRpb247XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0LLQtdGA0YXQvdC40Lkg0YHRgtC10YDQttC10L3RjFxyXG4gICAgY29uc3Qgc3RhcnRSZWN0UG9pbnRzID0geyBzdGFydFBvaW50OiBbLi4uc3RhcnRQb2ludF0sIGVuZFBvaW50OiBbc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSArIHJlY3RIZWlnaHRdIH07XHJcbiAgICBmcm9udFBhdGhzLnB1c2godGhpcy5fY2FsY1JlY3RDb21tYW5kcyhzdGFydFJlY3RQb2ludHMpKTtcclxuXHJcbiAgICBzdGFydFBvaW50ID0gW3N0YXJ0UG9zaXRpb25bMF0sIHN0YXJ0UG9zaXRpb25bMV0gKyByZWN0SGVpZ2h0IC0gdGhpcy5fc3ByaW5nV2lkdGhdO1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDQtdC8INCy0LXRgNGF0L3RjtGOINGH0LXRgtCy0LXRgNGC0LjQvdC60YMg0LLQuNGC0LrQsFxyXG4gICAgY29uc3Qgc3RhcnRDdXJ2ZVBvaW50cyA9IHt9O1xyXG4gICAgc3RhcnRDdXJ2ZVBvaW50cy5zdGFydFBvaW50ID0gWy4uLnN0YXJ0UG9pbnRdO1xyXG4gICAgc3RhcnRDdXJ2ZVBvaW50cy5lbmRQb2ludCA9IFtzdGFydFBvaW50WzBdIC0geFNoaWZ0IC8gMiwgc3RhcnRQb2ludFsxXSArIGhhbGZQZXJpb2QgLyAyXTtcclxuICAgIHN0YXJ0Q3VydmVQb2ludHMuY29udHJvbFBvaW50MSA9IHN0YXJ0Q3VydmVQb2ludHMuc3RhcnRQb2ludDtcclxuICAgIHN0YXJ0Q3VydmVQb2ludHMuY29udHJvbFBvaW50MiA9IFtzdGFydEN1cnZlUG9pbnRzLmVuZFBvaW50WzBdLCBzdGFydEN1cnZlUG9pbnRzLmVuZFBvaW50WzFdIC0gSyAqIGhhbGZQZXJpb2RdO1xyXG4gICAgZnJvbnRQYXRocy5wdXNoKHRoaXMuX2NhbGNDdXJ2ZUNvbW1hbmRzKHN0YXJ0Q3VydmVQb2ludHMpKTtcclxuXHJcbiAgICBzdGFydFBvaW50ID0gc3RhcnRDdXJ2ZVBvaW50cy5lbmRQb2ludDtcclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQv9C+0LvRg9Cy0LjRgtC60Lgg0L/RgNGD0LbQuNC90YtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMiAqIGNvaWxzIC0gMTsgKytpKSB7XHJcbiAgICAgIGNvbnN0IGRpciA9IGkgJSAyID8gLTEgOiAxO1xyXG5cclxuICAgICAgY29uc3QgcGF0aFBvaW50cyA9IHt9O1xyXG4gICAgICBwYXRoUG9pbnRzLnN0YXJ0UG9pbnQgPSBbLi4uc3RhcnRQb2ludF07XHJcbiAgICAgIHBhdGhQb2ludHMuZW5kUG9pbnQgPSBbc3RhcnRQb2ludFswXSArIGRpciAqIHhTaGlmdCwgc3RhcnRQb2ludFsxXSArIGhhbGZQZXJpb2RdO1xyXG4gICAgICBwYXRoUG9pbnRzLmNvbnRyb2xQb2ludDEgPSBbc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSArIEsgKiBoYWxmUGVyaW9kXTtcclxuICAgICAgcGF0aFBvaW50cy5jb250cm9sUG9pbnQyID0gW3BhdGhQb2ludHMuZW5kUG9pbnRbMF0sIHBhdGhQb2ludHMuZW5kUG9pbnRbMV0gLSBLICogaGFsZlBlcmlvZF07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FsY0N1cnZlQ29tbWFuZHMocGF0aFBvaW50cyk7XHJcbiAgICAgIGlmIChkaXIgPCAwKSBmcm9udFBhdGhzLnB1c2goZGF0YSk7XHJcbiAgICAgIGVsc2UgYmFja1BhdGhzLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICBzdGFydFBvaW50ID0gcGF0aFBvaW50cy5lbmRQb2ludDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQodC+0LfQtNCw0LXQvCDQvdC40LbQvdGO0Y4g0YfQtdGC0LLQtdGA0YLQuNC90LrRgyDQstC40YLQutCwXHJcbiAgICBjb25zdCBlbmRDdXJ2ZVBvaW50cyA9IHt9O1xyXG4gICAgZW5kQ3VydmVQb2ludHMuc3RhcnRQb2ludCA9IFsuLi5zdGFydFBvaW50XTtcclxuICAgIGVuZEN1cnZlUG9pbnRzLmVuZFBvaW50ID0gW3N0YXJ0UG9pbnRbMF0gLSB4U2hpZnQgLyAyLCBzdGFydFBvaW50WzFdICsgaGFsZlBlcmlvZCAvIDJdO1xyXG4gICAgZW5kQ3VydmVQb2ludHMuY29udHJvbFBvaW50MSA9IFtzdGFydFBvaW50WzBdLCBzdGFydFBvaW50WzFdICsgSyAqIGhhbGZQZXJpb2RdO1xyXG4gICAgZW5kQ3VydmVQb2ludHMuY29udHJvbFBvaW50MiA9IGVuZEN1cnZlUG9pbnRzLmVuZFBvaW50O1xyXG4gICAgZnJvbnRQYXRocy5wdXNoKHRoaXMuX2NhbGNDdXJ2ZUNvbW1hbmRzKGVuZEN1cnZlUG9pbnRzKSk7XHJcblxyXG4gICAgc3RhcnRQb2ludCA9IGVuZEN1cnZlUG9pbnRzLmVuZFBvaW50O1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDQtdC8INC90LjQttC90LjQuSDRgdGC0LXRgNC20LXQvdGMXHJcbiAgICBjb25zdCBlbmRSZWN0UG9pbnRzID0geyBzdGFydFBvaW50OiBbLi4uc3RhcnRQb2ludF0sIGVuZFBvaW50OiBbc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSArIHJlY3RIZWlnaHRdIH07XHJcbiAgICBmcm9udFBhdGhzLnB1c2godGhpcy5fY2FsY1JlY3RDb21tYW5kcyhlbmRSZWN0UG9pbnRzKSk7XHJcblxyXG4gICAgLy8g0LTQu9GPINC60L7RgNGA0LXQutGC0L3QvtCz0L4g0L/QvtGA0Y/QtNC60LAg0L7RgtCx0YDQsNC20LXQvdC40Y8g0L/Rg9GC0LXQuVxyXG4gICAgLy8g0L/QtdGA0LLRi9C80Lgg0LIgZG9tINC/0L7QudC00YPRgiDQvtGC0LTQsNC70LXQvdC90YvQtSDRh9Cw0YHRgtC4INCy0LjRgtC60L7QsiDQv9GA0YPQttC40L3Ri1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4uYmFja1BhdGhzLm1hcCgoY29tbWFuZHMpID0+ICh7XHJcbiAgICAgICAgdHlwZTogJ2JhY2snLFxyXG4gICAgICAgIGNvbW1hbmRzLFxyXG4gICAgICB9KSksXHJcbiAgICAgIC4uLmZyb250UGF0aHMubWFwKChjb21tYW5kcykgPT4gKHtcclxuICAgICAgICB0eXBlOiAnZnJvbnQnLFxyXG4gICAgICAgIGNvbW1hbmRzLFxyXG4gICAgICB9KSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLy8g0YHQvtC30LTQsNC10YIg0L/RgNGP0LzQvtGD0LPQvtC70YzQvdC40Log0LLQtNC+0LvRjCDQv9GA0Y/QvNC+0Lkg0YEg0YjQuNGA0LjQvdC+0Lkgc3ByaW5nV2lkdGggLyAyXHJcbiAgX2NhbGNSZWN0Q29tbWFuZHMoeyBzdGFydFBvaW50LCBlbmRQb2ludCB9KSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3NwcmluZ1dpZHRoIC8gNDtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTScsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSArIHdpZHRoLFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTCcsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSAtIHdpZHRoLFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTCcsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSAtIHdpZHRoLFxyXG4gICAgICAgIHk6IGVuZFBvaW50WzFdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tbWFuZDogJ0wnLFxyXG4gICAgICAgIHg6IHN0YXJ0UG9pbnRbMF0gKyB3aWR0aCxcclxuICAgICAgICB5OiBlbmRQb2ludFsxXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbW1hbmQ6ICdaJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvLyDQvNC10YLQvtC0INC90LAg0LLRhdC+0LQg0L/RgNC40L3QuNC80LDQtdGCINC60L7QvdGC0YDQvtC70YzQvdGL0LUg0YLQvtGH0LrQuCDQutGD0LHQuNGH0LXRgdC60L7QuSDQutGA0LjQstC+0Lkg0LHQtdC30YzQtVxyXG4gIC8vINGB0L7Qt9C00LDQtdGCINGC0LDQutGD0Y4g0LbQtSDQutGA0LjQstGD0Y4g0L3QuNC20LUsINGB0L7QtdC00LjQvdGP0LXRgiDRjdGC0Lgg0LrRgNC40LLRi9C1INC/0YDRj9C80YvQvNC4XHJcbiAgLy8g0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0LTQsNC90L3Ri9C1INC/0L7Qu9GD0YfQuNCy0YjQtdCz0L7RgdGPINC/0YPRgtC4INCyINCy0LjQtNC1INC80LDRgdGB0LjQstCwINC60L7QvNC80LDQvdC0XHJcbiAgX2NhbGNDdXJ2ZUNvbW1hbmRzKHsgc3RhcnRQb2ludCwgZW5kUG9pbnQsIGNvbnRyb2xQb2ludDEsIGNvbnRyb2xQb2ludDIgfSkge1xyXG4gICAgY29uc3QgeyBfc3ByaW5nV2lkdGg6IHNwcmluZ1dpZHRoIH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbW1hbmQ6ICdNJyxcclxuICAgICAgICB4OiBzdGFydFBvaW50WzBdLFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnQycsXHJcbiAgICAgICAgeDE6IGNvbnRyb2xQb2ludDFbMF0sXHJcbiAgICAgICAgeTE6IGNvbnRyb2xQb2ludDFbMV0sXHJcbiAgICAgICAgeDI6IGNvbnRyb2xQb2ludDJbMF0sXHJcbiAgICAgICAgeTI6IGNvbnRyb2xQb2ludDJbMV0sXHJcbiAgICAgICAgeDogZW5kUG9pbnRbMF0sXHJcbiAgICAgICAgeTogZW5kUG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTCcsXHJcbiAgICAgICAgeDogZW5kUG9pbnRbMF0sXHJcbiAgICAgICAgeTogZW5kUG9pbnRbMV0gKyBzcHJpbmdXaWR0aCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbW1hbmQ6ICdDJyxcclxuICAgICAgICB4MTogY29udHJvbFBvaW50MlswXSxcclxuICAgICAgICB5MTogY29udHJvbFBvaW50MlsxXSArIHNwcmluZ1dpZHRoLFxyXG4gICAgICAgIHgyOiBjb250cm9sUG9pbnQxWzBdLFxyXG4gICAgICAgIHkyOiBjb250cm9sUG9pbnQxWzFdICsgc3ByaW5nV2lkdGgsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSxcclxuICAgICAgICB5OiBzdGFydFBvaW50WzFdICsgc3ByaW5nV2lkdGgsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnWicsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLy8g0L3QsCDQstGF0L7QtCDQv9GA0LjQvdC40LzQsNC10YIg0LzQsNGB0YHQuNCyINC60L7QvNC80LDQvdC0INC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YLRgNC+0LrRg1xyXG4gIF9yZW5kZXJQYXRoRGF0YShzZWdtZW50cykge1xyXG4gICAgcmV0dXJuIHNlZ21lbnRzXHJcbiAgICAgIC5tYXAoKHNlZykgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzZWcuY29tbWFuZDtcclxuICAgICAgICBpZiAoc2VnLngxICE9PSB1bmRlZmluZWQgJiYgc2VnLnkxICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBgICR7c2VnLngxfSAke3NlZy55MX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VnLngyICE9PSB1bmRlZmluZWQgJiYgc2VnLnkyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBgICR7c2VnLngyfSAke3NlZy55Mn1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VnLnggIT09IHVuZGVmaW5lZCAmJiBzZWcueSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gYCAke3NlZy54fSAke3NlZy55fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICAvLyDQstC+0LfQstGA0LDRidCw0LXRgiBwYXRoINGN0LvQtdC80LXQvdGCXHJcbiAgX2NyZWF0ZVBhdGgodHlwZSwgZCkge1xyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuX2NsYXNzTmFtZX1fX3BhdGhgKTtcclxuICAgIHBhdGguY2xhc3NMaXN0LmFkZChgJHt0aGlzLl9jbGFzc05hbWV9X19wYXRoXyR7dHlwZX1gKTtcclxuICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCBkKTtcclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxuXHJcbiAgLy8gX2FwcGx5UG9pbnRzKHBhdGgsIHNlZ21lbnRzKSB7XHJcbiAgLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZ21lbnRzLmxlbmd0aDsgKytpKSB7XHJcbiAgLy8gICAgIGNvbnN0IHBhdGhTZWcgPSBwYXRoLnBhdGhTZWdMaXN0LmdldEl0ZW0oaSk7XHJcbiAgLy8gICAgIGNvbnN0IHNlZyA9IHNlZ21lbnRzW2ldO1xyXG4gIC8vICAgICBjb25zdCBwcm9wcyA9IE9iamVjdC5rZXlzKHNlZyk7XHJcbiAgLy8gICAgIHByb3BzLmZvckVhY2goKHByb3ApID0+IHtcclxuICAvLyAgICAgICBpZiAocHJvcCBpbiBwYXRoU2VnKSB7XHJcbiAgLy8gICAgICAgICBwYXRoU2VnW3Byb3BdID0gc2VnW3Byb3BdO1xyXG4gIC8vICAgICAgIH1cclxuICAvLyAgICAgfSk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfVxyXG59XHJcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgJiYgaXQgIT09IG51bGwpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBzZXQgXCIgKyBTdHJpbmcoaXQpICsgJyBhcyBhIHByb3RvdHlwZScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbnZhciBVTlNDT1BBQkxFUyA9IHdlbGxLbm93blN5bWJvbCgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvdHlwZSA9IEFycmF5LnByb3RvdHlwZTtcblxuLy8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5pZiAoQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkge1xuICBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKEFycmF5UHJvdG90eXBlLCBVTlNDT1BBQkxFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB2YWx1ZTogY3JlYXRlKG51bGwpXG4gIH0pO1xufVxuXG4vLyBhZGQgYSBrZXkgdG8gQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b3R5cGVbVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoU3RyaW5nKGl0KSArICcgaXMgbm90IGFuIG9iamVjdCcpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWFic29sdXRlLWluZGV4Jyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUueyBpbmRleE9mLCBpbmNsdWRlcyB9YCBtZXRob2RzIGltcGxlbWVudGF0aW9uXG52YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgICAgaWYgKChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSAmJiBPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAvLyBgQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGNyZWF0ZU1ldGhvZCh0cnVlKSxcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmRleE9mYCBtZXRob2RcbiAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuaW5kZXhvZlxuICBpbmRleE9mOiBjcmVhdGVNZXRob2QoZmFsc2UpXG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG4gIHZhciBrZXlzID0gb3duS2V5cyhzb3VyY2UpO1xuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mO1xuICB2YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlLmY7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIGlmICghaGFzKHRhcmdldCwga2V5KSkgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICB9XG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRigpIHsgLyogZW1wdHkgKi8gfVxuICBGLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IG51bGw7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5nZXRQcm90b3R5cGVPZihuZXcgRigpKSAhPT0gRi5wcm90b3R5cGU7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSXRlcmF0b3JDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgSXRlcmF0b3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvckNvbnN0cnVjdG9yLCBUT19TVFJJTkdfVEFHLCBmYWxzZSwgdHJ1ZSk7XG4gIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gIHJldHVybiBJdGVyYXRvckNvbnN0cnVjdG9yO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGRlZmluZVByb3BlcnR5TW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBERVNDUklQVE9SUyA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRlZmluZVByb3BlcnR5TW9kdWxlLmYob2JqZWN0LCBrZXksIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlcmF0b3ItY29uc3RydWN0b3InKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcbnZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSXRlcmF0b3JzQ29yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMtY29yZScpO1xuXG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBJdGVyYXRvcnNDb3JlLkl0ZXJhdG9yUHJvdG90eXBlO1xudmFyIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSBJdGVyYXRvcnNDb3JlLkJVR0dZX1NBRkFSSV9JVEVSQVRPUlM7XG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcbnZhciBFTlRSSUVTID0gJ2VudHJpZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhYmxlLCBOQU1FLCBJdGVyYXRvckNvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICBjcmVhdGVJdGVyYXRvckNvbnN0cnVjdG9yKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuXG4gIHZhciBnZXRJdGVyYXRpb25NZXRob2QgPSBmdW5jdGlvbiAoS0lORCkge1xuICAgIGlmIChLSU5EID09PSBERUZBVUxUICYmIGRlZmF1bHRJdGVyYXRvcikgcmV0dXJuIGRlZmF1bHRJdGVyYXRvcjtcbiAgICBpZiAoIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgS0lORCBpbiBJdGVyYWJsZVByb3RvdHlwZSkgcmV0dXJuIEl0ZXJhYmxlUHJvdG90eXBlW0tJTkRdO1xuICAgIHN3aXRjaCAoS0lORCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBJdGVyYXRvckNvbnN0cnVjdG9yKHRoaXMsIEtJTkQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgRU5UUklFUzogcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzKTsgfTtcbiAgfTtcblxuICB2YXIgVE9fU1RSSU5HX1RBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IGZhbHNlO1xuICB2YXIgSXRlcmFibGVQcm90b3R5cGUgPSBJdGVyYWJsZS5wcm90b3R5cGU7XG4gIHZhciBuYXRpdmVJdGVyYXRvciA9IEl0ZXJhYmxlUHJvdG90eXBlW0lURVJBVE9SXVxuICAgIHx8IEl0ZXJhYmxlUHJvdG90eXBlWydAQGl0ZXJhdG9yJ11cbiAgICB8fCBERUZBVUxUICYmIEl0ZXJhYmxlUHJvdG90eXBlW0RFRkFVTFRdO1xuICB2YXIgZGVmYXVsdEl0ZXJhdG9yID0gIUJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgJiYgbmF0aXZlSXRlcmF0b3IgfHwgZ2V0SXRlcmF0aW9uTWV0aG9kKERFRkFVTFQpO1xuICB2YXIgYW55TmF0aXZlSXRlcmF0b3IgPSBOQU1FID09ICdBcnJheScgPyBJdGVyYWJsZVByb3RvdHlwZS5lbnRyaWVzIHx8IG5hdGl2ZUl0ZXJhdG9yIDogbmF0aXZlSXRlcmF0b3I7XG4gIHZhciBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIG1ldGhvZHMsIEtFWTtcblxuICAvLyBmaXggbmF0aXZlXG4gIGlmIChhbnlOYXRpdmVJdGVyYXRvcikge1xuICAgIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKGFueU5hdGl2ZUl0ZXJhdG9yLmNhbGwobmV3IEl0ZXJhYmxlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIGlmICghSVNfUFVSRSAmJiBnZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUpICE9PSBJdGVyYXRvclByb3RvdHlwZSkge1xuICAgICAgICBpZiAoc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgICAgICBzZXRQcm90b3R5cGVPZihDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIEl0ZXJhdG9yUHJvdG90eXBlKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIHRydWUsIHRydWUpO1xuICAgICAgaWYgKElTX1BVUkUpIEl0ZXJhdG9yc1tUT19TVFJJTkdfVEFHXSA9IHJldHVyblRoaXM7XG4gICAgfVxuICB9XG5cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGQVVMVCA9PSBWQUxVRVMgJiYgbmF0aXZlSXRlcmF0b3IgJiYgbmF0aXZlSXRlcmF0b3IubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgSU5DT1JSRUNUX1ZBTFVFU19OQU1FID0gdHJ1ZTtcbiAgICBkZWZhdWx0SXRlcmF0b3IgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuYXRpdmVJdGVyYXRvci5jYWxsKHRoaXMpOyB9O1xuICB9XG5cbiAgLy8gZGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUlTX1BVUkUgfHwgRk9SQ0VEKSAmJiBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl0gIT09IGRlZmF1bHRJdGVyYXRvcikge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYWJsZVByb3RvdHlwZSwgSVRFUkFUT1IsIGRlZmF1bHRJdGVyYXRvcik7XG4gIH1cbiAgSXRlcmF0b3JzW05BTUVdID0gZGVmYXVsdEl0ZXJhdG9yO1xuXG4gIC8vIGV4cG9ydCBhZGRpdGlvbmFsIG1ldGhvZHNcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBnZXRJdGVyYXRpb25NZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/IGRlZmF1bHRJdGVyYXRvciA6IGdldEl0ZXJhdGlvbk1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6IGdldEl0ZXJhdGlvbk1ldGhvZChFTlRSSUVTKVxuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChLRVkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgfHwgSU5DT1JSRUNUX1ZBTFVFU19OQU1FIHx8ICEoS0VZIGluIEl0ZXJhYmxlUHJvdG90eXBlKSkge1xuICAgICAgICByZWRlZmluZShJdGVyYWJsZVByb3RvdHlwZSwgS0VZLCBtZXRob2RzW0tFWV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSAkKHsgdGFyZ2V0OiBOQU1FLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB9LCBtZXRob2RzKTtcbiAgfVxuXG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG4vLyBEZXRlY3QgSUU4J3MgaW5jb21wbGV0ZSBkZWZpbmVQcm9wZXJ0eSBpbXBsZW1lbnRhdGlvblxubW9kdWxlLmV4cG9ydHMgPSAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIDEsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pWzFdICE9IDc7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbnZhciBkb2N1bWVudCA9IGdsb2JhbC5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIEVYSVNUUyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEVYSVNUUyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gaXRlcmFibGUgRE9NIGNvbGxlY3Rpb25zXG4vLyBmbGFnIC0gYGl0ZXJhYmxlYCBpbnRlcmZhY2UgLSAnZW50cmllcycsICdrZXlzJywgJ3ZhbHVlcycsICdmb3JFYWNoJyBtZXRob2RzXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IDAsXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IDAsXG4gIENTU1ZhbHVlTGlzdDogMCxcbiAgQ2xpZW50UmVjdExpc3Q6IDAsXG4gIERPTVJlY3RMaXN0OiAwLFxuICBET01TdHJpbmdMaXN0OiAwLFxuICBET01Ub2tlbkxpc3Q6IDEsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiAwLFxuICBGaWxlTGlzdDogMCxcbiAgSFRNTEFsbENvbGxlY3Rpb246IDAsXG4gIEhUTUxDb2xsZWN0aW9uOiAwLFxuICBIVE1MRm9ybUVsZW1lbnQ6IDAsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiAwLFxuICBNZWRpYUxpc3Q6IDAsXG4gIE1pbWVUeXBlQXJyYXk6IDAsXG4gIE5hbWVkTm9kZU1hcDogMCxcbiAgTm9kZUxpc3Q6IDEsXG4gIFBhaW50UmVxdWVzdExpc3Q6IDAsXG4gIFBsdWdpbjogMCxcbiAgUGx1Z2luQXJyYXk6IDAsXG4gIFNWR0xlbmd0aExpc3Q6IDAsXG4gIFNWR051bWJlckxpc3Q6IDAsXG4gIFNWR1BhdGhTZWdMaXN0OiAwLFxuICBTVkdQb2ludExpc3Q6IDAsXG4gIFNWR1N0cmluZ0xpc3Q6IDAsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IDAsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IDAsXG4gIFN0eWxlU2hlZXRMaXN0OiAwLFxuICBUZXh0VHJhY2tDdWVMaXN0OiAwLFxuICBUZXh0VHJhY2tMaXN0OiAwLFxuICBUb3VjaExpc3Q6IDBcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzc29mKGdsb2JhbC5wcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCduYXZpZ2F0b3InLCAndXNlckFnZW50JykgfHwgJyc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHZlcnNpb25zID0gcHJvY2VzcyAmJiBwcm9jZXNzLnZlcnNpb25zO1xudmFyIHY4ID0gdmVyc2lvbnMgJiYgdmVyc2lvbnMudjg7XG52YXIgbWF0Y2gsIHZlcnNpb247XG5cbmlmICh2OCkge1xuICBtYXRjaCA9IHY4LnNwbGl0KCcuJyk7XG4gIHZlcnNpb24gPSBtYXRjaFswXSArIG1hdGNoWzFdO1xufSBlbHNlIGlmICh1c2VyQWdlbnQpIHtcbiAgbWF0Y2ggPSB1c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8oXFxkKykvKTtcbiAgaWYgKCFtYXRjaCB8fCBtYXRjaFsxXSA+PSA3NCkge1xuICAgIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9DaHJvbWVcXC8oXFxkKykvKTtcbiAgICBpZiAobWF0Y2gpIHZlcnNpb24gPSBtYXRjaFsxXTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHZlcnNpb24gJiYgK3ZlcnNpb247XG4iLCIvLyBJRTgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gW1xuICAnY29uc3RydWN0b3InLFxuICAnaGFzT3duUHJvcGVydHknLFxuICAnaXNQcm90b3R5cGVPZicsXG4gICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICd0b0xvY2FsZVN0cmluZycsXG4gICd0b1N0cmluZycsXG4gICd2YWx1ZU9mJ1xuXTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKS5mO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWRlZmluZScpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgY29weUNvbnN0cnVjdG9yUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3B5LWNvbnN0cnVjdG9yLXByb3BlcnRpZXMnKTtcbnZhciBpc0ZvcmNlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1mb3JjZWQnKTtcblxuLypcbiAgb3B0aW9ucy50YXJnZXQgICAgICAtIG5hbWUgb2YgdGhlIHRhcmdldCBvYmplY3RcbiAgb3B0aW9ucy5nbG9iYWwgICAgICAtIHRhcmdldCBpcyB0aGUgZ2xvYmFsIG9iamVjdFxuICBvcHRpb25zLnN0YXQgICAgICAgIC0gZXhwb3J0IGFzIHN0YXRpYyBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnByb3RvICAgICAgIC0gZXhwb3J0IGFzIHByb3RvdHlwZSBtZXRob2RzIG9mIHRhcmdldFxuICBvcHRpb25zLnJlYWwgICAgICAgIC0gcmVhbCBwcm90b3R5cGUgbWV0aG9kIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy5mb3JjZWQgICAgICAtIGV4cG9ydCBldmVuIGlmIHRoZSBuYXRpdmUgZmVhdHVyZSBpcyBhdmFpbGFibGVcbiAgb3B0aW9ucy5iaW5kICAgICAgICAtIGJpbmQgbWV0aG9kcyB0byB0aGUgdGFyZ2V0LCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMud3JhcCAgICAgICAgLSB3cmFwIGNvbnN0cnVjdG9ycyB0byBwcmV2ZW50aW5nIGdsb2JhbCBwb2xsdXRpb24sIHJlcXVpcmVkIGZvciB0aGUgYHB1cmVgIHZlcnNpb25cbiAgb3B0aW9ucy51bnNhZmUgICAgICAtIHVzZSB0aGUgc2ltcGxlIGFzc2lnbm1lbnQgb2YgcHJvcGVydHkgaW5zdGVhZCBvZiBkZWxldGUgKyBkZWZpbmVQcm9wZXJ0eVxuICBvcHRpb25zLnNoYW0gICAgICAgIC0gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICBvcHRpb25zLmVudW1lcmFibGUgIC0gZXhwb3J0IGFzIGVudW1lcmFibGUgcHJvcGVydHlcbiAgb3B0aW9ucy5ub1RhcmdldEdldCAtIHByZXZlbnQgY2FsbGluZyBhIGdldHRlciBvbiB0YXJnZXRcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcHRpb25zLCBzb3VyY2UpIHtcbiAgdmFyIFRBUkdFVCA9IG9wdGlvbnMudGFyZ2V0O1xuICB2YXIgR0xPQkFMID0gb3B0aW9ucy5nbG9iYWw7XG4gIHZhciBTVEFUSUMgPSBvcHRpb25zLnN0YXQ7XG4gIHZhciBGT1JDRUQsIHRhcmdldCwga2V5LCB0YXJnZXRQcm9wZXJ0eSwgc291cmNlUHJvcGVydHksIGRlc2NyaXB0b3I7XG4gIGlmIChHTE9CQUwpIHtcbiAgICB0YXJnZXQgPSBnbG9iYWw7XG4gIH0gZWxzZSBpZiAoU1RBVElDKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsW1RBUkdFVF0gfHwgc2V0R2xvYmFsKFRBUkdFVCwge30pO1xuICB9IGVsc2Uge1xuICAgIHRhcmdldCA9IChnbG9iYWxbVEFSR0VUXSB8fCB7fSkucHJvdG90eXBlO1xuICB9XG4gIGlmICh0YXJnZXQpIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIHNvdXJjZVByb3BlcnR5ID0gc291cmNlW2tleV07XG4gICAgaWYgKG9wdGlvbnMubm9UYXJnZXRHZXQpIHtcbiAgICAgIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpO1xuICAgICAgdGFyZ2V0UHJvcGVydHkgPSBkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgfSBlbHNlIHRhcmdldFByb3BlcnR5ID0gdGFyZ2V0W2tleV07XG4gICAgRk9SQ0VEID0gaXNGb3JjZWQoR0xPQkFMID8ga2V5IDogVEFSR0VUICsgKFNUQVRJQyA/ICcuJyA6ICcjJykgKyBrZXksIG9wdGlvbnMuZm9yY2VkKTtcbiAgICAvLyBjb250YWluZWQgaW4gdGFyZ2V0XG4gICAgaWYgKCFGT1JDRUQgJiYgdGFyZ2V0UHJvcGVydHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHR5cGVvZiBzb3VyY2VQcm9wZXJ0eSA9PT0gdHlwZW9mIHRhcmdldFByb3BlcnR5KSBjb250aW51ZTtcbiAgICAgIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMoc291cmNlUHJvcGVydHksIHRhcmdldFByb3BlcnR5KTtcbiAgICB9XG4gICAgLy8gYWRkIGEgZmxhZyB0byBub3QgY29tcGxldGVseSBmdWxsIHBvbHlmaWxsc1xuICAgIGlmIChvcHRpb25zLnNoYW0gfHwgKHRhcmdldFByb3BlcnR5ICYmIHRhcmdldFByb3BlcnR5LnNoYW0pKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoc291cmNlUHJvcGVydHksICdzaGFtJywgdHJ1ZSk7XG4gICAgfVxuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICByZWRlZmluZSh0YXJnZXQsIGtleSwgc291cmNlUHJvcGVydHksIG9wdGlvbnMpO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBwYXRoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3BhdGgnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbnZhciBhRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFyaWFibGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YXJpYWJsZSA9PSAnZnVuY3Rpb24nID8gdmFyaWFibGUgOiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG1ldGhvZCkge1xuICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBhRnVuY3Rpb24ocGF0aFtuYW1lc3BhY2VdKSB8fCBhRnVuY3Rpb24oZ2xvYmFsW25hbWVzcGFjZV0pXG4gICAgOiBwYXRoW25hbWVzcGFjZV0gJiYgcGF0aFtuYW1lc3BhY2VdW21ldGhvZF0gfHwgZ2xvYmFsW25hbWVzcGFjZV0gJiYgZ2xvYmFsW25hbWVzcGFjZV1bbWV0aG9kXTtcbn07XG4iLCJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ2RvY3VtZW50JywgJ2RvY3VtZW50RWxlbWVudCcpO1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWllZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbnZhciBzcGxpdCA9ICcnLnNwbGl0O1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xubW9kdWxlLmV4cG9ydHMgPSBmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIHRocm93cyBhbiBlcnJvciBpbiByaGlubywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL3JoaW5vL2lzc3Vlcy8zNDZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGlucyAtLSBzYWZlXG4gIHJldHVybiAhT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCk7XG59KSA/IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY2xhc3NvZihpdCkgPT0gJ1N0cmluZycgPyBzcGxpdC5jYWxsKGl0LCAnJykgOiBPYmplY3QoaXQpO1xufSA6IE9iamVjdDtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi50b1N0cmluZztcblxuLy8gdGhpcyBoZWxwZXIgYnJva2VuIGluIGAzLjQuMS0zLjQuNGAsIHNvIHdlIGNhbid0IHVzZSBgc2hhcmVkYCBoZWxwZXJcbmlmICh0eXBlb2Ygc3RvcmUuaW5zcGVjdFNvdXJjZSAhPSAnZnVuY3Rpb24nKSB7XG4gIHN0b3JlLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb25Ub1N0cmluZy5jYWxsKGl0KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZS5pbnNwZWN0U291cmNlO1xuIiwidmFyIE5BVElWRV9XRUFLX01BUCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9uYXRpdmUtd2Vhay1tYXAnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIG9iamVjdEhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbnZhciBXZWFrTWFwID0gZ2xvYmFsLldlYWtNYXA7XG52YXIgc2V0LCBnZXQsIGhhcztcblxudmFyIGVuZm9yY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGhhcyhpdCkgPyBnZXQoaXQpIDogc2V0KGl0LCB7fSk7XG59O1xuXG52YXIgZ2V0dGVyRm9yID0gZnVuY3Rpb24gKFRZUEUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBzdGF0ZTtcbiAgICBpZiAoIWlzT2JqZWN0KGl0KSB8fCAoc3RhdGUgPSBnZXQoaXQpKS50eXBlICE9PSBUWVBFKSB7XG4gICAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29tcGF0aWJsZSByZWNlaXZlciwgJyArIFRZUEUgKyAnIHJlcXVpcmVkJyk7XG4gICAgfSByZXR1cm4gc3RhdGU7XG4gIH07XG59O1xuXG5pZiAoTkFUSVZFX1dFQUtfTUFQKSB7XG4gIHZhciBzdG9yZSA9IHNoYXJlZC5zdGF0ZSB8fCAoc2hhcmVkLnN0YXRlID0gbmV3IFdlYWtNYXAoKSk7XG4gIHZhciB3bWdldCA9IHN0b3JlLmdldDtcbiAgdmFyIHdtaGFzID0gc3RvcmUuaGFzO1xuICB2YXIgd21zZXQgPSBzdG9yZS5zZXQ7XG4gIHNldCA9IGZ1bmN0aW9uIChpdCwgbWV0YWRhdGEpIHtcbiAgICBtZXRhZGF0YS5mYWNhZGUgPSBpdDtcbiAgICB3bXNldC5jYWxsKHN0b3JlLCBpdCwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtZ2V0LmNhbGwoc3RvcmUsIGl0KSB8fCB7fTtcbiAgfTtcbiAgaGFzID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIHdtaGFzLmNhbGwoc3RvcmUsIGl0KTtcbiAgfTtcbn0gZWxzZSB7XG4gIHZhciBTVEFURSA9IHNoYXJlZEtleSgnc3RhdGUnKTtcbiAgaGlkZGVuS2V5c1tTVEFURV0gPSB0cnVlO1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGl0LCBTVEFURSwgbWV0YWRhdGEpO1xuICAgIHJldHVybiBtZXRhZGF0YTtcbiAgfTtcbiAgZ2V0ID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIG9iamVjdEhhcyhpdCwgU1RBVEUpID8gaXRbU1RBVEVdIDoge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0LFxuICBnZXQ6IGdldCxcbiAgaGFzOiBoYXMsXG4gIGVuZm9yY2U6IGVuZm9yY2UsXG4gIGdldHRlckZvcjogZ2V0dGVyRm9yXG59O1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciByZXBsYWNlbWVudCA9IC8jfFxcLnByb3RvdHlwZVxcLi87XG5cbnZhciBpc0ZvcmNlZCA9IGZ1bmN0aW9uIChmZWF0dXJlLCBkZXRlY3Rpb24pIHtcbiAgdmFyIHZhbHVlID0gZGF0YVtub3JtYWxpemUoZmVhdHVyZSldO1xuICByZXR1cm4gdmFsdWUgPT0gUE9MWUZJTEwgPyB0cnVlXG4gICAgOiB2YWx1ZSA9PSBOQVRJVkUgPyBmYWxzZVxuICAgIDogdHlwZW9mIGRldGVjdGlvbiA9PSAnZnVuY3Rpb24nID8gZmFpbHMoZGV0ZWN0aW9uKVxuICAgIDogISFkZXRlY3Rpb247XG59O1xuXG52YXIgbm9ybWFsaXplID0gaXNGb3JjZWQubm9ybWFsaXplID0gZnVuY3Rpb24gKHN0cmluZykge1xuICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZShyZXBsYWNlbWVudCwgJy4nKS50b0xvd2VyQ2FzZSgpO1xufTtcblxudmFyIGRhdGEgPSBpc0ZvcmNlZC5kYXRhID0ge307XG52YXIgTkFUSVZFID0gaXNGb3JjZWQuTkFUSVZFID0gJ04nO1xudmFyIFBPTFlGSUxMID0gaXNGb3JjZWQuUE9MWUZJTEwgPSAnUCc7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGb3JjZWQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LXByb3RvdHlwZS1vZicpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gZmFsc2U7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxuLy8gYCVJdGVyYXRvclByb3RvdHlwZSVgIG9iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy0laXRlcmF0b3Jwcm90b3R5cGUlLW9iamVjdFxudmFyIEl0ZXJhdG9yUHJvdG90eXBlLCBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUsIGFycmF5SXRlcmF0b3I7XG5cbi8qIGVzbGludC1kaXNhYmxlIGVzL25vLWFycmF5LXByb3RvdHlwZS1rZXlzIC0tIHNhZmUgKi9cbmlmIChbXS5rZXlzKSB7XG4gIGFycmF5SXRlcmF0b3IgPSBbXS5rZXlzKCk7XG4gIC8vIFNhZmFyaSA4IGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICBpZiAoISgnbmV4dCcgaW4gYXJyYXlJdGVyYXRvcikpIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlMgPSB0cnVlO1xuICBlbHNlIHtcbiAgICBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihnZXRQcm90b3R5cGVPZihhcnJheUl0ZXJhdG9yKSk7XG4gICAgaWYgKFByb3RvdHlwZU9mQXJyYXlJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSkgSXRlcmF0b3JQcm90b3R5cGUgPSBQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGU7XG4gIH1cbn1cblxudmFyIE5FV19JVEVSQVRPUl9QUk9UT1RZUEUgPSBJdGVyYXRvclByb3RvdHlwZSA9PSB1bmRlZmluZWQgfHwgZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgdGVzdCA9IHt9O1xuICAvLyBGRjQ0LSBsZWdhY3kgaXRlcmF0b3JzIGNhc2VcbiAgcmV0dXJuIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXS5jYWxsKHRlc3QpICE9PSB0ZXN0O1xufSk7XG5cbmlmIChORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxuaWYgKCghSVNfUFVSRSB8fCBORVdfSVRFUkFUT1JfUFJPVE9UWVBFKSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpIHtcbiAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBJdGVyYXRvclByb3RvdHlwZTogSXRlcmF0b3JQcm90b3R5cGUsXG4gIEJVR0dZX1NBRkFSSV9JVEVSQVRPUlM6IEJVR0dZX1NBRkFSSV9JVEVSQVRPUlNcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwidmFyIElTX05PREUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLWlzLW5vZGUnKTtcbnZhciBWOF9WRVJTSU9OID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS12OC12ZXJzaW9uJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gcmVxdWlyZWQgZm9yIHRlc3Rpbmdcbm1vZHVsZS5leHBvcnRzID0gISFPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuICFTeW1ib2wuc2hhbSAmJlxuICAgIC8vIENocm9tZSAzOCBTeW1ib2wgaGFzIGluY29ycmVjdCB0b1N0cmluZyBjb252ZXJzaW9uXG4gICAgLy8gQ2hyb21lIDM4LTQwIHN5bWJvbHMgYXJlIG5vdCBpbmhlcml0ZWQgZnJvbSBET00gY29sbGVjdGlvbnMgcHJvdG90eXBlcyB0byBpbnN0YW5jZXNcbiAgICAoSVNfTk9ERSA/IFY4X1ZFUlNJT04gPT09IDM4IDogVjhfVkVSU0lPTiA+IDM3ICYmIFY4X1ZFUlNJT04gPCA0MSk7XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nICYmIC9uYXRpdmUgY29kZS8udGVzdChpbnNwZWN0U291cmNlKFdlYWtNYXApKTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciBkZWZpbmVQcm9wZXJ0aWVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydGllcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9odG1sJyk7XG52YXIgZG9jdW1lbnRDcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcblxudmFyIEdUID0gJz4nO1xudmFyIExUID0gJzwnO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xudmFyIFNDUklQVCA9ICdzY3JpcHQnO1xudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xuXG52YXIgRW1wdHlDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcblxudmFyIHNjcmlwdFRhZyA9IGZ1bmN0aW9uIChjb250ZW50KSB7XG4gIHJldHVybiBMVCArIFNDUklQVCArIEdUICsgY29udGVudCArIExUICsgJy8nICsgU0NSSVBUICsgR1Q7XG59O1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgQWN0aXZlWCBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVggPSBmdW5jdGlvbiAoYWN0aXZlWERvY3VtZW50KSB7XG4gIGFjdGl2ZVhEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJycpKTtcbiAgYWN0aXZlWERvY3VtZW50LmNsb3NlKCk7XG4gIHZhciB0ZW1wID0gYWN0aXZlWERvY3VtZW50LnBhcmVudFdpbmRvdy5PYmplY3Q7XG4gIGFjdGl2ZVhEb2N1bWVudCA9IG51bGw7IC8vIGF2b2lkIG1lbW9yeSBsZWFrXG4gIHJldHVybiB0ZW1wO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIE51bGxQcm90b09iamVjdFZpYUlGcmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGRvY3VtZW50Q3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gIHZhciBKUyA9ICdqYXZhJyArIFNDUklQVCArICc6JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNDc1XG4gIGlmcmFtZS5zcmMgPSBTdHJpbmcoSlMpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKHNjcmlwdFRhZygnZG9jdW1lbnQuRj1PYmplY3QnKSk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIHJldHVybiBpZnJhbWVEb2N1bWVudC5GO1xufTtcblxuLy8gQ2hlY2sgZm9yIGRvY3VtZW50LmRvbWFpbiBhbmQgYWN0aXZlIHggc3VwcG9ydFxuLy8gTm8gbmVlZCB0byB1c2UgYWN0aXZlIHggYXBwcm9hY2ggd2hlbiBkb2N1bWVudC5kb21haW4gaXMgbm90IHNldFxuLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lcy1zaGltcy9lczUtc2hpbS9pc3N1ZXMvMTUwXG4vLyB2YXJpYXRpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL2tpdGNhbWJyaWRnZS9lczUtc2hpbS9jb21taXQvNGY3MzhhYzA2NjM0NlxuLy8gYXZvaWQgSUUgR0MgYnVnXG52YXIgYWN0aXZlWERvY3VtZW50O1xudmFyIE51bGxQcm90b09iamVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvKiBnbG9iYWwgQWN0aXZlWE9iamVjdCAtLSBvbGQgSUUgKi9cbiAgICBhY3RpdmVYRG9jdW1lbnQgPSBkb2N1bWVudC5kb21haW4gJiYgbmV3IEFjdGl2ZVhPYmplY3QoJ2h0bWxmaWxlJyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGlnbm9yZSAqLyB9XG4gIE51bGxQcm90b09iamVjdCA9IGFjdGl2ZVhEb2N1bWVudCA/IE51bGxQcm90b09iamVjdFZpYUFjdGl2ZVgoYWN0aXZlWERvY3VtZW50KSA6IE51bGxQcm90b09iamVjdFZpYUlGcmFtZSgpO1xuICB2YXIgbGVuZ3RoID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB3aGlsZSAobGVuZ3RoLS0pIGRlbGV0ZSBOdWxsUHJvdG9PYmplY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tsZW5ndGhdXTtcbiAgcmV0dXJuIE51bGxQcm90b09iamVjdCgpO1xufTtcblxuaGlkZGVuS2V5c1tJRV9QUk9UT10gPSB0cnVlO1xuXG4vLyBgT2JqZWN0LmNyZWF0ZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5jcmVhdGVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eUNvbnN0cnVjdG9yKCk7XG4gICAgRW1wdHlDb25zdHJ1Y3RvcltQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBOdWxsUHJvdG9PYmplY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cycpO1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnRpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydGllc1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0aWVzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBvYmplY3RLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChsZW5ndGggPiBpbmRleCkgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihPLCBrZXkgPSBrZXlzW2luZGV4KytdLCBQcm9wZXJ0aWVzW2tleV0pO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgcHJvcGVydHlJc0VudW1lcmFibGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUnKTtcbnZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3JcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKSB7XG4gIE8gPSB0b0luZGV4ZWRPYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoIXByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlLmYuY2FsbChPLCBQKSwgT1tQXSk7XG59O1xuIiwidmFyIGludGVybmFsT2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VudW0tYnVnLWtleXMnKTtcblxudmFyIGhpZGRlbktleXMgPSBlbnVtQnVnS2V5cy5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5bmFtZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHluYW1lcyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBoaWRkZW5LZXlzKTtcbn07XG4iLCIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5c3ltYm9scyAtLSBzYWZlXG5leHBvcnRzLmYgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBzaGFyZWRLZXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLWtleScpO1xudmFyIENPUlJFQ1RfUFJPVE9UWVBFX0dFVFRFUiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXInKTtcblxudmFyIElFX1BST1RPID0gc2hhcmVkS2V5KCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvdHlwZSA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGBPYmplY3QuZ2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0cHJvdG90eXBlb2Zcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG90eXBlIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIGluZGV4T2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaW5jbHVkZXMnKS5pbmRleE9mO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSW5kZXhlZE9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgIWhhcyhoaWRkZW5LZXlzLCBrZXkpICYmIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+aW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWtleXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuIGludGVybmFsT2JqZWN0S2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eWRlc2NyaXB0b3IgLS0gc2FmZVxudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbi8vIE5hc2hvcm4gfiBKREs4IGJ1Z1xudmFyIE5BU0hPUk5fQlVHID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yICYmICEkcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbCh7IDE6IDIgfSwgMSk7XG5cbi8vIGBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eWlzZW51bWVyYWJsZVxuZXhwb3J0cy5mID0gTkFTSE9STl9CVUcgPyBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShWKSB7XG4gIHZhciBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRoaXMsIFYpO1xuICByZXR1cm4gISFkZXNjcmlwdG9yICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZTtcbn0gOiAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAtLSBzYWZlICovXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgYVBvc3NpYmxlUHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2EtcG9zc2libGUtcHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3Quc2V0UHJvdG90eXBlT2ZgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Quc2V0cHJvdG90eXBlb2Zcbi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1zZXRwcm90b3R5cGVvZiAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyBmdW5jdGlvbiAoKSB7XG4gIHZhciBDT1JSRUNUX1NFVFRFUiA9IGZhbHNlO1xuICB2YXIgdGVzdCA9IHt9O1xuICB2YXIgc2V0dGVyO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbiAgICBzZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQ7XG4gICAgc2V0dGVyLmNhbGwodGVzdCwgW10pO1xuICAgIENPUlJFQ1RfU0VUVEVSID0gdGVzdCBpbnN0YW5jZW9mIEFycmF5O1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90bykge1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIGFQb3NzaWJsZVByb3RvdHlwZShwcm90byk7XG4gICAgaWYgKENPUlJFQ1RfU0VUVEVSKSBzZXR0ZXIuY2FsbChPLCBwcm90byk7XG4gICAgZWxzZSBPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgIHJldHVybiBPO1xuICB9O1xufSgpIDogdW5kZWZpbmVkKTtcbiIsInZhciBnZXRCdWlsdEluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1idWlsdC1pbicpO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xuXG4vLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG5tb2R1bGUuZXhwb3J0cyA9IGdldEJ1aWx0SW4oJ1JlZmxlY3QnLCAnb3duS2V5cycpIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpIHtcbiAgdmFyIGtleXMgPSBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlLmYoYW5PYmplY3QoaXQpKTtcbiAgdmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9sc01vZHVsZS5mO1xuICByZXR1cm4gZ2V0T3duUHJvcGVydHlTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2xvYmFsO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG52YXIgaW5zcGVjdFNvdXJjZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnNwZWN0LXNvdXJjZScpO1xudmFyIEludGVybmFsU3RhdGVNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW50ZXJuYWwtc3RhdGUnKTtcblxudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldDtcbnZhciBlbmZvcmNlSW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuZW5mb3JjZTtcbnZhciBURU1QTEFURSA9IFN0cmluZyhTdHJpbmcpLnNwbGl0KCdTdHJpbmcnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgdmFyIHVuc2FmZSA9IG9wdGlvbnMgPyAhIW9wdGlvbnMudW5zYWZlIDogZmFsc2U7XG4gIHZhciBzaW1wbGUgPSBvcHRpb25zID8gISFvcHRpb25zLmVudW1lcmFibGUgOiBmYWxzZTtcbiAgdmFyIG5vVGFyZ2V0R2V0ID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5ub1RhcmdldEdldCA6IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09ICdzdHJpbmcnICYmICFoYXModmFsdWUsICduYW1lJykpIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSh2YWx1ZSwgJ25hbWUnLCBrZXkpO1xuICAgIH1cbiAgICBzdGF0ZSA9IGVuZm9yY2VJbnRlcm5hbFN0YXRlKHZhbHVlKTtcbiAgICBpZiAoIXN0YXRlLnNvdXJjZSkge1xuICAgICAgc3RhdGUuc291cmNlID0gVEVNUExBVEUuam9pbih0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8ga2V5IDogJycpO1xuICAgIH1cbiAgfVxuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgaWYgKHNpbXBsZSkgT1trZXldID0gdmFsdWU7XG4gICAgZWxzZSBzZXRHbG9iYWwoa2V5LCB2YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKCF1bnNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICB9IGVsc2UgaWYgKCFub1RhcmdldEdldCAmJiBPW2tleV0pIHtcbiAgICBzaW1wbGUgPSB0cnVlO1xuICB9XG4gIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICBlbHNlIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShPLCBrZXksIHZhbHVlKTtcbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zb3VyY2UgfHwgaW5zcGVjdFNvdXJjZSh0aGlzKTtcbn0pO1xuIiwiLy8gYFJlcXVpcmVPYmplY3RDb2VyY2libGVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1yZXF1aXJlb2JqZWN0Y29lcmNpYmxlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KGdsb2JhbCwga2V5LCB2YWx1ZSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgZ2xvYmFsW2tleV0gPSB2YWx1ZTtcbiAgfSByZXR1cm4gdmFsdWU7XG59O1xuIiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1NUUklOR19UQUcgPSB3ZWxsS25vd25TeW1ib2woJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBUQUcsIFNUQVRJQykge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IFNUQVRJQyA/IGl0IDogaXQucHJvdG90eXBlLCBUT19TVFJJTkdfVEFHKSkge1xuICAgIGRlZmluZVByb3BlcnR5KGl0LCBUT19TVFJJTkdfVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IFRBRyB9KTtcbiAgfVxufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xuXG52YXIga2V5cyA9IHNoYXJlZCgna2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIGtleXNba2V5XSB8fCAoa2V5c1trZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgc2V0R2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC1nbG9iYWwnKTtcblxudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgc2V0R2xvYmFsKFNIQVJFRCwge30pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0b3JlO1xuIiwidmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xudmFyIHN0b3JlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogJzMuMTAuMScsXG4gIG1vZGU6IElTX1BVUkUgPyAncHVyZScgOiAnZ2xvYmFsJyxcbiAgY29weXJpZ2h0OiAnwqkgMjAyMSBEZW5pcyBQdXNoa2FyZXYgKHpsb2lyb2NrLnJ1KSdcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxuLy8gYFN0cmluZy5wcm90b3R5cGUucmVwZWF0YCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5yZXBlYXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KSB7XG4gIHZhciBzdHIgPSBTdHJpbmcocmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKSk7XG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIG4gPSB0b0ludGVnZXIoY291bnQpO1xuICBpZiAobiA8IDAgfHwgbiA9PSBJbmZpbml0eSkgdGhyb3cgUmFuZ2VFcnJvcignV3JvbmcgbnVtYmVyIG9mIHJlcGV0aXRpb25zJyk7XG4gIGZvciAoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSkgaWYgKG4gJiAxKSByZXN1bHQgKz0gc3RyO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG5cbi8vIGB0aGlzTnVtYmVyVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10aGlzbnVtYmVydmFsdWVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ251bWJlcicgJiYgY2xhc3NvZih2YWx1ZSkgIT0gJ051bWJlcicpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ0luY29ycmVjdCBpbnZvY2F0aW9uJyk7XG4gIH1cbiAgcmV0dXJuICt2YWx1ZTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBIZWxwZXIgZm9yIGEgcG9wdWxhciByZXBlYXRpbmcgY2FzZSBvZiB0aGUgc3BlYzpcbi8vIExldCBpbnRlZ2VyIGJlID8gVG9JbnRlZ2VyKGluZGV4KS5cbi8vIElmIGludGVnZXIgPCAwLCBsZXQgcmVzdWx0IGJlIG1heCgobGVuZ3RoICsgaW50ZWdlciksIDApOyBlbHNlIGxldCByZXN1bHQgYmUgbWluKGludGVnZXIsIGxlbmd0aCkuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIHZhciBpbnRlZ2VyID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGludGVnZXIgPCAwID8gbWF4KGludGVnZXIgKyBsZW5ndGgsIDApIDogbWluKGludGVnZXIsIGxlbmd0aCk7XG59O1xuIiwiLy8gdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luZGV4ZWQtb2JqZWN0Jyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIEluZGV4ZWRPYmplY3QocmVxdWlyZU9iamVjdENvZXJjaWJsZShpdCkpO1xufTtcbiIsInZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuLy8gYFRvSW50ZWdlcmAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvaW50ZWdlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIGlzTmFOKGFyZ3VtZW50ID0gK2FyZ3VtZW50KSA/IDAgOiAoYXJndW1lbnQgPiAwID8gZmxvb3IgOiBjZWlsKShhcmd1bWVudCk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gYFRvTGVuZ3RoYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdG9sZW5ndGhcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCA+IDAgPyBtaW4odG9JbnRlZ2VyKGFyZ3VtZW50KSwgMHgxRkZGRkZGRkZGRkZGRikgOiAwOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwidmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBUb09iamVjdGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvb2JqZWN0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpKTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcG9zdGZpeCA9IE1hdGgucmFuZG9tKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnICsgU3RyaW5nKGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXkpICsgJylfJyArICgrK2lkICsgcG9zdGZpeCkudG9TdHJpbmcoMzYpO1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGVzL25vLXN5bWJvbCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZyAqL1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5BVElWRV9TWU1CT0xcbiAgJiYgIVN5bWJvbC5zaGFtXG4gICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCc7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VpZCcpO1xudmFyIE5BVElWRV9TWU1CT0wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXN5bWJvbCcpO1xudmFyIFVTRV9TWU1CT0xfQVNfVUlEID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkJyk7XG5cbnZhciBXZWxsS25vd25TeW1ib2xzU3RvcmUgPSBzaGFyZWQoJ3drcycpO1xudmFyIFN5bWJvbCA9IGdsb2JhbC5TeW1ib2w7XG52YXIgY3JlYXRlV2VsbEtub3duU3ltYm9sID0gVVNFX1NZTUJPTF9BU19VSUQgPyBTeW1ib2wgOiBTeW1ib2wgJiYgU3ltYm9sLndpdGhvdXRTZXR0ZXIgfHwgdWlkO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIGlmICghaGFzKFdlbGxLbm93blN5bWJvbHNTdG9yZSwgbmFtZSkgfHwgIShOQVRJVkVfU1lNQk9MIHx8IHR5cGVvZiBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPT0gJ3N0cmluZycpKSB7XG4gICAgaWYgKE5BVElWRV9TWU1CT0wgJiYgaGFzKFN5bWJvbCwgbmFtZSkpIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IFN5bWJvbFtuYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID0gY3JlYXRlV2VsbEtub3duU3ltYm9sKCdTeW1ib2wuJyArIG5hbWUpO1xuICAgIH1cbiAgfSByZXR1cm4gV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRvcnMnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yJyk7XG5cbnZhciBBUlJBWV9JVEVSQVRPUiA9ICdBcnJheSBJdGVyYXRvcic7XG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGdldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcihBUlJBWV9JVEVSQVRPUik7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZW50cmllc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5lbnRyaWVzXG4vLyBgQXJyYXkucHJvdG90eXBlLmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUua2V5c1xuLy8gYEFycmF5LnByb3RvdHlwZS52YWx1ZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUudmFsdWVzXG4vLyBgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAaXRlcmF0b3Jcbi8vIGBDcmVhdGVBcnJheUl0ZXJhdG9yYCBpbnRlcm5hbCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtY3JlYXRlYXJyYXlpdGVyYXRvclxubW9kdWxlLmV4cG9ydHMgPSBkZWZpbmVJdGVyYXRvcihBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHNldEludGVybmFsU3RhdGUodGhpcywge1xuICAgIHR5cGU6IEFSUkFZX0lURVJBVE9SLFxuICAgIHRhcmdldDogdG9JbmRleGVkT2JqZWN0KGl0ZXJhdGVkKSwgLy8gdGFyZ2V0XG4gICAgaW5kZXg6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gICAga2luZDoga2luZCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBraW5kXG4gIH0pO1xuLy8gYCVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWFycmF5aXRlcmF0b3Jwcm90b3R5cGUlLm5leHRcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKTtcbiAgdmFyIHRhcmdldCA9IHN0YXRlLnRhcmdldDtcbiAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICB2YXIgaW5kZXggPSBzdGF0ZS5pbmRleCsrO1xuICBpZiAoIXRhcmdldCB8fCBpbmRleCA+PSB0YXJnZXQubGVuZ3RoKSB7XG4gICAgc3RhdGUudGFyZ2V0ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiB7IHZhbHVlOiBpbmRleCwgZG9uZTogZmFsc2UgfTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiB7IHZhbHVlOiB0YXJnZXRbaW5kZXhdLCBkb25lOiBmYWxzZSB9O1xuICByZXR1cm4geyB2YWx1ZTogW2luZGV4LCB0YXJnZXRbaW5kZXhdXSwgZG9uZTogZmFsc2UgfTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZXVubWFwcGVkYXJndW1lbnRzb2JqZWN0XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZW1hcHBlZGFyZ3VtZW50c29iamVjdFxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHRoaXNOdW1iZXJWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZScpO1xudmFyIHJlcGVhdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zdHJpbmctcmVwZWF0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIG5hdGl2ZVRvRml4ZWQgPSAxLjAudG9GaXhlZDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbnZhciBwb3cgPSBmdW5jdGlvbiAoeCwgbiwgYWNjKSB7XG4gIHJldHVybiBuID09PSAwID8gYWNjIDogbiAlIDIgPT09IDEgPyBwb3coeCwgbiAtIDEsIGFjYyAqIHgpIDogcG93KHggKiB4LCBuIC8gMiwgYWNjKTtcbn07XG5cbnZhciBsb2cgPSBmdW5jdGlvbiAoeCkge1xuICB2YXIgbiA9IDA7XG4gIHZhciB4MiA9IHg7XG4gIHdoaWxlICh4MiA+PSA0MDk2KSB7XG4gICAgbiArPSAxMjtcbiAgICB4MiAvPSA0MDk2O1xuICB9XG4gIHdoaWxlICh4MiA+PSAyKSB7XG4gICAgbiArPSAxO1xuICAgIHgyIC89IDI7XG4gIH0gcmV0dXJuIG47XG59O1xuXG52YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoZGF0YSwgbiwgYykge1xuICB2YXIgaW5kZXggPSAtMTtcbiAgdmFyIGMyID0gYztcbiAgd2hpbGUgKCsraW5kZXggPCA2KSB7XG4gICAgYzIgKz0gbiAqIGRhdGFbaW5kZXhdO1xuICAgIGRhdGFbaW5kZXhdID0gYzIgJSAxZTc7XG4gICAgYzIgPSBmbG9vcihjMiAvIDFlNyk7XG4gIH1cbn07XG5cbnZhciBkaXZpZGUgPSBmdW5jdGlvbiAoZGF0YSwgbikge1xuICB2YXIgaW5kZXggPSA2O1xuICB2YXIgYyA9IDA7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBjICs9IGRhdGFbaW5kZXhdO1xuICAgIGRhdGFbaW5kZXhdID0gZmxvb3IoYyAvIG4pO1xuICAgIGMgPSAoYyAlIG4pICogMWU3O1xuICB9XG59O1xuXG52YXIgZGF0YVRvU3RyaW5nID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIHMgPSAnJztcbiAgd2hpbGUgKC0taW5kZXggPj0gMCkge1xuICAgIGlmIChzICE9PSAnJyB8fCBpbmRleCA9PT0gMCB8fCBkYXRhW2luZGV4XSAhPT0gMCkge1xuICAgICAgdmFyIHQgPSBTdHJpbmcoZGF0YVtpbmRleF0pO1xuICAgICAgcyA9IHMgPT09ICcnID8gdCA6IHMgKyByZXBlYXQuY2FsbCgnMCcsIDcgLSB0Lmxlbmd0aCkgKyB0O1xuICAgIH1cbiAgfSByZXR1cm4gcztcbn07XG5cbnZhciBGT1JDRUQgPSBuYXRpdmVUb0ZpeGVkICYmIChcbiAgMC4wMDAwOC50b0ZpeGVkKDMpICE9PSAnMC4wMDAnIHx8XG4gIDAuOS50b0ZpeGVkKDApICE9PSAnMScgfHxcbiAgMS4yNTUudG9GaXhlZCgyKSAhPT0gJzEuMjUnIHx8XG4gIDEwMDAwMDAwMDAwMDAwMDAxMjguMC50b0ZpeGVkKDApICE9PSAnMTAwMDAwMDAwMDAwMDAwMDEyOCdcbikgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gVjggfiBBbmRyb2lkIDQuMy1cbiAgbmF0aXZlVG9GaXhlZC5jYWxsKHt9KTtcbn0pO1xuXG4vLyBgTnVtYmVyLnByb3RvdHlwZS50b0ZpeGVkYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbnVtYmVyLnByb3RvdHlwZS50b2ZpeGVkXG4kKHsgdGFyZ2V0OiAnTnVtYmVyJywgcHJvdG86IHRydWUsIGZvcmNlZDogRk9SQ0VEIH0sIHtcbiAgdG9GaXhlZDogZnVuY3Rpb24gdG9GaXhlZChmcmFjdGlvbkRpZ2l0cykge1xuICAgIHZhciBudW1iZXIgPSB0aGlzTnVtYmVyVmFsdWUodGhpcyk7XG4gICAgdmFyIGZyYWN0RGlnaXRzID0gdG9JbnRlZ2VyKGZyYWN0aW9uRGlnaXRzKTtcbiAgICB2YXIgZGF0YSA9IFswLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB2YXIgc2lnbiA9ICcnO1xuICAgIHZhciByZXN1bHQgPSAnMCc7XG4gICAgdmFyIGUsIHosIGosIGs7XG5cbiAgICBpZiAoZnJhY3REaWdpdHMgPCAwIHx8IGZyYWN0RGlnaXRzID4gMjApIHRocm93IFJhbmdlRXJyb3IoJ0luY29ycmVjdCBmcmFjdGlvbiBkaWdpdHMnKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICAgIGlmIChudW1iZXIgIT0gbnVtYmVyKSByZXR1cm4gJ05hTic7XG4gICAgaWYgKG51bWJlciA8PSAtMWUyMSB8fCBudW1iZXIgPj0gMWUyMSkgcmV0dXJuIFN0cmluZyhudW1iZXIpO1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICBzaWduID0gJy0nO1xuICAgICAgbnVtYmVyID0gLW51bWJlcjtcbiAgICB9XG4gICAgaWYgKG51bWJlciA+IDFlLTIxKSB7XG4gICAgICBlID0gbG9nKG51bWJlciAqIHBvdygyLCA2OSwgMSkpIC0gNjk7XG4gICAgICB6ID0gZSA8IDAgPyBudW1iZXIgKiBwb3coMiwgLWUsIDEpIDogbnVtYmVyIC8gcG93KDIsIGUsIDEpO1xuICAgICAgeiAqPSAweDEwMDAwMDAwMDAwMDAwO1xuICAgICAgZSA9IDUyIC0gZTtcbiAgICAgIGlmIChlID4gMCkge1xuICAgICAgICBtdWx0aXBseShkYXRhLCAwLCB6KTtcbiAgICAgICAgaiA9IGZyYWN0RGlnaXRzO1xuICAgICAgICB3aGlsZSAoaiA+PSA3KSB7XG4gICAgICAgICAgbXVsdGlwbHkoZGF0YSwgMWU3LCAwKTtcbiAgICAgICAgICBqIC09IDc7XG4gICAgICAgIH1cbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgcG93KDEwLCBqLCAxKSwgMCk7XG4gICAgICAgIGogPSBlIC0gMTtcbiAgICAgICAgd2hpbGUgKGogPj0gMjMpIHtcbiAgICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCAyMyk7XG4gICAgICAgICAgaiAtPSAyMztcbiAgICAgICAgfVxuICAgICAgICBkaXZpZGUoZGF0YSwgMSA8PCBqKTtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMSwgMSk7XG4gICAgICAgIGRpdmlkZShkYXRhLCAyKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEgPDwgLWUsIDApO1xuICAgICAgICByZXN1bHQgPSBkYXRhVG9TdHJpbmcoZGF0YSkgKyByZXBlYXQuY2FsbCgnMCcsIGZyYWN0RGlnaXRzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZyYWN0RGlnaXRzID4gMCkge1xuICAgICAgayA9IHJlc3VsdC5sZW5ndGg7XG4gICAgICByZXN1bHQgPSBzaWduICsgKGsgPD0gZnJhY3REaWdpdHNcbiAgICAgICAgPyAnMC4nICsgcmVwZWF0LmNhbGwoJzAnLCBmcmFjdERpZ2l0cyAtIGspICsgcmVzdWx0XG4gICAgICAgIDogcmVzdWx0LnNsaWNlKDAsIGsgLSBmcmFjdERpZ2l0cykgKyAnLicgKyByZXN1bHQuc2xpY2UoayAtIGZyYWN0RGlnaXRzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IHNpZ24gKyByZXN1bHQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBBcnJheUl0ZXJhdG9yTWV0aG9kcyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvZXMuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBJVEVSQVRPUiA9IHdlbGxLbm93blN5bWJvbCgnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gQXJyYXlJdGVyYXRvck1ldGhvZHMudmFsdWVzO1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW0NPTExFQ1RJT05fTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uUHJvdG90eXBlID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZVtJVEVSQVRPUl0gIT09IEFycmF5VmFsdWVzKSB0cnkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdID0gQXJyYXlWYWx1ZXM7XG4gICAgfVxuICAgIGlmICghQ29sbGVjdGlvblByb3RvdHlwZVtUT19TVFJJTkdfVEFHXSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsIFRPX1NUUklOR19UQUcsIENPTExFQ1RJT05fTkFNRSk7XG4gICAgfVxuICAgIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkgZm9yICh2YXIgTUVUSE9EX05BTUUgaW4gQXJyYXlJdGVyYXRvck1ldGhvZHMpIHtcbiAgICAgIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICAgICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdICE9PSBBcnJheUl0ZXJhdG9yTWV0aG9kc1tNRVRIT0RfTkFNRV0pIHRyeSB7XG4gICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBNRVRIT0RfTkFNRSwgQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIENvbGxlY3Rpb25Qcm90b3R5cGVbTUVUSE9EX05BTUVdID0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgTWFzc1NwcmluZ1dpZGdldCB9IGZyb20gJy4vTWFzc1NwcmluZ1dpZGdldCc7XHJcbmltcG9ydCB7IE1hc3NTcHJpbmdNb2RlbCB9IGZyb20gJy4vTWFzc1NwcmluZ1dpZGdldC9tb2RlbCc7XHJcbmltcG9ydCBtYXNzU3ByaW5nU2V0dGluZ3MgZnJvbSAnLi9NYXNzU3ByaW5nV2lkZ2V0L3NldHRpbmdzJztcclxuaW1wb3J0ICcuL21haW4uY3NzJztcclxuXHJcbmNvbnN0IHBhcmFtcyA9IHt9O1xyXG5cclxubWFzc1NwcmluZ1NldHRpbmdzLmlucHV0cy5mb3JFYWNoKCh7IHBhcmFtTmFtZSwgaW5wdXRQYXJhbXM6IHsgdmFsdWUgfSB9KSA9PiB7XHJcbiAgcGFyYW1zW3BhcmFtTmFtZV0gPSB2YWx1ZTtcclxufSk7XHJcblxyXG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcbmNvbnN0IG1vZGVsID0gbmV3IE1hc3NTcHJpbmdNb2RlbChwYXJhbXMpO1xyXG5jb25zdCB3aWRnZXQgPSBuZXcgTWFzc1NwcmluZ1dpZGdldChtb2RlbCwge1xyXG4gIHZpZXdib3g6IFs0MDAsIDM1MF0sXHJcbiAgY29pbHM6IDQsXHJcbiAgc3ByaW5nV2lkdGg6IDgsXHJcbiAgY29pbERpYW1ldGVyOiA0MCxcclxuICBtYXNzUmFkaXVzRmFjdG9yOiAyMCxcclxufSk7XHJcbmNvbnRhaW5lci5hcHBlbmQod2lkZ2V0LmdldEVsZW0oKSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=