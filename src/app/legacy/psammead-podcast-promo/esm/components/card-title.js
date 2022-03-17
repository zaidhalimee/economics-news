import _styled from "@emotion/styled/base";
import { GEL_SPACING } from '@bbc/gel-foundations/spacings';
import { getPica } from '@bbc/gel-foundations/typography';
import { getSerifMedium } from '@bbc/psammead-styles/font-styles';
import { C_EBON } from '@bbc/psammead-styles/colours';

var CardTitle = _styled("h3", process.env.NODE_ENV === "production" ? {
  target: "et66lmj0"
} : {
  target: "et66lmj0",
  label: "CardTitle"
})(function (_ref) {
  var script = _ref.script;
  return getPica(script);
}, ";", function (_ref2) {
  var service = _ref2.service;
  return getSerifMedium(service);
}, " margin-top:0;margin-bottom:", GEL_SPACING, ";color:", C_EBON, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQtdGl0bGUuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0yQiIsImZpbGUiOiIuLi8uLi9zcmMvY29tcG9uZW50cy9jYXJkLXRpdGxlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCB7IEdFTF9TUEFDSU5HIH0gZnJvbSAnQGJiYy9nZWwtZm91bmRhdGlvbnMvc3BhY2luZ3MnO1xuaW1wb3J0IHsgZ2V0UGljYSB9IGZyb20gJ0BiYmMvZ2VsLWZvdW5kYXRpb25zL3R5cG9ncmFwaHknO1xuaW1wb3J0IHsgZ2V0U2VyaWZNZWRpdW0gfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9mb250LXN0eWxlcyc7XG5pbXBvcnQgeyBDX0VCT04gfSBmcm9tICdAYmJjL3BzYW1tZWFkLXN0eWxlcy9jb2xvdXJzJztcblxuY29uc3QgQ2FyZFRpdGxlID0gc3R5bGVkLmgzYFxuICAkeyh7IHNjcmlwdCB9KSA9PiBnZXRQaWNhKHNjcmlwdCl9O1xuICAkeyh7IHNlcnZpY2UgfSkgPT4gZ2V0U2VyaWZNZWRpdW0oc2VydmljZSl9XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206ICR7R0VMX1NQQUNJTkd9O1xuICBjb2xvcjogJHtDX0VCT059O1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFRpdGxlO1xuIl19 */"));

export default CardTitle;