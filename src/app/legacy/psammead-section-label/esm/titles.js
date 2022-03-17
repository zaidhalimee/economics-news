import _styled from "@emotion/styled/base";

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

/* eslint-disable jsx-a11y/aria-role */
import React from 'react';
import { oneOf, shape, string } from 'prop-types';
import { scriptPropType } from '@bbc/gel-foundations/prop-types';
import { GEL_GROUP_3_SCREEN_WIDTH_MIN, MEDIA_QUERY_TYPOGRAPHY } from '@bbc/gel-foundations/breakpoints';
import { GEL_SPACING, GEL_SPACING_DBL } from '@bbc/gel-foundations/spacings';
import { getLongPrimer, getDoublePica } from '@bbc/gel-foundations/typography';
import { C_EBON, C_GHOST } from '@bbc/psammead-styles/colours';
import { getSansBold, getSansRegular } from '@bbc/psammead-styles/font-styles';
var minClickableHeightPx = 44;
var minClickableHeightRem = minClickableHeightPx / 16;

var paddingDir = function paddingDir(_ref) {
  var dir = _ref.dir;
  return "padding-".concat(dir === 'rtl' ? 'left' : 'right');
};

var paddingReverseDir = function paddingReverseDir(_ref2) {
  var dir = _ref2.dir;
  return "padding-".concat(dir === 'rtl' ? 'right' : 'left');
}; // Flex doesn't work right on IE11.
// This makes it work right. I don't fully understand how, but am
// eternally grateful to the Flexbugs project.
// https://github.com/philipwalton/flexbugs#flexbug-3


var FlexColumn = _styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1vze7ki4"
} : {
  target: "e1vze7ki4",
  label: "FlexColumn"
})(process.env.NODE_ENV === "production" ? {
  name: "1fttcpj",
  styles: "display:flex;flex-direction:column"
} : {
  name: "1fttcpj",
  styles: "display:flex;flex-direction:column",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aXRsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCOEIiLCJmaWxlIjoiLi4vc3JjL3RpdGxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hcmlhLXJvbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgTUVESUFfUVVFUllfVFlQT0dSQVBIWSxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IGdldExvbmdQcmltZXIsIGdldERvdWJsZVBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENfRUJPTiwgQ19HSE9TVCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5jb25zdCBtaW5DbGlja2FibGVIZWlnaHRQeCA9IDQ0O1xuY29uc3QgbWluQ2xpY2thYmxlSGVpZ2h0UmVtID0gbWluQ2xpY2thYmxlSGVpZ2h0UHggLyAxNjtcblxuY29uc3QgcGFkZGluZ0RpciA9ICh7IGRpciB9KSA9PiBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnfWA7XG5jb25zdCBwYWRkaW5nUmV2ZXJzZURpciA9ICh7IGRpciB9KSA9PlxuICBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfWA7XG5cbi8vIEZsZXggZG9lc24ndCB3b3JrIHJpZ2h0IG9uIElFMTEuXG4vLyBUaGlzIG1ha2VzIGl0IHdvcmsgcmlnaHQuIEkgZG9uJ3QgZnVsbHkgdW5kZXJzdGFuZCBob3csIGJ1dCBhbVxuLy8gZXRlcm5hbGx5IGdyYXRlZnVsIHRvIHRoZSBGbGV4YnVncyBwcm9qZWN0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoaWxpcHdhbHRvbi9mbGV4YnVncyNmbGV4YnVnLTNcbmNvbnN0IEZsZXhDb2x1bW4gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFNlY3Rpb25MYWJlbExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5TZWN0aW9uTGFiZWxMaW5rLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogJHttaW5DbGlja2FibGVIZWlnaHRSZW19cmVtO1xuXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgJHtNRURJQV9RVUVSWV9UWVBPR1JBUEhZLkxBUFRPUF9BTkRfTEFSR0VSfSB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbmA7XG5cbmNvbnN0IHRpdGxlTWFyZ2lucyA9IGBcbiAgbWFyZ2luOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcblxuICAke01FRElBX1FVRVJZX1RZUE9HUkFQSFkuTEFQVE9QX0FORF9MQVJHRVJ9IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXREb3VibGVQaWNhKHNjcmlwdCl9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbiAgJHt0aXRsZU1hcmdpbnN9O1xuICAke3BhZGRpbmdEaXJ9OiAke0dFTF9TUEFDSU5HfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgICR7cGFkZGluZ0Rpcn06ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIGlkOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbmRleExpbmtDdGEgPSBzdHlsZWQuc3BhbmBcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldExvbmdQcmltZXIoc2NyaXB0KX07XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7dGl0bGVNYXJnaW5zfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke3BhZGRpbmdSZXZlcnNlRGlyfTogJHtHRUxfU1BBQ0lOR19EQkx9O1xuXG4gIC8qIG5lZWRlZCB0byBlbnN1cmUgYWx3YXlzIHZlcnRpY2FsbHkgY2VudGVyZWQgZXZlbiB3aGVuIEZsZXhSb3cgY2hhbmdlcyBhbGlnbm1lbnQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbkluZGV4TGlua0N0YS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFBsYWluVGl0bGUgPSAoe1xuICBjaGlsZHJlbjogdGl0bGUsXG4gIGRpcixcbiAgbGFiZWxJZCxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG59KSA9PiAoXG4gIDxGbGV4Q29sdW1uPlxuICAgIDxGbGV4Um93PlxuICAgICAgPFRpdGxlXG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgaWQ9e2xhYmVsSWR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RpdGxlPlxuICAgIDwvRmxleFJvdz5cbiAgPC9GbGV4Q29sdW1uPlxuKTtcblxuUGxhaW5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgbGFiZWxJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cblBsYWluVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IENfR0hPU1QsXG59O1xuXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gKHtcbiAgY2hpbGRyZW46IHRpdGxlLFxuICBkaXIsXG4gIGhyZWYsXG4gIGxhYmVsSWQsXG4gIGxpbmtUZXh0LFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGJhY2tncm91bmRDb2xvcixcbn0pID0+IChcbiAgPFNlY3Rpb25MYWJlbExpbmsgaHJlZj17aHJlZn0gbGFiZWxJZD17bGFiZWxJZH0+XG4gICAgPEZsZXhDb2x1bW4+XG4gICAgICA8RmxleFJvdyByb2xlPVwidGV4dFwiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBpZD17bGFiZWxJZH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8SW5kZXhMaW5rQ3RhXG4gICAgICAgICAgZGlyPXtkaXJ9XG4gICAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICA8L0luZGV4TGlua0N0YT5cbiAgICAgIDwvRmxleFJvdz5cbiAgICA8L0ZsZXhDb2x1bW4+XG4gIDwvU2VjdGlvbkxhYmVsTGluaz5cbik7XG5cbkxpbmtUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rVGV4dDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cbkxpbmtUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogQ19HSE9TVCxcbn07XG4iXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
});

