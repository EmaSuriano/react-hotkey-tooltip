(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{28:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"b",(function(){return src_HotkeyProvider_HotkeyProvider})),__webpack_require__.d(__webpack_exports__,"a",(function(){return src_Hotkey_Hotkey}));__webpack_require__(138),__webpack_require__(41),__webpack_require__(45),__webpack_require__(18),__webpack_require__(67),__webpack_require__(34),__webpack_require__(35),__webpack_require__(43),__webpack_require__(64),__webpack_require__(16),__webpack_require__(103);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),mousetrap=__webpack_require__(127),mousetrap_default=__webpack_require__.n(mousetrap),events_bindHoldCombination=function bindHoldCombination(combination,cb){mousetrap_default.a.bindGlobal(combination,cb(!0),"keydown"),mousetrap_default.a.bindGlobal(combination,cb(!1),"keyup")},events_bindCombination=function bindCombination(combination,cb){mousetrap_default.a.bindGlobal(combination,cb)},events_unbindHoldCombination=function unbindHoldCombination(combination){mousetrap_default.a.unbind(combination,"keydown"),mousetrap_default.a.unbind(combination,"keyup")},events_unbindCombination=function unbindCombination(combination){mousetrap_default.a.unbind(combination)},HotkeyContext=Object(react.createContext)({showTooltip:!1,disabled:!1,tooltipOptions:{}}),jsx_runtime=__webpack_require__(7);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var HotkeyProvider_HotkeyProvider=function HotkeyProvider(_ref){var _ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_ref$tooltipOptions=_ref.tooltipOptions,tooltipOptions=void 0===_ref$tooltipOptions?{}:_ref$tooltipOptions,_ref$tooltipCombinati=_ref.tooltipCombination,tooltipCombination=void 0===_ref$tooltipCombinati?"shift+h":_ref$tooltipCombinati,children=_ref.children,_React$useState2=_slicedToArray(react_default.a.useState(!1),2),tooltipVisible=_React$useState2[0],setTooltipVisible=_React$useState2[1],_useState2=_slicedToArray(Object(react.useState)(tooltipCombination),2),currentCombination=_useState2[0],setCurrentCombination=_useState2[1],changeTooltipVisibility=function changeTooltipVisibility(on){return function(){disabled&&setTooltipVisible(!1),setTooltipVisible(on)}};Object(react.useEffect)((function(){events_bindHoldCombination(currentCombination,changeTooltipVisibility)}),[]),Object(react.useEffect)((function(){var oldCombination=currentCombination;return setCurrentCombination(tooltipCombination),oldCombination!==currentCombination&&(events_unbindHoldCombination(oldCombination),events_bindHoldCombination(currentCombination,changeTooltipVisibility)),function(){return events_unbindHoldCombination(currentCombination)}}),[tooltipCombination]);var contextValue={showTooltip:tooltipVisible,disabled:disabled,tooltipOptions:tooltipOptions};return Object(jsx_runtime.jsx)(HotkeyContext.Provider,{value:contextValue,children:children})};HotkeyProvider_HotkeyProvider.displayName="HotkeyProvider";var src_HotkeyProvider_HotkeyProvider=HotkeyProvider_HotkeyProvider;try{HotkeyProvider_HotkeyProvider.displayName="HotkeyProvider",HotkeyProvider_HotkeyProvider.__docgenInfo={description:"The Top wrapper component that handles when to show the Tooltips and globally disabled them.",displayName:"HotkeyProvider",props:{disabled:{defaultValue:{value:"false"},description:"Disabled all Hotkeys",name:"disabled",required:!1,type:{name:"boolean"}},tooltipOptions:{defaultValue:{value:"{}"},description:"Options passed to react-tippy",name:"tooltipOptions",required:!1,type:{name:"TippyProps"}},tooltipCombination:{defaultValue:{value:"shift+h"},description:"Key combination to trigger the tooltips",name:"tooltipCombination",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Your React components",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HotkeyProvider/HotkeyProvider.tsx#HotkeyProvider"]={docgenInfo:HotkeyProvider_HotkeyProvider.__docgenInfo,name:"HotkeyProvider",path:"src/HotkeyProvider/HotkeyProvider.tsx#HotkeyProvider"})}catch(__react_docgen_typescript_loader_error){}__webpack_require__(14);var tippy_react_esm=__webpack_require__(469);__webpack_require__(889);var Hotkey_Hotkey=function Hotkey(_ref){var disabled=_ref.disabled,children=_ref.children,combination=_ref.combination,onPress=_ref.onPress,_useContext=Object(react.useContext)(HotkeyContext),groupDisabled=_useContext.disabled,showTooltip=_useContext.showTooltip,tooltipOptions=_useContext.tooltipOptions,elementRef=Object(react.useRef)(),previousCombination=function usePrevious(value){var ref=Object(react.useRef)();return Object(react.useEffect)((function(){ref.current=value})),ref.current}(combination),onPressHotkey=function onPressHotkey(evt){if(!disabled&&!groupDisabled){if("function"==typeof onPress)return onPress(evt);if(elementRef&&elementRef.current){if("function"==typeof elementRef.current[onPress])return elementRef.current[onPress](evt);throw new Error("ERROR: The method of ".concat(onPress," is not present in the DOMNode of the child, please check render."))}}};Object(react.useEffect)((function(){events_bindCombination(combination,onPressHotkey)}),[]),Object(react.useEffect)((function(){return previousCombination&&combination!==previousCombination&&(events_unbindCombination(previousCombination),events_bindCombination(combination,onPressHotkey)),function(){return events_unbindCombination(combination)}}),[combination]);var visible=showTooltip&&!(disabled||groupDisabled);return Object(jsx_runtime.jsx)(tippy_react_esm.a,Object.assign({},tooltipOptions,{content:combination.toUpperCase(),visible:visible,children:react_default.a.cloneElement(children,{ref:elementRef})}))};Hotkey_Hotkey.displayName="Hotkey";var src_Hotkey_Hotkey=Hotkey_Hotkey;try{Hotkey_Hotkey.displayName="Hotkey",Hotkey_Hotkey.__docgenInfo={description:"Component responsible for positioning the tooltip in the application and calling the action",displayName:"Hotkey",props:{disabled:{defaultValue:null,description:"Disabled all Hotkey and Tooltip",name:"disabled",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Your React component to wrap",name:"children",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},combination:{defaultValue:null,description:"Key combination to trigger the tooltips",name:"combination",required:!0,type:{name:"string"}},onPress:{defaultValue:null,description:"Action to trigger when the hotkey is pressed",name:"onPress",required:!0,type:{name:"string | Handler"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Hotkey/Hotkey.tsx#Hotkey"]={docgenInfo:Hotkey_Hotkey.__docgenInfo,name:"Hotkey",path:"src/Hotkey/Hotkey.tsx#Hotkey"})}catch(__react_docgen_typescript_loader_error){}},480:function(module,exports,__webpack_require__){__webpack_require__(481),__webpack_require__(635),__webpack_require__(636),__webpack_require__(892),module.exports=__webpack_require__(886)},548:function(module,exports){},636:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(168)},775:function(module,exports,__webpack_require__){var map={"./nestedObjectAssign":411,"./nestedObjectAssign.js":411};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=775},886:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(168).configure)([__webpack_require__(887)],module,!1)}).call(this,__webpack_require__(165)(module))},887:function(module,exports,__webpack_require__){var map={"./AdvancedExamples.stories.tsx":888,"./Hotkey/Hotkey.stories.tsx":890,"./HotkeyProvider/HotkeyProvider.stories.tsx":891};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=887},888:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ControlledRadioButton",(function(){return ControlledRadioButton}));__webpack_require__(138),__webpack_require__(41),__webpack_require__(45),__webpack_require__(18),__webpack_require__(67),__webpack_require__(34),__webpack_require__(35),__webpack_require__(43),__webpack_require__(64),__webpack_require__(16),__webpack_require__(103);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),___WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(28),_utils_storybook__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(89),_material_ui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(895),_material_ui_core__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(897),_material_ui_core__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(896),_material_ui_core__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(303),_material_ui_core__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(304),_material_ui_core__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(77),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(7);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Advanced Examples",parameters:{info:{text:"Real examples of using this library",propTables:[___WEBPACK_IMPORTED_MODULE_12__.a,___WEBPACK_IMPORTED_MODULE_12__.b]}}};var ControlledRadioButton=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_13__.a)((function(){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState("Female"),2),selectedRadio=_React$useState2[0],setSelectedRadio=_React$useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.b,{tooltipOptions:{placement:"left"},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)("form",{onSubmit:function onSubmit(e){e.preventDefault(),alert("Selected Radio: ".concat(selectedRadio))},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.a,{component:"fieldset",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__.a,{component:"legend",children:"Gender"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.a,{"aria-label":"gender",name:"gender1",value:selectedRadio,onChange:function onChangeRadio(_ref){var value=_ref.target.value;return setSelectedRadio(value)},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.a,{combination:"1",onPress:"click",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.a,{value:"Female",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.a,{autoFocus:!0}),label:"Female"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.a,{combination:"2",onPress:"click",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.a,{value:"Male",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.a,{}),label:"Male"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.a,{combination:"3",onPress:"click",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.a,{value:"Other",control:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.a,{}),label:"Other"})})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(___WEBPACK_IMPORTED_MODULE_12__.a,{combination:"space",onPress:"click",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_20__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_19__.a,{variant:"contained",color:"secondary",type:"submit",children:"Submit!"})})]})})})}),"You can select any of the options in the radio buttons by pressing `1`, `2` or `3`, and then submit the form by pressing `SPACE`. Press `shift+h` too show the available Tooltips.")},89:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return withNotes}));var withNotes=function withNotes(fn,text){return fn.story={parameters:{info:{inline:!0,text:text}}},fn}},890:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"NoHotkeyProvider",(function(){return NoHotkeyProvider})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled})),__webpack_require__.d(__webpack_exports__,"SpecialCallback",(function(){return SpecialCallback}));__webpack_require__(138),__webpack_require__(41),__webpack_require__(45),__webpack_require__(18),__webpack_require__(67),__webpack_require__(34),__webpack_require__(35),__webpack_require__(43),__webpack_require__(64),__webpack_require__(16),__webpack_require__(103);var react__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_11___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__),_material_ui_core__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(77),_material_ui_core__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(472),_material_ui_core__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(893),___WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(28),_utils_storybook__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(89),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(7);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"Core/Hotkey",parameters:{info:{propTables:[___WEBPACK_IMPORTED_MODULE_15__.a]}}};var NoHotkeyProvider=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_16__.a)((function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_15__.a,{onPress:"focus",combination:"z",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{variant:"contained",color:"primary",style:{marginRight:"10px"},autoFocus:!0,children:"Press Z to focus me!"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_15__.a,{onPress:"focus",combination:"x",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{variant:"contained",color:"primary",children:"Press X to focus me!"})})]})}),"Example without the HotkeyProvider, no Tooltips are visible but Hotkeys still work!"),Disabled=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_16__.a)((function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_15__.a,{onPress:"focus",combination:"z",disabled:!0,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{variant:"contained",autoFocus:!0,color:"primary",children:"Press Z to focus me!"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__.a,{variant:"caption",style:{margin:"0 10px"},children:"⬅️ This hotkey is disabled ..."}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_15__.a,{onPress:"focus",combination:"x",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_12__.a,{variant:"contained",color:"primary",children:"Press X to focus me!"})})]})}),"Disable Hotkey and tooltip for the shortcut `z`. The other combinations should work as expected. Press `shift+h` too show the Tooltips."),SpecialCallback=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_16__.a)((function(){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_11___default.a.useState(!1),2),checked=_React$useState2[0],setChecked=_React$useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(___WEBPACK_IMPORTED_MODULE_15__.a,{onPress:function onPress(){return setChecked((function(tgl){return!tgl}))},combination:"z",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__.a,{checked:checked,autoFocus:!0})})}),"Example with a special handler for `onPress` - Change the Switch state by pressing Z. Press `shift+h` too show the Tooltips.")},891:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"AllHotkeysDisabled",(function(){return AllHotkeysDisabled})),__webpack_require__.d(__webpack_exports__,"ChangeTooltipCombination",(function(){return ChangeTooltipCombination})),__webpack_require__.d(__webpack_exports__,"ThemingTooltip",(function(){return ThemingTooltip}));__webpack_require__(0);var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(28),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(77),_utils_storybook__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(89),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(7);__webpack_exports__.default={title:"Core/HotkeyProvider",parameters:{info:{propTables:[___WEBPACK_IMPORTED_MODULE_1__.b]}}};var AllHotkeysDisabled=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_3__.a)((function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.b,{disabled:!0,children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{onPress:"focus",combination:"z",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"contained",color:"primary",style:{marginRight:"10px"},autoFocus:!0,children:"Press Z to focus me!"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{onPress:"focus",combination:"x",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"contained",color:"secondary",style:{marginRight:"10px"},children:"Press X to focus me!"})})]})}),"Example with all the Hotkeys disabled. No Tooltip will be visible."),ChangeTooltipCombination=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_3__.a)((function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.b,{tooltipCombination:"shift+ctrl+h",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{onPress:"focus",combination:"z",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"contained",color:"primary",style:{marginRight:"10px"},autoFocus:!0,children:"Press Z to focus me!"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{onPress:"focus",combination:"x",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"contained",color:"secondary",style:{marginRight:"10px"},children:"Press X to focus me!"})})]})}),"Changing the combination to show the help. Press `shift+ctrl+h` to show the Tooltips."),ThemingTooltip=Object(_utils_storybook__WEBPACK_IMPORTED_MODULE_3__.a)((function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.b,{tooltipOptions:{arrow:!1,animation:"scale"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{onPress:"focus",combination:"z",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"contained",color:"primary",style:{marginRight:"10px"},autoFocus:!0,children:"Press Z to focus me!"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.a,{onPress:"focus",combination:"x",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"contained",color:"secondary",style:{marginRight:"10px"},children:"Press X to focus me!"})})]})}),"Example of changing the tooltip display options. Press `shift+h` to show the Tooltips.")},892:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject);__webpack_require__(12),__webpack_require__(41),__webpack_require__(62),__webpack_require__(770),__webpack_require__(51),__webpack_require__(52),__webpack_require__(771),__webpack_require__(772),__webpack_require__(199);var client_api=__webpack_require__(922),esm=__webpack_require__(9),client=(__webpack_require__(0),__webpack_require__(168)),dist=__webpack_require__(460),jsx_runtime=(__webpack_require__(854),__webpack_require__(881),__webpack_require__(883),__webpack_require__(7)),preview_CenterContainer=function CenterContainer(_ref){var children=_ref.children;return Object(jsx_runtime.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"20px",alignItems:"center"},children:children})};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}preview_CenterContainer.displayName="CenterContainer",Object(client.addDecorator)((function(storyFn){return Object(jsx_runtime.jsx)(preview_CenterContainer,{children:storyFn()})})),Object(client.addDecorator)(dist.withInfo),Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.b)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.c)(loader,!1)}));case"parameters":return Object(client_api.d)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.d)(v,!1);default:return console.log(key+" was not supported :( !")}}))}},[[480,2,3]]]);