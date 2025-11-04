// Ayu Mirage Bordered Theme for ACE Editor
// Based on the Ayu Mirage color scheme with bordered editor style

import ace from 'brace';

/* eslint-disable no-multi-str */
ace.define("ace/theme/ayu-mirage",["require","exports","module","ace/lib/dom"], function(acequire, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-ayu-mirage";
exports.cssText = ".ace-ayu-mirage .ace_gutter {\
background: #1f2430;\
color: #707a8c;\
border-right: 1px solid #33415e\
}\
.ace-ayu-mirage .ace_print-margin {\
width: 1px;\
background: #33415e\
}\
.ace-ayu-mirage {\
background-color: #1f2430;\
color: #cbccc6;\
border: 1px solid #33415e;\
border-radius: 4px\
}\
.ace-ayu-mirage .ace_cursor {\
color: #ffcc66\
}\
.ace-ayu-mirage .ace_marker-layer .ace_selection {\
background: #33415e\
}\
.ace-ayu-mirage.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #1f2430\
}\
.ace-ayu-mirage .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-ayu-mirage .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #5ccfe6\
}\
.ace-ayu-mirage .ace_marker-layer .ace_active-line {\
background: #232834\
}\
.ace-ayu-mirage .ace_gutter-active-line {\
background-color: #232834\
}\
.ace-ayu-mirage .ace_marker-layer .ace_selected-word {\
border: 1px solid #33415e\
}\
.ace-ayu-mirage .ace_invisible {\
color: #33415e\
}\
.ace-ayu-mirage .ace_entity.ace_name.ace_tag,\
.ace-ayu-mirage .ace_keyword,\
.ace-ayu-mirage .ace_meta.ace_tag,\
.ace-ayu-mirage .ace_storage {\
color: #ffa759\
}\
.ace-ayu-mirage .ace_punctuation,\
.ace-ayu-mirage .ace_punctuation.ace_tag {\
color: #cbccc6\
}\
.ace-ayu-mirage .ace_constant.ace_character,\
.ace-ayu-mirage .ace_constant.ace_language,\
.ace-ayu-mirage .ace_constant.ace_numeric,\
.ace-ayu-mirage .ace_keyword.ace_other.ace_unit,\
.ace-ayu-mirage .ace_support.ace_constant,\
.ace-ayu-mirage .ace_variable.ace_parameter {\
color: #ffcc66\
}\
.ace-ayu-mirage .ace_constant.ace_other {\
color: #d4bfff\
}\
.ace-ayu-mirage .ace_invalid {\
color: #ff3333;\
background-color: #f51818\
}\
.ace-ayu-mirage .ace_invalid.ace_deprecated {\
color: #ff3333;\
background-color: #ffa759\
}\
.ace-ayu-mirage .ace_fold {\
background-color: #5ccfe6;\
border-color: #cbccc6\
}\
.ace-ayu-mirage .ace_entity.ace_name.ace_function,\
.ace-ayu-mirage .ace_support.ace_function,\
.ace-ayu-mirage .ace_variable {\
color: #5ccfe6\
}\
.ace-ayu-mirage .ace_support.ace_class,\
.ace-ayu-mirage .ace_support.ace_type {\
color: #ffd580\
}\
.ace-ayu-mirage .ace_heading,\
.ace-ayu-mirage .ace_markup.ace_heading,\
.ace-ayu-mirage .ace_string {\
color: #bae67e\
}\
.ace-ayu-mirage .ace_entity.ace_name.ace_tag,\
.ace-ayu-mirage .ace_entity.ace_other.ace_attribute-name,\
.ace-ayu-mirage .ace_meta.ace_tag,\
.ace-ayu-mirage .ace_string.ace_regexp,\
.ace-ayu-mirage .ace_variable {\
color: #ffa759\
}\
.ace-ayu-mirage .ace_comment {\
color: #5c6773;\
font-style: italic\
}\
.ace-ayu-mirage .ace_indent-guide {\
background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y\
}";

var dom = acequire("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