var SectionLabelLink = _styled("a", process.env.NODE_ENV === "production" ? {
  target: "e1vze7ki3"
} : {
  target: "e1vze7ki3",
  label: "SectionLabelLink"
})("color:", C_EBON, ";text-decoration:none;&:focus,&:hover{text-decoration:underline;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aXRsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStCaUMiLCJmaWxlIjoiLi4vc3JjL3RpdGxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hcmlhLXJvbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgTUVESUFfUVVFUllfVFlQT0dSQVBIWSxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IGdldExvbmdQcmltZXIsIGdldERvdWJsZVBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENfRUJPTiwgQ19HSE9TVCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5jb25zdCBtaW5DbGlja2FibGVIZWlnaHRQeCA9IDQ0O1xuY29uc3QgbWluQ2xpY2thYmxlSGVpZ2h0UmVtID0gbWluQ2xpY2thYmxlSGVpZ2h0UHggLyAxNjtcblxuY29uc3QgcGFkZGluZ0RpciA9ICh7IGRpciB9KSA9PiBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnfWA7XG5jb25zdCBwYWRkaW5nUmV2ZXJzZURpciA9ICh7IGRpciB9KSA9PlxuICBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfWA7XG5cbi8vIEZsZXggZG9lc24ndCB3b3JrIHJpZ2h0IG9uIElFMTEuXG4vLyBUaGlzIG1ha2VzIGl0IHdvcmsgcmlnaHQuIEkgZG9uJ3QgZnVsbHkgdW5kZXJzdGFuZCBob3csIGJ1dCBhbVxuLy8gZXRlcm5hbGx5IGdyYXRlZnVsIHRvIHRoZSBGbGV4YnVncyBwcm9qZWN0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoaWxpcHdhbHRvbi9mbGV4YnVncyNmbGV4YnVnLTNcbmNvbnN0IEZsZXhDb2x1bW4gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFNlY3Rpb25MYWJlbExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5TZWN0aW9uTGFiZWxMaW5rLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogJHttaW5DbGlja2FibGVIZWlnaHRSZW19cmVtO1xuXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgJHtNRURJQV9RVUVSWV9UWVBPR1JBUEhZLkxBUFRPUF9BTkRfTEFSR0VSfSB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbmA7XG5cbmNvbnN0IHRpdGxlTWFyZ2lucyA9IGBcbiAgbWFyZ2luOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcblxuICAke01FRElBX1FVRVJZX1RZUE9HUkFQSFkuTEFQVE9QX0FORF9MQVJHRVJ9IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXREb3VibGVQaWNhKHNjcmlwdCl9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbiAgJHt0aXRsZU1hcmdpbnN9O1xuICAke3BhZGRpbmdEaXJ9OiAke0dFTF9TUEFDSU5HfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgICR7cGFkZGluZ0Rpcn06ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIGlkOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbmRleExpbmtDdGEgPSBzdHlsZWQuc3BhbmBcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldExvbmdQcmltZXIoc2NyaXB0KX07XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7dGl0bGVNYXJnaW5zfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke3BhZGRpbmdSZXZlcnNlRGlyfTogJHtHRUxfU1BBQ0lOR19EQkx9O1xuXG4gIC8qIG5lZWRlZCB0byBlbnN1cmUgYWx3YXlzIHZlcnRpY2FsbHkgY2VudGVyZWQgZXZlbiB3aGVuIEZsZXhSb3cgY2hhbmdlcyBhbGlnbm1lbnQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbkluZGV4TGlua0N0YS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFBsYWluVGl0bGUgPSAoe1xuICBjaGlsZHJlbjogdGl0bGUsXG4gIGRpcixcbiAgbGFiZWxJZCxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG59KSA9PiAoXG4gIDxGbGV4Q29sdW1uPlxuICAgIDxGbGV4Um93PlxuICAgICAgPFRpdGxlXG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgaWQ9e2xhYmVsSWR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RpdGxlPlxuICAgIDwvRmxleFJvdz5cbiAgPC9GbGV4Q29sdW1uPlxuKTtcblxuUGxhaW5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgbGFiZWxJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cblBsYWluVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IENfR0hPU1QsXG59O1xuXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gKHtcbiAgY2hpbGRyZW46IHRpdGxlLFxuICBkaXIsXG4gIGhyZWYsXG4gIGxhYmVsSWQsXG4gIGxpbmtUZXh0LFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGJhY2tncm91bmRDb2xvcixcbn0pID0+IChcbiAgPFNlY3Rpb25MYWJlbExpbmsgaHJlZj17aHJlZn0gbGFiZWxJZD17bGFiZWxJZH0+XG4gICAgPEZsZXhDb2x1bW4+XG4gICAgICA8RmxleFJvdyByb2xlPVwidGV4dFwiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBpZD17bGFiZWxJZH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8SW5kZXhMaW5rQ3RhXG4gICAgICAgICAgZGlyPXtkaXJ9XG4gICAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICA8L0luZGV4TGlua0N0YT5cbiAgICAgIDwvRmxleFJvdz5cbiAgICA8L0ZsZXhDb2x1bW4+XG4gIDwvU2VjdGlvbkxhYmVsTGluaz5cbik7XG5cbkxpbmtUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rVGV4dDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cbkxpbmtUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogQ19HSE9TVCxcbn07XG4iXX0= */"));

