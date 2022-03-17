"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _react = _interopRequireDefault(require("react"));

var _colours = require("@bbc/psammead-styles/colours");

var _spacings = require("@bbc/gel-foundations/spacings");

var _propTypes = require("prop-types");

var _propTypes2 = require("@bbc/gel-foundations/prop-types");

var _helpers = require("./helpers");

var _Episode = _interopRequireDefault(require("./Episode"));

var _Link = _interopRequireDefault(require("./Link"));

var _Title = _interopRequireDefault(require("./Title"));

var _Description = _interopRequireDefault(require("./Description"));

var _DateTimeDuration = _interopRequireDefault(require("./DateTimeDuration"));

var _Image = _interopRequireDefault(require("./Image"));

var _MediaIndicator = _interopRequireDefault(require("./MediaIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var StyledEpisodeList = (0, _base.default)("ul", process.env.NODE_ENV === "production" ? {
  target: "e11bfr941"
} : {
  target: "e11bfr941",
  label: "StyledEpisodeList"
})(process.env.NODE_ENV === "production" ? {
  name: "v5al3",
  styles: "list-style:none;padding:0;margin:0"
} : {
  name: "v5al3",
  styles: "list-style:none;padding:0;margin:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JtQyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IENfQ0xPVURfTElHSFQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IHN0cmluZywgc2hhcGUsIGFycmF5T2YsIG9uZU9mLCBlbGVtZW50LCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBFcGlzb2RlQ29udGV4dCB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgRXBpc29kZSBmcm9tICcuL0VwaXNvZGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJztcbmltcG9ydCBEYXRlVGltZUR1cmF0aW9uIGZyb20gJy4vRGF0ZVRpbWVEdXJhdGlvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgTWVkaWFJbmRpY2F0b3IgZnJvbSAnLi9NZWRpYUluZGljYXRvcic7XG5cbmNvbnN0IFN0eWxlZEVwaXNvZGVMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBTdHlsZWRFcGlzb2RlTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkdfREJMfSAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCAke0NfQ0xPVURfTElHSFR9IHNvbGlkO1xuICB9XG5gO1xuXG5jb25zdCBFcGlzb2RlTGlzdCA9ICh7XG4gIGNoaWxkcmVuLFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGRpcixcbiAgZGFya01vZGUsXG4gIHVsUHJvcHMsXG4gIGxpUHJvcHMsXG59KSA9PiB7XG4gIGlmICghY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBoYXNNdWx0aXBsZUNoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID4gMTtcblxuICByZXR1cm4gKFxuICAgIDxFcGlzb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzY3JpcHQsIHNlcnZpY2UsIGRpciwgZGFya01vZGUgfX0+XG4gICAgICB7aGFzTXVsdGlwbGVDaGlsZHJlbiA/IChcbiAgICAgICAgPFN0eWxlZEVwaXNvZGVMaXN0IHJvbGU9XCJsaXN0XCIgey4uLnVsUHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxuICAgICAgICAgICAgPFN0eWxlZEVwaXNvZGVMaXN0SXRlbSBrZXk9e2NoaWxkLmtleX0gey4uLmxpUHJvcHN9PlxuICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICA8L1N0eWxlZEVwaXNvZGVMaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdHlsZWRFcGlzb2RlTGlzdD5cbiAgICAgICkgOiAoXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApfVxuICAgIDwvRXBpc29kZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5FcGlzb2RlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBhcnJheU9mKGVsZW1lbnQpLFxuICBzY3JpcHQ6IHNoYXBlKHNjcmlwdFByb3BUeXBlKS5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSksXG4gIGRhcmtNb2RlOiBib29sLFxuICB1bFByb3BzOiBzaGFwZSh7fSksXG4gIGxpUHJvcHM6IHNoYXBlKHt9KSxcbn07XG5cbkVwaXNvZGVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFtdLFxuICBkaXI6ICdsdHInLFxuICBkYXJrTW9kZTogZmFsc2UsXG4gIHVsUHJvcHM6IHt9LFxuICBsaVByb3BzOiB7fSxcbn07XG5cbkVwaXNvZGVMaXN0LkVwaXNvZGUgPSBFcGlzb2RlO1xuRXBpc29kZUxpc3QuTGluayA9IExpbms7XG5FcGlzb2RlTGlzdC5UaXRsZSA9IFRpdGxlO1xuRXBpc29kZUxpc3QuSW1hZ2UgPSBJbWFnZTtcbkVwaXNvZGVMaXN0Lk1lZGlhSW5kaWNhdG9yID0gTWVkaWFJbmRpY2F0b3I7XG5FcGlzb2RlTGlzdC5EZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuRXBpc29kZUxpc3QuRGF0ZVRpbWVEdXJhdGlvbiA9IERhdGVUaW1lRHVyYXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGVMaXN0O1xuIl19 */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});
var StyledEpisodeListItem = (0, _base.default)("li", process.env.NODE_ENV === "production" ? {
  target: "e11bfr940"
} : {
  target: "e11bfr940",
  label: "StyledEpisodeListItem"
})("padding:", _spacings.GEL_SPACING_DBL, " 0;line-height:0;&:first-child{padding-top:0;}&:last-child{padding-bottom:0;}&:not(:last-child){border-bottom:1px ", _colours.C_CLOUD_LIGHT, " solid;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0J1QyIsImZpbGUiOiIuLi9zcmMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IENfQ0xPVURfTElHSFQgfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcbmltcG9ydCB7IEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IHN0cmluZywgc2hhcGUsIGFycmF5T2YsIG9uZU9mLCBlbGVtZW50LCBib29sIH0gZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBFcGlzb2RlQ29udGV4dCB9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQgRXBpc29kZSBmcm9tICcuL0VwaXNvZGUnO1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmltcG9ydCBEZXNjcmlwdGlvbiBmcm9tICcuL0Rlc2NyaXB0aW9uJztcbmltcG9ydCBEYXRlVGltZUR1cmF0aW9uIGZyb20gJy4vRGF0ZVRpbWVEdXJhdGlvbic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9JbWFnZSc7XG5pbXBvcnQgTWVkaWFJbmRpY2F0b3IgZnJvbSAnLi9NZWRpYUluZGljYXRvcic7XG5cbmNvbnN0IFN0eWxlZEVwaXNvZGVMaXN0ID0gc3R5bGVkLnVsYFxuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG5gO1xuXG5jb25zdCBTdHlsZWRFcGlzb2RlTGlzdEl0ZW0gPSBzdHlsZWQubGlgXG4gIHBhZGRpbmc6ICR7R0VMX1NQQUNJTkdfREJMfSAwO1xuICBsaW5lLWhlaWdodDogMDtcbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgfVxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci1ib3R0b206IDFweCAke0NfQ0xPVURfTElHSFR9IHNvbGlkO1xuICB9XG5gO1xuXG5jb25zdCBFcGlzb2RlTGlzdCA9ICh7XG4gIGNoaWxkcmVuLFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGRpcixcbiAgZGFya01vZGUsXG4gIHVsUHJvcHMsXG4gIGxpUHJvcHMsXG59KSA9PiB7XG4gIGlmICghY2hpbGRyZW4ubGVuZ3RoKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCBoYXNNdWx0aXBsZUNoaWxkcmVuID0gY2hpbGRyZW4ubGVuZ3RoID4gMTtcblxuICByZXR1cm4gKFxuICAgIDxFcGlzb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzY3JpcHQsIHNlcnZpY2UsIGRpciwgZGFya01vZGUgfX0+XG4gICAgICB7aGFzTXVsdGlwbGVDaGlsZHJlbiA/IChcbiAgICAgICAgPFN0eWxlZEVwaXNvZGVMaXN0IHJvbGU9XCJsaXN0XCIgey4uLnVsUHJvcHN9PlxuICAgICAgICAgIHtjaGlsZHJlbi5tYXAoY2hpbGQgPT4gKFxuICAgICAgICAgICAgPFN0eWxlZEVwaXNvZGVMaXN0SXRlbSBrZXk9e2NoaWxkLmtleX0gey4uLmxpUHJvcHN9PlxuICAgICAgICAgICAgICB7Y2hpbGR9XG4gICAgICAgICAgICA8L1N0eWxlZEVwaXNvZGVMaXN0SXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9TdHlsZWRFcGlzb2RlTGlzdD5cbiAgICAgICkgOiAoXG4gICAgICAgIGNoaWxkcmVuXG4gICAgICApfVxuICAgIDwvRXBpc29kZUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5FcGlzb2RlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBhcnJheU9mKGVsZW1lbnQpLFxuICBzY3JpcHQ6IHNoYXBlKHNjcmlwdFByb3BUeXBlKS5pc1JlcXVpcmVkLFxuICBzZXJ2aWNlOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSksXG4gIGRhcmtNb2RlOiBib29sLFxuICB1bFByb3BzOiBzaGFwZSh7fSksXG4gIGxpUHJvcHM6IHNoYXBlKHt9KSxcbn07XG5cbkVwaXNvZGVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2hpbGRyZW46IFtdLFxuICBkaXI6ICdsdHInLFxuICBkYXJrTW9kZTogZmFsc2UsXG4gIHVsUHJvcHM6IHt9LFxuICBsaVByb3BzOiB7fSxcbn07XG5cbkVwaXNvZGVMaXN0LkVwaXNvZGUgPSBFcGlzb2RlO1xuRXBpc29kZUxpc3QuTGluayA9IExpbms7XG5FcGlzb2RlTGlzdC5UaXRsZSA9IFRpdGxlO1xuRXBpc29kZUxpc3QuSW1hZ2UgPSBJbWFnZTtcbkVwaXNvZGVMaXN0Lk1lZGlhSW5kaWNhdG9yID0gTWVkaWFJbmRpY2F0b3I7XG5FcGlzb2RlTGlzdC5EZXNjcmlwdGlvbiA9IERlc2NyaXB0aW9uO1xuRXBpc29kZUxpc3QuRGF0ZVRpbWVEdXJhdGlvbiA9IERhdGVUaW1lRHVyYXRpb247XG5cbmV4cG9ydCBkZWZhdWx0IEVwaXNvZGVMaXN0O1xuIl19 */"));

var EpisodeList = function EpisodeList(_ref) {
  var children = _ref.children,
      script = _ref.script,
      service = _ref.service,
      dir = _ref.dir,
      darkMode = _ref.darkMode,
      ulProps = _ref.ulProps,
      liProps = _ref.liProps;
  if (!children.length) return null;
  var hasMultipleChildren = children.length > 1;
  return /*#__PURE__*/_react.default.createElement(_helpers.EpisodeContext.Provider, {
    value: {
      script: script,
      service: service,
      dir: dir,
      darkMode: darkMode
    }
  }, hasMultipleChildren ? /*#__PURE__*/_react.default.createElement(StyledEpisodeList, _extends({
    role: "list"
  }, ulProps), children.map(function (child) {
    return /*#__PURE__*/_react.default.createElement(StyledEpisodeListItem, _extends({
      key: child.key
    }, liProps), child);
  })) : children);
};

EpisodeList.propTypes = {
  children: (0, _propTypes.arrayOf)(_propTypes.element),
  script: (0, _propTypes.shape)(_propTypes2.scriptPropType).isRequired,
  service: _propTypes.string.isRequired,
  dir: (0, _propTypes.oneOf)(['ltr', 'rtl']),
  darkMode: _propTypes.bool,
  ulProps: (0, _propTypes.shape)({}),
  liProps: (0, _propTypes.shape)({})
};
EpisodeList.defaultProps = {
  children: [],
  dir: 'ltr',
  darkMode: false,
  ulProps: {},
  liProps: {}
};
EpisodeList.Episode = _Episode.default;
EpisodeList.Link = _Link.default;
EpisodeList.Title = _Title.default;
EpisodeList.Image = _Image.default;
EpisodeList.MediaIndicator = _MediaIndicator.default;
EpisodeList.Description = _Description.default;
EpisodeList.DateTimeDuration = _DateTimeDuration.default;
var _default = EpisodeList;
exports.default = _default;