"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoryPromoUl = exports.StoryPromoLi = exports.StoryPromoLiBase = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = require("prop-types");

var _colours = require("@bbc/psammead-styles/colours");

var _spacings = require("@bbc/gel-foundations/spacings");

var _breakpoints = require("@bbc/gel-foundations/breakpoints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var promoListPropTypes = {
  children: _propTypes.node.isRequired,
  border: _propTypes.bool
};
var promoListDefaultProps = {
  border: true
};
var StoryPromoLiBase = (0, _base.default)("li", process.env.NODE_ENV === "production" ? {
  target: "eom0ln52"
} : {
  target: "eom0ln52",
  label: "StoryPromoLiBase"
})(function (_ref) {
  var border = _ref.border;
  return border && "\n    @media (max-width: ".concat(_breakpoints.GEL_GROUP_3_SCREEN_WIDTH_MAX, ") {\n      border-bottom: 0.0625rem solid ").concat(_colours.C_LUNAR, ";\n    }\n  ");
}, " &:last-child{border:none;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ5QyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbm9kZSwgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ19MVU5BUiB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkcsXG4gIEdFTF9TUEFDSU5HX0RCTCxcbiAgR0VMX1NQQUNJTkdfVFJQTCxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01BWCxcbiAgR0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTixcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuXG5jb25zdCBwcm9tb0xpc3RQcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIGJvcmRlcjogYm9vbCxcbn07XG5cbmNvbnN0IHByb21vTGlzdERlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IFN0b3J5UHJvbW9MaUJhc2UgPSBzdHlsZWQubGlgXG4gICR7KHsgYm9yZGVyIH0pID0+XG4gICAgYm9yZGVyICYmXG4gICAgYFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgJHtDX0xVTkFSfTtcbiAgICB9XG4gIGB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbmA7XG5cblN0b3J5UHJvbW9MaUJhc2UucHJvcFR5cGVzID0gcHJvbW9MaXN0UHJvcFR5cGVzO1xuXG5TdG9yeVByb21vTGlCYXNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm9sZTogJ2xpc3RpdGVtJyxcbiAgLi4ucHJvbW9MaXN0RGVmYXVsdFByb3BzLFxufTtcblxuZXhwb3J0IGNvbnN0IFN0b3J5UHJvbW9MaSA9IHN0eWxlZChTdG9yeVByb21vTGlCYXNlKWBcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR30gMCAke0dFTF9TUEFDSU5HX0RCTH07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH0gMCAke0dFTF9TUEFDSU5HX0RCTH07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfNF9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HX1RSUEx9O1xuICB9XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgICBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIH1cbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbmA7XG5cblN0b3J5UHJvbW9MaS5wcm9wVHlwZXMgPSBwcm9tb0xpc3RQcm9wVHlwZXM7XG5cblN0b3J5UHJvbW9MaS5kZWZhdWx0UHJvcHMgPSBwcm9tb0xpc3REZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBjb25zdCBTdG9yeVByb21vVWwgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuYDtcblxuU3RvcnlQcm9tb1VsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IG5vZGUuaXNSZXF1aXJlZCxcbn07XG5cblN0b3J5UHJvbW9VbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG4iXX0= */"));
exports.StoryPromoLiBase = StoryPromoLiBase;
StoryPromoLiBase.propTypes = promoListPropTypes;
StoryPromoLiBase.defaultProps = _objectSpread({
  role: 'listitem'
}, promoListDefaultProps);
var StoryPromoLi = ( /*#__PURE__*/0, _base.default)(StoryPromoLiBase, process.env.NODE_ENV === "production" ? {
  target: "eom0ln51"
} : {
  target: "eom0ln51",
  label: "StoryPromoLi"
})("padding:", _spacings.GEL_SPACING, " 0 ", _spacings.GEL_SPACING_DBL, ";@media (min-width: ", _breakpoints.GEL_GROUP_3_SCREEN_WIDTH_MIN, "){padding:", _spacings.GEL_SPACING_DBL, " 0 ", _spacings.GEL_SPACING_DBL, ";}@media (min-width: ", _breakpoints.GEL_GROUP_4_SCREEN_WIDTH_MIN, "){padding:0 0 ", _spacings.GEL_SPACING_TRPL, ";}&:first-child{padding-top:0;@media (min-width: ", _breakpoints.GEL_GROUP_3_SCREEN_WIDTH_MIN, ") and (max-width: ", _breakpoints.GEL_GROUP_3_SCREEN_WIDTH_MAX, "){padding-top:", _spacings.GEL_SPACING_DBL, ";}}&:last-child{padding-bottom:0;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENvRCIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbm9kZSwgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ19MVU5BUiB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkcsXG4gIEdFTF9TUEFDSU5HX0RCTCxcbiAgR0VMX1NQQUNJTkdfVFJQTCxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01BWCxcbiAgR0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTixcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuXG5jb25zdCBwcm9tb0xpc3RQcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIGJvcmRlcjogYm9vbCxcbn07XG5cbmNvbnN0IHByb21vTGlzdERlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IFN0b3J5UHJvbW9MaUJhc2UgPSBzdHlsZWQubGlgXG4gICR7KHsgYm9yZGVyIH0pID0+XG4gICAgYm9yZGVyICYmXG4gICAgYFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgJHtDX0xVTkFSfTtcbiAgICB9XG4gIGB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbmA7XG5cblN0b3J5UHJvbW9MaUJhc2UucHJvcFR5cGVzID0gcHJvbW9MaXN0UHJvcFR5cGVzO1xuXG5TdG9yeVByb21vTGlCYXNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm9sZTogJ2xpc3RpdGVtJyxcbiAgLi4ucHJvbW9MaXN0RGVmYXVsdFByb3BzLFxufTtcblxuZXhwb3J0IGNvbnN0IFN0b3J5UHJvbW9MaSA9IHN0eWxlZChTdG9yeVByb21vTGlCYXNlKWBcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR30gMCAke0dFTF9TUEFDSU5HX0RCTH07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH0gMCAke0dFTF9TUEFDSU5HX0RCTH07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfNF9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HX1RSUEx9O1xuICB9XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgICBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIH1cbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbmA7XG5cblN0b3J5UHJvbW9MaS5wcm9wVHlwZXMgPSBwcm9tb0xpc3RQcm9wVHlwZXM7XG5cblN0b3J5UHJvbW9MaS5kZWZhdWx0UHJvcHMgPSBwcm9tb0xpc3REZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBjb25zdCBTdG9yeVByb21vVWwgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuYDtcblxuU3RvcnlQcm9tb1VsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IG5vZGUuaXNSZXF1aXJlZCxcbn07XG5cblN0b3J5UHJvbW9VbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG4iXX0= */"));
exports.StoryPromoLi = StoryPromoLi;
StoryPromoLi.propTypes = promoListPropTypes;
StoryPromoLi.defaultProps = promoListDefaultProps;
var StoryPromoUl = (0, _base.default)("ul", process.env.NODE_ENV === "production" ? {
  target: "eom0ln50"
} : {
  target: "eom0ln50",
  label: "StoryPromoUl"
})(process.env.NODE_ENV === "production" ? {
  name: "1dwqukr",
  styles: "list-style-type:none;margin:0;padding:0"
} : {
  name: "1dwqukr",
  styles: "list-style-type:none;margin:0;padding:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUVxQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgbm9kZSwgYm9vbCB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ19MVU5BUiB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHtcbiAgR0VMX1NQQUNJTkcsXG4gIEdFTF9TUEFDSU5HX0RCTCxcbiAgR0VMX1NQQUNJTkdfVFJQTCxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01BWCxcbiAgR0VMX0dST1VQXzRfU0NSRUVOX1dJRFRIX01JTixcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuXG5jb25zdCBwcm9tb0xpc3RQcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBub2RlLmlzUmVxdWlyZWQsXG4gIGJvcmRlcjogYm9vbCxcbn07XG5cbmNvbnN0IHByb21vTGlzdERlZmF1bHRQcm9wcyA9IHtcbiAgYm9yZGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGNvbnN0IFN0b3J5UHJvbW9MaUJhc2UgPSBzdHlsZWQubGlgXG4gICR7KHsgYm9yZGVyIH0pID0+XG4gICAgYm9yZGVyICYmXG4gICAgYFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgJHtDX0xVTkFSfTtcbiAgICB9XG4gIGB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbmA7XG5cblN0b3J5UHJvbW9MaUJhc2UucHJvcFR5cGVzID0gcHJvbW9MaXN0UHJvcFR5cGVzO1xuXG5TdG9yeVByb21vTGlCYXNlLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm9sZTogJ2xpc3RpdGVtJyxcbiAgLi4ucHJvbW9MaXN0RGVmYXVsdFByb3BzLFxufTtcblxuZXhwb3J0IGNvbnN0IFN0b3J5UHJvbW9MaSA9IHN0eWxlZChTdG9yeVByb21vTGlCYXNlKWBcbiAgcGFkZGluZzogJHtHRUxfU1BBQ0lOR30gMCAke0dFTF9TUEFDSU5HX0RCTH07XG5cbiAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTn0pIHtcbiAgICBwYWRkaW5nOiAke0dFTF9TUEFDSU5HX0RCTH0gMCAke0dFTF9TUEFDSU5HX0RCTH07XG4gIH1cblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfNF9TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HX1RSUEx9O1xuICB9XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICR7R0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTn0pIGFuZCAobWF4LXdpZHRoOiAke0dFTF9HUk9VUF8zX1NDUkVFTl9XSURUSF9NQVh9KSB7XG4gICAgICBwYWRkaW5nLXRvcDogJHtHRUxfU1BBQ0lOR19EQkx9O1xuICAgIH1cbiAgfVxuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbmA7XG5cblN0b3J5UHJvbW9MaS5wcm9wVHlwZXMgPSBwcm9tb0xpc3RQcm9wVHlwZXM7XG5cblN0b3J5UHJvbW9MaS5kZWZhdWx0UHJvcHMgPSBwcm9tb0xpc3REZWZhdWx0UHJvcHM7XG5cbmV4cG9ydCBjb25zdCBTdG9yeVByb21vVWwgPSBzdHlsZWQudWxgXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuYDtcblxuU3RvcnlQcm9tb1VsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IG5vZGUuaXNSZXF1aXJlZCxcbn07XG5cblN0b3J5UHJvbW9VbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHJvbGU6ICdsaXN0Jyxcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
exports.StoryPromoUl = StoryPromoUl;
StoryPromoUl.propTypes = {
  children: _propTypes.node.isRequired
};
StoryPromoUl.defaultProps = {
  role: 'list'
};