SectionLabelLink.propTypes = {
  href: string.isRequired,
  labelId: string.isRequired
};

var FlexRow = _styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1vze7ki2"
} : {
  target: "e1vze7ki2",
  label: "FlexRow"
})("display:flex;flex-flow:row nowrap;justify-content:space-between;min-height:", minClickableHeightRem, "rem;align-items:baseline;", MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER, "{align-items:stretch;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aXRsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDMkIiLCJmaWxlIjoiLi4vc3JjL3RpdGxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hcmlhLXJvbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgTUVESUFfUVVFUllfVFlQT0dSQVBIWSxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IGdldExvbmdQcmltZXIsIGdldERvdWJsZVBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENfRUJPTiwgQ19HSE9TVCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5jb25zdCBtaW5DbGlja2FibGVIZWlnaHRQeCA9IDQ0O1xuY29uc3QgbWluQ2xpY2thYmxlSGVpZ2h0UmVtID0gbWluQ2xpY2thYmxlSGVpZ2h0UHggLyAxNjtcblxuY29uc3QgcGFkZGluZ0RpciA9ICh7IGRpciB9KSA9PiBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnfWA7XG5jb25zdCBwYWRkaW5nUmV2ZXJzZURpciA9ICh7IGRpciB9KSA9PlxuICBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfWA7XG5cbi8vIEZsZXggZG9lc24ndCB3b3JrIHJpZ2h0IG9uIElFMTEuXG4vLyBUaGlzIG1ha2VzIGl0IHdvcmsgcmlnaHQuIEkgZG9uJ3QgZnVsbHkgdW5kZXJzdGFuZCBob3csIGJ1dCBhbVxuLy8gZXRlcm5hbGx5IGdyYXRlZnVsIHRvIHRoZSBGbGV4YnVncyBwcm9qZWN0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoaWxpcHdhbHRvbi9mbGV4YnVncyNmbGV4YnVnLTNcbmNvbnN0IEZsZXhDb2x1bW4gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFNlY3Rpb25MYWJlbExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5TZWN0aW9uTGFiZWxMaW5rLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogJHttaW5DbGlja2FibGVIZWlnaHRSZW19cmVtO1xuXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgJHtNRURJQV9RVUVSWV9UWVBPR1JBUEhZLkxBUFRPUF9BTkRfTEFSR0VSfSB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbmA7XG5cbmNvbnN0IHRpdGxlTWFyZ2lucyA9IGBcbiAgbWFyZ2luOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcblxuICAke01FRElBX1FVRVJZX1RZUE9HUkFQSFkuTEFQVE9QX0FORF9MQVJHRVJ9IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXREb3VibGVQaWNhKHNjcmlwdCl9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbiAgJHt0aXRsZU1hcmdpbnN9O1xuICAke3BhZGRpbmdEaXJ9OiAke0dFTF9TUEFDSU5HfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgICR7cGFkZGluZ0Rpcn06ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIGlkOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbmRleExpbmtDdGEgPSBzdHlsZWQuc3BhbmBcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldExvbmdQcmltZXIoc2NyaXB0KX07XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7dGl0bGVNYXJnaW5zfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke3BhZGRpbmdSZXZlcnNlRGlyfTogJHtHRUxfU1BBQ0lOR19EQkx9O1xuXG4gIC8qIG5lZWRlZCB0byBlbnN1cmUgYWx3YXlzIHZlcnRpY2FsbHkgY2VudGVyZWQgZXZlbiB3aGVuIEZsZXhSb3cgY2hhbmdlcyBhbGlnbm1lbnQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbkluZGV4TGlua0N0YS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFBsYWluVGl0bGUgPSAoe1xuICBjaGlsZHJlbjogdGl0bGUsXG4gIGRpcixcbiAgbGFiZWxJZCxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG59KSA9PiAoXG4gIDxGbGV4Q29sdW1uPlxuICAgIDxGbGV4Um93PlxuICAgICAgPFRpdGxlXG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgaWQ9e2xhYmVsSWR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RpdGxlPlxuICAgIDwvRmxleFJvdz5cbiAgPC9GbGV4Q29sdW1uPlxuKTtcblxuUGxhaW5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgbGFiZWxJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cblBsYWluVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IENfR0hPU1QsXG59O1xuXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gKHtcbiAgY2hpbGRyZW46IHRpdGxlLFxuICBkaXIsXG4gIGhyZWYsXG4gIGxhYmVsSWQsXG4gIGxpbmtUZXh0LFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGJhY2tncm91bmRDb2xvcixcbn0pID0+IChcbiAgPFNlY3Rpb25MYWJlbExpbmsgaHJlZj17aHJlZn0gbGFiZWxJZD17bGFiZWxJZH0+XG4gICAgPEZsZXhDb2x1bW4+XG4gICAgICA8RmxleFJvdyByb2xlPVwidGV4dFwiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBpZD17bGFiZWxJZH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8SW5kZXhMaW5rQ3RhXG4gICAgICAgICAgZGlyPXtkaXJ9XG4gICAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICA8L0luZGV4TGlua0N0YT5cbiAgICAgIDwvRmxleFJvdz5cbiAgICA8L0ZsZXhDb2x1bW4+XG4gIDwvU2VjdGlvbkxhYmVsTGluaz5cbik7XG5cbkxpbmtUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rVGV4dDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cbkxpbmtUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogQ19HSE9TVCxcbn07XG4iXX0= */"));

