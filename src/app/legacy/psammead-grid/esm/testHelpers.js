import _styled from "@emotion/styled/base";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

import React from 'react';
import { string } from 'prop-types';
import Paragraph from '@bbc/psammead-paragraph';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import Image from '@bbc/psammead-image';
import { GEL_SPACING_HLF, GEL_SPACING } from '@bbc/gel-foundations/spacings';
import MediaIndicator from '@bbc/psammead-media-indicator';
export var ExampleParagraph = function ExampleParagraph(_ref) {
  var identifier = _ref.identifier;
  return /*#__PURE__*/React.createElement(Paragraph, {
    script: cyrillicAndLatin,
    service: "news"
  }, identifier, "This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines. This is a long paragraph that will wrap for several lines.");
};
export var ExampleFigure = _styled("figure", process.env.NODE_ENV === "production" ? {
  target: "e1xk8adw3"
} : {
  target: "e1xk8adw3",
  label: "ExampleFigure"
})(process.env.NODE_ENV === "production" ? {
  name: "1xclg2i",
  styles: "margin:0;padding:0"
} : {
  name: "1xclg2i",
  styles: "margin:0;padding:0",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0SGVscGVycy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUIwQyIsImZpbGUiOiIuLi9zcmMvdGVzdEhlbHBlcnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAYmJjL3BzYW1tZWFkLXBhcmFncmFwaCc7XG5pbXBvcnQgeyBjeXJpbGxpY0FuZExhdGluIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc2NyaXB0cyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGJiYy9wc2FtbWVhZC1pbWFnZSc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lOR19ITEYsIEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IE1lZGlhSW5kaWNhdG9yIGZyb20gJ0BiYmMvcHNhbW1lYWQtbWVkaWEtaW5kaWNhdG9yJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVQYXJhZ3JhcGggPSAoeyBpZGVudGlmaWVyIH0pID0+IChcbiAgPFBhcmFncmFwaCBzY3JpcHQ9e2N5cmlsbGljQW5kTGF0aW59IHNlcnZpY2U9XCJuZXdzXCI+XG4gICAge2lkZW50aWZpZXJ9VGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzXG4gICAgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0XG4gICAgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzIGlzIGEgbG9uZyBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yXG4gICAgc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLlxuICAgIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuXG4gIDwvUGFyYWdyYXBoPlxuKTtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVGaWd1cmUgPSBzdHlsZWQuZmlndXJlYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5jb25zdCBJbWFnZVNwYWNpbmcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HfSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVJbWFnZSA9ICgpID0+IChcbiAgPEltYWdlU3BhY2luZz5cbiAgICA8SW1hZ2VcbiAgICAgIGFsdD1cIlJvYmVydCBEb3duZXkgSnVuaW9yIGluIElyb24gTWFuXCJcbiAgICAgIHNyYz1cImh0dHBzOi8vaWNoZWYuYmJjaS5jby51ay9uZXdzLzY2MC9jcHNwcm9kcGIvMTE4OTcvcHJvZHVjdGlvbi9fMTA2NjEzODE3Xzk5OV9hbF8uanBnXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAvPlxuICA8L0ltYWdlU3BhY2luZz5cbik7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlTWVkaWFJbmRpY2F0b3IgPSBzdHlsZWQoTWVkaWFJbmRpY2F0b3IpYGA7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVGltZSA9IHN0eWxlZC50aW1lYFxuICBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfTtcbmA7XG5cbkV4YW1wbGVQYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICBpZGVudGlmaWVyOiBzdHJpbmcsXG59O1xuRXhhbXBsZVBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkZW50aWZpZXI6ICcxJyxcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var ImageSpacing = _styled("div", process.env.NODE_ENV === "production" ? {
  target: "e1xk8adw2"
} : {
  target: "e1xk8adw2",
  label: "ImageSpacing"
})("margin:0;padding:0 0 ", GEL_SPACING, " 0;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0SGVscGVycy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEIrQiIsImZpbGUiOiIuLi9zcmMvdGVzdEhlbHBlcnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAYmJjL3BzYW1tZWFkLXBhcmFncmFwaCc7XG5pbXBvcnQgeyBjeXJpbGxpY0FuZExhdGluIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc2NyaXB0cyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGJiYy9wc2FtbWVhZC1pbWFnZSc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lOR19ITEYsIEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IE1lZGlhSW5kaWNhdG9yIGZyb20gJ0BiYmMvcHNhbW1lYWQtbWVkaWEtaW5kaWNhdG9yJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVQYXJhZ3JhcGggPSAoeyBpZGVudGlmaWVyIH0pID0+IChcbiAgPFBhcmFncmFwaCBzY3JpcHQ9e2N5cmlsbGljQW5kTGF0aW59IHNlcnZpY2U9XCJuZXdzXCI+XG4gICAge2lkZW50aWZpZXJ9VGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzXG4gICAgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0XG4gICAgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzIGlzIGEgbG9uZyBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yXG4gICAgc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLlxuICAgIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuXG4gIDwvUGFyYWdyYXBoPlxuKTtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVGaWd1cmUgPSBzdHlsZWQuZmlndXJlYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5jb25zdCBJbWFnZVNwYWNpbmcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HfSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVJbWFnZSA9ICgpID0+IChcbiAgPEltYWdlU3BhY2luZz5cbiAgICA8SW1hZ2VcbiAgICAgIGFsdD1cIlJvYmVydCBEb3duZXkgSnVuaW9yIGluIElyb24gTWFuXCJcbiAgICAgIHNyYz1cImh0dHBzOi8vaWNoZWYuYmJjaS5jby51ay9uZXdzLzY2MC9jcHNwcm9kcGIvMTE4OTcvcHJvZHVjdGlvbi9fMTA2NjEzODE3Xzk5OV9hbF8uanBnXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAvPlxuICA8L0ltYWdlU3BhY2luZz5cbik7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlTWVkaWFJbmRpY2F0b3IgPSBzdHlsZWQoTWVkaWFJbmRpY2F0b3IpYGA7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVGltZSA9IHN0eWxlZC50aW1lYFxuICBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfTtcbmA7XG5cbkV4YW1wbGVQYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICBpZGVudGlmaWVyOiBzdHJpbmcsXG59O1xuRXhhbXBsZVBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkZW50aWZpZXI6ICcxJyxcbn07XG4iXX0= */"));

export var ExampleImage = function ExampleImage() {
  return /*#__PURE__*/React.createElement(ImageSpacing, null, /*#__PURE__*/React.createElement(Image, {
    alt: "Robert Downey Junior in Iron Man",
    src: "https://ichef.bbci.co.uk/news/660/cpsprodpb/11897/production/_106613817_999_al_.jpg",
    width: "640"
  }));
};
export var ExampleMediaIndicator = /*#__PURE__*/_styled(MediaIndicator, process.env.NODE_ENV === "production" ? {
  target: "e1xk8adw1"
} : {
  target: "e1xk8adw1",
  label: "ExampleMediaIndicator"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0SGVscGVycy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUMyRCIsImZpbGUiOiIuLi9zcmMvdGVzdEhlbHBlcnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAYmJjL3BzYW1tZWFkLXBhcmFncmFwaCc7XG5pbXBvcnQgeyBjeXJpbGxpY0FuZExhdGluIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc2NyaXB0cyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGJiYy9wc2FtbWVhZC1pbWFnZSc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lOR19ITEYsIEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IE1lZGlhSW5kaWNhdG9yIGZyb20gJ0BiYmMvcHNhbW1lYWQtbWVkaWEtaW5kaWNhdG9yJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVQYXJhZ3JhcGggPSAoeyBpZGVudGlmaWVyIH0pID0+IChcbiAgPFBhcmFncmFwaCBzY3JpcHQ9e2N5cmlsbGljQW5kTGF0aW59IHNlcnZpY2U9XCJuZXdzXCI+XG4gICAge2lkZW50aWZpZXJ9VGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzXG4gICAgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0XG4gICAgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzIGlzIGEgbG9uZyBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yXG4gICAgc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLlxuICAgIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuXG4gIDwvUGFyYWdyYXBoPlxuKTtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVGaWd1cmUgPSBzdHlsZWQuZmlndXJlYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5jb25zdCBJbWFnZVNwYWNpbmcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HfSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVJbWFnZSA9ICgpID0+IChcbiAgPEltYWdlU3BhY2luZz5cbiAgICA8SW1hZ2VcbiAgICAgIGFsdD1cIlJvYmVydCBEb3duZXkgSnVuaW9yIGluIElyb24gTWFuXCJcbiAgICAgIHNyYz1cImh0dHBzOi8vaWNoZWYuYmJjaS5jby51ay9uZXdzLzY2MC9jcHNwcm9kcGIvMTE4OTcvcHJvZHVjdGlvbi9fMTA2NjEzODE3Xzk5OV9hbF8uanBnXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAvPlxuICA8L0ltYWdlU3BhY2luZz5cbik7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlTWVkaWFJbmRpY2F0b3IgPSBzdHlsZWQoTWVkaWFJbmRpY2F0b3IpYGA7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVGltZSA9IHN0eWxlZC50aW1lYFxuICBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfTtcbmA7XG5cbkV4YW1wbGVQYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICBpZGVudGlmaWVyOiBzdHJpbmcsXG59O1xuRXhhbXBsZVBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkZW50aWZpZXI6ICcxJyxcbn07XG4iXX0= */");
export var ExampleTime = _styled("time", process.env.NODE_ENV === "production" ? {
  target: "e1xk8adw0"
} : {
  target: "e1xk8adw0",
  label: "ExampleTime"
})("padding:0 ", GEL_SPACING_HLF, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90ZXN0SGVscGVycy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNzQyIsImZpbGUiOiIuLi9zcmMvdGVzdEhlbHBlcnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tICdAYmJjL3BzYW1tZWFkLXBhcmFncmFwaCc7XG5pbXBvcnQgeyBjeXJpbGxpY0FuZExhdGluIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc2NyaXB0cyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnQGJiYy9wc2FtbWVhZC1pbWFnZSc7XG5pbXBvcnQgeyBHRUxfU1BBQ0lOR19ITEYsIEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IE1lZGlhSW5kaWNhdG9yIGZyb20gJ0BiYmMvcHNhbW1lYWQtbWVkaWEtaW5kaWNhdG9yJztcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVQYXJhZ3JhcGggPSAoeyBpZGVudGlmaWVyIH0pID0+IChcbiAgPFBhcmFncmFwaCBzY3JpcHQ9e2N5cmlsbGljQW5kTGF0aW59IHNlcnZpY2U9XCJuZXdzXCI+XG4gICAge2lkZW50aWZpZXJ9VGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzXG4gICAgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0XG4gICAgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLiBUaGlzIGlzIGEgbG9uZyBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yXG4gICAgc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmcgcGFyYWdyYXBoIHRoYXQgd2lsbCB3cmFwIGZvciBzZXZlcmFsIGxpbmVzLlxuICAgIFRoaXMgaXMgYSBsb25nIHBhcmFncmFwaCB0aGF0IHdpbGwgd3JhcCBmb3Igc2V2ZXJhbCBsaW5lcy4gVGhpcyBpcyBhIGxvbmdcbiAgICBwYXJhZ3JhcGggdGhhdCB3aWxsIHdyYXAgZm9yIHNldmVyYWwgbGluZXMuXG4gIDwvUGFyYWdyYXBoPlxuKTtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVGaWd1cmUgPSBzdHlsZWQuZmlndXJlYFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG5gO1xuXG5jb25zdCBJbWFnZVNwYWNpbmcgPSBzdHlsZWQuZGl2YFxuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAke0dFTF9TUEFDSU5HfSAwO1xuYDtcblxuZXhwb3J0IGNvbnN0IEV4YW1wbGVJbWFnZSA9ICgpID0+IChcbiAgPEltYWdlU3BhY2luZz5cbiAgICA8SW1hZ2VcbiAgICAgIGFsdD1cIlJvYmVydCBEb3duZXkgSnVuaW9yIGluIElyb24gTWFuXCJcbiAgICAgIHNyYz1cImh0dHBzOi8vaWNoZWYuYmJjaS5jby51ay9uZXdzLzY2MC9jcHNwcm9kcGIvMTE4OTcvcHJvZHVjdGlvbi9fMTA2NjEzODE3Xzk5OV9hbF8uanBnXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAvPlxuICA8L0ltYWdlU3BhY2luZz5cbik7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlTWVkaWFJbmRpY2F0b3IgPSBzdHlsZWQoTWVkaWFJbmRpY2F0b3IpYGA7XG5cbmV4cG9ydCBjb25zdCBFeGFtcGxlVGltZSA9IHN0eWxlZC50aW1lYFxuICBwYWRkaW5nOiAwICR7R0VMX1NQQUNJTkdfSExGfTtcbmA7XG5cbkV4YW1wbGVQYXJhZ3JhcGgucHJvcFR5cGVzID0ge1xuICBpZGVudGlmaWVyOiBzdHJpbmcsXG59O1xuRXhhbXBsZVBhcmFncmFwaC5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkZW50aWZpZXI6ICcxJyxcbn07XG4iXX0= */"));
ExampleParagraph.propTypes = {
  identifier: string
};
ExampleParagraph.defaultProps = {
  identifier: '1'
};