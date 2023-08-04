"use strict";

exports.__esModule = true;
exports.default = SupersetPluginCustomTreemap;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@superset-ui/core");

var _ej2ReactTreemap = require("@syncfusion/ej2-react-treemap");

var _sampleBase = require("./sample-base");

var _templateObject;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// import * as data from './treemap-data/car-sales.json';
// const SAMPLE_CSS = `
// .control-fluid {
//     padding: 0px !important;
//     }`;
// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled
// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts
var Styles = _core.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n  padding: ", "px;\n  border-radius: ", "px;\n  height: ", ";\n  width: ", ";\n\n  h3 {\n    /* You can use your props to control CSS! */\n    margin-top: 0;\n    margin-bottom: ", "px;\n    font-size: ", "px;\n    font-weight: ", ";\n  }\n\n  pre {\n    height: ", "px;\n  }\n  #treemap-container_TreeMapTooltip {\n    /*top: 0% !important;*/\n    width: 500px !important;\n    font-size:8px !important;\n    background-color: white !important;\n    padding-left:10px !important;\n    font-weight:600 !important;\n    line-height:0.8rem !important;\n    z-index: 1 !important;\n  }\n  .row{\n    line-height: 0.8rem !important;\n  }\n  p {\n    margin-block-start: 0.2em;\n    margin-block-end: 0.2em;\n  }"])), _ref => {
  var {
    theme
  } = _ref;
  return theme.gridUnit * 1;
}, _ref2 => {
  var {
    theme
  } = _ref2;
  return theme.gridUnit * 1;
}, _ref3 => {
  var {
    height
  } = _ref3;
  return height;
}, _ref4 => {
  var {
    width
  } = _ref4;
  return width;
}, _ref5 => {
  var {
    theme
  } = _ref5;
  return theme.gridUnit * 3;
}, _ref6 => {
  var {
    theme,
    headerFontSize
  } = _ref6;
  return theme.typography.sizes[headerFontSize];
}, _ref7 => {
  var {
    theme,
    boldText
  } = _ref7;
  return theme.typography.weights[boldText ? 'bold' : 'normal'];
}, _ref8 => {
  var {
    theme,
    headerFontSize,
    height
  } = _ref8;
  return height - theme.gridUnit * 12 - theme.typography.sizes[headerFontSize];
});
/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */


function SupersetPluginCustomTreemap(props) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  var {
    data,
    height,
    width
  } = props;
  var rootElem = /*#__PURE__*/(0, _react.createRef)();
  var treeData = {
    "treeData": data
  };
  console.log("treeData", treeData);
  var datasource = treeData;
  console.log("datasource", datasource); // Often, you just want to access the DOM and do whatever you want.
  // Here, you can do that with createRef, and the useEffect hook.

  (0, _react.useEffect)(() => {
    console.log("RENDER");
    var root = rootElem.current;
    console.log('Plugin element', root);
    var $ = window["jQuery"];
    $("#treeMapMeasureText").prev().css("display", "none");
  });
  (0, _react.useEffect)(() => {
    (0, _sampleBase.updateSampleSection)();
  }, []);

  function load(args) {}
  /* tslint:disable:no-string-literal */


  function itemMove(args) {
    var storeNames = args.item.data.storename.split("|");
    var subdivisionNames = args.item.data.subdivision.split("|");
    args.item['data'].product_qty = args.item['weight'];
    var html = '<div class="row"><div class="col-md-6">';
    html += '<br/><b style="font-size:10px;">Available at: </b>';

    for (var k = 0; k < storeNames.length; k += 2) {
      html += storeNames && storeNames[k] != undefined && subdivisionNames[k] != undefined ? "<p> * " + storeNames[k] + " (" + subdivisionNames[k] + ")</p>" : '';
    }

    html += '</div>';
    html += '<br/><div class="col-md-6">';

    for (var i = 0; i < storeNames.length; i++) {
      if (i % 2 != 0) {
        html += storeNames && storeNames[i] != undefined && subdivisionNames[i] != undefined ? "<p> * " + storeNames[i] + " (" + subdivisionNames[i] + ")</p>" : '';
      }
    }

    html += '</div></div>';
    args.treemap.tooltipSettings.template = args.item['groupIndex'] === 0 ? '' : "" + html + '<br><div class="row"><div class="col-md-6"><p> <b>Material Type</b>: ${materialhead}</div></p></div> <br/>';
  }

  return /*#__PURE__*/_react.default.createElement(Styles, {
    ref: rootElem,
    boldText: props.boldText,
    headerFontSize: props.headerFontSize,
    height: height,
    width: width
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "control-pane"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "control-section"
  }, /*#__PURE__*/_react.default.createElement(_ej2ReactTreemap.TreeMapComponent, {
    height: height.toString(),
    width: width.toString(),
    itemClick: itemMove.bind(this),
    itemMove: itemMove.bind(this),
    load: load.bind(this),
    id: "treemap-container",
    titleSettings: {
      text: 'Available Sizes',
      textStyle: {
        size: '20px'
      }
    },
    rangeColorValuePath: "size",
    format: "n",
    useGroupingSeparator: true,
    dataSource: datasource.treeData,
    legendSettings: {
      visible: true,
      position: 'Top',
      shape: 'Rectangle',
      textStyle: {
        size: '15px'
      }
    },
    palette: ['#7450B2', '#9668CE', '#AD81EA', '#853169', '#742F6A', '#632D6C', '#532C6D', '#412A6F', '#312870', '#1D2671'],
    tooltipSettings: {
      visible: true,
      textStyle: {
        size: '10px'
      },
      border: {
        color: 'white',
        width: 0.5
      }
    },
    weightValuePath: "product_qty",
    leafItemSettings: {
      labelPath: 'product_qty',
      labelFormat: '  ${size} mm <br>Q - ${product_qty}Km <br>',
      border: {
        color: 'white',
        width: 3
      },
      labelPosition: 'TopLeft',
      labelStyle: {
        size: '9px',
        color: 'white'
      },
      interSectAction: 'WrapByWord'
    }
  }, /*#__PURE__*/_react.default.createElement(_ej2ReactTreemap.Inject, {
    services: [_ej2ReactTreemap.TreeMapLegend, _ej2ReactTreemap.TreeMapTooltip]
  }), /*#__PURE__*/_react.default.createElement(_ej2ReactTreemap.LevelsDirective, null, /*#__PURE__*/_react.default.createElement(_ej2ReactTreemap.LevelDirective, {
    groupPath: "Material Class",
    headerStyle: {
      size: '15px',
      color: 'white'
    }
  }))))));
}