var titleMargins = "\n  margin: ".concat(GEL_SPACING_DBL, " 0;\n\n  ").concat(MEDIA_QUERY_TYPOGRAPHY.LAPTOP_AND_LARGER, " {\n    margin: 0;\n  }\n");

var Title = _styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1vze7ki1"
} : {
  target: "e1vze7ki1",
  label: "Title"
})(function (_ref3) {
  var script = _ref3.script;
  return script && getDoublePica(script);
}, ";", function (_ref4) {
  var service = _ref4.service;
  return getSansRegular(service);
}, " background-color:", function (props) {
  return props.backgroundColor;
}, ";", titleMargins, ";", paddingDir, ":", GEL_SPACING, ";@media (min-width: ", GEL_GROUP_3_SCREEN_WIDTH_MIN, "){", paddingDir, ":", GEL_SPACING_DBL, ";}display:flex;align-items:center;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aXRsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFeUIiLCJmaWxlIjoiLi4vc3JjL3RpdGxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hcmlhLXJvbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgTUVESUFfUVVFUllfVFlQT0dSQVBIWSxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IGdldExvbmdQcmltZXIsIGdldERvdWJsZVBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENfRUJPTiwgQ19HSE9TVCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5jb25zdCBtaW5DbGlja2FibGVIZWlnaHRQeCA9IDQ0O1xuY29uc3QgbWluQ2xpY2thYmxlSGVpZ2h0UmVtID0gbWluQ2xpY2thYmxlSGVpZ2h0UHggLyAxNjtcblxuY29uc3QgcGFkZGluZ0RpciA9ICh7IGRpciB9KSA9PiBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnfWA7XG5jb25zdCBwYWRkaW5nUmV2ZXJzZURpciA9ICh7IGRpciB9KSA9PlxuICBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfWA7XG5cbi8vIEZsZXggZG9lc24ndCB3b3JrIHJpZ2h0IG9uIElFMTEuXG4vLyBUaGlzIG1ha2VzIGl0IHdvcmsgcmlnaHQuIEkgZG9uJ3QgZnVsbHkgdW5kZXJzdGFuZCBob3csIGJ1dCBhbVxuLy8gZXRlcm5hbGx5IGdyYXRlZnVsIHRvIHRoZSBGbGV4YnVncyBwcm9qZWN0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoaWxpcHdhbHRvbi9mbGV4YnVncyNmbGV4YnVnLTNcbmNvbnN0IEZsZXhDb2x1bW4gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFNlY3Rpb25MYWJlbExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5TZWN0aW9uTGFiZWxMaW5rLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogJHttaW5DbGlja2FibGVIZWlnaHRSZW19cmVtO1xuXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgJHtNRURJQV9RVUVSWV9UWVBPR1JBUEhZLkxBUFRPUF9BTkRfTEFSR0VSfSB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbmA7XG5cbmNvbnN0IHRpdGxlTWFyZ2lucyA9IGBcbiAgbWFyZ2luOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcblxuICAke01FRElBX1FVRVJZX1RZUE9HUkFQSFkuTEFQVE9QX0FORF9MQVJHRVJ9IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXREb3VibGVQaWNhKHNjcmlwdCl9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbiAgJHt0aXRsZU1hcmdpbnN9O1xuICAke3BhZGRpbmdEaXJ9OiAke0dFTF9TUEFDSU5HfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgICR7cGFkZGluZ0Rpcn06ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIGlkOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbmRleExpbmtDdGEgPSBzdHlsZWQuc3BhbmBcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldExvbmdQcmltZXIoc2NyaXB0KX07XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7dGl0bGVNYXJnaW5zfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke3BhZGRpbmdSZXZlcnNlRGlyfTogJHtHRUxfU1BBQ0lOR19EQkx9O1xuXG4gIC8qIG5lZWRlZCB0byBlbnN1cmUgYWx3YXlzIHZlcnRpY2FsbHkgY2VudGVyZWQgZXZlbiB3aGVuIEZsZXhSb3cgY2hhbmdlcyBhbGlnbm1lbnQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbkluZGV4TGlua0N0YS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFBsYWluVGl0bGUgPSAoe1xuICBjaGlsZHJlbjogdGl0bGUsXG4gIGRpcixcbiAgbGFiZWxJZCxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG59KSA9PiAoXG4gIDxGbGV4Q29sdW1uPlxuICAgIDxGbGV4Um93PlxuICAgICAgPFRpdGxlXG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgaWQ9e2xhYmVsSWR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RpdGxlPlxuICAgIDwvRmxleFJvdz5cbiAgPC9GbGV4Q29sdW1uPlxuKTtcblxuUGxhaW5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgbGFiZWxJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cblBsYWluVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IENfR0hPU1QsXG59O1xuXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gKHtcbiAgY2hpbGRyZW46IHRpdGxlLFxuICBkaXIsXG4gIGhyZWYsXG4gIGxhYmVsSWQsXG4gIGxpbmtUZXh0LFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGJhY2tncm91bmRDb2xvcixcbn0pID0+IChcbiAgPFNlY3Rpb25MYWJlbExpbmsgaHJlZj17aHJlZn0gbGFiZWxJZD17bGFiZWxJZH0+XG4gICAgPEZsZXhDb2x1bW4+XG4gICAgICA8RmxleFJvdyByb2xlPVwidGV4dFwiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBpZD17bGFiZWxJZH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8SW5kZXhMaW5rQ3RhXG4gICAgICAgICAgZGlyPXtkaXJ9XG4gICAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICA8L0luZGV4TGlua0N0YT5cbiAgICAgIDwvRmxleFJvdz5cbiAgICA8L0ZsZXhDb2x1bW4+XG4gIDwvU2VjdGlvbkxhYmVsTGluaz5cbik7XG5cbkxpbmtUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rVGV4dDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cbkxpbmtUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogQ19HSE9TVCxcbn07XG4iXX0= */"));

