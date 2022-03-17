"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _spacings = require("@bbc/gel-foundations/spacings");

var _breakpoints = require("@bbc/gel-foundations/breakpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardImageWrapper = (0, _base.default)("div", process.env.NODE_ENV === "production" ? {
  target: "e1fy1myb0"
} : {
  target: "e1fy1myb0",
  label: "CardImageWrapper"
})("margin:", _spacings.GEL_SPACING, " 0 0 ", _spacings.GEL_SPACING, ";display:none;@media (min-width: ", _breakpoints.GEL_GROUP_B_MIN_WIDTH, "rem){display:block;flex-grow:0;flex-shrink:0;flex-basis:6.5rem;}@media (min-width: ", _breakpoints.GEL_GROUP_2_SCREEN_WIDTH_MIN, "){flex-basis:6.8125rem;}@media (min-width: ", _breakpoints.GEL_GROUP_3_SCREEN_WIDTH_MIN, "){flex-basis:11.125rem;margin:0;}@media (min-width: ", _breakpoints.GEL_GROUP_4_SCREEN_WIDTH_MIN, "){margin:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQtaW1hZ2Utd3JhcHBlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU21DIiwiZmlsZSI6Ii4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQtaW1hZ2Utd3JhcHBlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lORyB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7XG4gIEdFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF80X1NDUkVFTl9XSURUSF9NSU4sXG4gIEdFTF9HUk9VUF9CX01JTl9XSURUSCxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuXG5jb25zdCBDYXJkSW1hZ2VXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAke0dFTF9TUEFDSU5HfSAwIDAgJHtHRUxfU1BBQ0lOR307XG4gIGRpc3BsYXk6IG5vbmU7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF9CX01JTl9XSURUSH1yZW0pIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbGV4LWdyb3c6IDA7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZmxleC1iYXNpczogNi41cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8yX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgZmxleC1iYXNpczogNi44MTI1cmVtO1xuICB9XG4gIEBtZWRpYSAobWluLXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NSU59KSB7XG4gICAgZmxleC1iYXNpczogMTEuMTI1cmVtO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfNF9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEltYWdlV3JhcHBlcjtcbiJdfQ== */"));
var _default = CardImageWrapper;
exports.default = _default;