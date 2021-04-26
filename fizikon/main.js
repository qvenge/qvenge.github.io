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
/* harmony import */ var _gradients_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gradients.json */ "./src/components/sphere-sprite/gradients.json");
/* harmony import */ var _sphere_sprite_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sphere-sprite.css */ "./src/components/sphere-sprite/sphere-sprite.css");





var SphereSprite = /*#__PURE__*/function () {
  function SphereSprite() {
    var _params$radius, _params$cx, _params$cy;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, SphereSprite);

    this._className = 'sphere-sprite';
    this._elem = null;
    this._r = (_params$radius = params.radius) !== null && _params$radius !== void 0 ? _params$radius : 10;
    this._cx = (_params$cx = params.cx) !== null && _params$cx !== void 0 ? _params$cx : 5;
    this._cy = (_params$cy = params.cy) !== null && _params$cy !== void 0 ? _params$cy : 5;

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
      var gradients = _gradients_json__WEBPACK_IMPORTED_MODULE_3__.filter(function (gradient) {
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
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _spring_sprite_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spring-sprite.css */ "./src/components/spring-sprite/spring-sprite.css");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable class-methods-use-this */
 // коэффициент, который помогает высчитывать положение контрольных точек кривых

var K = 0.37;
var SpringSprite = /*#__PURE__*/function () {
  function SpringSprite() {
    var _params$coils, _params$position, _params$springWidth, _params$coilDiameter, _params$extension;

    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, SpringSprite);

    this._className = 'spring-sprite';
    this._elem = null;
    this._paths = [];
    this._coils = (_params$coils = params.coils) !== null && _params$coils !== void 0 ? _params$coils : 4;
    this._startPosition = (_params$position = params.position) !== null && _params$position !== void 0 ? _params$position : [10, 0];
    this._springWidth = (_params$springWidth = params.springWidth) !== null && _params$springWidth !== void 0 ? _params$springWidth : 7;
    this._coilDiameter = (_params$coilDiameter = params.coilDiameter) !== null && _params$coilDiameter !== void 0 ? _params$coilDiameter : 30;
    this._endPoint = null;

    this._init((_params$extension = params.extension) !== null && _params$extension !== void 0 ? _params$extension : 0);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(SpringSprite, [{
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

        path.setAttributeNS(null, 'd', d);
      });

      this._updateEndPoint(pathsData);
    } // метод возращает координаты конца пружины
    // это нужно, чтобы спозиционировать шар

  }, {
    key: "getEndPoint",
    value: function getEndPoint() {
      return _objectSpread({}, this._endPoint);
    }
  }, {
    key: "_init",
    value: function _init(extension) {
      var _this2 = this,
          _this$_elem;

      var pathsData = this._generateCommandsOfPaths(extension);

      this._paths = pathsData.map(function (_ref) {
        var type = _ref.type,
            commands = _ref.commands;
        return _this2._createPath(type, _this2._renderPathData(commands));
      });

      this._updateEndPoint(pathsData);

      this._elem = document.createElementNS('http://www.w3.org/2000/svg', 'g');

      this._elem.classList.add(this._className);

      (_this$_elem = this._elem).append.apply(_this$_elem, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(this._paths));
    }
  }, {
    key: "_updateEndPoint",
    value: function _updateEndPoint(pathsData) {
      var commands = pathsData[pathsData.length - 1].commands;
      var _commands$ = commands[2],
          x1 = _commands$.x,
          y = _commands$.y;
      var x2 = commands[3].x;
      this._endPoint = {
        x: x1 + (x2 - x1) / 2,
        y: y
      };
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
    }
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

/***/ "./src/components/sphere-sprite/gradients.json":
/*!*****************************************************!*\
  !*** ./src/components/sphere-sprite/gradients.json ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":"SphereGradient","r":0.65,"cx":0.65,"cy":0.25,"colors":["#D3D3D3","#696969"]}]');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL01hc3NTcHJpbmdXaWRnZXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL01hc3NTcHJpbmdXaWRnZXQvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL01hc3NTcHJpbmdXaWRnZXQvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9sYWJlbC9sYWJlbC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9tYXNzLXNwcmluZy9tYXNzLXNwcmluZy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9yYW5nZS1pbnB1dC9yYW5nZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9zcGhlcmUtc3ByaXRlL3NwaGVyZS1zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvc3ByaW5nLXNwcml0ZS9zcHJpbmctc3ByaXRlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jbGFzc29mLXJhdy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb3JyZWN0LXByb3RvdHlwZS1nZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2NyZWF0ZS1pdGVyYXRvci1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVmaW5lLWl0ZXJhdG9yLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9jdW1lbnQtY3JlYXRlLWVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZW5naW5lLXY4LXZlcnNpb24uanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2V4cG9ydC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZmFpbHMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dldC1idWlsdC1pbi5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZ2xvYmFsLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9oYXMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2hpZGRlbi1rZXlzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9odG1sLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaW5kZXhlZC1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2luc3BlY3Qtc291cmNlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvaXMtZm9yY2VkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLXB1cmUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2l0ZXJhdG9ycy1jb3JlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pdGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL25hdGl2ZS13ZWFrLW1hcC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0aWVzLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktc3ltYm9scy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvb2JqZWN0LXByb3BlcnR5LWlzLWVudW1lcmFibGUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcGF0aC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvcmVkZWZpbmUuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LWdsb2JhbC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2V0LXRvLXN0cmluZy10YWcuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1rZXkuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NoYXJlZC1zdG9yZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvc2hhcmVkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90aGlzLW51bWJlci12YWx1ZS5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXguanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0LmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1pbnRlZ2VyLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy91aWQuanMiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3VzZS1zeW1ib2wtYXMtdWlkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMubnVtYmVyLnRvLWZpeGVkLmpzIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5pdGVyYXRvci5qcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvTWFzc1NwcmluZ1dpZGdldC9zdHlsZS5jc3M/YmNiZCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcz85NjhmIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL3NyYy9jb21wb25lbnRzL2xhYmVsL2xhYmVsLmNzcz8yZmYxIiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL3NyYy9jb21wb25lbnRzL21hc3Mtc3ByaW5nL21hc3Mtc3ByaW5nLmNzcyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9yYW5nZS1pbnB1dC9yYW5nZS1pbnB1dC5jc3M/ZjUyMiIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvY29tcG9uZW50cy9zcGhlcmUtc3ByaXRlL3NwaGVyZS1zcHJpdGUuY3NzPzY3ZTkiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0Ly4vc3JjL2NvbXBvbmVudHMvc3ByaW5nLXNwcml0ZS9zcHJpbmctc3ByaXRlLmNzcz83ODM1Iiwid2VicGFjazovL2Zpemlrb25fdGVzdC8uL3NyYy9tYWluLmNzcz83NmJiIiwid2VicGFjazovL2Zpemlrb25fdGVzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZml6aWtvbl90ZXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9maXppa29uX3Rlc3QvLi9zcmMvbWFpbi5qcyJdLCJuYW1lcyI6WyJNYXNzU3ByaW5nV2lkZ2V0IiwibW9kZWwiLCJwYXJhbXMiLCJfbW9kZWwiLCJfY2xhc3NOYW1lIiwiX2VsZW0iLCJfcmVxdWVzdElkIiwiX2lucHV0Q29tcG9uZW50cyIsIl9tYXNzU3ByaW5nIiwiX3N0YXJ0U3RvcEJ1dHRvbiIsIl9yZXNldEJ1dHRvbiIsIl9sYWJlbHMiLCJfbWFzc1JhZGl1c0ZhY3RvciIsIm1hc3NSYWRpdXNGYWN0b3IiLCJzZXR0aW5ncyIsInVwZGF0ZSIsImJpbmQiLCJfaW5pdCIsIm1vZGVsU3RhdGUiLCJnZXRTdGF0ZSIsIl91cGRhdGVWaXN1YWxpemF0aW9uUGFuZWwiLCJfdXBkYXRlQ29udHJvbGxQYW5lbCIsIl91cGRhdGVJbmZvcm1hdGlvblBhbmVsIiwiaXNBY3RpdmUiLCJfZGlzYWJsZUNvbnRyb2xsUGFuZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfZW5hYmxlQ29udHJvbGxQYW5lbCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwic3RvcCIsInN0YXJ0IiwicmVzZXQiLCJwYXJhbSIsInZhbHVlIiwic2V0UGFyYW1zIiwiTnVtYmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidmlzdWFsaXphdGlvblBhbmVsIiwiX2NyZWF0ZVZpc3VhbGl6YXRpb25QYW5lbCIsImNvbnRyb2xsUGFuZWwiLCJfY3JlYXRlQ29udHJvbGxQYW5lbCIsImluZm9ybWF0aW9uUGFuZWwiLCJfY3JlYXRlSW5mb3JtYXRpb25QYW5lbCIsImFwcGVuZCIsImF0dGFjaCIsIk1hc3NTcHJpbmciLCJidXR0b25MaXN0IiwiQnV0dG9uIiwidGV4dCIsIm9uQ2xpY2siLCJfdG9nZ2xlUHJvY2VzcyIsInN0YXJ0U3RvcEJ1dHRvbldyYXBwZXIiLCJnZXRFbGVtIiwiX3Jlc2V0UHJvY2VzcyIsInJlc2V0QnV0dG9uV3JhcHBlciIsInBhcmFtTmFtZSIsImlucHV0UGFyYW1zIiwiZ2V0VGV4dCIsImlucHV0IiwiUmFuZ2VJbnB1dCIsImxhYmVsIiwib25DaGFuZ2UiLCJfc2V0TW9kZWxQYXJhbSIsImdldFZhbHVlIiwiYWJvcnRDaGFuZ2UiLCJpbnB1dEVsZW1zIiwibWFwIiwiaW5wdXRXcmFwcGVyIiwiTGFiZWwiLCJsYWJlbEVsZW1zIiwibGFiZWxXcmFwcGVyIiwic2V0TWFzc1JhZGl1cyIsIl9jYWxjTWFzc1JhZGl1cyIsIm0iLCJleHRlbmRTcHJpbmciLCJ4Iiwic2V0VGV4dCIsImFjdGl2ZSIsImZvckVhY2giLCJ1bmRlZmluZWQiLCJzZXRWYWx1ZSIsInNldExhYmVsIiwic2NyZWVuIiwicXVlcnlTZWxlY3RvciIsInJlbW92ZSIsInBhbmVsIiwibWFzcyIsIk1hdGgiLCJjYnJ0IiwiREVGQVVMVF9QQVJBTVMiLCJrIiwiQSIsImNhbGNFeHRlbnNpb24iLCJjYWxjQW5ndWxhckZyZXF1ZW5jeSIsInNxcnQiLCJNYXNzU3ByaW5nTW9kZWwiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX3RpbWUiLCJfc3RhcnRUaW1lIiwiX3BhcmFtcyIsIl9hbmd1bGFyRnJlcXVlbmN5IiwiX2luaXRpYWxFeHRlbnNpb24iLCJ0aW1lIiwiX2dldFRpbWUiLCJvZmZzZXQiLCJfY2FsY09mZnNldCIsInciLCJ0IiwieDAiLCJkeCIsIm4iLCJfY2FsY051bWJlck9mVmlicmF0aW9uIiwibmV3UGFyYW1zIiwic3RhdGVDaGFuZ2VkIiwiT2JqZWN0IiwiZW50cmllcyIsInByZXZQYXJhbVZhbHVlIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwicGFyYW1WYWx1ZSIsIl9pc1ZhbGlkUGFyYW0iLCJub3RpZnkiLCJwZXJmb3JtYW5jZSIsIm5vdyIsImNhbGxiYWNrIiwiYWRkIiwibmFtZSIsImFicyIsInNoaWZ0IiwiUEkiLCJjb3MiLCJzdGFydEJ1dHRvblRleHQiLCJzdG9wQnV0dG9uVGV4dCIsInJlc2V0QnV0dG9uVGV4dCIsImlucHV0cyIsIm1pbiIsIm1heCIsInN0ZXAiLCJsYWJlbHMiLCJtb2RlbFBhcmFtcyIsInRvRml4ZWQiLCJmbG9vciIsInJvdW5kIiwicHJvcHMiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJERUZBVUxUX1ZJRVdCT1giLCJfc3ByaW5nU3ByaXRlIiwiX21hc3NTcHJpdGUiLCJfdmlld2JveCIsInZpZXdib3giLCJzZXRSYWRpdXMiLCJleHRlbmQiLCJfdXBkYXRlTWFzc1Bvc2l0aW9uIiwiY3JlYXRlRWxlbWVudE5TIiwiY2xhc3NMaXN0Iiwic2V0QXR0cmlidXRlIiwiX2NyZWF0ZVNwcmluZ1NwdGl0ZSIsIl9jcmVhdGVNYXNzU3ByaXRlIiwiU3ByaW5nU3ByaXRlIiwicG9zaXRpb24iLCJjb2lscyIsImNvaWxEaWFtZXRlciIsInNwcmluZ1dpZHRoIiwiZXh0ZW5zaW9uIiwiZ2V0RW5kUG9pbnQiLCJTcGhlcmVTcHJpdGUiLCJjeCIsImN5IiwieSIsInJhZGl1cyIsIm1hc3NSYWRpdXMiLCJtYXNzUG9zaXRpb24iLCJnZXRSYWRpdXMiLCJzZXRQb3NpdGlvbiIsIlBBUkFNX05BTUVTIiwiX3ZhbHVlIiwiX2lucHV0RWxlbSIsIl9sYWJlbEVsZW0iLCJkaXNhYmxlZCIsIkFycmF5IiwiZnJvbSIsImtleXMiLCJmaWx0ZXIiLCJhdHRyIiwiaW5jbHVkZXMiLCJfciIsIl9jeCIsIl9jeSIsIl9jaXJjbGUiLCJzZXRBdHRyaWJ1dGVOUyIsImNpcmNsZSIsImdyYWRpZW50cyIsImdyYWRpZW50c0RhdGEiLCJncmFkaWVudCIsImNvbG9ycyIsImxlbmd0aCIsInIiLCJjb2xvciIsImluZGV4Iiwiam9pbiIsImlubmVySFRNTCIsIksiLCJfcGF0aHMiLCJfY29pbHMiLCJfc3RhcnRQb3NpdGlvbiIsIl9zcHJpbmdXaWR0aCIsIl9jb2lsRGlhbWV0ZXIiLCJfZW5kUG9pbnQiLCJwYXRoc0RhdGEiLCJfZ2VuZXJhdGVDb21tYW5kc09mUGF0aHMiLCJwYXRoIiwiZCIsIl9yZW5kZXJQYXRoRGF0YSIsImNvbW1hbmRzIiwiX3VwZGF0ZUVuZFBvaW50IiwidHlwZSIsIl9jcmVhdGVQYXRoIiwieDEiLCJ4MiIsInN0YXJ0UG9zaXRpb24iLCJoYWxmUGVyaW9kIiwiX2NhbGNIYWxmUGVyaW9kIiwiTCIsImZyb250UGF0aHMiLCJiYWNrUGF0aHMiLCJ4U2hpZnQiLCJyZWN0SGVpZ2h0Iiwic3RhcnRQb2ludCIsInN0YXJ0UmVjdFBvaW50cyIsImVuZFBvaW50IiwicHVzaCIsIl9jYWxjUmVjdENvbW1hbmRzIiwic3RhcnRDdXJ2ZVBvaW50cyIsImNvbnRyb2xQb2ludDEiLCJjb250cm9sUG9pbnQyIiwiX2NhbGNDdXJ2ZUNvbW1hbmRzIiwiaSIsImRpciIsInBhdGhQb2ludHMiLCJkYXRhIiwiZW5kQ3VydmVQb2ludHMiLCJlbmRSZWN0UG9pbnRzIiwid2lkdGgiLCJjb21tYW5kIiwieTEiLCJ5MiIsInNlZ21lbnRzIiwic2VnIiwicmVzdWx0IiwibWFzc1NwcmluZ1NldHRpbmdzIiwiY29udGFpbmVyIiwid2lkZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDRnFEO0FBQ3RDO0FBQ2YsaUNBQWlDLDZEQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZDQUE2QywrQkFBK0I7QUFDNUU7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FB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QUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTXBOLE1BQU0sR0FBRyxFQUFmO0FBRUEyUCw4RUFBQSxDQUFrQyxnQkFBMkM7QUFBQSxNQUF4Q3JNLFNBQXdDLFFBQXhDQSxTQUF3QztBQUFBLE1BQWR4QixLQUFjLFFBQTdCeUIsV0FBNkIsQ0FBZHpCLEtBQWM7QUFDM0U5QixRQUFNLENBQUNzRCxTQUFELENBQU4sR0FBb0J4QixLQUFwQjtBQUNELENBRkQ7QUFJQSxJQUFNOE4sU0FBUyxHQUFHM04sUUFBUSxDQUFDaUQsYUFBVCxDQUF1QixZQUF2QixDQUFsQjtBQUNBLElBQU1uRixLQUFLLEdBQUcsSUFBSStGLG9FQUFKLENBQW9COUYsTUFBcEIsQ0FBZDtBQUNBLElBQU02UCxNQUFNLEdBQUcsSUFBSS9QLCtEQUFKLENBQXFCQyxLQUFyQixFQUE0QjtBQUN6Q3dKLFNBQU8sRUFBRSxDQUFDLEdBQUQsRUFBTSxHQUFOLENBRGdDO0FBRXpDVyxPQUFLLEVBQUUsQ0FGa0M7QUFHekNFLGFBQVcsRUFBRSxDQUg0QjtBQUl6Q0QsY0FBWSxFQUFFLEVBSjJCO0FBS3pDeEosa0JBQWdCLEVBQUU7QUFMdUIsQ0FBNUIsQ0FBZjtBQU9BaVAsU0FBUyxDQUFDbE4sTUFBVixDQUFpQm1OLE1BQU0sQ0FBQzFNLE9BQVAsRUFBakIsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KGFycik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5TGltaXQgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5TGltaXQuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlUmVzdCBmcm9tIFwiLi9ub25JdGVyYWJsZVJlc3QuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59IiwiaW1wb3J0IHsgTWFzc1NwcmluZyB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWFzcy1zcHJpbmcvbWFzcy1zcHJpbmcnO1xyXG5pbXBvcnQgeyBSYW5nZUlucHV0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9yYW5nZS1pbnB1dC9yYW5nZS1pbnB1dCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbic7XHJcbmltcG9ydCB7IExhYmVsIH0gZnJvbSAnLi4vY29tcG9uZW50cy9sYWJlbC9sYWJlbCc7XHJcbmltcG9ydCBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcclxuXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hc3NTcHJpbmdXaWRnZXQge1xyXG4gIGNvbnN0cnVjdG9yKG1vZGVsLCBwYXJhbXMgPSB7fSkge1xyXG4gICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcclxuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICdtYXNzLXNwcmluZyc7XHJcbiAgICB0aGlzLl9lbGVtID0gbnVsbDtcclxuICAgIHRoaXMuX3JlcXVlc3RJZCA9IG51bGw7XHJcbiAgICB0aGlzLl9pbnB1dENvbXBvbmVudHMgPSBudWxsO1xyXG4gICAgdGhpcy5fbWFzc1NwcmluZyA9IG51bGw7XHJcbiAgICB0aGlzLl9zdGFydFN0b3BCdXR0b24gPSBudWxsO1xyXG4gICAgdGhpcy5fcmVzZXRCdXR0b24gPSBudWxsO1xyXG4gICAgdGhpcy5fbGFiZWxzID0gbnVsbDtcclxuICAgIHRoaXMuX21hc3NSYWRpdXNGYWN0b3IgPSBwYXJhbXMubWFzc1JhZGl1c0ZhY3RvciA/PyBzZXR0aW5ncy5tYXNzUmFkaXVzRmFjdG9yO1xyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2luaXQocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICB9XHJcblxyXG4gIC8vINC80LXRgtC+0LQg0L7QsdC90L7QstC70Y/QtdGCINC/0YDQtdC00YHRgtCw0LLQu9C10L3QuNC1INCyINGB0L7QvtGC0LLQtdGC0YHRgtCy0LjQuCDRgSDRgdC+0YHRgtC+0Y/QvdC40LXQvCDQvNC+0LTQtdC70LhcclxuICB1cGRhdGUoKSB7XHJcbiAgICBjb25zdCBtb2RlbFN0YXRlID0gdGhpcy5fbW9kZWwuZ2V0U3RhdGUoKTtcclxuICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQvtCx0LvQsNGB0YLRjCDQstC40LfRg9Cw0LvQuNC30LDRhtC40LhcclxuICAgIHRoaXMuX3VwZGF0ZVZpc3VhbGl6YXRpb25QYW5lbChtb2RlbFN0YXRlKTtcclxuICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQvtCx0LvQsNGB0YLRjCDQv9Cw0YDQsNC80LXRgtGA0L7QslxyXG4gICAgdGhpcy5fdXBkYXRlQ29udHJvbGxQYW5lbChtb2RlbFN0YXRlKTtcclxuICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQvtCx0LvQsNGB0YLRjCDRhdCw0YDQsNC60YLQtdGA0LjRgdGC0LjQulxyXG4gICAgdGhpcy5fdXBkYXRlSW5mb3JtYXRpb25QYW5lbChtb2RlbFN0YXRlKTtcclxuICAgIC8vINC30LDQv9GD0YHQutCw0LXQvCDQuNC70Lgg0L7RgdGC0LDQvdCy0LDQu9C40LLQsNC10Lwg0LDQvdC40LzQsNGG0LjRjiDQv9GA0L7RhtC10YHRgdCwXHJcbiAgICBpZiAodGhpcy5fbW9kZWwuaXNBY3RpdmUoKSkge1xyXG4gICAgICB0aGlzLl9kaXNhYmxlQ29udHJvbGxQYW5lbCgpO1xyXG4gICAgICB0aGlzLl9yZXF1ZXN0SWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fZW5hYmxlQ29udHJvbGxQYW5lbCgpO1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLl9yZXF1ZXN0SWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gLS0tLSDQutC+0L3RgtGA0L7Qu9C70LXRgCAtLS0tLVxyXG5cclxuICBfdG9nZ2xlUHJvY2VzcygpIHtcclxuICAgIHRoaXMuX21vZGVsLmlzQWN0aXZlKCkgPyB0aGlzLl9tb2RlbC5zdG9wKCkgOiB0aGlzLl9tb2RlbC5zdGFydCgpO1xyXG4gIH1cclxuXHJcbiAgX3Jlc2V0UHJvY2VzcygpIHtcclxuICAgIHRoaXMuX21vZGVsLnJlc2V0KCk7XHJcbiAgfVxyXG5cclxuICBfc2V0TW9kZWxQYXJhbShwYXJhbSwgdmFsdWUpIHtcclxuICAgIHRoaXMuX21vZGVsLnNldFBhcmFtcyh7IFtwYXJhbV06IE51bWJlcih2YWx1ZSkgfSk7XHJcbiAgfVxyXG5cclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgX2luaXQocGFyYW1zKSB7XHJcbiAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLl9lbGVtLmNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzTmFtZTtcclxuXHJcbiAgICBjb25zdCB2aXN1YWxpemF0aW9uUGFuZWwgPSB0aGlzLl9jcmVhdGVWaXN1YWxpemF0aW9uUGFuZWwocGFyYW1zKTtcclxuICAgIGNvbnN0IGNvbnRyb2xsUGFuZWwgPSB0aGlzLl9jcmVhdGVDb250cm9sbFBhbmVsKHBhcmFtcyk7XHJcbiAgICBjb25zdCBpbmZvcm1hdGlvblBhbmVsID0gdGhpcy5fY3JlYXRlSW5mb3JtYXRpb25QYW5lbChwYXJhbXMpO1xyXG4gICAgdGhpcy5fZWxlbS5hcHBlbmQodmlzdWFsaXphdGlvblBhbmVsLCBjb250cm9sbFBhbmVsLCBpbmZvcm1hdGlvblBhbmVsKTtcclxuXHJcbiAgICAvLyDQv9C+0LTQv9C40YHRi9Cy0LDQtdC80YHRjyDQvdCwINC+0LHQvdC+0LLQu9C10L3QuNGPINC80L7QtNC10LvQuFxyXG4gICAgdGhpcy5fbW9kZWwuYXR0YWNoKHRoaXMudXBkYXRlKTtcclxuICAgIC8vINGB0YDQsNC30YMg0YHQuNC90YXRgNC+0L3QuNC30LjRgNGD0LXQvCDQv9GA0LXQtNGB0YLQsNCy0LvQtdC90LjQtSDRgSDQvNC+0LTQtdC70YzRjlxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIF9jcmVhdGVWaXN1YWxpemF0aW9uUGFuZWwocGFyYW1zKSB7XHJcbiAgICBjb25zdCB2aXN1YWxpemF0aW9uUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHZpc3VhbGl6YXRpb25QYW5lbC5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19wYW5lbCAke3RoaXMuX2NsYXNzTmFtZX1fX3BhbmVsX3Zpc3VhbGl6YXRpb25gO1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDQtdC8INC/0YDRg9C20LjQvdC90YvQuSDQvNCw0Y/RgtC90LjQulxyXG4gICAgdGhpcy5fbWFzc1NwcmluZyA9IG5ldyBNYXNzU3ByaW5nKHBhcmFtcyk7XHJcblxyXG4gICAgY29uc3QgYnV0dG9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnV0dG9uTGlzdC5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19idXR0b24tbGlzdGA7XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0LrQvdC+0L/QutGDINGB0YLQsNGA0YLQsCDQuCDQvtGB0YLQsNC90L7QstC60LhcclxuICAgIHRoaXMuX3N0YXJ0U3RvcEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xyXG4gICAgICB0ZXh0OiBzZXR0aW5ncy5zdGFydEJ1dHRvblRleHQsXHJcbiAgICAgIG9uQ2xpY2s6IHRoaXMuX3RvZ2dsZVByb2Nlc3MuYmluZCh0aGlzKSxcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3RhcnRTdG9wQnV0dG9uV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3RhcnRTdG9wQnV0dG9uV3JhcHBlci5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19idXR0b25gO1xyXG4gICAgc3RhcnRTdG9wQnV0dG9uV3JhcHBlci5hcHBlbmQodGhpcy5fc3RhcnRTdG9wQnV0dG9uLmdldEVsZW0oKSk7XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0LrQvdC+0L/QutGDINGB0LHRgNC+0YHQsFxyXG4gICAgdGhpcy5fcmVzZXRCdXR0b24gPSBuZXcgQnV0dG9uKHtcclxuICAgICAgdGV4dDogc2V0dGluZ3MucmVzZXRCdXR0b25UZXh0LFxyXG4gICAgICBvbkNsaWNrOiB0aGlzLl9yZXNldFByb2Nlc3MuYmluZCh0aGlzKSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgcmVzZXRCdXR0b25XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICByZXNldEJ1dHRvbldyYXBwZXIuY2xhc3NOYW1lID0gYCR7dGhpcy5fY2xhc3NOYW1lfV9fYnV0dG9uYDtcclxuICAgIHJlc2V0QnV0dG9uV3JhcHBlci5hcHBlbmQodGhpcy5fcmVzZXRCdXR0b24uZ2V0RWxlbSgpKTtcclxuXHJcbiAgICBidXR0b25MaXN0LmFwcGVuZChzdGFydFN0b3BCdXR0b25XcmFwcGVyLCByZXNldEJ1dHRvbldyYXBwZXIpO1xyXG4gICAgdmlzdWFsaXphdGlvblBhbmVsLmFwcGVuZCh0aGlzLl9tYXNzU3ByaW5nLmdldEVsZW0oKSwgYnV0dG9uTGlzdCk7XHJcbiAgICByZXR1cm4gdmlzdWFsaXphdGlvblBhbmVsO1xyXG4gIH1cclxuXHJcbiAgX2NyZWF0ZUNvbnRyb2xsUGFuZWwoKSB7XHJcbiAgICBjb25zdCBjb250cm9sbFBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250cm9sbFBhbmVsLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX3BhbmVsICR7dGhpcy5fY2xhc3NOYW1lfV9fcGFuZWxfY29udHJvbGxgO1xyXG5cclxuICAgIHRoaXMuX2lucHV0Q29tcG9uZW50cyA9IHNldHRpbmdzLmlucHV0cy5tYXAoKHsgcGFyYW1OYW1lLCBpbnB1dFBhcmFtcywgZ2V0VGV4dCB9KSA9PiAoe1xyXG4gICAgICBwYXJhbU5hbWUsXHJcbiAgICAgIGdldFRleHQsXHJcbiAgICAgIGlucHV0OiBuZXcgUmFuZ2VJbnB1dCh7XHJcbiAgICAgICAgLi4uaW5wdXRQYXJhbXMsXHJcbiAgICAgICAgbGFiZWw6IGdldFRleHQoaW5wdXRQYXJhbXMudmFsdWUpLFxyXG4gICAgICAgIG9uQ2hhbmdlOiAoaW5wdXQpID0+IHtcclxuICAgICAgICAgIHRoaXMuX3NldE1vZGVsUGFyYW0ocGFyYW1OYW1lLCBpbnB1dC5nZXRWYWx1ZSgpKTtcclxuICAgICAgICAgIC8vINC+0YLQvNC10L3Rj9C8INC40LfQvNC10L3QtdC90LjQtSDQt9C90LDRh9C10L3QuNGPINC40L3Qv9GD0YLQsFxyXG4gICAgICAgICAgLy8g0LvRjtCx0YvQtSDQuNC30LzQtdC90LXQvdC40Y8gdmlldyDQv9GA0L7QuNGB0YXQvtC00Y/RgiDQsiDQvNC10YLQvtC00LUgdXBkYXRlXHJcbiAgICAgICAgICBpbnB1dC5hYm9ydENoYW5nZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RWxlbXMgPSB0aGlzLl9pbnB1dENvbXBvbmVudHMubWFwKCh7IGlucHV0IH0pID0+IHtcclxuICAgICAgY29uc3QgaW5wdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGlucHV0V3JhcHBlci5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19pbnB1dGA7XHJcbiAgICAgIGlucHV0V3JhcHBlci5hcHBlbmQoaW5wdXQuZ2V0RWxlbSgpKTtcclxuICAgICAgcmV0dXJuIGlucHV0V3JhcHBlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRyb2xsUGFuZWwuYXBwZW5kKC4uLmlucHV0RWxlbXMpO1xyXG4gICAgcmV0dXJuIGNvbnRyb2xsUGFuZWw7XHJcbiAgfVxyXG5cclxuICBfY3JlYXRlSW5mb3JtYXRpb25QYW5lbCgpIHtcclxuICAgIGNvbnN0IGluZm9ybWF0aW9uUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm9ybWF0aW9uUGFuZWwuY2xhc3NOYW1lID0gYCR7dGhpcy5fY2xhc3NOYW1lfV9fcGFuZWwgJHt0aGlzLl9jbGFzc05hbWV9X19wYW5lbF9pbmZvcm1hdGlvbmA7XHJcblxyXG4gICAgdGhpcy5fbGFiZWxzID0gc2V0dGluZ3MubGFiZWxzLm1hcCgoZ2V0VGV4dCkgPT4gKHtcclxuICAgICAgZ2V0VGV4dCxcclxuICAgICAgbGFiZWw6IG5ldyBMYWJlbCgpLFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGNvbnN0IGxhYmVsRWxlbXMgPSB0aGlzLl9sYWJlbHMubWFwKCh7IGxhYmVsIH0pID0+IHtcclxuICAgICAgY29uc3QgbGFiZWxXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIGxhYmVsV3JhcHBlci5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19sYWJlbGA7XHJcbiAgICAgIGxhYmVsV3JhcHBlci5hcHBlbmQobGFiZWwuZ2V0RWxlbSgpKTtcclxuICAgICAgcmV0dXJuIGxhYmVsV3JhcHBlcjtcclxuICAgIH0pO1xyXG5cclxuICAgIGluZm9ybWF0aW9uUGFuZWwuYXBwZW5kKC4uLmxhYmVsRWxlbXMpO1xyXG5cclxuICAgIHJldHVybiBpbmZvcm1hdGlvblBhbmVsO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZVZpc3VhbGl6YXRpb25QYW5lbChtb2RlbFN0YXRlKSB7XHJcbiAgICAvLyDRgdC90LDRh9Cw0LvQsCDRg9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRgNCw0LTQuNGD0YEg0YHRhNC10YDRiywg0LAg0L/QvtGC0L7QvCDRgNCw0YHRgtGP0LbQtdC90LjQtSDQv9GA0YPQttC40L3Ri1xyXG4gICAgLy8g0YIuINC6LiDQv9C+0LvQvtC20LXQvdC40LUg0YHRhNC10YDRiyDQv9C+0YHQu9C1INGA0LDRgdGC0Y/QttC10L3QuNGPINC/0YDRg9C20LjQvdGLINC30LDQstC40YHQuNGCINC+0YIg0YDQsNC00LjRg9GB0LAg0YHRhNC10YDRi1xyXG4gICAgdGhpcy5fbWFzc1NwcmluZy5zZXRNYXNzUmFkaXVzKHRoaXMuX2NhbGNNYXNzUmFkaXVzKG1vZGVsU3RhdGUubSkpO1xyXG4gICAgdGhpcy5fbWFzc1NwcmluZy5leHRlbmRTcHJpbmcobW9kZWxTdGF0ZS54KTtcclxuICAgIHRoaXMuX3N0YXJ0U3RvcEJ1dHRvbi5zZXRUZXh0KG1vZGVsU3RhdGUuYWN0aXZlID8gc2V0dGluZ3Muc3RvcEJ1dHRvblRleHQgOiBzZXR0aW5ncy5zdGFydEJ1dHRvblRleHQpO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUNvbnRyb2xsUGFuZWwobW9kZWxTdGF0ZSkge1xyXG4gICAgdGhpcy5faW5wdXRDb21wb25lbnRzLmZvckVhY2goKHsgcGFyYW1OYW1lLCBpbnB1dCwgZ2V0VGV4dCB9KSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gbW9kZWxTdGF0ZVtwYXJhbU5hbWVdO1xyXG4gICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlucHV0LnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICBpbnB1dC5zZXRMYWJlbChnZXRUZXh0KHZhbHVlKSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZUluZm9ybWF0aW9uUGFuZWwobW9kZWxTdGF0ZSkge1xyXG4gICAgdGhpcy5fbGFiZWxzLmZvckVhY2goKHsgZ2V0VGV4dCwgbGFiZWwgfSkgPT4gbGFiZWwuc2V0VGV4dChnZXRUZXh0KG1vZGVsU3RhdGUpKSk7XHJcbiAgfVxyXG5cclxuICBfZW5hYmxlQ29udHJvbGxQYW5lbCgpIHtcclxuICAgIGNvbnN0IHNjcmVlbiA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY2xhc3NOYW1lfV9fcGFuZWxfY29udHJvbGwgLiR7dGhpcy5fY2xhc3NOYW1lfV9fc2NyZWVuYCk7XHJcblxyXG4gICAgaWYgKHNjcmVlbikge1xyXG4gICAgICBzY3JlZW4ucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfZGlzYWJsZUNvbnRyb2xsUGFuZWwoKSB7XHJcbiAgICBjb25zdCBwYW5lbCA9IHRoaXMuX2VsZW0ucXVlcnlTZWxlY3RvcihgLiR7dGhpcy5fY2xhc3NOYW1lfV9fcGFuZWxfY29udHJvbGxgKTtcclxuICAgIGxldCBzY3JlZW4gPSBwYW5lbC5xdWVyeVNlbGVjdG9yKGAuJHt0aGlzLl9jbGFzc05hbWV9X19zY3JlZW5gKTtcclxuXHJcbiAgICBpZiAoIXNjcmVlbikge1xyXG4gICAgICBzY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgc2NyZWVuLmNsYXNzTmFtZSA9IGAke3RoaXMuX2NsYXNzTmFtZX1fX3NjcmVlbmA7XHJcbiAgICB9XHJcblxyXG4gICAgcGFuZWwuYXBwZW5kKHNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBfY2FsY01hc3NSYWRpdXMobWFzcykge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hc3NSYWRpdXNGYWN0b3IgKiBNYXRoLmNicnQobWFzcyk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIFxyXG4gINCy0YHQtSDQtNC70LjQvdGLINCyINGB0LDQvdGC0LjQvNC10YLRgNCw0YUsINCwINCy0YDQtdC80Y8g0LIg0YHQtdC60YPQvdC00LDRhVxyXG5cclxuICBtICAgLSDQvNCw0YHRgdCwINCz0YDRg9C30LBcclxuICBrICAgLSDQutC+0Y3RhNGE0LjRhtC40LXQvdGCINGD0L/RgNGD0LPQvtGB0YLQuCDQv9GA0YPQttC40L3Ri1xyXG4gIEEgICAtINCw0LzQv9C70LjRgtGD0LTQsCDQutC+0LvQtdCx0LDQvdC40LkgKNC+0YLQutC70L7QvdC10L3QuNC1INC+0YIg0YHQvtGB0YLQvtGP0L3QuNGPINGA0LDQstC90L7QstC10YHQuNGPKVxyXG4gIHcgICAtINGG0LjQutC70LjRh9C10YHQutCw0Y8g0YfQsNGB0YLQvtGC0LBcclxuICB0ICAgLSDQstGA0LXQvNGPINC/0YDQvtGI0LXQtNGI0LXQtSDQv9C+0YHQu9C1INGB0YLQsNGA0YLQsFxyXG4gIHgwICAtINC/0L7Qu9C+0LbQtdC90LjQtSDQutC+0L3RhtCwINC/0YDRg9C20LjQvdGLINCyINGB0L7RgdGC0L7Rj9C90LjQuCDRgNCw0LLQvdC+0LLQtdGB0LjRj1xyXG4gIGR4ICAtINC+0YLQutC+0LvQvdC10L3QuNC1INC60L7QvdGG0LAg0L/RgNGD0LbQuNC90Ysg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INGB0L7RgdGC0L7Rj9C90LjRjyDRgNCw0LLQvdC+0LLQtdGB0LjRj1xyXG4gIHggICAtINGC0LXQutGD0YnQtdC1INC/0L7Qu9C+0LbQtdC90LjQtSDQutC+0L3RhtCwINC/0YDRg9C20LjQvdGLXHJcbiAgbiAgIC0g0LrQvtC70LjRh9C10YHRgtCy0L4g0LrQvtC70LXQsdCw0L3QuNC5XHJcbiovXHJcblxyXG5jb25zdCBERUZBVUxUX1BBUkFNUyA9IHsgbTogMC41LCBrOiA1LCBBOiAxMCB9O1xyXG5jb25zdCBjYWxjRXh0ZW5zaW9uID0gKHsgbSwgayB9KSA9PiAoMTAwICogOS44ICogbSkgLyBrO1xyXG5jb25zdCBjYWxjQW5ndWxhckZyZXF1ZW5jeSA9ICh7IG0sIGsgfSkgPT4gTWF0aC5zcXJ0KGsgLyBtKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXNzU3ByaW5nTW9kZWwge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XHJcbiAgICB0aGlzLl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IG51bGw7XHJcbiAgICB0aGlzLl9wYXJhbXMgPSB7IC4uLkRFRkFVTFRfUEFSQU1TIH07XHJcbiAgICB0aGlzLl9hbmd1bGFyRnJlcXVlbmN5ID0gY2FsY0FuZ3VsYXJGcmVxdWVuY3koREVGQVVMVF9QQVJBTVMpO1xyXG4gICAgLy8g0YDQsNGB0YLRj9C20LXQvdC40LUg0L/RgNGD0LbQuNC90Ysg0L/QvtC0INC00LXQudGB0YLQstC40LXQvCDQstC10YHQsCDQsiDRgdC+0YHRgtC+0Y/QvdC40Lgg0L/QvtC60L7Rj1xyXG4gICAgdGhpcy5faW5pdGlhbEV4dGVuc2lvbiA9IGNhbGNFeHRlbnNpb24oREVGQVVMVF9QQVJBTVMpO1xyXG4gICAgdGhpcy5zZXRQYXJhbXMocGFyYW1zKTtcclxuICB9XHJcblxyXG4gIGlzQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3N0YXJ0VGltZSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIGdldFN0YXRlKCkge1xyXG4gICAgY29uc3QgdGltZSA9IHRoaXMuX2dldFRpbWUoKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IHRoaXMuX2NhbGNPZmZzZXQodGltZSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAuLi50aGlzLl9wYXJhbXMsXHJcbiAgICAgIHc6IHRoaXMuX2FuZ3VsYXJGcmVxdWVuY3ksXHJcbiAgICAgIHQ6IHRpbWUsXHJcbiAgICAgIHgwOiB0aGlzLl9pbml0aWFsRXh0ZW5zaW9uLFxyXG4gICAgICBkeDogb2Zmc2V0LFxyXG4gICAgICB4OiB0aGlzLl9pbml0aWFsRXh0ZW5zaW9uICsgb2Zmc2V0LFxyXG4gICAgICBuOiB0aGlzLl9jYWxjTnVtYmVyT2ZWaWJyYXRpb24odGltZSksXHJcbiAgICAgIGFjdGl2ZTogdGhpcy5pc0FjdGl2ZSgpLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNldFBhcmFtcyhwYXJhbXMpIHtcclxuICAgIGNvbnN0IG5ld1BhcmFtcyA9IHsgLi4udGhpcy5fcGFyYW1zIH07XHJcbiAgICBsZXQgc3RhdGVDaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgT2JqZWN0LmVudHJpZXModGhpcy5fcGFyYW1zKS5mb3JFYWNoKChbcGFyYW1OYW1lLCBwcmV2UGFyYW1WYWx1ZV0pID0+IHtcclxuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChwYXJhbXMsIHBhcmFtTmFtZSkpIHtcclxuICAgICAgICBjb25zdCBwYXJhbVZhbHVlID0gcGFyYW1zW3BhcmFtTmFtZV07XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pc1ZhbGlkUGFyYW0ocGFyYW1OYW1lLCBwYXJhbVZhbHVlKSAmJiBwcmV2UGFyYW1WYWx1ZSAhPT0gcGFyYW1WYWx1ZSkge1xyXG4gICAgICAgICAgc3RhdGVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgIG5ld1BhcmFtc1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChzdGF0ZUNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5fcGFyYW1zID0gbmV3UGFyYW1zO1xyXG4gICAgICB0aGlzLl9pbml0aWFsRXh0ZW5zaW9uID0gY2FsY0V4dGVuc2lvbihuZXdQYXJhbXMpO1xyXG4gICAgICB0aGlzLl9hbmd1bGFyRnJlcXVlbmN5ID0gY2FsY0FuZ3VsYXJGcmVxdWVuY3kobmV3UGFyYW1zKTtcclxuICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLl90aW1lID0gMDtcclxuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHRoaXMuaXNBY3RpdmUoKSA/IHBlcmZvcm1hbmNlLm5vdygpIDogbnVsbDtcclxuICAgIHRoaXMubm90aWZ5KCk7XHJcbiAgfVxyXG5cclxuICBzdGFydCgpIHtcclxuICAgIGlmICghdGhpcy5pc0FjdGl2ZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLl9zdGFydFRpbWUgPT09IG51bGwpIHtcclxuICAgICAgICB0aGlzLl9zdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vdGlmeSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc3RvcCgpIHtcclxuICAgIGlmICh0aGlzLmlzQWN0aXZlKCkpIHtcclxuICAgICAgdGhpcy5fdGltZSA9IHRoaXMuX2dldFRpbWUoKTtcclxuICAgICAgdGhpcy5fc3RhcnRUaW1lID0gbnVsbDtcclxuICAgICAgdGhpcy5ub3RpZnkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGF0dGFjaChjYWxsYmFjaykge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzLmFkZChjYWxsYmFjayk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2goY2FsbGJhY2spIHtcclxuICAgIHRoaXMuX2NhbGxiYWNrcy5kZWxldGUoY2FsbGJhY2spO1xyXG4gIH1cclxuXHJcbiAgbm90aWZ5KCkge1xyXG4gICAgdGhpcy5fY2FsbGJhY2tzLmZvckVhY2goKGNhbGxiYWNrKSA9PiB7XHJcbiAgICAgIGNhbGxiYWNrLmNhbGwobnVsbCwgdGhpcyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9pc1ZhbGlkUGFyYW0obmFtZSwgdmFsdWUpIHtcclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICBjYXNlICdtJzpcclxuICAgICAgY2FzZSAnayc6XHJcbiAgICAgICAgLy8g0LzQsNGB0YHQsCDQuCDQutC+0Y3RhNGE0LjRhtC40LXQvdGCINGD0L/RgNGD0LPQvtGB0YLQuCDQvdC1INC80L7Qs9GD0YIg0LHRi9GC0Ywg0L7RgtGA0LjRhtCw0YLQtdC70YzQvdGL0LzQuFxyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIHZhbHVlID4gMDtcclxuICAgICAgY2FzZSAnQSc6XHJcbiAgICAgICAgLy8g0LfQsNC00LDQvdC90L7QtSDQvtGC0LrQu9C+0L3QtdC90LjQtSDQvdC1INC80L7QttC10YIg0LHRi9GC0Ywg0L/QviDQvNC+0LTRg9C70Y4g0LHQvtC70YzRiNC1INC40LfQvdCw0YfQsNC70YzQvdC+0LPQviDRgNCw0YHRgtGP0LbQtdC90LjRjyDQv9GA0YPQttC40L3Ri1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInICYmIE1hdGguYWJzKHZhbHVlKSA8PSB0aGlzLl9pbml0aWFsRXh0ZW5zaW9uO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINCy0YDQtdC80Y8g0L/RgNC+0YjQtdC00YjQtdC1INGBINC90LDRh9Cw0LvQsCDQv9GA0L7RhtC10YHRgdCwXHJcbiAgX2dldFRpbWUoKSB7XHJcbiAgICBjb25zdCBzaGlmdCA9IHRoaXMuaXNBY3RpdmUoKSA/IChwZXJmb3JtYW5jZS5ub3coKSAtIHRoaXMuX3N0YXJ0VGltZSkgLyAxMDAwIDogMDtcclxuICAgIHJldHVybiB0aGlzLl90aW1lICsgc2hpZnQ7XHJcbiAgfVxyXG5cclxuICBfY2FsY051bWJlck9mVmlicmF0aW9uKHRpbWUpIHtcclxuICAgIHJldHVybiAodGhpcy5fYW5ndWxhckZyZXF1ZW5jeSAqIHRpbWUpIC8gKDIgKiBNYXRoLlBJKTtcclxuICB9XHJcblxyXG4gIF9jYWxjT2Zmc2V0KHRpbWUpIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJhbXMuQSAqIE1hdGguY29zKHRoaXMuX2FuZ3VsYXJGcmVxdWVuY3kgKiB0aW1lKTtcclxuICB9XHJcbn1cclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIG1hc3NSYWRpdXNGYWN0b3I6IDE2LFxyXG4gIHN0YXJ0QnV0dG9uVGV4dDogJ9CX0LDQv9GD0YHRgtC40YLRjCcsXHJcbiAgc3RvcEJ1dHRvblRleHQ6ICfQntGB0YLQsNC90L7QstC40YLRjCcsXHJcbiAgcmVzZXRCdXR0b25UZXh0OiAn0KHQsdGA0L7RgdC40YLRjCcsXHJcbiAgaW5wdXRzOiBbXHJcbiAgICB7XHJcbiAgICAgIHBhcmFtTmFtZTogJ20nLFxyXG4gICAgICBpbnB1dFBhcmFtczoge1xyXG4gICAgICAgIG1pbjogMC41LFxyXG4gICAgICAgIG1heDogMSxcclxuICAgICAgICBzdGVwOiAwLjEsXHJcbiAgICAgICAgdmFsdWU6IDAuNSxcclxuICAgICAgfSxcclxuICAgICAgZ2V0VGV4dDogKHZhbHVlKSA9PiBg0JzQsNGB0YHQsCDQs9GA0YPQt9CwIChtKTogJHt2YWx1ZX0g0LrQs2AsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwYXJhbU5hbWU6ICdrJyxcclxuICAgICAgaW5wdXRQYXJhbXM6IHtcclxuICAgICAgICBtaW46IDUsXHJcbiAgICAgICAgbWF4OiA5LFxyXG4gICAgICAgIHN0ZXA6IDEsXHJcbiAgICAgICAgdmFsdWU6IDUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRleHQ6ICh2YWx1ZSkgPT4gYNCW0LXRgdGC0LrQvtGB0YLRjCDQv9GA0YPQttC40L3RiyAoayk6ICR7dmFsdWV9INCdL9C8YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHBhcmFtTmFtZTogJ0EnLFxyXG4gICAgICBpbnB1dFBhcmFtczoge1xyXG4gICAgICAgIG1pbjogMCxcclxuICAgICAgICBtYXg6IDIwLFxyXG4gICAgICAgIHN0ZXA6IDIsXHJcbiAgICAgICAgdmFsdWU6IDEwLFxyXG4gICAgICB9LFxyXG4gICAgICBnZXRUZXh0OiAodmFsdWUpID0+IGDQntGC0LrQu9C+0L3QtdC90LjQtSAoeDApOiAke3ZhbHVlfSDRgdC8YCxcclxuICAgIH0sXHJcbiAgXSxcclxuICBsYWJlbHM6IFtcclxuICAgIChtb2RlbFBhcmFtcykgPT4gYNCm0LjQutC70LjRh9C10YHQutCw0Y8g0YfQsNGB0YLQvtGC0LA6ICR7bW9kZWxQYXJhbXMudy50b0ZpeGVkKDIpfSDRgNCw0LQv0YFgLFxyXG4gICAgKG1vZGVsUGFyYW1zKSA9PiBg0JLRgNC10LzRjyDQv9GA0L7RiNC10LTRiNC10LUg0L/QvtGB0LvQtSDRgdGC0LDRgNGC0LA6ICR7bW9kZWxQYXJhbXMudC50b0ZpeGVkKDIpfSDRgdC10LrRg9C90LRgLFxyXG4gICAgKG1vZGVsUGFyYW1zKSA9PiBg0JrQvtC70LjRh9C10YHRgtCy0L4g0L/QvtC70L3Ri9GFINC60L7Qu9C10LHQsNC90LjQuTogJHtNYXRoLmZsb29yKG1vZGVsUGFyYW1zLm4pfWAsXHJcbiAgICAobW9kZWxQYXJhbXMpID0+IGDQntGC0LrQu9C+0L3QtdC90LjQtSDQvtGCINGA0LDQstC90L7QstC10YHQuNGPOiAke01hdGgucm91bmQobW9kZWxQYXJhbXMuZHgpfSDRgdC8YCxcclxuICBdLFxyXG59O1xyXG4iLCJpbXBvcnQgJy4vYnV0dG9uLmNzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XHJcbiAgICB0aGlzLl9jbGFzc05hbWUgPSAnYnV0dG9uJztcclxuICAgIHRoaXMuX2VsZW0gPSBudWxsO1xyXG4gICAgdGhpcy5faW5pdChwcm9wcyk7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW07XHJcbiAgfVxyXG5cclxuICBfaW5pdChwcm9wcykge1xyXG4gICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdGhpcy5fZWxlbS5jbGFzc05hbWUgPSB0aGlzLl9jbGFzc05hbWU7XHJcbiAgICB0aGlzLl9lbGVtLnRleHRDb250ZW50ID0gcHJvcHMudGV4dCA/PyAnQnV0dG9uJztcclxuXHJcbiAgICBpZiAodHlwZW9mIHByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5fZWxlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHByb3BzLm9uQ2xpY2suY2FsbChudWxsLCB0aGlzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VsZW0udGV4dENvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXRUZXh0KHZhbHVlKSB7XHJcbiAgICB0aGlzLl9lbGVtLnRleHRDb250ZW50ID0gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9sYWJlbC5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExhYmVsIHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XHJcbiAgICB0aGlzLl9jbGFzc05hbWUgPSAnbGFiZWwnO1xyXG4gICAgdGhpcy5fZWxlbSA9IG51bGw7XHJcbiAgICB0aGlzLl9pbml0KHByb3BzKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICB9XHJcblxyXG4gIF9pbml0KHByb3BzKSB7XHJcbiAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLl9lbGVtLmNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzTmFtZTtcclxuICAgIHRoaXMuX2VsZW0udGV4dENvbnRlbnQgPSBwcm9wcy50ZXh0ID8/ICdUZXh0JztcclxuICB9XHJcblxyXG4gIGdldFRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbS50ZXh0Q29udGVudDtcclxuICB9XHJcblxyXG4gIHNldFRleHQodmFsdWUpIHtcclxuICAgIHRoaXMuX2VsZW0udGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgU3ByaW5nU3ByaXRlIH0gZnJvbSAnLi4vc3ByaW5nLXNwcml0ZS9zcHJpbmctc3ByaXRlJztcclxuaW1wb3J0IHsgU3BoZXJlU3ByaXRlIH0gZnJvbSAnLi4vc3BoZXJlLXNwcml0ZS9zcGhlcmUtc3ByaXRlJztcclxuaW1wb3J0ICcuL21hc3Mtc3ByaW5nLmNzcyc7XHJcblxyXG5jb25zdCBERUZBVUxUX1ZJRVdCT1ggPSBbNDAwLCAzMDBdO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hc3NTcHJpbmcge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcclxuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICdtYXNzLXNwcmluZyc7XHJcbiAgICB0aGlzLl9lbGVtID0gbnVsbDtcclxuICAgIHRoaXMuX3NwcmluZ1Nwcml0ZSA9IG51bGw7XHJcbiAgICB0aGlzLl9tYXNzU3ByaXRlID0gbnVsbDtcclxuICAgIHRoaXMuX3ZpZXdib3ggPSBwcm9wcy52aWV3Ym94ID8/IERFRkFVTFRfVklFV0JPWDtcclxuXHJcbiAgICB0aGlzLl9pbml0KHByb3BzKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICB9XHJcblxyXG4gIHNldE1hc3NSYWRpdXModmFsdWUpIHtcclxuICAgIHRoaXMuX21hc3NTcHJpdGUuc2V0UmFkaXVzKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGV4dGVuZFNwcmluZyh2YWx1ZSkge1xyXG4gICAgdGhpcy5fc3ByaW5nU3ByaXRlLmV4dGVuZCh2YWx1ZSk7XHJcbiAgICB0aGlzLl91cGRhdGVNYXNzUG9zaXRpb24oKTtcclxuICB9XHJcblxyXG4gIF9pbml0KHByb3BzKSB7XHJcbiAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdmcnKTtcclxuICAgIHRoaXMuX2VsZW0uY2xhc3NMaXN0LmFkZCh0aGlzLl9jbGFzc05hbWUpO1xyXG4gICAgdGhpcy5fZWxlbS5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7dGhpcy5fdmlld2JveFswXX0gJHt0aGlzLl92aWV3Ym94WzFdfWApO1xyXG4gICAgdGhpcy5fZWxlbS5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyk7XHJcblxyXG4gICAgdGhpcy5fc3ByaW5nU3ByaXRlID0gdGhpcy5fY3JlYXRlU3ByaW5nU3B0aXRlKHByb3BzKTtcclxuICAgIHRoaXMuX21hc3NTcHJpdGUgPSB0aGlzLl9jcmVhdGVNYXNzU3ByaXRlKHByb3BzKTtcclxuICAgIHRoaXMuX3VwZGF0ZU1hc3NQb3NpdGlvbigpO1xyXG5cclxuICAgIHRoaXMuX2VsZW0uYXBwZW5kKHRoaXMuX3NwcmluZ1Nwcml0ZS5nZXRFbGVtKCksIHRoaXMuX21hc3NTcHJpdGUuZ2V0RWxlbSgpKTtcclxuICB9XHJcblxyXG4gIF9jcmVhdGVTcHJpbmdTcHRpdGUocHJvcHMpIHtcclxuICAgIHJldHVybiBuZXcgU3ByaW5nU3ByaXRlKHtcclxuICAgICAgcG9zaXRpb246IFt0aGlzLl92aWV3Ym94WzBdIC8gMiwgMF0sXHJcbiAgICAgIGNvaWxzOiBwcm9wcy5jb2lscyxcclxuICAgICAgY29pbERpYW1ldGVyOiBwcm9wcy5jb2lsRGlhbWV0ZXIsXHJcbiAgICAgIHNwcmluZ1dpZHRoOiBwcm9wcy5zcHJpbmdXaWR0aCxcclxuICAgICAgZXh0ZW5zaW9uOiBwcm9wcy5leHRlbnNpb24sXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIF9jcmVhdGVNYXNzU3ByaXRlKHByb3BzKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuX3NwcmluZ1Nwcml0ZS5nZXRFbmRQb2ludCgpO1xyXG4gICAgcmV0dXJuIG5ldyBTcGhlcmVTcHJpdGUoe1xyXG4gICAgICBjeDogcG9zaXRpb24ueCxcclxuICAgICAgY3k6IHBvc2l0aW9uLnksXHJcbiAgICAgIHJhZGl1czogcHJvcHMubWFzc1JhZGl1cyxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgX3VwZGF0ZU1hc3NQb3NpdGlvbigpIHtcclxuICAgIGNvbnN0IG1hc3NQb3NpdGlvbiA9IHRoaXMuX3NwcmluZ1Nwcml0ZS5nZXRFbmRQb2ludCgpO1xyXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5fbWFzc1Nwcml0ZS5nZXRSYWRpdXMoKTtcclxuICAgIHRoaXMuX21hc3NTcHJpdGUuc2V0UG9zaXRpb24oe1xyXG4gICAgICB4OiBtYXNzUG9zaXRpb24ueCxcclxuICAgICAgeTogbWFzc1Bvc2l0aW9uLnkgKyByYWRpdXMgLSAyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCAnLi9yYW5nZS1pbnB1dC5jc3MnO1xyXG5cclxuY29uc3QgUEFSQU1fTkFNRVMgPSBbJ21pbicsICdtYXgnLCAnc3RlcCcsICd2YWx1ZScsICduYW1lJ107XHJcblxyXG5leHBvcnQgY2xhc3MgUmFuZ2VJbnB1dCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xyXG4gICAgdGhpcy5fY2xhc3NOYW1lID0gJ3JhbmdlLWlucHV0JztcclxuICAgIHRoaXMuX2VsZW0gPSBudWxsO1xyXG4gICAgdGhpcy5fdmFsdWUgPSBwcm9wcy52YWx1ZTtcclxuICAgIHRoaXMuX2lucHV0RWxlbSA9IG51bGw7XHJcbiAgICB0aGlzLl9sYWJlbEVsZW0gPSBudWxsO1xyXG5cclxuICAgIHRoaXMuX2luaXQocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gIH1cclxuXHJcbiAgLy8g0LjQvNC10LXRgiDRgdC80YvRgdC7INCy0YvQt9GL0LLQsNGC0Ywg0YLQvtC70YzQutC+INCyINC+0LHRgNCw0LHQvtGC0YfQuNC60LUgb25DaGFuZ2VcclxuICBhYm9ydENoYW5nZSgpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbS52YWx1ZSA9IHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TGFiZWwoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbGFiZWxFbGVtLnRleHRDb250ZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0TGFiZWwodGV4dCkge1xyXG4gICAgdGhpcy5fbGFiZWxFbGVtLnRleHRDb250ZW50ID0gdGV4dDtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW0udmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5wdXRFbGVtLnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RlcCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW0uc3RlcDtcclxuICB9XHJcblxyXG4gIHNldFN0ZXAodmFsdWUpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbS5zdGVwID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXRNaW4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtLm1pbjtcclxuICB9XHJcblxyXG4gIHNldE1pbih2YWx1ZSkge1xyXG4gICAgdGhpcy5faW5wdXRFbGVtLm1pbiA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWF4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbS5tYXg7XHJcbiAgfVxyXG5cclxuICBzZXRNYXgodmFsdWUpIHtcclxuICAgIHRoaXMuX2lucHV0RWxlbS5tYXggPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5faW5wdXRFbGVtLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBfaW5pdChwcm9wcykge1xyXG4gICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0aGlzLl9lbGVtLmNsYXNzTmFtZSA9IHRoaXMuX2NsYXNzTmFtZTtcclxuXHJcbiAgICB0aGlzLl9sYWJlbEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0aGlzLl9sYWJlbEVsZW0uY2xhc3NOYW1lID0gYCR7dGhpcy5fY2xhc3NOYW1lfV9fbGFiZWxgO1xyXG4gICAgdGhpcy5fbGFiZWxFbGVtLnRleHRDb250ZW50ID0gcHJvcHMubGFiZWwgPz8gJyc7XHJcblxyXG4gICAgdGhpcy5faW5wdXRFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRoaXMuX2lucHV0RWxlbS5jbGFzc05hbWUgPSBgJHt0aGlzLl9jbGFzc05hbWV9X19pbnB1dGA7XHJcbiAgICB0aGlzLl9pbnB1dEVsZW0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XHJcblxyXG4gICAgY29uc3QgcGFyYW1zID0gQXJyYXkuZnJvbShPYmplY3Qua2V5cyhwcm9wcykpLmZpbHRlcigoYXR0cikgPT4gUEFSQU1fTkFNRVMuaW5jbHVkZXMoYXR0cikpO1xyXG5cclxuICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbU5hbWUpID0+IHtcclxuICAgICAgdGhpcy5faW5wdXRFbGVtLnNldEF0dHJpYnV0ZShwYXJhbU5hbWUsIGAke3Byb3BzW3BhcmFtTmFtZV19YCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9pbnB1dEVsZW0uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgJ2lucHV0JyxcclxuICAgICAgdHlwZW9mIHByb3BzLm9uQ2hhbmdlID09PSAnZnVuY3Rpb24nXHJcbiAgICAgICAgPyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlLmNhbGwobnVsbCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5faW5wdXRFbGVtLnZhbHVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IHRoaXMuX2lucHV0RWxlbS52YWx1ZTtcclxuICAgICAgICAgIH0sXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuX2VsZW0uYXBwZW5kKHRoaXMuX2xhYmVsRWxlbSwgdGhpcy5faW5wdXRFbGVtKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGdyYWRpZW50c0RhdGEgZnJvbSAnLi9ncmFkaWVudHMuanNvbic7XHJcblxyXG5pbXBvcnQgJy4vc3BoZXJlLXNwcml0ZS5jc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaGVyZVNwcml0ZSB7XHJcbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcclxuICAgIHRoaXMuX2NsYXNzTmFtZSA9ICdzcGhlcmUtc3ByaXRlJztcclxuICAgIHRoaXMuX2VsZW0gPSBudWxsO1xyXG4gICAgdGhpcy5fciA9IHBhcmFtcy5yYWRpdXMgPz8gMTA7XHJcbiAgICB0aGlzLl9jeCA9IHBhcmFtcy5jeCA/PyA1O1xyXG4gICAgdGhpcy5fY3kgPSBwYXJhbXMuY3kgPz8gNTtcclxuICAgIHRoaXMuX2luaXQoKTtcclxuICB9XHJcblxyXG4gIGdldEVsZW0oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbTtcclxuICB9XHJcblxyXG4gIGdldFBvc2l0aW9uKCkge1xyXG4gICAgcmV0dXJuIHsgeDogdGhpcy5fY3gsIHk6IHRoaXMuX2N5IH07XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih7IHgsIHkgfSkge1xyXG4gICAgdGhpcy5fY3ggPSB4O1xyXG4gICAgdGhpcy5fY3kgPSB5O1xyXG4gICAgdGhpcy5fY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeCcsIHgpO1xyXG4gICAgdGhpcy5fY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIHkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmFkaXVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3I7XHJcbiAgfVxyXG5cclxuICBzZXRSYWRpdXMocmFkaXVzKSB7XHJcbiAgICB0aGlzLl9yID0gcmFkaXVzO1xyXG4gICAgdGhpcy5fY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdyJywgcmFkaXVzKTtcclxuICB9XHJcblxyXG4gIF9pbml0KCkge1xyXG4gICAgdGhpcy5fZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnZycpO1xyXG4gICAgdGhpcy5fZWxlbS5jbGFzc0xpc3QuYWRkKHRoaXMuX2NsYXNzTmFtZSk7XHJcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2NpcmNsZScpO1xyXG4gICAgY2lyY2xlLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5fY2xhc3NOYW1lfV9fY2lyY2xlYCk7XHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlTlMobnVsbCwgJ2N4JywgdGhpcy5fY3gpO1xyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZU5TKG51bGwsICdjeScsIHRoaXMuX2N5KTtcclxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGVOUyhudWxsLCAncicsIHRoaXMuX3IpO1xyXG4gICAgdGhpcy5fY2lyY2xlID0gY2lyY2xlO1xyXG5cclxuICAgIGNvbnN0IGdyYWRpZW50cyA9IGdyYWRpZW50c0RhdGFcclxuICAgICAgLmZpbHRlcigoZ3JhZGllbnQpID0+IGdyYWRpZW50Py5jb2xvcnM/Lmxlbmd0aCA+IDEpXHJcbiAgICAgIC5tYXAoKGdyYWRpZW50KSA9PlxyXG4gICAgICAgIFtcclxuICAgICAgICAgIGA8cmFkaWFsR3JhZGllbnQgaWQ9XCJTcGhlcmVHcmFkaWVudFwiIGN4PVwiJHtncmFkaWVudC5jeCA/PyAwLjV9XCIgY3k9XCIke2dyYWRpZW50LmN5ID8/IDAuNX1cIiByPVwiJHtcclxuICAgICAgICAgICAgZ3JhZGllbnQuciA/PyAwLjVcclxuICAgICAgICAgIH1cIj5gLFxyXG4gICAgICAgICAgLi4uZ3JhZGllbnQuY29sb3JzLm1hcChcclxuICAgICAgICAgICAgKGNvbG9yLCBpbmRleCwgeyBsZW5ndGggfSkgPT4gYDxzdG9wIG9mZnNldD1cIiR7aW5kZXggLyAobGVuZ3RoIC0gMSl9XCIgc3RvcC1jb2xvcj1cIiR7Y29sb3J9XCIvPmAsXHJcbiAgICAgICAgICApLFxyXG4gICAgICAgICAgJzwvcmFkaWFsR3JhZGllbnQ+JyxcclxuICAgICAgICBdLmpvaW4oJycpLFxyXG4gICAgICApO1xyXG5cclxuICAgIGlmIChncmFkaWVudHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX2VsZW0uaW5uZXJIVE1MID0gYDxkZWZzPlxcbiR7Z3JhZGllbnRzLmpvaW4oJ1xcbicpfVxcbjwvZGVmcz5gO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2VsZW0uYXBwZW5kKGNpcmNsZSk7XHJcbiAgfVxyXG59XHJcbiIsIi8qIGVzbGludC1kaXNhYmxlIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXMgKi9cclxuaW1wb3J0ICcuL3NwcmluZy1zcHJpdGUuY3NzJztcclxuXHJcbi8vINC60L7RjdGE0YTQuNGG0LjQtdC90YIsINC60L7RgtC+0YDRi9C5INC/0L7QvNC+0LPQsNC10YIg0LLRi9GB0YfQuNGC0YvQstCw0YLRjCDQv9C+0LvQvtC20LXQvdC40LUg0LrQvtC90YLRgNC+0LvRjNC90YvRhSDRgtC+0YfQtdC6INC60YDQuNCy0YvRhVxyXG5jb25zdCBLID0gMC4zNztcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpbmdTcHJpdGUge1xyXG4gIGNvbnN0cnVjdG9yKHBhcmFtcyA9IHt9KSB7XHJcbiAgICB0aGlzLl9jbGFzc05hbWUgPSAnc3ByaW5nLXNwcml0ZSc7XHJcbiAgICB0aGlzLl9lbGVtID0gbnVsbDtcclxuICAgIHRoaXMuX3BhdGhzID0gW107XHJcbiAgICB0aGlzLl9jb2lscyA9IHBhcmFtcy5jb2lscyA/PyA0O1xyXG4gICAgdGhpcy5fc3RhcnRQb3NpdGlvbiA9IHBhcmFtcy5wb3NpdGlvbiA/PyBbMTAsIDBdO1xyXG4gICAgdGhpcy5fc3ByaW5nV2lkdGggPSBwYXJhbXMuc3ByaW5nV2lkdGggPz8gNztcclxuICAgIHRoaXMuX2NvaWxEaWFtZXRlciA9IHBhcmFtcy5jb2lsRGlhbWV0ZXIgPz8gMzA7XHJcbiAgICB0aGlzLl9lbmRQb2ludCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5faW5pdChwYXJhbXMuZXh0ZW5zaW9uID8/IDApO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbGVtO1xyXG4gIH1cclxuXHJcbiAgLy8g0LzQtdGC0L7QtCDRgNCw0YHRgtGP0LPQuNCy0LDQtdGCINC/0YDRg9C20LjQvdGDXHJcbiAgZXh0ZW5kKHZhbHVlKSB7XHJcbiAgICBjb25zdCBwYXRoc0RhdGEgPSB0aGlzLl9nZW5lcmF0ZUNvbW1hbmRzT2ZQYXRocyh2YWx1ZSk7XHJcbiAgICB0aGlzLl9wYXRocy5mb3JFYWNoKChwYXRoLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCBkID0gdGhpcy5fcmVuZGVyUGF0aERhdGEocGF0aHNEYXRhW2luZGV4XS5jb21tYW5kcyk7XHJcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCBkKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fdXBkYXRlRW5kUG9pbnQocGF0aHNEYXRhKTtcclxuICB9XHJcblxyXG4gIC8vINC80LXRgtC+0LQg0LLQvtC30YDQsNGJ0LDQtdGCINC60L7QvtGA0LTQuNC90LDRgtGLINC60L7QvdGG0LAg0L/RgNGD0LbQuNC90YtcclxuICAvLyDRjdGC0L4g0L3Rg9C20L3Qviwg0YfRgtC+0LHRiyDRgdC/0L7Qt9C40YbQuNC+0L3QuNGA0L7QstCw0YLRjCDRiNCw0YBcclxuICBnZXRFbmRQb2ludCgpIHtcclxuICAgIHJldHVybiB7IC4uLnRoaXMuX2VuZFBvaW50IH07XHJcbiAgfVxyXG5cclxuICBfaW5pdChleHRlbnNpb24pIHtcclxuICAgIGNvbnN0IHBhdGhzRGF0YSA9IHRoaXMuX2dlbmVyYXRlQ29tbWFuZHNPZlBhdGhzKGV4dGVuc2lvbik7XHJcbiAgICB0aGlzLl9wYXRocyA9IHBhdGhzRGF0YS5tYXAoKHsgdHlwZSwgY29tbWFuZHMgfSkgPT4gdGhpcy5fY3JlYXRlUGF0aCh0eXBlLCB0aGlzLl9yZW5kZXJQYXRoRGF0YShjb21tYW5kcykpKTtcclxuICAgIHRoaXMuX3VwZGF0ZUVuZFBvaW50KHBhdGhzRGF0YSk7XHJcbiAgICB0aGlzLl9lbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJyk7XHJcbiAgICB0aGlzLl9lbGVtLmNsYXNzTGlzdC5hZGQodGhpcy5fY2xhc3NOYW1lKTtcclxuICAgIHRoaXMuX2VsZW0uYXBwZW5kKC4uLnRoaXMuX3BhdGhzKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVFbmRQb2ludChwYXRoc0RhdGEpIHtcclxuICAgIGNvbnN0IHsgY29tbWFuZHMgfSA9IHBhdGhzRGF0YVtwYXRoc0RhdGEubGVuZ3RoIC0gMV07XHJcbiAgICBjb25zdCB7IHg6IHgxLCB5IH0gPSBjb21tYW5kc1syXTtcclxuICAgIGNvbnN0IHsgeDogeDIgfSA9IGNvbW1hbmRzWzNdO1xyXG4gICAgdGhpcy5fZW5kUG9pbnQgPSB7IHg6IHgxICsgKHgyIC0geDEpIC8gMiwgeSB9O1xyXG4gIH1cclxuXHJcbiAgX2NhbGNIYWxmUGVyaW9kKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIChleHRlbnNpb24gLyAodGhpcy5fY29pbHMgKyAxKSArIHRoaXMuX3NwcmluZ1dpZHRoKSAvIDI7XHJcbiAgfVxyXG5cclxuICAvLyDQvNC10YLQvtC0INCy0YvRgdGH0LjRgtGL0LLQsNC10YIg0LrQvtC80LzQsNC90LTRiyDQtNC70Y8g0LLRgdC10YUg0L/Rg9GC0LXQuVxyXG4gIC8vINCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINC00LLQvtC50L3QvtC5INC80LDRgdGB0LjQslxyXG4gIF9nZW5lcmF0ZUNvbW1hbmRzT2ZQYXRocyhleHRlbnNpb24pIHtcclxuICAgIGNvbnN0IHsgX3N0YXJ0UG9zaXRpb246IHN0YXJ0UG9zaXRpb24sIF9jb2lsRGlhbWV0ZXI6IGNvaWxEaWFtZXRlciwgX2NvaWxzOiBjb2lscyB9ID0gdGhpcztcclxuICAgIC8vINC/0L7Qu9C+0LLQuNC90LAg0YDQsNGB0YHRgtC+0Y/QvdC40LUg0LzQtdC20LTRgyDQstC40YLQutCw0LzQuCDQv9GA0YPQttC40L3Ri1xyXG4gICAgbGV0IGhhbGZQZXJpb2QgPSB0aGlzLl9jYWxjSGFsZlBlcmlvZChleHRlbnNpb24pO1xyXG4gICAgLy8g0LTQu9C40L3QsCDQvtC00L3QvtCz0L4g0LLQuNGC0LrQsFxyXG4gICAgY29uc3QgTCA9IE1hdGguUEkgKiBjb2lsRGlhbWV0ZXI7XHJcblxyXG4gICAgY29uc3QgZnJvbnRQYXRocyA9IFtdO1xyXG4gICAgY29uc3QgYmFja1BhdGhzID0gW107XHJcblxyXG4gICAgaWYgKGhhbGZQZXJpb2QgPiBMIC8gMikge1xyXG4gICAgICBoYWxmUGVyaW9kID0gTCAvIDI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeFNoaWZ0ID0gY29pbERpYW1ldGVyIC0gKCgyICogaGFsZlBlcmlvZCkgLyBMKSAqIGNvaWxEaWFtZXRlcjtcclxuICAgIGNvbnN0IHJlY3RIZWlnaHQgPSAyMDtcclxuXHJcbiAgICBsZXQgc3RhcnRQb2ludCA9IHN0YXJ0UG9zaXRpb247XHJcblxyXG4gICAgLy8g0YHQvtC30LTQsNC10Lwg0LLQtdGA0YXQvdC40Lkg0YHRgtC10YDQttC10L3RjFxyXG4gICAgY29uc3Qgc3RhcnRSZWN0UG9pbnRzID0geyBzdGFydFBvaW50OiBbLi4uc3RhcnRQb2ludF0sIGVuZFBvaW50OiBbc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSArIHJlY3RIZWlnaHRdIH07XHJcbiAgICBmcm9udFBhdGhzLnB1c2godGhpcy5fY2FsY1JlY3RDb21tYW5kcyhzdGFydFJlY3RQb2ludHMpKTtcclxuXHJcbiAgICBzdGFydFBvaW50ID0gW3N0YXJ0UG9zaXRpb25bMF0sIHN0YXJ0UG9zaXRpb25bMV0gKyByZWN0SGVpZ2h0IC0gdGhpcy5fc3ByaW5nV2lkdGhdO1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDQtdC8INCy0LXRgNGF0L3RjtGOINGH0LXRgtCy0LXRgNGC0LjQvdC60YMg0LLQuNGC0LrQsFxyXG4gICAgY29uc3Qgc3RhcnRDdXJ2ZVBvaW50cyA9IHt9O1xyXG4gICAgc3RhcnRDdXJ2ZVBvaW50cy5zdGFydFBvaW50ID0gWy4uLnN0YXJ0UG9pbnRdO1xyXG4gICAgc3RhcnRDdXJ2ZVBvaW50cy5lbmRQb2ludCA9IFtzdGFydFBvaW50WzBdIC0geFNoaWZ0IC8gMiwgc3RhcnRQb2ludFsxXSArIGhhbGZQZXJpb2QgLyAyXTtcclxuICAgIHN0YXJ0Q3VydmVQb2ludHMuY29udHJvbFBvaW50MSA9IHN0YXJ0Q3VydmVQb2ludHMuc3RhcnRQb2ludDtcclxuICAgIHN0YXJ0Q3VydmVQb2ludHMuY29udHJvbFBvaW50MiA9IFtzdGFydEN1cnZlUG9pbnRzLmVuZFBvaW50WzBdLCBzdGFydEN1cnZlUG9pbnRzLmVuZFBvaW50WzFdIC0gSyAqIGhhbGZQZXJpb2RdO1xyXG4gICAgZnJvbnRQYXRocy5wdXNoKHRoaXMuX2NhbGNDdXJ2ZUNvbW1hbmRzKHN0YXJ0Q3VydmVQb2ludHMpKTtcclxuXHJcbiAgICBzdGFydFBvaW50ID0gc3RhcnRDdXJ2ZVBvaW50cy5lbmRQb2ludDtcclxuXHJcbiAgICAvLyDRgdC+0LfQtNCw0LXQvCDQv9C+0LvRg9Cy0LjRgtC60Lgg0L/RgNGD0LbQuNC90YtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMiAqIGNvaWxzIC0gMTsgKytpKSB7XHJcbiAgICAgIGNvbnN0IGRpciA9IGkgJSAyID8gLTEgOiAxO1xyXG5cclxuICAgICAgY29uc3QgcGF0aFBvaW50cyA9IHt9O1xyXG4gICAgICBwYXRoUG9pbnRzLnN0YXJ0UG9pbnQgPSBbLi4uc3RhcnRQb2ludF07XHJcbiAgICAgIHBhdGhQb2ludHMuZW5kUG9pbnQgPSBbc3RhcnRQb2ludFswXSArIGRpciAqIHhTaGlmdCwgc3RhcnRQb2ludFsxXSArIGhhbGZQZXJpb2RdO1xyXG4gICAgICBwYXRoUG9pbnRzLmNvbnRyb2xQb2ludDEgPSBbc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSArIEsgKiBoYWxmUGVyaW9kXTtcclxuICAgICAgcGF0aFBvaW50cy5jb250cm9sUG9pbnQyID0gW3BhdGhQb2ludHMuZW5kUG9pbnRbMF0sIHBhdGhQb2ludHMuZW5kUG9pbnRbMV0gLSBLICogaGFsZlBlcmlvZF07XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gdGhpcy5fY2FsY0N1cnZlQ29tbWFuZHMocGF0aFBvaW50cyk7XHJcbiAgICAgIGlmIChkaXIgPCAwKSBmcm9udFBhdGhzLnB1c2goZGF0YSk7XHJcbiAgICAgIGVsc2UgYmFja1BhdGhzLnB1c2goZGF0YSk7XHJcblxyXG4gICAgICBzdGFydFBvaW50ID0gcGF0aFBvaW50cy5lbmRQb2ludDtcclxuICAgIH1cclxuXHJcbiAgICAvLyDQodC+0LfQtNCw0LXQvCDQvdC40LbQvdGO0Y4g0YfQtdGC0LLQtdGA0YLQuNC90LrRgyDQstC40YLQutCwXHJcbiAgICBjb25zdCBlbmRDdXJ2ZVBvaW50cyA9IHt9O1xyXG4gICAgZW5kQ3VydmVQb2ludHMuc3RhcnRQb2ludCA9IFsuLi5zdGFydFBvaW50XTtcclxuICAgIGVuZEN1cnZlUG9pbnRzLmVuZFBvaW50ID0gW3N0YXJ0UG9pbnRbMF0gLSB4U2hpZnQgLyAyLCBzdGFydFBvaW50WzFdICsgaGFsZlBlcmlvZCAvIDJdO1xyXG4gICAgZW5kQ3VydmVQb2ludHMuY29udHJvbFBvaW50MSA9IFtzdGFydFBvaW50WzBdLCBzdGFydFBvaW50WzFdICsgSyAqIGhhbGZQZXJpb2RdO1xyXG4gICAgZW5kQ3VydmVQb2ludHMuY29udHJvbFBvaW50MiA9IGVuZEN1cnZlUG9pbnRzLmVuZFBvaW50O1xyXG4gICAgZnJvbnRQYXRocy5wdXNoKHRoaXMuX2NhbGNDdXJ2ZUNvbW1hbmRzKGVuZEN1cnZlUG9pbnRzKSk7XHJcblxyXG4gICAgc3RhcnRQb2ludCA9IGVuZEN1cnZlUG9pbnRzLmVuZFBvaW50O1xyXG5cclxuICAgIC8vINGB0L7Qt9C00LDQtdC8INC90LjQttC90LjQuSDRgdGC0LXRgNC20LXQvdGMXHJcbiAgICBjb25zdCBlbmRSZWN0UG9pbnRzID0geyBzdGFydFBvaW50OiBbLi4uc3RhcnRQb2ludF0sIGVuZFBvaW50OiBbc3RhcnRQb2ludFswXSwgc3RhcnRQb2ludFsxXSArIHJlY3RIZWlnaHRdIH07XHJcbiAgICBmcm9udFBhdGhzLnB1c2godGhpcy5fY2FsY1JlY3RDb21tYW5kcyhlbmRSZWN0UG9pbnRzKSk7XHJcblxyXG4gICAgLy8g0LTQu9GPINC60L7RgNGA0LXQutGC0L3QvtCz0L4g0L/QvtGA0Y/QtNC60LAg0L7RgtCx0YDQsNC20LXQvdC40Y8g0L/Rg9GC0LXQuVxyXG4gICAgLy8g0L/QtdGA0LLRi9C80Lgg0LIgZG9tINC/0L7QudC00YPRgiDQvtGC0LTQsNC70LXQvdC90YvQtSDRh9Cw0YHRgtC4INCy0LjRgtC60L7QsiDQv9GA0YPQttC40L3Ri1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgLi4uYmFja1BhdGhzLm1hcCgoY29tbWFuZHMpID0+ICh7XHJcbiAgICAgICAgdHlwZTogJ2JhY2snLFxyXG4gICAgICAgIGNvbW1hbmRzLFxyXG4gICAgICB9KSksXHJcbiAgICAgIC4uLmZyb250UGF0aHMubWFwKChjb21tYW5kcykgPT4gKHtcclxuICAgICAgICB0eXBlOiAnZnJvbnQnLFxyXG4gICAgICAgIGNvbW1hbmRzLFxyXG4gICAgICB9KSksXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLy8g0YHQvtC30LTQsNC10YIg0L/RgNGP0LzQvtGD0LPQvtC70YzQvdC40Log0LLQtNC+0LvRjCDQv9GA0Y/QvNC+0Lkg0YEg0YjQuNGA0LjQvdC+0Lkgc3ByaW5nV2lkdGggLyAyXHJcbiAgX2NhbGNSZWN0Q29tbWFuZHMoeyBzdGFydFBvaW50LCBlbmRQb2ludCB9KSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IHRoaXMuX3NwcmluZ1dpZHRoIC8gNDtcclxuICAgIHJldHVybiBbXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTScsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSArIHdpZHRoLFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTCcsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSAtIHdpZHRoLFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTCcsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSAtIHdpZHRoLFxyXG4gICAgICAgIHk6IGVuZFBvaW50WzFdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgY29tbWFuZDogJ0wnLFxyXG4gICAgICAgIHg6IHN0YXJ0UG9pbnRbMF0gKyB3aWR0aCxcclxuICAgICAgICB5OiBlbmRQb2ludFsxXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbW1hbmQ6ICdaJyxcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgfVxyXG5cclxuICAvLyDQvNC10YLQvtC0INC90LAg0LLRhdC+0LQg0L/RgNC40L3QuNC80LDQtdGCINC60L7QvdGC0YDQvtC70YzQvdGL0LUg0YLQvtGH0LrQuCDQutGD0LHQuNGH0LXRgdC60L7QuSDQutGA0LjQstC+0Lkg0LHQtdC30YzQtVxyXG4gIC8vINGB0L7Qt9C00LDQtdGCINGC0LDQutGD0Y4g0LbQtSDQutGA0LjQstGD0Y4g0L3QuNC20LUsINGB0L7QtdC00LjQvdGP0LXRgiDRjdGC0Lgg0LrRgNC40LLRi9C1INC/0YDRj9C80YvQvNC4XHJcbiAgLy8g0Lgg0LLQvtC30LLRgNCw0YnQsNC10YIg0LTQsNC90L3Ri9C1INC/0L7Qu9GD0YfQuNCy0YjQtdCz0L7RgdGPINC/0YPRgtC4INCyINCy0LjQtNC1INC80LDRgdGB0LjQstCwINC60L7QvNC80LDQvdC0XHJcbiAgX2NhbGNDdXJ2ZUNvbW1hbmRzKHsgc3RhcnRQb2ludCwgZW5kUG9pbnQsIGNvbnRyb2xQb2ludDEsIGNvbnRyb2xQb2ludDIgfSkge1xyXG4gICAgY29uc3QgeyBfc3ByaW5nV2lkdGg6IHNwcmluZ1dpZHRoIH0gPSB0aGlzO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAge1xyXG4gICAgICAgIGNvbW1hbmQ6ICdNJyxcclxuICAgICAgICB4OiBzdGFydFBvaW50WzBdLFxyXG4gICAgICAgIHk6IHN0YXJ0UG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnQycsXHJcbiAgICAgICAgeDE6IGNvbnRyb2xQb2ludDFbMF0sXHJcbiAgICAgICAgeTE6IGNvbnRyb2xQb2ludDFbMV0sXHJcbiAgICAgICAgeDI6IGNvbnRyb2xQb2ludDJbMF0sXHJcbiAgICAgICAgeTI6IGNvbnRyb2xQb2ludDJbMV0sXHJcbiAgICAgICAgeDogZW5kUG9pbnRbMF0sXHJcbiAgICAgICAgeTogZW5kUG9pbnRbMV0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnTCcsXHJcbiAgICAgICAgeDogZW5kUG9pbnRbMF0sXHJcbiAgICAgICAgeTogZW5kUG9pbnRbMV0gKyBzcHJpbmdXaWR0aCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGNvbW1hbmQ6ICdDJyxcclxuICAgICAgICB4MTogY29udHJvbFBvaW50MlswXSxcclxuICAgICAgICB5MTogY29udHJvbFBvaW50MlsxXSArIHNwcmluZ1dpZHRoLFxyXG4gICAgICAgIHgyOiBjb250cm9sUG9pbnQxWzBdLFxyXG4gICAgICAgIHkyOiBjb250cm9sUG9pbnQxWzFdICsgc3ByaW5nV2lkdGgsXHJcbiAgICAgICAgeDogc3RhcnRQb2ludFswXSxcclxuICAgICAgICB5OiBzdGFydFBvaW50WzFdICsgc3ByaW5nV2lkdGgsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBjb21tYW5kOiAnWicsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbiAgLy8g0L3QsCDQstGF0L7QtCDQv9GA0LjQvdC40LzQsNC10YIg0LzQsNGB0YHQuNCyINC60L7QvNC80LDQvdC0INC4INCy0L7Qt9Cy0YDQsNGJ0LDQtdGCINGB0YLRgNC+0LrRg1xyXG4gIF9yZW5kZXJQYXRoRGF0YShzZWdtZW50cykge1xyXG4gICAgcmV0dXJuIHNlZ21lbnRzXHJcbiAgICAgIC5tYXAoKHNlZykgPT4ge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBzZWcuY29tbWFuZDtcclxuICAgICAgICBpZiAoc2VnLngxICE9PSB1bmRlZmluZWQgJiYgc2VnLnkxICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBgICR7c2VnLngxfSAke3NlZy55MX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VnLngyICE9PSB1bmRlZmluZWQgJiYgc2VnLnkyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJlc3VsdCArPSBgICR7c2VnLngyfSAke3NlZy55Mn1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VnLnggIT09IHVuZGVmaW5lZCAmJiBzZWcueSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICByZXN1bHQgKz0gYCAke3NlZy54fSAke3NlZy55fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcgJyk7XHJcbiAgfVxyXG5cclxuICAvLyDQstC+0LfQstGA0LDRidCw0LXRgiBwYXRoINGN0LvQtdC80LXQvdGCXHJcbiAgX2NyZWF0ZVBhdGgodHlwZSwgZCkge1xyXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAncGF0aCcpO1xyXG4gICAgcGF0aC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuX2NsYXNzTmFtZX1fX3BhdGhgKTtcclxuICAgIHBhdGguY2xhc3NMaXN0LmFkZChgJHt0aGlzLl9jbGFzc05hbWV9X19wYXRoXyR7dHlwZX1gKTtcclxuICAgIHBhdGguc2V0QXR0cmlidXRlTlMobnVsbCwgJ2QnLCBkKTtcclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxufVxyXG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpICYmIGl0ICE9PSBudWxsKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3Qgc2V0IFwiICsgU3RyaW5nKGl0KSArICcgYXMgYSBwcm90b3R5cGUnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG52YXIgVU5TQ09QQUJMRVMgPSB3ZWxsS25vd25TeW1ib2woJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90b3R5cGUgPSBBcnJheS5wcm90b3R5cGU7XG5cbi8vIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUtQEB1bnNjb3BhYmxlc1xuaWYgKEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHtcbiAgZGVmaW5lUHJvcGVydHlNb2R1bGUuZihBcnJheVByb3RvdHlwZSwgVU5TQ09QQUJMRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgdmFsdWU6IGNyZWF0ZShudWxsKVxuICB9KTtcbn1cblxuLy8gYWRkIGEga2V5IHRvIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG90eXBlW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnsgaW5kZXhPZiwgaW5jbHVkZXMgfWAgbWV0aG9kcyBpbXBsZW1lbnRhdGlvblxudmFyIGNyZWF0ZU1ldGhvZCA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICAgIGlmICgoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykgJiYgT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgLy8gYEFycmF5LnByb3RvdHlwZS5pbmNsdWRlc2AgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBjcmVhdGVNZXRob2QodHJ1ZSksXG4gIC8vIGBBcnJheS5wcm90b3R5cGUuaW5kZXhPZmAgbWV0aG9kXG4gIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmluZGV4b2ZcbiAgaW5kZXhPZjogY3JlYXRlTWV0aG9kKGZhbHNlKVxufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgb3duS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vd24ta2V5cycpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuICB2YXIga2V5cyA9IG93bktleXMoc291cmNlKTtcbiAgdmFyIGRlZmluZVByb3BlcnR5ID0gZGVmaW5lUHJvcGVydHlNb2R1bGUuZjtcbiAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICBpZiAoIWhhcyh0YXJnZXQsIGtleSkpIGRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgfVxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEYoKSB7IC8qIGVtcHR5ICovIH1cbiAgRi5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiBPYmplY3QuZ2V0UHJvdG90eXBlT2YobmV3IEYoKSkgIT09IEYucHJvdG90eXBlO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWNyZWF0ZScpO1xudmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHktZGVzY3JpcHRvcicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEl0ZXJhdG9yQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIEl0ZXJhdG9yQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JDb25zdHJ1Y3RvciwgVE9fU1RSSU5HX1RBRywgZmFsc2UsIHRydWUpO1xuICBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICByZXR1cm4gSXRlcmF0b3JDb25zdHJ1Y3Rvcjtcbn07XG4iLCJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBkZWZpbmVQcm9wZXJ0eU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5Jyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gREVTQ1JJUFRPUlMgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkZWZpbmVQcm9wZXJ0eU1vZHVsZS5mKG9iamVjdCwga2V5LCBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNyZWF0ZUl0ZXJhdG9yQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLWl0ZXJhdG9yLWNvbnN0cnVjdG9yJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3Qtc2V0LXByb3RvdHlwZS1vZicpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZGVmaW5lJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgSVNfUFVSRSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1wdXJlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2l0ZXJhdG9ycycpO1xudmFyIEl0ZXJhdG9yc0NvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzLWNvcmUnKTtcblxudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gSXRlcmF0b3JzQ29yZS5JdGVyYXRvclByb3RvdHlwZTtcbnZhciBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gSXRlcmF0b3JzQ29yZS5CVUdHWV9TQUZBUklfSVRFUkFUT1JTO1xudmFyIElURVJBVE9SID0gd2VsbEtub3duU3ltYm9sKCdpdGVyYXRvcicpO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG52YXIgRU5UUklFUyA9ICdlbnRyaWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJdGVyYWJsZSwgTkFNRSwgSXRlcmF0b3JDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgY3JlYXRlSXRlcmF0b3JDb25zdHJ1Y3RvcihJdGVyYXRvckNvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcblxuICB2YXIgZ2V0SXRlcmF0aW9uTWV0aG9kID0gZnVuY3Rpb24gKEtJTkQpIHtcbiAgICBpZiAoS0lORCA9PT0gREVGQVVMVCAmJiBkZWZhdWx0SXRlcmF0b3IpIHJldHVybiBkZWZhdWx0SXRlcmF0b3I7XG4gICAgaWYgKCFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIEtJTkQgaW4gSXRlcmFibGVQcm90b3R5cGUpIHJldHVybiBJdGVyYWJsZVByb3RvdHlwZVtLSU5EXTtcbiAgICBzd2l0Y2ggKEtJTkQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgSXRlcmF0b3JDb25zdHJ1Y3Rvcih0aGlzLCBLSU5EKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgICBjYXNlIEVOVFJJRVM6IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcywgS0lORCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IEl0ZXJhdG9yQ29uc3RydWN0b3IodGhpcyk7IH07XG4gIH07XG5cbiAgdmFyIFRPX1NUUklOR19UQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgPSBmYWxzZTtcbiAgdmFyIEl0ZXJhYmxlUHJvdG90eXBlID0gSXRlcmFibGUucHJvdG90eXBlO1xuICB2YXIgbmF0aXZlSXRlcmF0b3IgPSBJdGVyYWJsZVByb3RvdHlwZVtJVEVSQVRPUl1cbiAgICB8fCBJdGVyYWJsZVByb3RvdHlwZVsnQEBpdGVyYXRvciddXG4gICAgfHwgREVGQVVMVCAmJiBJdGVyYWJsZVByb3RvdHlwZVtERUZBVUxUXTtcbiAgdmFyIGRlZmF1bHRJdGVyYXRvciA9ICFCVUdHWV9TQUZBUklfSVRFUkFUT1JTICYmIG5hdGl2ZUl0ZXJhdG9yIHx8IGdldEl0ZXJhdGlvbk1ldGhvZChERUZBVUxUKTtcbiAgdmFyIGFueU5hdGl2ZUl0ZXJhdG9yID0gTkFNRSA9PSAnQXJyYXknID8gSXRlcmFibGVQcm90b3R5cGUuZW50cmllcyB8fCBuYXRpdmVJdGVyYXRvciA6IG5hdGl2ZUl0ZXJhdG9yO1xuICB2YXIgQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBtZXRob2RzLCBLRVk7XG5cbiAgLy8gZml4IG5hdGl2ZVxuICBpZiAoYW55TmF0aXZlSXRlcmF0b3IpIHtcbiAgICBDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZihhbnlOYXRpdmVJdGVyYXRvci5jYWxsKG5ldyBJdGVyYWJsZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICBpZiAoIUlTX1BVUkUgJiYgZ2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlKSAhPT0gSXRlcmF0b3JQcm90b3R5cGUpIHtcbiAgICAgICAgaWYgKHNldFByb3RvdHlwZU9mKSB7XG4gICAgICAgICAgc2V0UHJvdG90eXBlT2YoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBJdGVyYXRvclByb3RvdHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIEN1cnJlbnRJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDdXJyZW50SXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoQ3VycmVudEl0ZXJhdG9yUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCB0cnVlLCB0cnVlKTtcbiAgICAgIGlmIChJU19QVVJFKSBJdGVyYXRvcnNbVE9fU1RSSU5HX1RBR10gPSByZXR1cm5UaGlzO1xuICAgIH1cbiAgfVxuXG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRkFVTFQgPT0gVkFMVUVTICYmIG5hdGl2ZUl0ZXJhdG9yICYmIG5hdGl2ZUl0ZXJhdG9yLm5hbWUgIT09IFZBTFVFUykge1xuICAgIElOQ09SUkVDVF9WQUxVRVNfTkFNRSA9IHRydWU7XG4gICAgZGVmYXVsdEl0ZXJhdG9yID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmF0aXZlSXRlcmF0b3IuY2FsbCh0aGlzKTsgfTtcbiAgfVxuXG4gIC8vIGRlZmluZSBpdGVyYXRvclxuICBpZiAoKCFJU19QVVJFIHx8IEZPUkNFRCkgJiYgSXRlcmFibGVQcm90b3R5cGVbSVRFUkFUT1JdICE9PSBkZWZhdWx0SXRlcmF0b3IpIHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoSXRlcmFibGVQcm90b3R5cGUsIElURVJBVE9SLCBkZWZhdWx0SXRlcmF0b3IpO1xuICB9XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IGRlZmF1bHRJdGVyYXRvcjtcblxuICAvLyBleHBvcnQgYWRkaXRpb25hbCBtZXRob2RzXG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogZ2V0SXRlcmF0aW9uTWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyBkZWZhdWx0SXRlcmF0b3IgOiBnZXRJdGVyYXRpb25NZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiBnZXRJdGVyYXRpb25NZXRob2QoRU5UUklFUylcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoS0VZIGluIG1ldGhvZHMpIHtcbiAgICAgIGlmIChCVUdHWV9TQUZBUklfSVRFUkFUT1JTIHx8IElOQ09SUkVDVF9WQUxVRVNfTkFNRSB8fCAhKEtFWSBpbiBJdGVyYWJsZVByb3RvdHlwZSkpIHtcbiAgICAgICAgcmVkZWZpbmUoSXRlcmFibGVQcm90b3R5cGUsIEtFWSwgbWV0aG9kc1tLRVldKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgJCh7IHRhcmdldDogTkFNRSwgcHJvdG86IHRydWUsIGZvcmNlZDogQlVHR1lfU0FGQVJJX0lURVJBVE9SUyB8fCBJTkNPUlJFQ1RfVkFMVUVTX05BTUUgfSwgbWV0aG9kcyk7XG4gIH1cblxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG52YXIgZG9jdW1lbnQgPSBnbG9iYWwuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBFWElTVFMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBFWElTVFMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIGl0ZXJhYmxlIERPTSBjb2xsZWN0aW9uc1xuLy8gZmxhZyAtIGBpdGVyYWJsZWAgaW50ZXJmYWNlIC0gJ2VudHJpZXMnLCAna2V5cycsICd2YWx1ZXMnLCAnZm9yRWFjaCcgbWV0aG9kc1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENTU1J1bGVMaXN0OiAwLFxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiAwLFxuICBDU1NWYWx1ZUxpc3Q6IDAsXG4gIENsaWVudFJlY3RMaXN0OiAwLFxuICBET01SZWN0TGlzdDogMCxcbiAgRE9NU3RyaW5nTGlzdDogMCxcbiAgRE9NVG9rZW5MaXN0OiAxLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogMCxcbiAgRmlsZUxpc3Q6IDAsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiAwLFxuICBIVE1MQ29sbGVjdGlvbjogMCxcbiAgSFRNTEZvcm1FbGVtZW50OiAwLFxuICBIVE1MU2VsZWN0RWxlbWVudDogMCxcbiAgTWVkaWFMaXN0OiAwLFxuICBNaW1lVHlwZUFycmF5OiAwLFxuICBOYW1lZE5vZGVNYXA6IDAsXG4gIE5vZGVMaXN0OiAxLFxuICBQYWludFJlcXVlc3RMaXN0OiAwLFxuICBQbHVnaW46IDAsXG4gIFBsdWdpbkFycmF5OiAwLFxuICBTVkdMZW5ndGhMaXN0OiAwLFxuICBTVkdOdW1iZXJMaXN0OiAwLFxuICBTVkdQYXRoU2VnTGlzdDogMCxcbiAgU1ZHUG9pbnRMaXN0OiAwLFxuICBTVkdTdHJpbmdMaXN0OiAwLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiAwLFxuICBTb3VyY2VCdWZmZXJMaXN0OiAwLFxuICBTdHlsZVNoZWV0TGlzdDogMCxcbiAgVGV4dFRyYWNrQ3VlTGlzdDogMCxcbiAgVGV4dFRyYWNrTGlzdDogMCxcbiAgVG91Y2hMaXN0OiAwXG59O1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY2xhc3NvZi1yYXcnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3NvZihnbG9iYWwucHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuIiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciB1c2VyQWdlbnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW5naW5lLXVzZXItYWdlbnQnKTtcblxudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciB2ZXJzaW9ucyA9IHByb2Nlc3MgJiYgcHJvY2Vzcy52ZXJzaW9ucztcbnZhciB2OCA9IHZlcnNpb25zICYmIHZlcnNpb25zLnY4O1xudmFyIG1hdGNoLCB2ZXJzaW9uO1xuXG5pZiAodjgpIHtcbiAgbWF0Y2ggPSB2OC5zcGxpdCgnLicpO1xuICB2ZXJzaW9uID0gbWF0Y2hbMF0gKyBtYXRjaFsxXTtcbn0gZWxzZSBpZiAodXNlckFnZW50KSB7XG4gIG1hdGNoID0gdXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvKFxcZCspLyk7XG4gIGlmICghbWF0Y2ggfHwgbWF0Y2hbMV0gPj0gNzQpIHtcbiAgICBtYXRjaCA9IHVzZXJBZ2VudC5tYXRjaCgvQ2hyb21lXFwvKFxcZCspLyk7XG4gICAgaWYgKG1hdGNoKSB2ZXJzaW9uID0gbWF0Y2hbMV07XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSB2ZXJzaW9uICYmICt2ZXJzaW9uO1xuIiwiLy8gSUU4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IFtcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2hhc093blByb3BlcnR5JyxcbiAgJ2lzUHJvdG90eXBlT2YnLFxuICAncHJvcGVydHlJc0VudW1lcmFibGUnLFxuICAndG9Mb2NhbGVTdHJpbmcnLFxuICAndG9TdHJpbmcnLFxuICAndmFsdWVPZidcbl07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVkZWZpbmUnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGNvcHlDb25zdHJ1Y3RvclByb3BlcnRpZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29weS1jb25zdHJ1Y3Rvci1wcm9wZXJ0aWVzJyk7XG52YXIgaXNGb3JjZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtZm9yY2VkJyk7XG5cbi8qXG4gIG9wdGlvbnMudGFyZ2V0ICAgICAgLSBuYW1lIG9mIHRoZSB0YXJnZXQgb2JqZWN0XG4gIG9wdGlvbnMuZ2xvYmFsICAgICAgLSB0YXJnZXQgaXMgdGhlIGdsb2JhbCBvYmplY3RcbiAgb3B0aW9ucy5zdGF0ICAgICAgICAtIGV4cG9ydCBhcyBzdGF0aWMgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5wcm90byAgICAgICAtIGV4cG9ydCBhcyBwcm90b3R5cGUgbWV0aG9kcyBvZiB0YXJnZXRcbiAgb3B0aW9ucy5yZWFsICAgICAgICAtIHJlYWwgcHJvdG90eXBlIG1ldGhvZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMuZm9yY2VkICAgICAgLSBleHBvcnQgZXZlbiBpZiB0aGUgbmF0aXZlIGZlYXR1cmUgaXMgYXZhaWxhYmxlXG4gIG9wdGlvbnMuYmluZCAgICAgICAgLSBiaW5kIG1ldGhvZHMgdG8gdGhlIHRhcmdldCwgcmVxdWlyZWQgZm9yIHRoZSBgcHVyZWAgdmVyc2lvblxuICBvcHRpb25zLndyYXAgICAgICAgIC0gd3JhcCBjb25zdHJ1Y3RvcnMgdG8gcHJldmVudGluZyBnbG9iYWwgcG9sbHV0aW9uLCByZXF1aXJlZCBmb3IgdGhlIGBwdXJlYCB2ZXJzaW9uXG4gIG9wdGlvbnMudW5zYWZlICAgICAgLSB1c2UgdGhlIHNpbXBsZSBhc3NpZ25tZW50IG9mIHByb3BlcnR5IGluc3RlYWQgb2YgZGVsZXRlICsgZGVmaW5lUHJvcGVydHlcbiAgb3B0aW9ucy5zaGFtICAgICAgICAtIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgb3B0aW9ucy5lbnVtZXJhYmxlICAtIGV4cG9ydCBhcyBlbnVtZXJhYmxlIHByb3BlcnR5XG4gIG9wdGlvbnMubm9UYXJnZXRHZXQgLSBwcmV2ZW50IGNhbGxpbmcgYSBnZXR0ZXIgb24gdGFyZ2V0XG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3B0aW9ucywgc291cmNlKSB7XG4gIHZhciBUQVJHRVQgPSBvcHRpb25zLnRhcmdldDtcbiAgdmFyIEdMT0JBTCA9IG9wdGlvbnMuZ2xvYmFsO1xuICB2YXIgU1RBVElDID0gb3B0aW9ucy5zdGF0O1xuICB2YXIgRk9SQ0VELCB0YXJnZXQsIGtleSwgdGFyZ2V0UHJvcGVydHksIHNvdXJjZVByb3BlcnR5LCBkZXNjcmlwdG9yO1xuICBpZiAoR0xPQkFMKSB7XG4gICAgdGFyZ2V0ID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKFNUQVRJQykge1xuICAgIHRhcmdldCA9IGdsb2JhbFtUQVJHRVRdIHx8IHNldEdsb2JhbChUQVJHRVQsIHt9KTtcbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQgPSAoZ2xvYmFsW1RBUkdFVF0gfHwge30pLnByb3RvdHlwZTtcbiAgfVxuICBpZiAodGFyZ2V0KSBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICBzb3VyY2VQcm9wZXJ0eSA9IHNvdXJjZVtrZXldO1xuICAgIGlmIChvcHRpb25zLm5vVGFyZ2V0R2V0KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KTtcbiAgICAgIHRhcmdldFByb3BlcnR5ID0gZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIH0gZWxzZSB0YXJnZXRQcm9wZXJ0eSA9IHRhcmdldFtrZXldO1xuICAgIEZPUkNFRCA9IGlzRm9yY2VkKEdMT0JBTCA/IGtleSA6IFRBUkdFVCArIChTVEFUSUMgPyAnLicgOiAnIycpICsga2V5LCBvcHRpb25zLmZvcmNlZCk7XG4gICAgLy8gY29udGFpbmVkIGluIHRhcmdldFxuICAgIGlmICghRk9SQ0VEICYmIHRhcmdldFByb3BlcnR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICh0eXBlb2Ygc291cmNlUHJvcGVydHkgPT09IHR5cGVvZiB0YXJnZXRQcm9wZXJ0eSkgY29udGludWU7XG4gICAgICBjb3B5Q29uc3RydWN0b3JQcm9wZXJ0aWVzKHNvdXJjZVByb3BlcnR5LCB0YXJnZXRQcm9wZXJ0eSk7XG4gICAgfVxuICAgIC8vIGFkZCBhIGZsYWcgdG8gbm90IGNvbXBsZXRlbHkgZnVsbCBwb2x5ZmlsbHNcbiAgICBpZiAob3B0aW9ucy5zaGFtIHx8ICh0YXJnZXRQcm9wZXJ0eSAmJiB0YXJnZXRQcm9wZXJ0eS5zaGFtKSkge1xuICAgICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KHNvdXJjZVByb3BlcnR5LCAnc2hhbScsIHRydWUpO1xuICAgIH1cbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNvdXJjZVByb3BlcnR5LCBvcHRpb25zKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgcGF0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9wYXRoJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG52YXIgYUZ1bmN0aW9uID0gZnVuY3Rpb24gKHZhcmlhYmxlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFyaWFibGUgPT0gJ2Z1bmN0aW9uJyA/IHZhcmlhYmxlIDogdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZXNwYWNlLCBtZXRob2QpIHtcbiAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPCAyID8gYUZ1bmN0aW9uKHBhdGhbbmFtZXNwYWNlXSkgfHwgYUZ1bmN0aW9uKGdsb2JhbFtuYW1lc3BhY2VdKVxuICAgIDogcGF0aFtuYW1lc3BhY2VdICYmIHBhdGhbbmFtZXNwYWNlXVttZXRob2RdIHx8IGdsb2JhbFtuYW1lc3BhY2VdICYmIGdsb2JhbFtuYW1lc3BhY2VdW21ldGhvZF07XG59O1xuIiwidmFyIGNoZWNrID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAmJiBpdC5NYXRoID09IE1hdGggJiYgaXQ7XG59O1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxubW9kdWxlLmV4cG9ydHMgPVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tZ2xvYmFsLXRoaXMgLS0gc2FmZVxuICBjaGVjayh0eXBlb2YgZ2xvYmFsVGhpcyA9PSAnb2JqZWN0JyAmJiBnbG9iYWxUaGlzKSB8fFxuICBjaGVjayh0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdykgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtZ2xvYmFscyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBzZWxmID09ICdvYmplY3QnICYmIHNlbGYpIHx8XG4gIGNoZWNrKHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsKSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmMgLS0gZmFsbGJhY2tcbiAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pKCkgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdkb2N1bWVudCcsICdkb2N1bWVudEVsZW1lbnQnKTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xuXG4vLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFERVNDUklQVE9SUyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHJlcXVpZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjcmVhdGVFbGVtZW50KCdkaXYnKSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9XG4gIH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG52YXIgc3BsaXQgPSAnJy5zcGxpdDtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3Ncbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyB0aHJvd3MgYW4gZXJyb3IgaW4gcmhpbm8sIHNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9yaGluby9pc3N1ZXMvMzQ2XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgLS0gc2FmZVxuICByZXR1cm4gIU9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApO1xufSkgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNsYXNzb2YoaXQpID09ICdTdHJpbmcnID8gc3BsaXQuY2FsbChpdCwgJycpIDogT2JqZWN0KGl0KTtcbn0gOiBPYmplY3Q7XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkLXN0b3JlJyk7XG5cbnZhciBmdW5jdGlvblRvU3RyaW5nID0gRnVuY3Rpb24udG9TdHJpbmc7XG5cbi8vIHRoaXMgaGVscGVyIGJyb2tlbiBpbiBgMy40LjEtMy40LjRgLCBzbyB3ZSBjYW4ndCB1c2UgYHNoYXJlZGAgaGVscGVyXG5pZiAodHlwZW9mIHN0b3JlLmluc3BlY3RTb3VyY2UgIT0gJ2Z1bmN0aW9uJykge1xuICBzdG9yZS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChpdCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RvcmUuaW5zcGVjdFNvdXJjZTtcbiIsInZhciBOQVRJVkVfV0VBS19NQVAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvbmF0aXZlLXdlYWstbWFwJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcbnZhciBvYmplY3RIYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1zdG9yZScpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xuXG52YXIgV2Vha01hcCA9IGdsb2JhbC5XZWFrTWFwO1xudmFyIHNldCwgZ2V0LCBoYXM7XG5cbnZhciBlbmZvcmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBoYXMoaXQpID8gZ2V0KGl0KSA6IHNldChpdCwge30pO1xufTtcblxudmFyIGdldHRlckZvciA9IGZ1bmN0aW9uIChUWVBFKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoaXQpIHtcbiAgICB2YXIgc3RhdGU7XG4gICAgaWYgKCFpc09iamVjdChpdCkgfHwgKHN0YXRlID0gZ2V0KGl0KSkudHlwZSAhPT0gVFlQRSkge1xuICAgICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvbXBhdGlibGUgcmVjZWl2ZXIsICcgKyBUWVBFICsgJyByZXF1aXJlZCcpO1xuICAgIH0gcmV0dXJuIHN0YXRlO1xuICB9O1xufTtcblxuaWYgKE5BVElWRV9XRUFLX01BUCkge1xuICB2YXIgc3RvcmUgPSBzaGFyZWQuc3RhdGUgfHwgKHNoYXJlZC5zdGF0ZSA9IG5ldyBXZWFrTWFwKCkpO1xuICB2YXIgd21nZXQgPSBzdG9yZS5nZXQ7XG4gIHZhciB3bWhhcyA9IHN0b3JlLmhhcztcbiAgdmFyIHdtc2V0ID0gc3RvcmUuc2V0O1xuICBzZXQgPSBmdW5jdGlvbiAoaXQsIG1ldGFkYXRhKSB7XG4gICAgbWV0YWRhdGEuZmFjYWRlID0gaXQ7XG4gICAgd21zZXQuY2FsbChzdG9yZSwgaXQsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWdldC5jYWxsKHN0b3JlLCBpdCkgfHwge307XG4gIH07XG4gIGhhcyA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiB3bWhhcy5jYWxsKHN0b3JlLCBpdCk7XG4gIH07XG59IGVsc2Uge1xuICB2YXIgU1RBVEUgPSBzaGFyZWRLZXkoJ3N0YXRlJyk7XG4gIGhpZGRlbktleXNbU1RBVEVdID0gdHJ1ZTtcbiAgc2V0ID0gZnVuY3Rpb24gKGl0LCBtZXRhZGF0YSkge1xuICAgIG1ldGFkYXRhLmZhY2FkZSA9IGl0O1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShpdCwgU1RBVEUsIG1ldGFkYXRhKTtcbiAgICByZXR1cm4gbWV0YWRhdGE7XG4gIH07XG4gIGdldCA9IGZ1bmN0aW9uIChpdCkge1xuICAgIHJldHVybiBvYmplY3RIYXMoaXQsIFNUQVRFKSA/IGl0W1NUQVRFXSA6IHt9O1xuICB9O1xuICBoYXMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgICByZXR1cm4gb2JqZWN0SGFzKGl0LCBTVEFURSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldCxcbiAgZ2V0OiBnZXQsXG4gIGhhczogaGFzLFxuICBlbmZvcmNlOiBlbmZvcmNlLFxuICBnZXR0ZXJGb3I6IGdldHRlckZvclxufTtcbiIsInZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgcmVwbGFjZW1lbnQgPSAvI3xcXC5wcm90b3R5cGVcXC4vO1xuXG52YXIgaXNGb3JjZWQgPSBmdW5jdGlvbiAoZmVhdHVyZSwgZGV0ZWN0aW9uKSB7XG4gIHZhciB2YWx1ZSA9IGRhdGFbbm9ybWFsaXplKGZlYXR1cmUpXTtcbiAgcmV0dXJuIHZhbHVlID09IFBPTFlGSUxMID8gdHJ1ZVxuICAgIDogdmFsdWUgPT0gTkFUSVZFID8gZmFsc2VcbiAgICA6IHR5cGVvZiBkZXRlY3Rpb24gPT0gJ2Z1bmN0aW9uJyA/IGZhaWxzKGRldGVjdGlvbilcbiAgICA6ICEhZGV0ZWN0aW9uO1xufTtcblxudmFyIG5vcm1hbGl6ZSA9IGlzRm9yY2VkLm5vcm1hbGl6ZSA9IGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgcmV0dXJuIFN0cmluZyhzdHJpbmcpLnJlcGxhY2UocmVwbGFjZW1lbnQsICcuJykudG9Mb3dlckNhc2UoKTtcbn07XG5cbnZhciBkYXRhID0gaXNGb3JjZWQuZGF0YSA9IHt9O1xudmFyIE5BVElWRSA9IGlzRm9yY2VkLk5BVElWRSA9ICdOJztcbnZhciBQT0xZRklMTCA9IGlzRm9yY2VkLlBPTFlGSUxMID0gJ1AnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRm9yY2VkO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1wcm90b3R5cGUtb2YnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIElTX1BVUkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtcHVyZScpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1lfU0FGQVJJX0lURVJBVE9SUyA9IGZhbHNlO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbi8vIGAlSXRlcmF0b3JQcm90b3R5cGUlYCBvYmplY3Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtJWl0ZXJhdG9ycHJvdG90eXBlJS1vYmplY3RcbnZhciBJdGVyYXRvclByb3RvdHlwZSwgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlLCBhcnJheUl0ZXJhdG9yO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1hcnJheS1wcm90b3R5cGUta2V5cyAtLSBzYWZlICovXG5pZiAoW10ua2V5cykge1xuICBhcnJheUl0ZXJhdG9yID0gW10ua2V5cygpO1xuICAvLyBTYWZhcmkgOCBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgaWYgKCEoJ25leHQnIGluIGFycmF5SXRlcmF0b3IpKSBCVUdHWV9TQUZBUklfSVRFUkFUT1JTID0gdHJ1ZTtcbiAgZWxzZSB7XG4gICAgUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoZ2V0UHJvdG90eXBlT2YoYXJyYXlJdGVyYXRvcikpO1xuICAgIGlmIChQcm90b3R5cGVPZkFycmF5SXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpIEl0ZXJhdG9yUHJvdG90eXBlID0gUHJvdG90eXBlT2ZBcnJheUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG59XG5cbnZhciBORVdfSVRFUkFUT1JfUFJPVE9UWVBFID0gSXRlcmF0b3JQcm90b3R5cGUgPT0gdW5kZWZpbmVkIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgLy8gRkY0NC0gbGVnYWN5IGl0ZXJhdG9ycyBjYXNlXG4gIHJldHVybiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0uY2FsbCh0ZXN0KSAhPT0gdGVzdDtcbn0pO1xuXG5pZiAoTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbmlmICgoIUlTX1BVUkUgfHwgTkVXX0lURVJBVE9SX1BST1RPVFlQRSkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSB7XG4gIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgSXRlcmF0b3JQcm90b3R5cGU6IEl0ZXJhdG9yUHJvdG90eXBlLFxuICBCVUdHWV9TQUZBUklfSVRFUkFUT1JTOiBCVUdHWV9TQUZBUklfSVRFUkFUT1JTXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsInZhciBJU19OT0RFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2VuZ2luZS1pcy1ub2RlJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdjgtdmVyc2lvbicpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlzeW1ib2xzIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG5tb2R1bGUuZXhwb3J0cyA9ICEhT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tc3ltYm9sIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gIHJldHVybiAhU3ltYm9sLnNoYW0gJiZcbiAgICAvLyBDaHJvbWUgMzggU3ltYm9sIGhhcyBpbmNvcnJlY3QgdG9TdHJpbmcgY29udmVyc2lvblxuICAgIC8vIENocm9tZSAzOC00MCBzeW1ib2xzIGFyZSBub3QgaW5oZXJpdGVkIGZyb20gRE9NIGNvbGxlY3Rpb25zIHByb3RvdHlwZXMgdG8gaW5zdGFuY2VzXG4gICAgKElTX05PREUgPyBWOF9WRVJTSU9OID09PSAzOCA6IFY4X1ZFUlNJT04gPiAzNyAmJiBWOF9WRVJTSU9OIDwgNDEpO1xufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcblxudmFyIFdlYWtNYXAgPSBnbG9iYWwuV2Vha01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiAvbmF0aXZlIGNvZGUvLnRlc3QoaW5zcGVjdFNvdXJjZShXZWFrTWFwKSk7XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgZGVmaW5lUHJvcGVydGllcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnRpZXMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgaGlkZGVuS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oaWRkZW4ta2V5cycpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaHRtbCcpO1xudmFyIGRvY3VtZW50Q3JlYXRlRWxlbWVudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2N1bWVudC1jcmVhdGUtZWxlbWVudCcpO1xudmFyIHNoYXJlZEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQta2V5Jyk7XG5cbnZhciBHVCA9ICc+JztcbnZhciBMVCA9ICc8JztcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBTQ1JJUFQgPSAnc2NyaXB0JztcbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcblxudmFyIEVtcHR5Q29uc3RydWN0b3IgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cbnZhciBzY3JpcHRUYWcgPSBmdW5jdGlvbiAoY29udGVudCkge1xuICByZXR1cm4gTFQgKyBTQ1JJUFQgKyBHVCArIGNvbnRlbnQgKyBMVCArICcvJyArIFNDUklQVCArIEdUO1xufTtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIEFjdGl2ZVggT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYID0gZnVuY3Rpb24gKGFjdGl2ZVhEb2N1bWVudCkge1xuICBhY3RpdmVYRG9jdW1lbnQud3JpdGUoc2NyaXB0VGFnKCcnKSk7XG4gIGFjdGl2ZVhEb2N1bWVudC5jbG9zZSgpO1xuICB2YXIgdGVtcCA9IGFjdGl2ZVhEb2N1bWVudC5wYXJlbnRXaW5kb3cuT2JqZWN0O1xuICBhY3RpdmVYRG9jdW1lbnQgPSBudWxsOyAvLyBhdm9pZCBtZW1vcnkgbGVha1xuICByZXR1cm4gdGVtcDtcbn07XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICB2YXIgSlMgPSAnamF2YScgKyBTQ1JJUFQgKyAnOic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzQ3NVxuICBpZnJhbWUuc3JjID0gU3RyaW5nKEpTKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShzY3JpcHRUYWcoJ2RvY3VtZW50LkY9T2JqZWN0JykpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICByZXR1cm4gaWZyYW1lRG9jdW1lbnQuRjtcbn07XG5cbi8vIENoZWNrIGZvciBkb2N1bWVudC5kb21haW4gYW5kIGFjdGl2ZSB4IHN1cHBvcnRcbi8vIE5vIG5lZWQgdG8gdXNlIGFjdGl2ZSB4IGFwcHJvYWNoIHdoZW4gZG9jdW1lbnQuZG9tYWluIGlzIG5vdCBzZXRcbi8vIHNlZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0vaXNzdWVzLzE1MFxuLy8gdmFyaWF0aW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9raXRjYW1icmlkZ2UvZXM1LXNoaW0vY29tbWl0LzRmNzM4YWMwNjYzNDZcbi8vIGF2b2lkIElFIEdDIGJ1Z1xudmFyIGFjdGl2ZVhEb2N1bWVudDtcbnZhciBOdWxsUHJvdG9PYmplY3QgPSBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLyogZ2xvYmFsIEFjdGl2ZVhPYmplY3QgLS0gb2xkIElFICovXG4gICAgYWN0aXZlWERvY3VtZW50ID0gZG9jdW1lbnQuZG9tYWluICYmIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBpZ25vcmUgKi8gfVxuICBOdWxsUHJvdG9PYmplY3QgPSBhY3RpdmVYRG9jdW1lbnQgPyBOdWxsUHJvdG9PYmplY3RWaWFBY3RpdmVYKGFjdGl2ZVhEb2N1bWVudCkgOiBOdWxsUHJvdG9PYmplY3RWaWFJRnJhbWUoKTtcbiAgdmFyIGxlbmd0aCA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSBkZWxldGUgTnVsbFByb3RvT2JqZWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbbGVuZ3RoXV07XG4gIHJldHVybiBOdWxsUHJvdG9PYmplY3QoKTtcbn07XG5cbmhpZGRlbktleXNbSUVfUFJPVE9dID0gdHJ1ZTtcblxuLy8gYE9iamVjdC5jcmVhdGVgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuY3JlYXRlXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eUNvbnN0cnVjdG9yW1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHlDb25zdHJ1Y3RvcigpO1xuICAgIEVtcHR5Q29uc3RydWN0b3JbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gTnVsbFByb3RvT2JqZWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHlNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcblxuLy8gYE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnRpZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydGllcyAtLSBzYWZlXG5tb2R1bGUuZXhwb3J0cyA9IERFU0NSSVBUT1JTID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gb2JqZWN0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIga2V5O1xuICB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIGRlZmluZVByb3BlcnR5TW9kdWxlLmYoTywga2V5ID0ga2V5c1tpbmRleCsrXSwgUHJvcGVydGllc1trZXldKTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaWU4LWRvbS1kZWZpbmUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1wcmltaXRpdmUnKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSBzYWZlXG52YXIgJGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG4vLyBgT2JqZWN0LmRlZmluZVByb3BlcnR5YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmRlZmluZXByb3BlcnR5XG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRkZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlcnJvcikgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1wcm9wZXJ0eS1pcy1lbnVtZXJhYmxlJyk7XG52YXIgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tcHJpbWl0aXZlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG5leHBvcnRzLmYgPSBERVNDUklQVE9SUyA/ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JbmRleGVkT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoaGFzKE8sIFApKSByZXR1cm4gY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKCFwcm9wZXJ0eUlzRW51bWVyYWJsZU1vZHVsZS5mLmNhbGwoTywgUCksIE9bUF0pO1xufTtcbiIsInZhciBpbnRlcm5hbE9iamVjdEtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnVtLWJ1Zy1rZXlzJyk7XG5cbnZhciBoaWRkZW5LZXlzID0gZW51bUJ1Z0tleXMuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbi8vIGBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5nZXRvd25wcm9wZXJ0eW5hbWVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5bmFtZXMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgfHwgZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuIiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1nZXRvd25wcm9wZXJ0eXN5bWJvbHMgLS0gc2FmZVxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tb2JqZWN0Jyk7XG52YXIgc2hhcmVkS2V5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZC1rZXknKTtcbnZhciBDT1JSRUNUX1BST1RPVFlQRV9HRVRURVIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY29ycmVjdC1wcm90b3R5cGUtZ2V0dGVyJyk7XG5cbnZhciBJRV9QUk9UTyA9IHNoYXJlZEtleSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBgT2JqZWN0LmdldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldHByb3RvdHlwZW9mXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldHByb3RvdHlwZW9mIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gQ09SUkVDVF9QUk9UT1RZUEVfR0VUVEVSID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvdHlwZSA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciB0b0luZGV4ZWRPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW5kZXhlZC1vYmplY3QnKTtcbnZhciBpbmRleE9mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWluY2x1ZGVzJykuaW5kZXhPZjtcbnZhciBoaWRkZW5LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hpZGRlbi1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0luZGV4ZWRPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pICFoYXMoaGlkZGVuS2V5cywga2V5KSAmJiBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgaW50ZXJuYWxPYmplY3RLZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW51bS1idWcta2V5cycpO1xuXG4vLyBgT2JqZWN0LmtleXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3Qua2V5c1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1rZXlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiBpbnRlcm5hbE9iamVjdEtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBOYXNob3JuIH4gSkRLOCBidWdcbnZhciBOQVNIT1JOX0JVRyA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvciAmJiAhJHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoeyAxOiAyIH0sIDEpO1xuXG4vLyBgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5wcm90b3R5cGUucHJvcGVydHlpc2VudW1lcmFibGVcbmV4cG9ydHMuZiA9IE5BU0hPUk5fQlVHID8gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoVikge1xuICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0aGlzLCBWKTtcbiAgcmV0dXJuICEhZGVzY3JpcHRvciAmJiBkZXNjcmlwdG9yLmVudW1lcmFibGU7XG59IDogJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gLS0gc2FmZSAqL1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGFQb3NzaWJsZVByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hLXBvc3NpYmxlLXByb3RvdHlwZScpO1xuXG4vLyBgT2JqZWN0LnNldFByb3RvdHlwZU9mYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LnNldHByb3RvdHlwZW9mXG4vLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3Qtc2V0cHJvdG90eXBlb2YgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gZnVuY3Rpb24gKCkge1xuICB2YXIgQ09SUkVDVF9TRVRURVIgPSBmYWxzZTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdmFyIHNldHRlcjtcbiAgdHJ5IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWdldG93bnByb3BlcnR5ZGVzY3JpcHRvciAtLSBzYWZlXG4gICAgc2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0O1xuICAgIHNldHRlci5jYWxsKHRlc3QsIFtdKTtcbiAgICBDT1JSRUNUX1NFVFRFUiA9IHRlc3QgaW5zdGFuY2VvZiBBcnJheTtcbiAgfSBjYXRjaCAoZXJyb3IpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pIHtcbiAgICBhbk9iamVjdChPKTtcbiAgICBhUG9zc2libGVQcm90b3R5cGUocHJvdG8pO1xuICAgIGlmIChDT1JSRUNUX1NFVFRFUikgc2V0dGVyLmNhbGwoTywgcHJvdG8pO1xuICAgIGVsc2UgTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICByZXR1cm4gTztcbiAgfTtcbn0oKSA6IHVuZGVmaW5lZCk7XG4iLCJ2YXIgZ2V0QnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtYnVpbHQtaW4nKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcblxuLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xubW9kdWxlLmV4cG9ydHMgPSBnZXRCdWlsdEluKCdSZWZsZWN0JywgJ293bktleXMnKSB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KSB7XG4gIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mKGFuT2JqZWN0KGl0KSk7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHNNb2R1bGUuZjtcbiAgcmV0dXJuIGdldE93blByb3BlcnR5U3ltYm9scyA/IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdsb2JhbDtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMnKTtcbnZhciBzZXRHbG9iYWwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2V0LWdsb2JhbCcpO1xudmFyIGluc3BlY3RTb3VyY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaW5zcGVjdC1zb3VyY2UnKTtcbnZhciBJbnRlcm5hbFN0YXRlTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ludGVybmFsLXN0YXRlJyk7XG5cbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXQ7XG52YXIgZW5mb3JjZUludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmVuZm9yY2U7XG52YXIgVEVNUExBVEUgPSBTdHJpbmcoU3RyaW5nKS5zcGxpdCgnU3RyaW5nJyk7XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciB1bnNhZmUgPSBvcHRpb25zID8gISFvcHRpb25zLnVuc2FmZSA6IGZhbHNlO1xuICB2YXIgc2ltcGxlID0gb3B0aW9ucyA/ICEhb3B0aW9ucy5lbnVtZXJhYmxlIDogZmFsc2U7XG4gIHZhciBub1RhcmdldEdldCA9IG9wdGlvbnMgPyAhIW9wdGlvbnMubm9UYXJnZXRHZXQgOiBmYWxzZTtcbiAgdmFyIHN0YXRlO1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJyAmJiAhaGFzKHZhbHVlLCAnbmFtZScpKSB7XG4gICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkodmFsdWUsICduYW1lJywga2V5KTtcbiAgICB9XG4gICAgc3RhdGUgPSBlbmZvcmNlSW50ZXJuYWxTdGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFzdGF0ZS5zb3VyY2UpIHtcbiAgICAgIHN0YXRlLnNvdXJjZSA9IFRFTVBMQVRFLmpvaW4odHlwZW9mIGtleSA9PSAnc3RyaW5nJyA/IGtleSA6ICcnKTtcbiAgICB9XG4gIH1cbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIGlmIChzaW1wbGUpIE9ba2V5XSA9IHZhbHVlO1xuICAgIGVsc2Ugc2V0R2xvYmFsKGtleSwgdmFsdWUpO1xuICAgIHJldHVybjtcbiAgfSBlbHNlIGlmICghdW5zYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgfSBlbHNlIGlmICghbm9UYXJnZXRHZXQgJiYgT1trZXldKSB7XG4gICAgc2ltcGxlID0gdHJ1ZTtcbiAgfVxuICBpZiAoc2ltcGxlKSBPW2tleV0gPSB2YWx1ZTtcbiAgZWxzZSBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoTywga2V5LCB2YWx1ZSk7XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIGdldEludGVybmFsU3RhdGUodGhpcykuc291cmNlIHx8IGluc3BlY3RTb3VyY2UodGhpcyk7XG59KTtcbiIsIi8vIGBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVxdWlyZW9iamVjdGNvZXJjaWJsZVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShnbG9iYWwsIGtleSwgdmFsdWUpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGdsb2JhbFtrZXldID0gdmFsdWU7XG4gIH0gcmV0dXJuIHZhbHVlO1xufTtcbiIsInZhciBkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZGVmaW5lLXByb3BlcnR5JykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzJyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG5cbnZhciBUT19TVFJJTkdfVEFHID0gd2VsbEtub3duU3ltYm9sKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgVEFHLCBTVEFUSUMpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBTVEFUSUMgPyBpdCA6IGl0LnByb3RvdHlwZSwgVE9fU1RSSU5HX1RBRykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eShpdCwgVE9fU1RSSU5HX1RBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBUQUcgfSk7XG4gIH1cbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3NoYXJlZCcpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcblxudmFyIGtleXMgPSBzaGFyZWQoJ2tleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBrZXlzW2tleV0gfHwgKGtleXNba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHNldEdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtZ2xvYmFsJyk7XG5cbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IHNldEdsb2JhbChTSEFSRUQsIHt9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBzdG9yZTtcbiIsInZhciBJU19QVVJFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLXB1cmUnKTtcbnZhciBzdG9yZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zaGFyZWQtc3RvcmUnKTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB7fSk7XG59KSgndmVyc2lvbnMnLCBbXSkucHVzaCh7XG4gIHZlcnNpb246ICczLjEwLjEnLFxuICBtb2RlOiBJU19QVVJFID8gJ3B1cmUnIDogJ2dsb2JhbCcsXG4gIGNvcHlyaWdodDogJ8KpIDIwMjEgRGVuaXMgUHVzaGthcmV2ICh6bG9pcm9jay5ydSknXG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbi8vIGBTdHJpbmcucHJvdG90eXBlLnJlcGVhdGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUucmVwZWF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCkge1xuICB2YXIgc3RyID0gU3RyaW5nKHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcykpO1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBuID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYgKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpIHRocm93IFJhbmdlRXJyb3IoJ1dyb25nIG51bWJlciBvZiByZXBldGl0aW9ucycpO1xuICBmb3IgKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpIGlmIChuICYgMSkgcmVzdWx0ICs9IHN0cjtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jbGFzc29mLXJhdycpO1xuXG4vLyBgdGhpc051bWJlclZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtdGhpc251bWJlcnZhbHVlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlICE9ICdudW1iZXInICYmIGNsYXNzb2YodmFsdWUpICE9ICdOdW1iZXInKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKCdJbmNvcnJlY3QgaW52b2NhdGlvbicpO1xuICB9XG4gIHJldHVybiArdmFsdWU7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbnRlZ2VyJyk7XG5cbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcblxuLy8gSGVscGVyIGZvciBhIHBvcHVsYXIgcmVwZWF0aW5nIGNhc2Ugb2YgdGhlIHNwZWM6XG4vLyBMZXQgaW50ZWdlciBiZSA/IFRvSW50ZWdlcihpbmRleCkuXG4vLyBJZiBpbnRlZ2VyIDwgMCwgbGV0IHJlc3VsdCBiZSBtYXgoKGxlbmd0aCArIGludGVnZXIpLCAwKTsgZWxzZSBsZXQgcmVzdWx0IGJlIG1pbihpbnRlZ2VyLCBsZW5ndGgpLlxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICB2YXIgaW50ZWdlciA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbnRlZ2VyIDwgMCA/IG1heChpbnRlZ2VyICsgbGVuZ3RoLCAwKSA6IG1pbihpbnRlZ2VyLCBsZW5ndGgpO1xufTtcbiIsIi8vIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbmRleGVkLW9iamVjdCcpO1xudmFyIHJlcXVpcmVPYmplY3RDb2VyY2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVxdWlyZS1vYmplY3QtY29lcmNpYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJbmRleGVkT2JqZWN0KHJlcXVpcmVPYmplY3RDb2VyY2libGUoaXQpKTtcbn07XG4iLCJ2YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5cbi8vIGBUb0ludGVnZXJgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b2ludGVnZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFyZ3VtZW50KSB7XG4gIHJldHVybiBpc05hTihhcmd1bWVudCA9ICthcmd1bWVudCkgPyAwIDogKGFyZ3VtZW50ID4gMCA/IGZsb29yIDogY2VpbCkoYXJndW1lbnQpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlcicpO1xuXG52YXIgbWluID0gTWF0aC5taW47XG5cbi8vIGBUb0xlbmd0aGAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvbGVuZ3RoXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICByZXR1cm4gYXJndW1lbnQgPiAwID8gbWluKHRvSW50ZWdlcihhcmd1bWVudCksIDB4MUZGRkZGRkZGRkZGRkYpIDogMDsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsInZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xuXG4vLyBgVG9PYmplY3RgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b29iamVjdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYXJndW1lbnQpIHtcbiAgcmV0dXJuIE9iamVjdChyZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KSk7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xuXG4vLyBgVG9QcmltaXRpdmVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy10b3ByaW1pdGl2ZVxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgUFJFRkVSUkVEX1NUUklORykge1xuICBpZiAoIWlzT2JqZWN0KGlucHV0KSkgcmV0dXJuIGlucHV0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaW5wdXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpbnB1dCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVBSRUZFUlJFRF9TVFJJTkcgJiYgdHlwZW9mIChmbiA9IGlucHV0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHBvc3RmaXggPSBNYXRoLnJhbmRvbSgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJyArIFN0cmluZyhrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5KSArICcpXycgKyAoKytpZCArIHBvc3RmaXgpLnRvU3RyaW5nKDM2KTtcbn07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBlcy9uby1zeW1ib2wgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmcgKi9cbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBOQVRJVkVfU1lNQk9MXG4gICYmICFTeW1ib2wuc2hhbVxuICAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09ICdzeW1ib2wnO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBzaGFyZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2hhcmVkJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2hhcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91aWQnKTtcbnZhciBOQVRJVkVfU1lNQk9MID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL25hdGl2ZS1zeW1ib2wnKTtcbnZhciBVU0VfU1lNQk9MX0FTX1VJRCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy91c2Utc3ltYm9sLWFzLXVpZCcpO1xuXG52YXIgV2VsbEtub3duU3ltYm9sc1N0b3JlID0gc2hhcmVkKCd3a3MnKTtcbnZhciBTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyIGNyZWF0ZVdlbGxLbm93blN5bWJvbCA9IFVTRV9TWU1CT0xfQVNfVUlEID8gU3ltYm9sIDogU3ltYm9sICYmIFN5bWJvbC53aXRob3V0U2V0dGVyIHx8IHVpZDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICBpZiAoIWhhcyhXZWxsS25vd25TeW1ib2xzU3RvcmUsIG5hbWUpIHx8ICEoTkFUSVZFX1NZTUJPTCB8fCB0eXBlb2YgV2VsbEtub3duU3ltYm9sc1N0b3JlW25hbWVdID09ICdzdHJpbmcnKSkge1xuICAgIGlmIChOQVRJVkVfU1lNQk9MICYmIGhhcyhTeW1ib2wsIG5hbWUpKSB7XG4gICAgICBXZWxsS25vd25TeW1ib2xzU3RvcmVbbmFtZV0gPSBTeW1ib2xbbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXSA9IGNyZWF0ZVdlbGxLbm93blN5bWJvbCgnU3ltYm9sLicgKyBuYW1lKTtcbiAgICB9XG4gIH0gcmV0dXJuIFdlbGxLbm93blN5bWJvbHNTdG9yZVtuYW1lXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3JzJyk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xudmFyIGRlZmluZUl0ZXJhdG9yID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlZmluZS1pdGVyYXRvcicpO1xuXG52YXIgQVJSQVlfSVRFUkFUT1IgPSAnQXJyYXkgSXRlcmF0b3InO1xudmFyIHNldEludGVybmFsU3RhdGUgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLnNldDtcbnZhciBnZXRJbnRlcm5hbFN0YXRlID0gSW50ZXJuYWxTdGF0ZU1vZHVsZS5nZXR0ZXJGb3IoQVJSQVlfSVRFUkFUT1IpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmVudHJpZXNgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZW50cmllc1xuLy8gYEFycmF5LnByb3RvdHlwZS5rZXlzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmtleXNcbi8vIGBBcnJheS5wcm90b3R5cGUudmFsdWVzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLnZhbHVlc1xuLy8gYEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQGl0ZXJhdG9yXG4vLyBgQ3JlYXRlQXJyYXlJdGVyYXRvcmAgaW50ZXJuYWwgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWNyZWF0ZWFycmF5aXRlcmF0b3Jcbm1vZHVsZS5leHBvcnRzID0gZGVmaW5lSXRlcmF0b3IoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICB0eXBlOiBBUlJBWV9JVEVSQVRPUixcbiAgICB0YXJnZXQ6IHRvSW5kZXhlZE9iamVjdChpdGVyYXRlZCksIC8vIHRhcmdldFxuICAgIGluZGV4OiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICAgIGtpbmQ6IGtpbmQgICAgICAgICAgICAgICAgICAgICAgICAgLy8ga2luZFxuICB9KTtcbi8vIGAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLSVhcnJheWl0ZXJhdG9ycHJvdG90eXBlJS5uZXh0XG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gIHZhciB0YXJnZXQgPSBzdGF0ZS50YXJnZXQ7XG4gIHZhciBraW5kID0gc3RhdGUua2luZDtcbiAgdmFyIGluZGV4ID0gc3RhdGUuaW5kZXgrKztcbiAgaWYgKCF0YXJnZXQgfHwgaW5kZXggPj0gdGFyZ2V0Lmxlbmd0aCkge1xuICAgIHN0YXRlLnRhcmdldCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4geyB2YWx1ZTogaW5kZXgsIGRvbmU6IGZhbHNlIH07XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4geyB2YWx1ZTogdGFyZ2V0W2luZGV4XSwgZG9uZTogZmFsc2UgfTtcbiAgcmV0dXJuIHsgdmFsdWU6IFtpbmRleCwgdGFyZ2V0W2luZGV4XV0sIGRvbmU6IGZhbHNlIH07XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJVxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGV1bm1hcHBlZGFyZ3VtZW50c29iamVjdFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1jcmVhdGVtYXBwZWRhcmd1bWVudHNvYmplY3Rcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLUBAdW5zY29wYWJsZXNcbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWludGVnZXInKTtcbnZhciB0aGlzTnVtYmVyVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdGhpcy1udW1iZXItdmFsdWUnKTtcbnZhciByZXBlYXQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3RyaW5nLXJlcGVhdCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbnZhciBuYXRpdmVUb0ZpeGVkID0gMS4wLnRvRml4ZWQ7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG52YXIgcG93ID0gZnVuY3Rpb24gKHgsIG4sIGFjYykge1xuICByZXR1cm4gbiA9PT0gMCA/IGFjYyA6IG4gJSAyID09PSAxID8gcG93KHgsIG4gLSAxLCBhY2MgKiB4KSA6IHBvdyh4ICogeCwgbiAvIDIsIGFjYyk7XG59O1xuXG52YXIgbG9nID0gZnVuY3Rpb24gKHgpIHtcbiAgdmFyIG4gPSAwO1xuICB2YXIgeDIgPSB4O1xuICB3aGlsZSAoeDIgPj0gNDA5Nikge1xuICAgIG4gKz0gMTI7XG4gICAgeDIgLz0gNDA5NjtcbiAgfVxuICB3aGlsZSAoeDIgPj0gMikge1xuICAgIG4gKz0gMTtcbiAgICB4MiAvPSAyO1xuICB9IHJldHVybiBuO1xufTtcblxudmFyIG11bHRpcGx5ID0gZnVuY3Rpb24gKGRhdGEsIG4sIGMpIHtcbiAgdmFyIGluZGV4ID0gLTE7XG4gIHZhciBjMiA9IGM7XG4gIHdoaWxlICgrK2luZGV4IDwgNikge1xuICAgIGMyICs9IG4gKiBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGMyICUgMWU3O1xuICAgIGMyID0gZmxvb3IoYzIgLyAxZTcpO1xuICB9XG59O1xuXG52YXIgZGl2aWRlID0gZnVuY3Rpb24gKGRhdGEsIG4pIHtcbiAgdmFyIGluZGV4ID0gNjtcbiAgdmFyIGMgPSAwO1xuICB3aGlsZSAoLS1pbmRleCA+PSAwKSB7XG4gICAgYyArPSBkYXRhW2luZGV4XTtcbiAgICBkYXRhW2luZGV4XSA9IGZsb29yKGMgLyBuKTtcbiAgICBjID0gKGMgJSBuKSAqIDFlNztcbiAgfVxufTtcblxudmFyIGRhdGFUb1N0cmluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIHZhciBpbmRleCA9IDY7XG4gIHZhciBzID0gJyc7XG4gIHdoaWxlICgtLWluZGV4ID49IDApIHtcbiAgICBpZiAocyAhPT0gJycgfHwgaW5kZXggPT09IDAgfHwgZGF0YVtpbmRleF0gIT09IDApIHtcbiAgICAgIHZhciB0ID0gU3RyaW5nKGRhdGFbaW5kZXhdKTtcbiAgICAgIHMgPSBzID09PSAnJyA/IHQgOiBzICsgcmVwZWF0LmNhbGwoJzAnLCA3IC0gdC5sZW5ndGgpICsgdDtcbiAgICB9XG4gIH0gcmV0dXJuIHM7XG59O1xuXG52YXIgRk9SQ0VEID0gbmF0aXZlVG9GaXhlZCAmJiAoXG4gIDAuMDAwMDgudG9GaXhlZCgzKSAhPT0gJzAuMDAwJyB8fFxuICAwLjkudG9GaXhlZCgwKSAhPT0gJzEnIHx8XG4gIDEuMjU1LnRvRml4ZWQoMikgIT09ICcxLjI1JyB8fFxuICAxMDAwMDAwMDAwMDAwMDAwMTI4LjAudG9GaXhlZCgwKSAhPT0gJzEwMDAwMDAwMDAwMDAwMDAxMjgnXG4pIHx8ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIFY4IH4gQW5kcm9pZCA0LjMtXG4gIG5hdGl2ZVRvRml4ZWQuY2FsbCh7fSk7XG59KTtcblxuLy8gYE51bWJlci5wcm90b3R5cGUudG9GaXhlZGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW51bWJlci5wcm90b3R5cGUudG9maXhlZFxuJCh7IHRhcmdldDogJ051bWJlcicsIHByb3RvOiB0cnVlLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIHRvRml4ZWQ6IGZ1bmN0aW9uIHRvRml4ZWQoZnJhY3Rpb25EaWdpdHMpIHtcbiAgICB2YXIgbnVtYmVyID0gdGhpc051bWJlclZhbHVlKHRoaXMpO1xuICAgIHZhciBmcmFjdERpZ2l0cyA9IHRvSW50ZWdlcihmcmFjdGlvbkRpZ2l0cyk7XG4gICAgdmFyIGRhdGEgPSBbMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgdmFyIHNpZ24gPSAnJztcbiAgICB2YXIgcmVzdWx0ID0gJzAnO1xuICAgIHZhciBlLCB6LCBqLCBrO1xuXG4gICAgaWYgKGZyYWN0RGlnaXRzIDwgMCB8fCBmcmFjdERpZ2l0cyA+IDIwKSB0aHJvdyBSYW5nZUVycm9yKCdJbmNvcnJlY3QgZnJhY3Rpb24gZGlnaXRzJyk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgICBpZiAobnVtYmVyICE9IG51bWJlcikgcmV0dXJuICdOYU4nO1xuICAgIGlmIChudW1iZXIgPD0gLTFlMjEgfHwgbnVtYmVyID49IDFlMjEpIHJldHVybiBTdHJpbmcobnVtYmVyKTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgc2lnbiA9ICctJztcbiAgICAgIG51bWJlciA9IC1udW1iZXI7XG4gICAgfVxuICAgIGlmIChudW1iZXIgPiAxZS0yMSkge1xuICAgICAgZSA9IGxvZyhudW1iZXIgKiBwb3coMiwgNjksIDEpKSAtIDY5O1xuICAgICAgeiA9IGUgPCAwID8gbnVtYmVyICogcG93KDIsIC1lLCAxKSA6IG51bWJlciAvIHBvdygyLCBlLCAxKTtcbiAgICAgIHogKj0gMHgxMDAwMDAwMDAwMDAwMDtcbiAgICAgIGUgPSA1MiAtIGU7XG4gICAgICBpZiAoZSA+IDApIHtcbiAgICAgICAgbXVsdGlwbHkoZGF0YSwgMCwgeik7XG4gICAgICAgIGogPSBmcmFjdERpZ2l0cztcbiAgICAgICAgd2hpbGUgKGogPj0gNykge1xuICAgICAgICAgIG11bHRpcGx5KGRhdGEsIDFlNywgMCk7XG4gICAgICAgICAgaiAtPSA3O1xuICAgICAgICB9XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIHBvdygxMCwgaiwgMSksIDApO1xuICAgICAgICBqID0gZSAtIDE7XG4gICAgICAgIHdoaWxlIChqID49IDIzKSB7XG4gICAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgMjMpO1xuICAgICAgICAgIGogLT0gMjM7XG4gICAgICAgIH1cbiAgICAgICAgZGl2aWRlKGRhdGEsIDEgPDwgaik7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDEsIDEpO1xuICAgICAgICBkaXZpZGUoZGF0YSwgMik7XG4gICAgICAgIHJlc3VsdCA9IGRhdGFUb1N0cmluZyhkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11bHRpcGx5KGRhdGEsIDAsIHopO1xuICAgICAgICBtdWx0aXBseShkYXRhLCAxIDw8IC1lLCAwKTtcbiAgICAgICAgcmVzdWx0ID0gZGF0YVRvU3RyaW5nKGRhdGEpICsgcmVwZWF0LmNhbGwoJzAnLCBmcmFjdERpZ2l0cyk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmcmFjdERpZ2l0cyA+IDApIHtcbiAgICAgIGsgPSByZXN1bHQubGVuZ3RoO1xuICAgICAgcmVzdWx0ID0gc2lnbiArIChrIDw9IGZyYWN0RGlnaXRzXG4gICAgICAgID8gJzAuJyArIHJlcGVhdC5jYWxsKCcwJywgZnJhY3REaWdpdHMgLSBrKSArIHJlc3VsdFxuICAgICAgICA6IHJlc3VsdC5zbGljZSgwLCBrIC0gZnJhY3REaWdpdHMpICsgJy4nICsgcmVzdWx0LnNsaWNlKGsgLSBmcmFjdERpZ2l0cykpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBzaWduICsgcmVzdWx0O1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgQXJyYXlJdGVyYXRvck1ldGhvZHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2VzLmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xuXG52YXIgSVRFUkFUT1IgPSB3ZWxsS25vd25TeW1ib2woJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdlbGxLbm93blN5bWJvbCgndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEFycmF5SXRlcmF0b3JNZXRob2RzLnZhbHVlcztcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtDT0xMRUNUSU9OX05BTUVdO1xuICB2YXIgQ29sbGVjdGlvblByb3RvdHlwZSA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gICAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gICAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGVbSVRFUkFUT1JdICE9PSBBcnJheVZhbHVlcykgdHJ5IHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW0lURVJBVE9SXSA9IEFycmF5VmFsdWVzO1xuICAgIH1cbiAgICBpZiAoIUNvbGxlY3Rpb25Qcm90b3R5cGVbVE9fU1RSSU5HX1RBR10pIHtcbiAgICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCBUT19TVFJJTkdfVEFHLCBDT0xMRUNUSU9OX05BTUUpO1xuICAgIH1cbiAgICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIGZvciAodmFyIE1FVEhPRF9OQU1FIGluIEFycmF5SXRlcmF0b3JNZXRob2RzKSB7XG4gICAgICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgICAgIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSAhPT0gQXJyYXlJdGVyYXRvck1ldGhvZHNbTUVUSE9EX05BTUVdKSB0cnkge1xuICAgICAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgTUVUSE9EX05BTUUsIEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBDb2xsZWN0aW9uUHJvdG90eXBlW01FVEhPRF9OQU1FXSA9IEFycmF5SXRlcmF0b3JNZXRob2RzW01FVEhPRF9OQU1FXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IE1hc3NTcHJpbmdXaWRnZXQgfSBmcm9tICcuL01hc3NTcHJpbmdXaWRnZXQnO1xyXG5pbXBvcnQgeyBNYXNzU3ByaW5nTW9kZWwgfSBmcm9tICcuL01hc3NTcHJpbmdXaWRnZXQvbW9kZWwnO1xyXG5pbXBvcnQgbWFzc1NwcmluZ1NldHRpbmdzIGZyb20gJy4vTWFzc1NwcmluZ1dpZGdldC9zZXR0aW5ncyc7XHJcbmltcG9ydCAnLi9tYWluLmNzcyc7XHJcblxyXG5jb25zdCBwYXJhbXMgPSB7fTtcclxuXHJcbm1hc3NTcHJpbmdTZXR0aW5ncy5pbnB1dHMuZm9yRWFjaCgoeyBwYXJhbU5hbWUsIGlucHV0UGFyYW1zOiB7IHZhbHVlIH0gfSkgPT4ge1xyXG4gIHBhcmFtc1twYXJhbU5hbWVdID0gdmFsdWU7XHJcbn0pO1xyXG5cclxuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5jb25zdCBtb2RlbCA9IG5ldyBNYXNzU3ByaW5nTW9kZWwocGFyYW1zKTtcclxuY29uc3Qgd2lkZ2V0ID0gbmV3IE1hc3NTcHJpbmdXaWRnZXQobW9kZWwsIHtcclxuICB2aWV3Ym94OiBbNDAwLCAzNTBdLFxyXG4gIGNvaWxzOiA0LFxyXG4gIHNwcmluZ1dpZHRoOiA4LFxyXG4gIGNvaWxEaWFtZXRlcjogNDAsXHJcbiAgbWFzc1JhZGl1c0ZhY3RvcjogMjAsXHJcbn0pO1xyXG5jb250YWluZXIuYXBwZW5kKHdpZGdldC5nZXRFbGVtKCkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9