Title.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  id: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired
};

var IndexLinkCta = _styled("span", process.env.NODE_ENV === "production" ? {
  target: "e1vze7ki0"
} : {
  target: "e1vze7ki0",
  label: "IndexLinkCta"
})(function (_ref5) {
  var script = _ref5.script;
  return script && getLongPrimer(script);
}, ";", function (_ref6) {
  var service = _ref6.service;
  return getSansBold(service);
}, ";", titleMargins, ";color:", C_EBON, ";background-color:", function (props) {
  return props.backgroundColor;
}, ";white-space:nowrap;", paddingReverseDir, ":", GEL_SPACING_DBL, ";display:flex;align-items:center;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy90aXRsZXMuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdGZ0MiLCJmaWxlIjoiLi4vc3JjL3RpdGxlcy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBqc3gtYTExeS9hcmlhLXJvbGUgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ0BlbW90aW9uL3N0eWxlZCc7XG5pbXBvcnQgeyBvbmVPZiwgc2hhcGUsIHN0cmluZyB9IGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBzY3JpcHRQcm9wVHlwZSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgR0VMX0dST1VQXzNfU0NSRUVOX1dJRFRIX01JTixcbiAgTUVESUFfUVVFUllfVFlQT0dSQVBIWSxcbn0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvYnJlYWtwb2ludHMnO1xuaW1wb3J0IHsgR0VMX1NQQUNJTkcsIEdFTF9TUEFDSU5HX0RCTCB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3NwYWNpbmdzJztcbmltcG9ydCB7IGdldExvbmdQcmltZXIsIGdldERvdWJsZVBpY2EgfSBmcm9tICdAYmJjL2dlbC1mb3VuZGF0aW9ucy90eXBvZ3JhcGh5JztcbmltcG9ydCB7IENfRUJPTiwgQ19HSE9TVCB9IGZyb20gJ0BiYmMvcHNhbW1lYWQtc3R5bGVzL2NvbG91cnMnO1xuaW1wb3J0IHsgZ2V0U2Fuc0JvbGQsIGdldFNhbnNSZWd1bGFyIH0gZnJvbSAnQGJiYy9wc2FtbWVhZC1zdHlsZXMvZm9udC1zdHlsZXMnO1xuXG5jb25zdCBtaW5DbGlja2FibGVIZWlnaHRQeCA9IDQ0O1xuY29uc3QgbWluQ2xpY2thYmxlSGVpZ2h0UmVtID0gbWluQ2xpY2thYmxlSGVpZ2h0UHggLyAxNjtcblxuY29uc3QgcGFkZGluZ0RpciA9ICh7IGRpciB9KSA9PiBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnfWA7XG5jb25zdCBwYWRkaW5nUmV2ZXJzZURpciA9ICh7IGRpciB9KSA9PlxuICBgcGFkZGluZy0ke2RpciA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfWA7XG5cbi8vIEZsZXggZG9lc24ndCB3b3JrIHJpZ2h0IG9uIElFMTEuXG4vLyBUaGlzIG1ha2VzIGl0IHdvcmsgcmlnaHQuIEkgZG9uJ3QgZnVsbHkgdW5kZXJzdGFuZCBob3csIGJ1dCBhbVxuLy8gZXRlcm5hbGx5IGdyYXRlZnVsIHRvIHRoZSBGbGV4YnVncyBwcm9qZWN0LlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3BoaWxpcHdhbHRvbi9mbGV4YnVncyNmbGV4YnVnLTNcbmNvbnN0IEZsZXhDb2x1bW4gPSBzdHlsZWQuc3BhbmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmA7XG5cbmNvbnN0IFNlY3Rpb25MYWJlbExpbmsgPSBzdHlsZWQuYWBcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6Zm9jdXMsXG4gICY6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICB9XG5gO1xuXG5TZWN0aW9uTGFiZWxMaW5rLnByb3BUeXBlcyA9IHtcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgRmxleFJvdyA9IHN0eWxlZC5zcGFuYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWluLWhlaWdodDogJHttaW5DbGlja2FibGVIZWlnaHRSZW19cmVtO1xuXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgJHtNRURJQV9RVUVSWV9UWVBPR1JBUEhZLkxBUFRPUF9BTkRfTEFSR0VSfSB7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cbmA7XG5cbmNvbnN0IHRpdGxlTWFyZ2lucyA9IGBcbiAgbWFyZ2luOiAke0dFTF9TUEFDSU5HX0RCTH0gMDtcblxuICAke01FRElBX1FVRVJZX1RZUE9HUkFQSFkuTEFQVE9QX0FORF9MQVJHRVJ9IHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IFRpdGxlID0gc3R5bGVkLnNwYW5gXG4gICR7KHsgc2NyaXB0IH0pID0+IHNjcmlwdCAmJiBnZXREb3VibGVQaWNhKHNjcmlwdCl9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2Fuc1JlZ3VsYXIoc2VydmljZSl9XG4gIGJhY2tncm91bmQtY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYmFja2dyb3VuZENvbG9yfTtcbiAgJHt0aXRsZU1hcmdpbnN9O1xuICAke3BhZGRpbmdEaXJ9OiAke0dFTF9TUEFDSU5HfTtcblxuICBAbWVkaWEgKG1pbi13aWR0aDogJHtHRUxfR1JPVVBfM19TQ1JFRU5fV0lEVEhfTUlOfSkge1xuICAgICR7cGFkZGluZ0Rpcn06ICR7R0VMX1NQQUNJTkdfREJMfTtcbiAgfVxuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5gO1xuXG5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIGlkOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2NyaXB0OiBzaGFwZShzY3JpcHRQcm9wVHlwZSkuaXNSZXF1aXJlZCxcbiAgc2VydmljZTogc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5jb25zdCBJbmRleExpbmtDdGEgPSBzdHlsZWQuc3BhbmBcbiAgJHsoeyBzY3JpcHQgfSkgPT4gc2NyaXB0ICYmIGdldExvbmdQcmltZXIoc2NyaXB0KX07XG4gICR7KHsgc2VydmljZSB9KSA9PiBnZXRTYW5zQm9sZChzZXJ2aWNlKX07XG4gICR7dGl0bGVNYXJnaW5zfTtcbiAgY29sb3I6ICR7Q19FQk9OfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy5iYWNrZ3JvdW5kQ29sb3J9O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAke3BhZGRpbmdSZXZlcnNlRGlyfTogJHtHRUxfU1BBQ0lOR19EQkx9O1xuXG4gIC8qIG5lZWRlZCB0byBlbnN1cmUgYWx3YXlzIHZlcnRpY2FsbHkgY2VudGVyZWQgZXZlbiB3aGVuIEZsZXhSb3cgY2hhbmdlcyBhbGlnbm1lbnQgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbkluZGV4TGlua0N0YS5wcm9wVHlwZXMgPSB7XG4gIGRpcjogb25lT2YoWydsdHInLCAncnRsJ10pLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGNvbnN0IFBsYWluVGl0bGUgPSAoe1xuICBjaGlsZHJlbjogdGl0bGUsXG4gIGRpcixcbiAgbGFiZWxJZCxcbiAgc2NyaXB0LFxuICBzZXJ2aWNlLFxuICBiYWNrZ3JvdW5kQ29sb3IsXG59KSA9PiAoXG4gIDxGbGV4Q29sdW1uPlxuICAgIDxGbGV4Um93PlxuICAgICAgPFRpdGxlXG4gICAgICAgIHNjcmlwdD17c2NyaXB0fVxuICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgaWQ9e2xhYmVsSWR9XG4gICAgICAgIHNlcnZpY2U9e3NlcnZpY2V9XG4gICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L1RpdGxlPlxuICAgIDwvRmxleFJvdz5cbiAgPC9GbGV4Q29sdW1uPlxuKTtcblxuUGxhaW5UaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgbGFiZWxJZDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cblBsYWluVGl0bGUuZGVmYXVsdFByb3BzID0ge1xuICBiYWNrZ3JvdW5kQ29sb3I6IENfR0hPU1QsXG59O1xuXG5leHBvcnQgY29uc3QgTGlua1RpdGxlID0gKHtcbiAgY2hpbGRyZW46IHRpdGxlLFxuICBkaXIsXG4gIGhyZWYsXG4gIGxhYmVsSWQsXG4gIGxpbmtUZXh0LFxuICBzY3JpcHQsXG4gIHNlcnZpY2UsXG4gIGJhY2tncm91bmRDb2xvcixcbn0pID0+IChcbiAgPFNlY3Rpb25MYWJlbExpbmsgaHJlZj17aHJlZn0gbGFiZWxJZD17bGFiZWxJZH0+XG4gICAgPEZsZXhDb2x1bW4+XG4gICAgICA8RmxleFJvdyByb2xlPVwidGV4dFwiPlxuICAgICAgICA8VGl0bGVcbiAgICAgICAgICBpZD17bGFiZWxJZH1cbiAgICAgICAgICBkaXI9e2Rpcn1cbiAgICAgICAgICBzY3JpcHQ9e3NjcmlwdH1cbiAgICAgICAgICBzZXJ2aWNlPXtzZXJ2aWNlfVxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17YmFja2dyb3VuZENvbG9yfVxuICAgICAgICA+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L1RpdGxlPlxuICAgICAgICA8SW5kZXhMaW5rQ3RhXG4gICAgICAgICAgZGlyPXtkaXJ9XG4gICAgICAgICAgc2NyaXB0PXtzY3JpcHR9XG4gICAgICAgICAgc2VydmljZT17c2VydmljZX1cbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e2JhY2tncm91bmRDb2xvcn1cbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICA+XG4gICAgICAgICAge2xpbmtUZXh0fVxuICAgICAgICA8L0luZGV4TGlua0N0YT5cbiAgICAgIDwvRmxleFJvdz5cbiAgICA8L0ZsZXhDb2x1bW4+XG4gIDwvU2VjdGlvbkxhYmVsTGluaz5cbik7XG5cbkxpbmtUaXRsZS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBzdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGlyOiBvbmVPZihbJ2x0cicsICdydGwnXSkuaXNSZXF1aXJlZCxcbiAgaHJlZjogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsSWQ6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBsaW5rVGV4dDogc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNjcmlwdDogc2hhcGUoc2NyaXB0UHJvcFR5cGUpLmlzUmVxdWlyZWQsXG4gIHNlcnZpY2U6IHN0cmluZy5pc1JlcXVpcmVkLFxuICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyxcbn07XG5cbkxpbmtUaXRsZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGJhY2tncm91bmRDb2xvcjogQ19HSE9TVCxcbn07XG4iXX0= */"));

