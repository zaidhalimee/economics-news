"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@emotion/react");

var _propTypes = require("prop-types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var boxSizing = "/* Box Sizing https://bit.ly/1A91I0J */\n    html {\n      box-sizing: border-box;\n      font-size: 100%;\n    }\n    *, *:before, *:after {\n      box-sizing: inherit;\n    }"; // https://necolas.github.io/normalize.css/8.0.1/normalize.css

var normalize = "html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}[hidden],template{display:none}";

var GlobalStyles = function GlobalStyles(_ref) {
  var fonts = _ref.fonts;
  return /*#__PURE__*/_react.default.createElement(_react2.Global, {
    styles: /*#__PURE__*/(0, _react2.css)(normalize, " ", boxSizing, " ", fonts, ";" + (process.env.NODE_ENV === "production" ? "" : ";label:GlobalStyles;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9nbG9iYWwtc3R5bGVzLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmUiLCJmaWxlIjoiLi4vc3JjL2dsb2JhbC1zdHlsZXMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEdsb2JhbCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuaW1wb3J0IHsgYXJyYXlPZiwgc3RyaW5nIH0gZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IGJveFNpemluZyA9IGAvKiBCb3ggU2l6aW5nIGh0dHBzOi8vYml0Lmx5LzFBOTFJMEogKi9cbiAgICBodG1sIHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgfVxuICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgfWA7XG5cbi8vIGh0dHBzOi8vbmVjb2xhcy5naXRodWIuaW8vbm9ybWFsaXplLmNzcy84LjAuMS9ub3JtYWxpemUuY3NzXG5jb25zdCBub3JtYWxpemUgPSBgaHRtbHtsaW5lLWhlaWdodDoxLjE1Oy13ZWJraXQtdGV4dC1zaXplLWFkanVzdDoxMDAlO31ib2R5e21hcmdpbjowfW1haW57ZGlzcGxheTpibG9ja31oMXtmb250LXNpemU6MmVtO21hcmdpbjouNjdlbSAwfWhye2JveC1zaXppbmc6Y29udGVudC1ib3g7aGVpZ2h0OjA7b3ZlcmZsb3c6dmlzaWJsZX1wcmV7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWF7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lIGRvdHRlZH1iLHN0cm9uZ3tmb250LXdlaWdodDpib2xkZXJ9Y29kZSxrYmQsc2FtcHtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19c21hbGx7Zm9udC1zaXplOjgwJX1zdWIsc3Vwe2ZvbnQtc2l6ZTo3NSU7bGluZS1oZWlnaHQ6MDtwb3NpdGlvbjpyZWxhdGl2ZTt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX1zdWJ7Ym90dG9tOi0uMjVlbX1zdXB7dG9wOi0uNWVtfWltZ3tib3JkZXItc3R5bGU6bm9uZX1idXR0b24saW5wdXQsb3B0Z3JvdXAsc2VsZWN0LHRleHRhcmVhe2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjEwMCU7bGluZS1oZWlnaHQ6MS4xNTttYXJnaW46MH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9YnV0dG9uXSxbdHlwZT1yZXNldF0sW3R5cGU9c3VibWl0XSxidXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbn1bdHlwZT1idXR0b25dOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXJlc2V0XTo6LW1vei1mb2N1cy1pbm5lcixbdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyLGJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntib3JkZXItc3R5bGU6bm9uZTtwYWRkaW5nOjB9W3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxbdHlwZT1yZXNldF06LW1vei1mb2N1c3JpbmcsW3R5cGU9c3VibWl0XTotbW96LWZvY3VzcmluZyxidXR0b246LW1vei1mb2N1c3Jpbmd7b3V0bGluZToxcHggZG90dGVkIEJ1dHRvblRleHR9ZmllbGRzZXR7cGFkZGluZzouMzVlbSAuNzVlbSAuNjI1ZW19bGVnZW5ke2JveC1zaXppbmc6Ym9yZGVyLWJveDtjb2xvcjppbmhlcml0O2Rpc3BsYXk6dGFibGU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzowO3doaXRlLXNwYWNlOm5vcm1hbH1wcm9ncmVzc3t2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZX10ZXh0YXJlYXtvdmVyZmxvdzphdXRvfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbnstd2Via2l0LWFwcGVhcmFuY2U6bm9uZX06Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uey13ZWJraXQtYXBwZWFyYW5jZTpidXR0b247Zm9udDppbmhlcml0fWRldGFpbHN7ZGlzcGxheTpibG9ja31zdW1tYXJ5e2Rpc3BsYXk6bGlzdC1pdGVtfVtoaWRkZW5dLHRlbXBsYXRle2Rpc3BsYXk6bm9uZX1gO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSAoeyBmb250cyB9KSA9PiAoXG4gIDxHbG9iYWxcbiAgICBzdHlsZXM9e2Nzc2BcbiAgICAgICR7bm9ybWFsaXplfVxuICAgICAgJHtib3hTaXppbmd9XG4gICAgICAke2ZvbnRzfVxuICAgIGB9XG4gIC8+XG4pO1xuXG5HbG9iYWxTdHlsZXMucHJvcFR5cGVzID0ge1xuICBmb250czogYXJyYXlPZihzdHJpbmcpLFxufTtcblxuR2xvYmFsU3R5bGVzLmRlZmF1bHRQcm9wcyA9IHtcbiAgZm9udHM6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XG4iXX0= */")
  });
};

GlobalStyles.propTypes = {
  fonts: (0, _propTypes.arrayOf)(_propTypes.string)
};
GlobalStyles.defaultProps = {
  fonts: null
};
var _default = GlobalStyles;
exports.default = _default;