IndexLinkCta.propTypes = {
  dir: oneOf(['ltr', 'rtl']).isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired
};
export var PlainTitle = function PlainTitle(_ref7) {
  var title = _ref7.children,
      dir = _ref7.dir,
      labelId = _ref7.labelId,
      script = _ref7.script,
      service = _ref7.service,
      backgroundColor = _ref7.backgroundColor;
  return /*#__PURE__*/React.createElement(FlexColumn, null, /*#__PURE__*/React.createElement(FlexRow, null, /*#__PURE__*/React.createElement(Title, {
    script: script,
    dir: dir,
    id: labelId,
    service: service,
    backgroundColor: backgroundColor
  }, title)));
};
PlainTitle.propTypes = {
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']).isRequired,
  labelId: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  backgroundColor: string
};
PlainTitle.defaultProps = {
  backgroundColor: C_GHOST
};
export var LinkTitle = function LinkTitle(_ref8) {
  var title = _ref8.children,
      dir = _ref8.dir,
      href = _ref8.href,
      labelId = _ref8.labelId,
      linkText = _ref8.linkText,
      script = _ref8.script,
      service = _ref8.service,
      backgroundColor = _ref8.backgroundColor;
  return /*#__PURE__*/React.createElement(SectionLabelLink, {
    href: href,
    labelId: labelId
  }, /*#__PURE__*/React.createElement(FlexColumn, null, /*#__PURE__*/React.createElement(FlexRow, {
    role: "text"
  }, /*#__PURE__*/React.createElement(Title, {
    id: labelId,
    dir: dir,
    script: script,
    service: service,
    backgroundColor: backgroundColor
  }, title), /*#__PURE__*/React.createElement(IndexLinkCta, {
    dir: dir,
    script: script,
    service: service,
    backgroundColor: backgroundColor,
    "aria-hidden": "true"
  }, linkText))));
};
LinkTitle.propTypes = {
  children: string.isRequired,
  dir: oneOf(['ltr', 'rtl']).isRequired,
  href: string.isRequired,
  labelId: string.isRequired,
  linkText: string.isRequired,
  script: shape(scriptPropType).isRequired,
  service: string.isRequired,
  backgroundColor: string
};
LinkTitle.defaultProps = {
  backgroundColor: C_GHOST
};