/* eslint-disable */
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop2 in b || (b = {}))
    if (__hasOwnProp.call(b, prop2))
      __defNormalProp(a, prop2, b[prop2]);
  if (__getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop2))
        __defNormalProp(a, prop2, b[prop2]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target2 = {};
  for (var prop2 in source)
    if (__hasOwnProp.call(source, prop2) && exclude.indexOf(prop2) < 0)
      target2[prop2] = source[prop2];
  if (source != null && __getOwnPropSymbols)
    for (var prop2 of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop2) < 0 && __propIsEnum.call(source, prop2))
        target2[prop2] = source[prop2];
    }
  return target2;
};

// node_modules/svgo/dist/svgo.browser.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var svgo = {};
var config$1 = {};
var plugins$1 = {};
var plugins = {};
var xast = {};
var lib$8 = {};
var lib$7 = {};
var stringify$2 = {};
var lib$6 = {};
var lib$5 = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
  var ElementType2;
  (function(ElementType3) {
    ElementType3["Root"] = "root";
    ElementType3["Text"] = "text";
    ElementType3["Directive"] = "directive";
    ElementType3["Comment"] = "comment";
    ElementType3["Script"] = "script";
    ElementType3["Style"] = "style";
    ElementType3["Tag"] = "tag";
    ElementType3["CDATA"] = "cdata";
    ElementType3["Doctype"] = "doctype";
  })(ElementType2 = exports.ElementType || (exports.ElementType = {}));
  function isTag2(elem) {
    return elem.type === ElementType2.Tag || elem.type === ElementType2.Script || elem.type === ElementType2.Style;
  }
  exports.isTag = isTag2;
  exports.Root = ElementType2.Root;
  exports.Text = ElementType2.Text;
  exports.Directive = ElementType2.Directive;
  exports.Comment = ElementType2.Comment;
  exports.Script = ElementType2.Script;
  exports.Style = ElementType2.Style;
  exports.Tag = ElementType2.Tag;
  exports.CDATA = ElementType2.CDATA;
  exports.Doctype = ElementType2.Doctype;
})(lib$5);
var node = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || /* @__PURE__ */ (function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
})();
var __assign$1 = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign$1 = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign$1.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$5;
var nodeTypes = /* @__PURE__ */ new Map([[domelementtype_1$1.ElementType.Tag, 1], [domelementtype_1$1.ElementType.Script, 1], [domelementtype_1$1.ElementType.Style, 1], [domelementtype_1$1.ElementType.Directive, 1], [domelementtype_1$1.ElementType.Text, 3], [domelementtype_1$1.ElementType.CDATA, 4], [domelementtype_1$1.ElementType.Comment, 8], [domelementtype_1$1.ElementType.Root, 9]]);
var Node = (function() {
  function Node2(type) {
    this.type = type;
    this.parent = null;
    this.prev = null;
    this.next = null;
    this.startIndex = null;
    this.endIndex = null;
  }
  Object.defineProperty(Node2.prototype, "nodeType", { get: function() {
    var _a;
    return (_a = nodeTypes.get(this.type)) !== null && _a !== void 0 ? _a : 1;
  }, enumerable: false, configurable: true });
  Object.defineProperty(Node2.prototype, "parentNode", { get: function() {
    return this.parent;
  }, set: function(parent) {
    this.parent = parent;
  }, enumerable: false, configurable: true });
  Object.defineProperty(Node2.prototype, "previousSibling", { get: function() {
    return this.prev;
  }, set: function(prev) {
    this.prev = prev;
  }, enumerable: false, configurable: true });
  Object.defineProperty(Node2.prototype, "nextSibling", { get: function() {
    return this.next;
  }, set: function(next) {
    this.next = next;
  }, enumerable: false, configurable: true });
  Node2.prototype.cloneNode = function(recursive) {
    if (recursive === void 0) {
      recursive = false;
    }
    return cloneNode(this, recursive);
  };
  return Node2;
})();
node.Node = Node;
var DataNode = (function(_super) {
  __extends(DataNode2, _super);
  function DataNode2(type, data) {
    var _this = _super.call(this, type) || this;
    _this.data = data;
    return _this;
  }
  Object.defineProperty(DataNode2.prototype, "nodeValue", { get: function() {
    return this.data;
  }, set: function(data) {
    this.data = data;
  }, enumerable: false, configurable: true });
  return DataNode2;
})(Node);
node.DataNode = DataNode;
var Text = (function(_super) {
  __extends(Text2, _super);
  function Text2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Text, data) || this;
  }
  return Text2;
})(DataNode);
node.Text = Text;
var Comment$1 = (function(_super) {
  __extends(Comment2, _super);
  function Comment2(data) {
    return _super.call(this, domelementtype_1$1.ElementType.Comment, data) || this;
  }
  return Comment2;
})(DataNode);
node.Comment = Comment$1;
var ProcessingInstruction = (function(_super) {
  __extends(ProcessingInstruction2, _super);
  function ProcessingInstruction2(name2, data) {
    var _this = _super.call(this, domelementtype_1$1.ElementType.Directive, data) || this;
    _this.name = name2;
    return _this;
  }
  return ProcessingInstruction2;
})(DataNode);
node.ProcessingInstruction = ProcessingInstruction;
var NodeWithChildren = (function(_super) {
  __extends(NodeWithChildren2, _super);
  function NodeWithChildren2(type, children) {
    var _this = _super.call(this, type) || this;
    _this.children = children;
    return _this;
  }
  Object.defineProperty(NodeWithChildren2.prototype, "firstChild", { get: function() {
    var _a;
    return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
  }, enumerable: false, configurable: true });
  Object.defineProperty(NodeWithChildren2.prototype, "lastChild", { get: function() {
    return this.children.length > 0 ? this.children[this.children.length - 1] : null;
  }, enumerable: false, configurable: true });
  Object.defineProperty(NodeWithChildren2.prototype, "childNodes", { get: function() {
    return this.children;
  }, set: function(children) {
    this.children = children;
  }, enumerable: false, configurable: true });
  return NodeWithChildren2;
})(Node);
node.NodeWithChildren = NodeWithChildren;
var Document = (function(_super) {
  __extends(Document2, _super);
  function Document2(children) {
    return _super.call(this, domelementtype_1$1.ElementType.Root, children) || this;
  }
  return Document2;
})(NodeWithChildren);
node.Document = Document;
var Element$1 = (function(_super) {
  __extends(Element2, _super);
  function Element2(name2, attribs, children, type) {
    if (children === void 0) {
      children = [];
    }
    if (type === void 0) {
      type = name2 === "script" ? domelementtype_1$1.ElementType.Script : name2 === "style" ? domelementtype_1$1.ElementType.Style : domelementtype_1$1.ElementType.Tag;
    }
    var _this = _super.call(this, type, children) || this;
    _this.name = name2;
    _this.attribs = attribs;
    return _this;
  }
  Object.defineProperty(Element2.prototype, "tagName", { get: function() {
    return this.name;
  }, set: function(name2) {
    this.name = name2;
  }, enumerable: false, configurable: true });
  Object.defineProperty(Element2.prototype, "attributes", { get: function() {
    var _this = this;
    return Object.keys(this.attribs).map((function(name2) {
      var _a, _b;
      return { name: name2, value: _this.attribs[name2], namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name2], prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name2] };
    }));
  }, enumerable: false, configurable: true });
  return Element2;
})(NodeWithChildren);
node.Element = Element$1;
function isTag$1(node2) {
  return (0, domelementtype_1$1.isTag)(node2);
}
node.isTag = isTag$1;
function isCDATA(node2) {
  return node2.type === domelementtype_1$1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
function isText(node2) {
  return node2.type === domelementtype_1$1.ElementType.Text;
}
node.isText = isText;
function isComment(node2) {
  return node2.type === domelementtype_1$1.ElementType.Comment;
}
node.isComment = isComment;
function isDirective(node2) {
  return node2.type === domelementtype_1$1.ElementType.Directive;
}
node.isDirective = isDirective;
function isDocument(node2) {
  return node2.type === domelementtype_1$1.ElementType.Root;
}
node.isDocument = isDocument;
function hasChildren(node2) {
  return Object.prototype.hasOwnProperty.call(node2, "children");
}
node.hasChildren = hasChildren;
function cloneNode(node2, recursive) {
  if (recursive === void 0) {
    recursive = false;
  }
  var result;
  if (isText(node2)) {
    result = new Text(node2.data);
  } else if (isComment(node2)) {
    result = new Comment$1(node2.data);
  } else if (isTag$1(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_1 = new Element$1(node2.name, __assign$1({}, node2.attribs), children);
    children.forEach((function(child) {
      return child.parent = clone_1;
    }));
    if (node2["x-attribsNamespace"]) {
      clone_1["x-attribsNamespace"] = __assign$1({}, node2["x-attribsNamespace"]);
    }
    if (node2["x-attribsPrefix"]) {
      clone_1["x-attribsPrefix"] = __assign$1({}, node2["x-attribsPrefix"]);
    }
    result = clone_1;
  } else if (isCDATA(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_2 = new NodeWithChildren(domelementtype_1$1.ElementType.CDATA, children);
    children.forEach((function(child) {
      return child.parent = clone_2;
    }));
    result = clone_2;
  } else if (isDocument(node2)) {
    var children = recursive ? cloneChildren(node2.children) : [];
    var clone_3 = new Document(children);
    children.forEach((function(child) {
      return child.parent = clone_3;
    }));
    if (node2["x-mode"]) {
      clone_3["x-mode"] = node2["x-mode"];
    }
    result = clone_3;
  } else if (isDirective(node2)) {
    var instruction = new ProcessingInstruction(node2.name, node2.data);
    if (node2["x-name"] != null) {
      instruction["x-name"] = node2["x-name"];
      instruction["x-publicId"] = node2["x-publicId"];
      instruction["x-systemId"] = node2["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error("Not implemented yet: " + node2.type);
  }
  result.startIndex = node2.startIndex;
  result.endIndex = node2.endIndex;
  return result;
}
node.cloneNode = cloneNode;
function cloneChildren(childs) {
  var children = childs.map((function(child) {
    return cloneNode(child, true);
  }));
  for (var i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding2(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.DomHandler = void 0;
  var domelementtype_12 = lib$5;
  var node_1 = node;
  __exportStar(node, exports);
  var reWhitespace = /\s+/g;
  var defaultOpts = { normalizeWhitespace: false, withStartIndices: false, withEndIndices: false, xmlMode: false };
  var DomHandler = (function() {
    function DomHandler2(callback, options, elementCB) {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
      if (typeof options === "function") {
        elementCB = options;
        options = defaultOpts;
      }
      if (typeof callback === "object") {
        options = callback;
        callback = void 0;
      }
      this.callback = callback !== null && callback !== void 0 ? callback : null;
      this.options = options !== null && options !== void 0 ? options : defaultOpts;
      this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
    }
    DomHandler2.prototype.onparserinit = function(parser2) {
      this.parser = parser2;
    };
    DomHandler2.prototype.onreset = function() {
      this.dom = [];
      this.root = new node_1.Document(this.dom);
      this.done = false;
      this.tagStack = [this.root];
      this.lastNode = null;
      this.parser = null;
    };
    DomHandler2.prototype.onend = function() {
      if (this.done) return;
      this.done = true;
      this.parser = null;
      this.handleCallback(null);
    };
    DomHandler2.prototype.onerror = function(error2) {
      this.handleCallback(error2);
    };
    DomHandler2.prototype.onclosetag = function() {
      this.lastNode = null;
      var elem = this.tagStack.pop();
      if (this.options.withEndIndices) {
        elem.endIndex = this.parser.endIndex;
      }
      if (this.elementCB) this.elementCB(elem);
    };
    DomHandler2.prototype.onopentag = function(name2, attribs) {
      var type = this.options.xmlMode ? domelementtype_12.ElementType.Tag : void 0;
      var element = new node_1.Element(name2, attribs, void 0, type);
      this.addNode(element);
      this.tagStack.push(element);
    };
    DomHandler2.prototype.ontext = function(data) {
      var normalizeWhitespace = this.options.normalizeWhitespace;
      var lastNode = this.lastNode;
      if (lastNode && lastNode.type === domelementtype_12.ElementType.Text) {
        if (normalizeWhitespace) {
          lastNode.data = (lastNode.data + data).replace(reWhitespace, " ");
        } else {
          lastNode.data += data;
        }
        if (this.options.withEndIndices) {
          lastNode.endIndex = this.parser.endIndex;
        }
      } else {
        if (normalizeWhitespace) {
          data = data.replace(reWhitespace, " ");
        }
        var node2 = new node_1.Text(data);
        this.addNode(node2);
        this.lastNode = node2;
      }
    };
    DomHandler2.prototype.oncomment = function(data) {
      if (this.lastNode && this.lastNode.type === domelementtype_12.ElementType.Comment) {
        this.lastNode.data += data;
        return;
      }
      var node2 = new node_1.Comment(data);
      this.addNode(node2);
      this.lastNode = node2;
    };
    DomHandler2.prototype.oncommentend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.oncdatastart = function() {
      var text = new node_1.Text("");
      var node2 = new node_1.NodeWithChildren(domelementtype_12.ElementType.CDATA, [text]);
      this.addNode(node2);
      text.parent = node2;
      this.lastNode = text;
    };
    DomHandler2.prototype.oncdataend = function() {
      this.lastNode = null;
    };
    DomHandler2.prototype.onprocessinginstruction = function(name2, data) {
      var node2 = new node_1.ProcessingInstruction(name2, data);
      this.addNode(node2);
    };
    DomHandler2.prototype.handleCallback = function(error2) {
      if (typeof this.callback === "function") {
        this.callback(error2, this.dom);
      } else if (error2) {
        throw error2;
      }
    };
    DomHandler2.prototype.addNode = function(node2) {
      var parent = this.tagStack[this.tagStack.length - 1];
      var previousSibling = parent.children[parent.children.length - 1];
      if (this.options.withStartIndices) {
        node2.startIndex = this.parser.startIndex;
      }
      if (this.options.withEndIndices) {
        node2.endIndex = this.parser.endIndex;
      }
      parent.children.push(node2);
      if (previousSibling) {
        node2.prev = previousSibling;
        previousSibling.next = node2;
      }
      node2.parent = parent;
      this.lastNode = null;
    };
    return DomHandler2;
  })();
  exports.DomHandler = DomHandler;
  exports.default = DomHandler;
})(lib$6);
var lib$4 = {};
var lib$3 = {};
var decode = {};
var Aacute$1 = "\xC1";
var aacute$1 = "\xE1";
var Abreve = "\u0102";
var abreve = "\u0103";
var ac = "\u223E";
var acd = "\u223F";
var acE = "\u223E\u0333";
var Acirc$1 = "\xC2";
var acirc$1 = "\xE2";
var acute$1 = "\xB4";
var Acy = "\u0410";
var acy = "\u0430";
var AElig$1 = "\xC6";
var aelig$1 = "\xE6";
var af = "\u2061";
var Afr = "\u{1D504}";
var afr = "\u{1D51E}";
var Agrave$1 = "\xC0";
var agrave$1 = "\xE0";
var alefsym = "\u2135";
var aleph = "\u2135";
var Alpha = "\u0391";
var alpha = "\u03B1";
var Amacr = "\u0100";
var amacr = "\u0101";
var amalg = "\u2A3F";
var amp$2 = "&";
var AMP$1 = "&";
var andand = "\u2A55";
var And = "\u2A53";
var and = "\u2227";
var andd = "\u2A5C";
var andslope = "\u2A58";
var andv = "\u2A5A";
var ang = "\u2220";
var ange = "\u29A4";
var angle = "\u2220";
var angmsdaa = "\u29A8";
var angmsdab = "\u29A9";
var angmsdac = "\u29AA";
var angmsdad = "\u29AB";
var angmsdae = "\u29AC";
var angmsdaf = "\u29AD";
var angmsdag = "\u29AE";
var angmsdah = "\u29AF";
var angmsd = "\u2221";
var angrt = "\u221F";
var angrtvb = "\u22BE";
var angrtvbd = "\u299D";
var angsph = "\u2222";
var angst = "\xC5";
var angzarr = "\u237C";
var Aogon = "\u0104";
var aogon = "\u0105";
var Aopf = "\u{1D538}";
var aopf = "\u{1D552}";
var apacir = "\u2A6F";
var ap = "\u2248";
var apE = "\u2A70";
var ape = "\u224A";
var apid = "\u224B";
var apos$1 = "'";
var ApplyFunction = "\u2061";
var approx = "\u2248";
var approxeq = "\u224A";
var Aring$1 = "\xC5";
var aring$1 = "\xE5";
var Ascr = "\u{1D49C}";
var ascr = "\u{1D4B6}";
var Assign = "\u2254";
var ast = "*";
var asymp = "\u2248";
var asympeq = "\u224D";
var Atilde$1 = "\xC3";
var atilde$1 = "\xE3";
var Auml$1 = "\xC4";
var auml$1 = "\xE4";
var awconint = "\u2233";
var awint = "\u2A11";
var backcong = "\u224C";
var backepsilon = "\u03F6";
var backprime = "\u2035";
var backsim = "\u223D";
var backsimeq = "\u22CD";
var Backslash = "\u2216";
var Barv = "\u2AE7";
var barvee = "\u22BD";
var barwed = "\u2305";
var Barwed = "\u2306";
var barwedge = "\u2305";
var bbrk = "\u23B5";
var bbrktbrk = "\u23B6";
var bcong = "\u224C";
var Bcy = "\u0411";
var bcy = "\u0431";
var bdquo = "\u201E";
var becaus = "\u2235";
var because = "\u2235";
var Because = "\u2235";
var bemptyv = "\u29B0";
var bepsi = "\u03F6";
var bernou = "\u212C";
var Bernoullis = "\u212C";
var Beta = "\u0392";
var beta = "\u03B2";
var beth = "\u2136";
var between = "\u226C";
var Bfr = "\u{1D505}";
var bfr = "\u{1D51F}";
var bigcap = "\u22C2";
var bigcirc = "\u25EF";
var bigcup = "\u22C3";
var bigodot = "\u2A00";
var bigoplus = "\u2A01";
var bigotimes = "\u2A02";
var bigsqcup = "\u2A06";
var bigstar = "\u2605";
var bigtriangledown = "\u25BD";
var bigtriangleup = "\u25B3";
var biguplus = "\u2A04";
var bigvee = "\u22C1";
var bigwedge = "\u22C0";
var bkarow = "\u290D";
var blacklozenge = "\u29EB";
var blacksquare = "\u25AA";
var blacktriangle = "\u25B4";
var blacktriangledown = "\u25BE";
var blacktriangleleft = "\u25C2";
var blacktriangleright = "\u25B8";
var blank = "\u2423";
var blk12 = "\u2592";
var blk14 = "\u2591";
var blk34 = "\u2593";
var block = "\u2588";
var bne = "=\u20E5";
var bnequiv = "\u2261\u20E5";
var bNot = "\u2AED";
var bnot = "\u2310";
var Bopf = "\u{1D539}";
var bopf = "\u{1D553}";
var bot = "\u22A5";
var bottom = "\u22A5";
var bowtie = "\u22C8";
var boxbox = "\u29C9";
var boxdl = "\u2510";
var boxdL = "\u2555";
var boxDl = "\u2556";
var boxDL = "\u2557";
var boxdr = "\u250C";
var boxdR = "\u2552";
var boxDr = "\u2553";
var boxDR = "\u2554";
var boxh = "\u2500";
var boxH = "\u2550";
var boxhd = "\u252C";
var boxHd = "\u2564";
var boxhD = "\u2565";
var boxHD = "\u2566";
var boxhu = "\u2534";
var boxHu = "\u2567";
var boxhU = "\u2568";
var boxHU = "\u2569";
var boxminus = "\u229F";
var boxplus = "\u229E";
var boxtimes = "\u22A0";
var boxul = "\u2518";
var boxuL = "\u255B";
var boxUl = "\u255C";
var boxUL = "\u255D";
var boxur = "\u2514";
var boxuR = "\u2558";
var boxUr = "\u2559";
var boxUR = "\u255A";
var boxv = "\u2502";
var boxV = "\u2551";
var boxvh = "\u253C";
var boxvH = "\u256A";
var boxVh = "\u256B";
var boxVH = "\u256C";
var boxvl = "\u2524";
var boxvL = "\u2561";
var boxVl = "\u2562";
var boxVL = "\u2563";
var boxvr = "\u251C";
var boxvR = "\u255E";
var boxVr = "\u255F";
var boxVR = "\u2560";
var bprime = "\u2035";
var breve = "\u02D8";
var Breve = "\u02D8";
var brvbar$1 = "\xA6";
var bscr = "\u{1D4B7}";
var Bscr = "\u212C";
var bsemi = "\u204F";
var bsim = "\u223D";
var bsime = "\u22CD";
var bsolb = "\u29C5";
var bsol = "\\";
var bsolhsub = "\u27C8";
var bull = "\u2022";
var bullet = "\u2022";
var bump = "\u224E";
var bumpE = "\u2AAE";
var bumpe = "\u224F";
var Bumpeq = "\u224E";
var bumpeq = "\u224F";
var Cacute = "\u0106";
var cacute = "\u0107";
var capand = "\u2A44";
var capbrcup = "\u2A49";
var capcap = "\u2A4B";
var cap = "\u2229";
var Cap = "\u22D2";
var capcup = "\u2A47";
var capdot = "\u2A40";
var CapitalDifferentialD = "\u2145";
var caps = "\u2229\uFE00";
var caret = "\u2041";
var caron = "\u02C7";
var Cayleys = "\u212D";
var ccaps = "\u2A4D";
var Ccaron = "\u010C";
var ccaron = "\u010D";
var Ccedil$1 = "\xC7";
var ccedil$1 = "\xE7";
var Ccirc = "\u0108";
var ccirc = "\u0109";
var Cconint = "\u2230";
var ccups = "\u2A4C";
var ccupssm = "\u2A50";
var Cdot = "\u010A";
var cdot = "\u010B";
var cedil$1 = "\xB8";
var Cedilla = "\xB8";
var cemptyv = "\u29B2";
var cent$1 = "\xA2";
var centerdot = "\xB7";
var CenterDot = "\xB7";
var cfr = "\u{1D520}";
var Cfr = "\u212D";
var CHcy = "\u0427";
var chcy = "\u0447";
var check = "\u2713";
var checkmark = "\u2713";
var Chi = "\u03A7";
var chi = "\u03C7";
var circ = "\u02C6";
var circeq = "\u2257";
var circlearrowleft = "\u21BA";
var circlearrowright = "\u21BB";
var circledast = "\u229B";
var circledcirc = "\u229A";
var circleddash = "\u229D";
var CircleDot = "\u2299";
var circledR = "\xAE";
var circledS = "\u24C8";
var CircleMinus = "\u2296";
var CirclePlus = "\u2295";
var CircleTimes = "\u2297";
var cir = "\u25CB";
var cirE = "\u29C3";
var cire = "\u2257";
var cirfnint = "\u2A10";
var cirmid = "\u2AEF";
var cirscir = "\u29C2";
var ClockwiseContourIntegral = "\u2232";
var CloseCurlyDoubleQuote = "\u201D";
var CloseCurlyQuote = "\u2019";
var clubs = "\u2663";
var clubsuit = "\u2663";
var colon = ":";
var Colon = "\u2237";
var Colone = "\u2A74";
var colone = "\u2254";
var coloneq = "\u2254";
var comma = ",";
var commat = "@";
var comp = "\u2201";
var compfn = "\u2218";
var complement = "\u2201";
var complexes = "\u2102";
var cong = "\u2245";
var congdot = "\u2A6D";
var Congruent = "\u2261";
var conint = "\u222E";
var Conint = "\u222F";
var ContourIntegral = "\u222E";
var copf = "\u{1D554}";
var Copf = "\u2102";
var coprod = "\u2210";
var Coproduct = "\u2210";
var copy$2 = "\xA9";
var COPY$1 = "\xA9";
var copysr = "\u2117";
var CounterClockwiseContourIntegral = "\u2233";
var crarr = "\u21B5";
var cross$1 = "\u2717";
var Cross = "\u2A2F";
var Cscr = "\u{1D49E}";
var cscr = "\u{1D4B8}";
var csub = "\u2ACF";
var csube = "\u2AD1";
var csup = "\u2AD0";
var csupe = "\u2AD2";
var ctdot = "\u22EF";
var cudarrl = "\u2938";
var cudarrr = "\u2935";
var cuepr = "\u22DE";
var cuesc = "\u22DF";
var cularr = "\u21B6";
var cularrp = "\u293D";
var cupbrcap = "\u2A48";
var cupcap = "\u2A46";
var CupCap = "\u224D";
var cup = "\u222A";
var Cup = "\u22D3";
var cupcup = "\u2A4A";
var cupdot = "\u228D";
var cupor = "\u2A45";
var cups = "\u222A\uFE00";
var curarr = "\u21B7";
var curarrm = "\u293C";
var curlyeqprec = "\u22DE";
var curlyeqsucc = "\u22DF";
var curlyvee = "\u22CE";
var curlywedge = "\u22CF";
var curren$1 = "\xA4";
var curvearrowleft = "\u21B6";
var curvearrowright = "\u21B7";
var cuvee = "\u22CE";
var cuwed = "\u22CF";
var cwconint = "\u2232";
var cwint = "\u2231";
var cylcty = "\u232D";
var dagger = "\u2020";
var Dagger = "\u2021";
var daleth = "\u2138";
var darr = "\u2193";
var Darr = "\u21A1";
var dArr = "\u21D3";
var dash = "\u2010";
var Dashv = "\u2AE4";
var dashv = "\u22A3";
var dbkarow = "\u290F";
var dblac = "\u02DD";
var Dcaron = "\u010E";
var dcaron = "\u010F";
var Dcy = "\u0414";
var dcy = "\u0434";
var ddagger = "\u2021";
var ddarr = "\u21CA";
var DD = "\u2145";
var dd = "\u2146";
var DDotrahd = "\u2911";
var ddotseq = "\u2A77";
var deg$1 = "\xB0";
var Del = "\u2207";
var Delta = "\u0394";
var delta = "\u03B4";
var demptyv = "\u29B1";
var dfisht = "\u297F";
var Dfr = "\u{1D507}";
var dfr = "\u{1D521}";
var dHar = "\u2965";
var dharl = "\u21C3";
var dharr = "\u21C2";
var DiacriticalAcute = "\xB4";
var DiacriticalDot = "\u02D9";
var DiacriticalDoubleAcute = "\u02DD";
var DiacriticalGrave = "`";
var DiacriticalTilde = "\u02DC";
var diam = "\u22C4";
var diamond = "\u22C4";
var Diamond = "\u22C4";
var diamondsuit = "\u2666";
var diams = "\u2666";
var die = "\xA8";
var DifferentialD = "\u2146";
var digamma = "\u03DD";
var disin = "\u22F2";
var div = "\xF7";
var divide$1 = "\xF7";
var divideontimes = "\u22C7";
var divonx = "\u22C7";
var DJcy = "\u0402";
var djcy = "\u0452";
var dlcorn = "\u231E";
var dlcrop = "\u230D";
var dollar = "$";
var Dopf = "\u{1D53B}";
var dopf = "\u{1D555}";
var Dot = "\xA8";
var dot$1 = "\u02D9";
var DotDot = "\u20DC";
var doteq = "\u2250";
var doteqdot = "\u2251";
var DotEqual = "\u2250";
var dotminus = "\u2238";
var dotplus = "\u2214";
var dotsquare = "\u22A1";
var doublebarwedge = "\u2306";
var DoubleContourIntegral = "\u222F";
var DoubleDot = "\xA8";
var DoubleDownArrow = "\u21D3";
var DoubleLeftArrow = "\u21D0";
var DoubleLeftRightArrow = "\u21D4";
var DoubleLeftTee = "\u2AE4";
var DoubleLongLeftArrow = "\u27F8";
var DoubleLongLeftRightArrow = "\u27FA";
var DoubleLongRightArrow = "\u27F9";
var DoubleRightArrow = "\u21D2";
var DoubleRightTee = "\u22A8";
var DoubleUpArrow = "\u21D1";
var DoubleUpDownArrow = "\u21D5";
var DoubleVerticalBar = "\u2225";
var DownArrowBar = "\u2913";
var downarrow = "\u2193";
var DownArrow = "\u2193";
var Downarrow = "\u21D3";
var DownArrowUpArrow = "\u21F5";
var DownBreve = "\u0311";
var downdownarrows = "\u21CA";
var downharpoonleft = "\u21C3";
var downharpoonright = "\u21C2";
var DownLeftRightVector = "\u2950";
var DownLeftTeeVector = "\u295E";
var DownLeftVectorBar = "\u2956";
var DownLeftVector = "\u21BD";
var DownRightTeeVector = "\u295F";
var DownRightVectorBar = "\u2957";
var DownRightVector = "\u21C1";
var DownTeeArrow = "\u21A7";
var DownTee = "\u22A4";
var drbkarow = "\u2910";
var drcorn = "\u231F";
var drcrop = "\u230C";
var Dscr = "\u{1D49F}";
var dscr = "\u{1D4B9}";
var DScy = "\u0405";
var dscy = "\u0455";
var dsol = "\u29F6";
var Dstrok = "\u0110";
var dstrok = "\u0111";
var dtdot = "\u22F1";
var dtri = "\u25BF";
var dtrif = "\u25BE";
var duarr = "\u21F5";
var duhar = "\u296F";
var dwangle = "\u29A6";
var DZcy = "\u040F";
var dzcy = "\u045F";
var dzigrarr = "\u27FF";
var Eacute$1 = "\xC9";
var eacute$1 = "\xE9";
var easter = "\u2A6E";
var Ecaron = "\u011A";
var ecaron = "\u011B";
var Ecirc$1 = "\xCA";
var ecirc$1 = "\xEA";
var ecir = "\u2256";
var ecolon = "\u2255";
var Ecy = "\u042D";
var ecy = "\u044D";
var eDDot = "\u2A77";
var Edot = "\u0116";
var edot = "\u0117";
var eDot = "\u2251";
var ee = "\u2147";
var efDot = "\u2252";
var Efr = "\u{1D508}";
var efr = "\u{1D522}";
var eg = "\u2A9A";
var Egrave$1 = "\xC8";
var egrave$1 = "\xE8";
var egs = "\u2A96";
var egsdot = "\u2A98";
var el = "\u2A99";
var Element = "\u2208";
var elinters = "\u23E7";
var ell = "\u2113";
var els = "\u2A95";
var elsdot = "\u2A97";
var Emacr = "\u0112";
var emacr = "\u0113";
var empty = "\u2205";
var emptyset = "\u2205";
var EmptySmallSquare = "\u25FB";
var emptyv = "\u2205";
var EmptyVerySmallSquare = "\u25AB";
var emsp13 = "\u2004";
var emsp14 = "\u2005";
var emsp = "\u2003";
var ENG = "\u014A";
var eng = "\u014B";
var ensp = "\u2002";
var Eogon = "\u0118";
var eogon = "\u0119";
var Eopf = "\u{1D53C}";
var eopf = "\u{1D556}";
var epar = "\u22D5";
var eparsl = "\u29E3";
var eplus = "\u2A71";
var epsi = "\u03B5";
var Epsilon = "\u0395";
var epsilon = "\u03B5";
var epsiv = "\u03F5";
var eqcirc = "\u2256";
var eqcolon = "\u2255";
var eqsim = "\u2242";
var eqslantgtr = "\u2A96";
var eqslantless = "\u2A95";
var Equal = "\u2A75";
var equals = "=";
var EqualTilde = "\u2242";
var equest = "\u225F";
var Equilibrium = "\u21CC";
var equiv = "\u2261";
var equivDD = "\u2A78";
var eqvparsl = "\u29E5";
var erarr = "\u2971";
var erDot = "\u2253";
var escr = "\u212F";
var Escr = "\u2130";
var esdot = "\u2250";
var Esim = "\u2A73";
var esim = "\u2242";
var Eta = "\u0397";
var eta = "\u03B7";
var ETH$1 = "\xD0";
var eth$1 = "\xF0";
var Euml$1 = "\xCB";
var euml$1 = "\xEB";
var euro = "\u20AC";
var excl = "!";
var exist = "\u2203";
var Exists = "\u2203";
var expectation = "\u2130";
var exponentiale = "\u2147";
var ExponentialE = "\u2147";
var fallingdotseq = "\u2252";
var Fcy = "\u0424";
var fcy = "\u0444";
var female = "\u2640";
var ffilig = "\uFB03";
var fflig = "\uFB00";
var ffllig = "\uFB04";
var Ffr = "\u{1D509}";
var ffr = "\u{1D523}";
var filig = "\uFB01";
var FilledSmallSquare = "\u25FC";
var FilledVerySmallSquare = "\u25AA";
var fjlig = "fj";
var flat = "\u266D";
var fllig = "\uFB02";
var fltns = "\u25B1";
var fnof = "\u0192";
var Fopf = "\u{1D53D}";
var fopf = "\u{1D557}";
var forall = "\u2200";
var ForAll = "\u2200";
var fork = "\u22D4";
var forkv = "\u2AD9";
var Fouriertrf = "\u2131";
var fpartint = "\u2A0D";
var frac12$1 = "\xBD";
var frac13 = "\u2153";
var frac14$1 = "\xBC";
var frac15 = "\u2155";
var frac16 = "\u2159";
var frac18 = "\u215B";
var frac23 = "\u2154";
var frac25 = "\u2156";
var frac34$1 = "\xBE";
var frac35 = "\u2157";
var frac38 = "\u215C";
var frac45 = "\u2158";
var frac56 = "\u215A";
var frac58 = "\u215D";
var frac78 = "\u215E";
var frasl = "\u2044";
var frown = "\u2322";
var fscr = "\u{1D4BB}";
var Fscr = "\u2131";
var gacute = "\u01F5";
var Gamma = "\u0393";
var gamma = "\u03B3";
var Gammad = "\u03DC";
var gammad = "\u03DD";
var gap = "\u2A86";
var Gbreve = "\u011E";
var gbreve = "\u011F";
var Gcedil = "\u0122";
var Gcirc = "\u011C";
var gcirc = "\u011D";
var Gcy = "\u0413";
var gcy = "\u0433";
var Gdot = "\u0120";
var gdot = "\u0121";
var ge = "\u2265";
var gE = "\u2267";
var gEl = "\u2A8C";
var gel = "\u22DB";
var geq = "\u2265";
var geqq = "\u2267";
var geqslant = "\u2A7E";
var gescc = "\u2AA9";
var ges = "\u2A7E";
var gesdot = "\u2A80";
var gesdoto = "\u2A82";
var gesdotol = "\u2A84";
var gesl = "\u22DB\uFE00";
var gesles = "\u2A94";
var Gfr = "\u{1D50A}";
var gfr = "\u{1D524}";
var gg = "\u226B";
var Gg = "\u22D9";
var ggg = "\u22D9";
var gimel = "\u2137";
var GJcy = "\u0403";
var gjcy = "\u0453";
var gla = "\u2AA5";
var gl = "\u2277";
var glE = "\u2A92";
var glj = "\u2AA4";
var gnap = "\u2A8A";
var gnapprox = "\u2A8A";
var gne = "\u2A88";
var gnE = "\u2269";
var gneq = "\u2A88";
var gneqq = "\u2269";
var gnsim = "\u22E7";
var Gopf = "\u{1D53E}";
var gopf = "\u{1D558}";
var grave = "`";
var GreaterEqual = "\u2265";
var GreaterEqualLess = "\u22DB";
var GreaterFullEqual = "\u2267";
var GreaterGreater = "\u2AA2";
var GreaterLess = "\u2277";
var GreaterSlantEqual = "\u2A7E";
var GreaterTilde = "\u2273";
var Gscr = "\u{1D4A2}";
var gscr = "\u210A";
var gsim = "\u2273";
var gsime = "\u2A8E";
var gsiml = "\u2A90";
var gtcc = "\u2AA7";
var gtcir = "\u2A7A";
var gt$2 = ">";
var GT$1 = ">";
var Gt = "\u226B";
var gtdot = "\u22D7";
var gtlPar = "\u2995";
var gtquest = "\u2A7C";
var gtrapprox = "\u2A86";
var gtrarr = "\u2978";
var gtrdot = "\u22D7";
var gtreqless = "\u22DB";
var gtreqqless = "\u2A8C";
var gtrless = "\u2277";
var gtrsim = "\u2273";
var gvertneqq = "\u2269\uFE00";
var gvnE = "\u2269\uFE00";
var Hacek = "\u02C7";
var hairsp = "\u200A";
var half = "\xBD";
var hamilt = "\u210B";
var HARDcy = "\u042A";
var hardcy = "\u044A";
var harrcir = "\u2948";
var harr = "\u2194";
var hArr = "\u21D4";
var harrw = "\u21AD";
var Hat = "^";
var hbar = "\u210F";
var Hcirc = "\u0124";
var hcirc = "\u0125";
var hearts = "\u2665";
var heartsuit = "\u2665";
var hellip = "\u2026";
var hercon = "\u22B9";
var hfr = "\u{1D525}";
var Hfr = "\u210C";
var HilbertSpace = "\u210B";
var hksearow = "\u2925";
var hkswarow = "\u2926";
var hoarr = "\u21FF";
var homtht = "\u223B";
var hookleftarrow = "\u21A9";
var hookrightarrow = "\u21AA";
var hopf = "\u{1D559}";
var Hopf = "\u210D";
var horbar = "\u2015";
var HorizontalLine = "\u2500";
var hscr = "\u{1D4BD}";
var Hscr = "\u210B";
var hslash = "\u210F";
var Hstrok = "\u0126";
var hstrok = "\u0127";
var HumpDownHump = "\u224E";
var HumpEqual = "\u224F";
var hybull = "\u2043";
var hyphen = "\u2010";
var Iacute$1 = "\xCD";
var iacute$1 = "\xED";
var ic = "\u2063";
var Icirc$1 = "\xCE";
var icirc$1 = "\xEE";
var Icy = "\u0418";
var icy = "\u0438";
var Idot = "\u0130";
var IEcy = "\u0415";
var iecy = "\u0435";
var iexcl$1 = "\xA1";
var iff = "\u21D4";
var ifr = "\u{1D526}";
var Ifr = "\u2111";
var Igrave$1 = "\xCC";
var igrave$1 = "\xEC";
var ii = "\u2148";
var iiiint = "\u2A0C";
var iiint = "\u222D";
var iinfin = "\u29DC";
var iiota = "\u2129";
var IJlig = "\u0132";
var ijlig = "\u0133";
var Imacr = "\u012A";
var imacr = "\u012B";
var image = "\u2111";
var ImaginaryI = "\u2148";
var imagline = "\u2110";
var imagpart = "\u2111";
var imath = "\u0131";
var Im = "\u2111";
var imof = "\u22B7";
var imped = "\u01B5";
var Implies = "\u21D2";
var incare = "\u2105";
var infin = "\u221E";
var infintie = "\u29DD";
var inodot = "\u0131";
var intcal = "\u22BA";
var int = "\u222B";
var Int = "\u222C";
var integers = "\u2124";
var Integral = "\u222B";
var intercal = "\u22BA";
var Intersection = "\u22C2";
var intlarhk = "\u2A17";
var intprod = "\u2A3C";
var InvisibleComma = "\u2063";
var InvisibleTimes = "\u2062";
var IOcy = "\u0401";
var iocy = "\u0451";
var Iogon = "\u012E";
var iogon = "\u012F";
var Iopf = "\u{1D540}";
var iopf = "\u{1D55A}";
var Iota = "\u0399";
var iota = "\u03B9";
var iprod = "\u2A3C";
var iquest$1 = "\xBF";
var iscr = "\u{1D4BE}";
var Iscr = "\u2110";
var isin = "\u2208";
var isindot = "\u22F5";
var isinE = "\u22F9";
var isins = "\u22F4";
var isinsv = "\u22F3";
var isinv = "\u2208";
var it = "\u2062";
var Itilde = "\u0128";
var itilde = "\u0129";
var Iukcy = "\u0406";
var iukcy = "\u0456";
var Iuml$1 = "\xCF";
var iuml$1 = "\xEF";
var Jcirc = "\u0134";
var jcirc = "\u0135";
var Jcy = "\u0419";
var jcy = "\u0439";
var Jfr = "\u{1D50D}";
var jfr = "\u{1D527}";
var jmath = "\u0237";
var Jopf = "\u{1D541}";
var jopf = "\u{1D55B}";
var Jscr = "\u{1D4A5}";
var jscr = "\u{1D4BF}";
var Jsercy = "\u0408";
var jsercy = "\u0458";
var Jukcy = "\u0404";
var jukcy = "\u0454";
var Kappa = "\u039A";
var kappa = "\u03BA";
var kappav = "\u03F0";
var Kcedil = "\u0136";
var kcedil = "\u0137";
var Kcy = "\u041A";
var kcy = "\u043A";
var Kfr = "\u{1D50E}";
var kfr = "\u{1D528}";
var kgreen = "\u0138";
var KHcy = "\u0425";
var khcy = "\u0445";
var KJcy = "\u040C";
var kjcy = "\u045C";
var Kopf = "\u{1D542}";
var kopf = "\u{1D55C}";
var Kscr = "\u{1D4A6}";
var kscr = "\u{1D4C0}";
var lAarr = "\u21DA";
var Lacute = "\u0139";
var lacute = "\u013A";
var laemptyv = "\u29B4";
var lagran = "\u2112";
var Lambda = "\u039B";
var lambda = "\u03BB";
var lang = "\u27E8";
var Lang = "\u27EA";
var langd = "\u2991";
var langle = "\u27E8";
var lap = "\u2A85";
var Laplacetrf = "\u2112";
var laquo$1 = "\xAB";
var larrb = "\u21E4";
var larrbfs = "\u291F";
var larr = "\u2190";
var Larr = "\u219E";
var lArr = "\u21D0";
var larrfs = "\u291D";
var larrhk = "\u21A9";
var larrlp = "\u21AB";
var larrpl = "\u2939";
var larrsim = "\u2973";
var larrtl = "\u21A2";
var latail = "\u2919";
var lAtail = "\u291B";
var lat = "\u2AAB";
var late = "\u2AAD";
var lates = "\u2AAD\uFE00";
var lbarr = "\u290C";
var lBarr = "\u290E";
var lbbrk = "\u2772";
var lbrace = "{";
var lbrack = "[";
var lbrke = "\u298B";
var lbrksld = "\u298F";
var lbrkslu = "\u298D";
var Lcaron = "\u013D";
var lcaron = "\u013E";
var Lcedil = "\u013B";
var lcedil = "\u013C";
var lceil = "\u2308";
var lcub = "{";
var Lcy = "\u041B";
var lcy = "\u043B";
var ldca = "\u2936";
var ldquo = "\u201C";
var ldquor = "\u201E";
var ldrdhar = "\u2967";
var ldrushar = "\u294B";
var ldsh = "\u21B2";
var le = "\u2264";
var lE = "\u2266";
var LeftAngleBracket = "\u27E8";
var LeftArrowBar = "\u21E4";
var leftarrow = "\u2190";
var LeftArrow = "\u2190";
var Leftarrow = "\u21D0";
var LeftArrowRightArrow = "\u21C6";
var leftarrowtail = "\u21A2";
var LeftCeiling = "\u2308";
var LeftDoubleBracket = "\u27E6";
var LeftDownTeeVector = "\u2961";
var LeftDownVectorBar = "\u2959";
var LeftDownVector = "\u21C3";
var LeftFloor = "\u230A";
var leftharpoondown = "\u21BD";
var leftharpoonup = "\u21BC";
var leftleftarrows = "\u21C7";
var leftrightarrow = "\u2194";
var LeftRightArrow = "\u2194";
var Leftrightarrow = "\u21D4";
var leftrightarrows = "\u21C6";
var leftrightharpoons = "\u21CB";
var leftrightsquigarrow = "\u21AD";
var LeftRightVector = "\u294E";
var LeftTeeArrow = "\u21A4";
var LeftTee = "\u22A3";
var LeftTeeVector = "\u295A";
var leftthreetimes = "\u22CB";
var LeftTriangleBar = "\u29CF";
var LeftTriangle = "\u22B2";
var LeftTriangleEqual = "\u22B4";
var LeftUpDownVector = "\u2951";
var LeftUpTeeVector = "\u2960";
var LeftUpVectorBar = "\u2958";
var LeftUpVector = "\u21BF";
var LeftVectorBar = "\u2952";
var LeftVector = "\u21BC";
var lEg = "\u2A8B";
var leg = "\u22DA";
var leq = "\u2264";
var leqq = "\u2266";
var leqslant = "\u2A7D";
var lescc = "\u2AA8";
var les = "\u2A7D";
var lesdot = "\u2A7F";
var lesdoto = "\u2A81";
var lesdotor = "\u2A83";
var lesg = "\u22DA\uFE00";
var lesges = "\u2A93";
var lessapprox = "\u2A85";
var lessdot = "\u22D6";
var lesseqgtr = "\u22DA";
var lesseqqgtr = "\u2A8B";
var LessEqualGreater = "\u22DA";
var LessFullEqual = "\u2266";
var LessGreater = "\u2276";
var lessgtr = "\u2276";
var LessLess = "\u2AA1";
var lesssim = "\u2272";
var LessSlantEqual = "\u2A7D";
var LessTilde = "\u2272";
var lfisht = "\u297C";
var lfloor = "\u230A";
var Lfr = "\u{1D50F}";
var lfr = "\u{1D529}";
var lg = "\u2276";
var lgE = "\u2A91";
var lHar = "\u2962";
var lhard = "\u21BD";
var lharu = "\u21BC";
var lharul = "\u296A";
var lhblk = "\u2584";
var LJcy = "\u0409";
var ljcy = "\u0459";
var llarr = "\u21C7";
var ll = "\u226A";
var Ll = "\u22D8";
var llcorner = "\u231E";
var Lleftarrow = "\u21DA";
var llhard = "\u296B";
var lltri = "\u25FA";
var Lmidot = "\u013F";
var lmidot = "\u0140";
var lmoustache = "\u23B0";
var lmoust = "\u23B0";
var lnap = "\u2A89";
var lnapprox = "\u2A89";
var lne = "\u2A87";
var lnE = "\u2268";
var lneq = "\u2A87";
var lneqq = "\u2268";
var lnsim = "\u22E6";
var loang = "\u27EC";
var loarr = "\u21FD";
var lobrk = "\u27E6";
var longleftarrow = "\u27F5";
var LongLeftArrow = "\u27F5";
var Longleftarrow = "\u27F8";
var longleftrightarrow = "\u27F7";
var LongLeftRightArrow = "\u27F7";
var Longleftrightarrow = "\u27FA";
var longmapsto = "\u27FC";
var longrightarrow = "\u27F6";
var LongRightArrow = "\u27F6";
var Longrightarrow = "\u27F9";
var looparrowleft = "\u21AB";
var looparrowright = "\u21AC";
var lopar = "\u2985";
var Lopf = "\u{1D543}";
var lopf = "\u{1D55D}";
var loplus = "\u2A2D";
var lotimes = "\u2A34";
var lowast = "\u2217";
var lowbar = "_";
var LowerLeftArrow = "\u2199";
var LowerRightArrow = "\u2198";
var loz = "\u25CA";
var lozenge = "\u25CA";
var lozf = "\u29EB";
var lpar = "(";
var lparlt = "\u2993";
var lrarr = "\u21C6";
var lrcorner = "\u231F";
var lrhar = "\u21CB";
var lrhard = "\u296D";
var lrm = "\u200E";
var lrtri = "\u22BF";
var lsaquo = "\u2039";
var lscr = "\u{1D4C1}";
var Lscr = "\u2112";
var lsh = "\u21B0";
var Lsh = "\u21B0";
var lsim = "\u2272";
var lsime = "\u2A8D";
var lsimg = "\u2A8F";
var lsqb = "[";
var lsquo = "\u2018";
var lsquor = "\u201A";
var Lstrok = "\u0141";
var lstrok = "\u0142";
var ltcc = "\u2AA6";
var ltcir = "\u2A79";
var lt$2 = "<";
var LT$1 = "<";
var Lt = "\u226A";
var ltdot = "\u22D6";
var lthree = "\u22CB";
var ltimes = "\u22C9";
var ltlarr = "\u2976";
var ltquest = "\u2A7B";
var ltri = "\u25C3";
var ltrie = "\u22B4";
var ltrif = "\u25C2";
var ltrPar = "\u2996";
var lurdshar = "\u294A";
var luruhar = "\u2966";
var lvertneqq = "\u2268\uFE00";
var lvnE = "\u2268\uFE00";
var macr$1 = "\xAF";
var male = "\u2642";
var malt = "\u2720";
var maltese = "\u2720";
var map = "\u21A6";
var mapsto = "\u21A6";
var mapstodown = "\u21A7";
var mapstoleft = "\u21A4";
var mapstoup = "\u21A5";
var marker = "\u25AE";
var mcomma = "\u2A29";
var Mcy = "\u041C";
var mcy = "\u043C";
var mdash = "\u2014";
var mDDot = "\u223A";
var measuredangle = "\u2221";
var MediumSpace = "\u205F";
var Mellintrf = "\u2133";
var Mfr = "\u{1D510}";
var mfr = "\u{1D52A}";
var mho = "\u2127";
var micro$1 = "\xB5";
var midast = "*";
var midcir = "\u2AF0";
var mid = "\u2223";
var middot$1 = "\xB7";
var minusb = "\u229F";
var minus$1 = "\u2212";
var minusd = "\u2238";
var minusdu = "\u2A2A";
var MinusPlus = "\u2213";
var mlcp = "\u2ADB";
var mldr = "\u2026";
var mnplus = "\u2213";
var models = "\u22A7";
var Mopf = "\u{1D544}";
var mopf = "\u{1D55E}";
var mp = "\u2213";
var mscr = "\u{1D4C2}";
var Mscr = "\u2133";
var mstpos = "\u223E";
var Mu = "\u039C";
var mu = "\u03BC";
var multimap = "\u22B8";
var mumap = "\u22B8";
var nabla = "\u2207";
var Nacute = "\u0143";
var nacute = "\u0144";
var nang = "\u2220\u20D2";
var nap = "\u2249";
var napE = "\u2A70\u0338";
var napid = "\u224B\u0338";
var napos = "\u0149";
var napprox = "\u2249";
var natural = "\u266E";
var naturals = "\u2115";
var natur = "\u266E";
var nbsp$1 = "\xA0";
var nbump = "\u224E\u0338";
var nbumpe = "\u224F\u0338";
var ncap = "\u2A43";
var Ncaron = "\u0147";
var ncaron = "\u0148";
var Ncedil = "\u0145";
var ncedil = "\u0146";
var ncong = "\u2247";
var ncongdot = "\u2A6D\u0338";
var ncup = "\u2A42";
var Ncy = "\u041D";
var ncy = "\u043D";
var ndash = "\u2013";
var nearhk = "\u2924";
var nearr = "\u2197";
var neArr = "\u21D7";
var nearrow = "\u2197";
var ne = "\u2260";
var nedot = "\u2250\u0338";
var NegativeMediumSpace = "\u200B";
var NegativeThickSpace = "\u200B";
var NegativeThinSpace = "\u200B";
var NegativeVeryThinSpace = "\u200B";
var nequiv = "\u2262";
var nesear = "\u2928";
var nesim = "\u2242\u0338";
var NestedGreaterGreater = "\u226B";
var NestedLessLess = "\u226A";
var NewLine = "\n";
var nexist = "\u2204";
var nexists = "\u2204";
var Nfr = "\u{1D511}";
var nfr = "\u{1D52B}";
var ngE = "\u2267\u0338";
var nge = "\u2271";
var ngeq = "\u2271";
var ngeqq = "\u2267\u0338";
var ngeqslant = "\u2A7E\u0338";
var nges = "\u2A7E\u0338";
var nGg = "\u22D9\u0338";
var ngsim = "\u2275";
var nGt = "\u226B\u20D2";
var ngt = "\u226F";
var ngtr = "\u226F";
var nGtv = "\u226B\u0338";
var nharr = "\u21AE";
var nhArr = "\u21CE";
var nhpar = "\u2AF2";
var ni = "\u220B";
var nis = "\u22FC";
var nisd = "\u22FA";
var niv = "\u220B";
var NJcy = "\u040A";
var njcy = "\u045A";
var nlarr = "\u219A";
var nlArr = "\u21CD";
var nldr = "\u2025";
var nlE = "\u2266\u0338";
var nle = "\u2270";
var nleftarrow = "\u219A";
var nLeftarrow = "\u21CD";
var nleftrightarrow = "\u21AE";
var nLeftrightarrow = "\u21CE";
var nleq = "\u2270";
var nleqq = "\u2266\u0338";
var nleqslant = "\u2A7D\u0338";
var nles = "\u2A7D\u0338";
var nless = "\u226E";
var nLl = "\u22D8\u0338";
var nlsim = "\u2274";
var nLt = "\u226A\u20D2";
var nlt = "\u226E";
var nltri = "\u22EA";
var nltrie = "\u22EC";
var nLtv = "\u226A\u0338";
var nmid = "\u2224";
var NoBreak = "\u2060";
var NonBreakingSpace = "\xA0";
var nopf = "\u{1D55F}";
var Nopf = "\u2115";
var Not = "\u2AEC";
var not$1 = "\xAC";
var NotCongruent = "\u2262";
var NotCupCap = "\u226D";
var NotDoubleVerticalBar = "\u2226";
var NotElement = "\u2209";
var NotEqual = "\u2260";
var NotEqualTilde = "\u2242\u0338";
var NotExists = "\u2204";
var NotGreater = "\u226F";
var NotGreaterEqual = "\u2271";
var NotGreaterFullEqual = "\u2267\u0338";
var NotGreaterGreater = "\u226B\u0338";
var NotGreaterLess = "\u2279";
var NotGreaterSlantEqual = "\u2A7E\u0338";
var NotGreaterTilde = "\u2275";
var NotHumpDownHump = "\u224E\u0338";
var NotHumpEqual = "\u224F\u0338";
var notin = "\u2209";
var notindot = "\u22F5\u0338";
var notinE = "\u22F9\u0338";
var notinva = "\u2209";
var notinvb = "\u22F7";
var notinvc = "\u22F6";
var NotLeftTriangleBar = "\u29CF\u0338";
var NotLeftTriangle = "\u22EA";
var NotLeftTriangleEqual = "\u22EC";
var NotLess = "\u226E";
var NotLessEqual = "\u2270";
var NotLessGreater = "\u2278";
var NotLessLess = "\u226A\u0338";
var NotLessSlantEqual = "\u2A7D\u0338";
var NotLessTilde = "\u2274";
var NotNestedGreaterGreater = "\u2AA2\u0338";
var NotNestedLessLess = "\u2AA1\u0338";
var notni = "\u220C";
var notniva = "\u220C";
var notnivb = "\u22FE";
var notnivc = "\u22FD";
var NotPrecedes = "\u2280";
var NotPrecedesEqual = "\u2AAF\u0338";
var NotPrecedesSlantEqual = "\u22E0";
var NotReverseElement = "\u220C";
var NotRightTriangleBar = "\u29D0\u0338";
var NotRightTriangle = "\u22EB";
var NotRightTriangleEqual = "\u22ED";
var NotSquareSubset = "\u228F\u0338";
var NotSquareSubsetEqual = "\u22E2";
var NotSquareSuperset = "\u2290\u0338";
var NotSquareSupersetEqual = "\u22E3";
var NotSubset = "\u2282\u20D2";
var NotSubsetEqual = "\u2288";
var NotSucceeds = "\u2281";
var NotSucceedsEqual = "\u2AB0\u0338";
var NotSucceedsSlantEqual = "\u22E1";
var NotSucceedsTilde = "\u227F\u0338";
var NotSuperset = "\u2283\u20D2";
var NotSupersetEqual = "\u2289";
var NotTilde = "\u2241";
var NotTildeEqual = "\u2244";
var NotTildeFullEqual = "\u2247";
var NotTildeTilde = "\u2249";
var NotVerticalBar = "\u2224";
var nparallel = "\u2226";
var npar = "\u2226";
var nparsl = "\u2AFD\u20E5";
var npart = "\u2202\u0338";
var npolint = "\u2A14";
var npr = "\u2280";
var nprcue = "\u22E0";
var nprec = "\u2280";
var npreceq = "\u2AAF\u0338";
var npre = "\u2AAF\u0338";
var nrarrc = "\u2933\u0338";
var nrarr = "\u219B";
var nrArr = "\u21CF";
var nrarrw = "\u219D\u0338";
var nrightarrow = "\u219B";
var nRightarrow = "\u21CF";
var nrtri = "\u22EB";
var nrtrie = "\u22ED";
var nsc = "\u2281";
var nsccue = "\u22E1";
var nsce = "\u2AB0\u0338";
var Nscr = "\u{1D4A9}";
var nscr = "\u{1D4C3}";
var nshortmid = "\u2224";
var nshortparallel = "\u2226";
var nsim = "\u2241";
var nsime = "\u2244";
var nsimeq = "\u2244";
var nsmid = "\u2224";
var nspar = "\u2226";
var nsqsube = "\u22E2";
var nsqsupe = "\u22E3";
var nsub = "\u2284";
var nsubE = "\u2AC5\u0338";
var nsube = "\u2288";
var nsubset = "\u2282\u20D2";
var nsubseteq = "\u2288";
var nsubseteqq = "\u2AC5\u0338";
var nsucc = "\u2281";
var nsucceq = "\u2AB0\u0338";
var nsup = "\u2285";
var nsupE = "\u2AC6\u0338";
var nsupe = "\u2289";
var nsupset = "\u2283\u20D2";
var nsupseteq = "\u2289";
var nsupseteqq = "\u2AC6\u0338";
var ntgl = "\u2279";
var Ntilde$1 = "\xD1";
var ntilde$1 = "\xF1";
var ntlg = "\u2278";
var ntriangleleft = "\u22EA";
var ntrianglelefteq = "\u22EC";
var ntriangleright = "\u22EB";
var ntrianglerighteq = "\u22ED";
var Nu = "\u039D";
var nu = "\u03BD";
var num = "#";
var numero = "\u2116";
var numsp = "\u2007";
var nvap = "\u224D\u20D2";
var nvdash = "\u22AC";
var nvDash = "\u22AD";
var nVdash = "\u22AE";
var nVDash = "\u22AF";
var nvge = "\u2265\u20D2";
var nvgt = ">\u20D2";
var nvHarr = "\u2904";
var nvinfin = "\u29DE";
var nvlArr = "\u2902";
var nvle = "\u2264\u20D2";
var nvlt = "<\u20D2";
var nvltrie = "\u22B4\u20D2";
var nvrArr = "\u2903";
var nvrtrie = "\u22B5\u20D2";
var nvsim = "\u223C\u20D2";
var nwarhk = "\u2923";
var nwarr = "\u2196";
var nwArr = "\u21D6";
var nwarrow = "\u2196";
var nwnear = "\u2927";
var Oacute$1 = "\xD3";
var oacute$1 = "\xF3";
var oast = "\u229B";
var Ocirc$1 = "\xD4";
var ocirc$1 = "\xF4";
var ocir = "\u229A";
var Ocy = "\u041E";
var ocy = "\u043E";
var odash = "\u229D";
var Odblac = "\u0150";
var odblac = "\u0151";
var odiv = "\u2A38";
var odot = "\u2299";
var odsold = "\u29BC";
var OElig = "\u0152";
var oelig = "\u0153";
var ofcir = "\u29BF";
var Ofr = "\u{1D512}";
var ofr = "\u{1D52C}";
var ogon = "\u02DB";
var Ograve$1 = "\xD2";
var ograve$1 = "\xF2";
var ogt = "\u29C1";
var ohbar = "\u29B5";
var ohm = "\u03A9";
var oint = "\u222E";
var olarr = "\u21BA";
var olcir = "\u29BE";
var olcross = "\u29BB";
var oline = "\u203E";
var olt = "\u29C0";
var Omacr = "\u014C";
var omacr = "\u014D";
var Omega = "\u03A9";
var omega = "\u03C9";
var Omicron = "\u039F";
var omicron = "\u03BF";
var omid = "\u29B6";
var ominus = "\u2296";
var Oopf = "\u{1D546}";
var oopf = "\u{1D560}";
var opar = "\u29B7";
var OpenCurlyDoubleQuote = "\u201C";
var OpenCurlyQuote = "\u2018";
var operp = "\u29B9";
var oplus = "\u2295";
var orarr = "\u21BB";
var Or = "\u2A54";
var or = "\u2228";
var ord = "\u2A5D";
var order = "\u2134";
var orderof = "\u2134";
var ordf$1 = "\xAA";
var ordm$1 = "\xBA";
var origof = "\u22B6";
var oror = "\u2A56";
var orslope = "\u2A57";
var orv = "\u2A5B";
var oS = "\u24C8";
var Oscr = "\u{1D4AA}";
var oscr = "\u2134";
var Oslash$1 = "\xD8";
var oslash$1 = "\xF8";
var osol = "\u2298";
var Otilde$1 = "\xD5";
var otilde$1 = "\xF5";
var otimesas = "\u2A36";
var Otimes = "\u2A37";
var otimes = "\u2297";
var Ouml$1 = "\xD6";
var ouml$1 = "\xF6";
var ovbar = "\u233D";
var OverBar = "\u203E";
var OverBrace = "\u23DE";
var OverBracket = "\u23B4";
var OverParenthesis = "\u23DC";
var para$1 = "\xB6";
var parallel = "\u2225";
var par = "\u2225";
var parsim = "\u2AF3";
var parsl = "\u2AFD";
var part = "\u2202";
var PartialD = "\u2202";
var Pcy = "\u041F";
var pcy = "\u043F";
var percnt = "%";
var period = ".";
var permil = "\u2030";
var perp = "\u22A5";
var pertenk = "\u2031";
var Pfr = "\u{1D513}";
var pfr = "\u{1D52D}";
var Phi = "\u03A6";
var phi = "\u03C6";
var phiv = "\u03D5";
var phmmat = "\u2133";
var phone = "\u260E";
var Pi = "\u03A0";
var pi = "\u03C0";
var pitchfork = "\u22D4";
var piv = "\u03D6";
var planck = "\u210F";
var planckh = "\u210E";
var plankv = "\u210F";
var plusacir = "\u2A23";
var plusb = "\u229E";
var pluscir = "\u2A22";
var plus = "+";
var plusdo = "\u2214";
var plusdu = "\u2A25";
var pluse = "\u2A72";
var PlusMinus = "\xB1";
var plusmn$1 = "\xB1";
var plussim = "\u2A26";
var plustwo = "\u2A27";
var pm = "\xB1";
var Poincareplane = "\u210C";
var pointint = "\u2A15";
var popf = "\u{1D561}";
var Popf = "\u2119";
var pound$1 = "\xA3";
var prap = "\u2AB7";
var Pr = "\u2ABB";
var pr = "\u227A";
var prcue = "\u227C";
var precapprox = "\u2AB7";
var prec = "\u227A";
var preccurlyeq = "\u227C";
var Precedes = "\u227A";
var PrecedesEqual = "\u2AAF";
var PrecedesSlantEqual = "\u227C";
var PrecedesTilde = "\u227E";
var preceq = "\u2AAF";
var precnapprox = "\u2AB9";
var precneqq = "\u2AB5";
var precnsim = "\u22E8";
var pre = "\u2AAF";
var prE = "\u2AB3";
var precsim = "\u227E";
var prime = "\u2032";
var Prime = "\u2033";
var primes = "\u2119";
var prnap = "\u2AB9";
var prnE = "\u2AB5";
var prnsim = "\u22E8";
var prod = "\u220F";
var Product = "\u220F";
var profalar = "\u232E";
var profline = "\u2312";
var profsurf = "\u2313";
var prop = "\u221D";
var Proportional = "\u221D";
var Proportion = "\u2237";
var propto = "\u221D";
var prsim = "\u227E";
var prurel = "\u22B0";
var Pscr = "\u{1D4AB}";
var pscr = "\u{1D4C5}";
var Psi = "\u03A8";
var psi = "\u03C8";
var puncsp = "\u2008";
var Qfr = "\u{1D514}";
var qfr = "\u{1D52E}";
var qint = "\u2A0C";
var qopf = "\u{1D562}";
var Qopf = "\u211A";
var qprime = "\u2057";
var Qscr = "\u{1D4AC}";
var qscr = "\u{1D4C6}";
var quaternions = "\u210D";
var quatint = "\u2A16";
var quest = "?";
var questeq = "\u225F";
var quot$2 = '"';
var QUOT$1 = '"';
var rAarr = "\u21DB";
var race = "\u223D\u0331";
var Racute = "\u0154";
var racute = "\u0155";
var radic = "\u221A";
var raemptyv = "\u29B3";
var rang = "\u27E9";
var Rang = "\u27EB";
var rangd = "\u2992";
var range = "\u29A5";
var rangle = "\u27E9";
var raquo$1 = "\xBB";
var rarrap = "\u2975";
var rarrb = "\u21E5";
var rarrbfs = "\u2920";
var rarrc = "\u2933";
var rarr = "\u2192";
var Rarr = "\u21A0";
var rArr = "\u21D2";
var rarrfs = "\u291E";
var rarrhk = "\u21AA";
var rarrlp = "\u21AC";
var rarrpl = "\u2945";
var rarrsim = "\u2974";
var Rarrtl = "\u2916";
var rarrtl = "\u21A3";
var rarrw = "\u219D";
var ratail = "\u291A";
var rAtail = "\u291C";
var ratio = "\u2236";
var rationals = "\u211A";
var rbarr = "\u290D";
var rBarr = "\u290F";
var RBarr = "\u2910";
var rbbrk = "\u2773";
var rbrace = "}";
var rbrack = "]";
var rbrke = "\u298C";
var rbrksld = "\u298E";
var rbrkslu = "\u2990";
var Rcaron = "\u0158";
var rcaron = "\u0159";
var Rcedil = "\u0156";
var rcedil = "\u0157";
var rceil = "\u2309";
var rcub = "}";
var Rcy = "\u0420";
var rcy = "\u0440";
var rdca = "\u2937";
var rdldhar = "\u2969";
var rdquo = "\u201D";
var rdquor = "\u201D";
var rdsh = "\u21B3";
var real = "\u211C";
var realine = "\u211B";
var realpart = "\u211C";
var reals = "\u211D";
var Re = "\u211C";
var rect = "\u25AD";
var reg$1 = "\xAE";
var REG$1 = "\xAE";
var ReverseElement = "\u220B";
var ReverseEquilibrium = "\u21CB";
var ReverseUpEquilibrium = "\u296F";
var rfisht = "\u297D";
var rfloor = "\u230B";
var rfr = "\u{1D52F}";
var Rfr = "\u211C";
var rHar = "\u2964";
var rhard = "\u21C1";
var rharu = "\u21C0";
var rharul = "\u296C";
var Rho = "\u03A1";
var rho = "\u03C1";
var rhov = "\u03F1";
var RightAngleBracket = "\u27E9";
var RightArrowBar = "\u21E5";
var rightarrow = "\u2192";
var RightArrow = "\u2192";
var Rightarrow = "\u21D2";
var RightArrowLeftArrow = "\u21C4";
var rightarrowtail = "\u21A3";
var RightCeiling = "\u2309";
var RightDoubleBracket = "\u27E7";
var RightDownTeeVector = "\u295D";
var RightDownVectorBar = "\u2955";
var RightDownVector = "\u21C2";
var RightFloor = "\u230B";
var rightharpoondown = "\u21C1";
var rightharpoonup = "\u21C0";
var rightleftarrows = "\u21C4";
var rightleftharpoons = "\u21CC";
var rightrightarrows = "\u21C9";
var rightsquigarrow = "\u219D";
var RightTeeArrow = "\u21A6";
var RightTee = "\u22A2";
var RightTeeVector = "\u295B";
var rightthreetimes = "\u22CC";
var RightTriangleBar = "\u29D0";
var RightTriangle = "\u22B3";
var RightTriangleEqual = "\u22B5";
var RightUpDownVector = "\u294F";
var RightUpTeeVector = "\u295C";
var RightUpVectorBar = "\u2954";
var RightUpVector = "\u21BE";
var RightVectorBar = "\u2953";
var RightVector = "\u21C0";
var ring = "\u02DA";
var risingdotseq = "\u2253";
var rlarr = "\u21C4";
var rlhar = "\u21CC";
var rlm = "\u200F";
var rmoustache = "\u23B1";
var rmoust = "\u23B1";
var rnmid = "\u2AEE";
var roang = "\u27ED";
var roarr = "\u21FE";
var robrk = "\u27E7";
var ropar = "\u2986";
var ropf = "\u{1D563}";
var Ropf = "\u211D";
var roplus = "\u2A2E";
var rotimes = "\u2A35";
var RoundImplies = "\u2970";
var rpar = ")";
var rpargt = "\u2994";
var rppolint = "\u2A12";
var rrarr = "\u21C9";
var Rrightarrow = "\u21DB";
var rsaquo = "\u203A";
var rscr = "\u{1D4C7}";
var Rscr = "\u211B";
var rsh = "\u21B1";
var Rsh = "\u21B1";
var rsqb = "]";
var rsquo = "\u2019";
var rsquor = "\u2019";
var rthree = "\u22CC";
var rtimes = "\u22CA";
var rtri = "\u25B9";
var rtrie = "\u22B5";
var rtrif = "\u25B8";
var rtriltri = "\u29CE";
var RuleDelayed = "\u29F4";
var ruluhar = "\u2968";
var rx = "\u211E";
var Sacute = "\u015A";
var sacute = "\u015B";
var sbquo = "\u201A";
var scap = "\u2AB8";
var Scaron = "\u0160";
var scaron = "\u0161";
var Sc = "\u2ABC";
var sc = "\u227B";
var sccue = "\u227D";
var sce = "\u2AB0";
var scE = "\u2AB4";
var Scedil = "\u015E";
var scedil = "\u015F";
var Scirc = "\u015C";
var scirc = "\u015D";
var scnap = "\u2ABA";
var scnE = "\u2AB6";
var scnsim = "\u22E9";
var scpolint = "\u2A13";
var scsim = "\u227F";
var Scy = "\u0421";
var scy = "\u0441";
var sdotb = "\u22A1";
var sdot = "\u22C5";
var sdote = "\u2A66";
var searhk = "\u2925";
var searr = "\u2198";
var seArr = "\u21D8";
var searrow = "\u2198";
var sect$1 = "\xA7";
var semi = ";";
var seswar = "\u2929";
var setminus = "\u2216";
var setmn = "\u2216";
var sext = "\u2736";
var Sfr = "\u{1D516}";
var sfr = "\u{1D530}";
var sfrown = "\u2322";
var sharp = "\u266F";
var SHCHcy = "\u0429";
var shchcy = "\u0449";
var SHcy = "\u0428";
var shcy = "\u0448";
var ShortDownArrow = "\u2193";
var ShortLeftArrow = "\u2190";
var shortmid = "\u2223";
var shortparallel = "\u2225";
var ShortRightArrow = "\u2192";
var ShortUpArrow = "\u2191";
var shy$1 = "\xAD";
var Sigma = "\u03A3";
var sigma = "\u03C3";
var sigmaf = "\u03C2";
var sigmav = "\u03C2";
var sim = "\u223C";
var simdot = "\u2A6A";
var sime = "\u2243";
var simeq = "\u2243";
var simg = "\u2A9E";
var simgE = "\u2AA0";
var siml = "\u2A9D";
var simlE = "\u2A9F";
var simne = "\u2246";
var simplus = "\u2A24";
var simrarr = "\u2972";
var slarr = "\u2190";
var SmallCircle = "\u2218";
var smallsetminus = "\u2216";
var smashp = "\u2A33";
var smeparsl = "\u29E4";
var smid = "\u2223";
var smile = "\u2323";
var smt = "\u2AAA";
var smte = "\u2AAC";
var smtes = "\u2AAC\uFE00";
var SOFTcy = "\u042C";
var softcy = "\u044C";
var solbar = "\u233F";
var solb = "\u29C4";
var sol = "/";
var Sopf = "\u{1D54A}";
var sopf = "\u{1D564}";
var spades = "\u2660";
var spadesuit = "\u2660";
var spar = "\u2225";
var sqcap = "\u2293";
var sqcaps = "\u2293\uFE00";
var sqcup = "\u2294";
var sqcups = "\u2294\uFE00";
var Sqrt = "\u221A";
var sqsub = "\u228F";
var sqsube = "\u2291";
var sqsubset = "\u228F";
var sqsubseteq = "\u2291";
var sqsup = "\u2290";
var sqsupe = "\u2292";
var sqsupset = "\u2290";
var sqsupseteq = "\u2292";
var square = "\u25A1";
var Square = "\u25A1";
var SquareIntersection = "\u2293";
var SquareSubset = "\u228F";
var SquareSubsetEqual = "\u2291";
var SquareSuperset = "\u2290";
var SquareSupersetEqual = "\u2292";
var SquareUnion = "\u2294";
var squarf = "\u25AA";
var squ = "\u25A1";
var squf = "\u25AA";
var srarr = "\u2192";
var Sscr = "\u{1D4AE}";
var sscr = "\u{1D4C8}";
var ssetmn = "\u2216";
var ssmile = "\u2323";
var sstarf = "\u22C6";
var Star = "\u22C6";
var star = "\u2606";
var starf = "\u2605";
var straightepsilon = "\u03F5";
var straightphi = "\u03D5";
var strns = "\xAF";
var sub$1 = "\u2282";
var Sub = "\u22D0";
var subdot = "\u2ABD";
var subE = "\u2AC5";
var sube = "\u2286";
var subedot = "\u2AC3";
var submult = "\u2AC1";
var subnE = "\u2ACB";
var subne = "\u228A";
var subplus = "\u2ABF";
var subrarr = "\u2979";
var subset = "\u2282";
var Subset = "\u22D0";
var subseteq = "\u2286";
var subseteqq = "\u2AC5";
var SubsetEqual = "\u2286";
var subsetneq = "\u228A";
var subsetneqq = "\u2ACB";
var subsim = "\u2AC7";
var subsub = "\u2AD5";
var subsup = "\u2AD3";
var succapprox = "\u2AB8";
var succ = "\u227B";
var succcurlyeq = "\u227D";
var Succeeds = "\u227B";
var SucceedsEqual = "\u2AB0";
var SucceedsSlantEqual = "\u227D";
var SucceedsTilde = "\u227F";
var succeq = "\u2AB0";
var succnapprox = "\u2ABA";
var succneqq = "\u2AB6";
var succnsim = "\u22E9";
var succsim = "\u227F";
var SuchThat = "\u220B";
var sum = "\u2211";
var Sum = "\u2211";
var sung = "\u266A";
var sup1$1 = "\xB9";
var sup2$1 = "\xB2";
var sup3$1 = "\xB3";
var sup = "\u2283";
var Sup = "\u22D1";
var supdot = "\u2ABE";
var supdsub = "\u2AD8";
var supE = "\u2AC6";
var supe = "\u2287";
var supedot = "\u2AC4";
var Superset = "\u2283";
var SupersetEqual = "\u2287";
var suphsol = "\u27C9";
var suphsub = "\u2AD7";
var suplarr = "\u297B";
var supmult = "\u2AC2";
var supnE = "\u2ACC";
var supne = "\u228B";
var supplus = "\u2AC0";
var supset = "\u2283";
var Supset = "\u22D1";
var supseteq = "\u2287";
var supseteqq = "\u2AC6";
var supsetneq = "\u228B";
var supsetneqq = "\u2ACC";
var supsim = "\u2AC8";
var supsub = "\u2AD4";
var supsup = "\u2AD6";
var swarhk = "\u2926";
var swarr = "\u2199";
var swArr = "\u21D9";
var swarrow = "\u2199";
var swnwar = "\u292A";
var szlig$1 = "\xDF";
var Tab = "	";
var target = "\u2316";
var Tau = "\u03A4";
var tau = "\u03C4";
var tbrk = "\u23B4";
var Tcaron = "\u0164";
var tcaron = "\u0165";
var Tcedil = "\u0162";
var tcedil = "\u0163";
var Tcy = "\u0422";
var tcy = "\u0442";
var tdot = "\u20DB";
var telrec = "\u2315";
var Tfr = "\u{1D517}";
var tfr = "\u{1D531}";
var there4 = "\u2234";
var therefore = "\u2234";
var Therefore = "\u2234";
var Theta = "\u0398";
var theta = "\u03B8";
var thetasym = "\u03D1";
var thetav = "\u03D1";
var thickapprox = "\u2248";
var thicksim = "\u223C";
var ThickSpace = "\u205F\u200A";
var ThinSpace = "\u2009";
var thinsp = "\u2009";
var thkap = "\u2248";
var thksim = "\u223C";
var THORN$1 = "\xDE";
var thorn$1 = "\xFE";
var tilde = "\u02DC";
var Tilde = "\u223C";
var TildeEqual = "\u2243";
var TildeFullEqual = "\u2245";
var TildeTilde = "\u2248";
var timesbar = "\u2A31";
var timesb = "\u22A0";
var times$1 = "\xD7";
var timesd = "\u2A30";
var tint = "\u222D";
var toea = "\u2928";
var topbot = "\u2336";
var topcir = "\u2AF1";
var top = "\u22A4";
var Topf = "\u{1D54B}";
var topf = "\u{1D565}";
var topfork = "\u2ADA";
var tosa = "\u2929";
var tprime = "\u2034";
var trade = "\u2122";
var TRADE = "\u2122";
var triangle = "\u25B5";
var triangledown = "\u25BF";
var triangleleft = "\u25C3";
var trianglelefteq = "\u22B4";
var triangleq = "\u225C";
var triangleright = "\u25B9";
var trianglerighteq = "\u22B5";
var tridot = "\u25EC";
var trie = "\u225C";
var triminus = "\u2A3A";
var TripleDot = "\u20DB";
var triplus = "\u2A39";
var trisb = "\u29CD";
var tritime = "\u2A3B";
var trpezium = "\u23E2";
var Tscr = "\u{1D4AF}";
var tscr = "\u{1D4C9}";
var TScy = "\u0426";
var tscy = "\u0446";
var TSHcy = "\u040B";
var tshcy = "\u045B";
var Tstrok = "\u0166";
var tstrok = "\u0167";
var twixt = "\u226C";
var twoheadleftarrow = "\u219E";
var twoheadrightarrow = "\u21A0";
var Uacute$1 = "\xDA";
var uacute$1 = "\xFA";
var uarr = "\u2191";
var Uarr = "\u219F";
var uArr = "\u21D1";
var Uarrocir = "\u2949";
var Ubrcy = "\u040E";
var ubrcy = "\u045E";
var Ubreve = "\u016C";
var ubreve = "\u016D";
var Ucirc$1 = "\xDB";
var ucirc$1 = "\xFB";
var Ucy = "\u0423";
var ucy = "\u0443";
var udarr = "\u21C5";
var Udblac = "\u0170";
var udblac = "\u0171";
var udhar = "\u296E";
var ufisht = "\u297E";
var Ufr = "\u{1D518}";
var ufr = "\u{1D532}";
var Ugrave$1 = "\xD9";
var ugrave$1 = "\xF9";
var uHar = "\u2963";
var uharl = "\u21BF";
var uharr = "\u21BE";
var uhblk = "\u2580";
var ulcorn = "\u231C";
var ulcorner = "\u231C";
var ulcrop = "\u230F";
var ultri = "\u25F8";
var Umacr = "\u016A";
var umacr = "\u016B";
var uml$1 = "\xA8";
var UnderBar = "_";
var UnderBrace = "\u23DF";
var UnderBracket = "\u23B5";
var UnderParenthesis = "\u23DD";
var Union = "\u22C3";
var UnionPlus = "\u228E";
var Uogon = "\u0172";
var uogon = "\u0173";
var Uopf = "\u{1D54C}";
var uopf = "\u{1D566}";
var UpArrowBar = "\u2912";
var uparrow = "\u2191";
var UpArrow = "\u2191";
var Uparrow = "\u21D1";
var UpArrowDownArrow = "\u21C5";
var updownarrow = "\u2195";
var UpDownArrow = "\u2195";
var Updownarrow = "\u21D5";
var UpEquilibrium = "\u296E";
var upharpoonleft = "\u21BF";
var upharpoonright = "\u21BE";
var uplus = "\u228E";
var UpperLeftArrow = "\u2196";
var UpperRightArrow = "\u2197";
var upsi = "\u03C5";
var Upsi = "\u03D2";
var upsih = "\u03D2";
var Upsilon = "\u03A5";
var upsilon = "\u03C5";
var UpTeeArrow = "\u21A5";
var UpTee = "\u22A5";
var upuparrows = "\u21C8";
var urcorn = "\u231D";
var urcorner = "\u231D";
var urcrop = "\u230E";
var Uring = "\u016E";
var uring = "\u016F";
var urtri = "\u25F9";
var Uscr = "\u{1D4B0}";
var uscr = "\u{1D4CA}";
var utdot = "\u22F0";
var Utilde = "\u0168";
var utilde = "\u0169";
var utri = "\u25B5";
var utrif = "\u25B4";
var uuarr = "\u21C8";
var Uuml$1 = "\xDC";
var uuml$1 = "\xFC";
var uwangle = "\u29A7";
var vangrt = "\u299C";
var varepsilon = "\u03F5";
var varkappa = "\u03F0";
var varnothing = "\u2205";
var varphi = "\u03D5";
var varpi = "\u03D6";
var varpropto = "\u221D";
var varr = "\u2195";
var vArr = "\u21D5";
var varrho = "\u03F1";
var varsigma = "\u03C2";
var varsubsetneq = "\u228A\uFE00";
var varsubsetneqq = "\u2ACB\uFE00";
var varsupsetneq = "\u228B\uFE00";
var varsupsetneqq = "\u2ACC\uFE00";
var vartheta = "\u03D1";
var vartriangleleft = "\u22B2";
var vartriangleright = "\u22B3";
var vBar = "\u2AE8";
var Vbar = "\u2AEB";
var vBarv = "\u2AE9";
var Vcy = "\u0412";
var vcy = "\u0432";
var vdash = "\u22A2";
var vDash = "\u22A8";
var Vdash = "\u22A9";
var VDash = "\u22AB";
var Vdashl = "\u2AE6";
var veebar = "\u22BB";
var vee = "\u2228";
var Vee = "\u22C1";
var veeeq = "\u225A";
var vellip = "\u22EE";
var verbar = "|";
var Verbar = "\u2016";
var vert = "|";
var Vert = "\u2016";
var VerticalBar = "\u2223";
var VerticalLine = "|";
var VerticalSeparator = "\u2758";
var VerticalTilde = "\u2240";
var VeryThinSpace = "\u200A";
var Vfr = "\u{1D519}";
var vfr = "\u{1D533}";
var vltri = "\u22B2";
var vnsub = "\u2282\u20D2";
var vnsup = "\u2283\u20D2";
var Vopf = "\u{1D54D}";
var vopf = "\u{1D567}";
var vprop = "\u221D";
var vrtri = "\u22B3";
var Vscr = "\u{1D4B1}";
var vscr = "\u{1D4CB}";
var vsubnE = "\u2ACB\uFE00";
var vsubne = "\u228A\uFE00";
var vsupnE = "\u2ACC\uFE00";
var vsupne = "\u228B\uFE00";
var Vvdash = "\u22AA";
var vzigzag = "\u299A";
var Wcirc = "\u0174";
var wcirc = "\u0175";
var wedbar = "\u2A5F";
var wedge = "\u2227";
var Wedge = "\u22C0";
var wedgeq = "\u2259";
var weierp = "\u2118";
var Wfr = "\u{1D51A}";
var wfr = "\u{1D534}";
var Wopf = "\u{1D54E}";
var wopf = "\u{1D568}";
var wp = "\u2118";
var wr = "\u2240";
var wreath = "\u2240";
var Wscr = "\u{1D4B2}";
var wscr = "\u{1D4CC}";
var xcap = "\u22C2";
var xcirc = "\u25EF";
var xcup = "\u22C3";
var xdtri = "\u25BD";
var Xfr = "\u{1D51B}";
var xfr = "\u{1D535}";
var xharr = "\u27F7";
var xhArr = "\u27FA";
var Xi = "\u039E";
var xi = "\u03BE";
var xlarr = "\u27F5";
var xlArr = "\u27F8";
var xmap = "\u27FC";
var xnis = "\u22FB";
var xodot = "\u2A00";
var Xopf = "\u{1D54F}";
var xopf = "\u{1D569}";
var xoplus = "\u2A01";
var xotime = "\u2A02";
var xrarr = "\u27F6";
var xrArr = "\u27F9";
var Xscr = "\u{1D4B3}";
var xscr = "\u{1D4CD}";
var xsqcup = "\u2A06";
var xuplus = "\u2A04";
var xutri = "\u25B3";
var xvee = "\u22C1";
var xwedge = "\u22C0";
var Yacute$1 = "\xDD";
var yacute$1 = "\xFD";
var YAcy = "\u042F";
var yacy = "\u044F";
var Ycirc = "\u0176";
var ycirc = "\u0177";
var Ycy = "\u042B";
var ycy = "\u044B";
var yen$1 = "\xA5";
var Yfr = "\u{1D51C}";
var yfr = "\u{1D536}";
var YIcy = "\u0407";
var yicy = "\u0457";
var Yopf = "\u{1D550}";
var yopf = "\u{1D56A}";
var Yscr = "\u{1D4B4}";
var yscr = "\u{1D4CE}";
var YUcy = "\u042E";
var yucy = "\u044E";
var yuml$1 = "\xFF";
var Yuml = "\u0178";
var Zacute = "\u0179";
var zacute = "\u017A";
var Zcaron = "\u017D";
var zcaron = "\u017E";
var Zcy = "\u0417";
var zcy = "\u0437";
var Zdot = "\u017B";
var zdot = "\u017C";
var zeetrf = "\u2128";
var ZeroWidthSpace = "\u200B";
var Zeta = "\u0396";
var zeta = "\u03B6";
var zfr = "\u{1D537}";
var Zfr = "\u2128";
var ZHcy = "\u0416";
var zhcy = "\u0436";
var zigrarr = "\u21DD";
var zopf = "\u{1D56B}";
var Zopf = "\u2124";
var Zscr = "\u{1D4B5}";
var zscr = "\u{1D4CF}";
var zwj = "\u200D";
var zwnj = "\u200C";
var require$$1$1 = { Aacute: Aacute$1, aacute: aacute$1, Abreve, abreve, ac, acd, acE, Acirc: Acirc$1, acirc: acirc$1, acute: acute$1, Acy, acy, AElig: AElig$1, aelig: aelig$1, af, Afr, afr, Agrave: Agrave$1, agrave: agrave$1, alefsym, aleph, Alpha, alpha, Amacr, amacr, amalg, amp: amp$2, AMP: AMP$1, andand, And, and, andd, andslope, andv, ang, ange, angle, angmsdaa, angmsdab, angmsdac, angmsdad, angmsdae, angmsdaf, angmsdag, angmsdah, angmsd, angrt, angrtvb, angrtvbd, angsph, angst, angzarr, Aogon, aogon, Aopf, aopf, apacir, ap, apE, ape, apid, apos: apos$1, ApplyFunction, approx, approxeq, Aring: Aring$1, aring: aring$1, Ascr, ascr, Assign, ast, asymp, asympeq, Atilde: Atilde$1, atilde: atilde$1, Auml: Auml$1, auml: auml$1, awconint, awint, backcong, backepsilon, backprime, backsim, backsimeq, Backslash, Barv, barvee, barwed, Barwed, barwedge, bbrk, bbrktbrk, bcong, Bcy, bcy, bdquo, becaus, because, Because, bemptyv, bepsi, bernou, Bernoullis, Beta, beta, beth, between, Bfr, bfr, bigcap, bigcirc, bigcup, bigodot, bigoplus, bigotimes, bigsqcup, bigstar, bigtriangledown, bigtriangleup, biguplus, bigvee, bigwedge, bkarow, blacklozenge, blacksquare, blacktriangle, blacktriangledown, blacktriangleleft, blacktriangleright, blank, blk12, blk14, blk34, block, bne, bnequiv, bNot, bnot, Bopf, bopf, bot, bottom, bowtie, boxbox, boxdl, boxdL, boxDl, boxDL, boxdr, boxdR, boxDr, boxDR, boxh, boxH, boxhd, boxHd, boxhD, boxHD, boxhu, boxHu, boxhU, boxHU, boxminus, boxplus, boxtimes, boxul, boxuL, boxUl, boxUL, boxur, boxuR, boxUr, boxUR, boxv, boxV, boxvh, boxvH, boxVh, boxVH, boxvl, boxvL, boxVl, boxVL, boxvr, boxvR, boxVr, boxVR, bprime, breve, Breve, brvbar: brvbar$1, bscr, Bscr, bsemi, bsim, bsime, bsolb, bsol, bsolhsub, bull, bullet, bump, bumpE, bumpe, Bumpeq, bumpeq, Cacute, cacute, capand, capbrcup, capcap, cap, Cap, capcup, capdot, CapitalDifferentialD, caps, caret, caron, Cayleys, ccaps, Ccaron, ccaron, Ccedil: Ccedil$1, ccedil: ccedil$1, Ccirc, ccirc, Cconint, ccups, ccupssm, Cdot, cdot, cedil: cedil$1, Cedilla, cemptyv, cent: cent$1, centerdot, CenterDot, cfr, Cfr, CHcy, chcy, check, checkmark, Chi, chi, circ, circeq, circlearrowleft, circlearrowright, circledast, circledcirc, circleddash, CircleDot, circledR, circledS, CircleMinus, CirclePlus, CircleTimes, cir, cirE, cire, cirfnint, cirmid, cirscir, ClockwiseContourIntegral, CloseCurlyDoubleQuote, CloseCurlyQuote, clubs, clubsuit, colon, Colon, Colone, colone, coloneq, comma, commat, comp, compfn, complement, complexes, cong, congdot, Congruent, conint, Conint, ContourIntegral, copf, Copf, coprod, Coproduct, copy: copy$2, COPY: COPY$1, copysr, CounterClockwiseContourIntegral, crarr, cross: cross$1, Cross, Cscr, cscr, csub, csube, csup, csupe, ctdot, cudarrl, cudarrr, cuepr, cuesc, cularr, cularrp, cupbrcap, cupcap, CupCap, cup, Cup, cupcup, cupdot, cupor, cups, curarr, curarrm, curlyeqprec, curlyeqsucc, curlyvee, curlywedge, curren: curren$1, curvearrowleft, curvearrowright, cuvee, cuwed, cwconint, cwint, cylcty, dagger, Dagger, daleth, darr, Darr, dArr, dash, Dashv, dashv, dbkarow, dblac, Dcaron, dcaron, Dcy, dcy, ddagger, ddarr, DD, dd, DDotrahd, ddotseq, deg: deg$1, Del, Delta, delta, demptyv, dfisht, Dfr, dfr, dHar, dharl, dharr, DiacriticalAcute, DiacriticalDot, DiacriticalDoubleAcute, DiacriticalGrave, DiacriticalTilde, diam, diamond, Diamond, diamondsuit, diams, die, DifferentialD, digamma, disin, div, divide: divide$1, divideontimes, divonx, DJcy, djcy, dlcorn, dlcrop, dollar, Dopf, dopf, Dot, dot: dot$1, DotDot, doteq, doteqdot, DotEqual, dotminus, dotplus, dotsquare, doublebarwedge, DoubleContourIntegral, DoubleDot, DoubleDownArrow, DoubleLeftArrow, DoubleLeftRightArrow, DoubleLeftTee, DoubleLongLeftArrow, DoubleLongLeftRightArrow, DoubleLongRightArrow, DoubleRightArrow, DoubleRightTee, DoubleUpArrow, DoubleUpDownArrow, DoubleVerticalBar, DownArrowBar, downarrow, DownArrow, Downarrow, DownArrowUpArrow, DownBreve, downdownarrows, downharpoonleft, downharpoonright, DownLeftRightVector, DownLeftTeeVector, DownLeftVectorBar, DownLeftVector, DownRightTeeVector, DownRightVectorBar, DownRightVector, DownTeeArrow, DownTee, drbkarow, drcorn, drcrop, Dscr, dscr, DScy, dscy, dsol, Dstrok, dstrok, dtdot, dtri, dtrif, duarr, duhar, dwangle, DZcy, dzcy, dzigrarr, Eacute: Eacute$1, eacute: eacute$1, easter, Ecaron, ecaron, Ecirc: Ecirc$1, ecirc: ecirc$1, ecir, ecolon, Ecy, ecy, eDDot, Edot, edot, eDot, ee, efDot, Efr, efr, eg, Egrave: Egrave$1, egrave: egrave$1, egs, egsdot, el, Element, elinters, ell, els, elsdot, Emacr, emacr, empty, emptyset, EmptySmallSquare, emptyv, EmptyVerySmallSquare, emsp13, emsp14, emsp, ENG, eng, ensp, Eogon, eogon, Eopf, eopf, epar, eparsl, eplus, epsi, Epsilon, epsilon, epsiv, eqcirc, eqcolon, eqsim, eqslantgtr, eqslantless, Equal, equals, EqualTilde, equest, Equilibrium, equiv, equivDD, eqvparsl, erarr, erDot, escr, Escr, esdot, Esim, esim, Eta, eta, ETH: ETH$1, eth: eth$1, Euml: Euml$1, euml: euml$1, euro, excl, exist, Exists, expectation, exponentiale, ExponentialE, fallingdotseq, Fcy, fcy, female, ffilig, fflig, ffllig, Ffr, ffr, filig, FilledSmallSquare, FilledVerySmallSquare, fjlig, flat, fllig, fltns, fnof, Fopf, fopf, forall, ForAll, fork, forkv, Fouriertrf, fpartint, frac12: frac12$1, frac13, frac14: frac14$1, frac15, frac16, frac18, frac23, frac25, frac34: frac34$1, frac35, frac38, frac45, frac56, frac58, frac78, frasl, frown, fscr, Fscr, gacute, Gamma, gamma, Gammad, gammad, gap, Gbreve, gbreve, Gcedil, Gcirc, gcirc, Gcy, gcy, Gdot, gdot, ge, gE, gEl, gel, geq, geqq, geqslant, gescc, ges, gesdot, gesdoto, gesdotol, gesl, gesles, Gfr, gfr, gg, Gg, ggg, gimel, GJcy, gjcy, gla, gl, glE, glj, gnap, gnapprox, gne, gnE, gneq, gneqq, gnsim, Gopf, gopf, grave, GreaterEqual, GreaterEqualLess, GreaterFullEqual, GreaterGreater, GreaterLess, GreaterSlantEqual, GreaterTilde, Gscr, gscr, gsim, gsime, gsiml, gtcc, gtcir, gt: gt$2, GT: GT$1, Gt, gtdot, gtlPar, gtquest, gtrapprox, gtrarr, gtrdot, gtreqless, gtreqqless, gtrless, gtrsim, gvertneqq, gvnE, Hacek, hairsp, half, hamilt, HARDcy, hardcy, harrcir, harr, hArr, harrw, Hat, hbar, Hcirc, hcirc, hearts, heartsuit, hellip, hercon, hfr, Hfr, HilbertSpace, hksearow, hkswarow, hoarr, homtht, hookleftarrow, hookrightarrow, hopf, Hopf, horbar, HorizontalLine, hscr, Hscr, hslash, Hstrok, hstrok, HumpDownHump, HumpEqual, hybull, hyphen, Iacute: Iacute$1, iacute: iacute$1, ic, Icirc: Icirc$1, icirc: icirc$1, Icy, icy, Idot, IEcy, iecy, iexcl: iexcl$1, iff, ifr, Ifr, Igrave: Igrave$1, igrave: igrave$1, ii, iiiint, iiint, iinfin, iiota, IJlig, ijlig, Imacr, imacr, image, ImaginaryI, imagline, imagpart, imath, Im, imof, imped, Implies, incare, in: "\u2208", infin, infintie, inodot, intcal, int, Int, integers, Integral, intercal, Intersection, intlarhk, intprod, InvisibleComma, InvisibleTimes, IOcy, iocy, Iogon, iogon, Iopf, iopf, Iota, iota, iprod, iquest: iquest$1, iscr, Iscr, isin, isindot, isinE, isins, isinsv, isinv, it, Itilde, itilde, Iukcy, iukcy, Iuml: Iuml$1, iuml: iuml$1, Jcirc, jcirc, Jcy, jcy, Jfr, jfr, jmath, Jopf, jopf, Jscr, jscr, Jsercy, jsercy, Jukcy, jukcy, Kappa, kappa, kappav, Kcedil, kcedil, Kcy, kcy, Kfr, kfr, kgreen, KHcy, khcy, KJcy, kjcy, Kopf, kopf, Kscr, kscr, lAarr, Lacute, lacute, laemptyv, lagran, Lambda, lambda, lang, Lang, langd, langle, lap, Laplacetrf, laquo: laquo$1, larrb, larrbfs, larr, Larr, lArr, larrfs, larrhk, larrlp, larrpl, larrsim, larrtl, latail, lAtail, lat, late, lates, lbarr, lBarr, lbbrk, lbrace, lbrack, lbrke, lbrksld, lbrkslu, Lcaron, lcaron, Lcedil, lcedil, lceil, lcub, Lcy, lcy, ldca, ldquo, ldquor, ldrdhar, ldrushar, ldsh, le, lE, LeftAngleBracket, LeftArrowBar, leftarrow, LeftArrow, Leftarrow, LeftArrowRightArrow, leftarrowtail, LeftCeiling, LeftDoubleBracket, LeftDownTeeVector, LeftDownVectorBar, LeftDownVector, LeftFloor, leftharpoondown, leftharpoonup, leftleftarrows, leftrightarrow, LeftRightArrow, Leftrightarrow, leftrightarrows, leftrightharpoons, leftrightsquigarrow, LeftRightVector, LeftTeeArrow, LeftTee, LeftTeeVector, leftthreetimes, LeftTriangleBar, LeftTriangle, LeftTriangleEqual, LeftUpDownVector, LeftUpTeeVector, LeftUpVectorBar, LeftUpVector, LeftVectorBar, LeftVector, lEg, leg, leq, leqq, leqslant, lescc, les, lesdot, lesdoto, lesdotor, lesg, lesges, lessapprox, lessdot, lesseqgtr, lesseqqgtr, LessEqualGreater, LessFullEqual, LessGreater, lessgtr, LessLess, lesssim, LessSlantEqual, LessTilde, lfisht, lfloor, Lfr, lfr, lg, lgE, lHar, lhard, lharu, lharul, lhblk, LJcy, ljcy, llarr, ll, Ll, llcorner, Lleftarrow, llhard, lltri, Lmidot, lmidot, lmoustache, lmoust, lnap, lnapprox, lne, lnE, lneq, lneqq, lnsim, loang, loarr, lobrk, longleftarrow, LongLeftArrow, Longleftarrow, longleftrightarrow, LongLeftRightArrow, Longleftrightarrow, longmapsto, longrightarrow, LongRightArrow, Longrightarrow, looparrowleft, looparrowright, lopar, Lopf, lopf, loplus, lotimes, lowast, lowbar, LowerLeftArrow, LowerRightArrow, loz, lozenge, lozf, lpar, lparlt, lrarr, lrcorner, lrhar, lrhard, lrm, lrtri, lsaquo, lscr, Lscr, lsh, Lsh, lsim, lsime, lsimg, lsqb, lsquo, lsquor, Lstrok, lstrok, ltcc, ltcir, lt: lt$2, LT: LT$1, Lt, ltdot, lthree, ltimes, ltlarr, ltquest, ltri, ltrie, ltrif, ltrPar, lurdshar, luruhar, lvertneqq, lvnE, macr: macr$1, male, malt, maltese, Map: "\u2905", map, mapsto, mapstodown, mapstoleft, mapstoup, marker, mcomma, Mcy, mcy, mdash, mDDot, measuredangle, MediumSpace, Mellintrf, Mfr, mfr, mho, micro: micro$1, midast, midcir, mid, middot: middot$1, minusb, minus: minus$1, minusd, minusdu, MinusPlus, mlcp, mldr, mnplus, models, Mopf, mopf, mp, mscr, Mscr, mstpos, Mu, mu, multimap, mumap, nabla, Nacute, nacute, nang, nap, napE, napid, napos, napprox, natural, naturals, natur, nbsp: nbsp$1, nbump, nbumpe, ncap, Ncaron, ncaron, Ncedil, ncedil, ncong, ncongdot, ncup, Ncy, ncy, ndash, nearhk, nearr, neArr, nearrow, ne, nedot, NegativeMediumSpace, NegativeThickSpace, NegativeThinSpace, NegativeVeryThinSpace, nequiv, nesear, nesim, NestedGreaterGreater, NestedLessLess, NewLine, nexist, nexists, Nfr, nfr, ngE, nge, ngeq, ngeqq, ngeqslant, nges, nGg, ngsim, nGt, ngt, ngtr, nGtv, nharr, nhArr, nhpar, ni, nis, nisd, niv, NJcy, njcy, nlarr, nlArr, nldr, nlE, nle, nleftarrow, nLeftarrow, nleftrightarrow, nLeftrightarrow, nleq, nleqq, nleqslant, nles, nless, nLl, nlsim, nLt, nlt, nltri, nltrie, nLtv, nmid, NoBreak, NonBreakingSpace, nopf, Nopf, Not, not: not$1, NotCongruent, NotCupCap, NotDoubleVerticalBar, NotElement, NotEqual, NotEqualTilde, NotExists, NotGreater, NotGreaterEqual, NotGreaterFullEqual, NotGreaterGreater, NotGreaterLess, NotGreaterSlantEqual, NotGreaterTilde, NotHumpDownHump, NotHumpEqual, notin, notindot, notinE, notinva, notinvb, notinvc, NotLeftTriangleBar, NotLeftTriangle, NotLeftTriangleEqual, NotLess, NotLessEqual, NotLessGreater, NotLessLess, NotLessSlantEqual, NotLessTilde, NotNestedGreaterGreater, NotNestedLessLess, notni, notniva, notnivb, notnivc, NotPrecedes, NotPrecedesEqual, NotPrecedesSlantEqual, NotReverseElement, NotRightTriangleBar, NotRightTriangle, NotRightTriangleEqual, NotSquareSubset, NotSquareSubsetEqual, NotSquareSuperset, NotSquareSupersetEqual, NotSubset, NotSubsetEqual, NotSucceeds, NotSucceedsEqual, NotSucceedsSlantEqual, NotSucceedsTilde, NotSuperset, NotSupersetEqual, NotTilde, NotTildeEqual, NotTildeFullEqual, NotTildeTilde, NotVerticalBar, nparallel, npar, nparsl, npart, npolint, npr, nprcue, nprec, npreceq, npre, nrarrc, nrarr, nrArr, nrarrw, nrightarrow, nRightarrow, nrtri, nrtrie, nsc, nsccue, nsce, Nscr, nscr, nshortmid, nshortparallel, nsim, nsime, nsimeq, nsmid, nspar, nsqsube, nsqsupe, nsub, nsubE, nsube, nsubset, nsubseteq, nsubseteqq, nsucc, nsucceq, nsup, nsupE, nsupe, nsupset, nsupseteq, nsupseteqq, ntgl, Ntilde: Ntilde$1, ntilde: ntilde$1, ntlg, ntriangleleft, ntrianglelefteq, ntriangleright, ntrianglerighteq, Nu, nu, num, numero, numsp, nvap, nvdash, nvDash, nVdash, nVDash, nvge, nvgt, nvHarr, nvinfin, nvlArr, nvle, nvlt, nvltrie, nvrArr, nvrtrie, nvsim, nwarhk, nwarr, nwArr, nwarrow, nwnear, Oacute: Oacute$1, oacute: oacute$1, oast, Ocirc: Ocirc$1, ocirc: ocirc$1, ocir, Ocy, ocy, odash, Odblac, odblac, odiv, odot, odsold, OElig, oelig, ofcir, Ofr, ofr, ogon, Ograve: Ograve$1, ograve: ograve$1, ogt, ohbar, ohm, oint, olarr, olcir, olcross, oline, olt, Omacr, omacr, Omega, omega, Omicron, omicron, omid, ominus, Oopf, oopf, opar, OpenCurlyDoubleQuote, OpenCurlyQuote, operp, oplus, orarr, Or, or, ord, order, orderof, ordf: ordf$1, ordm: ordm$1, origof, oror, orslope, orv, oS, Oscr, oscr, Oslash: Oslash$1, oslash: oslash$1, osol, Otilde: Otilde$1, otilde: otilde$1, otimesas, Otimes, otimes, Ouml: Ouml$1, ouml: ouml$1, ovbar, OverBar, OverBrace, OverBracket, OverParenthesis, para: para$1, parallel, par, parsim, parsl, part, PartialD, Pcy, pcy, percnt, period, permil, perp, pertenk, Pfr, pfr, Phi, phi, phiv, phmmat, phone, Pi, pi, pitchfork, piv, planck, planckh, plankv, plusacir, plusb, pluscir, plus, plusdo, plusdu, pluse, PlusMinus, plusmn: plusmn$1, plussim, plustwo, pm, Poincareplane, pointint, popf, Popf, pound: pound$1, prap, Pr, pr, prcue, precapprox, prec, preccurlyeq, Precedes, PrecedesEqual, PrecedesSlantEqual, PrecedesTilde, preceq, precnapprox, precneqq, precnsim, pre, prE, precsim, prime, Prime, primes, prnap, prnE, prnsim, prod, Product, profalar, profline, profsurf, prop, Proportional, Proportion, propto, prsim, prurel, Pscr, pscr, Psi, psi, puncsp, Qfr, qfr, qint, qopf, Qopf, qprime, Qscr, qscr, quaternions, quatint, quest, questeq, quot: quot$2, QUOT: QUOT$1, rAarr, race, Racute, racute, radic, raemptyv, rang, Rang, rangd, range, rangle, raquo: raquo$1, rarrap, rarrb, rarrbfs, rarrc, rarr, Rarr, rArr, rarrfs, rarrhk, rarrlp, rarrpl, rarrsim, Rarrtl, rarrtl, rarrw, ratail, rAtail, ratio, rationals, rbarr, rBarr, RBarr, rbbrk, rbrace, rbrack, rbrke, rbrksld, rbrkslu, Rcaron, rcaron, Rcedil, rcedil, rceil, rcub, Rcy, rcy, rdca, rdldhar, rdquo, rdquor, rdsh, real, realine, realpart, reals, Re, rect, reg: reg$1, REG: REG$1, ReverseElement, ReverseEquilibrium, ReverseUpEquilibrium, rfisht, rfloor, rfr, Rfr, rHar, rhard, rharu, rharul, Rho, rho, rhov, RightAngleBracket, RightArrowBar, rightarrow, RightArrow, Rightarrow, RightArrowLeftArrow, rightarrowtail, RightCeiling, RightDoubleBracket, RightDownTeeVector, RightDownVectorBar, RightDownVector, RightFloor, rightharpoondown, rightharpoonup, rightleftarrows, rightleftharpoons, rightrightarrows, rightsquigarrow, RightTeeArrow, RightTee, RightTeeVector, rightthreetimes, RightTriangleBar, RightTriangle, RightTriangleEqual, RightUpDownVector, RightUpTeeVector, RightUpVectorBar, RightUpVector, RightVectorBar, RightVector, ring, risingdotseq, rlarr, rlhar, rlm, rmoustache, rmoust, rnmid, roang, roarr, robrk, ropar, ropf, Ropf, roplus, rotimes, RoundImplies, rpar, rpargt, rppolint, rrarr, Rrightarrow, rsaquo, rscr, Rscr, rsh, Rsh, rsqb, rsquo, rsquor, rthree, rtimes, rtri, rtrie, rtrif, rtriltri, RuleDelayed, ruluhar, rx, Sacute, sacute, sbquo, scap, Scaron, scaron, Sc, sc, sccue, sce, scE, Scedil, scedil, Scirc, scirc, scnap, scnE, scnsim, scpolint, scsim, Scy, scy, sdotb, sdot, sdote, searhk, searr, seArr, searrow, sect: sect$1, semi, seswar, setminus, setmn, sext, Sfr, sfr, sfrown, sharp, SHCHcy, shchcy, SHcy, shcy, ShortDownArrow, ShortLeftArrow, shortmid, shortparallel, ShortRightArrow, ShortUpArrow, shy: shy$1, Sigma, sigma, sigmaf, sigmav, sim, simdot, sime, simeq, simg, simgE, siml, simlE, simne, simplus, simrarr, slarr, SmallCircle, smallsetminus, smashp, smeparsl, smid, smile, smt, smte, smtes, SOFTcy, softcy, solbar, solb, sol, Sopf, sopf, spades, spadesuit, spar, sqcap, sqcaps, sqcup, sqcups, Sqrt, sqsub, sqsube, sqsubset, sqsubseteq, sqsup, sqsupe, sqsupset, sqsupseteq, square, Square, SquareIntersection, SquareSubset, SquareSubsetEqual, SquareSuperset, SquareSupersetEqual, SquareUnion, squarf, squ, squf, srarr, Sscr, sscr, ssetmn, ssmile, sstarf, Star, star, starf, straightepsilon, straightphi, strns, sub: sub$1, Sub, subdot, subE, sube, subedot, submult, subnE, subne, subplus, subrarr, subset, Subset, subseteq, subseteqq, SubsetEqual, subsetneq, subsetneqq, subsim, subsub, subsup, succapprox, succ, succcurlyeq, Succeeds, SucceedsEqual, SucceedsSlantEqual, SucceedsTilde, succeq, succnapprox, succneqq, succnsim, succsim, SuchThat, sum, Sum, sung, sup1: sup1$1, sup2: sup2$1, sup3: sup3$1, sup, Sup, supdot, supdsub, supE, supe, supedot, Superset, SupersetEqual, suphsol, suphsub, suplarr, supmult, supnE, supne, supplus, supset, Supset, supseteq, supseteqq, supsetneq, supsetneqq, supsim, supsub, supsup, swarhk, swarr, swArr, swarrow, swnwar, szlig: szlig$1, Tab, target, Tau, tau, tbrk, Tcaron, tcaron, Tcedil, tcedil, Tcy, tcy, tdot, telrec, Tfr, tfr, there4, therefore, Therefore, Theta, theta, thetasym, thetav, thickapprox, thicksim, ThickSpace, ThinSpace, thinsp, thkap, thksim, THORN: THORN$1, thorn: thorn$1, tilde, Tilde, TildeEqual, TildeFullEqual, TildeTilde, timesbar, timesb, times: times$1, timesd, tint, toea, topbot, topcir, top, Topf, topf, topfork, tosa, tprime, trade, TRADE, triangle, triangledown, triangleleft, trianglelefteq, triangleq, triangleright, trianglerighteq, tridot, trie, triminus, TripleDot, triplus, trisb, tritime, trpezium, Tscr, tscr, TScy, tscy, TSHcy, tshcy, Tstrok, tstrok, twixt, twoheadleftarrow, twoheadrightarrow, Uacute: Uacute$1, uacute: uacute$1, uarr, Uarr, uArr, Uarrocir, Ubrcy, ubrcy, Ubreve, ubreve, Ucirc: Ucirc$1, ucirc: ucirc$1, Ucy, ucy, udarr, Udblac, udblac, udhar, ufisht, Ufr, ufr, Ugrave: Ugrave$1, ugrave: ugrave$1, uHar, uharl, uharr, uhblk, ulcorn, ulcorner, ulcrop, ultri, Umacr, umacr, uml: uml$1, UnderBar, UnderBrace, UnderBracket, UnderParenthesis, Union, UnionPlus, Uogon, uogon, Uopf, uopf, UpArrowBar, uparrow, UpArrow, Uparrow, UpArrowDownArrow, updownarrow, UpDownArrow, Updownarrow, UpEquilibrium, upharpoonleft, upharpoonright, uplus, UpperLeftArrow, UpperRightArrow, upsi, Upsi, upsih, Upsilon, upsilon, UpTeeArrow, UpTee, upuparrows, urcorn, urcorner, urcrop, Uring, uring, urtri, Uscr, uscr, utdot, Utilde, utilde, utri, utrif, uuarr, Uuml: Uuml$1, uuml: uuml$1, uwangle, vangrt, varepsilon, varkappa, varnothing, varphi, varpi, varpropto, varr, vArr, varrho, varsigma, varsubsetneq, varsubsetneqq, varsupsetneq, varsupsetneqq, vartheta, vartriangleleft, vartriangleright, vBar, Vbar, vBarv, Vcy, vcy, vdash, vDash, Vdash, VDash, Vdashl, veebar, vee, Vee, veeeq, vellip, verbar, Verbar, vert, Vert, VerticalBar, VerticalLine, VerticalSeparator, VerticalTilde, VeryThinSpace, Vfr, vfr, vltri, vnsub, vnsup, Vopf, vopf, vprop, vrtri, Vscr, vscr, vsubnE, vsubne, vsupnE, vsupne, Vvdash, vzigzag, Wcirc, wcirc, wedbar, wedge, Wedge, wedgeq, weierp, Wfr, wfr, Wopf, wopf, wp, wr, wreath, Wscr, wscr, xcap, xcirc, xcup, xdtri, Xfr, xfr, xharr, xhArr, Xi, xi, xlarr, xlArr, xmap, xnis, xodot, Xopf, xopf, xoplus, xotime, xrarr, xrArr, Xscr, xscr, xsqcup, xuplus, xutri, xvee, xwedge, Yacute: Yacute$1, yacute: yacute$1, YAcy, yacy, Ycirc, ycirc, Ycy, ycy, yen: yen$1, Yfr, yfr, YIcy, yicy, Yopf, yopf, Yscr, yscr, YUcy, yucy, yuml: yuml$1, Yuml, Zacute, zacute, Zcaron, zcaron, Zcy, zcy, Zdot, zdot, zeetrf, ZeroWidthSpace, Zeta, zeta, zfr, Zfr, ZHcy, zhcy, zigrarr, zopf, Zopf, Zscr, zscr, zwj, zwnj };
var Aacute = "\xC1";
var aacute = "\xE1";
var Acirc = "\xC2";
var acirc = "\xE2";
var acute = "\xB4";
var AElig = "\xC6";
var aelig = "\xE6";
var Agrave = "\xC0";
var agrave = "\xE0";
var amp$1 = "&";
var AMP = "&";
var Aring = "\xC5";
var aring = "\xE5";
var Atilde = "\xC3";
var atilde = "\xE3";
var Auml = "\xC4";
var auml = "\xE4";
var brvbar = "\xA6";
var Ccedil = "\xC7";
var ccedil = "\xE7";
var cedil = "\xB8";
var cent = "\xA2";
var copy$1 = "\xA9";
var COPY = "\xA9";
var curren = "\xA4";
var deg = "\xB0";
var divide = "\xF7";
var Eacute = "\xC9";
var eacute = "\xE9";
var Ecirc = "\xCA";
var ecirc = "\xEA";
var Egrave = "\xC8";
var egrave = "\xE8";
var ETH = "\xD0";
var eth = "\xF0";
var Euml = "\xCB";
var euml = "\xEB";
var frac12 = "\xBD";
var frac14 = "\xBC";
var frac34 = "\xBE";
var gt$1 = ">";
var GT = ">";
var Iacute = "\xCD";
var iacute = "\xED";
var Icirc = "\xCE";
var icirc = "\xEE";
var iexcl = "\xA1";
var Igrave = "\xCC";
var igrave = "\xEC";
var iquest = "\xBF";
var Iuml = "\xCF";
var iuml = "\xEF";
var laquo = "\xAB";
var lt$1 = "<";
var LT = "<";
var macr = "\xAF";
var micro = "\xB5";
var middot = "\xB7";
var nbsp = "\xA0";
var not = "\xAC";
var Ntilde = "\xD1";
var ntilde = "\xF1";
var Oacute = "\xD3";
var oacute = "\xF3";
var Ocirc = "\xD4";
var ocirc = "\xF4";
var Ograve = "\xD2";
var ograve = "\xF2";
var ordf = "\xAA";
var ordm = "\xBA";
var Oslash = "\xD8";
var oslash = "\xF8";
var Otilde = "\xD5";
var otilde = "\xF5";
var Ouml = "\xD6";
var ouml = "\xF6";
var para = "\xB6";
var plusmn = "\xB1";
var pound = "\xA3";
var quot$1 = '"';
var QUOT = '"';
var raquo = "\xBB";
var reg = "\xAE";
var REG = "\xAE";
var sect = "\xA7";
var shy = "\xAD";
var sup1 = "\xB9";
var sup2 = "\xB2";
var sup3 = "\xB3";
var szlig = "\xDF";
var THORN = "\xDE";
var thorn = "\xFE";
var times = "\xD7";
var Uacute = "\xDA";
var uacute = "\xFA";
var Ucirc = "\xDB";
var ucirc = "\xFB";
var Ugrave = "\xD9";
var ugrave = "\xF9";
var uml = "\xA8";
var Uuml = "\xDC";
var uuml = "\xFC";
var Yacute = "\xDD";
var yacute = "\xFD";
var yen = "\xA5";
var yuml = "\xFF";
var require$$1 = { Aacute, aacute, Acirc, acirc, acute, AElig, aelig, Agrave, agrave, amp: amp$1, AMP, Aring, aring, Atilde, atilde, Auml, auml, brvbar, Ccedil, ccedil, cedil, cent, copy: copy$1, COPY, curren, deg, divide, Eacute, eacute, Ecirc, ecirc, Egrave, egrave, ETH, eth, Euml, euml, frac12, frac14, frac34, gt: gt$1, GT, Iacute, iacute, Icirc, icirc, iexcl, Igrave, igrave, iquest, Iuml, iuml, laquo, lt: lt$1, LT, macr, micro, middot, nbsp, not, Ntilde, ntilde, Oacute, oacute, Ocirc, ocirc, Ograve, ograve, ordf, ordm, Oslash, oslash, Otilde, otilde, Ouml, ouml, para, plusmn, pound, quot: quot$1, QUOT, raquo, reg, REG, sect, shy, sup1, sup2, sup3, szlig, THORN, thorn, times, Uacute, uacute, Ucirc, ucirc, Ugrave, ugrave, uml, Uuml, uuml, Yacute, yacute, yen, yuml };
var amp = "&";
var apos = "'";
var gt = ">";
var lt = "<";
var quot = '"';
var require$$0$1 = { amp, apos, gt, lt, quot };
var decode_codepoint = {};
var require$$0 = { 0: 65533, 128: 8364, 130: 8218, 131: 402, 132: 8222, 133: 8230, 134: 8224, 135: 8225, 136: 710, 137: 8240, 138: 352, 139: 8249, 140: 338, 142: 381, 145: 8216, 146: 8217, 147: 8220, 148: 8221, 149: 8226, 150: 8211, 151: 8212, 152: 732, 153: 8482, 154: 353, 155: 8250, 156: 339, 158: 382, 159: 376 };
var __importDefault$4 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
};
Object.defineProperty(decode_codepoint, "__esModule", { value: true });
var decode_json_1 = __importDefault$4(require$$0);
var fromCodePoint = String.fromCodePoint || function(codePoint) {
  var output = "";
  if (codePoint > 65535) {
    codePoint -= 65536;
    output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
    codePoint = 56320 | codePoint & 1023;
  }
  output += String.fromCharCode(codePoint);
  return output;
};
function decodeCodePoint(codePoint) {
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return "\uFFFD";
  }
  if (codePoint in decode_json_1.default) {
    codePoint = decode_json_1.default[codePoint];
  }
  return fromCodePoint(codePoint);
}
decode_codepoint.default = decodeCodePoint;
var __importDefault$3 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
};
Object.defineProperty(decode, "__esModule", { value: true });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$3(require$$1$1);
var legacy_json_1 = __importDefault$3(require$$1);
var xml_json_1$1 = __importDefault$3(require$$0$1);
var decode_codepoint_1 = __importDefault$3(decode_codepoint);
var strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(map2) {
  var replace2 = getReplacer(map2);
  return function(str) {
    return String(str).replace(strictEntityRe, replace2);
  };
}
var sorter = function(a, b) {
  return a < b ? 1 : -1;
};
decode.decodeHTML = (function() {
  var legacy2 = Object.keys(legacy_json_1.default).sort(sorter);
  var keys = Object.keys(entities_json_1$1.default).sort(sorter);
  for (var i = 0, j = 0; i < keys.length; i++) {
    if (legacy2[j] === keys[i]) {
      keys[i] += ";?";
      j++;
    } else {
      keys[i] += ";";
    }
  }
  var re = new RegExp("&(?:" + keys.join("|") + "|#[xX][\\da-fA-F]+;?|#\\d+;?)", "g");
  var replace2 = getReplacer(entities_json_1$1.default);
  function replacer(str) {
    if (str.substr(-1) !== ";") str += ";";
    return replace2(str);
  }
  return function(str) {
    return String(str).replace(re, replacer);
  };
})();
function getReplacer(map2) {
  return function replace2(str) {
    if (str.charAt(1) === "#") {
      var secondChar = str.charAt(2);
      if (secondChar === "X" || secondChar === "x") {
        return decode_codepoint_1.default(parseInt(str.substr(3), 16));
      }
      return decode_codepoint_1.default(parseInt(str.substr(2), 10));
    }
    return map2[str.slice(1, -1)] || str;
  };
}
var encode = {};
var __importDefault$2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.escapeUTF8 = encode.escape = encode.encodeNonAsciiHTML = encode.encodeHTML = encode.encodeXML = void 0;
var xml_json_1 = __importDefault$2(require$$0$1);
var inverseXML = getInverseObj(xml_json_1.default);
var xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault$2(require$$1$1);
var inverseHTML = getInverseObj(entities_json_1.default);
var htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(obj) {
  return Object.keys(obj).sort().reduce((function(inverse, name2) {
    inverse[obj[name2]] = "&" + name2 + ";";
    return inverse;
  }), {});
}
function getInverseReplacer(inverse) {
  var single = [];
  var multiple = [];
  for (var _i = 0, _a = Object.keys(inverse); _i < _a.length; _i++) {
    var k = _a[_i];
    if (k.length === 1) {
      single.push("\\" + k);
    } else {
      multiple.push(k);
    }
  }
  single.sort();
  for (var start = 0; start < single.length - 1; start++) {
    var end = start;
    while (end < single.length - 1 && single[end].charCodeAt(1) + 1 === single[end + 1].charCodeAt(1)) {
      end += 1;
    }
    var count = 1 + end - start;
    if (count < 3) continue;
    single.splice(start, count, single[start] + "-" + single[end]);
  }
  multiple.unshift("[" + single.join("") + "]");
  return new RegExp(multiple.join("|"), "g");
}
var reNonASCII = /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g;
var getCodePoint = String.prototype.codePointAt != null ? function(str) {
  return str.codePointAt(0);
} : function(c) {
  return (c.charCodeAt(0) - 55296) * 1024 + c.charCodeAt(1) - 56320 + 65536;
};
function singleCharReplacer(c) {
  return "&#x" + (c.length > 1 ? getCodePoint(c) : c.charCodeAt(0)).toString(16).toUpperCase() + ";";
}
function getInverse(inverse, re) {
  return function(data) {
    return data.replace(re, (function(name2) {
      return inverse[name2];
    })).replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(xmlReplacer.source + "|" + reNonASCII.source, "g");
function escape(data) {
  return data.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape;
function escapeUTF8(data) {
  return data.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(obj) {
  return function(data) {
    return data.replace(reEscapeChars, (function(c) {
      return obj[c] || singleCharReplacer(c);
    }));
  };
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.escapeUTF8 = exports.escape = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = void 0;
  var decode_1 = decode;
  var encode_1 = encode;
  function decode$1(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTML)(data);
  }
  exports.decode = decode$1;
  function decodeStrict(data, level) {
    return (!level || level <= 0 ? decode_1.decodeXML : decode_1.decodeHTMLStrict)(data);
  }
  exports.decodeStrict = decodeStrict;
  function encode$1(data, level) {
    return (!level || level <= 0 ? encode_1.encodeXML : encode_1.encodeHTML)(data);
  }
  exports.encode = encode$1;
  var encode_2 = encode;
  Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function() {
    return encode_2.encodeXML;
  } });
  Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function() {
    return encode_2.encodeNonAsciiHTML;
  } });
  Object.defineProperty(exports, "escape", { enumerable: true, get: function() {
    return encode_2.escape;
  } });
  Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function() {
    return encode_2.escapeUTF8;
  } });
  Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function() {
    return encode_2.encodeHTML;
  } });
  var decode_2 = decode;
  Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
  Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function() {
    return decode_2.decodeHTML;
  } });
  Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function() {
    return decode_2.decodeHTMLStrict;
  } });
  Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function() {
    return decode_2.decodeXML;
  } });
})(lib$3);
var foreignNames = {};
Object.defineProperty(foreignNames, "__esModule", { value: true });
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = /* @__PURE__ */ new Map([["altglyph", "altGlyph"], ["altglyphdef", "altGlyphDef"], ["altglyphitem", "altGlyphItem"], ["animatecolor", "animateColor"], ["animatemotion", "animateMotion"], ["animatetransform", "animateTransform"], ["clippath", "clipPath"], ["feblend", "feBlend"], ["fecolormatrix", "feColorMatrix"], ["fecomponenttransfer", "feComponentTransfer"], ["fecomposite", "feComposite"], ["feconvolvematrix", "feConvolveMatrix"], ["fediffuselighting", "feDiffuseLighting"], ["fedisplacementmap", "feDisplacementMap"], ["fedistantlight", "feDistantLight"], ["fedropshadow", "feDropShadow"], ["feflood", "feFlood"], ["fefunca", "feFuncA"], ["fefuncb", "feFuncB"], ["fefuncg", "feFuncG"], ["fefuncr", "feFuncR"], ["fegaussianblur", "feGaussianBlur"], ["feimage", "feImage"], ["femerge", "feMerge"], ["femergenode", "feMergeNode"], ["femorphology", "feMorphology"], ["feoffset", "feOffset"], ["fepointlight", "fePointLight"], ["fespecularlighting", "feSpecularLighting"], ["fespotlight", "feSpotLight"], ["fetile", "feTile"], ["feturbulence", "feTurbulence"], ["foreignobject", "foreignObject"], ["glyphref", "glyphRef"], ["lineargradient", "linearGradient"], ["radialgradient", "radialGradient"], ["textpath", "textPath"]]);
foreignNames.attributeNames = /* @__PURE__ */ new Map([["definitionurl", "definitionURL"], ["attributename", "attributeName"], ["attributetype", "attributeType"], ["basefrequency", "baseFrequency"], ["baseprofile", "baseProfile"], ["calcmode", "calcMode"], ["clippathunits", "clipPathUnits"], ["diffuseconstant", "diffuseConstant"], ["edgemode", "edgeMode"], ["filterunits", "filterUnits"], ["glyphref", "glyphRef"], ["gradienttransform", "gradientTransform"], ["gradientunits", "gradientUnits"], ["kernelmatrix", "kernelMatrix"], ["kernelunitlength", "kernelUnitLength"], ["keypoints", "keyPoints"], ["keysplines", "keySplines"], ["keytimes", "keyTimes"], ["lengthadjust", "lengthAdjust"], ["limitingconeangle", "limitingConeAngle"], ["markerheight", "markerHeight"], ["markerunits", "markerUnits"], ["markerwidth", "markerWidth"], ["maskcontentunits", "maskContentUnits"], ["maskunits", "maskUnits"], ["numoctaves", "numOctaves"], ["pathlength", "pathLength"], ["patterncontentunits", "patternContentUnits"], ["patterntransform", "patternTransform"], ["patternunits", "patternUnits"], ["pointsatx", "pointsAtX"], ["pointsaty", "pointsAtY"], ["pointsatz", "pointsAtZ"], ["preservealpha", "preserveAlpha"], ["preserveaspectratio", "preserveAspectRatio"], ["primitiveunits", "primitiveUnits"], ["refx", "refX"], ["refy", "refY"], ["repeatcount", "repeatCount"], ["repeatdur", "repeatDur"], ["requiredextensions", "requiredExtensions"], ["requiredfeatures", "requiredFeatures"], ["specularconstant", "specularConstant"], ["specularexponent", "specularExponent"], ["spreadmethod", "spreadMethod"], ["startoffset", "startOffset"], ["stddeviation", "stdDeviation"], ["stitchtiles", "stitchTiles"], ["surfacescale", "surfaceScale"], ["systemlanguage", "systemLanguage"], ["tablevalues", "tableValues"], ["targetx", "targetX"], ["targety", "targetY"], ["textlength", "textLength"], ["viewbox", "viewBox"], ["viewtarget", "viewTarget"], ["xchannelselector", "xChannelSelector"], ["ychannelselector", "yChannelSelector"], ["zoomandpan", "zoomAndPan"]]);
var __assign = commonjsGlobal && commonjsGlobal.__assign || function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  Object.defineProperty(o, k2, { enumerable: true, get: function() {
    return m[k];
  } });
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
};
Object.defineProperty(lib$4, "__esModule", { value: true });
var ElementType = __importStar(lib$5);
var entities_1 = lib$3;
var foreignNames_1 = foreignNames;
var unencodedElements = /* @__PURE__ */ new Set(["style", "script", "xmp", "iframe", "noembed", "noframes", "plaintext", "noscript"]);
function formatAttributes(attributes2, opts) {
  if (!attributes2) return;
  return Object.keys(attributes2).map((function(key) {
    var _a, _b;
    var value = (_a = attributes2[key]) !== null && _a !== void 0 ? _a : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = foreignNames_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return key + '="' + (opts.decodeEntities !== false ? entities_1.encodeXML(value) : value.replace(/"/g, "&quot;")) + '"';
  })).join(" ");
}
var singleTag = /* @__PURE__ */ new Set(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"]);
function render(node2, options) {
  if (options === void 0) {
    options = {};
  }
  var nodes = "length" in node2 ? node2 : [node2];
  var output = "";
  for (var i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
lib$4.default = render;
function renderNode(node2, options) {
  switch (node2.type) {
    case ElementType.Root:
      return render(node2.children, options);
    case ElementType.Directive:
    case ElementType.Doctype:
      return renderDirective(node2);
    case ElementType.Comment:
      return renderComment(node2);
    case ElementType.CDATA:
      return renderCdata(node2);
    case ElementType.Script:
    case ElementType.Style:
    case ElementType.Tag:
      return renderTag(node2, options);
    case ElementType.Text:
      return renderText(node2, options);
  }
}
var foreignModeIntegrationPoints = /* @__PURE__ */ new Set(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignObject", "desc", "title"]);
var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
function renderTag(elem, opts) {
  var _a;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a = foreignNames_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = __assign(__assign({}, opts), { xmlMode: false });
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
  }
  var tag = "<" + elem.name;
  var attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += " " + attribs;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? opts.selfClosingTags !== false : opts.selfClosingTags && singleTag.has(elem.name))) {
    if (!opts.xmlMode) tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += "</" + elem.name + ">";
    }
  }
  return tag;
}
function renderDirective(elem) {
  return "<" + elem.data + ">";
}
function renderText(elem, opts) {
  var data = elem.data || "";
  if (opts.decodeEntities !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = entities_1.encodeXML(data);
  }
  return data;
}
function renderCdata(elem) {
  return "<![CDATA[" + elem.children[0].data + "]]>";
}
function renderComment(elem) {
  return "<!--" + elem.data + "-->";
}
var __importDefault$1 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
};
Object.defineProperty(stringify$2, "__esModule", { value: true });
stringify$2.innerText = stringify$2.textContent = stringify$2.getText = stringify$2.getInnerHTML = stringify$2.getOuterHTML = void 0;
var domhandler_1$4 = lib$6;
var dom_serializer_1 = __importDefault$1(lib$4);
var domelementtype_1 = lib$5;
function getOuterHTML(node2, options) {
  return (0, dom_serializer_1.default)(node2, options);
}
stringify$2.getOuterHTML = getOuterHTML;
function getInnerHTML(node2, options) {
  return (0, domhandler_1$4.hasChildren)(node2) ? node2.children.map((function(node3) {
    return getOuterHTML(node3, options);
  })).join("") : "";
}
stringify$2.getInnerHTML = getInnerHTML;
function getText$1(node2) {
  if (Array.isArray(node2)) return node2.map(getText$1).join("");
  if ((0, domhandler_1$4.isTag)(node2)) return node2.name === "br" ? "\n" : getText$1(node2.children);
  if ((0, domhandler_1$4.isCDATA)(node2)) return getText$1(node2.children);
  if ((0, domhandler_1$4.isText)(node2)) return node2.data;
  return "";
}
stringify$2.getText = getText$1;
function textContent(node2) {
  if (Array.isArray(node2)) return node2.map(textContent).join("");
  if ((0, domhandler_1$4.hasChildren)(node2) && !(0, domhandler_1$4.isComment)(node2)) {
    return textContent(node2.children);
  }
  if ((0, domhandler_1$4.isText)(node2)) return node2.data;
  return "";
}
stringify$2.textContent = textContent;
function innerText(node2) {
  if (Array.isArray(node2)) return node2.map(innerText).join("");
  if ((0, domhandler_1$4.hasChildren)(node2) && (node2.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$4.isCDATA)(node2))) {
    return innerText(node2.children);
  }
  if ((0, domhandler_1$4.isText)(node2)) return node2.data;
  return "";
}
stringify$2.innerText = innerText;
var traversal = {};
Object.defineProperty(traversal, "__esModule", { value: true });
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$3 = lib$6;
var emptyArray = [];
function getChildren$1(elem) {
  var _a;
  return (_a = elem.children) !== null && _a !== void 0 ? _a : emptyArray;
}
traversal.getChildren = getChildren$1;
function getParent$1(elem) {
  return elem.parent || null;
}
traversal.getParent = getParent$1;
function getSiblings$1(elem) {
  var _a, _b;
  var parent = getParent$1(elem);
  if (parent != null) return getChildren$1(parent);
  var siblings = [elem];
  var prev = elem.prev, next = elem.next;
  while (prev != null) {
    siblings.unshift(prev);
    _a = prev, prev = _a.prev;
  }
  while (next != null) {
    siblings.push(next);
    _b = next, next = _b.next;
  }
  return siblings;
}
traversal.getSiblings = getSiblings$1;
function getAttributeValue$1(elem, name2) {
  var _a;
  return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name2];
}
traversal.getAttributeValue = getAttributeValue$1;
function hasAttrib$1(elem, name2) {
  return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name2) && elem.attribs[name2] != null;
}
traversal.hasAttrib = hasAttrib$1;
function getName$1(elem) {
  return elem.name;
}
traversal.getName = getName$1;
function nextElementSibling(elem) {
  var _a;
  var next = elem.next;
  while (next !== null && !(0, domhandler_1$3.isTag)(next)) _a = next, next = _a.next;
  return next;
}
traversal.nextElementSibling = nextElementSibling;
function prevElementSibling(elem) {
  var _a;
  var prev = elem.prev;
  while (prev !== null && !(0, domhandler_1$3.isTag)(prev)) _a = prev, prev = _a.prev;
  return prev;
}
traversal.prevElementSibling = prevElementSibling;
var manipulation = {};
Object.defineProperty(manipulation, "__esModule", { value: true });
manipulation.prepend = manipulation.prependChild = manipulation.append = manipulation.appendChild = manipulation.replaceElement = manipulation.removeElement = void 0;
function removeElement(elem) {
  if (elem.prev) elem.prev.next = elem.next;
  if (elem.next) elem.next.prev = elem.prev;
  if (elem.parent) {
    var childs = elem.parent.children;
    childs.splice(childs.lastIndexOf(elem), 1);
  }
}
manipulation.removeElement = removeElement;
function replaceElement(elem, replacement) {
  var prev = replacement.prev = elem.prev;
  if (prev) {
    prev.next = replacement;
  }
  var next = replacement.next = elem.next;
  if (next) {
    next.prev = replacement;
  }
  var parent = replacement.parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs[childs.lastIndexOf(elem)] = replacement;
  }
}
manipulation.replaceElement = replaceElement;
function appendChild(elem, child) {
  removeElement(child);
  child.next = null;
  child.parent = elem;
  if (elem.children.push(child) > 1) {
    var sibling = elem.children[elem.children.length - 2];
    sibling.next = child;
    child.prev = sibling;
  } else {
    child.prev = null;
  }
}
manipulation.appendChild = appendChild;
function append(elem, next) {
  removeElement(next);
  var parent = elem.parent;
  var currNext = elem.next;
  next.next = currNext;
  next.prev = elem;
  elem.next = next;
  next.parent = parent;
  if (currNext) {
    currNext.prev = next;
    if (parent) {
      var childs = parent.children;
      childs.splice(childs.lastIndexOf(currNext), 0, next);
    }
  } else if (parent) {
    parent.children.push(next);
  }
}
manipulation.append = append;
function prependChild(elem, child) {
  removeElement(child);
  child.parent = elem;
  child.prev = null;
  if (elem.children.unshift(child) !== 1) {
    var sibling = elem.children[1];
    sibling.prev = child;
    child.next = sibling;
  } else {
    child.next = null;
  }
}
manipulation.prependChild = prependChild;
function prepend(elem, prev) {
  removeElement(prev);
  var parent = elem.parent;
  if (parent) {
    var childs = parent.children;
    childs.splice(childs.indexOf(elem), 0, prev);
  }
  if (elem.prev) {
    elem.prev.next = prev;
  }
  prev.parent = parent;
  prev.prev = elem.prev;
  prev.next = elem;
  elem.prev = prev;
}
manipulation.prepend = prepend;
var querying = {};
Object.defineProperty(querying, "__esModule", { value: true });
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$2 = lib$6;
function filter(test, node2, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  if (!Array.isArray(node2)) node2 = [node2];
  return find(test, node2, recurse, limit);
}
querying.filter = filter;
function find(test, nodes, recurse, limit) {
  var result = [];
  for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
    var elem = nodes_1[_i];
    if (test(elem)) {
      result.push(elem);
      if (--limit <= 0) break;
    }
    if (recurse && (0, domhandler_1$2.hasChildren)(elem) && elem.children.length > 0) {
      var children = find(test, elem.children, recurse, limit);
      result.push.apply(result, children);
      limit -= children.length;
      if (limit <= 0) break;
    }
  }
  return result;
}
querying.find = find;
function findOneChild(test, nodes) {
  return nodes.find(test);
}
querying.findOneChild = findOneChild;
function findOne$1(test, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  var elem = null;
  for (var i = 0; i < nodes.length && !elem; i++) {
    var checked = nodes[i];
    if (!(0, domhandler_1$2.isTag)(checked)) {
      continue;
    } else if (test(checked)) {
      elem = checked;
    } else if (recurse && checked.children.length > 0) {
      elem = findOne$1(test, checked.children);
    }
  }
  return elem;
}
querying.findOne = findOne$1;
function existsOne$1(test, nodes) {
  return nodes.some((function(checked) {
    return (0, domhandler_1$2.isTag)(checked) && (test(checked) || checked.children.length > 0 && existsOne$1(test, checked.children));
  }));
}
querying.existsOne = existsOne$1;
function findAll$1(test, nodes) {
  var _a;
  var result = [];
  var stack = nodes.filter(domhandler_1$2.isTag);
  var elem;
  while (elem = stack.shift()) {
    var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$2.isTag);
    if (children && children.length > 0) {
      stack.unshift.apply(stack, children);
    }
    if (test(elem)) result.push(elem);
  }
  return result;
}
querying.findAll = findAll$1;
var legacy = {};
Object.defineProperty(legacy, "__esModule", { value: true });
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$1 = lib$6;
var querying_1 = querying;
var Checks = { tag_name: function(name2) {
  if (typeof name2 === "function") {
    return function(elem) {
      return (0, domhandler_1$1.isTag)(elem) && name2(elem.name);
    };
  } else if (name2 === "*") {
    return domhandler_1$1.isTag;
  }
  return function(elem) {
    return (0, domhandler_1$1.isTag)(elem) && elem.name === name2;
  };
}, tag_type: function(type) {
  if (typeof type === "function") {
    return function(elem) {
      return type(elem.type);
    };
  }
  return function(elem) {
    return elem.type === type;
  };
}, tag_contains: function(data) {
  if (typeof data === "function") {
    return function(elem) {
      return (0, domhandler_1$1.isText)(elem) && data(elem.data);
    };
  }
  return function(elem) {
    return (0, domhandler_1$1.isText)(elem) && elem.data === data;
  };
} };
function getAttribCheck(attrib, value) {
  if (typeof value === "function") {
    return function(elem) {
      return (0, domhandler_1$1.isTag)(elem) && value(elem.attribs[attrib]);
    };
  }
  return function(elem) {
    return (0, domhandler_1$1.isTag)(elem) && elem.attribs[attrib] === value;
  };
}
function combineFuncs(a, b) {
  return function(elem) {
    return a(elem) || b(elem);
  };
}
function compileTest(options) {
  var funcs = Object.keys(options).map((function(key) {
    var value = options[key];
    return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
  }));
  return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
function testElement(options, node2) {
  var test = compileTest(options);
  return test ? test(node2) : true;
}
legacy.testElement = testElement;
function getElements(options, nodes, recurse, limit) {
  if (limit === void 0) {
    limit = Infinity;
  }
  var test = compileTest(options);
  return test ? (0, querying_1.filter)(test, nodes, recurse, limit) : [];
}
legacy.getElements = getElements;
function getElementById(id, nodes, recurse) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (!Array.isArray(nodes)) nodes = [nodes];
  return (0, querying_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
legacy.getElementById = getElementById;
function getElementsByTagName(tagName, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_name(tagName), nodes, recurse, limit);
}
legacy.getElementsByTagName = getElementsByTagName;
function getElementsByTagType(type, nodes, recurse, limit) {
  if (recurse === void 0) {
    recurse = true;
  }
  if (limit === void 0) {
    limit = Infinity;
  }
  return (0, querying_1.filter)(Checks.tag_type(type), nodes, recurse, limit);
}
legacy.getElementsByTagType = getElementsByTagType;
var helpers = {};
Object.defineProperty(helpers, "__esModule", { value: true });
helpers.uniqueSort = helpers.compareDocumentPosition = helpers.removeSubsets = void 0;
var domhandler_1 = lib$6;
function removeSubsets$1(nodes) {
  var idx = nodes.length;
  while (--idx >= 0) {
    var node2 = nodes[idx];
    if (idx > 0 && nodes.lastIndexOf(node2, idx - 1) >= 0) {
      nodes.splice(idx, 1);
      continue;
    }
    for (var ancestor = node2.parent; ancestor; ancestor = ancestor.parent) {
      if (nodes.includes(ancestor)) {
        nodes.splice(idx, 1);
        break;
      }
    }
  }
  return nodes;
}
helpers.removeSubsets = removeSubsets$1;
function compareDocumentPosition(nodeA, nodeB) {
  var aParents = [];
  var bParents = [];
  if (nodeA === nodeB) {
    return 0;
  }
  var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
  while (current) {
    aParents.unshift(current);
    current = current.parent;
  }
  current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
  while (current) {
    bParents.unshift(current);
    current = current.parent;
  }
  var maxIdx = Math.min(aParents.length, bParents.length);
  var idx = 0;
  while (idx < maxIdx && aParents[idx] === bParents[idx]) {
    idx++;
  }
  if (idx === 0) {
    return 1;
  }
  var sharedParent = aParents[idx - 1];
  var siblings = sharedParent.children;
  var aSibling = aParents[idx];
  var bSibling = bParents[idx];
  if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
    if (sharedParent === nodeB) {
      return 4 | 16;
    }
    return 4;
  }
  if (sharedParent === nodeA) {
    return 2 | 8;
  }
  return 2;
}
helpers.compareDocumentPosition = compareDocumentPosition;
function uniqueSort(nodes) {
  nodes = nodes.filter((function(node2, i, arr) {
    return !arr.includes(node2, i + 1);
  }));
  nodes.sort((function(a, b) {
    var relative = compareDocumentPosition(a, b);
    if (relative & 2) {
      return -1;
    } else if (relative & 4) {
      return 1;
    }
    return 0;
  }));
  return nodes;
}
helpers.uniqueSort = uniqueSort;
var feeds = {};
Object.defineProperty(feeds, "__esModule", { value: true });
feeds.getFeed = void 0;
var stringify_1 = stringify$2;
var legacy_1 = legacy;
function getFeed(doc) {
  var feedRoot = getOneElement(isValidFeed, doc);
  return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
}
feeds.getFeed = getFeed;
function getAtomFeed(feedRoot) {
  var _a;
  var childs = feedRoot.children;
  var feed = { type: "atom", items: (0, legacy_1.getElementsByTagName)("entry", childs).map((function(item) {
    var _a2;
    var children = item.children;
    var entry = { media: getMediaElements(children) };
    addConditionally(entry, "id", "id", children);
    addConditionally(entry, "title", "title", children);
    var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs.href;
    if (href2) {
      entry.link = href2;
    }
    var description2 = fetch("summary", children) || fetch("content", children);
    if (description2) {
      entry.description = description2;
    }
    var pubDate = fetch("updated", children);
    if (pubDate) {
      entry.pubDate = new Date(pubDate);
    }
    return entry;
  })) };
  addConditionally(feed, "id", "id", childs);
  addConditionally(feed, "title", "title", childs);
  var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs.href;
  if (href) {
    feed.link = href;
  }
  addConditionally(feed, "description", "subtitle", childs);
  var updated = fetch("updated", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "email", childs, true);
  return feed;
}
function getRssFeed(feedRoot) {
  var _a, _b;
  var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
  var feed = { type: feedRoot.name.substr(0, 3), id: "", items: (0, legacy_1.getElementsByTagName)("item", feedRoot.children).map((function(item) {
    var children = item.children;
    var entry = { media: getMediaElements(children) };
    addConditionally(entry, "id", "guid", children);
    addConditionally(entry, "title", "title", children);
    addConditionally(entry, "link", "link", children);
    addConditionally(entry, "description", "description", children);
    var pubDate = fetch("pubDate", children);
    if (pubDate) entry.pubDate = new Date(pubDate);
    return entry;
  })) };
  addConditionally(feed, "title", "title", childs);
  addConditionally(feed, "link", "link", childs);
  addConditionally(feed, "description", "description", childs);
  var updated = fetch("lastBuildDate", childs);
  if (updated) {
    feed.updated = new Date(updated);
  }
  addConditionally(feed, "author", "managingEditor", childs, true);
  return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = ["fileSize", "bitrate", "framerate", "samplingrate", "channels", "duration", "height", "width"];
function getMediaElements(where) {
  return (0, legacy_1.getElementsByTagName)("media:content", where).map((function(elem) {
    var attribs = elem.attribs;
    var media = { medium: attribs.medium, isDefault: !!attribs.isDefault };
    for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
      var attrib = MEDIA_KEYS_STRING_1[_i];
      if (attribs[attrib]) {
        media[attrib] = attribs[attrib];
      }
    }
    for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
      var attrib = MEDIA_KEYS_INT_1[_a];
      if (attribs[attrib]) {
        media[attrib] = parseInt(attribs[attrib], 10);
      }
    }
    if (attribs.expression) {
      media.expression = attribs.expression;
    }
    return media;
  }));
}
function getOneElement(tagName, node2) {
  return (0, legacy_1.getElementsByTagName)(tagName, node2, true, 1)[0];
}
function fetch(tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  return (0, stringify_1.textContent)((0, legacy_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
function addConditionally(obj, prop2, tagName, where, recurse) {
  if (recurse === void 0) {
    recurse = false;
  }
  var val = fetch(tagName, where, recurse);
  if (val) obj[prop2] = val;
}
function isValidFeed(value) {
  return value === "rss" || value === "feed" || value === "rdf:RDF";
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding2(exports2, m, p);
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
  __exportStar(stringify$2, exports);
  __exportStar(traversal, exports);
  __exportStar(manipulation, exports);
  __exportStar(querying, exports);
  __exportStar(legacy, exports);
  __exportStar(helpers, exports);
  __exportStar(feeds, exports);
  var domhandler_12 = lib$6;
  Object.defineProperty(exports, "isTag", { enumerable: true, get: function() {
    return domhandler_12.isTag;
  } });
  Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function() {
    return domhandler_12.isCDATA;
  } });
  Object.defineProperty(exports, "isText", { enumerable: true, get: function() {
    return domhandler_12.isText;
  } });
  Object.defineProperty(exports, "isComment", { enumerable: true, get: function() {
    return domhandler_12.isComment;
  } });
  Object.defineProperty(exports, "isDocument", { enumerable: true, get: function() {
    return domhandler_12.isDocument;
  } });
  Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function() {
    return domhandler_12.hasChildren;
  } });
})(lib$7);
var boolbase = { trueFunc: function trueFunc() {
  return true;
}, falseFunc: function falseFunc() {
  return false;
} };
var compile$3 = {};
var lib$2 = {};
var parse$4 = {};
var __spreadArray$1 = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
  return to;
};
Object.defineProperty(parse$4, "__esModule", { value: true });
parse$4.isTraversal = void 0;
var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
var actionTypes$1 = /* @__PURE__ */ new Map([["~", "element"], ["^", "start"], ["$", "end"], ["*", "any"], ["!", "not"], ["|", "hyphen"]]);
var Traversals = { ">": "child", "<": "parent", "~": "sibling", "+": "adjacent" };
var attribSelectors = { "#": ["id", "equals"], ".": ["class", "element"] };
var unpackPseudos = /* @__PURE__ */ new Set(["has", "not", "matches", "is", "host", "host-context"]);
var traversalNames = new Set(__spreadArray$1(["descendant"], Object.keys(Traversals).map((function(k) {
  return Traversals[k];
}))));
var caseInsensitiveAttributes = /* @__PURE__ */ new Set(["accept", "accept-charset", "align", "alink", "axis", "bgcolor", "charset", "checked", "clear", "codetype", "color", "compact", "declare", "defer", "dir", "direction", "disabled", "enctype", "face", "frame", "hreflang", "http-equiv", "lang", "language", "link", "media", "method", "multiple", "nohref", "noresize", "noshade", "nowrap", "readonly", "rel", "rev", "rules", "scope", "scrolling", "selected", "shape", "target", "text", "type", "valign", "valuetype", "vlink"]);
function isTraversal(selector) {
  return traversalNames.has(selector.type);
}
parse$4.isTraversal = isTraversal;
var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
var quotes = /* @__PURE__ */ new Set(['"', "'"]);
function funescape(_, escaped, escapedWhitespace) {
  var high = parseInt(escaped, 16) - 65536;
  return high !== high || escapedWhitespace ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
}
function unescapeCSS(str) {
  return str.replace(reEscape, funescape);
}
function isWhitespace(c) {
  return c === " " || c === "\n" || c === "	" || c === "\f" || c === "\r";
}
function parse$3(selector, options) {
  var subselects2 = [];
  var endIndex = parseSelector(subselects2, "" + selector, options, 0);
  if (endIndex < selector.length) {
    throw new Error("Unmatched selector: " + selector.slice(endIndex));
  }
  return subselects2;
}
parse$4.default = parse$3;
function parseSelector(subselects2, selector, options, selectorIndex) {
  var _a, _b;
  if (options === void 0) {
    options = {};
  }
  var tokens = [];
  var sawWS = false;
  function getName2(offset) {
    var match = selector.slice(selectorIndex + offset).match(reName);
    if (!match) {
      throw new Error("Expected name, found " + selector.slice(selectorIndex));
    }
    var name2 = match[0];
    selectorIndex += offset + name2.length;
    return unescapeCSS(name2);
  }
  function stripWhitespace(offset) {
    while (isWhitespace(selector.charAt(selectorIndex + offset))) offset++;
    selectorIndex += offset;
  }
  function isEscaped(pos) {
    var slashCount = 0;
    while (selector.charAt(--pos) === "\\") slashCount++;
    return (slashCount & 1) === 1;
  }
  function ensureNotTraversal() {
    if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
      throw new Error("Did not expect successive traversals.");
    }
  }
  stripWhitespace(0);
  while (selector !== "") {
    var firstChar = selector.charAt(selectorIndex);
    if (isWhitespace(firstChar)) {
      sawWS = true;
      stripWhitespace(1);
    } else if (firstChar in Traversals) {
      ensureNotTraversal();
      tokens.push({ type: Traversals[firstChar] });
      sawWS = false;
      stripWhitespace(1);
    } else if (firstChar === ",") {
      if (tokens.length === 0) {
        throw new Error("Empty sub-selector");
      }
      subselects2.push(tokens);
      tokens = [];
      sawWS = false;
      stripWhitespace(1);
    } else if (selector.startsWith("/*", selectorIndex)) {
      var endIndex = selector.indexOf("*/", selectorIndex + 2);
      if (endIndex < 0) {
        throw new Error("Comment was not terminated");
      }
      selectorIndex = endIndex + 2;
    } else {
      if (sawWS) {
        ensureNotTraversal();
        tokens.push({ type: "descendant" });
        sawWS = false;
      }
      if (firstChar in attribSelectors) {
        var _c = attribSelectors[firstChar], name_1 = _c[0], action = _c[1];
        tokens.push({ type: "attribute", name: name_1, action, value: getName2(1), namespace: null, ignoreCase: options.xmlMode ? null : false });
      } else if (firstChar === "[") {
        stripWhitespace(1);
        var name_2 = void 0;
        var namespace = null;
        if (selector.charAt(selectorIndex) === "|") {
          namespace = "";
          selectorIndex += 1;
        }
        if (selector.startsWith("*|", selectorIndex)) {
          namespace = "*";
          selectorIndex += 2;
        }
        name_2 = getName2(0);
        if (namespace === null && selector.charAt(selectorIndex) === "|" && selector.charAt(selectorIndex + 1) !== "=") {
          namespace = name_2;
          name_2 = getName2(1);
        }
        if ((_a = options.lowerCaseAttributeNames) !== null && _a !== void 0 ? _a : !options.xmlMode) {
          name_2 = name_2.toLowerCase();
        }
        stripWhitespace(0);
        var action = "exists";
        var possibleAction = actionTypes$1.get(selector.charAt(selectorIndex));
        if (possibleAction) {
          action = possibleAction;
          if (selector.charAt(selectorIndex + 1) !== "=") {
            throw new Error("Expected `=`");
          }
          stripWhitespace(2);
        } else if (selector.charAt(selectorIndex) === "=") {
          action = "equals";
          stripWhitespace(1);
        }
        var value = "";
        var ignoreCase = null;
        if (action !== "exists") {
          if (quotes.has(selector.charAt(selectorIndex))) {
            var quote = selector.charAt(selectorIndex);
            var sectionEnd = selectorIndex + 1;
            while (sectionEnd < selector.length && (selector.charAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
              sectionEnd += 1;
            }
            if (selector.charAt(sectionEnd) !== quote) {
              throw new Error("Attribute value didn't end");
            }
            value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
            selectorIndex = sectionEnd + 1;
          } else {
            var valueStart = selectorIndex;
            while (selectorIndex < selector.length && (!isWhitespace(selector.charAt(selectorIndex)) && selector.charAt(selectorIndex) !== "]" || isEscaped(selectorIndex))) {
              selectorIndex += 1;
            }
            value = unescapeCSS(selector.slice(valueStart, selectorIndex));
          }
          stripWhitespace(0);
          var forceIgnore = selector.charAt(selectorIndex);
          if (forceIgnore === "s" || forceIgnore === "S") {
            ignoreCase = false;
            stripWhitespace(1);
          } else if (forceIgnore === "i" || forceIgnore === "I") {
            ignoreCase = true;
            stripWhitespace(1);
          }
        }
        if (!options.xmlMode) {
          ignoreCase !== null && ignoreCase !== void 0 ? ignoreCase : ignoreCase = caseInsensitiveAttributes.has(name_2);
        }
        if (selector.charAt(selectorIndex) !== "]") {
          throw new Error("Attribute selector didn't terminate");
        }
        selectorIndex += 1;
        var attributeSelector = { type: "attribute", name: name_2, action, value, namespace, ignoreCase };
        tokens.push(attributeSelector);
      } else if (firstChar === ":") {
        if (selector.charAt(selectorIndex + 1) === ":") {
          tokens.push({ type: "pseudo-element", name: getName2(2).toLowerCase() });
          continue;
        }
        var name_3 = getName2(1).toLowerCase();
        var data = null;
        if (selector.charAt(selectorIndex) === "(") {
          if (unpackPseudos.has(name_3)) {
            if (quotes.has(selector.charAt(selectorIndex + 1))) {
              throw new Error("Pseudo-selector " + name_3 + " cannot be quoted");
            }
            data = [];
            selectorIndex = parseSelector(data, selector, options, selectorIndex + 1);
            if (selector.charAt(selectorIndex) !== ")") {
              throw new Error("Missing closing parenthesis in :" + name_3 + " (" + selector + ")");
            }
            selectorIndex += 1;
          } else {
            selectorIndex += 1;
            var start = selectorIndex;
            var counter = 1;
            for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
              if (selector.charAt(selectorIndex) === "(" && !isEscaped(selectorIndex)) {
                counter++;
              } else if (selector.charAt(selectorIndex) === ")" && !isEscaped(selectorIndex)) {
                counter--;
              }
            }
            if (counter) {
              throw new Error("Parenthesis not matched");
            }
            data = selector.slice(start, selectorIndex - 1);
            if (stripQuotesFromPseudos.has(name_3)) {
              var quot2 = data.charAt(0);
              if (quot2 === data.slice(-1) && quotes.has(quot2)) {
                data = data.slice(1, -1);
              }
              data = unescapeCSS(data);
            }
          }
        }
        tokens.push({ type: "pseudo", name: name_3, data });
      } else {
        var namespace = null;
        var name_4 = void 0;
        if (firstChar === "*") {
          selectorIndex += 1;
          name_4 = "*";
        } else if (reName.test(selector.slice(selectorIndex))) {
          if (selector.charAt(selectorIndex) === "|") {
            namespace = "";
            selectorIndex += 1;
          }
          name_4 = getName2(0);
        } else {
          if (tokens.length && tokens[tokens.length - 1].type === "descendant") {
            tokens.pop();
          }
          addToken(subselects2, tokens);
          return selectorIndex;
        }
        if (selector.charAt(selectorIndex) === "|") {
          namespace = name_4;
          if (selector.charAt(selectorIndex + 1) === "*") {
            name_4 = "*";
            selectorIndex += 2;
          } else {
            name_4 = getName2(1);
          }
        }
        if (name_4 === "*") {
          tokens.push({ type: "universal", namespace });
        } else {
          if ((_b = options.lowerCaseTags) !== null && _b !== void 0 ? _b : !options.xmlMode) {
            name_4 = name_4.toLowerCase();
          }
          tokens.push({ type: "tag", name: name_4, namespace });
        }
      }
    }
  }
  addToken(subselects2, tokens);
  return selectorIndex;
}
function addToken(subselects2, tokens) {
  if (subselects2.length > 0 && tokens.length === 0) {
    throw new Error("Empty sub-selector");
  }
  subselects2.push(tokens);
}
var stringify$1 = {};
var __spreadArray = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
  return to;
};
Object.defineProperty(stringify$1, "__esModule", { value: true });
var actionTypes = { equals: "", element: "~", start: "^", end: "$", any: "*", not: "!", hyphen: "|" };
var charsToEscape = new Set(__spreadArray(__spreadArray([], Object.keys(actionTypes).map((function(typeKey) {
  return actionTypes[typeKey];
})).filter(Boolean)), [":", "[", "]", " ", "\\", "(", ")", "'"]));
function stringify(selector) {
  return selector.map(stringifySubselector).join(", ");
}
stringify$1.default = stringify;
function stringifySubselector(token) {
  return token.map(stringifyToken).join("");
}
function stringifyToken(token) {
  switch (token.type) {
    case "child":
      return " > ";
    case "parent":
      return " < ";
    case "sibling":
      return " ~ ";
    case "adjacent":
      return " + ";
    case "descendant":
      return " ";
    case "universal":
      return getNamespace(token.namespace) + "*";
    case "tag":
      return getNamespacedName(token);
    case "pseudo-element":
      return "::" + escapeName(token.name);
    case "pseudo":
      if (token.data === null) return ":" + escapeName(token.name);
      if (typeof token.data === "string") {
        return ":" + escapeName(token.name) + "(" + escapeName(token.data) + ")";
      }
      return ":" + escapeName(token.name) + "(" + stringify(token.data) + ")";
    case "attribute": {
      if (token.name === "id" && token.action === "equals" && !token.ignoreCase && !token.namespace) {
        return "#" + escapeName(token.value);
      }
      if (token.name === "class" && token.action === "element" && !token.ignoreCase && !token.namespace) {
        return "." + escapeName(token.value);
      }
      var name_1 = getNamespacedName(token);
      if (token.action === "exists") {
        return "[" + name_1 + "]";
      }
      return "[" + name_1 + actionTypes[token.action] + "='" + escapeName(token.value) + "'" + (token.ignoreCase ? "i" : token.ignoreCase === false ? "s" : "") + "]";
    }
  }
}
function getNamespacedName(token) {
  return "" + getNamespace(token.namespace) + escapeName(token.name);
}
function getNamespace(namespace) {
  return namespace !== null ? (namespace === "*" ? "*" : escapeName(namespace)) + "|" : "";
}
function escapeName(str) {
  return str.split("").map((function(c) {
    return charsToEscape.has(c) ? "\\" + c : c;
  })).join("");
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports2) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding2(exports2, m, p);
  };
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.stringify = exports.parse = void 0;
  __exportStar(parse$4, exports);
  var parse_1 = parse$4;
  Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
    return __importDefault2(parse_1).default;
  } });
  var stringify_12 = stringify$1;
  Object.defineProperty(exports, "stringify", { enumerable: true, get: function() {
    return __importDefault2(stringify_12).default;
  } });
})(lib$2);
var sort = {};
var procedure = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.isTraversal = exports.procedure = void 0;
  exports.procedure = { universal: 50, tag: 30, attribute: 1, pseudo: 0, "pseudo-element": 0, descendant: -1, child: -1, parent: -1, sibling: -1, adjacent: -1, _flexibleDescendant: -1 };
  function isTraversal2(t) {
    return exports.procedure[t.type] < 0;
  }
  exports.isTraversal = isTraversal2;
})(procedure);
Object.defineProperty(sort, "__esModule", { value: true });
var procedure_1$1 = procedure;
var attributes$1 = { exists: 10, equals: 8, not: 7, start: 6, end: 6, any: 5, hyphen: 4, element: 4 };
function sortByProcedure(arr) {
  var procs = arr.map(getProcedure);
  for (var i = 1; i < arr.length; i++) {
    var procNew = procs[i];
    if (procNew < 0) continue;
    for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
      var token = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = token;
      procs[j + 1] = procs[j];
      procs[j] = procNew;
    }
  }
}
sort.default = sortByProcedure;
function getProcedure(token) {
  var proc = procedure_1$1.procedure[token.type];
  if (token.type === "attribute") {
    proc = attributes$1[token.action];
    if (proc === attributes$1.equals && token.name === "id") {
      proc = 9;
    }
    if (token.ignoreCase) {
      proc >>= 1;
    }
  } else if (token.type === "pseudo") {
    if (!token.data) {
      proc = 3;
    } else if (token.name === "has" || token.name === "contains") {
      proc = 0;
    } else if (Array.isArray(token.data)) {
      proc = 0;
      for (var i = 0; i < token.data.length; i++) {
        if (token.data[i].length !== 1) continue;
        var cur = getProcedure(token.data[i][0]);
        if (cur === 0) {
          proc = 0;
          break;
        }
        if (cur > proc) proc = cur;
      }
      if (token.data.length > 1 && proc > 0) proc -= 1;
    } else {
      proc = 1;
    }
  }
  return proc;
}
var general = {};
var attributes = {};
Object.defineProperty(attributes, "__esModule", { value: true });
attributes.attributeRules = void 0;
var boolbase_1$2 = boolbase;
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
  return value.replace(reChars, "\\$&");
}
attributes.attributeRules = { equals: function(next, data, _a) {
  var adapter = _a.adapter;
  var name2 = data.name;
  var value = data.value;
  if (data.ignoreCase) {
    value = value.toLowerCase();
    return function(elem) {
      var attr = adapter.getAttributeValue(elem, name2);
      return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
    };
  }
  return function(elem) {
    return adapter.getAttributeValue(elem, name2) === value && next(elem);
  };
}, hyphen: function(next, data, _a) {
  var adapter = _a.adapter;
  var name2 = data.name;
  var value = data.value;
  var len = value.length;
  if (data.ignoreCase) {
    value = value.toLowerCase();
    return function hyphenIC(elem) {
      var attr = adapter.getAttributeValue(elem, name2);
      return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
    };
  }
  return function hyphen2(elem) {
    var attr = adapter.getAttributeValue(elem, name2);
    return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
  };
}, element: function(next, _a, _b) {
  var name2 = _a.name, value = _a.value, ignoreCase = _a.ignoreCase;
  var adapter = _b.adapter;
  if (/\s/.test(value)) {
    return boolbase_1$2.falseFunc;
  }
  var regex = new RegExp("(?:^|\\s)" + escapeRegex(value) + "(?:$|\\s)", ignoreCase ? "i" : "");
  return function element(elem) {
    var attr = adapter.getAttributeValue(elem, name2);
    return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
  };
}, exists: function(next, _a, _b) {
  var name2 = _a.name;
  var adapter = _b.adapter;
  return function(elem) {
    return adapter.hasAttrib(elem, name2) && next(elem);
  };
}, start: function(next, data, _a) {
  var adapter = _a.adapter;
  var name2 = data.name;
  var value = data.value;
  var len = value.length;
  if (len === 0) {
    return boolbase_1$2.falseFunc;
  }
  if (data.ignoreCase) {
    value = value.toLowerCase();
    return function(elem) {
      var attr = adapter.getAttributeValue(elem, name2);
      return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
    };
  }
  return function(elem) {
    var _a2;
    return !!((_a2 = adapter.getAttributeValue(elem, name2)) === null || _a2 === void 0 ? void 0 : _a2.startsWith(value)) && next(elem);
  };
}, end: function(next, data, _a) {
  var adapter = _a.adapter;
  var name2 = data.name;
  var value = data.value;
  var len = -value.length;
  if (len === 0) {
    return boolbase_1$2.falseFunc;
  }
  if (data.ignoreCase) {
    value = value.toLowerCase();
    return function(elem) {
      var _a2;
      return ((_a2 = adapter.getAttributeValue(elem, name2)) === null || _a2 === void 0 ? void 0 : _a2.substr(len).toLowerCase()) === value && next(elem);
    };
  }
  return function(elem) {
    var _a2;
    return !!((_a2 = adapter.getAttributeValue(elem, name2)) === null || _a2 === void 0 ? void 0 : _a2.endsWith(value)) && next(elem);
  };
}, any: function(next, data, _a) {
  var adapter = _a.adapter;
  var name2 = data.name, value = data.value;
  if (value === "") {
    return boolbase_1$2.falseFunc;
  }
  if (data.ignoreCase) {
    var regex_1 = new RegExp(escapeRegex(value), "i");
    return function anyIC(elem) {
      var attr = adapter.getAttributeValue(elem, name2);
      return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
    };
  }
  return function(elem) {
    var _a2;
    return !!((_a2 = adapter.getAttributeValue(elem, name2)) === null || _a2 === void 0 ? void 0 : _a2.includes(value)) && next(elem);
  };
}, not: function(next, data, _a) {
  var adapter = _a.adapter;
  var name2 = data.name;
  var value = data.value;
  if (value === "") {
    return function(elem) {
      return !!adapter.getAttributeValue(elem, name2) && next(elem);
    };
  } else if (data.ignoreCase) {
    value = value.toLowerCase();
    return function(elem) {
      var attr = adapter.getAttributeValue(elem, name2);
      return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
    };
  }
  return function(elem) {
    return adapter.getAttributeValue(elem, name2) !== value && next(elem);
  };
} };
var pseudoSelectors = {};
var filters$1 = {};
var lib$1 = {};
var parse$2 = {};
Object.defineProperty(parse$2, "__esModule", { value: true });
parse$2.parse = void 0;
var RE_NTH_ELEMENT = /^([+-]?\d*n)?\s*(?:([+-]?)\s*(\d+))?$/;
function parse$1(formula) {
  formula = formula.trim().toLowerCase();
  if (formula === "even") {
    return [2, 0];
  } else if (formula === "odd") {
    return [2, 1];
  }
  var parsed = formula.match(RE_NTH_ELEMENT);
  if (!parsed) {
    throw new Error("n-th rule couldn't be parsed ('" + formula + "')");
  }
  var a;
  if (parsed[1]) {
    a = parseInt(parsed[1], 10);
    if (isNaN(a)) {
      a = parsed[1].startsWith("-") ? -1 : 1;
    }
  } else a = 0;
  var b = (parsed[2] === "-" ? -1 : 1) * (parsed[3] ? parseInt(parsed[3], 10) : 0);
  return [a, b];
}
parse$2.parse = parse$1;
var compile$2 = {};
Object.defineProperty(compile$2, "__esModule", { value: true });
compile$2.compile = void 0;
var boolbase_1$1 = boolbase;
function compile$1(parsed) {
  var a = parsed[0];
  var b = parsed[1] - 1;
  if (b < 0 && a <= 0) return boolbase_1$1.falseFunc;
  if (a === -1) return function(index) {
    return index <= b;
  };
  if (a === 0) return function(index) {
    return index === b;
  };
  if (a === 1) return b < 0 ? boolbase_1$1.trueFunc : function(index) {
    return index >= b;
  };
  var absA = Math.abs(a);
  var bMod = (b % absA + absA) % absA;
  return a > 1 ? function(index) {
    return index >= b && index % absA === bMod;
  } : function(index) {
    return index <= b && index % absA === bMod;
  };
}
compile$2.compile = compile$1;
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.compile = exports.parse = void 0;
  var parse_1 = parse$2;
  Object.defineProperty(exports, "parse", { enumerable: true, get: function() {
    return parse_1.parse;
  } });
  var compile_1 = compile$2;
  Object.defineProperty(exports, "compile", { enumerable: true, get: function() {
    return compile_1.compile;
  } });
  function nthCheck(formula) {
    return compile_1.compile(parse_1.parse(formula));
  }
  exports.default = nthCheck;
})(lib$1);
(function(exports) {
  var __importDefault2 = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.filters = void 0;
  var nth_check_1 = __importDefault2(lib$1);
  var boolbase_12 = boolbase;
  function getChildFunc(next, adapter) {
    return function(elem) {
      var parent = adapter.getParent(elem);
      return parent != null && adapter.isTag(parent) && next(elem);
    };
  }
  exports.filters = { contains: function(next, text, _a) {
    var adapter = _a.adapter;
    return function contains(elem) {
      return next(elem) && adapter.getText(elem).includes(text);
    };
  }, icontains: function(next, text, _a) {
    var adapter = _a.adapter;
    var itext = text.toLowerCase();
    return function icontains(elem) {
      return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
    };
  }, "nth-child": function(next, rule, _a) {
    var adapter = _a.adapter, equals2 = _a.equals;
    var func = nth_check_1.default(rule);
    if (func === boolbase_12.falseFunc) return boolbase_12.falseFunc;
    if (func === boolbase_12.trueFunc) return getChildFunc(next, adapter);
    return function nthChild(elem) {
      var siblings = adapter.getSiblings(elem);
      var pos = 0;
      for (var i = 0; i < siblings.length; i++) {
        if (equals2(elem, siblings[i])) break;
        if (adapter.isTag(siblings[i])) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  }, "nth-last-child": function(next, rule, _a) {
    var adapter = _a.adapter, equals2 = _a.equals;
    var func = nth_check_1.default(rule);
    if (func === boolbase_12.falseFunc) return boolbase_12.falseFunc;
    if (func === boolbase_12.trueFunc) return getChildFunc(next, adapter);
    return function nthLastChild(elem) {
      var siblings = adapter.getSiblings(elem);
      var pos = 0;
      for (var i = siblings.length - 1; i >= 0; i--) {
        if (equals2(elem, siblings[i])) break;
        if (adapter.isTag(siblings[i])) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  }, "nth-of-type": function(next, rule, _a) {
    var adapter = _a.adapter, equals2 = _a.equals;
    var func = nth_check_1.default(rule);
    if (func === boolbase_12.falseFunc) return boolbase_12.falseFunc;
    if (func === boolbase_12.trueFunc) return getChildFunc(next, adapter);
    return function nthOfType(elem) {
      var siblings = adapter.getSiblings(elem);
      var pos = 0;
      for (var i = 0; i < siblings.length; i++) {
        var currentSibling = siblings[i];
        if (equals2(elem, currentSibling)) break;
        if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  }, "nth-last-of-type": function(next, rule, _a) {
    var adapter = _a.adapter, equals2 = _a.equals;
    var func = nth_check_1.default(rule);
    if (func === boolbase_12.falseFunc) return boolbase_12.falseFunc;
    if (func === boolbase_12.trueFunc) return getChildFunc(next, adapter);
    return function nthLastOfType(elem) {
      var siblings = adapter.getSiblings(elem);
      var pos = 0;
      for (var i = siblings.length - 1; i >= 0; i--) {
        var currentSibling = siblings[i];
        if (equals2(elem, currentSibling)) break;
        if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
          pos++;
        }
      }
      return func(pos) && next(elem);
    };
  }, root: function(next, _rule, _a) {
    var adapter = _a.adapter;
    return function(elem) {
      var parent = adapter.getParent(elem);
      return (parent == null || !adapter.isTag(parent)) && next(elem);
    };
  }, scope: function(next, rule, options, context) {
    var equals2 = options.equals;
    if (!context || context.length === 0) {
      return exports.filters.root(next, rule, options);
    }
    if (context.length === 1) {
      return function(elem) {
        return equals2(context[0], elem) && next(elem);
      };
    }
    return function(elem) {
      return context.includes(elem) && next(elem);
    };
  }, hover: dynamicStatePseudo("isHovered"), visited: dynamicStatePseudo("isVisited"), active: dynamicStatePseudo("isActive") };
  function dynamicStatePseudo(name2) {
    return function dynamicPseudo(next, _rule, _a) {
      var adapter = _a.adapter;
      var func = adapter[name2];
      if (typeof func !== "function") {
        return boolbase_12.falseFunc;
      }
      return function active(elem) {
        return func(elem) && next(elem);
      };
    };
  }
})(filters$1);
var pseudos = {};
Object.defineProperty(pseudos, "__esModule", { value: true });
pseudos.verifyPseudoArgs = pseudos.pseudos = void 0;
pseudos.pseudos = { empty: function(elem, _a) {
  var adapter = _a.adapter;
  return !adapter.getChildren(elem).some((function(elem2) {
    return adapter.isTag(elem2) || adapter.getText(elem2) !== "";
  }));
}, "first-child": function(elem, _a) {
  var adapter = _a.adapter, equals2 = _a.equals;
  var firstChild = adapter.getSiblings(elem).find((function(elem2) {
    return adapter.isTag(elem2);
  }));
  return firstChild != null && equals2(elem, firstChild);
}, "last-child": function(elem, _a) {
  var adapter = _a.adapter, equals2 = _a.equals;
  var siblings = adapter.getSiblings(elem);
  for (var i = siblings.length - 1; i >= 0; i--) {
    if (equals2(elem, siblings[i])) return true;
    if (adapter.isTag(siblings[i])) break;
  }
  return false;
}, "first-of-type": function(elem, _a) {
  var adapter = _a.adapter, equals2 = _a.equals;
  var siblings = adapter.getSiblings(elem);
  var elemName = adapter.getName(elem);
  for (var i = 0; i < siblings.length; i++) {
    var currentSibling = siblings[i];
    if (equals2(elem, currentSibling)) return true;
    if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
      break;
    }
  }
  return false;
}, "last-of-type": function(elem, _a) {
  var adapter = _a.adapter, equals2 = _a.equals;
  var siblings = adapter.getSiblings(elem);
  var elemName = adapter.getName(elem);
  for (var i = siblings.length - 1; i >= 0; i--) {
    var currentSibling = siblings[i];
    if (equals2(elem, currentSibling)) return true;
    if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
      break;
    }
  }
  return false;
}, "only-of-type": function(elem, _a) {
  var adapter = _a.adapter, equals2 = _a.equals;
  var elemName = adapter.getName(elem);
  return adapter.getSiblings(elem).every((function(sibling) {
    return equals2(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
  }));
}, "only-child": function(elem, _a) {
  var adapter = _a.adapter, equals2 = _a.equals;
  return adapter.getSiblings(elem).every((function(sibling) {
    return equals2(elem, sibling) || !adapter.isTag(sibling);
  }));
} };
function verifyPseudoArgs(func, name2, subselect) {
  if (subselect === null) {
    if (func.length > 2) {
      throw new Error("pseudo-selector :" + name2 + " requires an argument");
    }
  } else if (func.length === 2) {
    throw new Error("pseudo-selector :" + name2 + " doesn't have any arguments");
  }
}
pseudos.verifyPseudoArgs = verifyPseudoArgs;
var aliases = {};
Object.defineProperty(aliases, "__esModule", { value: true });
aliases.aliases = void 0;
aliases.aliases = { "any-link": ":is(a, area, link)[href]", link: ":any-link:not(:visited)", disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )", enabled: ":not(:disabled)", checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)", required: ":is(input, select, textarea)[required]", optional: ":is(input, select, textarea):not([required])", selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)", checkbox: "[type=checkbox]", file: "[type=file]", password: "[type=password]", radio: "[type=radio]", reset: "[type=reset]", image: "[type=image]", submit: "[type=submit]", parent: ":not(:empty)", header: ":is(h1, h2, h3, h4, h5, h6)", button: ":is(button, input[type=button])", input: ":is(input, textarea, select, button)", text: "input:is(:not([type!='']), [type=text])" };
var subselects = {};
(function(exports) {
  var __spreadArray2 = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];
    return to;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
  var boolbase_12 = boolbase;
  var procedure_12 = procedure;
  exports.PLACEHOLDER_ELEMENT = {};
  function ensureIsTag(next, adapter) {
    if (next === boolbase_12.falseFunc) return boolbase_12.falseFunc;
    return function(elem) {
      return adapter.isTag(elem) && next(elem);
    };
  }
  exports.ensureIsTag = ensureIsTag;
  function getNextSiblings(elem, adapter) {
    var siblings = adapter.getSiblings(elem);
    if (siblings.length <= 1) return [];
    var elemIndex = siblings.indexOf(elem);
    if (elemIndex < 0 || elemIndex === siblings.length - 1) return [];
    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
  }
  exports.getNextSiblings = getNextSiblings;
  var is2 = function(next, token, options, context, compileToken2) {
    var opts = { xmlMode: !!options.xmlMode, adapter: options.adapter, equals: options.equals };
    var func = compileToken2(token, opts, context);
    return function(elem) {
      return func(elem) && next(elem);
    };
  };
  exports.subselects = { is: is2, matches: is2, not: function(next, token, options, context, compileToken2) {
    var opts = { xmlMode: !!options.xmlMode, adapter: options.adapter, equals: options.equals };
    var func = compileToken2(token, opts, context);
    if (func === boolbase_12.falseFunc) return next;
    if (func === boolbase_12.trueFunc) return boolbase_12.falseFunc;
    return function not2(elem) {
      return !func(elem) && next(elem);
    };
  }, has: function(next, subselect, options, _context, compileToken2) {
    var adapter = options.adapter;
    var opts = { xmlMode: !!options.xmlMode, adapter, equals: options.equals };
    var context = subselect.some((function(s) {
      return s.some(procedure_12.isTraversal);
    })) ? [exports.PLACEHOLDER_ELEMENT] : void 0;
    var compiled = compileToken2(subselect, opts, context);
    if (compiled === boolbase_12.falseFunc) return boolbase_12.falseFunc;
    if (compiled === boolbase_12.trueFunc) {
      return function(elem) {
        return adapter.getChildren(elem).some(adapter.isTag) && next(elem);
      };
    }
    var hasElement = ensureIsTag(compiled, adapter);
    var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings = _a === void 0 ? false : _a;
    if (context) {
      return function(elem) {
        context[0] = elem;
        var childs = adapter.getChildren(elem);
        var nextElements = shouldTestNextSiblings ? __spreadArray2(__spreadArray2([], childs), getNextSiblings(elem, adapter)) : childs;
        return next(elem) && adapter.existsOne(hasElement, nextElements);
      };
    }
    return function(elem) {
      return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
    };
  } };
})(subselects);
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
  var boolbase_12 = boolbase;
  var css_what_12 = lib$2;
  var filters_1 = filters$1;
  Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
    return filters_1.filters;
  } });
  var pseudos_1 = pseudos;
  Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
    return pseudos_1.pseudos;
  } });
  var aliases_1 = aliases;
  Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
    return aliases_1.aliases;
  } });
  var subselects_12 = subselects;
  function compilePseudoSelector(next, selector, options, context, compileToken2) {
    var name2 = selector.name, data = selector.data;
    if (Array.isArray(data)) {
      return subselects_12.subselects[name2](next, data, options, context, compileToken2);
    }
    if (name2 in aliases_1.aliases) {
      if (data != null) {
        throw new Error("Pseudo " + name2 + " doesn't have any arguments");
      }
      var alias = css_what_12.parse(aliases_1.aliases[name2], options);
      return subselects_12.subselects.is(next, alias, options, context, compileToken2);
    }
    if (name2 in filters_1.filters) {
      return filters_1.filters[name2](next, data, options, context);
    }
    if (name2 in pseudos_1.pseudos) {
      var pseudo_1 = pseudos_1.pseudos[name2];
      pseudos_1.verifyPseudoArgs(pseudo_1, name2, data);
      return pseudo_1 === boolbase_12.falseFunc ? boolbase_12.falseFunc : next === boolbase_12.trueFunc ? function(elem) {
        return pseudo_1(elem, options, data);
      } : function(elem) {
        return pseudo_1(elem, options, data) && next(elem);
      };
    }
    throw new Error("unmatched pseudo-class :" + name2);
  }
  exports.compilePseudoSelector = compilePseudoSelector;
})(pseudoSelectors);
Object.defineProperty(general, "__esModule", { value: true });
general.compileGeneralSelector = void 0;
var attributes_1 = attributes;
var pseudo_selectors_1 = pseudoSelectors;
function compileGeneralSelector(next, selector, options, context, compileToken2) {
  var adapter = options.adapter, equals2 = options.equals;
  switch (selector.type) {
    case "pseudo-element":
      throw new Error("Pseudo-elements are not supported by css-select");
    case "attribute":
      return attributes_1.attributeRules[selector.action](next, selector, options);
    case "pseudo":
      return pseudo_selectors_1.compilePseudoSelector(next, selector, options, context, compileToken2);
    case "tag":
      return function tag(elem) {
        return adapter.getName(elem) === selector.name && next(elem);
      };
    case "descendant":
      if (options.cacheResults === false || typeof WeakSet === "undefined") {
        return function descendant(elem) {
          var current = elem;
          while (current = adapter.getParent(current)) {
            if (adapter.isTag(current) && next(current)) {
              return true;
            }
          }
          return false;
        };
      }
      var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
      return function cachedDescendant(elem) {
        var current = elem;
        while (current = adapter.getParent(current)) {
          if (!isFalseCache_1.has(current)) {
            if (adapter.isTag(current) && next(current)) {
              return true;
            }
            isFalseCache_1.add(current);
          }
        }
        return false;
      };
    case "_flexibleDescendant":
      return function flexibleDescendant(elem) {
        var current = elem;
        do {
          if (adapter.isTag(current) && next(current)) return true;
        } while (current = adapter.getParent(current));
        return false;
      };
    case "parent":
      return function parent(elem) {
        return adapter.getChildren(elem).some((function(elem2) {
          return adapter.isTag(elem2) && next(elem2);
        }));
      };
    case "child":
      return function child(elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(parent);
      };
    case "sibling":
      return function sibling(elem) {
        var siblings = adapter.getSiblings(elem);
        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals2(elem, currentSibling)) break;
          if (adapter.isTag(currentSibling) && next(currentSibling)) {
            return true;
          }
        }
        return false;
      };
    case "adjacent":
      return function adjacent(elem) {
        var siblings = adapter.getSiblings(elem);
        var lastElement;
        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals2(elem, currentSibling)) break;
          if (adapter.isTag(currentSibling)) {
            lastElement = currentSibling;
          }
        }
        return !!lastElement && next(lastElement);
      };
    case "universal":
      return next;
  }
}
general.compileGeneralSelector = compileGeneralSelector;
var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
};
Object.defineProperty(compile$3, "__esModule", { value: true });
compile$3.compileToken = compile$3.compileUnsafe = compile$3.compile = void 0;
var css_what_1 = lib$2;
var boolbase_1 = boolbase;
var sort_1 = __importDefault(sort);
var procedure_1 = procedure;
var general_1 = general;
var subselects_1 = subselects;
function compile(selector, options, context) {
  var next = compileUnsafe(selector, options, context);
  return subselects_1.ensureIsTag(next, options.adapter);
}
compile$3.compile = compile;
function compileUnsafe(selector, options, context) {
  var token = typeof selector === "string" ? css_what_1.parse(selector, options) : selector;
  return compileToken(token, options, context);
}
compile$3.compileUnsafe = compileUnsafe;
function includesScopePseudo(t) {
  return t.type === "pseudo" && (t.name === "scope" || Array.isArray(t.data) && t.data.some((function(data) {
    return data.some(includesScopePseudo);
  })));
}
var DESCENDANT_TOKEN = { type: "descendant" };
var FLEXIBLE_DESCENDANT_TOKEN = { type: "_flexibleDescendant" };
var SCOPE_TOKEN = { type: "pseudo", name: "scope", data: null };
function absolutize(token, _a, context) {
  var adapter = _a.adapter;
  var hasContext = !!(context === null || context === void 0 ? void 0 : context.every((function(e) {
    var parent = adapter.isTag(e) && adapter.getParent(e);
    return e === subselects_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
  })));
  for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
    var t = token_1[_i];
    if (t.length > 0 && procedure_1.isTraversal(t[0]) && t[0].type !== "descendant") ;
    else if (hasContext && !t.some(includesScopePseudo)) {
      t.unshift(DESCENDANT_TOKEN);
    } else {
      continue;
    }
    t.unshift(SCOPE_TOKEN);
  }
}
function compileToken(token, options, context) {
  var _a;
  token = token.filter((function(t) {
    return t.length > 0;
  }));
  token.forEach(sort_1.default);
  context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
  var isArrayContext = Array.isArray(context);
  var finalContext = context && (Array.isArray(context) ? context : [context]);
  absolutize(token, options, finalContext);
  var shouldTestNextSiblings = false;
  var query = token.map((function(rules) {
    if (rules.length >= 2) {
      var first = rules[0], second = rules[1];
      if (first.type !== "pseudo" || first.name !== "scope") ;
      else if (isArrayContext && second.type === "descendant") {
        rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
      } else if (second.type === "adjacent" || second.type === "sibling") {
        shouldTestNextSiblings = true;
      }
    }
    return compileRules(rules, options, finalContext);
  })).reduce(reduceRules, boolbase_1.falseFunc);
  query.shouldTestNextSiblings = shouldTestNextSiblings;
  return query;
}
compile$3.compileToken = compileToken;
function compileRules(rules, options, context) {
  var _a;
  return rules.reduce((function(previous, rule) {
    return previous === boolbase_1.falseFunc ? boolbase_1.falseFunc : general_1.compileGeneralSelector(previous, rule, options, context, compileToken);
  }), (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.trueFunc);
}
function reduceRules(a, b) {
  if (b === boolbase_1.falseFunc || a === boolbase_1.trueFunc) {
    return a;
  }
  if (a === boolbase_1.falseFunc || b === boolbase_1.trueFunc) {
    return b;
  }
  return function combine(elem) {
    return a(elem) || b(elem);
  };
}
(function(exports) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() {
      return m[k];
    } });
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __setModuleDefault2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
  } : function(o, v) {
    o["default"] = v;
  });
  var __importStar2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
      for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding2(result, mod, k);
    }
    __setModuleDefault2(result, mod);
    return result;
  };
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
  var DomUtils = __importStar2(lib$7);
  var boolbase_12 = boolbase;
  var compile_1 = compile$3;
  var subselects_12 = subselects;
  var defaultEquals = function(a, b) {
    return a === b;
  };
  var defaultOptions = { adapter: DomUtils, equals: defaultEquals };
  function convertOptionFormats(options) {
    var _a, _b, _c, _d;
    var opts = options !== null && options !== void 0 ? options : defaultOptions;
    (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
    (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
    return opts;
  }
  function wrapCompile(func) {
    return function addAdapter(selector, options, context) {
      var opts = convertOptionFormats(options);
      return func(selector, opts, context);
    };
  }
  exports.compile = wrapCompile(compile_1.compile);
  exports._compileUnsafe = wrapCompile(compile_1.compileUnsafe);
  exports._compileToken = wrapCompile(compile_1.compileToken);
  function getSelectorFunc(searchFunc) {
    return function select(query, elements, options) {
      var opts = convertOptionFormats(options);
      if (typeof query !== "function") {
        query = compile_1.compileUnsafe(query, opts, elements);
      }
      var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
      return searchFunc(query, filteredElements, opts);
    };
  }
  function prepareContext(elems2, adapter, shouldTestNextSiblings) {
    if (shouldTestNextSiblings === void 0) {
      shouldTestNextSiblings = false;
    }
    if (shouldTestNextSiblings) {
      elems2 = appendNextSiblings(elems2, adapter);
    }
    return Array.isArray(elems2) ? adapter.removeSubsets(elems2) : adapter.getChildren(elems2);
  }
  exports.prepareContext = prepareContext;
  function appendNextSiblings(elem, adapter) {
    var elems2 = Array.isArray(elem) ? elem.slice(0) : [elem];
    for (var i = 0; i < elems2.length; i++) {
      var nextSiblings = subselects_12.getNextSiblings(elems2[i], adapter);
      elems2.push.apply(elems2, nextSiblings);
    }
    return elems2;
  }
  exports.selectAll = getSelectorFunc((function(query, elems2, options) {
    return query === boolbase_12.falseFunc || !elems2 || elems2.length === 0 ? [] : options.adapter.findAll(query, elems2);
  }));
  exports.selectOne = getSelectorFunc((function(query, elems2, options) {
    return query === boolbase_12.falseFunc || !elems2 || elems2.length === 0 ? null : options.adapter.findOne(query, elems2);
  }));
  function is2(elem, query, options) {
    var opts = convertOptionFormats(options);
    return (typeof query === "function" ? query : compile_1.compile(query, opts))(elem);
  }
  exports.is = is2;
  exports.default = exports.selectAll;
  var pseudo_selectors_12 = pseudoSelectors;
  Object.defineProperty(exports, "filters", { enumerable: true, get: function() {
    return pseudo_selectors_12.filters;
  } });
  Object.defineProperty(exports, "pseudos", { enumerable: true, get: function() {
    return pseudo_selectors_12.pseudos;
  } });
  Object.defineProperty(exports, "aliases", { enumerable: true, get: function() {
    return pseudo_selectors_12.aliases;
  } });
})(lib$8);
var isTag = (node2) => node2.type === "element";
var existsOne = (test, elems2) => elems2.some(((elem) => {
  if (isTag(elem)) {
    return test(elem) || existsOne(test, getChildren(elem));
  } else {
    return false;
  }
}));
var getAttributeValue = (elem, name2) => elem.attributes[name2];
var getChildren = (node2) => node2.children || [];
var getName = (elemAst) => elemAst.name;
var getParent = (node2) => node2.parentNode || null;
var getSiblings = (elem) => {
  var parent = getParent(elem);
  return parent ? getChildren(parent) : [];
};
var getText = (node2) => {
  if (node2.children[0].type === "text" && node2.children[0].type === "cdata") {
    return node2.children[0].value;
  }
  return "";
};
var hasAttrib = (elem, name2) => elem.attributes[name2] !== void 0;
var removeSubsets = (nodes) => {
  let idx = nodes.length;
  let node2;
  let ancestor;
  let replace2;
  while (--idx > -1) {
    node2 = ancestor = nodes[idx];
    nodes[idx] = null;
    replace2 = true;
    while (ancestor) {
      if (nodes.includes(ancestor)) {
        replace2 = false;
        nodes.splice(idx, 1);
        break;
      }
      ancestor = getParent(ancestor);
    }
    if (replace2) {
      nodes[idx] = node2;
    }
  }
  return nodes;
};
var findAll = (test, elems2) => {
  const result = [];
  for (const elem of elems2) {
    if (isTag(elem)) {
      if (test(elem)) {
        result.push(elem);
      }
      result.push(...findAll(test, getChildren(elem)));
    }
  }
  return result;
};
var findOne = (test, elems2) => {
  for (const elem of elems2) {
    if (isTag(elem)) {
      if (test(elem)) {
        return elem;
      }
      const result = findOne(test, getChildren(elem));
      if (result) {
        return result;
      }
    }
  }
  return null;
};
var svgoCssSelectAdapter$1 = { isTag, existsOne, getAttributeValue, getChildren, getName, getParent, getSiblings, getText, hasAttrib, removeSubsets, findAll, findOne };
var cssSelectAdapter = svgoCssSelectAdapter$1;
var { selectAll: selectAll$1, selectOne: selectOne$1, is: is$1 } = lib$8;
var xastAdaptor = cssSelectAdapter;
var cssSelectOptions = { xmlMode: true, adapter: xastAdaptor };
var querySelectorAll$2 = (node2, selector) => selectAll$1(selector, node2, cssSelectOptions);
xast.querySelectorAll = querySelectorAll$2;
var querySelector$1 = (node2, selector) => selectOne$1(selector, node2, cssSelectOptions);
xast.querySelector = querySelector$1;
var matches$1 = (node2, selector) => is$1(node2, selector, cssSelectOptions);
xast.matches = matches$1;
var closestByName$1 = (node2, name2) => {
  let currentNode = node2;
  while (currentNode) {
    if (currentNode.type === "element" && currentNode.name === name2) {
      return currentNode;
    }
    currentNode = currentNode.parentNode;
  }
  return null;
};
xast.closestByName = closestByName$1;
var visitSkip$6 = Symbol();
xast.visitSkip = visitSkip$6;
var visit$5 = (node2, visitor, parentNode) => {
  const callbacks = visitor[node2.type];
  if (callbacks && callbacks.enter) {
    const symbol = callbacks.enter(node2, parentNode);
    if (symbol === visitSkip$6) {
      return;
    }
  }
  if (node2.type === "root") {
    for (const child of node2.children) {
      visit$5(child, visitor, node2);
    }
  }
  if (node2.type === "element") {
    if (parentNode.children.includes(node2)) {
      for (const child of node2.children) {
        visit$5(child, visitor, node2);
      }
    }
  }
  if (callbacks && callbacks.exit) {
    callbacks.exit(node2, parentNode);
  }
};
xast.visit = visit$5;
var detachNodeFromParent$m = (node2, parentNode) => {
  parentNode.children = parentNode.children.filter(((child) => child !== node2));
};
xast.detachNodeFromParent = detachNodeFromParent$m;
var { visit: visit$4 } = xast;
var invokePlugins$1 = (ast2, info, plugins2, overrides, globalOverrides) => {
  for (const plugin of plugins2) {
    const override = overrides == null ? null : overrides[plugin.name];
    if (override === false) {
      continue;
    }
    const params = __spreadValues(__spreadValues(__spreadValues({}, plugin.params), globalOverrides), override);
    if (plugin.type === "perItem") {
      ast2 = perItem(ast2, info, plugin, params);
    }
    if (plugin.type === "perItemReverse") {
      ast2 = perItem(ast2, info, plugin, params, true);
    }
    if (plugin.type === "full") {
      if (plugin.active) {
        ast2 = plugin.fn(ast2, params, info);
      }
    }
    if (plugin.type === "visitor") {
      if (plugin.active) {
        const visitor = plugin.fn(ast2, params, info);
        if (visitor != null) {
          visit$4(ast2, visitor);
        }
      }
    }
  }
  return ast2;
};
plugins.invokePlugins = invokePlugins$1;
function perItem(data, info, plugin, params, reverse) {
  function monkeys(items) {
    items.children = items.children.filter((function(item) {
      if (reverse && item.children) {
        monkeys(item);
      }
      let kept = true;
      if (plugin.active) {
        kept = plugin.fn(item, params, info) !== false;
      }
      if (!reverse && item.children) {
        monkeys(item);
      }
      return kept;
    }));
    return items;
  }
  return monkeys(data);
}
var createPreset$1 = ({ name: name2, plugins: plugins2 }) => ({ name: name2, type: "full", fn: (ast2, params, info) => {
  const { floatPrecision, overrides } = params;
  const globalOverrides = {};
  if (floatPrecision != null) {
    globalOverrides.floatPrecision = floatPrecision;
  }
  if (overrides) {
    for (const [pluginName, override] of Object.entries(overrides)) {
      if (override === true) {
        console.warn(`You are trying to enable ${pluginName} which is not part of preset.
Try to put it before or after preset, for example

plugins: [
  {
    name: 'preset-default',
  },
  'cleanupListOfValues'
]
`);
      }
    }
  }
  return invokePlugins$1(ast2, info, plugins2, overrides, globalOverrides);
} });
plugins.createPreset = createPreset$1;
var removeDoctype$1 = {};
var { detachNodeFromParent: detachNodeFromParent$l } = xast;
removeDoctype$1.name = "removeDoctype";
removeDoctype$1.type = "visitor";
removeDoctype$1.active = true;
removeDoctype$1.description = "removes doctype declaration";
removeDoctype$1.fn = () => ({ doctype: { enter: (node2, parentNode) => {
  detachNodeFromParent$l(node2, parentNode);
} } });
var removeXMLProcInst$1 = {};
var { detachNodeFromParent: detachNodeFromParent$k } = xast;
removeXMLProcInst$1.name = "removeXMLProcInst";
removeXMLProcInst$1.type = "visitor";
removeXMLProcInst$1.active = true;
removeXMLProcInst$1.description = "removes XML processing instructions";
removeXMLProcInst$1.fn = () => ({ instruction: { enter: (node2, parentNode) => {
  if (node2.name === "xml") {
    detachNodeFromParent$k(node2, parentNode);
  }
} } });
var removeComments$1 = {};
var { detachNodeFromParent: detachNodeFromParent$j } = xast;
removeComments$1.name = "removeComments";
removeComments$1.type = "visitor";
removeComments$1.active = true;
removeComments$1.description = "removes comments";
removeComments$1.fn = () => ({ comment: { enter: (node2, parentNode) => {
  if (node2.value.charAt(0) !== "!") {
    detachNodeFromParent$j(node2, parentNode);
  }
} } });
var removeMetadata$1 = {};
var { detachNodeFromParent: detachNodeFromParent$i } = xast;
removeMetadata$1.name = "removeMetadata";
removeMetadata$1.type = "visitor";
removeMetadata$1.active = true;
removeMetadata$1.description = "removes <metadata>";
removeMetadata$1.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (node2.name === "metadata") {
    detachNodeFromParent$i(node2, parentNode);
  }
} } });
var removeEditorsNSData$1 = {};
var _collections = {};
(function(exports) {
  exports.elemsGroups = { animation: ["animate", "animateColor", "animateMotion", "animateTransform", "set"], descriptive: ["desc", "metadata", "title"], shape: ["circle", "ellipse", "line", "path", "polygon", "polyline", "rect"], structural: ["defs", "g", "svg", "symbol", "use"], paintServer: ["solidColor", "linearGradient", "radialGradient", "meshGradient", "pattern", "hatch"], nonRendering: ["linearGradient", "radialGradient", "pattern", "clipPath", "mask", "marker", "symbol", "filter", "solidColor"], container: ["a", "defs", "g", "marker", "mask", "missing-glyph", "pattern", "svg", "switch", "symbol", "foreignObject"], textContent: ["altGlyph", "altGlyphDef", "altGlyphItem", "glyph", "glyphRef", "textPath", "text", "tref", "tspan"], textContentChild: ["altGlyph", "textPath", "tref", "tspan"], lightSource: ["feDiffuseLighting", "feSpecularLighting", "feDistantLight", "fePointLight", "feSpotLight"], filterPrimitive: ["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence"] };
  exports.textElems = exports.elemsGroups.textContent.concat("title");
  exports.pathElems = ["path", "glyph", "missing-glyph"];
  exports.attrsGroups = { animationAddition: ["additive", "accumulate"], animationAttributeTarget: ["attributeType", "attributeName"], animationEvent: ["onbegin", "onend", "onrepeat", "onload"], animationTiming: ["begin", "dur", "end", "min", "max", "restart", "repeatCount", "repeatDur", "fill"], animationValue: ["calcMode", "values", "keyTimes", "keySplines", "from", "to", "by"], conditionalProcessing: ["requiredFeatures", "requiredExtensions", "systemLanguage"], core: ["id", "tabindex", "xml:base", "xml:lang", "xml:space"], graphicalEvent: ["onfocusin", "onfocusout", "onactivate", "onclick", "onmousedown", "onmouseup", "onmouseover", "onmousemove", "onmouseout", "onload"], presentation: ["alignment-baseline", "baseline-shift", "clip", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cursor", "direction", "display", "dominant-baseline", "enable-background", "fill", "fill-opacity", "fill-rule", "filter", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "image-rendering", "letter-spacing", "lighting-color", "marker-end", "marker-mid", "marker-start", "mask", "opacity", "overflow", "paint-order", "pointer-events", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-decoration", "text-overflow", "text-rendering", "transform", "transform-origin", "unicode-bidi", "vector-effect", "visibility", "word-spacing", "writing-mode"], xlink: ["xlink:href", "xlink:show", "xlink:actuate", "xlink:type", "xlink:role", "xlink:arcrole", "xlink:title"], documentEvent: ["onunload", "onabort", "onerror", "onresize", "onscroll", "onzoom"], filterPrimitive: ["x", "y", "width", "height", "result"], transferFunction: ["type", "tableValues", "slope", "intercept", "amplitude", "exponent", "offset"] };
  exports.attrsGroupsDefaults = { core: { "xml:space": "default" }, presentation: { clip: "auto", "clip-path": "none", "clip-rule": "nonzero", mask: "none", opacity: "1", "stop-color": "#000", "stop-opacity": "1", "fill-opacity": "1", "fill-rule": "nonzero", fill: "#000", stroke: "none", "stroke-width": "1", "stroke-linecap": "butt", "stroke-linejoin": "miter", "stroke-miterlimit": "4", "stroke-dasharray": "none", "stroke-dashoffset": "0", "stroke-opacity": "1", "paint-order": "normal", "vector-effect": "none", display: "inline", visibility: "visible", "marker-start": "none", "marker-mid": "none", "marker-end": "none", "color-interpolation": "sRGB", "color-interpolation-filters": "linearRGB", "color-rendering": "auto", "shape-rendering": "auto", "text-rendering": "auto", "image-rendering": "auto", "font-style": "normal", "font-variant": "normal", "font-weight": "normal", "font-stretch": "normal", "font-size": "medium", "font-size-adjust": "none", kerning: "auto", "letter-spacing": "normal", "word-spacing": "normal", "text-decoration": "none", "text-anchor": "start", "text-overflow": "clip", "writing-mode": "lr-tb", "glyph-orientation-vertical": "auto", "glyph-orientation-horizontal": "0deg", direction: "ltr", "unicode-bidi": "normal", "dominant-baseline": "auto", "alignment-baseline": "baseline", "baseline-shift": "baseline" }, transferFunction: { slope: "1", intercept: "0", amplitude: "1", exponent: "1", offset: "0" } };
  exports.elems = { a: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "transform", "target"], defaults: { target: "_self" }, contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view", "tspan"] }, altGlyph: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "x", "y", "dx", "dy", "glyphRef", "format", "rotate"] }, altGlyphDef: { attrsGroups: ["core"], content: ["glyphRef"] }, altGlyphItem: { attrsGroups: ["core"], content: ["glyphRef", "altGlyphItem"] }, animate: { attrsGroups: ["conditionalProcessing", "core", "animationAddition", "animationAttributeTarget", "animationEvent", "animationTiming", "animationValue", "presentation", "xlink"], attrs: ["externalResourcesRequired"], contentGroups: ["descriptive"] }, animateColor: { attrsGroups: ["conditionalProcessing", "core", "animationEvent", "xlink", "animationAttributeTarget", "animationTiming", "animationValue", "animationAddition", "presentation"], attrs: ["externalResourcesRequired"], contentGroups: ["descriptive"] }, animateMotion: { attrsGroups: ["conditionalProcessing", "core", "animationEvent", "xlink", "animationTiming", "animationValue", "animationAddition"], attrs: ["externalResourcesRequired", "path", "keyPoints", "rotate", "origin"], defaults: { rotate: "0" }, contentGroups: ["descriptive"], content: ["mpath"] }, animateTransform: { attrsGroups: ["conditionalProcessing", "core", "animationEvent", "xlink", "animationAttributeTarget", "animationTiming", "animationValue", "animationAddition"], attrs: ["externalResourcesRequired", "type"], contentGroups: ["descriptive"] }, circle: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "cx", "cy", "r"], defaults: { cx: "0", cy: "0" }, contentGroups: ["animation", "descriptive"] }, clipPath: { attrsGroups: ["conditionalProcessing", "core", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "clipPathUnits"], defaults: { clipPathUnits: "userSpaceOnUse" }, contentGroups: ["animation", "descriptive", "shape"], content: ["text", "use"] }, "color-profile": { attrsGroups: ["core", "xlink"], attrs: ["local", "name", "rendering-intent"], defaults: { name: "sRGB", "rendering-intent": "auto" }, contentGroups: ["descriptive"] }, cursor: { attrsGroups: ["core", "conditionalProcessing", "xlink"], attrs: ["externalResourcesRequired", "x", "y"], defaults: { x: "0", y: "0" }, contentGroups: ["descriptive"] }, defs: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform"], contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, desc: { attrsGroups: ["core"], attrs: ["class", "style"] }, ellipse: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "cx", "cy", "rx", "ry"], defaults: { cx: "0", cy: "0" }, contentGroups: ["animation", "descriptive"] }, feBlend: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "in2", "mode"], defaults: { mode: "normal" }, content: ["animate", "set"] }, feColorMatrix: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "type", "values"], defaults: { type: "matrix" }, content: ["animate", "set"] }, feComponentTransfer: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in"], content: ["feFuncA", "feFuncB", "feFuncG", "feFuncR"] }, feComposite: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "in2", "operator", "k1", "k2", "k3", "k4"], defaults: { operator: "over", k1: "0", k2: "0", k3: "0", k4: "0" }, content: ["animate", "set"] }, feConvolveMatrix: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "order", "kernelMatrix", "divisor", "bias", "targetX", "targetY", "edgeMode", "kernelUnitLength", "preserveAlpha"], defaults: { order: "3", bias: "0", edgeMode: "duplicate", preserveAlpha: "false" }, content: ["animate", "set"] }, feDiffuseLighting: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "surfaceScale", "diffuseConstant", "kernelUnitLength"], defaults: { surfaceScale: "1", diffuseConstant: "1" }, contentGroups: ["descriptive"], content: ["feDistantLight", "fePointLight", "feSpotLight"] }, feDisplacementMap: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "in2", "scale", "xChannelSelector", "yChannelSelector"], defaults: { scale: "0", xChannelSelector: "A", yChannelSelector: "A" }, content: ["animate", "set"] }, feDistantLight: { attrsGroups: ["core"], attrs: ["azimuth", "elevation"], defaults: { azimuth: "0", elevation: "0" }, content: ["animate", "set"] }, feFlood: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style"], content: ["animate", "animateColor", "set"] }, feFuncA: { attrsGroups: ["core", "transferFunction"], content: ["set", "animate"] }, feFuncB: { attrsGroups: ["core", "transferFunction"], content: ["set", "animate"] }, feFuncG: { attrsGroups: ["core", "transferFunction"], content: ["set", "animate"] }, feFuncR: { attrsGroups: ["core", "transferFunction"], content: ["set", "animate"] }, feGaussianBlur: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "stdDeviation"], defaults: { stdDeviation: "0" }, content: ["set", "animate"] }, feImage: { attrsGroups: ["core", "presentation", "filterPrimitive", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "preserveAspectRatio", "href", "xlink:href"], defaults: { preserveAspectRatio: "xMidYMid meet" }, content: ["animate", "animateTransform", "set"] }, feMerge: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style"], content: ["feMergeNode"] }, feMergeNode: { attrsGroups: ["core"], attrs: ["in"], content: ["animate", "set"] }, feMorphology: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "operator", "radius"], defaults: { operator: "erode", radius: "0" }, content: ["animate", "set"] }, feOffset: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "dx", "dy"], defaults: { dx: "0", dy: "0" }, content: ["animate", "set"] }, fePointLight: { attrsGroups: ["core"], attrs: ["x", "y", "z"], defaults: { x: "0", y: "0", z: "0" }, content: ["animate", "set"] }, feSpecularLighting: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in", "surfaceScale", "specularConstant", "specularExponent", "kernelUnitLength"], defaults: { surfaceScale: "1", specularConstant: "1", specularExponent: "1" }, contentGroups: ["descriptive", "lightSource"] }, feSpotLight: { attrsGroups: ["core"], attrs: ["x", "y", "z", "pointsAtX", "pointsAtY", "pointsAtZ", "specularExponent", "limitingConeAngle"], defaults: { x: "0", y: "0", z: "0", pointsAtX: "0", pointsAtY: "0", pointsAtZ: "0", specularExponent: "1" }, content: ["animate", "set"] }, feTile: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "in"], content: ["animate", "set"] }, feTurbulence: { attrsGroups: ["core", "presentation", "filterPrimitive"], attrs: ["class", "style", "baseFrequency", "numOctaves", "seed", "stitchTiles", "type"], defaults: { baseFrequency: "0", numOctaves: "1", seed: "0", stitchTiles: "noStitch", type: "turbulence" }, content: ["animate", "set"] }, filter: { attrsGroups: ["core", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "x", "y", "width", "height", "filterRes", "filterUnits", "primitiveUnits", "href", "xlink:href"], defaults: { primitiveUnits: "userSpaceOnUse", x: "-10%", y: "-10%", width: "120%", height: "120%" }, contentGroups: ["descriptive", "filterPrimitive"], content: ["animate", "set"] }, font: { attrsGroups: ["core", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "horiz-origin-x", "horiz-origin-y", "horiz-adv-x", "vert-origin-x", "vert-origin-y", "vert-adv-y"], defaults: { "horiz-origin-x": "0", "horiz-origin-y": "0" }, contentGroups: ["descriptive"], content: ["font-face", "glyph", "hkern", "missing-glyph", "vkern"] }, "font-face": { attrsGroups: ["core"], attrs: ["font-family", "font-style", "font-variant", "font-weight", "font-stretch", "font-size", "unicode-range", "units-per-em", "panose-1", "stemv", "stemh", "slope", "cap-height", "x-height", "accent-height", "ascent", "descent", "widths", "bbox", "ideographic", "alphabetic", "mathematical", "hanging", "v-ideographic", "v-alphabetic", "v-mathematical", "v-hanging", "underline-position", "underline-thickness", "strikethrough-position", "strikethrough-thickness", "overline-position", "overline-thickness"], defaults: { "font-style": "all", "font-variant": "normal", "font-weight": "all", "font-stretch": "normal", "unicode-range": "U+0-10FFFF", "units-per-em": "1000", "panose-1": "0 0 0 0 0 0 0 0 0 0", slope: "0" }, contentGroups: ["descriptive"], content: ["font-face-src"] }, "font-face-format": { attrsGroups: ["core"], attrs: ["string"] }, "font-face-name": { attrsGroups: ["core"], attrs: ["name"] }, "font-face-src": { attrsGroups: ["core"], content: ["font-face-name", "font-face-uri"] }, "font-face-uri": { attrsGroups: ["core", "xlink"], attrs: ["href", "xlink:href"], content: ["font-face-format"] }, foreignObject: { attrsGroups: ["core", "conditionalProcessing", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "x", "y", "width", "height"], defaults: { x: "0", y: "0" } }, g: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform"], contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, glyph: { attrsGroups: ["core", "presentation"], attrs: ["class", "style", "d", "horiz-adv-x", "vert-origin-x", "vert-origin-y", "vert-adv-y", "unicode", "glyph-name", "orientation", "arabic-form", "lang"], defaults: { "arabic-form": "initial" }, contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, glyphRef: { attrsGroups: ["core", "presentation"], attrs: ["class", "style", "d", "horiz-adv-x", "vert-origin-x", "vert-origin-y", "vert-adv-y"], contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, hatch: { attrsGroups: ["core", "presentation", "xlink"], attrs: ["class", "style", "x", "y", "pitch", "rotate", "hatchUnits", "hatchContentUnits", "transform"], defaults: { hatchUnits: "objectBoundingBox", hatchContentUnits: "userSpaceOnUse", x: "0", y: "0", pitch: "0", rotate: "0" }, contentGroups: ["animation", "descriptive"], content: ["hatchPath"] }, hatchPath: { attrsGroups: ["core", "presentation", "xlink"], attrs: ["class", "style", "d", "offset"], defaults: { offset: "0" }, contentGroups: ["animation", "descriptive"] }, hkern: { attrsGroups: ["core"], attrs: ["u1", "g1", "u2", "g2", "k"] }, image: { attrsGroups: ["core", "conditionalProcessing", "graphicalEvent", "xlink", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "preserveAspectRatio", "transform", "x", "y", "width", "height", "href", "xlink:href"], defaults: { x: "0", y: "0", preserveAspectRatio: "xMidYMid meet" }, contentGroups: ["animation", "descriptive"] }, line: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "x1", "y1", "x2", "y2"], defaults: { x1: "0", y1: "0", x2: "0", y2: "0" }, contentGroups: ["animation", "descriptive"] }, linearGradient: { attrsGroups: ["core", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "x1", "y1", "x2", "y2", "gradientUnits", "gradientTransform", "spreadMethod", "href", "xlink:href"], defaults: { x1: "0", y1: "0", x2: "100%", y2: "0", spreadMethod: "pad" }, contentGroups: ["descriptive"], content: ["animate", "animateTransform", "set", "stop"] }, marker: { attrsGroups: ["core", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "viewBox", "preserveAspectRatio", "refX", "refY", "markerUnits", "markerWidth", "markerHeight", "orient"], defaults: { markerUnits: "strokeWidth", refX: "0", refY: "0", markerWidth: "3", markerHeight: "3" }, contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, mask: { attrsGroups: ["conditionalProcessing", "core", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "x", "y", "width", "height", "mask-type", "maskUnits", "maskContentUnits"], defaults: { maskUnits: "objectBoundingBox", maskContentUnits: "userSpaceOnUse", x: "-10%", y: "-10%", width: "120%", height: "120%" }, contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, metadata: { attrsGroups: ["core"] }, "missing-glyph": { attrsGroups: ["core", "presentation"], attrs: ["class", "style", "d", "horiz-adv-x", "vert-origin-x", "vert-origin-y", "vert-adv-y"], contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, mpath: { attrsGroups: ["core", "xlink"], attrs: ["externalResourcesRequired", "href", "xlink:href"], contentGroups: ["descriptive"] }, path: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "d", "pathLength"], contentGroups: ["animation", "descriptive"] }, pattern: { attrsGroups: ["conditionalProcessing", "core", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "viewBox", "preserveAspectRatio", "x", "y", "width", "height", "patternUnits", "patternContentUnits", "patternTransform", "href", "xlink:href"], defaults: { patternUnits: "objectBoundingBox", patternContentUnits: "userSpaceOnUse", x: "0", y: "0", width: "0", height: "0", preserveAspectRatio: "xMidYMid meet" }, contentGroups: ["animation", "descriptive", "paintServer", "shape", "structural"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, polygon: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "points"], contentGroups: ["animation", "descriptive"] }, polyline: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "points"], contentGroups: ["animation", "descriptive"] }, radialGradient: { attrsGroups: ["core", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "cx", "cy", "r", "fx", "fy", "fr", "gradientUnits", "gradientTransform", "spreadMethod", "href", "xlink:href"], defaults: { gradientUnits: "objectBoundingBox", cx: "50%", cy: "50%", r: "50%" }, contentGroups: ["descriptive"], content: ["animate", "animateTransform", "set", "stop"] }, meshGradient: { attrsGroups: ["core", "presentation", "xlink"], attrs: ["class", "style", "x", "y", "gradientUnits", "transform"], contentGroups: ["descriptive", "paintServer", "animation"], content: ["meshRow"] }, meshRow: { attrsGroups: ["core", "presentation"], attrs: ["class", "style"], contentGroups: ["descriptive"], content: ["meshPatch"] }, meshPatch: { attrsGroups: ["core", "presentation"], attrs: ["class", "style"], contentGroups: ["descriptive"], content: ["stop"] }, rect: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "x", "y", "width", "height", "rx", "ry"], defaults: { x: "0", y: "0" }, contentGroups: ["animation", "descriptive"] }, script: { attrsGroups: ["core", "xlink"], attrs: ["externalResourcesRequired", "type", "href", "xlink:href"] }, set: { attrsGroups: ["conditionalProcessing", "core", "animation", "xlink", "animationAttributeTarget", "animationTiming"], attrs: ["externalResourcesRequired", "to"], contentGroups: ["descriptive"] }, solidColor: { attrsGroups: ["core", "presentation"], attrs: ["class", "style"], contentGroups: ["paintServer"] }, stop: { attrsGroups: ["core", "presentation"], attrs: ["class", "style", "offset", "path"], content: ["animate", "animateColor", "set"] }, style: { attrsGroups: ["core"], attrs: ["type", "media", "title"], defaults: { type: "text/css" } }, svg: { attrsGroups: ["conditionalProcessing", "core", "documentEvent", "graphicalEvent", "presentation"], attrs: ["class", "style", "x", "y", "width", "height", "viewBox", "preserveAspectRatio", "zoomAndPan", "version", "baseProfile", "contentScriptType", "contentStyleType"], defaults: { x: "0", y: "0", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", zoomAndPan: "magnify", version: "1.1", baseProfile: "none", contentScriptType: "application/ecmascript", contentStyleType: "text/css" }, contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, switch: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform"], contentGroups: ["animation", "descriptive", "shape"], content: ["a", "foreignObject", "g", "image", "svg", "switch", "text", "use"] }, symbol: { attrsGroups: ["core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "preserveAspectRatio", "viewBox", "refX", "refY"], defaults: { refX: "0", refY: "0" }, contentGroups: ["animation", "descriptive", "shape", "structural", "paintServer"], content: ["a", "altGlyphDef", "clipPath", "color-profile", "cursor", "filter", "font", "font-face", "foreignObject", "image", "marker", "mask", "pattern", "script", "style", "switch", "text", "view"] }, text: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "transform", "lengthAdjust", "x", "y", "dx", "dy", "rotate", "textLength"], defaults: { x: "0", y: "0", lengthAdjust: "spacing" }, contentGroups: ["animation", "descriptive", "textContentChild"], content: ["a"] }, textPath: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "href", "xlink:href", "startOffset", "method", "spacing", "d"], defaults: { startOffset: "0", method: "align", spacing: "exact" }, contentGroups: ["descriptive"], content: ["a", "altGlyph", "animate", "animateColor", "set", "tref", "tspan"] }, title: { attrsGroups: ["core"], attrs: ["class", "style"] }, tref: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "href", "xlink:href"], contentGroups: ["descriptive"], content: ["animate", "animateColor", "set"] }, tspan: { attrsGroups: ["conditionalProcessing", "core", "graphicalEvent", "presentation"], attrs: ["class", "style", "externalResourcesRequired", "x", "y", "dx", "dy", "rotate", "textLength", "lengthAdjust"], contentGroups: ["descriptive"], content: ["a", "altGlyph", "animate", "animateColor", "set", "tref", "tspan"] }, use: { attrsGroups: ["core", "conditionalProcessing", "graphicalEvent", "presentation", "xlink"], attrs: ["class", "style", "externalResourcesRequired", "transform", "x", "y", "width", "height", "href", "xlink:href"], defaults: { x: "0", y: "0" }, contentGroups: ["animation", "descriptive"] }, view: { attrsGroups: ["core"], attrs: ["externalResourcesRequired", "viewBox", "preserveAspectRatio", "zoomAndPan", "viewTarget"], contentGroups: ["descriptive"] }, vkern: { attrsGroups: ["core"], attrs: ["u1", "g1", "u2", "g2", "k"] } };
  exports.editorNamespaces = ["http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd", "http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd", "http://www.inkscape.org/namespaces/inkscape", "http://www.bohemiancoding.com/sketch/ns", "http://ns.adobe.com/AdobeIllustrator/10.0/", "http://ns.adobe.com/Graphs/1.0/", "http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/", "http://ns.adobe.com/Variables/1.0/", "http://ns.adobe.com/SaveForWeb/1.0/", "http://ns.adobe.com/Extensibility/1.0/", "http://ns.adobe.com/Flows/1.0/", "http://ns.adobe.com/ImageReplacement/1.0/", "http://ns.adobe.com/GenericCustomNamespace/1.0/", "http://ns.adobe.com/XPath/1.0/", "http://schemas.microsoft.com/visio/2003/SVGExtensions/", "http://taptrix.com/vectorillustrator/svg_extensions", "http://www.figma.com/figma/ns", "http://purl.org/dc/elements/1.1/", "http://creativecommons.org/ns#", "http://www.w3.org/1999/02/22-rdf-syntax-ns#", "http://www.serif.com/", "http://www.vector.evaxdesign.sk"];
  exports.referencesProps = ["clip-path", "color-profile", "fill", "filter", "marker-start", "marker-mid", "marker-end", "mask", "stroke", "style"];
  exports.inheritableAttrs = ["clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cursor", "direction", "dominant-baseline", "fill", "fill-opacity", "fill-rule", "font", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "glyph-orientation-horizontal", "glyph-orientation-vertical", "image-rendering", "letter-spacing", "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "pointer-events", "shape-rendering", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "text-rendering", "transform", "visibility", "word-spacing", "writing-mode"];
  exports.presentationNonInheritableGroupAttrs = ["display", "clip-path", "filter", "mask", "opacity", "text-decoration", "transform", "unicode-bidi"];
  exports.colorsNames = { aliceblue: "#f0f8ff", antiquewhite: "#faebd7", aqua: "#0ff", aquamarine: "#7fffd4", azure: "#f0ffff", beige: "#f5f5dc", bisque: "#ffe4c4", black: "#000", blanchedalmond: "#ffebcd", blue: "#00f", blueviolet: "#8a2be2", brown: "#a52a2a", burlywood: "#deb887", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", cornflowerblue: "#6495ed", cornsilk: "#fff8dc", crimson: "#dc143c", cyan: "#0ff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", darkkhaki: "#bdb76b", darkmagenta: "#8b008b", darkolivegreen: "#556b2f", darkorange: "#ff8c00", darkorchid: "#9932cc", darkred: "#8b0000", darksalmon: "#e9967a", darkseagreen: "#8fbc8f", darkslateblue: "#483d8b", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", darkturquoise: "#00ced1", darkviolet: "#9400d3", deeppink: "#ff1493", deepskyblue: "#00bfff", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1e90ff", firebrick: "#b22222", floralwhite: "#fffaf0", forestgreen: "#228b22", fuchsia: "#f0f", gainsboro: "#dcdcdc", ghostwhite: "#f8f8ff", gold: "#ffd700", goldenrod: "#daa520", gray: "#808080", green: "#008000", greenyellow: "#adff2f", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", indianred: "#cd5c5c", indigo: "#4b0082", ivory: "#fffff0", khaki: "#f0e68c", lavender: "#e6e6fa", lavenderblush: "#fff0f5", lawngreen: "#7cfc00", lemonchiffon: "#fffacd", lightblue: "#add8e6", lightcoral: "#f08080", lightcyan: "#e0ffff", lightgoldenrodyellow: "#fafad2", lightgray: "#d3d3d3", lightgreen: "#90ee90", lightgrey: "#d3d3d3", lightpink: "#ffb6c1", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", lightskyblue: "#87cefa", lightslategray: "#789", lightslategrey: "#789", lightsteelblue: "#b0c4de", lightyellow: "#ffffe0", lime: "#0f0", limegreen: "#32cd32", linen: "#faf0e6", magenta: "#f0f", maroon: "#800000", mediumaquamarine: "#66cdaa", mediumblue: "#0000cd", mediumorchid: "#ba55d3", mediumpurple: "#9370db", mediumseagreen: "#3cb371", mediumslateblue: "#7b68ee", mediumspringgreen: "#00fa9a", mediumturquoise: "#48d1cc", mediumvioletred: "#c71585", midnightblue: "#191970", mintcream: "#f5fffa", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", navajowhite: "#ffdead", navy: "#000080", oldlace: "#fdf5e6", olive: "#808000", olivedrab: "#6b8e23", orange: "#ffa500", orangered: "#ff4500", orchid: "#da70d6", palegoldenrod: "#eee8aa", palegreen: "#98fb98", paleturquoise: "#afeeee", palevioletred: "#db7093", papayawhip: "#ffefd5", peachpuff: "#ffdab9", peru: "#cd853f", pink: "#ffc0cb", plum: "#dda0dd", powderblue: "#b0e0e6", purple: "#800080", rebeccapurple: "#639", red: "#f00", rosybrown: "#bc8f8f", royalblue: "#4169e1", saddlebrown: "#8b4513", salmon: "#fa8072", sandybrown: "#f4a460", seagreen: "#2e8b57", seashell: "#fff5ee", sienna: "#a0522d", silver: "#c0c0c0", skyblue: "#87ceeb", slateblue: "#6a5acd", slategray: "#708090", slategrey: "#708090", snow: "#fffafa", springgreen: "#00ff7f", steelblue: "#4682b4", tan: "#d2b48c", teal: "#008080", thistle: "#d8bfd8", tomato: "#ff6347", turquoise: "#40e0d0", violet: "#ee82ee", wheat: "#f5deb3", white: "#fff", whitesmoke: "#f5f5f5", yellow: "#ff0", yellowgreen: "#9acd32" };
  exports.colorsShortNames = { "#f0ffff": "azure", "#f5f5dc": "beige", "#ffe4c4": "bisque", "#a52a2a": "brown", "#ff7f50": "coral", "#ffd700": "gold", "#808080": "gray", "#008000": "green", "#4b0082": "indigo", "#fffff0": "ivory", "#f0e68c": "khaki", "#faf0e6": "linen", "#800000": "maroon", "#000080": "navy", "#808000": "olive", "#ffa500": "orange", "#da70d6": "orchid", "#cd853f": "peru", "#ffc0cb": "pink", "#dda0dd": "plum", "#800080": "purple", "#f00": "red", "#ff0000": "red", "#fa8072": "salmon", "#a0522d": "sienna", "#c0c0c0": "silver", "#fffafa": "snow", "#d2b48c": "tan", "#008080": "teal", "#ff6347": "tomato", "#ee82ee": "violet", "#f5deb3": "wheat" };
  exports.colorsProps = ["color", "fill", "stroke", "stop-color", "flood-color", "lighting-color"];
})(_collections);
var { detachNodeFromParent: detachNodeFromParent$h } = xast;
var { editorNamespaces } = _collections;
removeEditorsNSData$1.type = "visitor";
removeEditorsNSData$1.name = "removeEditorsNSData";
removeEditorsNSData$1.active = true;
removeEditorsNSData$1.description = "removes editors namespaces, elements and attributes";
removeEditorsNSData$1.fn = (_root, params) => {
  let namespaces = editorNamespaces;
  if (Array.isArray(params.additionalNamespaces)) {
    namespaces = [...editorNamespaces, ...params.additionalNamespaces];
  }
  const prefixes = [];
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "svg") {
      for (const [name2, value] of Object.entries(node2.attributes)) {
        if (name2.startsWith("xmlns:") && namespaces.includes(value)) {
          prefixes.push(name2.slice("xmlns:".length));
          delete node2.attributes[name2];
        }
      }
    }
    for (const name2 of Object.keys(node2.attributes)) {
      if (name2.includes(":")) {
        const [prefix] = name2.split(":");
        if (prefixes.includes(prefix)) {
          delete node2.attributes[name2];
        }
      }
    }
    if (node2.name.includes(":")) {
      const [prefix] = node2.name.split(":");
      if (prefixes.includes(prefix)) {
        detachNodeFromParent$h(node2, parentNode);
      }
    }
  } } };
};
var cleanupAttrs$1 = {};
cleanupAttrs$1.name = "cleanupAttrs";
cleanupAttrs$1.type = "visitor";
cleanupAttrs$1.active = true;
cleanupAttrs$1.description = "cleanups attributes from newlines, trailing and repeating spaces";
var regNewlinesNeedSpace = /(\S)\r?\n(\S)/g;
var regNewlines = /\r?\n/g;
var regSpaces = /\s{2,}/g;
cleanupAttrs$1.fn = (root, params) => {
  const { newlines = true, trim = true, spaces = true } = params;
  return { element: { enter: (node2) => {
    for (const name2 of Object.keys(node2.attributes)) {
      if (newlines) {
        node2.attributes[name2] = node2.attributes[name2].replace(regNewlinesNeedSpace, ((match, p1, p2) => p1 + " " + p2));
        node2.attributes[name2] = node2.attributes[name2].replace(regNewlines, "");
      }
      if (trim) {
        node2.attributes[name2] = node2.attributes[name2].trim();
      }
      if (spaces) {
        node2.attributes[name2] = node2.attributes[name2].replace(regSpaces, " ");
      }
    }
  } } };
};
var mergeStyles$1 = {};
var CSSClassList$1 = function(node2) {
  this.parentNode = node2;
  this.classNames = /* @__PURE__ */ new Set();
  const value = node2.attributes.class;
  if (value != null) {
    this.addClassValueHandler();
    this.setClassValue(value);
  }
};
CSSClassList$1.prototype.addClassValueHandler = function() {
  Object.defineProperty(this.parentNode.attributes, "class", { get: this.getClassValue.bind(this), set: this.setClassValue.bind(this), enumerable: true, configurable: true });
};
CSSClassList$1.prototype.getClassValue = function() {
  var arrClassNames = Array.from(this.classNames);
  return arrClassNames.join(" ");
};
CSSClassList$1.prototype.setClassValue = function(newValue) {
  if (typeof newValue === "undefined") {
    this.classNames.clear();
    return;
  }
  var arrClassNames = newValue.split(" ");
  this.classNames = new Set(arrClassNames);
};
CSSClassList$1.prototype.add = function() {
  this.addClassValueHandler();
  Object.values(arguments).forEach(this._addSingle.bind(this));
};
CSSClassList$1.prototype._addSingle = function(className) {
  this.classNames.add(className);
};
CSSClassList$1.prototype.remove = function() {
  this.addClassValueHandler();
  Object.values(arguments).forEach(this._removeSingle.bind(this));
};
CSSClassList$1.prototype._removeSingle = function(className) {
  this.classNames.delete(className);
};
CSSClassList$1.prototype.item = function(index) {
  var arrClassNames = Array.from(this.classNames);
  return arrClassNames[index];
};
CSSClassList$1.prototype.toggle = function(className, force) {
  if (this.contains(className) || force === false) {
    this.classNames.delete(className);
  }
  this.classNames.add(className);
};
CSSClassList$1.prototype.contains = function(className) {
  return this.classNames.has(className);
};
var cssClassList = CSSClassList$1;
var csstree_min = { exports: {} };
(function(module, exports) {
  !(function(e, t) {
    module.exports = t();
  })(commonjsGlobal, (function() {
    function e(e2) {
      return { prev: null, next: null, data: e2 };
    }
    function t(e2, t2, n2) {
      var i2;
      return null !== r ? (i2 = r, r = r.cursor, i2.prev = t2, i2.next = n2, i2.cursor = e2.cursor) : i2 = { prev: t2, next: n2, cursor: e2.cursor }, e2.cursor = i2, i2;
    }
    function n(e2) {
      var t2 = e2.cursor;
      e2.cursor = t2.cursor, t2.prev = null, t2.next = null, t2.cursor = r, r = t2;
    }
    var r = null, i = function() {
      this.cursor = null, this.head = null, this.tail = null;
    };
    i.createItem = e, i.prototype.createItem = e, i.prototype.updateCursors = function(e2, t2, n2, r2) {
      for (var i2 = this.cursor; null !== i2; ) i2.prev === e2 && (i2.prev = t2), i2.next === n2 && (i2.next = r2), i2 = i2.cursor;
    }, i.prototype.getSize = function() {
      for (var e2 = 0, t2 = this.head; t2; ) e2++, t2 = t2.next;
      return e2;
    }, i.prototype.fromArray = function(t2) {
      var n2 = null;
      this.head = null;
      for (var r2 = 0; r2 < t2.length; r2++) {
        var i2 = e(t2[r2]);
        null !== n2 ? n2.next = i2 : this.head = i2, i2.prev = n2, n2 = i2;
      }
      return this.tail = n2, this;
    }, i.prototype.toArray = function() {
      for (var e2 = this.head, t2 = []; e2; ) t2.push(e2.data), e2 = e2.next;
      return t2;
    }, i.prototype.toJSON = i.prototype.toArray, i.prototype.isEmpty = function() {
      return null === this.head;
    }, i.prototype.first = function() {
      return this.head && this.head.data;
    }, i.prototype.last = function() {
      return this.tail && this.tail.data;
    }, i.prototype.each = function(e2, r2) {
      var i2;
      void 0 === r2 && (r2 = this);
      for (var a2 = t(this, null, this.head); null !== a2.next; ) i2 = a2.next, a2.next = i2.next, e2.call(r2, i2.data, i2, this);
      n(this);
    }, i.prototype.forEach = i.prototype.each, i.prototype.eachRight = function(e2, r2) {
      var i2;
      void 0 === r2 && (r2 = this);
      for (var a2 = t(this, this.tail, null); null !== a2.prev; ) i2 = a2.prev, a2.prev = i2.prev, e2.call(r2, i2.data, i2, this);
      n(this);
    }, i.prototype.forEachRight = i.prototype.eachRight, i.prototype.reduce = function(e2, r2, i2) {
      var a2;
      void 0 === i2 && (i2 = this);
      for (var o2 = t(this, null, this.head), s2 = r2; null !== o2.next; ) a2 = o2.next, o2.next = a2.next, s2 = e2.call(i2, s2, a2.data, a2, this);
      return n(this), s2;
    }, i.prototype.reduceRight = function(e2, r2, i2) {
      var a2;
      void 0 === i2 && (i2 = this);
      for (var o2 = t(this, this.tail, null), s2 = r2; null !== o2.prev; ) a2 = o2.prev, o2.prev = a2.prev, s2 = e2.call(i2, s2, a2.data, a2, this);
      return n(this), s2;
    }, i.prototype.nextUntil = function(e2, r2, i2) {
      if (null !== e2) {
        var a2;
        void 0 === i2 && (i2 = this);
        for (var o2 = t(this, null, e2); null !== o2.next && (a2 = o2.next, o2.next = a2.next, !r2.call(i2, a2.data, a2, this)); ) ;
        n(this);
      }
    }, i.prototype.prevUntil = function(e2, r2, i2) {
      if (null !== e2) {
        var a2;
        void 0 === i2 && (i2 = this);
        for (var o2 = t(this, e2, null); null !== o2.prev && (a2 = o2.prev, o2.prev = a2.prev, !r2.call(i2, a2.data, a2, this)); ) ;
        n(this);
      }
    }, i.prototype.some = function(e2, t2) {
      var n2 = this.head;
      for (void 0 === t2 && (t2 = this); null !== n2; ) {
        if (e2.call(t2, n2.data, n2, this)) return true;
        n2 = n2.next;
      }
      return false;
    }, i.prototype.map = function(e2, t2) {
      var n2 = new i(), r2 = this.head;
      for (void 0 === t2 && (t2 = this); null !== r2; ) n2.appendData(e2.call(t2, r2.data, r2, this)), r2 = r2.next;
      return n2;
    }, i.prototype.filter = function(e2, t2) {
      var n2 = new i(), r2 = this.head;
      for (void 0 === t2 && (t2 = this); null !== r2; ) e2.call(t2, r2.data, r2, this) && n2.appendData(r2.data), r2 = r2.next;
      return n2;
    }, i.prototype.clear = function() {
      this.head = null, this.tail = null;
    }, i.prototype.copy = function() {
      for (var t2 = new i(), n2 = this.head; null !== n2; ) t2.insert(e(n2.data)), n2 = n2.next;
      return t2;
    }, i.prototype.prepend = function(e2) {
      return this.updateCursors(null, e2, this.head, e2), null !== this.head ? (this.head.prev = e2, e2.next = this.head) : this.tail = e2, this.head = e2, this;
    }, i.prototype.prependData = function(t2) {
      return this.prepend(e(t2));
    }, i.prototype.append = function(e2) {
      return this.insert(e2);
    }, i.prototype.appendData = function(t2) {
      return this.insert(e(t2));
    }, i.prototype.insert = function(e2, t2) {
      if (null != t2) if (this.updateCursors(t2.prev, e2, t2, e2), null === t2.prev) {
        if (this.head !== t2) throw new Error("before doesn't belong to list");
        this.head = e2, t2.prev = e2, e2.next = t2, this.updateCursors(null, e2);
      } else t2.prev.next = e2, e2.prev = t2.prev, t2.prev = e2, e2.next = t2;
      else this.updateCursors(this.tail, e2, null, e2), null !== this.tail ? (this.tail.next = e2, e2.prev = this.tail) : this.head = e2, this.tail = e2;
      return this;
    }, i.prototype.insertData = function(t2, n2) {
      return this.insert(e(t2), n2);
    }, i.prototype.remove = function(e2) {
      if (this.updateCursors(e2, e2.prev, e2, e2.next), null !== e2.prev) e2.prev.next = e2.next;
      else {
        if (this.head !== e2) throw new Error("item doesn't belong to list");
        this.head = e2.next;
      }
      if (null !== e2.next) e2.next.prev = e2.prev;
      else {
        if (this.tail !== e2) throw new Error("item doesn't belong to list");
        this.tail = e2.prev;
      }
      return e2.prev = null, e2.next = null, e2;
    }, i.prototype.push = function(t2) {
      this.insert(e(t2));
    }, i.prototype.pop = function() {
      if (null !== this.tail) return this.remove(this.tail);
    }, i.prototype.unshift = function(t2) {
      this.prepend(e(t2));
    }, i.prototype.shift = function() {
      if (null !== this.head) return this.remove(this.head);
    }, i.prototype.prependList = function(e2) {
      return this.insertList(e2, this.head);
    }, i.prototype.appendList = function(e2) {
      return this.insertList(e2);
    }, i.prototype.insertList = function(e2, t2) {
      return null === e2.head || (null != t2 ? (this.updateCursors(t2.prev, e2.tail, t2, e2.head), null !== t2.prev ? (t2.prev.next = e2.head, e2.head.prev = t2.prev) : this.head = e2.head, t2.prev = e2.tail, e2.tail.next = t2) : (this.updateCursors(this.tail, e2.tail, null, e2.head), null !== this.tail ? (this.tail.next = e2.head, e2.head.prev = this.tail) : this.head = e2.head, this.tail = e2.tail), e2.head = null, e2.tail = null), this;
    }, i.prototype.replace = function(e2, t2) {
      "head" in t2 ? this.insertList(t2, e2) : this.insert(t2, e2), this.remove(e2);
    };
    var a = i, o = function(e2, t2) {
      var n2 = Object.create(SyntaxError.prototype), r2 = new Error();
      return n2.name = e2, n2.message = t2, Object.defineProperty(n2, "stack", { get: function() {
        return (r2.stack || "").replace(/^(.+\n){1,3}/, e2 + ": " + t2 + "\n");
      } }), n2;
    };
    function s(e2, t2) {
      function n2(e3, t3) {
        return r2.slice(e3, t3).map((function(t4, n3) {
          for (var r3 = String(e3 + n3 + 1); r3.length < l2; ) r3 = " " + r3;
          return r3 + " |" + t4;
        })).join("\n");
      }
      var r2 = e2.source.split(/\r\n?|\n|\f/), i2 = e2.line, a2 = e2.column, o2 = Math.max(1, i2 - t2) - 1, s2 = Math.min(i2 + t2, r2.length + 1), l2 = Math.max(4, String(s2).length) + 1, c2 = 0;
      (a2 += ("    ".length - 1) * (r2[i2 - 1].substr(0, a2 - 1).match(/\t/g) || []).length) > 100 && (c2 = a2 - 60 + 3, a2 = 58);
      for (var u2 = o2; u2 <= s2; u2++) u2 >= 0 && u2 < r2.length && (r2[u2] = r2[u2].replace(/\t/g, "    "), r2[u2] = (c2 > 0 && r2[u2].length > c2 ? "\u2026" : "") + r2[u2].substr(c2, 98) + (r2[u2].length > c2 + 100 - 1 ? "\u2026" : ""));
      return [n2(o2, i2), new Array(a2 + l2 + 2).join("-") + "^", n2(i2, s2)].filter(Boolean).join("\n");
    }
    var l = function(e2, t2, n2, r2, i2) {
      var a2 = o("SyntaxError", e2);
      return a2.source = t2, a2.offset = n2, a2.line = r2, a2.column = i2, a2.sourceFragment = function(e3) {
        return s(a2, isNaN(e3) ? 0 : e3);
      }, Object.defineProperty(a2, "formattedMessage", { get: function() {
        return "Parse error: " + a2.message + "\n" + s(a2, 2);
      } }), a2.parseError = { offset: n2, line: r2, column: i2 }, a2;
    }, c = { EOF: 0, Ident: 1, Function: 2, AtKeyword: 3, Hash: 4, String: 5, BadString: 6, Url: 7, BadUrl: 8, Delim: 9, Number: 10, Percentage: 11, Dimension: 12, WhiteSpace: 13, CDO: 14, CDC: 15, Colon: 16, Semicolon: 17, Comma: 18, LeftSquareBracket: 19, RightSquareBracket: 20, LeftParenthesis: 21, RightParenthesis: 22, LeftCurlyBracket: 23, RightCurlyBracket: 24, Comment: 25 }, u = Object.keys(c).reduce((function(e2, t2) {
      return e2[c[t2]] = t2, e2;
    }), {}), h = { TYPE: c, NAME: u };
    function p(e2) {
      return e2 >= 48 && e2 <= 57;
    }
    function d(e2) {
      return e2 >= 65 && e2 <= 90;
    }
    function m(e2) {
      return e2 >= 97 && e2 <= 122;
    }
    function g2(e2) {
      return d(e2) || m(e2);
    }
    function f(e2) {
      return e2 >= 128;
    }
    function b(e2) {
      return g2(e2) || f(e2) || 95 === e2;
    }
    function y(e2) {
      return e2 >= 0 && e2 <= 8 || 11 === e2 || e2 >= 14 && e2 <= 31 || 127 === e2;
    }
    function k(e2) {
      return 10 === e2 || 13 === e2 || 12 === e2;
    }
    function v(e2) {
      return k(e2) || 32 === e2 || 9 === e2;
    }
    function x(e2, t2) {
      return 92 === e2 && (!k(t2) && 0 !== t2);
    }
    var w = new Array(128);
    C.Eof = 128, C.WhiteSpace = 130, C.Digit = 131, C.NameStart = 132, C.NonPrintable = 133;
    for (var S = 0; S < w.length; S++) switch (true) {
      case v(S):
        w[S] = C.WhiteSpace;
        break;
      case p(S):
        w[S] = C.Digit;
        break;
      case b(S):
        w[S] = C.NameStart;
        break;
      case y(S):
        w[S] = C.NonPrintable;
        break;
      default:
        w[S] = S || C.Eof;
    }
    function C(e2) {
      return e2 < 128 ? w[e2] : C.NameStart;
    }
    var z = { isDigit: p, isHexDigit: function(e2) {
      return p(e2) || e2 >= 65 && e2 <= 70 || e2 >= 97 && e2 <= 102;
    }, isUppercaseLetter: d, isLowercaseLetter: m, isLetter: g2, isNonAscii: f, isNameStart: b, isName: function(e2) {
      return b(e2) || p(e2) || 45 === e2;
    }, isNonPrintable: y, isNewline: k, isWhiteSpace: v, isValidEscape: x, isIdentifierStart: function(e2, t2, n2) {
      return 45 === e2 ? b(t2) || 45 === t2 || x(t2, n2) : !!b(e2) || 92 === e2 && x(e2, t2);
    }, isNumberStart: function(e2, t2, n2) {
      return 43 === e2 || 45 === e2 ? p(t2) ? 2 : 46 === t2 && p(n2) ? 3 : 0 : 46 === e2 ? p(t2) ? 2 : 0 : p(e2) ? 1 : 0;
    }, isBOM: function(e2) {
      return 65279 === e2 || 65534 === e2 ? 1 : 0;
    }, charCodeCategory: C }, A = z.isDigit, P = z.isHexDigit, T = z.isUppercaseLetter, L = z.isName, E = z.isWhiteSpace, D = z.isValidEscape;
    function O(e2, t2) {
      return t2 < e2.length ? e2.charCodeAt(t2) : 0;
    }
    function B(e2, t2, n2) {
      return 13 === n2 && 10 === O(e2, t2 + 1) ? 2 : 1;
    }
    function I(e2, t2, n2) {
      var r2 = e2.charCodeAt(t2);
      return T(r2) && (r2 |= 32), r2 === n2;
    }
    function N(e2, t2) {
      for (; t2 < e2.length && A(e2.charCodeAt(t2)); t2++) ;
      return t2;
    }
    function R(e2, t2) {
      if (P(O(e2, (t2 += 2) - 1))) {
        for (var n2 = Math.min(e2.length, t2 + 5); t2 < n2 && P(O(e2, t2)); t2++) ;
        var r2 = O(e2, t2);
        E(r2) && (t2 += B(e2, t2, r2));
      }
      return t2;
    }
    var M = { consumeEscaped: R, consumeName: function(e2, t2) {
      for (; t2 < e2.length; t2++) {
        var n2 = e2.charCodeAt(t2);
        if (!L(n2)) {
          if (!D(n2, O(e2, t2 + 1))) break;
          t2 = R(e2, t2) - 1;
        }
      }
      return t2;
    }, consumeNumber: function(e2, t2) {
      var n2 = e2.charCodeAt(t2);
      if (43 !== n2 && 45 !== n2 || (n2 = e2.charCodeAt(t2 += 1)), A(n2) && (t2 = N(e2, t2 + 1), n2 = e2.charCodeAt(t2)), 46 === n2 && A(e2.charCodeAt(t2 + 1)) && (n2 = e2.charCodeAt(t2 += 2), t2 = N(e2, t2)), I(e2, t2, 101)) {
        var r2 = 0;
        45 !== (n2 = e2.charCodeAt(t2 + 1)) && 43 !== n2 || (r2 = 1, n2 = e2.charCodeAt(t2 + 2)), A(n2) && (t2 = N(e2, t2 + 1 + r2 + 1));
      }
      return t2;
    }, consumeBadUrlRemnants: function(e2, t2) {
      for (; t2 < e2.length; t2++) {
        var n2 = e2.charCodeAt(t2);
        if (41 === n2) {
          t2++;
          break;
        }
        D(n2, O(e2, t2 + 1)) && (t2 = R(e2, t2));
      }
      return t2;
    }, cmpChar: I, cmpStr: function(e2, t2, n2, r2) {
      if (n2 - t2 !== r2.length) return false;
      if (t2 < 0 || n2 > e2.length) return false;
      for (var i2 = t2; i2 < n2; i2++) {
        var a2 = e2.charCodeAt(i2), o2 = r2.charCodeAt(i2 - t2);
        if (T(a2) && (a2 |= 32), a2 !== o2) return false;
      }
      return true;
    }, getNewlineLength: B, findWhiteSpaceStart: function(e2, t2) {
      for (; t2 >= 0 && E(e2.charCodeAt(t2)); t2--) ;
      return t2 + 1;
    }, findWhiteSpaceEnd: function(e2, t2) {
      for (; t2 < e2.length && E(e2.charCodeAt(t2)); t2++) ;
      return t2;
    } }, j = h.TYPE, _ = h.NAME, F = M.cmpStr, W = j.EOF, q = j.WhiteSpace, Y = j.Comment, U = function() {
      this.offsetAndType = null, this.balance = null, this.reset();
    };
    U.prototype = { reset: function() {
      this.eof = false, this.tokenIndex = -1, this.tokenType = 0, this.tokenStart = this.firstCharOffset, this.tokenEnd = this.firstCharOffset;
    }, lookupType: function(e2) {
      return (e2 += this.tokenIndex) < this.tokenCount ? this.offsetAndType[e2] >> 24 : W;
    }, lookupOffset: function(e2) {
      return (e2 += this.tokenIndex) < this.tokenCount ? 16777215 & this.offsetAndType[e2 - 1] : this.source.length;
    }, lookupValue: function(e2, t2) {
      return (e2 += this.tokenIndex) < this.tokenCount && F(this.source, 16777215 & this.offsetAndType[e2 - 1], 16777215 & this.offsetAndType[e2], t2);
    }, getTokenStart: function(e2) {
      return e2 === this.tokenIndex ? this.tokenStart : e2 > 0 ? e2 < this.tokenCount ? 16777215 & this.offsetAndType[e2 - 1] : 16777215 & this.offsetAndType[this.tokenCount] : this.firstCharOffset;
    }, getRawLength: function(e2, t2) {
      var n2, r2 = e2, i2 = 16777215 & this.offsetAndType[Math.max(r2 - 1, 0)];
      e: for (; r2 < this.tokenCount && !((n2 = this.balance[r2]) < e2); r2++) switch (t2(this.offsetAndType[r2] >> 24, this.source, i2)) {
        case 1:
          break e;
        case 2:
          r2++;
          break e;
        default:
          this.balance[n2] === r2 && (r2 = n2), i2 = 16777215 & this.offsetAndType[r2];
      }
      return r2 - this.tokenIndex;
    }, isBalanceEdge: function(e2) {
      return this.balance[this.tokenIndex] < e2;
    }, isDelim: function(e2, t2) {
      return t2 ? this.lookupType(t2) === j.Delim && this.source.charCodeAt(this.lookupOffset(t2)) === e2 : this.tokenType === j.Delim && this.source.charCodeAt(this.tokenStart) === e2;
    }, getTokenValue: function() {
      return this.source.substring(this.tokenStart, this.tokenEnd);
    }, getTokenLength: function() {
      return this.tokenEnd - this.tokenStart;
    }, substrToCursor: function(e2) {
      return this.source.substring(e2, this.tokenStart);
    }, skipWS: function() {
      for (var e2 = this.tokenIndex, t2 = 0; e2 < this.tokenCount && this.offsetAndType[e2] >> 24 === q; e2++, t2++) ;
      t2 > 0 && this.skip(t2);
    }, skipSC: function() {
      for (; this.tokenType === q || this.tokenType === Y; ) this.next();
    }, skip: function(e2) {
      var t2 = this.tokenIndex + e2;
      t2 < this.tokenCount ? (this.tokenIndex = t2, this.tokenStart = 16777215 & this.offsetAndType[t2 - 1], t2 = this.offsetAndType[t2], this.tokenType = t2 >> 24, this.tokenEnd = 16777215 & t2) : (this.tokenIndex = this.tokenCount, this.next());
    }, next: function() {
      var e2 = this.tokenIndex + 1;
      e2 < this.tokenCount ? (this.tokenIndex = e2, this.tokenStart = this.tokenEnd, e2 = this.offsetAndType[e2], this.tokenType = e2 >> 24, this.tokenEnd = 16777215 & e2) : (this.tokenIndex = this.tokenCount, this.eof = true, this.tokenType = W, this.tokenStart = this.tokenEnd = this.source.length);
    }, forEachToken(e2) {
      for (var t2 = 0, n2 = this.firstCharOffset; t2 < this.tokenCount; t2++) {
        var r2 = n2, i2 = this.offsetAndType[t2], a2 = 16777215 & i2;
        n2 = a2, e2(i2 >> 24, r2, a2, t2);
      }
    }, dump() {
      var e2 = new Array(this.tokenCount);
      return this.forEachToken(((t2, n2, r2, i2) => {
        e2[i2] = { idx: i2, type: _[t2], chunk: this.source.substring(n2, r2), balance: this.balance[i2] };
      })), e2;
    } };
    var H = U;
    function V(e2) {
      return e2;
    }
    function K(e2, t2, n2, r2) {
      var i2, a2;
      switch (e2.type) {
        case "Group":
          i2 = (function(e3, t3, n3, r3) {
            var i3 = " " === e3.combinator || r3 ? e3.combinator : " " + e3.combinator + " ", a3 = e3.terms.map((function(e4) {
              return K(e4, t3, n3, r3);
            })).join(i3);
            return (e3.explicit || n3) && (a3 = (r3 || "," === a3[0] ? "[" : "[ ") + a3 + (r3 ? "]" : " ]")), a3;
          })(e2, t2, n2, r2) + (e2.disallowEmpty ? "!" : "");
          break;
        case "Multiplier":
          return K(e2.term, t2, n2, r2) + t2(0 === (a2 = e2).min && 0 === a2.max ? "*" : 0 === a2.min && 1 === a2.max ? "?" : 1 === a2.min && 0 === a2.max ? a2.comma ? "#" : "+" : 1 === a2.min && 1 === a2.max ? "" : (a2.comma ? "#" : "") + (a2.min === a2.max ? "{" + a2.min + "}" : "{" + a2.min + "," + (0 !== a2.max ? a2.max : "") + "}"), e2);
        case "Type":
          i2 = "<" + e2.name + (e2.opts ? t2((function(e3) {
            switch (e3.type) {
              case "Range":
                return " [" + (null === e3.min ? "-\u221E" : e3.min) + "," + (null === e3.max ? "\u221E" : e3.max) + "]";
              default:
                throw new Error("Unknown node type `" + e3.type + "`");
            }
          })(e2.opts), e2.opts) : "") + ">";
          break;
        case "Property":
          i2 = "<'" + e2.name + "'>";
          break;
        case "Keyword":
          i2 = e2.name;
          break;
        case "AtKeyword":
          i2 = "@" + e2.name;
          break;
        case "Function":
          i2 = e2.name + "(";
          break;
        case "String":
        case "Token":
          i2 = e2.value;
          break;
        case "Comma":
          i2 = ",";
          break;
        default:
          throw new Error("Unknown node type `" + e2.type + "`");
      }
      return t2(i2, e2);
    }
    var G = function(e2, t2) {
      var n2 = V, r2 = false, i2 = false;
      return "function" == typeof t2 ? n2 = t2 : t2 && (r2 = Boolean(t2.forceBraces), i2 = Boolean(t2.compact), "function" == typeof t2.decorate && (n2 = t2.decorate)), K(e2, n2, r2, i2);
    };
    const Q = { offset: 0, line: 1, column: 1 };
    function X(e2, t2) {
      const n2 = e2 && e2.loc && e2.loc[t2];
      return n2 ? "line" in n2 ? Z(n2) : n2 : null;
    }
    function Z({ offset: e2, line: t2, column: n2 }, r2) {
      const i2 = { offset: e2, line: t2, column: n2 };
      if (r2) {
        const e3 = r2.split(/\n|\r\n?|\f/);
        i2.offset += r2.length, i2.line += e3.length - 1, i2.column = 1 === e3.length ? i2.column + r2.length : e3.pop().length + 1;
      }
      return i2;
    }
    var $ = function(e2, t2) {
      const n2 = o("SyntaxReferenceError", e2 + (t2 ? " `" + t2 + "`" : ""));
      return n2.reference = t2, n2;
    }, J = function(e2, t2, n2, r2) {
      const i2 = o("SyntaxMatchError", e2), { css: a2, mismatchOffset: s2, mismatchLength: l2, start: c2, end: u2 } = (function(e3, t3) {
        const n3 = e3.tokens, r3 = e3.longestMatch, i3 = r3 < n3.length && n3[r3].node || null, a3 = i3 !== t3 ? i3 : null;
        let o2, s3, l3 = 0, c3 = 0, u3 = 0, h2 = "";
        for (let e4 = 0; e4 < n3.length; e4++) {
          const t4 = n3[e4].value;
          e4 === r3 && (c3 = t4.length, l3 = h2.length), null !== a3 && n3[e4].node === a3 && (e4 <= r3 ? u3++ : u3 = 0), h2 += t4;
        }
        return r3 === n3.length || u3 > 1 ? (o2 = X(a3 || t3, "end") || Z(Q, h2), s3 = Z(o2)) : (o2 = X(a3, "start") || Z(X(t3, "start") || Q, h2.slice(0, l3)), s3 = X(a3, "end") || Z(o2, h2.substr(l3, c3))), { css: h2, mismatchOffset: l3, mismatchLength: c3, start: o2, end: s3 };
      })(r2, n2);
      return i2.rawMessage = e2, i2.syntax = t2 ? G(t2) : "<generic>", i2.css = a2, i2.mismatchOffset = s2, i2.mismatchLength = l2, i2.message = e2 + "\n  syntax: " + i2.syntax + "\n   value: " + (a2 || "<empty string>") + "\n  --------" + new Array(i2.mismatchOffset + 1).join("-") + "^", Object.assign(i2, c2), i2.loc = { source: n2 && n2.loc && n2.loc.source || "<unknown>", start: c2, end: u2 }, i2;
    }, ee2 = Object.prototype.hasOwnProperty, te = /* @__PURE__ */ Object.create(null), ne2 = /* @__PURE__ */ Object.create(null);
    function re(e2, t2) {
      return t2 = t2 || 0, e2.length - t2 >= 2 && 45 === e2.charCodeAt(t2) && 45 === e2.charCodeAt(t2 + 1);
    }
    function ie(e2, t2) {
      if (t2 = t2 || 0, e2.length - t2 >= 3 && 45 === e2.charCodeAt(t2) && 45 !== e2.charCodeAt(t2 + 1)) {
        var n2 = e2.indexOf("-", t2 + 2);
        if (-1 !== n2) return e2.substring(t2, n2 + 1);
      }
      return "";
    }
    var ae = { keyword: function(e2) {
      if (ee2.call(te, e2)) return te[e2];
      var t2 = e2.toLowerCase();
      if (ee2.call(te, t2)) return te[e2] = te[t2];
      var n2 = re(t2, 0), r2 = n2 ? "" : ie(t2, 0);
      return te[e2] = Object.freeze({ basename: t2.substr(r2.length), name: t2, vendor: r2, prefix: r2, custom: n2 });
    }, property: function(e2) {
      if (ee2.call(ne2, e2)) return ne2[e2];
      var t2 = e2, n2 = e2[0];
      "/" === n2 ? n2 = "/" === e2[1] ? "//" : "/" : "_" !== n2 && "*" !== n2 && "$" !== n2 && "#" !== n2 && "+" !== n2 && "&" !== n2 && (n2 = "");
      var r2 = re(t2, n2.length);
      if (!r2 && (t2 = t2.toLowerCase(), ee2.call(ne2, t2))) return ne2[e2] = ne2[t2];
      var i2 = r2 ? "" : ie(t2, n2.length), a2 = t2.substr(0, n2.length + i2.length);
      return ne2[e2] = Object.freeze({ basename: t2.substr(a2.length), name: t2.substr(n2.length), hack: n2, vendor: i2, prefix: a2, custom: r2 });
    }, isCustomProperty: re, vendorPrefix: ie }, oe = "undefined" != typeof Uint32Array ? Uint32Array : Array, se = function(e2, t2) {
      return null === e2 || e2.length < t2 ? new oe(Math.max(t2 + 1024, 16384)) : e2;
    }, le2 = h.TYPE, ce = z.isNewline, ue = z.isName, he = z.isValidEscape, pe = z.isNumberStart, de = z.isIdentifierStart, me = z.charCodeCategory, ge2 = z.isBOM, fe = M.cmpStr, be = M.getNewlineLength, ye = M.findWhiteSpaceEnd, ke = M.consumeEscaped, ve = M.consumeName, xe = M.consumeNumber, we = M.consumeBadUrlRemnants;
    function Se(e2, t2) {
      function n2(t3) {
        return t3 < o2 ? e2.charCodeAt(t3) : 0;
      }
      function r2() {
        return h2 = xe(e2, h2), de(n2(h2), n2(h2 + 1), n2(h2 + 2)) ? (f2 = le2.Dimension, void (h2 = ve(e2, h2))) : 37 === n2(h2) ? (f2 = le2.Percentage, void h2++) : void (f2 = le2.Number);
      }
      function i2() {
        const t3 = h2;
        return h2 = ve(e2, h2), fe(e2, t3, h2, "url") && 40 === n2(h2) ? 34 === n2(h2 = ye(e2, h2 + 1)) || 39 === n2(h2) ? (f2 = le2.Function, void (h2 = t3 + 4)) : void (function() {
          for (f2 = le2.Url, h2 = ye(e2, h2); h2 < e2.length; h2++) {
            var t4 = e2.charCodeAt(h2);
            switch (me(t4)) {
              case 41:
                return void h2++;
              case me.Eof:
                return;
              case me.WhiteSpace:
                return 41 === n2(h2 = ye(e2, h2)) || h2 >= e2.length ? void (h2 < e2.length && h2++) : (h2 = we(e2, h2), void (f2 = le2.BadUrl));
              case 34:
              case 39:
              case 40:
              case me.NonPrintable:
                return h2 = we(e2, h2), void (f2 = le2.BadUrl);
              case 92:
                if (he(t4, n2(h2 + 1))) {
                  h2 = ke(e2, h2) - 1;
                  break;
                }
                return h2 = we(e2, h2), void (f2 = le2.BadUrl);
            }
          }
        })() : 40 === n2(h2) ? (f2 = le2.Function, void h2++) : void (f2 = le2.Ident);
      }
      function a2(t3) {
        for (t3 || (t3 = n2(h2++)), f2 = le2.String; h2 < e2.length; h2++) {
          var r3 = e2.charCodeAt(h2);
          switch (me(r3)) {
            case t3:
              return void h2++;
            case me.Eof:
              return;
            case me.WhiteSpace:
              if (ce(r3)) return h2 += be(e2, h2, r3), void (f2 = le2.BadString);
              break;
            case 92:
              if (h2 === e2.length - 1) break;
              var i3 = n2(h2 + 1);
              ce(i3) ? h2 += be(e2, h2 + 1, i3) : he(r3, i3) && (h2 = ke(e2, h2) - 1);
          }
        }
      }
      t2 || (t2 = new H());
      for (var o2 = (e2 = String(e2 || "")).length, s2 = se(t2.offsetAndType, o2 + 1), l2 = se(t2.balance, o2 + 1), c2 = 0, u2 = ge2(n2(0)), h2 = u2, p2 = 0, d2 = 0, m2 = 0; h2 < o2; ) {
        var g3 = e2.charCodeAt(h2), f2 = 0;
        switch (l2[c2] = o2, me(g3)) {
          case me.WhiteSpace:
            f2 = le2.WhiteSpace, h2 = ye(e2, h2 + 1);
            break;
          case 34:
            a2();
            break;
          case 35:
            ue(n2(h2 + 1)) || he(n2(h2 + 1), n2(h2 + 2)) ? (f2 = le2.Hash, h2 = ve(e2, h2 + 1)) : (f2 = le2.Delim, h2++);
            break;
          case 39:
            a2();
            break;
          case 40:
            f2 = le2.LeftParenthesis, h2++;
            break;
          case 41:
            f2 = le2.RightParenthesis, h2++;
            break;
          case 43:
            pe(g3, n2(h2 + 1), n2(h2 + 2)) ? r2() : (f2 = le2.Delim, h2++);
            break;
          case 44:
            f2 = le2.Comma, h2++;
            break;
          case 45:
            pe(g3, n2(h2 + 1), n2(h2 + 2)) ? r2() : 45 === n2(h2 + 1) && 62 === n2(h2 + 2) ? (f2 = le2.CDC, h2 += 3) : de(g3, n2(h2 + 1), n2(h2 + 2)) ? i2() : (f2 = le2.Delim, h2++);
            break;
          case 46:
            pe(g3, n2(h2 + 1), n2(h2 + 2)) ? r2() : (f2 = le2.Delim, h2++);
            break;
          case 47:
            42 === n2(h2 + 1) ? (f2 = le2.Comment, 1 === (h2 = e2.indexOf("*/", h2 + 2) + 2) && (h2 = e2.length)) : (f2 = le2.Delim, h2++);
            break;
          case 58:
            f2 = le2.Colon, h2++;
            break;
          case 59:
            f2 = le2.Semicolon, h2++;
            break;
          case 60:
            33 === n2(h2 + 1) && 45 === n2(h2 + 2) && 45 === n2(h2 + 3) ? (f2 = le2.CDO, h2 += 4) : (f2 = le2.Delim, h2++);
            break;
          case 64:
            de(n2(h2 + 1), n2(h2 + 2), n2(h2 + 3)) ? (f2 = le2.AtKeyword, h2 = ve(e2, h2 + 1)) : (f2 = le2.Delim, h2++);
            break;
          case 91:
            f2 = le2.LeftSquareBracket, h2++;
            break;
          case 92:
            he(g3, n2(h2 + 1)) ? i2() : (f2 = le2.Delim, h2++);
            break;
          case 93:
            f2 = le2.RightSquareBracket, h2++;
            break;
          case 123:
            f2 = le2.LeftCurlyBracket, h2++;
            break;
          case 125:
            f2 = le2.RightCurlyBracket, h2++;
            break;
          case me.Digit:
            r2();
            break;
          case me.NameStart:
            i2();
            break;
          case me.Eof:
            break;
          default:
            f2 = le2.Delim, h2++;
        }
        switch (f2) {
          case p2:
            for (p2 = (d2 = l2[m2 = 16777215 & d2]) >> 24, l2[c2] = m2, l2[m2++] = c2; m2 < c2; m2++) l2[m2] === o2 && (l2[m2] = c2);
            break;
          case le2.LeftParenthesis:
          case le2.Function:
            l2[c2] = d2, d2 = (p2 = le2.RightParenthesis) << 24 | c2;
            break;
          case le2.LeftSquareBracket:
            l2[c2] = d2, d2 = (p2 = le2.RightSquareBracket) << 24 | c2;
            break;
          case le2.LeftCurlyBracket:
            l2[c2] = d2, d2 = (p2 = le2.RightCurlyBracket) << 24 | c2;
        }
        s2[c2++] = f2 << 24 | h2;
      }
      for (s2[c2] = le2.EOF << 24 | h2, l2[c2] = o2, l2[o2] = o2; 0 !== d2; ) d2 = l2[m2 = 16777215 & d2], l2[m2] = o2;
      return t2.source = e2, t2.firstCharOffset = u2, t2.offsetAndType = s2, t2.tokenCount = c2, t2.balance = l2, t2.reset(), t2.next(), t2;
    }
    Object.keys(h).forEach((function(e2) {
      Se[e2] = h[e2];
    })), Object.keys(z).forEach((function(e2) {
      Se[e2] = z[e2];
    })), Object.keys(M).forEach((function(e2) {
      Se[e2] = M[e2];
    }));
    var Ce = Se, ze = Ce.isDigit, Ae = Ce.cmpChar, Pe = Ce.TYPE, Te = Pe.Delim, Le = Pe.WhiteSpace, Ee = Pe.Comment, De = Pe.Ident, Oe = Pe.Number, Be = Pe.Dimension;
    function Ie(e2, t2) {
      return null !== e2 && e2.type === Te && e2.value.charCodeAt(0) === t2;
    }
    function Ne(e2, t2, n2) {
      for (; null !== e2 && (e2.type === Le || e2.type === Ee); ) e2 = n2(++t2);
      return t2;
    }
    function Re2(e2, t2, n2, r2) {
      if (!e2) return 0;
      var i2 = e2.value.charCodeAt(t2);
      if (43 === i2 || 45 === i2) {
        if (n2) return 0;
        t2++;
      }
      for (; t2 < e2.value.length; t2++) if (!ze(e2.value.charCodeAt(t2))) return 0;
      return r2 + 1;
    }
    function Me(e2, t2, n2) {
      var r2 = false, i2 = Ne(e2, t2, n2);
      if (null === (e2 = n2(i2))) return t2;
      if (e2.type !== Oe) {
        if (!Ie(e2, 43) && !Ie(e2, 45)) return t2;
        if (r2 = true, i2 = Ne(n2(++i2), i2, n2), null === (e2 = n2(i2)) && e2.type !== Oe) return 0;
      }
      if (!r2) {
        var a2 = e2.value.charCodeAt(0);
        if (43 !== a2 && 45 !== a2) return 0;
      }
      return Re2(e2, r2 ? 0 : 1, r2, i2);
    }
    var je = Ce.isHexDigit, _e = Ce.cmpChar, Fe = Ce.TYPE, We = Fe.Ident, qe = Fe.Delim, Ye = Fe.Number, Ue = Fe.Dimension;
    function He(e2, t2) {
      return null !== e2 && e2.type === qe && e2.value.charCodeAt(0) === t2;
    }
    function Ve(e2, t2) {
      return e2.value.charCodeAt(0) === t2;
    }
    function Ke(e2, t2, n2) {
      for (var r2 = t2, i2 = 0; r2 < e2.value.length; r2++) {
        var a2 = e2.value.charCodeAt(r2);
        if (45 === a2 && n2 && 0 !== i2) return Ke(e2, t2 + i2 + 1, false) > 0 ? 6 : 0;
        if (!je(a2)) return 0;
        if (++i2 > 6) return 0;
      }
      return i2;
    }
    function Ge(e2, t2, n2) {
      if (!e2) return 0;
      for (; He(n2(t2), 63); ) {
        if (++e2 > 6) return 0;
        t2++;
      }
      return t2;
    }
    var Qe = Ce.isIdentifierStart, Xe = Ce.isHexDigit, Ze = Ce.isDigit, $e = Ce.cmpStr, Je = Ce.consumeNumber, et = Ce.TYPE, tt = ["unset", "initial", "inherit"], nt = ["calc(", "-moz-calc(", "-webkit-calc("];
    function rt(e2, t2) {
      return t2 < e2.length ? e2.charCodeAt(t2) : 0;
    }
    function it2(e2, t2) {
      return $e(e2, 0, e2.length, t2);
    }
    function at(e2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) if (it2(e2, t2[n2])) return true;
      return false;
    }
    function ot(e2, t2) {
      return t2 === e2.length - 2 && (92 === e2.charCodeAt(t2) && Ze(e2.charCodeAt(t2 + 1)));
    }
    function st(e2, t2, n2) {
      if (e2 && "Range" === e2.type) {
        var r2 = Number(void 0 !== n2 && n2 !== t2.length ? t2.substr(0, n2) : t2);
        if (isNaN(r2)) return true;
        if (null !== e2.min && r2 < e2.min) return true;
        if (null !== e2.max && r2 > e2.max) return true;
      }
      return false;
    }
    function lt2(e2, t2) {
      var n2 = e2.index, r2 = 0;
      do {
        if (r2++, e2.balance <= n2) break;
      } while (e2 = t2(r2));
      return r2;
    }
    function ct(e2) {
      return function(t2, n2, r2) {
        return null === t2 ? 0 : t2.type === et.Function && at(t2.value, nt) ? lt2(t2, n2) : e2(t2, n2, r2);
      };
    }
    function ut(e2) {
      return function(t2) {
        return null === t2 || t2.type !== e2 ? 0 : 1;
      };
    }
    function ht(e2) {
      return function(t2, n2, r2) {
        if (null === t2 || t2.type !== et.Dimension) return 0;
        var i2 = Je(t2.value, 0);
        if (null !== e2) {
          var a2 = t2.value.indexOf("\\", i2), o2 = -1 !== a2 && ot(t2.value, a2) ? t2.value.substring(i2, a2) : t2.value.substr(i2);
          if (false === e2.hasOwnProperty(o2.toLowerCase())) return 0;
        }
        return st(r2, t2.value, i2) ? 0 : 1;
      };
    }
    function pt(e2) {
      return "function" != typeof e2 && (e2 = function() {
        return 0;
      }), function(t2, n2, r2) {
        return null !== t2 && t2.type === et.Number && 0 === Number(t2.value) ? 1 : e2(t2, n2, r2);
      };
    }
    var dt, mt = { "ident-token": ut(et.Ident), "function-token": ut(et.Function), "at-keyword-token": ut(et.AtKeyword), "hash-token": ut(et.Hash), "string-token": ut(et.String), "bad-string-token": ut(et.BadString), "url-token": ut(et.Url), "bad-url-token": ut(et.BadUrl), "delim-token": ut(et.Delim), "number-token": ut(et.Number), "percentage-token": ut(et.Percentage), "dimension-token": ut(et.Dimension), "whitespace-token": ut(et.WhiteSpace), "CDO-token": ut(et.CDO), "CDC-token": ut(et.CDC), "colon-token": ut(et.Colon), "semicolon-token": ut(et.Semicolon), "comma-token": ut(et.Comma), "[-token": ut(et.LeftSquareBracket), "]-token": ut(et.RightSquareBracket), "(-token": ut(et.LeftParenthesis), ")-token": ut(et.RightParenthesis), "{-token": ut(et.LeftCurlyBracket), "}-token": ut(et.RightCurlyBracket), string: ut(et.String), ident: ut(et.Ident), "custom-ident": function(e2) {
      if (null === e2 || e2.type !== et.Ident) return 0;
      var t2 = e2.value.toLowerCase();
      return at(t2, tt) || it2(t2, "default") ? 0 : 1;
    }, "custom-property-name": function(e2) {
      return null === e2 || e2.type !== et.Ident || 45 !== rt(e2.value, 0) || 45 !== rt(e2.value, 1) ? 0 : 1;
    }, "hex-color": function(e2) {
      if (null === e2 || e2.type !== et.Hash) return 0;
      var t2 = e2.value.length;
      if (4 !== t2 && 5 !== t2 && 7 !== t2 && 9 !== t2) return 0;
      for (var n2 = 1; n2 < t2; n2++) if (!Xe(e2.value.charCodeAt(n2))) return 0;
      return 1;
    }, "id-selector": function(e2) {
      return null === e2 || e2.type !== et.Hash ? 0 : Qe(rt(e2.value, 1), rt(e2.value, 2), rt(e2.value, 3)) ? 1 : 0;
    }, "an-plus-b": function(e2, t2) {
      var n2 = 0;
      if (!e2) return 0;
      if (e2.type === Oe) return Re2(e2, 0, false, n2);
      if (e2.type === De && 45 === e2.value.charCodeAt(0)) {
        if (!Ae(e2.value, 1, 110)) return 0;
        switch (e2.value.length) {
          case 2:
            return Me(t2(++n2), n2, t2);
          case 3:
            return 45 !== e2.value.charCodeAt(2) ? 0 : (n2 = Ne(t2(++n2), n2, t2), Re2(e2 = t2(n2), 0, true, n2));
          default:
            return 45 !== e2.value.charCodeAt(2) ? 0 : Re2(e2, 3, true, n2);
        }
      } else if (e2.type === De || Ie(e2, 43) && t2(n2 + 1).type === De) {
        if (e2.type !== De && (e2 = t2(++n2)), null === e2 || !Ae(e2.value, 0, 110)) return 0;
        switch (e2.value.length) {
          case 1:
            return Me(t2(++n2), n2, t2);
          case 2:
            return 45 !== e2.value.charCodeAt(1) ? 0 : (n2 = Ne(t2(++n2), n2, t2), Re2(e2 = t2(n2), 0, true, n2));
          default:
            return 45 !== e2.value.charCodeAt(1) ? 0 : Re2(e2, 2, true, n2);
        }
      } else if (e2.type === Be) {
        for (var r2 = e2.value.charCodeAt(0), i2 = 43 === r2 || 45 === r2 ? 1 : 0, a2 = i2; a2 < e2.value.length && ze(e2.value.charCodeAt(a2)); a2++) ;
        return a2 === i2 ? 0 : Ae(e2.value, a2, 110) ? a2 + 1 === e2.value.length ? Me(t2(++n2), n2, t2) : 45 !== e2.value.charCodeAt(a2 + 1) ? 0 : a2 + 2 === e2.value.length ? (n2 = Ne(t2(++n2), n2, t2), Re2(e2 = t2(n2), 0, true, n2)) : Re2(e2, a2 + 2, true, n2) : 0;
      }
      return 0;
    }, urange: function(e2, t2) {
      var n2 = 0;
      if (null === e2 || e2.type !== We || !_e(e2.value, 0, 117)) return 0;
      if (null === (e2 = t2(++n2))) return 0;
      if (He(e2, 43)) return null === (e2 = t2(++n2)) ? 0 : e2.type === We ? Ge(Ke(e2, 0, true), ++n2, t2) : He(e2, 63) ? Ge(1, ++n2, t2) : 0;
      if (e2.type === Ye) {
        if (!Ve(e2, 43)) return 0;
        var r2 = Ke(e2, 1, true);
        return 0 === r2 ? 0 : null === (e2 = t2(++n2)) ? n2 : e2.type === Ue || e2.type === Ye ? Ve(e2, 45) && Ke(e2, 1, false) ? n2 + 1 : 0 : Ge(r2, n2, t2);
      }
      return e2.type === Ue && Ve(e2, 43) ? Ge(Ke(e2, 1, true), ++n2, t2) : 0;
    }, "declaration-value": function(e2, t2) {
      if (!e2) return 0;
      var n2 = 0, r2 = 0, i2 = e2.index;
      e: do {
        switch (e2.type) {
          case et.BadString:
          case et.BadUrl:
            break e;
          case et.RightCurlyBracket:
          case et.RightParenthesis:
          case et.RightSquareBracket:
            if (e2.balance > e2.index || e2.balance < i2) break e;
            r2--;
            break;
          case et.Semicolon:
            if (0 === r2) break e;
            break;
          case et.Delim:
            if ("!" === e2.value && 0 === r2) break e;
            break;
          case et.Function:
          case et.LeftParenthesis:
          case et.LeftSquareBracket:
          case et.LeftCurlyBracket:
            r2++;
        }
        if (n2++, e2.balance <= i2) break;
      } while (e2 = t2(n2));
      return n2;
    }, "any-value": function(e2, t2) {
      if (!e2) return 0;
      var n2 = e2.index, r2 = 0;
      e: do {
        switch (e2.type) {
          case et.BadString:
          case et.BadUrl:
            break e;
          case et.RightCurlyBracket:
          case et.RightParenthesis:
          case et.RightSquareBracket:
            if (e2.balance > e2.index || e2.balance < n2) break e;
        }
        if (r2++, e2.balance <= n2) break;
      } while (e2 = t2(r2));
      return r2;
    }, dimension: ct(ht(null)), angle: ct(ht({ deg: true, grad: true, rad: true, turn: true })), decibel: ct(ht({ db: true })), frequency: ct(ht({ hz: true, khz: true })), flex: ct(ht({ fr: true })), length: ct(pt(ht({ px: true, mm: true, cm: true, in: true, pt: true, pc: true, q: true, em: true, ex: true, ch: true, rem: true, vh: true, vw: true, vmin: true, vmax: true, vm: true }))), resolution: ct(ht({ dpi: true, dpcm: true, dppx: true, x: true })), semitones: ct(ht({ st: true })), time: ct(ht({ s: true, ms: true })), percentage: ct((function(e2, t2, n2) {
      return null === e2 || e2.type !== et.Percentage || st(n2, e2.value, e2.value.length - 1) ? 0 : 1;
    })), zero: pt(), number: ct((function(e2, t2, n2) {
      if (null === e2) return 0;
      var r2 = Je(e2.value, 0);
      return r2 === e2.value.length || ot(e2.value, r2) ? st(n2, e2.value, r2) ? 0 : 1 : 0;
    })), integer: ct((function(e2, t2, n2) {
      if (null === e2 || e2.type !== et.Number) return 0;
      for (var r2 = 43 === e2.value.charCodeAt(0) || 45 === e2.value.charCodeAt(0) ? 1 : 0; r2 < e2.value.length; r2++) if (!Ze(e2.value.charCodeAt(r2))) return 0;
      return st(n2, e2.value, r2) ? 0 : 1;
    })), "-ms-legacy-expression": (dt = "expression", dt += "(", function(e2, t2) {
      return null !== e2 && it2(e2.value, dt) ? lt2(e2, t2) : 0;
    }) }, gt2 = function(e2, t2, n2) {
      var r2 = o("SyntaxError", e2);
      return r2.input = t2, r2.offset = n2, r2.rawMessage = e2, r2.message = r2.rawMessage + "\n  " + r2.input + "\n--" + new Array((r2.offset || r2.input.length) + 1).join("-") + "^", r2;
    }, ft = function(e2) {
      this.str = e2, this.pos = 0;
    };
    ft.prototype = { charCodeAt: function(e2) {
      return e2 < this.str.length ? this.str.charCodeAt(e2) : 0;
    }, charCode: function() {
      return this.charCodeAt(this.pos);
    }, nextCharCode: function() {
      return this.charCodeAt(this.pos + 1);
    }, nextNonWsCode: function(e2) {
      return this.charCodeAt(this.findWsEnd(e2));
    }, findWsEnd: function(e2) {
      for (; e2 < this.str.length; e2++) {
        var t2 = this.str.charCodeAt(e2);
        if (13 !== t2 && 10 !== t2 && 12 !== t2 && 32 !== t2 && 9 !== t2) break;
      }
      return e2;
    }, substringToPos: function(e2) {
      return this.str.substring(this.pos, this.pos = e2);
    }, eat: function(e2) {
      this.charCode() !== e2 && this.error("Expect `" + String.fromCharCode(e2) + "`"), this.pos++;
    }, peek: function() {
      return this.pos < this.str.length ? this.str.charAt(this.pos++) : "";
    }, error: function(e2) {
      throw new gt2(e2, this.str, this.pos);
    } };
    var bt = ft, yt = (function(e2) {
      for (var t2 = "function" == typeof Uint32Array ? new Uint32Array(128) : new Array(128), n2 = 0; n2 < 128; n2++) t2[n2] = e2(String.fromCharCode(n2)) ? 1 : 0;
      return t2;
    })((function(e2) {
      return /[a-zA-Z0-9\-]/.test(e2);
    })), kt = { " ": 1, "&&": 2, "||": 3, "|": 4 };
    function vt(e2) {
      return e2.substringToPos(e2.findWsEnd(e2.pos));
    }
    function xt(e2) {
      for (var t2 = e2.pos; t2 < e2.str.length; t2++) {
        var n2 = e2.str.charCodeAt(t2);
        if (n2 >= 128 || 0 === yt[n2]) break;
      }
      return e2.pos === t2 && e2.error("Expect a keyword"), e2.substringToPos(t2);
    }
    function wt(e2) {
      for (var t2 = e2.pos; t2 < e2.str.length; t2++) {
        var n2 = e2.str.charCodeAt(t2);
        if (n2 < 48 || n2 > 57) break;
      }
      return e2.pos === t2 && e2.error("Expect a number"), e2.substringToPos(t2);
    }
    function St(e2) {
      var t2 = e2.str.indexOf("'", e2.pos + 1);
      return -1 === t2 && (e2.pos = e2.str.length, e2.error("Expect an apostrophe")), e2.substringToPos(t2 + 1);
    }
    function Ct(e2) {
      var t2, n2 = null;
      return e2.eat(123), t2 = wt(e2), 44 === e2.charCode() ? (e2.pos++, 125 !== e2.charCode() && (n2 = wt(e2))) : n2 = t2, e2.eat(125), { min: Number(t2), max: n2 ? Number(n2) : 0 };
    }
    function zt(e2, t2) {
      var n2 = (function(e3) {
        var t3 = null, n3 = false;
        switch (e3.charCode()) {
          case 42:
            e3.pos++, t3 = { min: 0, max: 0 };
            break;
          case 43:
            e3.pos++, t3 = { min: 1, max: 0 };
            break;
          case 63:
            e3.pos++, t3 = { min: 0, max: 1 };
            break;
          case 35:
            e3.pos++, n3 = true, t3 = 123 === e3.charCode() ? Ct(e3) : { min: 1, max: 0 };
            break;
          case 123:
            t3 = Ct(e3);
            break;
          default:
            return null;
        }
        return { type: "Multiplier", comma: n3, min: t3.min, max: t3.max, term: null };
      })(e2);
      return null !== n2 ? (n2.term = t2, n2) : t2;
    }
    function At(e2) {
      var t2 = e2.peek();
      return "" === t2 ? null : { type: "Token", value: t2 };
    }
    function Pt(e2) {
      var t2, n2 = null;
      return e2.eat(60), t2 = xt(e2), 40 === e2.charCode() && 41 === e2.nextCharCode() && (e2.pos += 2, t2 += "()"), 91 === e2.charCodeAt(e2.findWsEnd(e2.pos)) && (vt(e2), n2 = (function(e3) {
        var t3 = null, n3 = null, r2 = 1;
        return e3.eat(91), 45 === e3.charCode() && (e3.peek(), r2 = -1), -1 == r2 && 8734 === e3.charCode() ? e3.peek() : t3 = r2 * Number(wt(e3)), vt(e3), e3.eat(44), vt(e3), 8734 === e3.charCode() ? e3.peek() : (r2 = 1, 45 === e3.charCode() && (e3.peek(), r2 = -1), n3 = r2 * Number(wt(e3))), e3.eat(93), null === t3 && null === n3 ? null : { type: "Range", min: t3, max: n3 };
      })(e2)), e2.eat(62), zt(e2, { type: "Type", name: t2, opts: n2 });
    }
    function Tt(e2, t2) {
      function n2(e3, t3) {
        return { type: "Group", terms: e3, combinator: t3, disallowEmpty: false, explicit: false };
      }
      for (t2 = Object.keys(t2).sort((function(e3, t3) {
        return kt[e3] - kt[t3];
      })); t2.length > 0; ) {
        for (var r2 = t2.shift(), i2 = 0, a2 = 0; i2 < e2.length; i2++) {
          var o2 = e2[i2];
          "Combinator" === o2.type && (o2.value === r2 ? (-1 === a2 && (a2 = i2 - 1), e2.splice(i2, 1), i2--) : (-1 !== a2 && i2 - a2 > 1 && (e2.splice(a2, i2 - a2, n2(e2.slice(a2, i2), r2)), i2 = a2 + 1), a2 = -1));
        }
        -1 !== a2 && t2.length && e2.splice(a2, i2 - a2, n2(e2.slice(a2, i2), r2));
      }
      return r2;
    }
    function Lt2(e2) {
      for (var t2, n2 = [], r2 = {}, i2 = null, a2 = e2.pos; t2 = Et(e2); ) "Spaces" !== t2.type && ("Combinator" === t2.type ? (null !== i2 && "Combinator" !== i2.type || (e2.pos = a2, e2.error("Unexpected combinator")), r2[t2.value] = true) : null !== i2 && "Combinator" !== i2.type && (r2[" "] = true, n2.push({ type: "Combinator", value: " " })), n2.push(t2), i2 = t2, a2 = e2.pos);
      return null !== i2 && "Combinator" === i2.type && (e2.pos -= a2, e2.error("Unexpected combinator")), { type: "Group", terms: n2, combinator: Tt(n2, r2) || " ", disallowEmpty: false, explicit: false };
    }
    function Et(e2) {
      var t2 = e2.charCode();
      if (t2 < 128 && 1 === yt[t2]) return (function(e3) {
        var t3;
        return t3 = xt(e3), 40 === e3.charCode() ? (e3.pos++, { type: "Function", name: t3 }) : zt(e3, { type: "Keyword", name: t3 });
      })(e2);
      switch (t2) {
        case 93:
          break;
        case 91:
          return zt(e2, (function(e3) {
            var t3;
            return e3.eat(91), t3 = Lt2(e3), e3.eat(93), t3.explicit = true, 33 === e3.charCode() && (e3.pos++, t3.disallowEmpty = true), t3;
          })(e2));
        case 60:
          return 39 === e2.nextCharCode() ? (function(e3) {
            var t3;
            return e3.eat(60), e3.eat(39), t3 = xt(e3), e3.eat(39), e3.eat(62), zt(e3, { type: "Property", name: t3 });
          })(e2) : Pt(e2);
        case 124:
          return { type: "Combinator", value: e2.substringToPos(124 === e2.nextCharCode() ? e2.pos + 2 : e2.pos + 1) };
        case 38:
          return e2.pos++, e2.eat(38), { type: "Combinator", value: "&&" };
        case 44:
          return e2.pos++, { type: "Comma" };
        case 39:
          return zt(e2, { type: "String", value: St(e2) });
        case 32:
        case 9:
        case 10:
        case 13:
        case 12:
          return { type: "Spaces", value: vt(e2) };
        case 64:
          return (t2 = e2.nextCharCode()) < 128 && 1 === yt[t2] ? (e2.pos++, { type: "AtKeyword", name: xt(e2) }) : At(e2);
        case 42:
        case 43:
        case 63:
        case 35:
        case 33:
          break;
        case 123:
          if ((t2 = e2.nextCharCode()) < 48 || t2 > 57) return At(e2);
          break;
        default:
          return At(e2);
      }
    }
    function Dt(e2) {
      var t2 = new bt(e2), n2 = Lt2(t2);
      return t2.pos !== e2.length && t2.error("Unexpected input"), 1 === n2.terms.length && "Group" === n2.terms[0].type && (n2 = n2.terms[0]), n2;
    }
    Dt("[a&&<b>#|<'c'>*||e() f{2} /,(% g#{1,2} h{2,})]!");
    var Ot = Dt, Bt = function() {
    };
    function It(e2) {
      return "function" == typeof e2 ? e2 : Bt;
    }
    var Nt = function(e2, t2, n2) {
      var r2 = Bt, i2 = Bt;
      if ("function" == typeof t2 ? r2 = t2 : t2 && (r2 = It(t2.enter), i2 = It(t2.leave)), r2 === Bt && i2 === Bt) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
      !(function e3(t3) {
        switch (r2.call(n2, t3), t3.type) {
          case "Group":
            t3.terms.forEach(e3);
            break;
          case "Multiplier":
            e3(t3.term);
            break;
          case "Type":
          case "Property":
          case "Keyword":
          case "AtKeyword":
          case "Function":
          case "String":
          case "Token":
          case "Comma":
            break;
          default:
            throw new Error("Unknown type: " + t3.type);
        }
        i2.call(n2, t3);
      })(e2);
    }, Rt = new H(), Mt = { decorator: function(e2) {
      var t2 = null, n2 = { len: 0, node: null }, r2 = [n2], i2 = "";
      return { children: e2.children, node: function(n3) {
        var r3 = t2;
        t2 = n3, e2.node.call(this, n3), t2 = r3;
      }, chunk: function(e3) {
        i2 += e3, n2.node !== t2 ? r2.push({ len: e3.length, node: t2 }) : n2.len += e3.length;
      }, result: function() {
        return jt(i2, r2);
      } };
    } };
    function jt(e2, t2) {
      var n2 = [], r2 = 0, i2 = 0, a2 = t2 ? t2[i2].node : null;
      for (Ce(e2, Rt); !Rt.eof; ) {
        if (t2) for (; i2 < t2.length && r2 + t2[i2].len <= Rt.tokenStart; ) r2 += t2[i2++].len, a2 = t2[i2].node;
        n2.push({ type: Rt.tokenType, value: Rt.getTokenValue(), index: Rt.tokenIndex, balance: Rt.balance[Rt.tokenIndex], node: a2 }), Rt.next();
      }
      return n2;
    }
    var _t = { type: "Match" }, Ft = { type: "Mismatch" }, Wt = { type: "DisallowEmpty" };
    function qt(e2, t2, n2) {
      return t2 === _t && n2 === Ft || e2 === _t && t2 === _t && n2 === _t ? e2 : ("If" === e2.type && e2.else === Ft && t2 === _t && (t2 = e2.then, e2 = e2.match), { type: "If", match: e2, then: t2, else: n2 });
    }
    function Yt(e2) {
      return e2.length > 2 && 40 === e2.charCodeAt(e2.length - 2) && 41 === e2.charCodeAt(e2.length - 1);
    }
    function Ut(e2) {
      return "Keyword" === e2.type || "AtKeyword" === e2.type || "Function" === e2.type || "Type" === e2.type && Yt(e2.name);
    }
    function Ht(e2) {
      if ("function" == typeof e2) return { type: "Generic", fn: e2 };
      switch (e2.type) {
        case "Group":
          var t2 = (function e3(t3, n2, r2) {
            switch (t3) {
              case " ":
                for (var i2 = _t, a2 = n2.length - 1; a2 >= 0; a2--) {
                  i2 = qt(l2 = n2[a2], i2, Ft);
                }
                return i2;
              case "|":
                i2 = Ft;
                var o2 = null;
                for (a2 = n2.length - 1; a2 >= 0; a2--) {
                  if (Ut(l2 = n2[a2]) && (null === o2 && a2 > 0 && Ut(n2[a2 - 1]) && (i2 = qt({ type: "Enum", map: o2 = /* @__PURE__ */ Object.create(null) }, _t, i2)), null !== o2)) {
                    var s2 = (Yt(l2.name) ? l2.name.slice(0, -1) : l2.name).toLowerCase();
                    if (s2 in o2 == false) {
                      o2[s2] = l2;
                      continue;
                    }
                  }
                  o2 = null, i2 = qt(l2, _t, i2);
                }
                return i2;
              case "&&":
                if (n2.length > 5) return { type: "MatchOnce", terms: n2, all: true };
                for (i2 = Ft, a2 = n2.length - 1; a2 >= 0; a2--) {
                  var l2 = n2[a2];
                  c2 = n2.length > 1 ? e3(t3, n2.filter((function(e4) {
                    return e4 !== l2;
                  })), false) : _t, i2 = qt(l2, c2, i2);
                }
                return i2;
              case "||":
                if (n2.length > 5) return { type: "MatchOnce", terms: n2, all: false };
                for (i2 = r2 ? _t : Ft, a2 = n2.length - 1; a2 >= 0; a2--) {
                  var c2;
                  l2 = n2[a2];
                  c2 = n2.length > 1 ? e3(t3, n2.filter((function(e4) {
                    return e4 !== l2;
                  })), true) : _t, i2 = qt(l2, c2, i2);
                }
                return i2;
            }
          })(e2.combinator, e2.terms.map(Ht), false);
          return e2.disallowEmpty && (t2 = qt(t2, Wt, Ft)), t2;
        case "Multiplier":
          return (function(e3) {
            var t3 = _t, n2 = Ht(e3.term);
            if (0 === e3.max) n2 = qt(n2, Wt, Ft), (t3 = qt(n2, null, Ft)).then = qt(_t, _t, t3), e3.comma && (t3.then.else = qt({ type: "Comma", syntax: e3 }, t3, Ft));
            else for (var r2 = e3.min || 1; r2 <= e3.max; r2++) e3.comma && t3 !== _t && (t3 = qt({ type: "Comma", syntax: e3 }, t3, Ft)), t3 = qt(n2, qt(_t, _t, t3), Ft);
            if (0 === e3.min) t3 = qt(_t, _t, t3);
            else for (r2 = 0; r2 < e3.min - 1; r2++) e3.comma && t3 !== _t && (t3 = qt({ type: "Comma", syntax: e3 }, t3, Ft)), t3 = qt(n2, t3, Ft);
            return t3;
          })(e2);
        case "Type":
        case "Property":
          return { type: e2.type, name: e2.name, syntax: e2 };
        case "Keyword":
          return { type: e2.type, name: e2.name.toLowerCase(), syntax: e2 };
        case "AtKeyword":
          return { type: e2.type, name: "@" + e2.name.toLowerCase(), syntax: e2 };
        case "Function":
          return { type: e2.type, name: e2.name.toLowerCase() + "(", syntax: e2 };
        case "String":
          return 3 === e2.value.length ? { type: "Token", value: e2.value.charAt(1), syntax: e2 } : { type: e2.type, value: e2.value.substr(1, e2.value.length - 2).replace(/\\'/g, "'"), syntax: e2 };
        case "Token":
          return { type: e2.type, value: e2.value, syntax: e2 };
        case "Comma":
          return { type: e2.type, syntax: e2 };
        default:
          throw new Error("Unknown node type:", e2.type);
      }
    }
    var Vt = _t, Kt = Ft, Gt2 = Wt, Qt = function(e2, t2) {
      return "string" == typeof e2 && (e2 = Ot(e2)), { type: "MatchGraph", match: Ht(e2), syntax: t2 || null, source: e2 };
    }, Xt = Object.prototype.hasOwnProperty, Zt = Vt, $t = Kt, Jt = Gt2, en = h.TYPE;
    function tn(e2) {
      for (var t2 = null, n2 = null, r2 = e2; null !== r2; ) n2 = r2.prev, r2.prev = t2, t2 = r2, r2 = n2;
      return t2;
    }
    function nn(e2, t2) {
      if (e2.length !== t2.length) return false;
      for (var n2 = 0; n2 < e2.length; n2++) {
        var r2 = e2.charCodeAt(n2);
        if (r2 >= 65 && r2 <= 90 && (r2 |= 32), r2 !== t2.charCodeAt(n2)) return false;
      }
      return true;
    }
    function rn(e2) {
      return null === e2 || (e2.type === en.Comma || e2.type === en.Function || e2.type === en.LeftParenthesis || e2.type === en.LeftSquareBracket || e2.type === en.LeftCurlyBracket || (function(e3) {
        return e3.type === en.Delim && "?" !== e3.value;
      })(e2));
    }
    function an(e2) {
      return null === e2 || (e2.type === en.RightParenthesis || e2.type === en.RightSquareBracket || e2.type === en.RightCurlyBracket || e2.type === en.Delim);
    }
    function on(e2, t2, n2) {
      function r2() {
        do {
          b2++, f2 = b2 < e2.length ? e2[b2] : null;
        } while (null !== f2 && (f2.type === en.WhiteSpace || f2.type === en.Comment));
      }
      function i2(t3) {
        var n3 = b2 + t3;
        return n3 < e2.length ? e2[n3] : null;
      }
      function a2(e3, t3) {
        return { nextState: e3, matchStack: k2, syntaxStack: u2, thenStack: h2, tokenIndex: b2, prev: t3 };
      }
      function o2(e3) {
        h2 = { nextState: e3, matchStack: k2, syntaxStack: u2, prev: h2 };
      }
      function s2(e3) {
        p2 = a2(e3, p2);
      }
      function l2() {
        k2 = { type: 1, syntax: t2.syntax, token: f2, prev: k2 }, r2(), d2 = null, b2 > y2 && (y2 = b2);
      }
      function c2() {
        k2 = 2 === k2.type ? k2.prev : { type: 3, syntax: u2.syntax, token: k2.token, prev: k2 }, u2 = u2.prev;
      }
      var u2 = null, h2 = null, p2 = null, d2 = null, m2 = 0, g3 = null, f2 = null, b2 = -1, y2 = 0, k2 = { type: 0, syntax: null, token: null, prev: null };
      for (r2(); null === g3 && ++m2 < 15e3; ) switch (t2.type) {
        case "Match":
          if (null === h2) {
            if (null !== f2 && (b2 !== e2.length - 1 || "\\0" !== f2.value && "\\9" !== f2.value)) {
              t2 = $t;
              break;
            }
            g3 = "Match";
            break;
          }
          if ((t2 = h2.nextState) === Jt) {
            if (h2.matchStack === k2) {
              t2 = $t;
              break;
            }
            t2 = Zt;
          }
          for (; h2.syntaxStack !== u2; ) c2();
          h2 = h2.prev;
          break;
        case "Mismatch":
          if (null !== d2 && false !== d2) (null === p2 || b2 > p2.tokenIndex) && (p2 = d2, d2 = false);
          else if (null === p2) {
            g3 = "Mismatch";
            break;
          }
          t2 = p2.nextState, h2 = p2.thenStack, u2 = p2.syntaxStack, k2 = p2.matchStack, b2 = p2.tokenIndex, f2 = b2 < e2.length ? e2[b2] : null, p2 = p2.prev;
          break;
        case "MatchGraph":
          t2 = t2.match;
          break;
        case "If":
          t2.else !== $t && s2(t2.else), t2.then !== Zt && o2(t2.then), t2 = t2.match;
          break;
        case "MatchOnce":
          t2 = { type: "MatchOnceBuffer", syntax: t2, index: 0, mask: 0 };
          break;
        case "MatchOnceBuffer":
          var v2 = t2.syntax.terms;
          if (t2.index === v2.length) {
            if (0 === t2.mask || t2.syntax.all) {
              t2 = $t;
              break;
            }
            t2 = Zt;
            break;
          }
          if (t2.mask === (1 << v2.length) - 1) {
            t2 = Zt;
            break;
          }
          for (; t2.index < v2.length; t2.index++) {
            var x2 = 1 << t2.index;
            if (0 == (t2.mask & x2)) {
              s2(t2), o2({ type: "AddMatchOnce", syntax: t2.syntax, mask: t2.mask | x2 }), t2 = v2[t2.index++];
              break;
            }
          }
          break;
        case "AddMatchOnce":
          t2 = { type: "MatchOnceBuffer", syntax: t2.syntax, index: 0, mask: t2.mask };
          break;
        case "Enum":
          if (null !== f2) {
            if (-1 !== (A2 = f2.value.toLowerCase()).indexOf("\\") && (A2 = A2.replace(/\\[09].*$/, "")), Xt.call(t2.map, A2)) {
              t2 = t2.map[A2];
              break;
            }
          }
          t2 = $t;
          break;
        case "Generic":
          var w2 = null !== u2 ? u2.opts : null, S2 = b2 + Math.floor(t2.fn(f2, i2, w2));
          if (!isNaN(S2) && S2 > b2) {
            for (; b2 < S2; ) l2();
            t2 = Zt;
          } else t2 = $t;
          break;
        case "Type":
        case "Property":
          var C2 = "Type" === t2.type ? "types" : "properties", z2 = Xt.call(n2, C2) ? n2[C2][t2.name] : null;
          if (!z2 || !z2.match) throw new Error("Bad syntax reference: " + ("Type" === t2.type ? "<" + t2.name + ">" : "<'" + t2.name + "'>"));
          if (false !== d2 && null !== f2 && "Type" === t2.type) {
            if ("custom-ident" === t2.name && f2.type === en.Ident || "length" === t2.name && "0" === f2.value) {
              null === d2 && (d2 = a2(t2, p2)), t2 = $t;
              break;
            }
          }
          u2 = { syntax: t2.syntax, opts: t2.syntax.opts || null !== u2 && u2.opts || null, prev: u2 }, k2 = { type: 2, syntax: t2.syntax, token: k2.token, prev: k2 }, t2 = z2.match;
          break;
        case "Keyword":
          var A2 = t2.name;
          if (null !== f2) {
            var P2 = f2.value;
            if (-1 !== P2.indexOf("\\") && (P2 = P2.replace(/\\[09].*$/, "")), nn(P2, A2)) {
              l2(), t2 = Zt;
              break;
            }
          }
          t2 = $t;
          break;
        case "AtKeyword":
        case "Function":
          if (null !== f2 && nn(f2.value, t2.name)) {
            l2(), t2 = Zt;
            break;
          }
          t2 = $t;
          break;
        case "Token":
          if (null !== f2 && f2.value === t2.value) {
            l2(), t2 = Zt;
            break;
          }
          t2 = $t;
          break;
        case "Comma":
          null !== f2 && f2.type === en.Comma ? rn(k2.token) ? t2 = $t : (l2(), t2 = an(f2) ? $t : Zt) : t2 = rn(k2.token) || an(f2) ? Zt : $t;
          break;
        case "String":
          var T2 = "";
          for (S2 = b2; S2 < e2.length && T2.length < t2.value.length; S2++) T2 += e2[S2].value;
          if (nn(T2, t2.value)) {
            for (; b2 < S2; ) l2();
            t2 = Zt;
          } else t2 = $t;
          break;
        default:
          throw new Error("Unknown node type: " + t2.type);
      }
      switch (g3) {
        case null:
          console.warn("[csstree-match] BREAK after 15000 iterations"), g3 = "Maximum iteration number exceeded (please fill an issue on https://github.com/csstree/csstree/issues)", k2 = null;
          break;
        case "Match":
          for (; null !== u2; ) c2();
          break;
        default:
          k2 = null;
      }
      return { tokens: e2, reason: g3, iterations: m2, match: k2, longestMatch: y2 };
    }
    var sn = function(e2, t2, n2) {
      var r2 = on(e2, t2, n2 || {});
      if (null === r2.match) return r2;
      var i2 = r2.match, a2 = r2.match = { syntax: t2.syntax || null, match: [] }, o2 = [a2];
      for (i2 = tn(i2).prev; null !== i2; ) {
        switch (i2.type) {
          case 2:
            a2.match.push(a2 = { syntax: i2.syntax, match: [] }), o2.push(a2);
            break;
          case 3:
            o2.pop(), a2 = o2[o2.length - 1];
            break;
          default:
            a2.match.push({ syntax: i2.syntax || null, token: i2.token.value, node: i2.token.node });
        }
        i2 = i2.prev;
      }
      return r2;
    };
    function ln(e2) {
      function t2(e3) {
        return null !== e3 && ("Type" === e3.type || "Property" === e3.type || "Keyword" === e3.type);
      }
      var n2 = null;
      return null !== this.matched && (function r2(i2) {
        if (Array.isArray(i2.match)) {
          for (var a2 = 0; a2 < i2.match.length; a2++) if (r2(i2.match[a2])) return t2(i2.syntax) && n2.unshift(i2.syntax), true;
        } else if (i2.node === e2) return n2 = t2(i2.syntax) ? [i2.syntax] : [], true;
        return false;
      })(this.matched), n2;
    }
    function cn(e2, t2, n2) {
      var r2 = ln.call(e2, t2);
      return null !== r2 && r2.some(n2);
    }
    var un = { getTrace: ln, isType: function(e2, t2) {
      return cn(this, e2, (function(e3) {
        return "Type" === e3.type && e3.name === t2;
      }));
    }, isProperty: function(e2, t2) {
      return cn(this, e2, (function(e3) {
        return "Property" === e3.type && e3.name === t2;
      }));
    }, isKeyword: function(e2) {
      return cn(this, e2, (function(e3) {
        return "Keyword" === e3.type;
      }));
    } };
    var hn = { matchFragments: function(e2, t2, n2, r2, i2) {
      var o2 = [];
      return null !== n2.matched && (function n3(s2) {
        if (null !== s2.syntax && s2.syntax.type === r2 && s2.syntax.name === i2) {
          var l2 = (function e3(t3) {
            return "node" in t3 ? t3.node : e3(t3.match[0]);
          })(s2), c2 = (function e3(t3) {
            return "node" in t3 ? t3.node : e3(t3.match[t3.match.length - 1]);
          })(s2);
          e2.syntax.walk(t2, (function(e3, t3, n4) {
            if (e3 === l2) {
              var r3 = new a();
              do {
                if (r3.appendData(t3.data), t3.data === c2) break;
                t3 = t3.next;
              } while (null !== t3);
              o2.push({ parent: n4, nodes: r3 });
            }
          }));
        }
        Array.isArray(s2.match) && s2.match.forEach(n3);
      })(n2.matched), o2;
    } }, pn = Object.prototype.hasOwnProperty;
    function dn(e2) {
      return "number" == typeof e2 && isFinite(e2) && Math.floor(e2) === e2 && e2 >= 0;
    }
    function mn(e2) {
      return Boolean(e2) && dn(e2.offset) && dn(e2.line) && dn(e2.column);
    }
    function gn(e2, t2) {
      return function(n2, r2) {
        if (!n2 || n2.constructor !== Object) return r2(n2, "Type of node should be an Object");
        for (var i2 in n2) {
          var o2 = true;
          if (false !== pn.call(n2, i2)) {
            if ("type" === i2) n2.type !== e2 && r2(n2, "Wrong node type `" + n2.type + "`, expected `" + e2 + "`");
            else if ("loc" === i2) {
              if (null === n2.loc) continue;
              if (n2.loc && n2.loc.constructor === Object) if ("string" != typeof n2.loc.source) i2 += ".source";
              else if (mn(n2.loc.start)) {
                if (mn(n2.loc.end)) continue;
                i2 += ".end";
              } else i2 += ".start";
              o2 = false;
            } else if (t2.hasOwnProperty(i2)) {
              var s2 = 0;
              for (o2 = false; !o2 && s2 < t2[i2].length; s2++) {
                var l2 = t2[i2][s2];
                switch (l2) {
                  case String:
                    o2 = "string" == typeof n2[i2];
                    break;
                  case Boolean:
                    o2 = "boolean" == typeof n2[i2];
                    break;
                  case null:
                    o2 = null === n2[i2];
                    break;
                  default:
                    "string" == typeof l2 ? o2 = n2[i2] && n2[i2].type === l2 : Array.isArray(l2) && (o2 = n2[i2] instanceof a);
                }
              }
            } else r2(n2, "Unknown field `" + i2 + "` for " + e2 + " node type");
            o2 || r2(n2, "Bad value for `" + e2 + "." + i2 + "`");
          }
        }
        for (var i2 in t2) pn.call(t2, i2) && false === pn.call(n2, i2) && r2(n2, "Field `" + e2 + "." + i2 + "` is missed");
      };
    }
    function fn(e2, t2) {
      var n2 = t2.structure, r2 = { type: String, loc: true }, i2 = { type: '"' + e2 + '"' };
      for (var a2 in n2) if (false !== pn.call(n2, a2)) {
        for (var o2 = [], s2 = r2[a2] = Array.isArray(n2[a2]) ? n2[a2].slice() : [n2[a2]], l2 = 0; l2 < s2.length; l2++) {
          var c2 = s2[l2];
          if (c2 === String || c2 === Boolean) o2.push(c2.name);
          else if (null === c2) o2.push("null");
          else if ("string" == typeof c2) o2.push("<" + c2 + ">");
          else {
            if (!Array.isArray(c2)) throw new Error("Wrong value `" + c2 + "` in `" + e2 + "." + a2 + "` structure definition");
            o2.push("List");
          }
        }
        i2[a2] = o2.join(" | ");
      }
      return { docs: i2, check: gn(e2, r2) };
    }
    var bn = $, yn = J, kn = Qt, vn = sn, xn = function(e2) {
      var t2 = {};
      if (e2.node) {
        for (var n2 in e2.node) if (pn.call(e2.node, n2)) {
          var r2 = e2.node[n2];
          if (!r2.structure) throw new Error("Missed `structure` field in `" + n2 + "` node type definition");
          t2[n2] = fn(n2, r2);
        }
      }
      return t2;
    }, wn = kn("inherit | initial | unset"), Sn = kn("inherit | initial | unset | <-ms-legacy-expression>");
    function Cn(e2, t2, n2) {
      var r2 = {};
      for (var i2 in e2) e2[i2].syntax && (r2[i2] = n2 ? e2[i2].syntax : G(e2[i2].syntax, { compact: t2 }));
      return r2;
    }
    function zn(e2, t2, n2) {
      const r2 = {};
      for (const [i2, a2] of Object.entries(e2)) r2[i2] = { prelude: a2.prelude && (n2 ? a2.prelude.syntax : G(a2.prelude.syntax, { compact: t2 })), descriptors: a2.descriptors && Cn(a2.descriptors, t2, n2) };
      return r2;
    }
    function An(e2, t2, n2) {
      return { matched: e2, iterations: n2, error: t2, getTrace: un.getTrace, isType: un.isType, isProperty: un.isProperty, isKeyword: un.isKeyword };
    }
    function Pn(e2, t2, n2, r2) {
      var i2, a2 = (function(e3, t3) {
        return "string" == typeof e3 ? jt(e3, null) : t3.generate(e3, Mt);
      })(n2, e2.syntax);
      return (function(e3) {
        for (var t3 = 0; t3 < e3.length; t3++) if ("var(" === e3[t3].value.toLowerCase()) return true;
        return false;
      })(a2) ? An(null, new Error("Matching for a tree with var() is not supported")) : (r2 && (i2 = vn(a2, e2.valueCommonSyntax, e2)), r2 && i2.match || (i2 = vn(a2, t2.match, e2)).match ? An(i2.match, null, i2.iterations) : An(null, new yn(i2.reason, t2.syntax, n2, i2), i2.iterations));
    }
    var Tn = function(e2, t2, n2) {
      if (this.valueCommonSyntax = wn, this.syntax = t2, this.generic = false, this.atrules = {}, this.properties = {}, this.types = {}, this.structure = n2 || xn(e2), e2) {
        if (e2.types) for (var r2 in e2.types) this.addType_(r2, e2.types[r2]);
        if (e2.generic) for (var r2 in this.generic = true, mt) this.addType_(r2, mt[r2]);
        if (e2.atrules) for (var r2 in e2.atrules) this.addAtrule_(r2, e2.atrules[r2]);
        if (e2.properties) for (var r2 in e2.properties) this.addProperty_(r2, e2.properties[r2]);
      }
    };
    Tn.prototype = { structure: {}, checkStructure: function(e2) {
      function t2(e3, t3) {
        r2.push({ node: e3, message: t3 });
      }
      var n2 = this.structure, r2 = [];
      return this.syntax.walk(e2, (function(e3) {
        n2.hasOwnProperty(e3.type) ? n2[e3.type].check(e3, t2) : t2(e3, "Unknown node type `" + e3.type + "`");
      })), !!r2.length && r2;
    }, createDescriptor: function(e2, t2, n2, r2 = null) {
      var i2 = { type: t2, name: n2 }, a2 = { type: t2, name: n2, parent: r2, syntax: null, match: null };
      return "function" == typeof e2 ? a2.match = kn(e2, i2) : ("string" == typeof e2 ? Object.defineProperty(a2, "syntax", { get: function() {
        return Object.defineProperty(a2, "syntax", { value: Ot(e2) }), a2.syntax;
      } }) : a2.syntax = e2, Object.defineProperty(a2, "match", { get: function() {
        return Object.defineProperty(a2, "match", { value: kn(a2.syntax, i2) }), a2.match;
      } })), a2;
    }, addAtrule_: function(e2, t2) {
      t2 && (this.atrules[e2] = { type: "Atrule", name: e2, prelude: t2.prelude ? this.createDescriptor(t2.prelude, "AtrulePrelude", e2) : null, descriptors: t2.descriptors ? Object.keys(t2.descriptors).reduce(((n2, r2) => (n2[r2] = this.createDescriptor(t2.descriptors[r2], "AtruleDescriptor", r2, e2), n2)), {}) : null });
    }, addProperty_: function(e2, t2) {
      t2 && (this.properties[e2] = this.createDescriptor(t2, "Property", e2));
    }, addType_: function(e2, t2) {
      t2 && (this.types[e2] = this.createDescriptor(t2, "Type", e2), t2 === mt["-ms-legacy-expression"] && (this.valueCommonSyntax = Sn));
    }, checkAtruleName: function(e2) {
      if (!this.getAtrule(e2)) return new bn("Unknown at-rule", "@" + e2);
    }, checkAtrulePrelude: function(e2, t2) {
      let n2 = this.checkAtruleName(e2);
      if (n2) return n2;
      var r2 = this.getAtrule(e2);
      return !r2.prelude && t2 ? new SyntaxError("At-rule `@" + e2 + "` should not contain a prelude") : r2.prelude && !t2 ? new SyntaxError("At-rule `@" + e2 + "` should contain a prelude") : void 0;
    }, checkAtruleDescriptorName: function(e2, t2) {
      let n2 = this.checkAtruleName(e2);
      if (n2) return n2;
      var r2 = this.getAtrule(e2), i2 = ae.keyword(t2);
      return r2.descriptors ? r2.descriptors[i2.name] || r2.descriptors[i2.basename] ? void 0 : new bn("Unknown at-rule descriptor", t2) : new SyntaxError("At-rule `@" + e2 + "` has no known descriptors");
    }, checkPropertyName: function(e2) {
      return ae.property(e2).custom ? new Error("Lexer matching doesn't applicable for custom properties") : this.getProperty(e2) ? void 0 : new bn("Unknown property", e2);
    }, matchAtrulePrelude: function(e2, t2) {
      var n2 = this.checkAtrulePrelude(e2, t2);
      return n2 ? An(null, n2) : t2 ? Pn(this, this.getAtrule(e2).prelude, t2, false) : An(null, null);
    }, matchAtruleDescriptor: function(e2, t2, n2) {
      var r2 = this.checkAtruleDescriptorName(e2, t2);
      if (r2) return An(null, r2);
      var i2 = this.getAtrule(e2), a2 = ae.keyword(t2);
      return Pn(this, i2.descriptors[a2.name] || i2.descriptors[a2.basename], n2, false);
    }, matchDeclaration: function(e2) {
      return "Declaration" !== e2.type ? An(null, new Error("Not a Declaration node")) : this.matchProperty(e2.property, e2.value);
    }, matchProperty: function(e2, t2) {
      var n2 = this.checkPropertyName(e2);
      return n2 ? An(null, n2) : Pn(this, this.getProperty(e2), t2, true);
    }, matchType: function(e2, t2) {
      var n2 = this.getType(e2);
      return n2 ? Pn(this, n2, t2, false) : An(null, new bn("Unknown type", e2));
    }, match: function(e2, t2) {
      return "string" == typeof e2 || e2 && e2.type ? ("string" != typeof e2 && e2.match || (e2 = this.createDescriptor(e2, "Type", "anonymous")), Pn(this, e2, t2, false)) : An(null, new bn("Bad syntax"));
    }, findValueFragments: function(e2, t2, n2, r2) {
      return hn.matchFragments(this, t2, this.matchProperty(e2, t2), n2, r2);
    }, findDeclarationValueFragments: function(e2, t2, n2) {
      return hn.matchFragments(this, e2.value, this.matchDeclaration(e2), t2, n2);
    }, findAllFragments: function(e2, t2, n2) {
      var r2 = [];
      return this.syntax.walk(e2, { visit: "Declaration", enter: function(e3) {
        r2.push.apply(r2, this.findDeclarationValueFragments(e3, t2, n2));
      }.bind(this) }), r2;
    }, getAtrule: function(e2, t2 = true) {
      var n2 = ae.keyword(e2);
      return (n2.vendor && t2 ? this.atrules[n2.name] || this.atrules[n2.basename] : this.atrules[n2.name]) || null;
    }, getAtrulePrelude: function(e2, t2 = true) {
      const n2 = this.getAtrule(e2, t2);
      return n2 && n2.prelude || null;
    }, getAtruleDescriptor: function(e2, t2) {
      return this.atrules.hasOwnProperty(e2) && this.atrules.declarators && this.atrules[e2].declarators[t2] || null;
    }, getProperty: function(e2, t2 = true) {
      var n2 = ae.property(e2);
      return (n2.vendor && t2 ? this.properties[n2.name] || this.properties[n2.basename] : this.properties[n2.name]) || null;
    }, getType: function(e2) {
      return this.types.hasOwnProperty(e2) ? this.types[e2] : null;
    }, validate: function() {
      function e2(r3, i2, a2, o2) {
        if (a2.hasOwnProperty(i2)) return a2[i2];
        a2[i2] = false, null !== o2.syntax && Nt(o2.syntax, (function(o3) {
          if ("Type" === o3.type || "Property" === o3.type) {
            var s2 = "Type" === o3.type ? r3.types : r3.properties, l2 = "Type" === o3.type ? t2 : n2;
            s2.hasOwnProperty(o3.name) && !e2(r3, o3.name, l2, s2[o3.name]) || (a2[i2] = true);
          }
        }), this);
      }
      var t2 = {}, n2 = {};
      for (var r2 in this.types) e2(this, r2, t2, this.types[r2]);
      for (var r2 in this.properties) e2(this, r2, n2, this.properties[r2]);
      return t2 = Object.keys(t2).filter((function(e3) {
        return t2[e3];
      })), n2 = Object.keys(n2).filter((function(e3) {
        return n2[e3];
      })), t2.length || n2.length ? { types: t2, properties: n2 } : null;
    }, dump: function(e2, t2) {
      return { generic: this.generic, types: Cn(this.types, !t2, e2), properties: Cn(this.properties, !t2, e2), atrules: zn(this.atrules, !t2, e2) };
    }, toString: function() {
      return JSON.stringify(this.dump());
    } };
    var Ln = Tn, En = { SyntaxError: gt2, parse: Ot, generate: G, walk: Nt }, Dn = Ce.isBOM;
    var On = function() {
      this.lines = null, this.columns = null, this.linesAndColumnsComputed = false;
    };
    On.prototype = { setSource: function(e2, t2, n2, r2) {
      this.source = e2, this.startOffset = void 0 === t2 ? 0 : t2, this.startLine = void 0 === n2 ? 1 : n2, this.startColumn = void 0 === r2 ? 1 : r2, this.linesAndColumnsComputed = false;
    }, ensureLinesAndColumnsComputed: function() {
      this.linesAndColumnsComputed || (!(function(e2, t2) {
        for (var n2 = t2.length, r2 = se(e2.lines, n2), i2 = e2.startLine, a2 = se(e2.columns, n2), o2 = e2.startColumn, s2 = t2.length > 0 ? Dn(t2.charCodeAt(0)) : 0; s2 < n2; s2++) {
          var l2 = t2.charCodeAt(s2);
          r2[s2] = i2, a2[s2] = o2++, 10 !== l2 && 13 !== l2 && 12 !== l2 || (13 === l2 && s2 + 1 < n2 && 10 === t2.charCodeAt(s2 + 1) && (r2[++s2] = i2, a2[s2] = o2), i2++, o2 = 1);
        }
        r2[s2] = i2, a2[s2] = o2, e2.lines = r2, e2.columns = a2;
      })(this, this.source), this.linesAndColumnsComputed = true);
    }, getLocation: function(e2, t2) {
      return this.ensureLinesAndColumnsComputed(), { source: t2, offset: this.startOffset + e2, line: this.lines[e2], column: this.columns[e2] };
    }, getLocationRange: function(e2, t2, n2) {
      return this.ensureLinesAndColumnsComputed(), { source: n2, start: { offset: this.startOffset + e2, line: this.lines[e2], column: this.columns[e2] }, end: { offset: this.startOffset + t2, line: this.lines[t2], column: this.columns[t2] } };
    } };
    var Bn = On, In = Ce.TYPE, Nn = In.WhiteSpace, Rn = In.Comment, Mn = function(e2) {
      var t2 = this.createList(), n2 = null, r2 = { recognizer: e2, space: null, ignoreWS: false, ignoreWSAfter: false };
      for (this.scanner.skipSC(); !this.scanner.eof; ) {
        switch (this.scanner.tokenType) {
          case Rn:
            this.scanner.next();
            continue;
          case Nn:
            r2.ignoreWS ? this.scanner.next() : r2.space = this.WhiteSpace();
            continue;
        }
        if (void 0 === (n2 = e2.getNode.call(this, r2))) break;
        null !== r2.space && (t2.push(r2.space), r2.space = null), t2.push(n2), r2.ignoreWSAfter ? (r2.ignoreWSAfter = false, r2.ignoreWS = true) : r2.ignoreWS = false;
      }
      return t2;
    }, { findWhiteSpaceStart: jn, cmpStr: _n } = M, Fn = function() {
    }, Wn = h.TYPE, qn = h.NAME, Yn = Wn.WhiteSpace, Un = Wn.Comment, Hn = Wn.Ident, Vn = Wn.Function, Kn = Wn.Url, Gn = Wn.Hash, Qn = Wn.Percentage, Xn = Wn.Number;
    function Zn(e2) {
      return function() {
        return this[e2]();
      };
    }
    var $n = function(e2) {
      var t2 = { scanner: new H(), locationMap: new Bn(), filename: "<unknown>", needPositions: false, onParseError: Fn, onParseErrorThrow: false, parseAtrulePrelude: true, parseRulePrelude: true, parseValue: true, parseCustomProperty: false, readSequence: Mn, createList: function() {
        return new a();
      }, createSingleNodeList: function(e3) {
        return new a().appendData(e3);
      }, getFirstListNode: function(e3) {
        return e3 && e3.first();
      }, getLastListNode: function(e3) {
        return e3.last();
      }, parseWithFallback: function(e3, t3) {
        var n3 = this.scanner.tokenIndex;
        try {
          return e3.call(this);
        } catch (e4) {
          if (this.onParseErrorThrow) throw e4;
          var r2 = t3.call(this, n3);
          return this.onParseErrorThrow = true, this.onParseError(e4, r2), this.onParseErrorThrow = false, r2;
        }
      }, lookupNonWSType: function(e3) {
        do {
          var t3 = this.scanner.lookupType(e3++);
          if (t3 !== Yn) return t3;
        } while (0 !== t3);
        return 0;
      }, eat: function(e3) {
        if (this.scanner.tokenType !== e3) {
          var t3 = this.scanner.tokenStart, n3 = qn[e3] + " is expected";
          switch (e3) {
            case Hn:
              this.scanner.tokenType === Vn || this.scanner.tokenType === Kn ? (t3 = this.scanner.tokenEnd - 1, n3 = "Identifier is expected but function found") : n3 = "Identifier is expected";
              break;
            case Gn:
              this.scanner.isDelim(35) && (this.scanner.next(), t3++, n3 = "Name is expected");
              break;
            case Qn:
              this.scanner.tokenType === Xn && (t3 = this.scanner.tokenEnd, n3 = "Percent sign is expected");
              break;
            default:
              this.scanner.source.charCodeAt(this.scanner.tokenStart) === e3 && (t3 += 1);
          }
          this.error(n3, t3);
        }
        this.scanner.next();
      }, consume: function(e3) {
        var t3 = this.scanner.getTokenValue();
        return this.eat(e3), t3;
      }, consumeFunctionName: function() {
        var e3 = this.scanner.source.substring(this.scanner.tokenStart, this.scanner.tokenEnd - 1);
        return this.eat(Vn), e3;
      }, getLocation: function(e3, t3) {
        return this.needPositions ? this.locationMap.getLocationRange(e3, t3, this.filename) : null;
      }, getLocationFromList: function(e3) {
        if (this.needPositions) {
          var t3 = this.getFirstListNode(e3), n3 = this.getLastListNode(e3);
          return this.locationMap.getLocationRange(null !== t3 ? t3.loc.start.offset - this.locationMap.startOffset : this.scanner.tokenStart, null !== n3 ? n3.loc.end.offset - this.locationMap.startOffset : this.scanner.tokenStart, this.filename);
        }
        return null;
      }, error: function(e3, t3) {
        var n3 = void 0 !== t3 && t3 < this.scanner.source.length ? this.locationMap.getLocation(t3) : this.scanner.eof ? this.locationMap.getLocation(jn(this.scanner.source, this.scanner.source.length - 1)) : this.locationMap.getLocation(this.scanner.tokenStart);
        throw new l(e3 || "Unexpected input", this.scanner.source, n3.offset, n3.line, n3.column);
      } };
      for (var n2 in e2 = (function(e3) {
        var t3 = { context: {}, scope: {}, atrule: {}, pseudo: {} };
        if (e3.parseContext) for (var n3 in e3.parseContext) switch (typeof e3.parseContext[n3]) {
          case "function":
            t3.context[n3] = e3.parseContext[n3];
            break;
          case "string":
            t3.context[n3] = Zn(e3.parseContext[n3]);
        }
        if (e3.scope) for (var n3 in e3.scope) t3.scope[n3] = e3.scope[n3];
        if (e3.atrule) for (var n3 in e3.atrule) {
          var r2 = e3.atrule[n3];
          r2.parse && (t3.atrule[n3] = r2.parse);
        }
        if (e3.pseudo) for (var n3 in e3.pseudo) {
          var i2 = e3.pseudo[n3];
          i2.parse && (t3.pseudo[n3] = i2.parse);
        }
        if (e3.node) for (var n3 in e3.node) t3[n3] = e3.node[n3].parse;
        return t3;
      })(e2 || {})) t2[n2] = e2[n2];
      return function(e3, n3) {
        var r2, i2 = (n3 = n3 || {}).context || "default", a2 = n3.onComment;
        if (Ce(e3, t2.scanner), t2.locationMap.setSource(e3, n3.offset, n3.line, n3.column), t2.filename = n3.filename || "<unknown>", t2.needPositions = Boolean(n3.positions), t2.onParseError = "function" == typeof n3.onParseError ? n3.onParseError : Fn, t2.onParseErrorThrow = false, t2.parseAtrulePrelude = !("parseAtrulePrelude" in n3) || Boolean(n3.parseAtrulePrelude), t2.parseRulePrelude = !("parseRulePrelude" in n3) || Boolean(n3.parseRulePrelude), t2.parseValue = !("parseValue" in n3) || Boolean(n3.parseValue), t2.parseCustomProperty = "parseCustomProperty" in n3 && Boolean(n3.parseCustomProperty), !t2.context.hasOwnProperty(i2)) throw new Error("Unknown context `" + i2 + "`");
        return "function" == typeof a2 && t2.scanner.forEachToken(((n4, r3, i3) => {
          if (n4 === Un) {
            const n5 = t2.getLocation(r3, i3), o2 = _n(e3, i3 - 2, i3, "*/") ? e3.slice(r3 + 2, i3 - 2) : e3.slice(r3 + 2, i3);
            a2(o2, n5);
          }
        })), r2 = t2.context[i2].call(t2, n3), t2.scanner.eof || t2.error(), r2;
      };
    }, Jn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""), er = function(e2) {
      if (0 <= e2 && e2 < Jn.length) return Jn[e2];
      throw new TypeError("Must be between 0 and 63: " + e2);
    };
    var tr = function(e2) {
      var t2, n2 = "", r2 = (function(e3) {
        return e3 < 0 ? 1 + (-e3 << 1) : 0 + (e3 << 1);
      })(e2);
      do {
        t2 = 31 & r2, (r2 >>>= 5) > 0 && (t2 |= 32), n2 += er(t2);
      } while (r2 > 0);
      return n2;
    };
    var nr = (function(e2, t2) {
      return e2(t2 = { exports: {} }, t2.exports), t2.exports;
    })((function(e2, t2) {
      t2.getArg = function(e3, t3, n3) {
        if (t3 in e3) return e3[t3];
        if (3 === arguments.length) return n3;
        throw new Error('"' + t3 + '" is a required argument.');
      };
      var n2 = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, r2 = /^data:.+\,.+$/;
      function i2(e3) {
        var t3 = e3.match(n2);
        return t3 ? { scheme: t3[1], auth: t3[2], host: t3[3], port: t3[4], path: t3[5] } : null;
      }
      function a2(e3) {
        var t3 = "";
        return e3.scheme && (t3 += e3.scheme + ":"), t3 += "//", e3.auth && (t3 += e3.auth + "@"), e3.host && (t3 += e3.host), e3.port && (t3 += ":" + e3.port), e3.path && (t3 += e3.path), t3;
      }
      function o2(e3) {
        var n3 = e3, r3 = i2(e3);
        if (r3) {
          if (!r3.path) return e3;
          n3 = r3.path;
        }
        for (var o3, s3 = t2.isAbsolute(n3), l3 = n3.split(/\/+/), c3 = 0, u3 = l3.length - 1; u3 >= 0; u3--) "." === (o3 = l3[u3]) ? l3.splice(u3, 1) : ".." === o3 ? c3++ : c3 > 0 && ("" === o3 ? (l3.splice(u3 + 1, c3), c3 = 0) : (l3.splice(u3, 2), c3--));
        return "" === (n3 = l3.join("/")) && (n3 = s3 ? "/" : "."), r3 ? (r3.path = n3, a2(r3)) : n3;
      }
      function s2(e3, t3) {
        "" === e3 && (e3 = "."), "" === t3 && (t3 = ".");
        var n3 = i2(t3), s3 = i2(e3);
        if (s3 && (e3 = s3.path || "/"), n3 && !n3.scheme) return s3 && (n3.scheme = s3.scheme), a2(n3);
        if (n3 || t3.match(r2)) return t3;
        if (s3 && !s3.host && !s3.path) return s3.host = t3, a2(s3);
        var l3 = "/" === t3.charAt(0) ? t3 : o2(e3.replace(/\/+$/, "") + "/" + t3);
        return s3 ? (s3.path = l3, a2(s3)) : l3;
      }
      t2.urlParse = i2, t2.urlGenerate = a2, t2.normalize = o2, t2.join = s2, t2.isAbsolute = function(e3) {
        return "/" === e3.charAt(0) || n2.test(e3);
      }, t2.relative = function(e3, t3) {
        "" === e3 && (e3 = "."), e3 = e3.replace(/\/$/, "");
        for (var n3 = 0; 0 !== t3.indexOf(e3 + "/"); ) {
          var r3 = e3.lastIndexOf("/");
          if (r3 < 0) return t3;
          if ((e3 = e3.slice(0, r3)).match(/^([^\/]+:\/)?\/*$/)) return t3;
          ++n3;
        }
        return Array(n3 + 1).join("../") + t3.substr(e3.length + 1);
      };
      var l2 = !("__proto__" in /* @__PURE__ */ Object.create(null));
      function c2(e3) {
        return e3;
      }
      function u2(e3) {
        if (!e3) return false;
        var t3 = e3.length;
        if (t3 < 9) return false;
        if (95 !== e3.charCodeAt(t3 - 1) || 95 !== e3.charCodeAt(t3 - 2) || 111 !== e3.charCodeAt(t3 - 3) || 116 !== e3.charCodeAt(t3 - 4) || 111 !== e3.charCodeAt(t3 - 5) || 114 !== e3.charCodeAt(t3 - 6) || 112 !== e3.charCodeAt(t3 - 7) || 95 !== e3.charCodeAt(t3 - 8) || 95 !== e3.charCodeAt(t3 - 9)) return false;
        for (var n3 = t3 - 10; n3 >= 0; n3--) if (36 !== e3.charCodeAt(n3)) return false;
        return true;
      }
      function h2(e3, t3) {
        return e3 === t3 ? 0 : null === e3 ? 1 : null === t3 ? -1 : e3 > t3 ? 1 : -1;
      }
      t2.toSetString = l2 ? c2 : function(e3) {
        return u2(e3) ? "$" + e3 : e3;
      }, t2.fromSetString = l2 ? c2 : function(e3) {
        return u2(e3) ? e3.slice(1) : e3;
      }, t2.compareByOriginalPositions = function(e3, t3, n3) {
        var r3 = h2(e3.source, t3.source);
        return 0 !== r3 || 0 !== (r3 = e3.originalLine - t3.originalLine) || 0 !== (r3 = e3.originalColumn - t3.originalColumn) || n3 || 0 !== (r3 = e3.generatedColumn - t3.generatedColumn) || 0 !== (r3 = e3.generatedLine - t3.generatedLine) ? r3 : h2(e3.name, t3.name);
      }, t2.compareByGeneratedPositionsDeflated = function(e3, t3, n3) {
        var r3 = e3.generatedLine - t3.generatedLine;
        return 0 !== r3 || 0 !== (r3 = e3.generatedColumn - t3.generatedColumn) || n3 || 0 !== (r3 = h2(e3.source, t3.source)) || 0 !== (r3 = e3.originalLine - t3.originalLine) || 0 !== (r3 = e3.originalColumn - t3.originalColumn) ? r3 : h2(e3.name, t3.name);
      }, t2.compareByGeneratedPositionsInflated = function(e3, t3) {
        var n3 = e3.generatedLine - t3.generatedLine;
        return 0 !== n3 || 0 !== (n3 = e3.generatedColumn - t3.generatedColumn) || 0 !== (n3 = h2(e3.source, t3.source)) || 0 !== (n3 = e3.originalLine - t3.originalLine) || 0 !== (n3 = e3.originalColumn - t3.originalColumn) ? n3 : h2(e3.name, t3.name);
      }, t2.parseSourceMapInput = function(e3) {
        return JSON.parse(e3.replace(/^\)]}'[^\n]*\n/, ""));
      }, t2.computeSourceURL = function(e3, t3, n3) {
        if (t3 = t3 || "", e3 && ("/" !== e3[e3.length - 1] && "/" !== t3[0] && (e3 += "/"), t3 = e3 + t3), n3) {
          var r3 = i2(n3);
          if (!r3) throw new Error("sourceMapURL could not be parsed");
          if (r3.path) {
            var l3 = r3.path.lastIndexOf("/");
            l3 >= 0 && (r3.path = r3.path.substring(0, l3 + 1));
          }
          t3 = s2(a2(r3), t3);
        }
        return o2(t3);
      };
    })), rr = (nr.getArg, nr.urlParse, nr.urlGenerate, nr.normalize, nr.join, nr.isAbsolute, nr.relative, nr.toSetString, nr.fromSetString, nr.compareByOriginalPositions, nr.compareByGeneratedPositionsDeflated, nr.compareByGeneratedPositionsInflated, nr.parseSourceMapInput, nr.computeSourceURL, Object.prototype.hasOwnProperty), ir = "undefined" != typeof Map;
    function ar() {
      this._array = [], this._set = ir ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
    }
    ar.fromArray = function(e2, t2) {
      for (var n2 = new ar(), r2 = 0, i2 = e2.length; r2 < i2; r2++) n2.add(e2[r2], t2);
      return n2;
    }, ar.prototype.size = function() {
      return ir ? this._set.size : Object.getOwnPropertyNames(this._set).length;
    }, ar.prototype.add = function(e2, t2) {
      var n2 = ir ? e2 : nr.toSetString(e2), r2 = ir ? this.has(e2) : rr.call(this._set, n2), i2 = this._array.length;
      r2 && !t2 || this._array.push(e2), r2 || (ir ? this._set.set(e2, i2) : this._set[n2] = i2);
    }, ar.prototype.has = function(e2) {
      if (ir) return this._set.has(e2);
      var t2 = nr.toSetString(e2);
      return rr.call(this._set, t2);
    }, ar.prototype.indexOf = function(e2) {
      if (ir) {
        var t2 = this._set.get(e2);
        if (t2 >= 0) return t2;
      } else {
        var n2 = nr.toSetString(e2);
        if (rr.call(this._set, n2)) return this._set[n2];
      }
      throw new Error('"' + e2 + '" is not in the set.');
    }, ar.prototype.at = function(e2) {
      if (e2 >= 0 && e2 < this._array.length) return this._array[e2];
      throw new Error("No element indexed by " + e2);
    }, ar.prototype.toArray = function() {
      return this._array.slice();
    };
    var or2 = { ArraySet: ar };
    function sr() {
      this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
    }
    sr.prototype.unsortedForEach = function(e2, t2) {
      this._array.forEach(e2, t2);
    }, sr.prototype.add = function(e2) {
      var t2, n2, r2, i2, a2, o2;
      t2 = this._last, n2 = e2, r2 = t2.generatedLine, i2 = n2.generatedLine, a2 = t2.generatedColumn, o2 = n2.generatedColumn, i2 > r2 || i2 == r2 && o2 >= a2 || nr.compareByGeneratedPositionsInflated(t2, n2) <= 0 ? (this._last = e2, this._array.push(e2)) : (this._sorted = false, this._array.push(e2));
    }, sr.prototype.toArray = function() {
      return this._sorted || (this._array.sort(nr.compareByGeneratedPositionsInflated), this._sorted = true), this._array;
    };
    var lr = or2.ArraySet, cr = { MappingList: sr }.MappingList;
    function ur(e2) {
      e2 || (e2 = {}), this._file = nr.getArg(e2, "file", null), this._sourceRoot = nr.getArg(e2, "sourceRoot", null), this._skipValidation = nr.getArg(e2, "skipValidation", false), this._sources = new lr(), this._names = new lr(), this._mappings = new cr(), this._sourcesContents = null;
    }
    ur.prototype._version = 3, ur.fromSourceMap = function(e2) {
      var t2 = e2.sourceRoot, n2 = new ur({ file: e2.file, sourceRoot: t2 });
      return e2.eachMapping((function(e3) {
        var r2 = { generated: { line: e3.generatedLine, column: e3.generatedColumn } };
        null != e3.source && (r2.source = e3.source, null != t2 && (r2.source = nr.relative(t2, r2.source)), r2.original = { line: e3.originalLine, column: e3.originalColumn }, null != e3.name && (r2.name = e3.name)), n2.addMapping(r2);
      })), e2.sources.forEach((function(r2) {
        var i2 = r2;
        null !== t2 && (i2 = nr.relative(t2, r2)), n2._sources.has(i2) || n2._sources.add(i2);
        var a2 = e2.sourceContentFor(r2);
        null != a2 && n2.setSourceContent(r2, a2);
      })), n2;
    }, ur.prototype.addMapping = function(e2) {
      var t2 = nr.getArg(e2, "generated"), n2 = nr.getArg(e2, "original", null), r2 = nr.getArg(e2, "source", null), i2 = nr.getArg(e2, "name", null);
      this._skipValidation || this._validateMapping(t2, n2, r2, i2), null != r2 && (r2 = String(r2), this._sources.has(r2) || this._sources.add(r2)), null != i2 && (i2 = String(i2), this._names.has(i2) || this._names.add(i2)), this._mappings.add({ generatedLine: t2.line, generatedColumn: t2.column, originalLine: null != n2 && n2.line, originalColumn: null != n2 && n2.column, source: r2, name: i2 });
    }, ur.prototype.setSourceContent = function(e2, t2) {
      var n2 = e2;
      null != this._sourceRoot && (n2 = nr.relative(this._sourceRoot, n2)), null != t2 ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[nr.toSetString(n2)] = t2) : this._sourcesContents && (delete this._sourcesContents[nr.toSetString(n2)], 0 === Object.keys(this._sourcesContents).length && (this._sourcesContents = null));
    }, ur.prototype.applySourceMap = function(e2, t2, n2) {
      var r2 = t2;
      if (null == t2) {
        if (null == e2.file) throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
        r2 = e2.file;
      }
      var i2 = this._sourceRoot;
      null != i2 && (r2 = nr.relative(i2, r2));
      var a2 = new lr(), o2 = new lr();
      this._mappings.unsortedForEach((function(t3) {
        if (t3.source === r2 && null != t3.originalLine) {
          var s2 = e2.originalPositionFor({ line: t3.originalLine, column: t3.originalColumn });
          null != s2.source && (t3.source = s2.source, null != n2 && (t3.source = nr.join(n2, t3.source)), null != i2 && (t3.source = nr.relative(i2, t3.source)), t3.originalLine = s2.line, t3.originalColumn = s2.column, null != s2.name && (t3.name = s2.name));
        }
        var l2 = t3.source;
        null == l2 || a2.has(l2) || a2.add(l2);
        var c2 = t3.name;
        null == c2 || o2.has(c2) || o2.add(c2);
      }), this), this._sources = a2, this._names = o2, e2.sources.forEach((function(t3) {
        var r3 = e2.sourceContentFor(t3);
        null != r3 && (null != n2 && (t3 = nr.join(n2, t3)), null != i2 && (t3 = nr.relative(i2, t3)), this.setSourceContent(t3, r3));
      }), this);
    }, ur.prototype._validateMapping = function(e2, t2, n2, r2) {
      if (t2 && "number" != typeof t2.line && "number" != typeof t2.column) throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
      if ((!(e2 && "line" in e2 && "column" in e2 && e2.line > 0 && e2.column >= 0) || t2 || n2 || r2) && !(e2 && "line" in e2 && "column" in e2 && t2 && "line" in t2 && "column" in t2 && e2.line > 0 && e2.column >= 0 && t2.line > 0 && t2.column >= 0 && n2)) throw new Error("Invalid mapping: " + JSON.stringify({ generated: e2, source: n2, original: t2, name: r2 }));
    }, ur.prototype._serializeMappings = function() {
      for (var e2, t2, n2, r2, i2 = 0, a2 = 1, o2 = 0, s2 = 0, l2 = 0, c2 = 0, u2 = "", h2 = this._mappings.toArray(), p2 = 0, d2 = h2.length; p2 < d2; p2++) {
        if (e2 = "", (t2 = h2[p2]).generatedLine !== a2) for (i2 = 0; t2.generatedLine !== a2; ) e2 += ";", a2++;
        else if (p2 > 0) {
          if (!nr.compareByGeneratedPositionsInflated(t2, h2[p2 - 1])) continue;
          e2 += ",";
        }
        e2 += tr(t2.generatedColumn - i2), i2 = t2.generatedColumn, null != t2.source && (r2 = this._sources.indexOf(t2.source), e2 += tr(r2 - c2), c2 = r2, e2 += tr(t2.originalLine - 1 - s2), s2 = t2.originalLine - 1, e2 += tr(t2.originalColumn - o2), o2 = t2.originalColumn, null != t2.name && (n2 = this._names.indexOf(t2.name), e2 += tr(n2 - l2), l2 = n2)), u2 += e2;
      }
      return u2;
    }, ur.prototype._generateSourcesContent = function(e2, t2) {
      return e2.map((function(e3) {
        if (!this._sourcesContents) return null;
        null != t2 && (e3 = nr.relative(t2, e3));
        var n2 = nr.toSetString(e3);
        return Object.prototype.hasOwnProperty.call(this._sourcesContents, n2) ? this._sourcesContents[n2] : null;
      }), this);
    }, ur.prototype.toJSON = function() {
      var e2 = { version: this._version, sources: this._sources.toArray(), names: this._names.toArray(), mappings: this._serializeMappings() };
      return null != this._file && (e2.file = this._file), null != this._sourceRoot && (e2.sourceRoot = this._sourceRoot), this._sourcesContents && (e2.sourcesContent = this._generateSourcesContent(e2.sources, e2.sourceRoot)), e2;
    }, ur.prototype.toString = function() {
      return JSON.stringify(this.toJSON());
    };
    var hr = { SourceMapGenerator: ur }.SourceMapGenerator, pr2 = { Atrule: true, Selector: true, Declaration: true }, dr = Object.prototype.hasOwnProperty;
    function mr(e2, t2) {
      var n2 = e2.children, r2 = null;
      "function" != typeof t2 ? n2.forEach(this.node, this) : n2.forEach((function(e3) {
        null !== r2 && t2.call(this, r2), this.node(e3), r2 = e3;
      }), this);
    }
    var gr = function(e2) {
      function t2(e3) {
        if (!dr.call(n2, e3.type)) throw new Error("Unknown node type: " + e3.type);
        n2[e3.type].call(this, e3);
      }
      var n2 = {};
      if (e2.node) for (var r2 in e2.node) n2[r2] = e2.node[r2].generate;
      return function(e3, n3) {
        var r3 = "", i2 = { children: mr, node: t2, chunk: function(e4) {
          r3 += e4;
        }, result: function() {
          return r3;
        } };
        return n3 && ("function" == typeof n3.decorator && (i2 = n3.decorator(i2)), n3.sourceMap && (i2 = (function(e4) {
          var t3 = new hr(), n4 = 1, r4 = 0, i3 = { line: 1, column: 0 }, a2 = { line: 0, column: 0 }, o2 = false, s2 = { line: 1, column: 0 }, l2 = { generated: s2 }, c2 = e4.node;
          e4.node = function(e5) {
            if (e5.loc && e5.loc.start && pr2.hasOwnProperty(e5.type)) {
              var u3 = e5.loc.start.line, h3 = e5.loc.start.column - 1;
              a2.line === u3 && a2.column === h3 || (a2.line = u3, a2.column = h3, i3.line = n4, i3.column = r4, o2 && (o2 = false, i3.line === s2.line && i3.column === s2.column || t3.addMapping(l2)), o2 = true, t3.addMapping({ source: e5.loc.source, original: a2, generated: i3 }));
            }
            c2.call(this, e5), o2 && pr2.hasOwnProperty(e5.type) && (s2.line = n4, s2.column = r4);
          };
          var u2 = e4.chunk;
          e4.chunk = function(e5) {
            for (var t4 = 0; t4 < e5.length; t4++) 10 === e5.charCodeAt(t4) ? (n4++, r4 = 0) : r4++;
            u2(e5);
          };
          var h2 = e4.result;
          return e4.result = function() {
            return o2 && t3.addMapping(l2), { css: h2(), map: t3 };
          }, e4;
        })(i2))), i2.node(e3), i2.result();
      };
    }, fr = Object.prototype.hasOwnProperty, br = function() {
    };
    function yr(e2) {
      return "function" == typeof e2 ? e2 : br;
    }
    function kr(e2, t2) {
      return function(n2, r2, i2) {
        n2.type === t2 && e2.call(this, n2, r2, i2);
      };
    }
    function vr(e2, t2) {
      var n2 = t2.structure, r2 = [];
      for (var i2 in n2) if (false !== fr.call(n2, i2)) {
        var a2 = n2[i2], o2 = { name: i2, type: false, nullable: false };
        Array.isArray(n2[i2]) || (a2 = [n2[i2]]);
        for (var s2 = 0; s2 < a2.length; s2++) {
          var l2 = a2[s2];
          null === l2 ? o2.nullable = true : "string" == typeof l2 ? o2.type = "node" : Array.isArray(l2) && (o2.type = "list");
        }
        o2.type && r2.push(o2);
      }
      return r2.length ? { context: t2.walkContext, fields: r2 } : null;
    }
    function xr(e2, t2) {
      var n2 = e2.fields.slice(), r2 = e2.context, i2 = "string" == typeof r2;
      return t2 && n2.reverse(), function(e3, a2, o2, s2) {
        var l2;
        i2 && (l2 = a2[r2], a2[r2] = e3);
        for (var c2 = 0; c2 < n2.length; c2++) {
          var u2 = n2[c2], h2 = e3[u2.name];
          if (!u2.nullable || h2) {
            if ("list" === u2.type) {
              if (t2 ? h2.reduceRight(s2, false) : h2.reduce(s2, false)) return true;
            } else if (o2(h2)) return true;
          }
        }
        i2 && (a2[r2] = l2);
      };
    }
    function wr2(e2) {
      return { Atrule: { StyleSheet: e2.StyleSheet, Atrule: e2.Atrule, Rule: e2.Rule, Block: e2.Block }, Rule: { StyleSheet: e2.StyleSheet, Atrule: e2.Atrule, Rule: e2.Rule, Block: e2.Block }, Declaration: { StyleSheet: e2.StyleSheet, Atrule: e2.Atrule, Rule: e2.Rule, Block: e2.Block, DeclarationList: e2.DeclarationList } };
    }
    var Sr = function(e2) {
      var t2 = (function(e3) {
        var t3 = {};
        for (var n3 in e3.node) if (fr.call(e3.node, n3)) {
          var r3 = e3.node[n3];
          if (!r3.structure) throw new Error("Missed `structure` field in `" + n3 + "` node type definition");
          t3[n3] = vr(0, r3);
        }
        return t3;
      })(e2), n2 = {}, r2 = {}, i2 = Symbol("break-walk"), a2 = Symbol("skip-node");
      for (var o2 in t2) fr.call(t2, o2) && null !== t2[o2] && (n2[o2] = xr(t2[o2], false), r2[o2] = xr(t2[o2], true));
      var s2 = wr2(n2), l2 = wr2(r2), c2 = function(e3, o3) {
        function c3(e4, t3, n3) {
          var r3 = h2.call(m2, e4, t3, n3);
          return r3 === i2 || r3 !== a2 && (!(!d2.hasOwnProperty(e4.type) || !d2[e4.type](e4, m2, c3, u2)) || p2.call(m2, e4, t3, n3) === i2);
        }
        var u2 = (e4, t3, n3, r3) => e4 || c3(t3, n3, r3), h2 = br, p2 = br, d2 = n2, m2 = { break: i2, skip: a2, root: e3, stylesheet: null, atrule: null, atrulePrelude: null, rule: null, selector: null, block: null, declaration: null, function: null };
        if ("function" == typeof o3) h2 = o3;
        else if (o3 && (h2 = yr(o3.enter), p2 = yr(o3.leave), o3.reverse && (d2 = r2), o3.visit)) {
          if (s2.hasOwnProperty(o3.visit)) d2 = o3.reverse ? l2[o3.visit] : s2[o3.visit];
          else if (!t2.hasOwnProperty(o3.visit)) throw new Error("Bad value `" + o3.visit + "` for `visit` option (should be: " + Object.keys(t2).join(", ") + ")");
          h2 = kr(h2, o3.visit), p2 = kr(p2, o3.visit);
        }
        if (h2 === br && p2 === br) throw new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        c3(e3);
      };
      return c2.break = i2, c2.skip = a2, c2.find = function(e3, t3) {
        var n3 = null;
        return c2(e3, (function(e4, r3, a3) {
          if (t3.call(this, e4, r3, a3)) return n3 = e4, i2;
        })), n3;
      }, c2.findLast = function(e3, t3) {
        var n3 = null;
        return c2(e3, { reverse: true, enter: function(e4, r3, a3) {
          if (t3.call(this, e4, r3, a3)) return n3 = e4, i2;
        } }), n3;
      }, c2.findAll = function(e3, t3) {
        var n3 = [];
        return c2(e3, (function(e4, r3, i3) {
          t3.call(this, e4, r3, i3) && n3.push(e4);
        })), n3;
      }, c2;
    }, Cr = function e2(t2) {
      var n2 = {};
      for (var r2 in t2) {
        var i2 = t2[r2];
        i2 && (Array.isArray(i2) || i2 instanceof a ? i2 = i2.map(e2) : i2.constructor === Object && (i2 = e2(i2))), n2[r2] = i2;
      }
      return n2;
    };
    const zr = Object.prototype.hasOwnProperty, Ar = { generic: true, types: Er, atrules: { prelude: Dr, descriptors: Dr }, properties: Er, parseContext: function(e2, t2) {
      return Object.assign(e2, t2);
    }, scope: function e2(t2, n2) {
      for (const r2 in n2) zr.call(n2, r2) && (Pr2(t2[r2]) ? e2(t2[r2], Tr(n2[r2])) : t2[r2] = Tr(n2[r2]));
      return t2;
    }, atrule: ["parse"], pseudo: ["parse"], node: ["name", "structure", "parse", "generate", "walkContext"] };
    function Pr2(e2) {
      return e2 && e2.constructor === Object;
    }
    function Tr(e2) {
      return Pr2(e2) ? Object.assign({}, e2) : e2;
    }
    function Lr(e2, t2) {
      return "string" == typeof t2 && /^\s*\|/.test(t2) ? "string" == typeof e2 ? e2 + t2 : t2.replace(/^\s*\|\s*/, "") : t2 || null;
    }
    function Er(e2, t2) {
      if ("string" == typeof t2) return Lr(e2, t2);
      const n2 = Object.assign({}, e2);
      for (let r2 in t2) zr.call(t2, r2) && (n2[r2] = Lr(zr.call(e2, r2) ? e2[r2] : void 0, t2[r2]));
      return n2;
    }
    function Dr(e2, t2) {
      const n2 = Er(e2, t2);
      return !Pr2(n2) || Object.keys(n2).length ? n2 : null;
    }
    var Or2 = (e2, t2) => (function e3(t3, n2, r2) {
      for (const i2 in r2) if (false !== zr.call(r2, i2)) {
        if (true === r2[i2]) i2 in n2 && zr.call(n2, i2) && (t3[i2] = Tr(n2[i2]));
        else if (r2[i2]) {
          if ("function" == typeof r2[i2]) {
            const e4 = r2[i2];
            t3[i2] = e4({}, t3[i2]), t3[i2] = e4(t3[i2] || {}, n2[i2]);
          } else if (Pr2(r2[i2])) {
            const a2 = {};
            for (let n3 in t3[i2]) a2[n3] = e3({}, t3[i2][n3], r2[i2]);
            for (let t4 in n2[i2]) a2[t4] = e3(a2[t4] || {}, n2[i2][t4], r2[i2]);
            t3[i2] = a2;
          } else if (Array.isArray(r2[i2])) {
            const a2 = {}, o2 = r2[i2].reduce((function(e4, t4) {
              return e4[t4] = true, e4;
            }), {});
            for (const [n3, r3] of Object.entries(t3[i2] || {})) a2[n3] = {}, r3 && e3(a2[n3], r3, o2);
            for (const t4 in n2[i2]) zr.call(n2[i2], t4) && (a2[t4] || (a2[t4] = {}), n2[i2] && n2[i2][t4] && e3(a2[t4], n2[i2][t4], o2));
            t3[i2] = a2;
          }
        }
      }
      return t3;
    })(e2, t2, Ar);
    function Br(e2) {
      var t2 = $n(e2), n2 = Sr(e2), r2 = gr(e2), i2 = /* @__PURE__ */ (function(e3) {
        return { fromPlainObject: function(t3) {
          return e3(t3, { enter: function(e4) {
            e4.children && e4.children instanceof a == false && (e4.children = new a().fromArray(e4.children));
          } }), t3;
        }, toPlainObject: function(t3) {
          return e3(t3, { leave: function(e4) {
            e4.children && e4.children instanceof a && (e4.children = e4.children.toArray());
          } }), t3;
        } };
      })(n2), o2 = { List: a, SyntaxError: l, TokenStream: H, Lexer: Ln, vendorPrefix: ae.vendorPrefix, keyword: ae.keyword, property: ae.property, isCustomProperty: ae.isCustomProperty, definitionSyntax: En, lexer: null, createLexer: function(e3) {
        return new Ln(e3, o2, o2.lexer.structure);
      }, tokenize: Ce, parse: t2, walk: n2, generate: r2, find: n2.find, findLast: n2.findLast, findAll: n2.findAll, clone: Cr, fromPlainObject: i2.fromPlainObject, toPlainObject: i2.toPlainObject, createSyntax: function(e3) {
        return Br(Or2({}, e3));
      }, fork: function(t3) {
        var n3 = Or2({}, e2);
        return Br("function" == typeof t3 ? t3(n3, Object.assign) : Or2(n3, t3));
      } };
      return o2.lexer = new Ln({ generic: true, types: e2.types, atrules: e2.atrules, properties: e2.properties, node: e2.node }, o2), o2;
    }
    var Ir = function(e2) {
      return Br(Or2({}, e2));
    }, Nr = { generic: true, types: { "absolute-size": "xx-small|x-small|small|medium|large|x-large|xx-large|xxx-large", "alpha-value": "<number>|<percentage>", "angle-percentage": "<angle>|<percentage>", "angular-color-hint": "<angle-percentage>", "angular-color-stop": "<color>&&<color-stop-angle>?", "angular-color-stop-list": "[<angular-color-stop> [, <angular-color-hint>]?]# , <angular-color-stop>", "animateable-feature": "scroll-position|contents|<custom-ident>", attachment: "scroll|fixed|local", "attr()": "attr( <attr-name> <type-or-unit>? [, <attr-fallback>]? )", "attr-matcher": "['~'|'|'|'^'|'$'|'*']? '='", "attr-modifier": "i|s", "attribute-selector": "'[' <wq-name> ']'|'[' <wq-name> <attr-matcher> [<string-token>|<ident-token>] <attr-modifier>? ']'", "auto-repeat": "repeat( [auto-fill|auto-fit] , [<line-names>? <fixed-size>]+ <line-names>? )", "auto-track-list": "[<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>? <auto-repeat> [<line-names>? [<fixed-size>|<fixed-repeat>]]* <line-names>?", "baseline-position": "[first|last]? baseline", "basic-shape": "<inset()>|<circle()>|<ellipse()>|<polygon()>|<path()>", "bg-image": "none|<image>", "bg-layer": "<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>", "bg-position": "[[left|center|right|top|bottom|<length-percentage>]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]|[center|[left|right] <length-percentage>?]&&[center|[top|bottom] <length-percentage>?]]", "bg-size": "[<length-percentage>|auto]{1,2}|cover|contain", "blur()": "blur( <length> )", "blend-mode": "normal|multiply|screen|overlay|darken|lighten|color-dodge|color-burn|hard-light|soft-light|difference|exclusion|hue|saturation|color|luminosity", box: "border-box|padding-box|content-box", "brightness()": "brightness( <number-percentage> )", "calc()": "calc( <calc-sum> )", "calc-sum": "<calc-product> [['+'|'-'] <calc-product>]*", "calc-product": "<calc-value> ['*' <calc-value>|'/' <number>]*", "calc-value": "<number>|<dimension>|<percentage>|( <calc-sum> )", "cf-final-image": "<image>|<color>", "cf-mixing-image": "<percentage>?&&<image>", "circle()": "circle( [<shape-radius>]? [at <position>]? )", "clamp()": "clamp( <calc-sum>#{3} )", "class-selector": "'.' <ident-token>", "clip-source": "<url>", color: "<rgb()>|<rgba()>|<hsl()>|<hsla()>|<hex-color>|<named-color>|currentcolor|<deprecated-system-color>", "color-stop": "<color-stop-length>|<color-stop-angle>", "color-stop-angle": "<angle-percentage>{1,2}", "color-stop-length": "<length-percentage>{1,2}", "color-stop-list": "[<linear-color-stop> [, <linear-color-hint>]?]# , <linear-color-stop>", combinator: "'>'|'+'|'~'|['||']", "common-lig-values": "[common-ligatures|no-common-ligatures]", "compat-auto": "searchfield|textarea|push-button|slider-horizontal|checkbox|radio|square-button|menulist|listbox|meter|progress-bar|button", "composite-style": "clear|copy|source-over|source-in|source-out|source-atop|destination-over|destination-in|destination-out|destination-atop|xor", "compositing-operator": "add|subtract|intersect|exclude", "compound-selector": "[<type-selector>? <subclass-selector>* [<pseudo-element-selector> <pseudo-class-selector>*]*]!", "compound-selector-list": "<compound-selector>#", "complex-selector": "<compound-selector> [<combinator>? <compound-selector>]*", "complex-selector-list": "<complex-selector>#", "conic-gradient()": "conic-gradient( [from <angle>]? [at <position>]? , <angular-color-stop-list> )", "contextual-alt-values": "[contextual|no-contextual]", "content-distribution": "space-between|space-around|space-evenly|stretch", "content-list": "[<string>|contents|<image>|<quote>|<target>|<leader()>|<attr()>|counter( <ident> , <'list-style-type'>? )]+", "content-position": "center|start|end|flex-start|flex-end", "content-replacement": "<image>", "contrast()": "contrast( [<number-percentage>] )", "counter()": "counter( <custom-ident> , <counter-style>? )", "counter-style": "<counter-style-name>|symbols( )", "counter-style-name": "<custom-ident>", "counters()": "counters( <custom-ident> , <string> , <counter-style>? )", "cross-fade()": "cross-fade( <cf-mixing-image> , <cf-final-image>? )", "cubic-bezier-timing-function": "ease|ease-in|ease-out|ease-in-out|cubic-bezier( <number [0,1]> , <number> , <number [0,1]> , <number> )", "deprecated-system-color": "ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText", "discretionary-lig-values": "[discretionary-ligatures|no-discretionary-ligatures]", "display-box": "contents|none", "display-inside": "flow|flow-root|table|flex|grid|ruby", "display-internal": "table-row-group|table-header-group|table-footer-group|table-row|table-cell|table-column-group|table-column|table-caption|ruby-base|ruby-text|ruby-base-container|ruby-text-container", "display-legacy": "inline-block|inline-list-item|inline-table|inline-flex|inline-grid", "display-listitem": "<display-outside>?&&[flow|flow-root]?&&list-item", "display-outside": "block|inline|run-in", "drop-shadow()": "drop-shadow( <length>{2,3} <color>? )", "east-asian-variant-values": "[jis78|jis83|jis90|jis04|simplified|traditional]", "east-asian-width-values": "[full-width|proportional-width]", "element()": "element( <custom-ident> , [first|start|last|first-except]? )|element( <id-selector> )", "ellipse()": "ellipse( [<shape-radius>{2}]? [at <position>]? )", "ending-shape": "circle|ellipse", "env()": "env( <custom-ident> , <declaration-value>? )", "explicit-track-list": "[<line-names>? <track-size>]+ <line-names>?", "family-name": "<string>|<custom-ident>+", "feature-tag-value": "<string> [<integer>|on|off]?", "feature-type": "@stylistic|@historical-forms|@styleset|@character-variant|@swash|@ornaments|@annotation", "feature-value-block": "<feature-type> '{' <feature-value-declaration-list> '}'", "feature-value-block-list": "<feature-value-block>+", "feature-value-declaration": "<custom-ident> : <integer>+ ;", "feature-value-declaration-list": "<feature-value-declaration>", "feature-value-name": "<custom-ident>", "fill-rule": "nonzero|evenodd", "filter-function": "<blur()>|<brightness()>|<contrast()>|<drop-shadow()>|<grayscale()>|<hue-rotate()>|<invert()>|<opacity()>|<saturate()>|<sepia()>", "filter-function-list": "[<filter-function>|<url>]+", "final-bg-layer": "<'background-color'>||<bg-image>||<bg-position> [/ <bg-size>]?||<repeat-style>||<attachment>||<box>||<box>", "fit-content()": "fit-content( [<length>|<percentage>] )", "fixed-breadth": "<length-percentage>", "fixed-repeat": "repeat( [<positive-integer>] , [<line-names>? <fixed-size>]+ <line-names>? )", "fixed-size": "<fixed-breadth>|minmax( <fixed-breadth> , <track-breadth> )|minmax( <inflexible-breadth> , <fixed-breadth> )", "font-stretch-absolute": "normal|ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded|<percentage>", "font-variant-css21": "[normal|small-caps]", "font-weight-absolute": "normal|bold|<number [1,1000]>", "frequency-percentage": "<frequency>|<percentage>", "general-enclosed": "[<function-token> <any-value> )]|( <ident> <any-value> )", "generic-family": "serif|sans-serif|cursive|fantasy|monospace|-apple-system", "generic-name": "serif|sans-serif|cursive|fantasy|monospace", "geometry-box": "<shape-box>|fill-box|stroke-box|view-box", gradient: "<linear-gradient()>|<repeating-linear-gradient()>|<radial-gradient()>|<repeating-radial-gradient()>|<conic-gradient()>|<-legacy-gradient>", "grayscale()": "grayscale( <number-percentage> )", "grid-line": "auto|<custom-ident>|[<integer>&&<custom-ident>?]|[span&&[<integer>||<custom-ident>]]", "historical-lig-values": "[historical-ligatures|no-historical-ligatures]", "hsl()": "hsl( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsl( <hue> , <percentage> , <percentage> , <alpha-value>? )", "hsla()": "hsla( <hue> <percentage> <percentage> [/ <alpha-value>]? )|hsla( <hue> , <percentage> , <percentage> , <alpha-value>? )", hue: "<number>|<angle>", "hue-rotate()": "hue-rotate( <angle> )", image: "<url>|<image()>|<image-set()>|<element()>|<paint()>|<cross-fade()>|<gradient>", "image()": "image( <image-tags>? [<image-src>? , <color>?]! )", "image-set()": "image-set( <image-set-option># )", "image-set-option": "[<image>|<string>] <resolution>", "image-src": "<url>|<string>", "image-tags": "ltr|rtl", "inflexible-breadth": "<length>|<percentage>|min-content|max-content|auto", "inset()": "inset( <length-percentage>{1,4} [round <'border-radius'>]? )", "invert()": "invert( <number-percentage> )", "keyframes-name": "<custom-ident>|<string>", "keyframe-block": "<keyframe-selector># { <declaration-list> }", "keyframe-block-list": "<keyframe-block>+", "keyframe-selector": "from|to|<percentage>", "leader()": "leader( <leader-type> )", "leader-type": "dotted|solid|space|<string>", "length-percentage": "<length>|<percentage>", "line-names": "'[' <custom-ident>* ']'", "line-name-list": "[<line-names>|<name-repeat>]+", "line-style": "none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset", "line-width": "<length>|thin|medium|thick", "linear-color-hint": "<length-percentage>", "linear-color-stop": "<color> <color-stop-length>?", "linear-gradient()": "linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )", "mask-layer": "<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||<geometry-box>||[<geometry-box>|no-clip]||<compositing-operator>||<masking-mode>", "mask-position": "[<length-percentage>|left|center|right] [<length-percentage>|top|center|bottom]?", "mask-reference": "none|<image>|<mask-source>", "mask-source": "<url>", "masking-mode": "alpha|luminance|match-source", "matrix()": "matrix( <number>#{6} )", "matrix3d()": "matrix3d( <number>#{16} )", "max()": "max( <calc-sum># )", "media-and": "<media-in-parens> [and <media-in-parens>]+", "media-condition": "<media-not>|<media-and>|<media-or>|<media-in-parens>", "media-condition-without-or": "<media-not>|<media-and>|<media-in-parens>", "media-feature": "( [<mf-plain>|<mf-boolean>|<mf-range>] )", "media-in-parens": "( <media-condition> )|<media-feature>|<general-enclosed>", "media-not": "not <media-in-parens>", "media-or": "<media-in-parens> [or <media-in-parens>]+", "media-query": "<media-condition>|[not|only]? <media-type> [and <media-condition-without-or>]?", "media-query-list": "<media-query>#", "media-type": "<ident>", "mf-boolean": "<mf-name>", "mf-name": "<ident>", "mf-plain": "<mf-name> : <mf-value>", "mf-range": "<mf-name> ['<'|'>']? '='? <mf-value>|<mf-value> ['<'|'>']? '='? <mf-name>|<mf-value> '<' '='? <mf-name> '<' '='? <mf-value>|<mf-value> '>' '='? <mf-name> '>' '='? <mf-value>", "mf-value": "<number>|<dimension>|<ident>|<ratio>", "min()": "min( <calc-sum># )", "minmax()": "minmax( [<length>|<percentage>|min-content|max-content|auto] , [<length>|<percentage>|<flex>|min-content|max-content|auto] )", "named-color": "transparent|aliceblue|antiquewhite|aqua|aquamarine|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|green|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen|magenta|maroon|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|navy|oldlace|olive|olivedrab|orange|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|purple|rebeccapurple|red|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|silver|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|teal|thistle|tomato|turquoise|violet|wheat|white|whitesmoke|yellow|yellowgreen|<-non-standard-color>", "namespace-prefix": "<ident>", "ns-prefix": "[<ident-token>|'*']? '|'", "number-percentage": "<number>|<percentage>", "numeric-figure-values": "[lining-nums|oldstyle-nums]", "numeric-fraction-values": "[diagonal-fractions|stacked-fractions]", "numeric-spacing-values": "[proportional-nums|tabular-nums]", nth: "<an-plus-b>|even|odd", "opacity()": "opacity( [<number-percentage>] )", "overflow-position": "unsafe|safe", "outline-radius": "<length>|<percentage>", "page-body": "<declaration>? [; <page-body>]?|<page-margin-box> <page-body>", "page-margin-box": "<page-margin-box-type> '{' <declaration-list> '}'", "page-margin-box-type": "@top-left-corner|@top-left|@top-center|@top-right|@top-right-corner|@bottom-left-corner|@bottom-left|@bottom-center|@bottom-right|@bottom-right-corner|@left-top|@left-middle|@left-bottom|@right-top|@right-middle|@right-bottom", "page-selector-list": "[<page-selector>#]?", "page-selector": "<pseudo-page>+|<ident> <pseudo-page>*", "path()": "path( [<fill-rule> ,]? <string> )", "paint()": "paint( <ident> , <declaration-value>? )", "perspective()": "perspective( <length> )", "polygon()": "polygon( <fill-rule>? , [<length-percentage> <length-percentage>]# )", position: "[[left|center|right]||[top|center|bottom]|[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]?|[[left|right] <length-percentage>]&&[[top|bottom] <length-percentage>]]", "pseudo-class-selector": "':' <ident-token>|':' <function-token> <any-value> ')'", "pseudo-element-selector": "':' <pseudo-class-selector>", "pseudo-page": ": [left|right|first|blank]", quote: "open-quote|close-quote|no-open-quote|no-close-quote", "radial-gradient()": "radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )", "relative-selector": "<combinator>? <complex-selector>", "relative-selector-list": "<relative-selector>#", "relative-size": "larger|smaller", "repeat-style": "repeat-x|repeat-y|[repeat|space|round|no-repeat]{1,2}", "repeating-linear-gradient()": "repeating-linear-gradient( [<angle>|to <side-or-corner>]? , <color-stop-list> )", "repeating-radial-gradient()": "repeating-radial-gradient( [<ending-shape>||<size>]? [at <position>]? , <color-stop-list> )", "rgb()": "rgb( <percentage>{3} [/ <alpha-value>]? )|rgb( <number>{3} [/ <alpha-value>]? )|rgb( <percentage>#{3} , <alpha-value>? )|rgb( <number>#{3} , <alpha-value>? )", "rgba()": "rgba( <percentage>{3} [/ <alpha-value>]? )|rgba( <number>{3} [/ <alpha-value>]? )|rgba( <percentage>#{3} , <alpha-value>? )|rgba( <number>#{3} , <alpha-value>? )", "rotate()": "rotate( [<angle>|<zero>] )", "rotate3d()": "rotate3d( <number> , <number> , <number> , [<angle>|<zero>] )", "rotateX()": "rotateX( [<angle>|<zero>] )", "rotateY()": "rotateY( [<angle>|<zero>] )", "rotateZ()": "rotateZ( [<angle>|<zero>] )", "saturate()": "saturate( <number-percentage> )", "scale()": "scale( <number> , <number>? )", "scale3d()": "scale3d( <number> , <number> , <number> )", "scaleX()": "scaleX( <number> )", "scaleY()": "scaleY( <number> )", "scaleZ()": "scaleZ( <number> )", "self-position": "center|start|end|self-start|self-end|flex-start|flex-end", "shape-radius": "<length-percentage>|closest-side|farthest-side", "skew()": "skew( [<angle>|<zero>] , [<angle>|<zero>]? )", "skewX()": "skewX( [<angle>|<zero>] )", "skewY()": "skewY( [<angle>|<zero>] )", "sepia()": "sepia( <number-percentage> )", shadow: "inset?&&<length>{2,4}&&<color>?", "shadow-t": "[<length>{2,3}&&<color>?]", shape: "rect( <top> , <right> , <bottom> , <left> )|rect( <top> <right> <bottom> <left> )", "shape-box": "<box>|margin-box", "side-or-corner": "[left|right]||[top|bottom]", "single-animation": "<time>||<timing-function>||<time>||<single-animation-iteration-count>||<single-animation-direction>||<single-animation-fill-mode>||<single-animation-play-state>||[none|<keyframes-name>]", "single-animation-direction": "normal|reverse|alternate|alternate-reverse", "single-animation-fill-mode": "none|forwards|backwards|both", "single-animation-iteration-count": "infinite|<number>", "single-animation-play-state": "running|paused", "single-transition": "[none|<single-transition-property>]||<time>||<timing-function>||<time>", "single-transition-property": "all|<custom-ident>", size: "closest-side|farthest-side|closest-corner|farthest-corner|<length>|<length-percentage>{2}", "step-position": "jump-start|jump-end|jump-none|jump-both|start|end", "step-timing-function": "step-start|step-end|steps( <integer> [, <step-position>]? )", "subclass-selector": "<id-selector>|<class-selector>|<attribute-selector>|<pseudo-class-selector>", "supports-condition": "not <supports-in-parens>|<supports-in-parens> [and <supports-in-parens>]*|<supports-in-parens> [or <supports-in-parens>]*", "supports-in-parens": "( <supports-condition> )|<supports-feature>|<general-enclosed>", "supports-feature": "<supports-decl>|<supports-selector-fn>", "supports-decl": "( <declaration> )", "supports-selector-fn": "selector( <complex-selector> )", symbol: "<string>|<image>|<custom-ident>", target: "<target-counter()>|<target-counters()>|<target-text()>", "target-counter()": "target-counter( [<string>|<url>] , <custom-ident> , <counter-style>? )", "target-counters()": "target-counters( [<string>|<url>] , <custom-ident> , <string> , <counter-style>? )", "target-text()": "target-text( [<string>|<url>] , [content|before|after|first-letter]? )", "time-percentage": "<time>|<percentage>", "timing-function": "linear|<cubic-bezier-timing-function>|<step-timing-function>", "track-breadth": "<length-percentage>|<flex>|min-content|max-content|auto", "track-list": "[<line-names>? [<track-size>|<track-repeat>]]+ <line-names>?", "track-repeat": "repeat( [<positive-integer>] , [<line-names>? <track-size>]+ <line-names>? )", "track-size": "<track-breadth>|minmax( <inflexible-breadth> , <track-breadth> )|fit-content( [<length>|<percentage>] )", "transform-function": "<matrix()>|<translate()>|<translateX()>|<translateY()>|<scale()>|<scaleX()>|<scaleY()>|<rotate()>|<skew()>|<skewX()>|<skewY()>|<matrix3d()>|<translate3d()>|<translateZ()>|<scale3d()>|<scaleZ()>|<rotate3d()>|<rotateX()>|<rotateY()>|<rotateZ()>|<perspective()>", "transform-list": "<transform-function>+", "translate()": "translate( <length-percentage> , <length-percentage>? )", "translate3d()": "translate3d( <length-percentage> , <length-percentage> , <length> )", "translateX()": "translateX( <length-percentage> )", "translateY()": "translateY( <length-percentage> )", "translateZ()": "translateZ( <length> )", "type-or-unit": "string|color|url|integer|number|length|angle|time|frequency|cap|ch|em|ex|ic|lh|rlh|rem|vb|vi|vw|vh|vmin|vmax|mm|Q|cm|in|pt|pc|px|deg|grad|rad|turn|ms|s|Hz|kHz|%", "type-selector": "<wq-name>|<ns-prefix>? '*'", "var()": "var( <custom-property-name> , <declaration-value>? )", "viewport-length": "auto|<length-percentage>", "wq-name": "<ns-prefix>? <ident-token>", "-legacy-gradient": "<-webkit-gradient()>|<-legacy-linear-gradient>|<-legacy-repeating-linear-gradient>|<-legacy-radial-gradient>|<-legacy-repeating-radial-gradient>", "-legacy-linear-gradient": "-moz-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-linear-gradient( <-legacy-linear-gradient-arguments> )", "-legacy-repeating-linear-gradient": "-moz-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-webkit-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )|-o-repeating-linear-gradient( <-legacy-linear-gradient-arguments> )", "-legacy-linear-gradient-arguments": "[<angle>|<side-or-corner>]? , <color-stop-list>", "-legacy-radial-gradient": "-moz-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-radial-gradient( <-legacy-radial-gradient-arguments> )", "-legacy-repeating-radial-gradient": "-moz-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-webkit-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )|-o-repeating-radial-gradient( <-legacy-radial-gradient-arguments> )", "-legacy-radial-gradient-arguments": "[<position> ,]? [[[<-legacy-radial-gradient-shape>||<-legacy-radial-gradient-size>]|[<length>|<percentage>]{2}] ,]? <color-stop-list>", "-legacy-radial-gradient-size": "closest-side|closest-corner|farthest-side|farthest-corner|contain|cover", "-legacy-radial-gradient-shape": "circle|ellipse", "-non-standard-font": "-apple-system-body|-apple-system-headline|-apple-system-subheadline|-apple-system-caption1|-apple-system-caption2|-apple-system-footnote|-apple-system-short-body|-apple-system-short-headline|-apple-system-short-subheadline|-apple-system-short-caption1|-apple-system-short-footnote|-apple-system-tall-body", "-non-standard-color": "-moz-ButtonDefault|-moz-ButtonHoverFace|-moz-ButtonHoverText|-moz-CellHighlight|-moz-CellHighlightText|-moz-Combobox|-moz-ComboboxText|-moz-Dialog|-moz-DialogText|-moz-dragtargetzone|-moz-EvenTreeRow|-moz-Field|-moz-FieldText|-moz-html-CellHighlight|-moz-html-CellHighlightText|-moz-mac-accentdarkestshadow|-moz-mac-accentdarkshadow|-moz-mac-accentface|-moz-mac-accentlightesthighlight|-moz-mac-accentlightshadow|-moz-mac-accentregularhighlight|-moz-mac-accentregularshadow|-moz-mac-chrome-active|-moz-mac-chrome-inactive|-moz-mac-focusring|-moz-mac-menuselect|-moz-mac-menushadow|-moz-mac-menutextselect|-moz-MenuHover|-moz-MenuHoverText|-moz-MenuBarText|-moz-MenuBarHoverText|-moz-nativehyperlinktext|-moz-OddTreeRow|-moz-win-communicationstext|-moz-win-mediatext|-moz-activehyperlinktext|-moz-default-background-color|-moz-default-color|-moz-hyperlinktext|-moz-visitedhyperlinktext|-webkit-activelink|-webkit-focus-ring-color|-webkit-link|-webkit-text", "-non-standard-image-rendering": "optimize-contrast|-moz-crisp-edges|-o-crisp-edges|-webkit-optimize-contrast", "-non-standard-overflow": "-moz-scrollbars-none|-moz-scrollbars-horizontal|-moz-scrollbars-vertical|-moz-hidden-unscrollable", "-non-standard-width": "fill-available|min-intrinsic|intrinsic|-moz-available|-moz-fit-content|-moz-min-content|-moz-max-content|-webkit-min-content|-webkit-max-content", "-webkit-gradient()": "-webkit-gradient( <-webkit-gradient-type> , <-webkit-gradient-point> [, <-webkit-gradient-point>|, <-webkit-gradient-radius> , <-webkit-gradient-point>] [, <-webkit-gradient-radius>]? [, <-webkit-gradient-color-stop>]* )", "-webkit-gradient-color-stop": "from( <color> )|color-stop( [<number-zero-one>|<percentage>] , <color> )|to( <color> )", "-webkit-gradient-point": "[left|center|right|<length-percentage>] [top|center|bottom|<length-percentage>]", "-webkit-gradient-radius": "<length>|<percentage>", "-webkit-gradient-type": "linear|radial", "-webkit-mask-box-repeat": "repeat|stretch|round", "-webkit-mask-clip-style": "border|border-box|padding|padding-box|content|content-box|text", "-ms-filter-function-list": "<-ms-filter-function>+", "-ms-filter-function": "<-ms-filter-function-progid>|<-ms-filter-function-legacy>", "-ms-filter-function-progid": "'progid:' [<ident-token> '.']* [<ident-token>|<function-token> <any-value>? )]", "-ms-filter-function-legacy": "<ident-token>|<function-token> <any-value>? )", "-ms-filter": "<string>", age: "child|young|old", "attr-name": "<wq-name>", "attr-fallback": "<any-value>", "border-radius": "<length-percentage>{1,2}", bottom: "<length>|auto", "generic-voice": "[<age>? <gender> <integer>?]", gender: "male|female|neutral", left: "<length>|auto", "mask-image": "<mask-reference>#", "name-repeat": "repeat( [<positive-integer>|auto-fill] , <line-names>+ )", paint: "none|<color>|<url> [none|<color>]?|context-fill|context-stroke", "page-size": "A5|A4|A3|B5|B4|JIS-B5|JIS-B4|letter|legal|ledger", ratio: "<integer> / <integer>", right: "<length>|auto", "svg-length": "<percentage>|<length>|<number>", "svg-writing-mode": "lr-tb|rl-tb|tb-rl|lr|rl|tb", top: "<length>|auto", "track-group": "'(' [<string>* <track-minmax> <string>*]+ ')' ['[' <positive-integer> ']']?|<track-minmax>", "track-list-v0": "[<string>* <track-group> <string>*]+|none", "track-minmax": "minmax( <track-breadth> , <track-breadth> )|auto|<track-breadth>|fit-content", x: "<number>", y: "<number>", declaration: "<ident-token> : <declaration-value>? ['!' important]?", "declaration-list": "[<declaration>? ';']* <declaration>?", url: "url( <string> <url-modifier>* )|<url-token>", "url-modifier": "<ident>|<function-token> <any-value> )", "number-zero-one": "<number [0,1]>", "number-one-or-greater": "<number [1,\u221E]>", "positive-integer": "<integer [0,\u221E]>", "-non-standard-display": "-ms-inline-flexbox|-ms-grid|-ms-inline-grid|-webkit-flex|-webkit-inline-flex|-webkit-box|-webkit-inline-box|-moz-inline-stack|-moz-box|-moz-inline-box" }, properties: { "--*": "<declaration-value>", "-ms-accelerator": "false|true", "-ms-block-progression": "tb|rl|bt|lr", "-ms-content-zoom-chaining": "none|chained", "-ms-content-zooming": "none|zoom", "-ms-content-zoom-limit": "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>", "-ms-content-zoom-limit-max": "<percentage>", "-ms-content-zoom-limit-min": "<percentage>", "-ms-content-zoom-snap": "<'-ms-content-zoom-snap-type'>||<'-ms-content-zoom-snap-points'>", "-ms-content-zoom-snap-points": "snapInterval( <percentage> , <percentage> )|snapList( <percentage># )", "-ms-content-zoom-snap-type": "none|proximity|mandatory", "-ms-filter": "<string>", "-ms-flow-from": "[none|<custom-ident>]#", "-ms-flow-into": "[none|<custom-ident>]#", "-ms-grid-columns": "none|<track-list>|<auto-track-list>", "-ms-grid-rows": "none|<track-list>|<auto-track-list>", "-ms-high-contrast-adjust": "auto|none", "-ms-hyphenate-limit-chars": "auto|<integer>{1,3}", "-ms-hyphenate-limit-lines": "no-limit|<integer>", "-ms-hyphenate-limit-zone": "<percentage>|<length>", "-ms-ime-align": "auto|after", "-ms-overflow-style": "auto|none|scrollbar|-ms-autohiding-scrollbar", "-ms-scrollbar-3dlight-color": "<color>", "-ms-scrollbar-arrow-color": "<color>", "-ms-scrollbar-base-color": "<color>", "-ms-scrollbar-darkshadow-color": "<color>", "-ms-scrollbar-face-color": "<color>", "-ms-scrollbar-highlight-color": "<color>", "-ms-scrollbar-shadow-color": "<color>", "-ms-scrollbar-track-color": "<color>", "-ms-scroll-chaining": "chained|none", "-ms-scroll-limit": "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>", "-ms-scroll-limit-x-max": "auto|<length>", "-ms-scroll-limit-x-min": "<length>", "-ms-scroll-limit-y-max": "auto|<length>", "-ms-scroll-limit-y-min": "<length>", "-ms-scroll-rails": "none|railed", "-ms-scroll-snap-points-x": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )", "-ms-scroll-snap-points-y": "snapInterval( <length-percentage> , <length-percentage> )|snapList( <length-percentage># )", "-ms-scroll-snap-type": "none|proximity|mandatory", "-ms-scroll-snap-x": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>", "-ms-scroll-snap-y": "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>", "-ms-scroll-translation": "none|vertical-to-horizontal", "-ms-text-autospace": "none|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space", "-ms-touch-select": "grippers|none", "-ms-user-select": "none|element|text", "-ms-wrap-flow": "auto|both|start|end|maximum|clear", "-ms-wrap-margin": "<length>", "-ms-wrap-through": "wrap|none", "-moz-appearance": "none|button|button-arrow-down|button-arrow-next|button-arrow-previous|button-arrow-up|button-bevel|button-focus|caret|checkbox|checkbox-container|checkbox-label|checkmenuitem|dualbutton|groupbox|listbox|listitem|menuarrow|menubar|menucheckbox|menuimage|menuitem|menuitemtext|menulist|menulist-button|menulist-text|menulist-textfield|menupopup|menuradio|menuseparator|meterbar|meterchunk|progressbar|progressbar-vertical|progresschunk|progresschunk-vertical|radio|radio-container|radio-label|radiomenuitem|range|range-thumb|resizer|resizerpanel|scale-horizontal|scalethumbend|scalethumb-horizontal|scalethumbstart|scalethumbtick|scalethumb-vertical|scale-vertical|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|separator|sheet|spinner|spinner-downbutton|spinner-textfield|spinner-upbutton|splitter|statusbar|statusbarpanel|tab|tabpanel|tabpanels|tab-scroll-arrow-back|tab-scroll-arrow-forward|textfield|textfield-multiline|toolbar|toolbarbutton|toolbarbutton-dropdown|toolbargripper|toolbox|tooltip|treeheader|treeheadercell|treeheadersortarrow|treeitem|treeline|treetwisty|treetwistyopen|treeview|-moz-mac-unified-toolbar|-moz-win-borderless-glass|-moz-win-browsertabbar-toolbox|-moz-win-communicationstext|-moz-win-communications-toolbox|-moz-win-exclude-glass|-moz-win-glass|-moz-win-mediatext|-moz-win-media-toolbox|-moz-window-button-box|-moz-window-button-box-maximized|-moz-window-button-close|-moz-window-button-maximize|-moz-window-button-minimize|-moz-window-button-restore|-moz-window-frame-bottom|-moz-window-frame-left|-moz-window-frame-right|-moz-window-titlebar|-moz-window-titlebar-maximized", "-moz-binding": "<url>|none", "-moz-border-bottom-colors": "<color>+|none", "-moz-border-left-colors": "<color>+|none", "-moz-border-right-colors": "<color>+|none", "-moz-border-top-colors": "<color>+|none", "-moz-context-properties": "none|[fill|fill-opacity|stroke|stroke-opacity]#", "-moz-float-edge": "border-box|content-box|margin-box|padding-box", "-moz-force-broken-image-icon": "<integer [0,1]>", "-moz-image-region": "<shape>|auto", "-moz-orient": "inline|block|horizontal|vertical", "-moz-outline-radius": "<outline-radius>{1,4} [/ <outline-radius>{1,4}]?", "-moz-outline-radius-bottomleft": "<outline-radius>", "-moz-outline-radius-bottomright": "<outline-radius>", "-moz-outline-radius-topleft": "<outline-radius>", "-moz-outline-radius-topright": "<outline-radius>", "-moz-stack-sizing": "ignore|stretch-to-fit", "-moz-text-blink": "none|blink", "-moz-user-focus": "ignore|normal|select-after|select-before|select-menu|select-same|select-all|none", "-moz-user-input": "auto|none|enabled|disabled", "-moz-user-modify": "read-only|read-write|write-only", "-moz-window-dragging": "drag|no-drag", "-moz-window-shadow": "default|menu|tooltip|sheet|none", "-webkit-appearance": "none|button|button-bevel|caps-lock-indicator|caret|checkbox|default-button|inner-spin-button|listbox|listitem|media-controls-background|media-controls-fullscreen-background|media-current-time-display|media-enter-fullscreen-button|media-exit-fullscreen-button|media-fullscreen-button|media-mute-button|media-overlay-play-button|media-play-button|media-seek-back-button|media-seek-forward-button|media-slider|media-sliderthumb|media-time-remaining-display|media-toggle-closed-captions-button|media-volume-slider|media-volume-slider-container|media-volume-sliderthumb|menulist|menulist-button|menulist-text|menulist-textfield|meter|progress-bar|progress-bar-value|push-button|radio|scrollbarbutton-down|scrollbarbutton-left|scrollbarbutton-right|scrollbarbutton-up|scrollbargripper-horizontal|scrollbargripper-vertical|scrollbarthumb-horizontal|scrollbarthumb-vertical|scrollbartrack-horizontal|scrollbartrack-vertical|searchfield|searchfield-cancel-button|searchfield-decoration|searchfield-results-button|searchfield-results-decoration|slider-horizontal|slider-vertical|sliderthumb-horizontal|sliderthumb-vertical|square-button|textarea|textfield|-apple-pay-button", "-webkit-border-before": "<'border-width'>||<'border-style'>||<'color'>", "-webkit-border-before-color": "<'color'>", "-webkit-border-before-style": "<'border-style'>", "-webkit-border-before-width": "<'border-width'>", "-webkit-box-reflect": "[above|below|right|left]? <length>? <image>?", "-webkit-line-clamp": "none|<integer>", "-webkit-mask": "[<mask-reference>||<position> [/ <bg-size>]?||<repeat-style>||[<box>|border|padding|content|text]||[<box>|border|padding|content]]#", "-webkit-mask-attachment": "<attachment>#", "-webkit-mask-clip": "[<box>|border|padding|content|text]#", "-webkit-mask-composite": "<composite-style>#", "-webkit-mask-image": "<mask-reference>#", "-webkit-mask-origin": "[<box>|border|padding|content]#", "-webkit-mask-position": "<position>#", "-webkit-mask-position-x": "[<length-percentage>|left|center|right]#", "-webkit-mask-position-y": "[<length-percentage>|top|center|bottom]#", "-webkit-mask-repeat": "<repeat-style>#", "-webkit-mask-repeat-x": "repeat|no-repeat|space|round", "-webkit-mask-repeat-y": "repeat|no-repeat|space|round", "-webkit-mask-size": "<bg-size>#", "-webkit-overflow-scrolling": "auto|touch", "-webkit-tap-highlight-color": "<color>", "-webkit-text-fill-color": "<color>", "-webkit-text-stroke": "<length>||<color>", "-webkit-text-stroke-color": "<color>", "-webkit-text-stroke-width": "<length>", "-webkit-touch-callout": "default|none", "-webkit-user-modify": "read-only|read-write|read-write-plaintext-only", "align-content": "normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>", "align-items": "normal|stretch|<baseline-position>|[<overflow-position>? <self-position>]", "align-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? <self-position>", "align-tracks": "[normal|<baseline-position>|<content-distribution>|<overflow-position>? <content-position>]#", all: "initial|inherit|unset|revert", animation: "<single-animation>#", "animation-delay": "<time>#", "animation-direction": "<single-animation-direction>#", "animation-duration": "<time>#", "animation-fill-mode": "<single-animation-fill-mode>#", "animation-iteration-count": "<single-animation-iteration-count>#", "animation-name": "[none|<keyframes-name>]#", "animation-play-state": "<single-animation-play-state>#", "animation-timing-function": "<timing-function>#", appearance: "none|auto|textfield|menulist-button|<compat-auto>", "aspect-ratio": "auto|<ratio>", azimuth: "<angle>|[[left-side|far-left|left|center-left|center|center-right|right|far-right|right-side]||behind]|leftwards|rightwards", "backdrop-filter": "none|<filter-function-list>", "backface-visibility": "visible|hidden", background: "[<bg-layer> ,]* <final-bg-layer>", "background-attachment": "<attachment>#", "background-blend-mode": "<blend-mode>#", "background-clip": "<box>#", "background-color": "<color>", "background-image": "<bg-image>#", "background-origin": "<box>#", "background-position": "<bg-position>#", "background-position-x": "[center|[[left|right|x-start|x-end]? <length-percentage>?]!]#", "background-position-y": "[center|[[top|bottom|y-start|y-end]? <length-percentage>?]!]#", "background-repeat": "<repeat-style>#", "background-size": "<bg-size>#", "block-overflow": "clip|ellipsis|<string>", "block-size": "<'width'>", border: "<line-width>||<line-style>||<color>", "border-block": "<'border-top-width'>||<'border-top-style'>||<'color'>", "border-block-color": "<'border-top-color'>{1,2}", "border-block-style": "<'border-top-style'>", "border-block-width": "<'border-top-width'>", "border-block-end": "<'border-top-width'>||<'border-top-style'>||<'color'>", "border-block-end-color": "<'border-top-color'>", "border-block-end-style": "<'border-top-style'>", "border-block-end-width": "<'border-top-width'>", "border-block-start": "<'border-top-width'>||<'border-top-style'>||<'color'>", "border-block-start-color": "<'border-top-color'>", "border-block-start-style": "<'border-top-style'>", "border-block-start-width": "<'border-top-width'>", "border-bottom": "<line-width>||<line-style>||<color>", "border-bottom-color": "<'border-top-color'>", "border-bottom-left-radius": "<length-percentage>{1,2}", "border-bottom-right-radius": "<length-percentage>{1,2}", "border-bottom-style": "<line-style>", "border-bottom-width": "<line-width>", "border-collapse": "collapse|separate", "border-color": "<color>{1,4}", "border-end-end-radius": "<length-percentage>{1,2}", "border-end-start-radius": "<length-percentage>{1,2}", "border-image": "<'border-image-source'>||<'border-image-slice'> [/ <'border-image-width'>|/ <'border-image-width'>? / <'border-image-outset'>]?||<'border-image-repeat'>", "border-image-outset": "[<length>|<number>]{1,4}", "border-image-repeat": "[stretch|repeat|round|space]{1,2}", "border-image-slice": "<number-percentage>{1,4}&&fill?", "border-image-source": "none|<image>", "border-image-width": "[<length-percentage>|<number>|auto]{1,4}", "border-inline": "<'border-top-width'>||<'border-top-style'>||<'color'>", "border-inline-end": "<'border-top-width'>||<'border-top-style'>||<'color'>", "border-inline-color": "<'border-top-color'>{1,2}", "border-inline-style": "<'border-top-style'>", "border-inline-width": "<'border-top-width'>", "border-inline-end-color": "<'border-top-color'>", "border-inline-end-style": "<'border-top-style'>", "border-inline-end-width": "<'border-top-width'>", "border-inline-start": "<'border-top-width'>||<'border-top-style'>||<'color'>", "border-inline-start-color": "<'border-top-color'>", "border-inline-start-style": "<'border-top-style'>", "border-inline-start-width": "<'border-top-width'>", "border-left": "<line-width>||<line-style>||<color>", "border-left-color": "<color>", "border-left-style": "<line-style>", "border-left-width": "<line-width>", "border-radius": "<length-percentage>{1,4} [/ <length-percentage>{1,4}]?", "border-right": "<line-width>||<line-style>||<color>", "border-right-color": "<color>", "border-right-style": "<line-style>", "border-right-width": "<line-width>", "border-spacing": "<length> <length>?", "border-start-end-radius": "<length-percentage>{1,2}", "border-start-start-radius": "<length-percentage>{1,2}", "border-style": "<line-style>{1,4}", "border-top": "<line-width>||<line-style>||<color>", "border-top-color": "<color>", "border-top-left-radius": "<length-percentage>{1,2}", "border-top-right-radius": "<length-percentage>{1,2}", "border-top-style": "<line-style>", "border-top-width": "<line-width>", "border-width": "<line-width>{1,4}", bottom: "<length>|<percentage>|auto", "box-align": "start|center|end|baseline|stretch", "box-decoration-break": "slice|clone", "box-direction": "normal|reverse|inherit", "box-flex": "<number>", "box-flex-group": "<integer>", "box-lines": "single|multiple", "box-ordinal-group": "<integer>", "box-orient": "horizontal|vertical|inline-axis|block-axis|inherit", "box-pack": "start|center|end|justify", "box-shadow": "none|<shadow>#", "box-sizing": "content-box|border-box", "break-after": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region", "break-before": "auto|avoid|always|all|avoid-page|page|left|right|recto|verso|avoid-column|column|avoid-region|region", "break-inside": "auto|avoid|avoid-page|avoid-column|avoid-region", "caption-side": "top|bottom|block-start|block-end|inline-start|inline-end", "caret-color": "auto|<color>", clear: "none|left|right|both|inline-start|inline-end", clip: "<shape>|auto", "clip-path": "<clip-source>|[<basic-shape>||<geometry-box>]|none", color: "<color>", "color-adjust": "economy|exact", "column-count": "<integer>|auto", "column-fill": "auto|balance|balance-all", "column-gap": "normal|<length-percentage>", "column-rule": "<'column-rule-width'>||<'column-rule-style'>||<'column-rule-color'>", "column-rule-color": "<color>", "column-rule-style": "<'border-style'>", "column-rule-width": "<'border-width'>", "column-span": "none|all", "column-width": "<length>|auto", columns: "<'column-width'>||<'column-count'>", contain: "none|strict|content|[size||layout||style||paint]", content: "normal|none|[<content-replacement>|<content-list>] [/ <string>]?", "counter-increment": "[<custom-ident> <integer>?]+|none", "counter-reset": "[<custom-ident> <integer>?]+|none", "counter-set": "[<custom-ident> <integer>?]+|none", cursor: "[[<url> [<x> <y>]? ,]* [auto|default|none|context-menu|help|pointer|progress|wait|cell|crosshair|text|vertical-text|alias|copy|move|no-drop|not-allowed|e-resize|n-resize|ne-resize|nw-resize|s-resize|se-resize|sw-resize|w-resize|ew-resize|ns-resize|nesw-resize|nwse-resize|col-resize|row-resize|all-scroll|zoom-in|zoom-out|grab|grabbing|hand|-webkit-grab|-webkit-grabbing|-webkit-zoom-in|-webkit-zoom-out|-moz-grab|-moz-grabbing|-moz-zoom-in|-moz-zoom-out]]", direction: "ltr|rtl", display: "[<display-outside>||<display-inside>]|<display-listitem>|<display-internal>|<display-box>|<display-legacy>|<-non-standard-display>", "empty-cells": "show|hide", filter: "none|<filter-function-list>|<-ms-filter-function-list>", flex: "none|[<'flex-grow'> <'flex-shrink'>?||<'flex-basis'>]", "flex-basis": "content|<'width'>", "flex-direction": "row|row-reverse|column|column-reverse", "flex-flow": "<'flex-direction'>||<'flex-wrap'>", "flex-grow": "<number>", "flex-shrink": "<number>", "flex-wrap": "nowrap|wrap|wrap-reverse", float: "left|right|none|inline-start|inline-end", font: "[[<'font-style'>||<font-variant-css21>||<'font-weight'>||<'font-stretch'>]? <'font-size'> [/ <'line-height'>]? <'font-family'>]|caption|icon|menu|message-box|small-caption|status-bar", "font-family": "[<family-name>|<generic-family>]#", "font-feature-settings": "normal|<feature-tag-value>#", "font-kerning": "auto|normal|none", "font-language-override": "normal|<string>", "font-optical-sizing": "auto|none", "font-variation-settings": "normal|[<string> <number>]#", "font-size": "<absolute-size>|<relative-size>|<length-percentage>", "font-size-adjust": "none|<number>", "font-smooth": "auto|never|always|<absolute-size>|<length>", "font-stretch": "<font-stretch-absolute>", "font-style": "normal|italic|oblique <angle>?", "font-synthesis": "none|[weight||style]", "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]", "font-variant-alternates": "normal|[stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )]", "font-variant-caps": "normal|small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps", "font-variant-east-asian": "normal|[<east-asian-variant-values>||<east-asian-width-values>||ruby]", "font-variant-ligatures": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>]", "font-variant-numeric": "normal|[<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero]", "font-variant-position": "normal|sub|super", "font-weight": "<font-weight-absolute>|bolder|lighter", gap: "<'row-gap'> <'column-gap'>?", grid: "<'grid-template'>|<'grid-template-rows'> / [auto-flow&&dense?] <'grid-auto-columns'>?|[auto-flow&&dense?] <'grid-auto-rows'>? / <'grid-template-columns'>", "grid-area": "<grid-line> [/ <grid-line>]{0,3}", "grid-auto-columns": "<track-size>+", "grid-auto-flow": "[row|column]||dense", "grid-auto-rows": "<track-size>+", "grid-column": "<grid-line> [/ <grid-line>]?", "grid-column-end": "<grid-line>", "grid-column-gap": "<length-percentage>", "grid-column-start": "<grid-line>", "grid-gap": "<'grid-row-gap'> <'grid-column-gap'>?", "grid-row": "<grid-line> [/ <grid-line>]?", "grid-row-end": "<grid-line>", "grid-row-gap": "<length-percentage>", "grid-row-start": "<grid-line>", "grid-template": "none|[<'grid-template-rows'> / <'grid-template-columns'>]|[<line-names>? <string> <track-size>? <line-names>?]+ [/ <explicit-track-list>]?", "grid-template-areas": "none|<string>+", "grid-template-columns": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?", "grid-template-rows": "none|<track-list>|<auto-track-list>|subgrid <line-name-list>?", "hanging-punctuation": "none|[first||[force-end|allow-end]||last]", height: "auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )", hyphens: "none|manual|auto", "image-orientation": "from-image|<angle>|[<angle>? flip]", "image-rendering": "auto|crisp-edges|pixelated|optimizeSpeed|optimizeQuality|<-non-standard-image-rendering>", "image-resolution": "[from-image||<resolution>]&&snap?", "ime-mode": "auto|normal|active|inactive|disabled", "initial-letter": "normal|[<number> <integer>?]", "initial-letter-align": "[auto|alphabetic|hanging|ideographic]", "inline-size": "<'width'>", inset: "<'top'>{1,4}", "inset-block": "<'top'>{1,2}", "inset-block-end": "<'top'>", "inset-block-start": "<'top'>", "inset-inline": "<'top'>{1,2}", "inset-inline-end": "<'top'>", "inset-inline-start": "<'top'>", isolation: "auto|isolate", "justify-content": "normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]", "justify-items": "normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]|legacy|legacy&&[left|right|center]", "justify-self": "auto|normal|stretch|<baseline-position>|<overflow-position>? [<self-position>|left|right]", "justify-tracks": "[normal|<content-distribution>|<overflow-position>? [<content-position>|left|right]]#", left: "<length>|<percentage>|auto", "letter-spacing": "normal|<length-percentage>", "line-break": "auto|loose|normal|strict|anywhere", "line-clamp": "none|<integer>", "line-height": "normal|<number>|<length>|<percentage>", "line-height-step": "<length>", "list-style": "<'list-style-type'>||<'list-style-position'>||<'list-style-image'>", "list-style-image": "<url>|none", "list-style-position": "inside|outside", "list-style-type": "<counter-style>|<string>|none", margin: "[<length>|<percentage>|auto]{1,4}", "margin-block": "<'margin-left'>{1,2}", "margin-block-end": "<'margin-left'>", "margin-block-start": "<'margin-left'>", "margin-bottom": "<length>|<percentage>|auto", "margin-inline": "<'margin-left'>{1,2}", "margin-inline-end": "<'margin-left'>", "margin-inline-start": "<'margin-left'>", "margin-left": "<length>|<percentage>|auto", "margin-right": "<length>|<percentage>|auto", "margin-top": "<length>|<percentage>|auto", "margin-trim": "none|in-flow|all", mask: "<mask-layer>#", "mask-border": "<'mask-border-source'>||<'mask-border-slice'> [/ <'mask-border-width'>? [/ <'mask-border-outset'>]?]?||<'mask-border-repeat'>||<'mask-border-mode'>", "mask-border-mode": "luminance|alpha", "mask-border-outset": "[<length>|<number>]{1,4}", "mask-border-repeat": "[stretch|repeat|round|space]{1,2}", "mask-border-slice": "<number-percentage>{1,4} fill?", "mask-border-source": "none|<image>", "mask-border-width": "[<length-percentage>|<number>|auto]{1,4}", "mask-clip": "[<geometry-box>|no-clip]#", "mask-composite": "<compositing-operator>#", "mask-image": "<mask-reference>#", "mask-mode": "<masking-mode>#", "mask-origin": "<geometry-box>#", "mask-position": "<position>#", "mask-repeat": "<repeat-style>#", "mask-size": "<bg-size>#", "mask-type": "luminance|alpha", "masonry-auto-flow": "[pack|next]||[definite-first|ordered]", "math-style": "normal|compact", "max-block-size": "<'max-width'>", "max-height": "none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )", "max-inline-size": "<'max-width'>", "max-lines": "none|<integer>", "max-width": "none|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>", "min-block-size": "<'min-width'>", "min-height": "auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )", "min-inline-size": "<'min-width'>", "min-width": "auto|<length-percentage>|min-content|max-content|fit-content( <length-percentage> )|<-non-standard-width>", "mix-blend-mode": "<blend-mode>", "object-fit": "fill|contain|cover|none|scale-down", "object-position": "<position>", offset: "[<'offset-position'>? [<'offset-path'> [<'offset-distance'>||<'offset-rotate'>]?]?]! [/ <'offset-anchor'>]?", "offset-anchor": "auto|<position>", "offset-distance": "<length-percentage>", "offset-path": "none|ray( [<angle>&&<size>&&contain?] )|<path()>|<url>|[<basic-shape>||<geometry-box>]", "offset-position": "auto|<position>", "offset-rotate": "[auto|reverse]||<angle>", opacity: "<alpha-value>", order: "<integer>", orphans: "<integer>", outline: "[<'outline-color'>||<'outline-style'>||<'outline-width'>]", "outline-color": "<color>|invert", "outline-offset": "<length>", "outline-style": "auto|<'border-style'>", "outline-width": "<line-width>", overflow: "[visible|hidden|clip|scroll|auto]{1,2}|<-non-standard-overflow>", "overflow-anchor": "auto|none", "overflow-block": "visible|hidden|clip|scroll|auto", "overflow-clip-box": "padding-box|content-box", "overflow-inline": "visible|hidden|clip|scroll|auto", "overflow-wrap": "normal|break-word|anywhere", "overflow-x": "visible|hidden|clip|scroll|auto", "overflow-y": "visible|hidden|clip|scroll|auto", "overscroll-behavior": "[contain|none|auto]{1,2}", "overscroll-behavior-block": "contain|none|auto", "overscroll-behavior-inline": "contain|none|auto", "overscroll-behavior-x": "contain|none|auto", "overscroll-behavior-y": "contain|none|auto", padding: "[<length>|<percentage>]{1,4}", "padding-block": "<'padding-left'>{1,2}", "padding-block-end": "<'padding-left'>", "padding-block-start": "<'padding-left'>", "padding-bottom": "<length>|<percentage>", "padding-inline": "<'padding-left'>{1,2}", "padding-inline-end": "<'padding-left'>", "padding-inline-start": "<'padding-left'>", "padding-left": "<length>|<percentage>", "padding-right": "<length>|<percentage>", "padding-top": "<length>|<percentage>", "page-break-after": "auto|always|avoid|left|right|recto|verso", "page-break-before": "auto|always|avoid|left|right|recto|verso", "page-break-inside": "auto|avoid", "paint-order": "normal|[fill||stroke||markers]", perspective: "none|<length>", "perspective-origin": "<position>", "place-content": "<'align-content'> <'justify-content'>?", "place-items": "<'align-items'> <'justify-items'>?", "place-self": "<'align-self'> <'justify-self'>?", "pointer-events": "auto|none|visiblePainted|visibleFill|visibleStroke|visible|painted|fill|stroke|all|inherit", position: "static|relative|absolute|sticky|fixed|-webkit-sticky", quotes: "none|auto|[<string> <string>]+", resize: "none|both|horizontal|vertical|block|inline", right: "<length>|<percentage>|auto", rotate: "none|<angle>|[x|y|z|<number>{3}]&&<angle>", "row-gap": "normal|<length-percentage>", "ruby-align": "start|center|space-between|space-around", "ruby-merge": "separate|collapse|auto", "ruby-position": "over|under|inter-character", scale: "none|<number>{1,3}", "scrollbar-color": "auto|dark|light|<color>{2}", "scrollbar-gutter": "auto|[stable|always]&&both?&&force?", "scrollbar-width": "auto|thin|none", "scroll-behavior": "auto|smooth", "scroll-margin": "<length>{1,4}", "scroll-margin-block": "<length>{1,2}", "scroll-margin-block-start": "<length>", "scroll-margin-block-end": "<length>", "scroll-margin-bottom": "<length>", "scroll-margin-inline": "<length>{1,2}", "scroll-margin-inline-start": "<length>", "scroll-margin-inline-end": "<length>", "scroll-margin-left": "<length>", "scroll-margin-right": "<length>", "scroll-margin-top": "<length>", "scroll-padding": "[auto|<length-percentage>]{1,4}", "scroll-padding-block": "[auto|<length-percentage>]{1,2}", "scroll-padding-block-start": "auto|<length-percentage>", "scroll-padding-block-end": "auto|<length-percentage>", "scroll-padding-bottom": "auto|<length-percentage>", "scroll-padding-inline": "[auto|<length-percentage>]{1,2}", "scroll-padding-inline-start": "auto|<length-percentage>", "scroll-padding-inline-end": "auto|<length-percentage>", "scroll-padding-left": "auto|<length-percentage>", "scroll-padding-right": "auto|<length-percentage>", "scroll-padding-top": "auto|<length-percentage>", "scroll-snap-align": "[none|start|end|center]{1,2}", "scroll-snap-coordinate": "none|<position>#", "scroll-snap-destination": "<position>", "scroll-snap-points-x": "none|repeat( <length-percentage> )", "scroll-snap-points-y": "none|repeat( <length-percentage> )", "scroll-snap-stop": "normal|always", "scroll-snap-type": "none|[x|y|block|inline|both] [mandatory|proximity]?", "scroll-snap-type-x": "none|mandatory|proximity", "scroll-snap-type-y": "none|mandatory|proximity", "shape-image-threshold": "<alpha-value>", "shape-margin": "<length-percentage>", "shape-outside": "none|<shape-box>||<basic-shape>|<image>", "tab-size": "<integer>|<length>", "table-layout": "auto|fixed", "text-align": "start|end|left|right|center|justify|match-parent", "text-align-last": "auto|start|end|left|right|center|justify", "text-combine-upright": "none|all|[digits <integer>?]", "text-decoration": "<'text-decoration-line'>||<'text-decoration-style'>||<'text-decoration-color'>||<'text-decoration-thickness'>", "text-decoration-color": "<color>", "text-decoration-line": "none|[underline||overline||line-through||blink]|spelling-error|grammar-error", "text-decoration-skip": "none|[objects||[spaces|[leading-spaces||trailing-spaces]]||edges||box-decoration]", "text-decoration-skip-ink": "auto|all|none", "text-decoration-style": "solid|double|dotted|dashed|wavy", "text-decoration-thickness": "auto|from-font|<length>|<percentage>", "text-emphasis": "<'text-emphasis-style'>||<'text-emphasis-color'>", "text-emphasis-color": "<color>", "text-emphasis-position": "[over|under]&&[right|left]", "text-emphasis-style": "none|[[filled|open]||[dot|circle|double-circle|triangle|sesame]]|<string>", "text-indent": "<length-percentage>&&hanging?&&each-line?", "text-justify": "auto|inter-character|inter-word|none", "text-orientation": "mixed|upright|sideways", "text-overflow": "[clip|ellipsis|<string>]{1,2}", "text-rendering": "auto|optimizeSpeed|optimizeLegibility|geometricPrecision", "text-shadow": "none|<shadow-t>#", "text-size-adjust": "none|auto|<percentage>", "text-transform": "none|capitalize|uppercase|lowercase|full-width|full-size-kana", "text-underline-offset": "auto|<length>|<percentage>", "text-underline-position": "auto|from-font|[under||[left|right]]", top: "<length>|<percentage>|auto", "touch-action": "auto|none|[[pan-x|pan-left|pan-right]||[pan-y|pan-up|pan-down]||pinch-zoom]|manipulation", transform: "none|<transform-list>", "transform-box": "content-box|border-box|fill-box|stroke-box|view-box", "transform-origin": "[<length-percentage>|left|center|right|top|bottom]|[[<length-percentage>|left|center|right]&&[<length-percentage>|top|center|bottom]] <length>?", "transform-style": "flat|preserve-3d", transition: "<single-transition>#", "transition-delay": "<time>#", "transition-duration": "<time>#", "transition-property": "none|<single-transition-property>#", "transition-timing-function": "<timing-function>#", translate: "none|<length-percentage> [<length-percentage> <length>?]?", "unicode-bidi": "normal|embed|isolate|bidi-override|isolate-override|plaintext|-moz-isolate|-moz-isolate-override|-moz-plaintext|-webkit-isolate|-webkit-isolate-override|-webkit-plaintext", "user-select": "auto|text|none|contain|all", "vertical-align": "baseline|sub|super|text-top|text-bottom|middle|top|bottom|<percentage>|<length>", visibility: "visible|hidden|collapse", "white-space": "normal|pre|nowrap|pre-wrap|pre-line|break-spaces", widows: "<integer>", width: "auto|<length>|<percentage>|min-content|max-content|fit-content( <length-percentage> )|fit-content|-moz-fit-content|-webkit-fit-content", "will-change": "auto|<animateable-feature>#", "word-break": "normal|break-all|keep-all|break-word", "word-spacing": "normal|<length-percentage>", "word-wrap": "normal|break-word", "writing-mode": "horizontal-tb|vertical-rl|vertical-lr|sideways-rl|sideways-lr|<svg-writing-mode>", "z-index": "auto|<integer>", zoom: "normal|reset|<number>|<percentage>", "-moz-background-clip": "padding|border", "-moz-border-radius-bottomleft": "<'border-bottom-left-radius'>", "-moz-border-radius-bottomright": "<'border-bottom-right-radius'>", "-moz-border-radius-topleft": "<'border-top-left-radius'>", "-moz-border-radius-topright": "<'border-bottom-right-radius'>", "-moz-control-character-visibility": "visible|hidden", "-moz-osx-font-smoothing": "auto|grayscale", "-moz-user-select": "none|text|all|-moz-none", "-ms-flex-align": "start|end|center|baseline|stretch", "-ms-flex-item-align": "auto|start|end|center|baseline|stretch", "-ms-flex-line-pack": "start|end|center|justify|distribute|stretch", "-ms-flex-negative": "<'flex-shrink'>", "-ms-flex-pack": "start|end|center|justify|distribute", "-ms-flex-order": "<integer>", "-ms-flex-positive": "<'flex-grow'>", "-ms-flex-preferred-size": "<'flex-basis'>", "-ms-interpolation-mode": "nearest-neighbor|bicubic", "-ms-grid-column-align": "start|end|center|stretch", "-ms-grid-row-align": "start|end|center|stretch", "-ms-hyphenate-limit-last": "none|always|column|page|spread", "-webkit-background-clip": "[<box>|border|padding|content|text]#", "-webkit-column-break-after": "always|auto|avoid", "-webkit-column-break-before": "always|auto|avoid", "-webkit-column-break-inside": "always|auto|avoid", "-webkit-font-smoothing": "auto|none|antialiased|subpixel-antialiased", "-webkit-mask-box-image": "[<url>|<gradient>|none] [<length-percentage>{4} <-webkit-mask-box-repeat>{2}]?", "-webkit-print-color-adjust": "economy|exact", "-webkit-text-security": "none|circle|disc|square", "-webkit-user-drag": "none|element|auto", "-webkit-user-select": "auto|none|text|all", "alignment-baseline": "auto|baseline|before-edge|text-before-edge|middle|central|after-edge|text-after-edge|ideographic|alphabetic|hanging|mathematical", "baseline-shift": "baseline|sub|super|<svg-length>", behavior: "<url>+", "clip-rule": "nonzero|evenodd", cue: "<'cue-before'> <'cue-after'>?", "cue-after": "<url> <decibel>?|none", "cue-before": "<url> <decibel>?|none", "dominant-baseline": "auto|use-script|no-change|reset-size|ideographic|alphabetic|hanging|mathematical|central|middle|text-after-edge|text-before-edge", fill: "<paint>", "fill-opacity": "<number-zero-one>", "fill-rule": "nonzero|evenodd", "glyph-orientation-horizontal": "<angle>", "glyph-orientation-vertical": "<angle>", kerning: "auto|<svg-length>", marker: "none|<url>", "marker-end": "none|<url>", "marker-mid": "none|<url>", "marker-start": "none|<url>", pause: "<'pause-before'> <'pause-after'>?", "pause-after": "<time>|none|x-weak|weak|medium|strong|x-strong", "pause-before": "<time>|none|x-weak|weak|medium|strong|x-strong", rest: "<'rest-before'> <'rest-after'>?", "rest-after": "<time>|none|x-weak|weak|medium|strong|x-strong", "rest-before": "<time>|none|x-weak|weak|medium|strong|x-strong", "shape-rendering": "auto|optimizeSpeed|crispEdges|geometricPrecision", src: "[<url> [format( <string># )]?|local( <family-name> )]#", speak: "auto|none|normal", "speak-as": "normal|spell-out||digits||[literal-punctuation|no-punctuation]", stroke: "<paint>", "stroke-dasharray": "none|[<svg-length>+]#", "stroke-dashoffset": "<svg-length>", "stroke-linecap": "butt|round|square", "stroke-linejoin": "miter|round|bevel", "stroke-miterlimit": "<number-one-or-greater>", "stroke-opacity": "<number-zero-one>", "stroke-width": "<svg-length>", "text-anchor": "start|middle|end", "unicode-range": "<urange>#", "voice-balance": "<number>|left|center|right|leftwards|rightwards", "voice-duration": "auto|<time>", "voice-family": "[[<family-name>|<generic-voice>] ,]* [<family-name>|<generic-voice>]|preserve", "voice-pitch": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]", "voice-range": "<frequency>&&absolute|[[x-low|low|medium|high|x-high]||[<frequency>|<semitones>|<percentage>]]", "voice-rate": "[normal|x-slow|slow|medium|fast|x-fast]||<percentage>", "voice-stress": "normal|strong|moderate|none|reduced", "voice-volume": "silent|[[x-soft|soft|medium|loud|x-loud]||<decibel>]" }, atrules: { charset: { prelude: "<string>", descriptors: null }, "counter-style": { prelude: "<counter-style-name>", descriptors: { "additive-symbols": "[<integer>&&<symbol>]#", fallback: "<counter-style-name>", negative: "<symbol> <symbol>?", pad: "<integer>&&<symbol>", prefix: "<symbol>", range: "[[<integer>|infinite]{2}]#|auto", "speak-as": "auto|bullets|numbers|words|spell-out|<counter-style-name>", suffix: "<symbol>", symbols: "<symbol>+", system: "cyclic|numeric|alphabetic|symbolic|additive|[fixed <integer>?]|[extends <counter-style-name>]" } }, document: { prelude: "[<url>|url-prefix( <string> )|domain( <string> )|media-document( <string> )|regexp( <string> )]#", descriptors: null }, "font-face": { prelude: null, descriptors: { "font-display": "[auto|block|swap|fallback|optional]", "font-family": "<family-name>", "font-feature-settings": "normal|<feature-tag-value>#", "font-variation-settings": "normal|[<string> <number>]#", "font-stretch": "<font-stretch-absolute>{1,2}", "font-style": "normal|italic|oblique <angle>{0,2}", "font-weight": "<font-weight-absolute>{1,2}", "font-variant": "normal|none|[<common-lig-values>||<discretionary-lig-values>||<historical-lig-values>||<contextual-alt-values>||stylistic( <feature-value-name> )||historical-forms||styleset( <feature-value-name># )||character-variant( <feature-value-name># )||swash( <feature-value-name> )||ornaments( <feature-value-name> )||annotation( <feature-value-name> )||[small-caps|all-small-caps|petite-caps|all-petite-caps|unicase|titling-caps]||<numeric-figure-values>||<numeric-spacing-values>||<numeric-fraction-values>||ordinal||slashed-zero||<east-asian-variant-values>||<east-asian-width-values>||ruby]", src: "[<url> [format( <string># )]?|local( <family-name> )]#", "unicode-range": "<urange>#" } }, "font-feature-values": { prelude: "<family-name>#", descriptors: null }, import: { prelude: "[<string>|<url>] [<media-query-list>]?", descriptors: null }, keyframes: { prelude: "<keyframes-name>", descriptors: null }, media: { prelude: "<media-query-list>", descriptors: null }, namespace: { prelude: "<namespace-prefix>? [<string>|<url>]", descriptors: null }, page: { prelude: "<page-selector-list>", descriptors: { bleed: "auto|<length>", marks: "none|[crop||cross]", size: "<length>{1,2}|auto|[<page-size>||[portrait|landscape]]" } }, property: { prelude: "<custom-property-name>", descriptors: { syntax: "<string>", inherits: "true|false", "initial-value": "<string>" } }, supports: { prelude: "<supports-condition>", descriptors: null }, viewport: { prelude: null, descriptors: { height: "<viewport-length>{1,2}", "max-height": "<viewport-length>", "max-width": "<viewport-length>", "max-zoom": "auto|<number>|<percentage>", "min-height": "<viewport-length>", "min-width": "<viewport-length>", "min-zoom": "auto|<number>|<percentage>", orientation: "auto|portrait|landscape", "user-zoom": "zoom|fixed", "viewport-fit": "auto|contain|cover", width: "<viewport-length>{1,2}", zoom: "auto|<number>|<percentage>" } } } }, Rr = Ce.cmpChar, Mr = Ce.isDigit, jr = Ce.TYPE, _r = jr.WhiteSpace, Fr = jr.Comment, Wr = jr.Ident, qr = jr.Number, Yr = jr.Dimension;
    function Ur(e2, t2) {
      var n2 = this.scanner.tokenStart + e2, r2 = this.scanner.source.charCodeAt(n2);
      for (43 !== r2 && 45 !== r2 || (t2 && this.error("Number sign is not allowed"), n2++); n2 < this.scanner.tokenEnd; n2++) Mr(this.scanner.source.charCodeAt(n2)) || this.error("Integer is expected", n2);
    }
    function Hr(e2) {
      return Ur.call(this, 0, e2);
    }
    function Vr(e2, t2) {
      if (!Rr(this.scanner.source, this.scanner.tokenStart + e2, t2)) {
        var n2 = "";
        switch (t2) {
          case 110:
            n2 = "N is expected";
            break;
          case 45:
            n2 = "HyphenMinus is expected";
        }
        this.error(n2, this.scanner.tokenStart + e2);
      }
    }
    function Kr() {
      for (var e2 = 0, t2 = 0, n2 = this.scanner.tokenType; n2 === _r || n2 === Fr; ) n2 = this.scanner.lookupType(++e2);
      if (n2 !== qr) {
        if (!this.scanner.isDelim(43, e2) && !this.scanner.isDelim(45, e2)) return null;
        t2 = this.scanner.isDelim(43, e2) ? 43 : 45;
        do {
          n2 = this.scanner.lookupType(++e2);
        } while (n2 === _r || n2 === Fr);
        n2 !== qr && (this.scanner.skip(e2), Hr.call(this, true));
      }
      return e2 > 0 && this.scanner.skip(e2), 0 === t2 && 43 !== (n2 = this.scanner.source.charCodeAt(this.scanner.tokenStart)) && 45 !== n2 && this.error("Number sign is expected"), Hr.call(this, 0 !== t2), 45 === t2 ? "-" + this.consume(qr) : this.consume(qr);
    }
    var Gr = { name: "AnPlusB", structure: { a: [String, null], b: [String, null] }, parse: function() {
      var e2 = this.scanner.tokenStart, t2 = null, n2 = null;
      if (this.scanner.tokenType === qr) Hr.call(this, false), n2 = this.consume(qr);
      else if (this.scanner.tokenType === Wr && Rr(this.scanner.source, this.scanner.tokenStart, 45)) switch (t2 = "-1", Vr.call(this, 1, 110), this.scanner.getTokenLength()) {
        case 2:
          this.scanner.next(), n2 = Kr.call(this);
          break;
        case 3:
          Vr.call(this, 2, 45), this.scanner.next(), this.scanner.skipSC(), Hr.call(this, true), n2 = "-" + this.consume(qr);
          break;
        default:
          Vr.call(this, 2, 45), Ur.call(this, 3, true), this.scanner.next(), n2 = this.scanner.substrToCursor(e2 + 2);
      }
      else if (this.scanner.tokenType === Wr || this.scanner.isDelim(43) && this.scanner.lookupType(1) === Wr) {
        var r2 = 0;
        switch (t2 = "1", this.scanner.isDelim(43) && (r2 = 1, this.scanner.next()), Vr.call(this, 0, 110), this.scanner.getTokenLength()) {
          case 1:
            this.scanner.next(), n2 = Kr.call(this);
            break;
          case 2:
            Vr.call(this, 1, 45), this.scanner.next(), this.scanner.skipSC(), Hr.call(this, true), n2 = "-" + this.consume(qr);
            break;
          default:
            Vr.call(this, 1, 45), Ur.call(this, 2, true), this.scanner.next(), n2 = this.scanner.substrToCursor(e2 + r2 + 1);
        }
      } else if (this.scanner.tokenType === Yr) {
        for (var i2 = this.scanner.source.charCodeAt(this.scanner.tokenStart), a2 = (r2 = 43 === i2 || 45 === i2, this.scanner.tokenStart + r2); a2 < this.scanner.tokenEnd && Mr(this.scanner.source.charCodeAt(a2)); a2++) ;
        a2 === this.scanner.tokenStart + r2 && this.error("Integer is expected", this.scanner.tokenStart + r2), Vr.call(this, a2 - this.scanner.tokenStart, 110), t2 = this.scanner.source.substring(e2, a2), a2 + 1 === this.scanner.tokenEnd ? (this.scanner.next(), n2 = Kr.call(this)) : (Vr.call(this, a2 - this.scanner.tokenStart + 1, 45), a2 + 2 === this.scanner.tokenEnd ? (this.scanner.next(), this.scanner.skipSC(), Hr.call(this, true), n2 = "-" + this.consume(qr)) : (Ur.call(this, a2 - this.scanner.tokenStart + 2, true), this.scanner.next(), n2 = this.scanner.substrToCursor(a2 + 1)));
      } else this.error();
      return null !== t2 && 43 === t2.charCodeAt(0) && (t2 = t2.substr(1)), null !== n2 && 43 === n2.charCodeAt(0) && (n2 = n2.substr(1)), { type: "AnPlusB", loc: this.getLocation(e2, this.scanner.tokenStart), a: t2, b: n2 };
    }, generate: function(e2) {
      var t2 = null !== e2.a && void 0 !== e2.a, n2 = null !== e2.b && void 0 !== e2.b;
      t2 ? (this.chunk("+1" === e2.a ? "+n" : "1" === e2.a ? "n" : "-1" === e2.a ? "-n" : e2.a + "n"), n2 && ("-" === (n2 = String(e2.b)).charAt(0) || "+" === n2.charAt(0) ? (this.chunk(n2.charAt(0)), this.chunk(n2.substr(1))) : (this.chunk("+"), this.chunk(n2)))) : this.chunk(String(e2.b));
    } }, Qr = Ce.TYPE, Xr = Qr.WhiteSpace, Zr = Qr.Semicolon, $r = Qr.LeftCurlyBracket, Jr = Qr.Delim;
    function ei() {
      return this.scanner.tokenIndex > 0 && this.scanner.lookupType(-1) === Xr ? this.scanner.tokenIndex > 1 ? this.scanner.getTokenStart(this.scanner.tokenIndex - 1) : this.scanner.firstCharOffset : this.scanner.tokenStart;
    }
    function ti() {
      return 0;
    }
    var ni2 = { name: "Raw", structure: { value: String }, parse: function(e2, t2, n2) {
      var r2, i2 = this.scanner.getTokenStart(e2);
      return this.scanner.skip(this.scanner.getRawLength(e2, t2 || ti)), r2 = n2 && this.scanner.tokenStart > i2 ? ei.call(this) : this.scanner.tokenStart, { type: "Raw", loc: this.getLocation(i2, r2), value: this.scanner.source.substring(i2, r2) };
    }, generate: function(e2) {
      this.chunk(e2.value);
    }, mode: { default: ti, leftCurlyBracket: function(e2) {
      return e2 === $r ? 1 : 0;
    }, leftCurlyBracketOrSemicolon: function(e2) {
      return e2 === $r || e2 === Zr ? 1 : 0;
    }, exclamationMarkOrSemicolon: function(e2, t2, n2) {
      return e2 === Jr && 33 === t2.charCodeAt(n2) || e2 === Zr ? 1 : 0;
    }, semicolonIncluded: function(e2) {
      return e2 === Zr ? 2 : 0;
    } } }, ri = Ce.TYPE, ii2 = ni2.mode, ai = ri.AtKeyword, oi = ri.Semicolon, si = ri.LeftCurlyBracket, li = ri.RightCurlyBracket;
    function ci(e2) {
      return this.Raw(e2, ii2.leftCurlyBracketOrSemicolon, true);
    }
    function ui() {
      for (var e2, t2 = 1; e2 = this.scanner.lookupType(t2); t2++) {
        if (e2 === li) return true;
        if (e2 === si || e2 === ai) return false;
      }
      return false;
    }
    var hi = { name: "Atrule", structure: { name: String, prelude: ["AtrulePrelude", "Raw", null], block: ["Block", null] }, parse: function() {
      var e2, t2, n2 = this.scanner.tokenStart, r2 = null, i2 = null;
      switch (this.eat(ai), t2 = (e2 = this.scanner.substrToCursor(n2 + 1)).toLowerCase(), this.scanner.skipSC(), false === this.scanner.eof && this.scanner.tokenType !== si && this.scanner.tokenType !== oi && (this.parseAtrulePrelude ? "AtrulePrelude" === (r2 = this.parseWithFallback(this.AtrulePrelude.bind(this, e2), ci)).type && null === r2.children.head && (r2 = null) : r2 = ci.call(this, this.scanner.tokenIndex), this.scanner.skipSC()), this.scanner.tokenType) {
        case oi:
          this.scanner.next();
          break;
        case si:
          i2 = this.atrule.hasOwnProperty(t2) && "function" == typeof this.atrule[t2].block ? this.atrule[t2].block.call(this) : this.Block(ui.call(this));
      }
      return { type: "Atrule", loc: this.getLocation(n2, this.scanner.tokenStart), name: e2, prelude: r2, block: i2 };
    }, generate: function(e2) {
      this.chunk("@"), this.chunk(e2.name), null !== e2.prelude && (this.chunk(" "), this.node(e2.prelude)), e2.block ? this.node(e2.block) : this.chunk(";");
    }, walkContext: "atrule" }, pi2 = Ce.TYPE, di = pi2.Semicolon, mi = pi2.LeftCurlyBracket, gi = { name: "AtrulePrelude", structure: { children: [[]] }, parse: function(e2) {
      var t2 = null;
      return null !== e2 && (e2 = e2.toLowerCase()), this.scanner.skipSC(), t2 = this.atrule.hasOwnProperty(e2) && "function" == typeof this.atrule[e2].prelude ? this.atrule[e2].prelude.call(this) : this.readSequence(this.scope.AtrulePrelude), this.scanner.skipSC(), true !== this.scanner.eof && this.scanner.tokenType !== mi && this.scanner.tokenType !== di && this.error("Semicolon or block is expected"), null === t2 && (t2 = this.createList()), { type: "AtrulePrelude", loc: this.getLocationFromList(t2), children: t2 };
    }, generate: function(e2) {
      this.children(e2);
    }, walkContext: "atrulePrelude" }, fi = Ce.TYPE, bi = fi.Ident, yi = fi.String, ki = fi.Colon, vi = fi.LeftSquareBracket, xi2 = fi.RightSquareBracket;
    function wi() {
      this.scanner.eof && this.error("Unexpected end of input");
      var e2 = this.scanner.tokenStart, t2 = false, n2 = true;
      return this.scanner.isDelim(42) ? (t2 = true, n2 = false, this.scanner.next()) : this.scanner.isDelim(124) || this.eat(bi), this.scanner.isDelim(124) ? 61 !== this.scanner.source.charCodeAt(this.scanner.tokenStart + 1) ? (this.scanner.next(), this.eat(bi)) : t2 && this.error("Identifier is expected", this.scanner.tokenEnd) : t2 && this.error("Vertical line is expected"), n2 && this.scanner.tokenType === ki && (this.scanner.next(), this.eat(bi)), { type: "Identifier", loc: this.getLocation(e2, this.scanner.tokenStart), name: this.scanner.substrToCursor(e2) };
    }
    function Si() {
      var e2 = this.scanner.tokenStart, t2 = this.scanner.source.charCodeAt(e2);
      return 61 !== t2 && 126 !== t2 && 94 !== t2 && 36 !== t2 && 42 !== t2 && 124 !== t2 && this.error("Attribute selector (=, ~=, ^=, $=, *=, |=) is expected"), this.scanner.next(), 61 !== t2 && (this.scanner.isDelim(61) || this.error("Equal sign is expected"), this.scanner.next()), this.scanner.substrToCursor(e2);
    }
    var Ci = { name: "AttributeSelector", structure: { name: "Identifier", matcher: [String, null], value: ["String", "Identifier", null], flags: [String, null] }, parse: function() {
      var e2, t2 = this.scanner.tokenStart, n2 = null, r2 = null, i2 = null;
      return this.eat(vi), this.scanner.skipSC(), e2 = wi.call(this), this.scanner.skipSC(), this.scanner.tokenType !== xi2 && (this.scanner.tokenType !== bi && (n2 = Si.call(this), this.scanner.skipSC(), r2 = this.scanner.tokenType === yi ? this.String() : this.Identifier(), this.scanner.skipSC()), this.scanner.tokenType === bi && (i2 = this.scanner.getTokenValue(), this.scanner.next(), this.scanner.skipSC())), this.eat(xi2), { type: "AttributeSelector", loc: this.getLocation(t2, this.scanner.tokenStart), name: e2, matcher: n2, value: r2, flags: i2 };
    }, generate: function(e2) {
      var t2 = " ";
      this.chunk("["), this.node(e2.name), null !== e2.matcher && (this.chunk(e2.matcher), null !== e2.value && (this.node(e2.value), "String" === e2.value.type && (t2 = ""))), null !== e2.flags && (this.chunk(t2), this.chunk(e2.flags)), this.chunk("]");
    } }, zi = Ce.TYPE, Ai = ni2.mode, Pi2 = zi.WhiteSpace, Ti = zi.Comment, Li = zi.Semicolon, Ei = zi.AtKeyword, Di = zi.LeftCurlyBracket, Oi = zi.RightCurlyBracket;
    function Bi(e2) {
      return this.Raw(e2, null, true);
    }
    function Ii() {
      return this.parseWithFallback(this.Rule, Bi);
    }
    function Ni(e2) {
      return this.Raw(e2, Ai.semicolonIncluded, true);
    }
    function Ri() {
      if (this.scanner.tokenType === Li) return Ni.call(this, this.scanner.tokenIndex);
      var e2 = this.parseWithFallback(this.Declaration, Ni);
      return this.scanner.tokenType === Li && this.scanner.next(), e2;
    }
    var Mi = { name: "Block", structure: { children: [["Atrule", "Rule", "Declaration"]] }, parse: function(e2) {
      var t2 = e2 ? Ri : Ii, n2 = this.scanner.tokenStart, r2 = this.createList();
      this.eat(Di);
      e: for (; !this.scanner.eof; ) switch (this.scanner.tokenType) {
        case Oi:
          break e;
        case Pi2:
        case Ti:
          this.scanner.next();
          break;
        case Ei:
          r2.push(this.parseWithFallback(this.Atrule, Bi));
          break;
        default:
          r2.push(t2.call(this));
      }
      return this.scanner.eof || this.eat(Oi), { type: "Block", loc: this.getLocation(n2, this.scanner.tokenStart), children: r2 };
    }, generate: function(e2) {
      this.chunk("{"), this.children(e2, (function(e3) {
        "Declaration" === e3.type && this.chunk(";");
      })), this.chunk("}");
    }, walkContext: "block" }, ji = Ce.TYPE, _i = ji.LeftSquareBracket, Fi = ji.RightSquareBracket, Wi = { name: "Brackets", structure: { children: [[]] }, parse: function(e2, t2) {
      var n2, r2 = this.scanner.tokenStart;
      return this.eat(_i), n2 = e2.call(this, t2), this.scanner.eof || this.eat(Fi), { type: "Brackets", loc: this.getLocation(r2, this.scanner.tokenStart), children: n2 };
    }, generate: function(e2) {
      this.chunk("["), this.children(e2), this.chunk("]");
    } }, qi = Ce.TYPE.CDC, Yi = { name: "CDC", structure: [], parse: function() {
      var e2 = this.scanner.tokenStart;
      return this.eat(qi), { type: "CDC", loc: this.getLocation(e2, this.scanner.tokenStart) };
    }, generate: function() {
      this.chunk("-->");
    } }, Ui = Ce.TYPE.CDO, Hi = { name: "CDO", structure: [], parse: function() {
      var e2 = this.scanner.tokenStart;
      return this.eat(Ui), { type: "CDO", loc: this.getLocation(e2, this.scanner.tokenStart) };
    }, generate: function() {
      this.chunk("<!--");
    } }, Vi = Ce.TYPE.Ident, Ki = { name: "ClassSelector", structure: { name: String }, parse: function() {
      return this.scanner.isDelim(46) || this.error("Full stop is expected"), this.scanner.next(), { type: "ClassSelector", loc: this.getLocation(this.scanner.tokenStart - 1, this.scanner.tokenEnd), name: this.consume(Vi) };
    }, generate: function(e2) {
      this.chunk("."), this.chunk(e2.name);
    } }, Gi = Ce.TYPE.Ident, Qi = { name: "Combinator", structure: { name: String }, parse: function() {
      var e2 = this.scanner.tokenStart;
      switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
        case 62:
        case 43:
        case 126:
          this.scanner.next();
          break;
        case 47:
          this.scanner.next(), this.scanner.tokenType === Gi && false !== this.scanner.lookupValue(0, "deep") || this.error("Identifier `deep` is expected"), this.scanner.next(), this.scanner.isDelim(47) || this.error("Solidus is expected"), this.scanner.next();
          break;
        default:
          this.error("Combinator is expected");
      }
      return { type: "Combinator", loc: this.getLocation(e2, this.scanner.tokenStart), name: this.scanner.substrToCursor(e2) };
    }, generate: function(e2) {
      this.chunk(e2.name);
    } }, Xi2 = Ce.TYPE.Comment, Zi = { name: "Comment", structure: { value: String }, parse: function() {
      var e2 = this.scanner.tokenStart, t2 = this.scanner.tokenEnd;
      return this.eat(Xi2), t2 - e2 + 2 >= 2 && 42 === this.scanner.source.charCodeAt(t2 - 2) && 47 === this.scanner.source.charCodeAt(t2 - 1) && (t2 -= 2), { type: "Comment", loc: this.getLocation(e2, this.scanner.tokenStart), value: this.scanner.source.substring(e2 + 2, t2) };
    }, generate: function(e2) {
      this.chunk("/*"), this.chunk(e2.value), this.chunk("*/");
    } }, $i = ae.isCustomProperty, Ji = Ce.TYPE, ea = ni2.mode, ta = Ji.Ident, na = Ji.Hash, ra = Ji.Colon, ia = Ji.Semicolon, aa = Ji.Delim, oa = Ji.WhiteSpace;
    function sa(e2) {
      return this.Raw(e2, ea.exclamationMarkOrSemicolon, true);
    }
    function la(e2) {
      return this.Raw(e2, ea.exclamationMarkOrSemicolon, false);
    }
    function ca() {
      var e2 = this.scanner.tokenIndex, t2 = this.Value();
      return "Raw" !== t2.type && false === this.scanner.eof && this.scanner.tokenType !== ia && false === this.scanner.isDelim(33) && false === this.scanner.isBalanceEdge(e2) && this.error(), t2;
    }
    var ua = { name: "Declaration", structure: { important: [Boolean, String], property: String, value: ["Value", "Raw"] }, parse: function() {
      var e2, t2 = this.scanner.tokenStart, n2 = this.scanner.tokenIndex, r2 = ha.call(this), i2 = $i(r2), a2 = i2 ? this.parseCustomProperty : this.parseValue, o2 = i2 ? la : sa, s2 = false;
      this.scanner.skipSC(), this.eat(ra);
      const l2 = this.scanner.tokenIndex;
      if (i2 || this.scanner.skipSC(), e2 = a2 ? this.parseWithFallback(ca, o2) : o2.call(this, this.scanner.tokenIndex), i2 && "Value" === e2.type && e2.children.isEmpty()) {
        for (let t3 = l2 - this.scanner.tokenIndex; t3 <= 0; t3++) if (this.scanner.lookupType(t3) === oa) {
          e2.children.appendData({ type: "WhiteSpace", loc: null, value: " " });
          break;
        }
      }
      return this.scanner.isDelim(33) && (s2 = pa.call(this), this.scanner.skipSC()), false === this.scanner.eof && this.scanner.tokenType !== ia && false === this.scanner.isBalanceEdge(n2) && this.error(), { type: "Declaration", loc: this.getLocation(t2, this.scanner.tokenStart), important: s2, property: r2, value: e2 };
    }, generate: function(e2) {
      this.chunk(e2.property), this.chunk(":"), this.node(e2.value), e2.important && this.chunk(true === e2.important ? "!important" : "!" + e2.important);
    }, walkContext: "declaration" };
    function ha() {
      var e2 = this.scanner.tokenStart;
      if (this.scanner.tokenType === aa) switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
        case 42:
        case 36:
        case 43:
        case 35:
        case 38:
          this.scanner.next();
          break;
        case 47:
          this.scanner.next(), this.scanner.isDelim(47) && this.scanner.next();
      }
      return this.scanner.tokenType === na ? this.eat(na) : this.eat(ta), this.scanner.substrToCursor(e2);
    }
    function pa() {
      this.eat(aa), this.scanner.skipSC();
      var e2 = this.consume(ta);
      return "important" === e2 || e2;
    }
    var da = Ce.TYPE, ma = ni2.mode, ga = da.WhiteSpace, fa = da.Comment, ba = da.Semicolon;
    function ya(e2) {
      return this.Raw(e2, ma.semicolonIncluded, true);
    }
    var ka = { name: "DeclarationList", structure: { children: [["Declaration"]] }, parse: function() {
      for (var e2 = this.createList(); !this.scanner.eof; ) switch (this.scanner.tokenType) {
        case ga:
        case fa:
        case ba:
          this.scanner.next();
          break;
        default:
          e2.push(this.parseWithFallback(this.Declaration, ya));
      }
      return { type: "DeclarationList", loc: this.getLocationFromList(e2), children: e2 };
    }, generate: function(e2) {
      this.children(e2, (function(e3) {
        "Declaration" === e3.type && this.chunk(";");
      }));
    } }, va = M.consumeNumber, xa = Ce.TYPE.Dimension, wa = { name: "Dimension", structure: { value: String, unit: String }, parse: function() {
      var e2 = this.scanner.tokenStart, t2 = va(this.scanner.source, e2);
      return this.eat(xa), { type: "Dimension", loc: this.getLocation(e2, this.scanner.tokenStart), value: this.scanner.source.substring(e2, t2), unit: this.scanner.source.substring(t2, this.scanner.tokenStart) };
    }, generate: function(e2) {
      this.chunk(e2.value), this.chunk(e2.unit);
    } }, Sa = Ce.TYPE.RightParenthesis, Ca = { name: "Function", structure: { name: String, children: [[]] }, parse: function(e2, t2) {
      var n2, r2 = this.scanner.tokenStart, i2 = this.consumeFunctionName(), a2 = i2.toLowerCase();
      return n2 = t2.hasOwnProperty(a2) ? t2[a2].call(this, t2) : e2.call(this, t2), this.scanner.eof || this.eat(Sa), { type: "Function", loc: this.getLocation(r2, this.scanner.tokenStart), name: i2, children: n2 };
    }, generate: function(e2) {
      this.chunk(e2.name), this.chunk("("), this.children(e2), this.chunk(")");
    }, walkContext: "function" }, za = Ce.TYPE.Hash, Aa = { name: "Hash", structure: { value: String }, parse: function() {
      var e2 = this.scanner.tokenStart;
      return this.eat(za), { type: "Hash", loc: this.getLocation(e2, this.scanner.tokenStart), value: this.scanner.substrToCursor(e2 + 1) };
    }, generate: function(e2) {
      this.chunk("#"), this.chunk(e2.value);
    } }, Pa = Ce.TYPE.Ident, Ta = { name: "Identifier", structure: { name: String }, parse: function() {
      return { type: "Identifier", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), name: this.consume(Pa) };
    }, generate: function(e2) {
      this.chunk(e2.name);
    } }, La = Ce.TYPE.Hash, Ea = { name: "IdSelector", structure: { name: String }, parse: function() {
      var e2 = this.scanner.tokenStart;
      return this.eat(La), { type: "IdSelector", loc: this.getLocation(e2, this.scanner.tokenStart), name: this.scanner.substrToCursor(e2 + 1) };
    }, generate: function(e2) {
      this.chunk("#"), this.chunk(e2.name);
    } }, Da = Ce.TYPE, Oa = Da.Ident, Ba = Da.Number, Ia = Da.Dimension, Na = Da.LeftParenthesis, Ra = Da.RightParenthesis, Ma = Da.Colon, ja = Da.Delim, _a = { name: "MediaFeature", structure: { name: String, value: ["Identifier", "Number", "Dimension", "Ratio", null] }, parse: function() {
      var e2, t2 = this.scanner.tokenStart, n2 = null;
      if (this.eat(Na), this.scanner.skipSC(), e2 = this.consume(Oa), this.scanner.skipSC(), this.scanner.tokenType !== Ra) {
        switch (this.eat(Ma), this.scanner.skipSC(), this.scanner.tokenType) {
          case Ba:
            n2 = this.lookupNonWSType(1) === ja ? this.Ratio() : this.Number();
            break;
          case Ia:
            n2 = this.Dimension();
            break;
          case Oa:
            n2 = this.Identifier();
            break;
          default:
            this.error("Number, dimension, ratio or identifier is expected");
        }
        this.scanner.skipSC();
      }
      return this.eat(Ra), { type: "MediaFeature", loc: this.getLocation(t2, this.scanner.tokenStart), name: e2, value: n2 };
    }, generate: function(e2) {
      this.chunk("("), this.chunk(e2.name), null !== e2.value && (this.chunk(":"), this.node(e2.value)), this.chunk(")");
    } }, Fa = Ce.TYPE, Wa = Fa.WhiteSpace, qa = Fa.Comment, Ya = Fa.Ident, Ua = Fa.LeftParenthesis, Ha = { name: "MediaQuery", structure: { children: [["Identifier", "MediaFeature", "WhiteSpace"]] }, parse: function() {
      this.scanner.skipSC();
      var e2 = this.createList(), t2 = null, n2 = null;
      e: for (; !this.scanner.eof; ) {
        switch (this.scanner.tokenType) {
          case qa:
            this.scanner.next();
            continue;
          case Wa:
            n2 = this.WhiteSpace();
            continue;
          case Ya:
            t2 = this.Identifier();
            break;
          case Ua:
            t2 = this.MediaFeature();
            break;
          default:
            break e;
        }
        null !== n2 && (e2.push(n2), n2 = null), e2.push(t2);
      }
      return null === t2 && this.error("Identifier or parenthesis is expected"), { type: "MediaQuery", loc: this.getLocationFromList(e2), children: e2 };
    }, generate: function(e2) {
      this.children(e2);
    } }, Va = Ce.TYPE.Comma, Ka = { name: "MediaQueryList", structure: { children: [["MediaQuery"]] }, parse: function(e2) {
      var t2 = this.createList();
      for (this.scanner.skipSC(); !this.scanner.eof && (t2.push(this.MediaQuery(e2)), this.scanner.tokenType === Va); ) this.scanner.next();
      return { type: "MediaQueryList", loc: this.getLocationFromList(t2), children: t2 };
    }, generate: function(e2) {
      this.children(e2, (function() {
        this.chunk(",");
      }));
    } }, Ga = Ce.TYPE.Number, Qa = { name: "Number", structure: { value: String }, parse: function() {
      return { type: "Number", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), value: this.consume(Ga) };
    }, generate: function(e2) {
      this.chunk(e2.value);
    } }, Xa = { name: "Operator", structure: { value: String }, parse: function() {
      var e2 = this.scanner.tokenStart;
      return this.scanner.next(), { type: "Operator", loc: this.getLocation(e2, this.scanner.tokenStart), value: this.scanner.substrToCursor(e2) };
    }, generate: function(e2) {
      this.chunk(e2.value);
    } }, Za = Ce.TYPE, $a = Za.LeftParenthesis, Ja = Za.RightParenthesis, eo = { name: "Parentheses", structure: { children: [[]] }, parse: function(e2, t2) {
      var n2, r2 = this.scanner.tokenStart;
      return this.eat($a), n2 = e2.call(this, t2), this.scanner.eof || this.eat(Ja), { type: "Parentheses", loc: this.getLocation(r2, this.scanner.tokenStart), children: n2 };
    }, generate: function(e2) {
      this.chunk("("), this.children(e2), this.chunk(")");
    } }, to = M.consumeNumber, no = Ce.TYPE.Percentage, ro = { name: "Percentage", structure: { value: String }, parse: function() {
      var e2 = this.scanner.tokenStart, t2 = to(this.scanner.source, e2);
      return this.eat(no), { type: "Percentage", loc: this.getLocation(e2, this.scanner.tokenStart), value: this.scanner.source.substring(e2, t2) };
    }, generate: function(e2) {
      this.chunk(e2.value), this.chunk("%");
    } }, io = Ce.TYPE, ao = io.Ident, oo = io.Function, so = io.Colon, lo = io.RightParenthesis, co = { name: "PseudoClassSelector", structure: { name: String, children: [["Raw"], null] }, parse: function() {
      var e2, t2, n2 = this.scanner.tokenStart, r2 = null;
      return this.eat(so), this.scanner.tokenType === oo ? (t2 = (e2 = this.consumeFunctionName()).toLowerCase(), this.pseudo.hasOwnProperty(t2) ? (this.scanner.skipSC(), r2 = this.pseudo[t2].call(this), this.scanner.skipSC()) : (r2 = this.createList()).push(this.Raw(this.scanner.tokenIndex, null, false)), this.eat(lo)) : e2 = this.consume(ao), { type: "PseudoClassSelector", loc: this.getLocation(n2, this.scanner.tokenStart), name: e2, children: r2 };
    }, generate: function(e2) {
      this.chunk(":"), this.chunk(e2.name), null !== e2.children && (this.chunk("("), this.children(e2), this.chunk(")"));
    }, walkContext: "function" }, uo = Ce.TYPE, ho = uo.Ident, po = uo.Function, mo = uo.Colon, go = uo.RightParenthesis, fo = { name: "PseudoElementSelector", structure: { name: String, children: [["Raw"], null] }, parse: function() {
      var e2, t2, n2 = this.scanner.tokenStart, r2 = null;
      return this.eat(mo), this.eat(mo), this.scanner.tokenType === po ? (t2 = (e2 = this.consumeFunctionName()).toLowerCase(), this.pseudo.hasOwnProperty(t2) ? (this.scanner.skipSC(), r2 = this.pseudo[t2].call(this), this.scanner.skipSC()) : (r2 = this.createList()).push(this.Raw(this.scanner.tokenIndex, null, false)), this.eat(go)) : e2 = this.consume(ho), { type: "PseudoElementSelector", loc: this.getLocation(n2, this.scanner.tokenStart), name: e2, children: r2 };
    }, generate: function(e2) {
      this.chunk("::"), this.chunk(e2.name), null !== e2.children && (this.chunk("("), this.children(e2), this.chunk(")"));
    }, walkContext: "function" }, bo = Ce.isDigit, yo = Ce.TYPE, ko = yo.Number, vo = yo.Delim;
    function xo() {
      this.scanner.skipWS();
      for (var e2 = this.consume(ko), t2 = 0; t2 < e2.length; t2++) {
        var n2 = e2.charCodeAt(t2);
        bo(n2) || 46 === n2 || this.error("Unsigned number is expected", this.scanner.tokenStart - e2.length + t2);
      }
      return 0 === Number(e2) && this.error("Zero number is not allowed", this.scanner.tokenStart - e2.length), e2;
    }
    var wo = { name: "Ratio", structure: { left: String, right: String }, parse: function() {
      var e2, t2 = this.scanner.tokenStart, n2 = xo.call(this);
      return this.scanner.skipWS(), this.scanner.isDelim(47) || this.error("Solidus is expected"), this.eat(vo), e2 = xo.call(this), { type: "Ratio", loc: this.getLocation(t2, this.scanner.tokenStart), left: n2, right: e2 };
    }, generate: function(e2) {
      this.chunk(e2.left), this.chunk("/"), this.chunk(e2.right);
    } }, So = Ce.TYPE, Co = ni2.mode, zo = So.LeftCurlyBracket;
    function Ao(e2) {
      return this.Raw(e2, Co.leftCurlyBracket, true);
    }
    function Po() {
      var e2 = this.SelectorList();
      return "Raw" !== e2.type && false === this.scanner.eof && this.scanner.tokenType !== zo && this.error(), e2;
    }
    var To = { name: "Rule", structure: { prelude: ["SelectorList", "Raw"], block: ["Block"] }, parse: function() {
      var e2, t2, n2 = this.scanner.tokenIndex, r2 = this.scanner.tokenStart;
      return e2 = this.parseRulePrelude ? this.parseWithFallback(Po, Ao) : Ao.call(this, n2), t2 = this.Block(true), { type: "Rule", loc: this.getLocation(r2, this.scanner.tokenStart), prelude: e2, block: t2 };
    }, generate: function(e2) {
      this.node(e2.prelude), this.node(e2.block);
    }, walkContext: "rule" }, Lo = Ce.TYPE.Comma, Eo = { name: "SelectorList", structure: { children: [["Selector", "Raw"]] }, parse: function() {
      for (var e2 = this.createList(); !this.scanner.eof && (e2.push(this.Selector()), this.scanner.tokenType === Lo); ) this.scanner.next();
      return { type: "SelectorList", loc: this.getLocationFromList(e2), children: e2 };
    }, generate: function(e2) {
      this.children(e2, (function() {
        this.chunk(",");
      }));
    }, walkContext: "selector" }, Do = Ce.TYPE.String, Oo = { name: "String", structure: { value: String }, parse: function() {
      return { type: "String", loc: this.getLocation(this.scanner.tokenStart, this.scanner.tokenEnd), value: this.consume(Do) };
    }, generate: function(e2) {
      this.chunk(e2.value);
    } }, Bo = Ce.TYPE, Io = Bo.WhiteSpace, No = Bo.Comment, Ro = Bo.AtKeyword, Mo = Bo.CDO, jo = Bo.CDC;
    function _o(e2) {
      return this.Raw(e2, null, false);
    }
    var Fo = { name: "StyleSheet", structure: { children: [["Comment", "CDO", "CDC", "Atrule", "Rule", "Raw"]] }, parse: function() {
      for (var e2, t2 = this.scanner.tokenStart, n2 = this.createList(); !this.scanner.eof; ) {
        switch (this.scanner.tokenType) {
          case Io:
            this.scanner.next();
            continue;
          case No:
            if (33 !== this.scanner.source.charCodeAt(this.scanner.tokenStart + 2)) {
              this.scanner.next();
              continue;
            }
            e2 = this.Comment();
            break;
          case Mo:
            e2 = this.CDO();
            break;
          case jo:
            e2 = this.CDC();
            break;
          case Ro:
            e2 = this.parseWithFallback(this.Atrule, _o);
            break;
          default:
            e2 = this.parseWithFallback(this.Rule, _o);
        }
        n2.push(e2);
      }
      return { type: "StyleSheet", loc: this.getLocation(t2, this.scanner.tokenStart), children: n2 };
    }, generate: function(e2) {
      this.children(e2);
    }, walkContext: "stylesheet" }, Wo = Ce.TYPE.Ident;
    function qo() {
      this.scanner.tokenType !== Wo && false === this.scanner.isDelim(42) && this.error("Identifier or asterisk is expected"), this.scanner.next();
    }
    var Yo = { name: "TypeSelector", structure: { name: String }, parse: function() {
      var e2 = this.scanner.tokenStart;
      return this.scanner.isDelim(124) ? (this.scanner.next(), qo.call(this)) : (qo.call(this), this.scanner.isDelim(124) && (this.scanner.next(), qo.call(this))), { type: "TypeSelector", loc: this.getLocation(e2, this.scanner.tokenStart), name: this.scanner.substrToCursor(e2) };
    }, generate: function(e2) {
      this.chunk(e2.name);
    } }, Uo = Ce.isHexDigit, Ho = Ce.cmpChar, Vo = Ce.TYPE, Ko = Ce.NAME, Go = Vo.Ident, Qo = Vo.Number, Xo = Vo.Dimension;
    function Zo(e2, t2) {
      for (var n2 = this.scanner.tokenStart + e2, r2 = 0; n2 < this.scanner.tokenEnd; n2++) {
        var i2 = this.scanner.source.charCodeAt(n2);
        if (45 === i2 && t2 && 0 !== r2) return 0 === Zo.call(this, e2 + r2 + 1, false) && this.error(), -1;
        Uo(i2) || this.error(t2 && 0 !== r2 ? "HyphenMinus" + (r2 < 6 ? " or hex digit" : "") + " is expected" : r2 < 6 ? "Hex digit is expected" : "Unexpected input", n2), ++r2 > 6 && this.error("Too many hex digits", n2);
      }
      return this.scanner.next(), r2;
    }
    function $o(e2) {
      for (var t2 = 0; this.scanner.isDelim(63); ) ++t2 > e2 && this.error("Too many question marks"), this.scanner.next();
    }
    function Jo(e2) {
      this.scanner.source.charCodeAt(this.scanner.tokenStart) !== e2 && this.error(Ko[e2] + " is expected");
    }
    function es() {
      var e2 = 0;
      return this.scanner.isDelim(43) ? (this.scanner.next(), this.scanner.tokenType === Go ? void ((e2 = Zo.call(this, 0, true)) > 0 && $o.call(this, 6 - e2)) : this.scanner.isDelim(63) ? (this.scanner.next(), void $o.call(this, 5)) : void this.error("Hex digit or question mark is expected")) : this.scanner.tokenType === Qo ? (Jo.call(this, 43), e2 = Zo.call(this, 1, true), this.scanner.isDelim(63) ? void $o.call(this, 6 - e2) : this.scanner.tokenType === Xo || this.scanner.tokenType === Qo ? (Jo.call(this, 45), void Zo.call(this, 1, false)) : void 0) : this.scanner.tokenType === Xo ? (Jo.call(this, 43), void ((e2 = Zo.call(this, 1, true)) > 0 && $o.call(this, 6 - e2))) : void this.error();
    }
    var ts = { name: "UnicodeRange", structure: { value: String }, parse: function() {
      var e2 = this.scanner.tokenStart;
      return Ho(this.scanner.source, e2, 117) || this.error("U is expected"), Ho(this.scanner.source, e2 + 1, 43) || this.error("Plus sign is expected"), this.scanner.next(), es.call(this), { type: "UnicodeRange", loc: this.getLocation(e2, this.scanner.tokenStart), value: this.scanner.substrToCursor(e2) };
    }, generate: function(e2) {
      this.chunk(e2.value);
    } }, ns = Ce.isWhiteSpace, rs = Ce.cmpStr, is2 = Ce.TYPE, as = is2.Function, os = is2.Url, ss = is2.RightParenthesis, ls = { name: "Url", structure: { value: ["String", "Raw"] }, parse: function() {
      var e2, t2 = this.scanner.tokenStart;
      switch (this.scanner.tokenType) {
        case os:
          for (var n2 = t2 + 4, r2 = this.scanner.tokenEnd - 1; n2 < r2 && ns(this.scanner.source.charCodeAt(n2)); ) n2++;
          for (; n2 < r2 && ns(this.scanner.source.charCodeAt(r2 - 1)); ) r2--;
          e2 = { type: "Raw", loc: this.getLocation(n2, r2), value: this.scanner.source.substring(n2, r2) }, this.eat(os);
          break;
        case as:
          rs(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") || this.error("Function name must be `url`"), this.eat(as), this.scanner.skipSC(), e2 = this.String(), this.scanner.skipSC(), this.eat(ss);
          break;
        default:
          this.error("Url or Function is expected");
      }
      return { type: "Url", loc: this.getLocation(t2, this.scanner.tokenStart), value: e2 };
    }, generate: function(e2) {
      this.chunk("url"), this.chunk("("), this.node(e2.value), this.chunk(")");
    } }, cs = Ce.TYPE.WhiteSpace, us = Object.freeze({ type: "WhiteSpace", loc: null, value: " " }), hs = { AnPlusB: Gr, Atrule: hi, AtrulePrelude: gi, AttributeSelector: Ci, Block: Mi, Brackets: Wi, CDC: Yi, CDO: Hi, ClassSelector: Ki, Combinator: Qi, Comment: Zi, Declaration: ua, DeclarationList: ka, Dimension: wa, Function: Ca, Hash: Aa, Identifier: Ta, IdSelector: Ea, MediaFeature: _a, MediaQuery: Ha, MediaQueryList: Ka, Nth: { name: "Nth", structure: { nth: ["AnPlusB", "Identifier"], selector: ["SelectorList", null] }, parse: function(e2) {
      this.scanner.skipSC();
      var t2, n2 = this.scanner.tokenStart, r2 = n2, i2 = null;
      return t2 = this.scanner.lookupValue(0, "odd") || this.scanner.lookupValue(0, "even") ? this.Identifier() : this.AnPlusB(), this.scanner.skipSC(), e2 && this.scanner.lookupValue(0, "of") ? (this.scanner.next(), i2 = this.SelectorList(), this.needPositions && (r2 = this.getLastListNode(i2.children).loc.end.offset)) : this.needPositions && (r2 = t2.loc.end.offset), { type: "Nth", loc: this.getLocation(n2, r2), nth: t2, selector: i2 };
    }, generate: function(e2) {
      this.node(e2.nth), null !== e2.selector && (this.chunk(" of "), this.node(e2.selector));
    } }, Number: Qa, Operator: Xa, Parentheses: eo, Percentage: ro, PseudoClassSelector: co, PseudoElementSelector: fo, Ratio: wo, Raw: ni2, Rule: To, Selector: { name: "Selector", structure: { children: [["TypeSelector", "IdSelector", "ClassSelector", "AttributeSelector", "PseudoClassSelector", "PseudoElementSelector", "Combinator", "WhiteSpace"]] }, parse: function() {
      var e2 = this.readSequence(this.scope.Selector);
      return null === this.getFirstListNode(e2) && this.error("Selector is expected"), { type: "Selector", loc: this.getLocationFromList(e2), children: e2 };
    }, generate: function(e2) {
      this.children(e2);
    } }, SelectorList: Eo, String: Oo, StyleSheet: Fo, TypeSelector: Yo, UnicodeRange: ts, Url: ls, Value: { name: "Value", structure: { children: [[]] }, parse: function() {
      var e2 = this.scanner.tokenStart, t2 = this.readSequence(this.scope.Value);
      return { type: "Value", loc: this.getLocation(e2, this.scanner.tokenStart), children: t2 };
    }, generate: function(e2) {
      this.children(e2);
    } }, WhiteSpace: { name: "WhiteSpace", structure: { value: String }, parse: function() {
      return this.eat(cs), us;
    }, generate: function(e2) {
      this.chunk(e2.value);
    } } }, ps = { generic: true, types: Nr.types, atrules: Nr.atrules, properties: Nr.properties, node: hs }, ds = Ce.cmpChar, ms = Ce.cmpStr, gs = Ce.TYPE, fs = gs.Ident, bs = gs.String, ys = gs.Number, ks = gs.Function, vs = gs.Url, xs = gs.Hash, ws = gs.Dimension, Ss = gs.Percentage, Cs = gs.LeftParenthesis, zs = gs.LeftSquareBracket, As = gs.Comma, Ps = gs.Delim, Ts = function(e2) {
      switch (this.scanner.tokenType) {
        case xs:
          return this.Hash();
        case As:
          return e2.space = null, e2.ignoreWSAfter = true, this.Operator();
        case Cs:
          return this.Parentheses(this.readSequence, e2.recognizer);
        case zs:
          return this.Brackets(this.readSequence, e2.recognizer);
        case bs:
          return this.String();
        case ws:
          return this.Dimension();
        case Ss:
          return this.Percentage();
        case ys:
          return this.Number();
        case ks:
          return ms(this.scanner.source, this.scanner.tokenStart, this.scanner.tokenEnd, "url(") ? this.Url() : this.Function(this.readSequence, e2.recognizer);
        case vs:
          return this.Url();
        case fs:
          return ds(this.scanner.source, this.scanner.tokenStart, 117) && ds(this.scanner.source, this.scanner.tokenStart + 1, 43) ? this.UnicodeRange() : this.Identifier();
        case Ps:
          var t2 = this.scanner.source.charCodeAt(this.scanner.tokenStart);
          if (47 === t2 || 42 === t2 || 43 === t2 || 45 === t2) return this.Operator();
          35 === t2 && this.error("Hex or identifier is expected", this.scanner.tokenStart + 1);
      }
    }, Ls = { getNode: Ts }, Es = Ce.TYPE, Ds = Es.Delim, Os = Es.Ident, Bs = Es.Dimension, Is = Es.Percentage, Ns = Es.Number, Rs = Es.Hash, Ms = Es.Colon, js = Es.LeftSquareBracket;
    var _s = { getNode: function(e2) {
      switch (this.scanner.tokenType) {
        case js:
          return this.AttributeSelector();
        case Rs:
          return this.IdSelector();
        case Ms:
          return this.scanner.lookupType(1) === Ms ? this.PseudoElementSelector() : this.PseudoClassSelector();
        case Os:
          return this.TypeSelector();
        case Ns:
        case Is:
          return this.Percentage();
        case Bs:
          46 === this.scanner.source.charCodeAt(this.scanner.tokenStart) && this.error("Identifier is expected", this.scanner.tokenStart + 1);
          break;
        case Ds:
          switch (this.scanner.source.charCodeAt(this.scanner.tokenStart)) {
            case 43:
            case 62:
            case 126:
              return e2.space = null, e2.ignoreWSAfter = true, this.Combinator();
            case 47:
              return this.Combinator();
            case 46:
              return this.ClassSelector();
            case 42:
            case 124:
              return this.TypeSelector();
            case 35:
              return this.IdSelector();
          }
      }
    } }, Fs = Ce.TYPE, Ws = ni2.mode, qs = Fs.Comma, Ys = Fs.WhiteSpace, Us = { AtrulePrelude: Ls, Selector: _s, Value: { getNode: Ts, expression: function() {
      return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
    }, var: function() {
      var e2 = this.createList();
      if (this.scanner.skipSC(), e2.push(this.Identifier()), this.scanner.skipSC(), this.scanner.tokenType === qs) {
        e2.push(this.Operator());
        const t2 = this.scanner.tokenIndex, n2 = this.parseCustomProperty ? this.Value(null) : this.Raw(this.scanner.tokenIndex, Ws.exclamationMarkOrSemicolon, false);
        if ("Value" === n2.type && n2.children.isEmpty()) {
          for (let e3 = t2 - this.scanner.tokenIndex; e3 <= 0; e3++) if (this.scanner.lookupType(e3) === Ys) {
            n2.children.appendData({ type: "WhiteSpace", loc: null, value: " " });
            break;
          }
        }
        e2.push(n2);
      }
      return e2;
    } } }, Hs = Ce.TYPE, Vs = Hs.String, Ks = Hs.Ident, Gs = Hs.Url, Qs = Hs.Function, Xs = Hs.LeftParenthesis, Zs = { parse: { prelude: function() {
      var e2 = this.createList();
      switch (this.scanner.skipSC(), this.scanner.tokenType) {
        case Vs:
          e2.push(this.String());
          break;
        case Gs:
        case Qs:
          e2.push(this.Url());
          break;
        default:
          this.error("String or url() is expected");
      }
      return this.lookupNonWSType(0) !== Ks && this.lookupNonWSType(0) !== Xs || (e2.push(this.WhiteSpace()), e2.push(this.MediaQueryList())), e2;
    }, block: null } }, $s = Ce.TYPE, Js = $s.WhiteSpace, el2 = $s.Comment, tl = $s.Ident, nl = $s.Function, rl = $s.Colon, il = $s.LeftParenthesis;
    function al() {
      return this.createSingleNodeList(this.Raw(this.scanner.tokenIndex, null, false));
    }
    function ol() {
      return this.scanner.skipSC(), this.scanner.tokenType === tl && this.lookupNonWSType(1) === rl ? this.createSingleNodeList(this.Declaration()) : sl.call(this);
    }
    function sl() {
      var e2, t2 = this.createList(), n2 = null;
      this.scanner.skipSC();
      e: for (; !this.scanner.eof; ) {
        switch (this.scanner.tokenType) {
          case Js:
            n2 = this.WhiteSpace();
            continue;
          case el2:
            this.scanner.next();
            continue;
          case nl:
            e2 = this.Function(al, this.scope.AtrulePrelude);
            break;
          case tl:
            e2 = this.Identifier();
            break;
          case il:
            e2 = this.Parentheses(ol, this.scope.AtrulePrelude);
            break;
          default:
            break e;
        }
        null !== n2 && (t2.push(n2), n2 = null), t2.push(e2);
      }
      return t2;
    }
    var ll2, cl = { parse: function() {
      return this.createSingleNodeList(this.SelectorList());
    } }, ul = { parse: function() {
      return this.createSingleNodeList(this.Nth(true));
    } }, hl = { parse: function() {
      return this.createSingleNodeList(this.Nth(false));
    } }, pl = { parseContext: { default: "StyleSheet", stylesheet: "StyleSheet", atrule: "Atrule", atrulePrelude: function(e2) {
      return this.AtrulePrelude(e2.atrule ? String(e2.atrule) : null);
    }, mediaQueryList: "MediaQueryList", mediaQuery: "MediaQuery", rule: "Rule", selectorList: "SelectorList", selector: "Selector", block: function() {
      return this.Block(true);
    }, declarationList: "DeclarationList", declaration: "Declaration", value: "Value" }, scope: Us, atrule: { "font-face": { parse: { prelude: null, block: function() {
      return this.Block(true);
    } } }, import: Zs, media: { parse: { prelude: function() {
      return this.createSingleNodeList(this.MediaQueryList());
    }, block: function() {
      return this.Block(false);
    } } }, page: { parse: { prelude: function() {
      return this.createSingleNodeList(this.SelectorList());
    }, block: function() {
      return this.Block(true);
    } } }, supports: { parse: { prelude: function() {
      var e2 = sl.call(this);
      return null === this.getFirstListNode(e2) && this.error("Condition is expected"), e2;
    }, block: function() {
      return this.Block(false);
    } } } }, pseudo: { dir: { parse: function() {
      return this.createSingleNodeList(this.Identifier());
    } }, has: { parse: function() {
      return this.createSingleNodeList(this.SelectorList());
    } }, lang: { parse: function() {
      return this.createSingleNodeList(this.Identifier());
    } }, matches: cl, not: cl, "nth-child": ul, "nth-last-child": ul, "nth-last-of-type": hl, "nth-of-type": hl, slotted: { parse: function() {
      return this.createSingleNodeList(this.Selector());
    } } }, node: hs }, dl = { node: hs }, ml = { version: "1.1.3" }, gl2 = (ll2 = Object.freeze({ __proto__: null, version: "1.1.3", default: ml })) && ll2.default || ll2;
    var fl = Ir((function() {
      for (var e2 = {}, t2 = 0; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) e2[r2] = n2[r2];
      }
      return e2;
    })(ps, pl, dl)), bl = gl2.version;
    return fl.version = bl, fl;
  }));
})(csstree_min);
var cssTools = {};
var stable$3 = { exports: {} };
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, (function() {
    var stable2 = function(arr, comp2) {
      return exec(arr.slice(), comp2);
    };
    stable2.inplace = function(arr, comp2) {
      var result = exec(arr, comp2);
      if (result !== arr) {
        pass(result, null, arr.length, arr);
      }
      return arr;
    };
    function exec(arr, comp2) {
      if (typeof comp2 !== "function") {
        comp2 = function(a, b) {
          return String(a).localeCompare(b);
        };
      }
      var len = arr.length;
      if (len <= 1) {
        return arr;
      }
      var buffer = new Array(len);
      for (var chk = 1; chk < len; chk *= 2) {
        pass(arr, comp2, chk, buffer);
        var tmp = arr;
        arr = buffer;
        buffer = tmp;
      }
      return arr;
    }
    var pass = function(arr, comp2, chk, result) {
      var len = arr.length;
      var i = 0;
      var dbl = chk * 2;
      var l, r, e;
      var li, ri;
      for (l = 0; l < len; l += dbl) {
        r = l + chk;
        e = r + chk;
        if (r > len) r = len;
        if (e > len) e = len;
        li = l;
        ri = r;
        while (true) {
          if (li < r && ri < e) {
            if (comp2(arr[li], arr[ri]) <= 0) {
              result[i++] = arr[li++];
            } else {
              result[i++] = arr[ri++];
            }
          } else if (li < r) {
            result[i++] = arr[li++];
          } else if (ri < e) {
            result[i++] = arr[ri++];
          } else {
            break;
          }
        }
      }
    };
    return stable2;
  }));
})(stable$3);
var specificity$4 = function specificity(simpleSelector) {
  var A = 0;
  var B = 0;
  var C = 0;
  simpleSelector.children.each((function walk2(node2) {
    switch (node2.type) {
      case "SelectorList":
      case "Selector":
        node2.children.each(walk2);
        break;
      case "IdSelector":
        A++;
        break;
      case "ClassSelector":
      case "AttributeSelector":
        B++;
        break;
      case "PseudoClassSelector":
        switch (node2.name.toLowerCase()) {
          case "not":
            node2.children.each(walk2);
            break;
          case "before":
          case "after":
          case "first-line":
          case "first-letter":
            C++;
            break;
          default:
            B++;
        }
        break;
      case "PseudoElementSelector":
        C++;
        break;
      case "TypeSelector":
        if (node2.name.charAt(node2.name.length - 1) !== "*") {
          C++;
        }
        break;
    }
  }));
  return [A, B, C];
};
var csstree$5 = csstree_min.exports;
var List$6 = csstree$5.List;
var stable$2 = stable$3.exports;
var specificity$3 = specificity$4;
function flattenToSelectors(cssAst) {
  var selectors = [];
  csstree$5.walk(cssAst, { visit: "Rule", enter: function(node2) {
    if (node2.type !== "Rule") {
      return;
    }
    var atrule = this.atrule;
    var rule = node2;
    node2.prelude.children.each((function(selectorNode, selectorItem) {
      var selector = { item: selectorItem, atrule, rule, pseudos: [] };
      selectorNode.children.each((function(selectorChildNode, selectorChildItem, selectorChildList) {
        if (selectorChildNode.type === "PseudoClassSelector" || selectorChildNode.type === "PseudoElementSelector") {
          selector.pseudos.push({ item: selectorChildItem, list: selectorChildList });
        }
      }));
      selectors.push(selector);
    }));
  } });
  return selectors;
}
function filterByMqs(selectors, useMqs) {
  return selectors.filter((function(selector) {
    if (selector.atrule === null) {
      return ~useMqs.indexOf("");
    }
    var mqName = selector.atrule.name;
    var mqStr = mqName;
    if (selector.atrule.expression && selector.atrule.expression.children.first().type === "MediaQueryList") {
      var mqExpr = csstree$5.generate(selector.atrule.expression);
      mqStr = [mqName, mqExpr].join(" ");
    }
    return ~useMqs.indexOf(mqStr);
  }));
}
function filterByPseudos(selectors, usePseudos) {
  return selectors.filter((function(selector) {
    var pseudoSelectorsStr = csstree$5.generate({ type: "Selector", children: new List$6().fromArray(selector.pseudos.map((function(pseudo) {
      return pseudo.item.data;
    }))) });
    return ~usePseudos.indexOf(pseudoSelectorsStr);
  }));
}
function cleanPseudos(selectors) {
  selectors.forEach((function(selector) {
    selector.pseudos.forEach((function(pseudo) {
      pseudo.list.remove(pseudo.item);
    }));
  }));
}
function compareSpecificity$2(aSpecificity, bSpecificity) {
  for (var i = 0; i < 4; i += 1) {
    if (aSpecificity[i] < bSpecificity[i]) {
      return -1;
    } else if (aSpecificity[i] > bSpecificity[i]) {
      return 1;
    }
  }
  return 0;
}
function compareSimpleSelectorNode(aSimpleSelectorNode, bSimpleSelectorNode) {
  var aSpecificity = specificity$3(aSimpleSelectorNode), bSpecificity = specificity$3(bSimpleSelectorNode);
  return compareSpecificity$2(aSpecificity, bSpecificity);
}
function _bySelectorSpecificity(selectorA, selectorB) {
  return compareSimpleSelectorNode(selectorA.item.data, selectorB.item.data);
}
function sortSelectors(selectors) {
  return stable$2(selectors, _bySelectorSpecificity);
}
function csstreeToStyleDeclaration(declaration) {
  var propertyName = declaration.property, propertyValue = csstree$5.generate(declaration.value), propertyPriority = declaration.important ? "important" : "";
  return { name: propertyName, value: propertyValue, priority: propertyPriority };
}
function getCssStr(elem) {
  if (elem.children.length > 0 && (elem.children[0].type === "text" || elem.children[0].type === "cdata")) {
    return elem.children[0].value;
  }
  return "";
}
function setCssStr(elem, css) {
  if (elem.children.length === 0) {
    elem.children.push({ type: "text", value: "" });
  }
  if (elem.children[0].type !== "text" && elem.children[0].type !== "cdata") {
    return css;
  }
  elem.children[0].value = css;
  return css;
}
cssTools.flattenToSelectors = flattenToSelectors;
cssTools.filterByMqs = filterByMqs;
cssTools.filterByPseudos = filterByPseudos;
cssTools.cleanPseudos = cleanPseudos;
cssTools.compareSpecificity = compareSpecificity$2;
cssTools.compareSimpleSelectorNode = compareSimpleSelectorNode;
cssTools.sortSelectors = sortSelectors;
cssTools.csstreeToStyleDeclaration = csstreeToStyleDeclaration;
cssTools.getCssStr = getCssStr;
cssTools.setCssStr = setCssStr;
var csstree$4 = csstree_min.exports;
var csstools = cssTools;
var CSSStyleDeclaration$1 = function(node2) {
  this.parentNode = node2;
  this.properties = /* @__PURE__ */ new Map();
  this.hasSynced = false;
  this.styleValue = null;
  this.parseError = false;
  const value = node2.attributes.style;
  if (value != null) {
    this.addStyleValueHandler();
    this.setStyleValue(value);
  }
};
CSSStyleDeclaration$1.prototype.addStyleValueHandler = function() {
  Object.defineProperty(this.parentNode.attributes, "style", { get: this.getStyleValue.bind(this), set: this.setStyleValue.bind(this), enumerable: true, configurable: true });
};
CSSStyleDeclaration$1.prototype.getStyleValue = function() {
  return this.getCssText();
};
CSSStyleDeclaration$1.prototype.setStyleValue = function(newValue) {
  this.properties.clear();
  this.styleValue = newValue;
  this.hasSynced = false;
};
CSSStyleDeclaration$1.prototype._loadCssText = function() {
  if (this.hasSynced) {
    return;
  }
  this.hasSynced = true;
  if (!this.styleValue || this.styleValue.length === 0) {
    return;
  }
  var inlineCssStr = this.styleValue;
  var declarations = {};
  try {
    declarations = csstree$4.parse(inlineCssStr, { context: "declarationList", parseValue: false });
  } catch (parseError) {
    this.parseError = parseError;
    return;
  }
  this.parseError = false;
  var self2 = this;
  declarations.children.each((function(declaration) {
    try {
      var styleDeclaration = csstools.csstreeToStyleDeclaration(declaration);
      self2.setProperty(styleDeclaration.name, styleDeclaration.value, styleDeclaration.priority);
    } catch (styleError) {
      if (styleError.message !== "Unknown node type: undefined") {
        self2.parseError = styleError;
      }
    }
  }));
};
CSSStyleDeclaration$1.prototype.getCssText = function() {
  var properties = this.getProperties();
  if (this.parseError) {
    return this.styleValue;
  }
  var cssText = [];
  properties.forEach((function(property2, propertyName) {
    var strImportant = property2.priority === "important" ? "!important" : "";
    cssText.push(propertyName.trim() + ":" + property2.value.trim() + strImportant);
  }));
  return cssText.join(";");
};
CSSStyleDeclaration$1.prototype._handleParseError = function() {
  if (this.parseError) {
    console.warn("Warning: Parse error when parsing inline styles, style properties of this element cannot be used. The raw styles can still be get/set using .attr('style').value. Error details: " + this.parseError);
  }
};
CSSStyleDeclaration$1.prototype._getProperty = function(propertyName) {
  if (typeof propertyName === "undefined") {
    throw Error("1 argument required, but only 0 present.");
  }
  var properties = this.getProperties();
  this._handleParseError();
  var property2 = properties.get(propertyName.trim());
  return property2;
};
CSSStyleDeclaration$1.prototype.getPropertyPriority = function(propertyName) {
  var property2 = this._getProperty(propertyName);
  return property2 ? property2.priority : "";
};
CSSStyleDeclaration$1.prototype.getPropertyValue = function(propertyName) {
  var property2 = this._getProperty(propertyName);
  return property2 ? property2.value : null;
};
CSSStyleDeclaration$1.prototype.item = function(index) {
  if (typeof index === "undefined") {
    throw Error("1 argument required, but only 0 present.");
  }
  var properties = this.getProperties();
  this._handleParseError();
  return Array.from(properties.keys())[index];
};
CSSStyleDeclaration$1.prototype.getProperties = function() {
  this._loadCssText();
  return this.properties;
};
CSSStyleDeclaration$1.prototype.removeProperty = function(propertyName) {
  if (typeof propertyName === "undefined") {
    throw Error("1 argument required, but only 0 present.");
  }
  this.addStyleValueHandler();
  var properties = this.getProperties();
  this._handleParseError();
  var oldValue = this.getPropertyValue(propertyName);
  properties.delete(propertyName.trim());
  return oldValue;
};
CSSStyleDeclaration$1.prototype.setProperty = function(propertyName, value, priority) {
  if (typeof propertyName === "undefined") {
    throw Error("propertyName argument required, but only not present.");
  }
  this.addStyleValueHandler();
  var properties = this.getProperties();
  this._handleParseError();
  var property2 = { value: value.trim(), priority: priority.trim() };
  properties.set(propertyName.trim(), property2);
  return property2;
};
var cssStyleDeclaration = CSSStyleDeclaration$1;
var { selectAll, selectOne, is } = lib$8;
var svgoCssSelectAdapter = cssSelectAdapter;
var CSSClassList = cssClassList;
var CSSStyleDeclaration = cssStyleDeclaration;
var parseName = (name2) => {
  if (name2 == null) {
    return { prefix: "", local: "" };
  }
  if (name2 === "xmlns") {
    return { prefix: "xmlns", local: "" };
  }
  const chunks = name2.split(":");
  if (chunks.length === 1) {
    return { prefix: "", local: chunks[0] };
  }
  return { prefix: chunks[0], local: chunks[1] };
};
var cssSelectOpts = { xmlMode: true, adapter: svgoCssSelectAdapter };
var attrsHandler = { get: (attributes2, name2) => {
  if (attributes2.hasOwnProperty(name2)) {
    return { name: name2, get value() {
      return attributes2[name2];
    }, set value(value) {
      attributes2[name2] = value;
    } };
  }
}, set: (attributes2, name2, attr) => {
  attributes2[name2] = attr.value;
  return true;
} };
var JSAPI$4 = function(data, parentNode) {
  Object.assign(this, data);
  if (this.type === "element") {
    if (this.attributes == null) {
      this.attributes = {};
    }
    if (this.children == null) {
      this.children = [];
    }
    Object.defineProperty(this, "class", { writable: true, configurable: true, value: new CSSClassList(this) });
    Object.defineProperty(this, "style", { writable: true, configurable: true, value: new CSSStyleDeclaration(this) });
    Object.defineProperty(this, "parentNode", { writable: true, value: parentNode });
    const element = this;
    Object.defineProperty(this, "attrs", { configurable: true, get() {
      return new Proxy(element.attributes, attrsHandler);
    }, set(value) {
      const newAttributes = {};
      for (const attr of Object.values(value)) {
        newAttributes[attr.name] = attr.value;
      }
      element.attributes = newAttributes;
    } });
  }
};
var jsAPI = JSAPI$4;
JSAPI$4.prototype.clone = function() {
  const _a = this, { children } = _a, nodeData = __objRest(_a, ["children"]);
  const clonedNode = new JSAPI$4(JSON.parse(JSON.stringify(nodeData)), null);
  if (children) {
    clonedNode.children = children.map(((child) => {
      const clonedChild = child.clone();
      clonedChild.parentNode = clonedNode;
      return clonedChild;
    }));
  }
  return clonedNode;
};
JSAPI$4.prototype.isElem = function(param) {
  if (this.type !== "element") {
    return false;
  }
  if (param == null) {
    return true;
  }
  if (Array.isArray(param)) {
    return param.includes(this.name);
  }
  return this.name === param;
};
JSAPI$4.prototype.renameElem = function(name2) {
  if (name2 && typeof name2 === "string") this.name = name2;
  return this;
};
JSAPI$4.prototype.isEmpty = function() {
  return !this.children || !this.children.length;
};
JSAPI$4.prototype.closestElem = function(elemName) {
  var elem = this;
  while ((elem = elem.parentNode) && !elem.isElem(elemName)) ;
  return elem;
};
JSAPI$4.prototype.spliceContent = function(start, n, insertion) {
  if (arguments.length < 2) return [];
  if (!Array.isArray(insertion)) insertion = Array.apply(null, arguments).slice(2);
  insertion.forEach((function(inner) {
    inner.parentNode = this;
  }), this);
  return this.children.splice.apply(this.children, [start, n].concat(insertion));
};
JSAPI$4.prototype.hasAttr = function(name2, val) {
  if (this.type !== "element") {
    return false;
  }
  if (Object.keys(this.attributes).length === 0) {
    return false;
  }
  if (name2 == null) {
    return true;
  }
  if (this.attributes.hasOwnProperty(name2) === false) {
    return false;
  }
  if (val !== void 0) {
    return this.attributes[name2] === val.toString();
  }
  return true;
};
JSAPI$4.prototype.hasAttrLocal = function(localName, val) {
  if (!this.attrs || !Object.keys(this.attrs).length) return false;
  if (!arguments.length) return !!this.attrs;
  var callback;
  switch (val != null && val.constructor && val.constructor.name) {
    case "Number":
    case "String":
      callback = stringValueTest;
      break;
    case "RegExp":
      callback = regexpValueTest;
      break;
    case "Function":
      callback = funcValueTest;
      break;
    default:
      callback = nameTest;
  }
  return this.someAttr(callback);
  function nameTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName;
  }
  function stringValueTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName && val == attr.value;
  }
  function regexpValueTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName && val.test(attr.value);
  }
  function funcValueTest(attr) {
    const { local } = parseName(attr.name);
    return local === localName && val(attr.value);
  }
};
JSAPI$4.prototype.attr = function(name2, val) {
  if (this.hasAttr(name2, val)) {
    return this.attrs[name2];
  }
};
JSAPI$4.prototype.computedAttr = function(name2, val) {
  if (!arguments.length) return;
  for (var elem = this; elem && (!elem.hasAttr(name2) || !elem.attributes[name2]); elem = elem.parentNode) ;
  if (val != null) {
    return elem ? elem.hasAttr(name2, val) : false;
  } else if (elem && elem.hasAttr(name2)) {
    return elem.attributes[name2];
  }
};
JSAPI$4.prototype.removeAttr = function(name2, val) {
  if (this.type !== "element") {
    return false;
  }
  if (arguments.length === 0) {
    return false;
  }
  if (Array.isArray(name2)) {
    for (const nameItem of name2) {
      this.removeAttr(nameItem, val);
    }
    return false;
  }
  if (this.hasAttr(name2, val) === false) {
    return false;
  }
  delete this.attributes[name2];
  return true;
};
JSAPI$4.prototype.addAttr = function(attr) {
  attr = attr || {};
  if (attr.name === void 0) return false;
  this.attributes[attr.name] = attr.value;
  if (attr.name === "class") {
    this.class.addClassValueHandler();
  }
  if (attr.name === "style") {
    this.style.addStyleValueHandler();
  }
  return this.attrs[attr.name];
};
JSAPI$4.prototype.eachAttr = function(callback, context) {
  if (this.type !== "element") {
    return false;
  }
  if (callback == null) {
    return false;
  }
  for (const attr of Object.values(this.attrs)) {
    callback.call(context, attr);
  }
  return true;
};
JSAPI$4.prototype.someAttr = function(callback, context) {
  if (this.type !== "element") {
    return false;
  }
  for (const attr of Object.values(this.attrs)) {
    if (callback.call(context, attr)) return true;
  }
  return false;
};
JSAPI$4.prototype.querySelectorAll = function(selectors) {
  var matchedEls = selectAll(selectors, this, cssSelectOpts);
  return matchedEls.length > 0 ? matchedEls : null;
};
JSAPI$4.prototype.querySelector = function(selectors) {
  return selectOne(selectors, this, cssSelectOpts);
};
JSAPI$4.prototype.matches = function(selector) {
  return is(this, selector, cssSelectOpts);
};
var { visitSkip: visitSkip$5, detachNodeFromParent: detachNodeFromParent$g } = xast;
var JSAPI$3 = jsAPI;
mergeStyles$1.name = "mergeStyles";
mergeStyles$1.type = "visitor";
mergeStyles$1.active = true;
mergeStyles$1.description = "merge multiple style elements into one";
mergeStyles$1.fn = () => {
  let firstStyleElement = null;
  let collectedStyles = "";
  let styleContentType = "text";
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "foreignObject") {
      return visitSkip$5;
    }
    if (node2.name !== "style") {
      return;
    }
    if (node2.attributes.type != null && node2.attributes.type !== "" && node2.attributes.type !== "text/css") {
      return;
    }
    let css = "";
    for (const child of node2.children) {
      if (child.type === "text") {
        css += child.value;
      }
      if (child.type === "cdata") {
        styleContentType = "cdata";
        css += child.value;
      }
    }
    if (css.trim().length === 0) {
      detachNodeFromParent$g(node2, parentNode);
      return;
    }
    if (node2.attributes.media == null) {
      collectedStyles += css;
    } else {
      collectedStyles += `@media ${node2.attributes.media}{${css}}`;
      delete node2.attributes.media;
    }
    if (firstStyleElement == null) {
      firstStyleElement = node2;
    } else {
      detachNodeFromParent$g(node2, parentNode);
      firstStyleElement.children = [new JSAPI$3({ type: styleContentType, value: collectedStyles }, firstStyleElement)];
    }
  } } };
};
var inlineStyles$1 = {};
var csstree$3 = csstree_min.exports;
var specificity$2 = specificity$4;
var stable$1 = stable$3.exports;
var { visitSkip: visitSkip$4, querySelectorAll: querySelectorAll$1, detachNodeFromParent: detachNodeFromParent$f } = xast;
inlineStyles$1.type = "visitor";
inlineStyles$1.name = "inlineStyles";
inlineStyles$1.active = true;
inlineStyles$1.description = "inline styles (additional options)";
var compareSpecificity$1 = (a, b) => {
  for (var i = 0; i < 4; i += 1) {
    if (a[i] < b[i]) {
      return -1;
    } else if (a[i] > b[i]) {
      return 1;
    }
  }
  return 0;
};
inlineStyles$1.fn = (root, params) => {
  const { onlyMatchedOnce = true, removeMatchedSelectors = true, useMqs = ["", "screen"], usePseudos = [""] } = params;
  const styles = [];
  let selectors = [];
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "foreignObject") {
      return visitSkip$4;
    }
    if (node2.name !== "style" || node2.children.length === 0) {
      return;
    }
    if (node2.attributes.type != null && node2.attributes.type !== "" && node2.attributes.type !== "text/css") {
      return;
    }
    let cssText = "";
    for (const child of node2.children) {
      if (child.type === "text" || child.type === "cdata") {
        cssText += child.value;
      }
    }
    let cssAst = null;
    try {
      cssAst = csstree$3.parse(cssText, { parseValue: false, parseCustomProperty: false });
    } catch (e) {
      return;
    }
    if (cssAst.type === "StyleSheet") {
      styles.push({ node: node2, parentNode, cssAst });
    }
    csstree$3.walk(cssAst, { visit: "Selector", enter(node3, item) {
      const atrule = this.atrule;
      const rule = this.rule;
      if (rule == null) {
        return;
      }
      let mq = "";
      if (atrule != null) {
        mq = atrule.name;
        if (atrule.prelude != null) {
          mq += ` ${csstree$3.generate(atrule.prelude)}`;
        }
      }
      if (useMqs.includes(mq) === false) {
        return;
      }
      const pseudos2 = [];
      if (node3.type === "Selector") {
        node3.children.each(((childNode, childItem, childList) => {
          if (childNode.type === "PseudoClassSelector" || childNode.type === "PseudoElementSelector") {
            pseudos2.push({ item: childItem, list: childList });
          }
        }));
      }
      const pseudoSelectors2 = csstree$3.generate({ type: "Selector", children: new csstree$3.List().fromArray(pseudos2.map(((pseudo) => pseudo.item.data))) });
      if (usePseudos.includes(pseudoSelectors2) === false) {
        return;
      }
      for (const pseudo of pseudos2) {
        pseudo.list.remove(pseudo.item);
      }
      selectors.push({ node: node3, item, rule });
    } });
  } }, root: { exit: () => {
    if (styles.length === 0) {
      return;
    }
    const sortedSelectors = stable$1(selectors, ((a, b) => {
      const aSpecificity = specificity$2(a.item.data);
      const bSpecificity = specificity$2(b.item.data);
      return compareSpecificity$1(aSpecificity, bSpecificity);
    })).reverse();
    for (const selector of sortedSelectors) {
      const selectorText = csstree$3.generate(selector.item.data);
      const matchedElements = [];
      try {
        for (const node2 of querySelectorAll$1(root, selectorText)) {
          if (node2.type === "element") {
            matchedElements.push(node2);
          }
        }
      } catch (selectError) {
        continue;
      }
      if (matchedElements.length === 0) {
        continue;
      }
      if (onlyMatchedOnce && matchedElements.length > 1) {
        continue;
      }
      for (const selectedEl of matchedElements) {
        const styleDeclarationList = csstree$3.parse(selectedEl.attributes.style == null ? "" : selectedEl.attributes.style, { context: "declarationList", parseValue: false });
        if (styleDeclarationList.type !== "DeclarationList") {
          continue;
        }
        const styleDeclarationItems = /* @__PURE__ */ new Map();
        csstree$3.walk(styleDeclarationList, { visit: "Declaration", enter(node2, item) {
          styleDeclarationItems.set(node2.property, item);
        } });
        csstree$3.walk(selector.rule, { visit: "Declaration", enter(ruleDeclaration) {
          const matchedItem = styleDeclarationItems.get(ruleDeclaration.property);
          const ruleDeclarationItem = styleDeclarationList.children.createItem(ruleDeclaration);
          if (matchedItem == null) {
            styleDeclarationList.children.append(ruleDeclarationItem);
          } else if (matchedItem.data.important !== true && ruleDeclaration.important === true) {
            styleDeclarationList.children.replace(matchedItem, ruleDeclarationItem);
            styleDeclarationItems.set(ruleDeclaration.property, ruleDeclarationItem);
          }
        } });
        selectedEl.attributes.style = csstree$3.generate(styleDeclarationList);
      }
      if (removeMatchedSelectors && matchedElements.length !== 0 && selector.rule.prelude.type === "SelectorList") {
        selector.rule.prelude.children.remove(selector.item);
      }
      selector.matchedElements = matchedElements;
    }
    if (removeMatchedSelectors === false) {
      return;
    }
    for (const selector of sortedSelectors) {
      if (selector.matchedElements == null) {
        continue;
      }
      if (onlyMatchedOnce && selector.matchedElements.length > 1) {
        continue;
      }
      for (const selectedEl of selector.matchedElements) {
        const classList = new Set(selectedEl.attributes.class == null ? null : selectedEl.attributes.class.split(" "));
        const firstSubSelector = selector.node.children.first();
        if (firstSubSelector != null && firstSubSelector.type === "ClassSelector") {
          classList.delete(firstSubSelector.name);
        }
        if (classList.size === 0) {
          delete selectedEl.attributes.class;
        } else {
          selectedEl.attributes.class = Array.from(classList).join(" ");
        }
        if (firstSubSelector != null && firstSubSelector.type === "IdSelector") {
          if (selectedEl.attributes.id === firstSubSelector.name) {
            delete selectedEl.attributes.id;
          }
        }
      }
    }
    for (const style2 of styles) {
      csstree$3.walk(style2.cssAst, { visit: "Rule", enter: function(node2, item, list) {
        if (node2.type === "Rule" && node2.prelude.type === "SelectorList" && node2.prelude.children.isEmpty()) {
          list.remove(item);
        }
      } });
      if (style2.cssAst.children.isEmpty()) {
        detachNodeFromParent$f(style2.node, style2.parentNode);
      } else {
        const firstChild = style2.node.children[0];
        if (firstChild.type === "text" || firstChild.type === "cdata") {
          firstChild.value = csstree$3.generate(style2.cssAst);
        }
      }
    }
  } } };
};
var minifyStyles$1 = {};
var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
function buildMap(list, caseInsensitive) {
  var map2 = /* @__PURE__ */ Object.create(null);
  if (!Array.isArray(list)) {
    return null;
  }
  for (var i = 0; i < list.length; i++) {
    var name2 = list[i];
    if (caseInsensitive) {
      name2 = name2.toLowerCase();
    }
    map2[name2] = true;
  }
  return map2;
}
function buildList(data) {
  if (!data) {
    return null;
  }
  var tags = buildMap(data.tags, true);
  var ids = buildMap(data.ids);
  var classes = buildMap(data.classes);
  if (tags === null && ids === null && classes === null) {
    return null;
  }
  return { tags, ids, classes };
}
function buildIndex(data) {
  var scopes = false;
  if (data.scopes && Array.isArray(data.scopes)) {
    scopes = /* @__PURE__ */ Object.create(null);
    for (var i = 0; i < data.scopes.length; i++) {
      var list = data.scopes[i];
      if (!list || !Array.isArray(list)) {
        throw new Error("Wrong usage format");
      }
      for (var j = 0; j < list.length; j++) {
        var name2 = list[j];
        if (hasOwnProperty$3.call(scopes, name2)) {
          throw new Error("Class can't be used for several scopes: " + name2);
        }
        scopes[name2] = i + 1;
      }
    }
  }
  return { whitelist: buildList(data), blacklist: buildList(data.blacklist), scopes };
}
var usage = { buildIndex };
var utils$4 = { hasNoChildren: function(node2) {
  return !node2 || !node2.children || node2.children.isEmpty();
}, isNodeChildrenList: function(node2, list) {
  return node2 !== null && node2.children === list;
} };
var resolveKeyword$4 = csstree_min.exports.keyword;
var { hasNoChildren: hasNoChildren$1 } = utils$4;
var Atrule$1 = function cleanAtrule(node2, item, list) {
  if (node2.block) {
    if (this.stylesheet !== null) {
      this.stylesheet.firstAtrulesAllowed = false;
    }
    if (hasNoChildren$1(node2.block)) {
      list.remove(item);
      return;
    }
  }
  switch (node2.name) {
    case "charset":
      if (hasNoChildren$1(node2.prelude)) {
        list.remove(item);
        return;
      }
      if (item.prev) {
        list.remove(item);
        return;
      }
      break;
    case "import":
      if (this.stylesheet === null || !this.stylesheet.firstAtrulesAllowed) {
        list.remove(item);
        return;
      }
      list.prevUntil(item.prev, (function(rule) {
        if (rule.type === "Atrule") {
          if (rule.name === "import" || rule.name === "charset") {
            return;
          }
        }
        this.root.firstAtrulesAllowed = false;
        list.remove(item);
        return true;
      }), this);
      break;
    default:
      var name2 = resolveKeyword$4(node2.name).basename;
      if (name2 === "keyframes" || name2 === "media" || name2 === "supports") {
        if (hasNoChildren$1(node2.prelude) || hasNoChildren$1(node2.block)) {
          list.remove(item);
        }
      }
  }
};
var Comment = function cleanComment(data, item, list) {
  list.remove(item);
};
var property = csstree_min.exports.property;
var Declaration = function cleanDeclartion(node2, item, list) {
  if (node2.value.children && node2.value.children.isEmpty()) {
    list.remove(item);
    return;
  }
  if (property(node2.property).custom) {
    if (/\S/.test(node2.value.value)) {
      node2.value.value = node2.value.value.trim();
    }
  }
};
var { isNodeChildrenList: isNodeChildrenList$1 } = utils$4;
var Raw = function cleanRaw(node2, item, list) {
  if (isNodeChildrenList$1(this.stylesheet, list) || isNodeChildrenList$1(this.block, list)) {
    list.remove(item);
  }
};
var hasOwnProperty$2 = Object.prototype.hasOwnProperty;
var walk$b = csstree_min.exports.walk;
var { hasNoChildren } = utils$4;
function cleanUnused(selectorList, usageData) {
  selectorList.children.each((function(selector, item, list) {
    var shouldRemove = false;
    walk$b(selector, (function(node2) {
      if (this.selector === null || this.selector === selectorList) {
        switch (node2.type) {
          case "SelectorList":
            if (this.function === null || this.function.name.toLowerCase() !== "not") {
              if (cleanUnused(node2, usageData)) {
                shouldRemove = true;
              }
            }
            break;
          case "ClassSelector":
            if (usageData.whitelist !== null && usageData.whitelist.classes !== null && !hasOwnProperty$2.call(usageData.whitelist.classes, node2.name)) {
              shouldRemove = true;
            }
            if (usageData.blacklist !== null && usageData.blacklist.classes !== null && hasOwnProperty$2.call(usageData.blacklist.classes, node2.name)) {
              shouldRemove = true;
            }
            break;
          case "IdSelector":
            if (usageData.whitelist !== null && usageData.whitelist.ids !== null && !hasOwnProperty$2.call(usageData.whitelist.ids, node2.name)) {
              shouldRemove = true;
            }
            if (usageData.blacklist !== null && usageData.blacklist.ids !== null && hasOwnProperty$2.call(usageData.blacklist.ids, node2.name)) {
              shouldRemove = true;
            }
            break;
          case "TypeSelector":
            if (node2.name.charAt(node2.name.length - 1) !== "*") {
              if (usageData.whitelist !== null && usageData.whitelist.tags !== null && !hasOwnProperty$2.call(usageData.whitelist.tags, node2.name.toLowerCase())) {
                shouldRemove = true;
              }
              if (usageData.blacklist !== null && usageData.blacklist.tags !== null && hasOwnProperty$2.call(usageData.blacklist.tags, node2.name.toLowerCase())) {
                shouldRemove = true;
              }
            }
            break;
        }
      }
    }));
    if (shouldRemove) {
      list.remove(item);
    }
  }));
  return selectorList.children.isEmpty();
}
var Rule = function cleanRule(node2, item, list, options) {
  if (hasNoChildren(node2.prelude) || hasNoChildren(node2.block)) {
    list.remove(item);
    return;
  }
  var usageData = options.usage;
  if (usageData && (usageData.whitelist !== null || usageData.blacklist !== null)) {
    cleanUnused(node2.prelude, usageData);
    if (hasNoChildren(node2.prelude)) {
      list.remove(item);
      return;
    }
  }
};
var TypeSelector = function cleanTypeSelector(node2, item, list) {
  var name2 = item.data.name;
  if (name2 !== "*") {
    return;
  }
  var nextType = item.next && item.next.data.type;
  if (nextType === "IdSelector" || nextType === "ClassSelector" || nextType === "AttributeSelector" || nextType === "PseudoClassSelector" || nextType === "PseudoElementSelector") {
    list.remove(item);
  }
};
var { isNodeChildrenList } = utils$4;
function isSafeOperator(node2) {
  return node2.type === "Operator" && node2.value !== "+" && node2.value !== "-";
}
var WhiteSpace = function cleanWhitespace(node2, item, list) {
  if (item.next === null || item.prev === null) {
    list.remove(item);
    return;
  }
  if (isNodeChildrenList(this.stylesheet, list) || isNodeChildrenList(this.block, list)) {
    list.remove(item);
    return;
  }
  if (item.next.data.type === "WhiteSpace") {
    list.remove(item);
    return;
  }
  if (isSafeOperator(item.prev.data) || isSafeOperator(item.next.data)) {
    list.remove(item);
    return;
  }
};
var walk$a = csstree_min.exports.walk;
var handlers$2 = { Atrule: Atrule$1, Comment, Declaration, Raw, Rule, TypeSelector, WhiteSpace };
var clean$1 = function(ast2, options) {
  walk$a(ast2, { leave: function(node2, item, list) {
    if (handlers$2.hasOwnProperty(node2.type)) {
      handlers$2[node2.type].call(this, node2, item, list, options);
    }
  } });
};
var keyframes = function(node2) {
  node2.block.children.each((function(rule) {
    rule.prelude.children.each((function(simpleselector) {
      simpleselector.children.each((function(data, item) {
        if (data.type === "Percentage" && data.value === "100") {
          item.data = { type: "TypeSelector", loc: data.loc, name: "to" };
        } else if (data.type === "TypeSelector" && data.name === "from") {
          item.data = { type: "Percentage", loc: data.loc, value: "0" };
        }
      }));
    }));
  }));
};
var resolveKeyword$3 = csstree_min.exports.keyword;
var compressKeyframes = keyframes;
var Atrule = function(node2) {
  if (resolveKeyword$3(node2.name).basename === "keyframes") {
    compressKeyframes(node2);
  }
};
var escapesRx = /\\([0-9A-Fa-f]{1,6})(\r\n|[ \t\n\f\r])?|\\./g;
var blockUnquoteRx = /^(-?\d|--)|[\u0000-\u002c\u002e\u002f\u003A-\u0040\u005B-\u005E\u0060\u007B-\u009f]/;
function canUnquote(value) {
  if (value === "" || value === "-") {
    return;
  }
  value = value.replace(escapesRx, "a");
  return !blockUnquoteRx.test(value);
}
var AttributeSelector = function(node2) {
  var attrValue = node2.value;
  if (!attrValue || attrValue.type !== "String") {
    return;
  }
  var unquotedValue = attrValue.value.replace(/^(.)(.*)\1$/, "$2");
  if (canUnquote(unquotedValue)) {
    node2.value = { type: "Identifier", loc: attrValue.loc, name: unquotedValue };
  }
};
var font = function compressFont(node2) {
  var list = node2.children;
  list.eachRight((function(node3, item) {
    if (node3.type === "Identifier") {
      if (node3.name === "bold") {
        item.data = { type: "Number", loc: node3.loc, value: "700" };
      } else if (node3.name === "normal") {
        var prev = item.prev;
        if (prev && prev.data.type === "Operator" && prev.data.value === "/") {
          this.remove(prev);
        }
        this.remove(item);
      } else if (node3.name === "medium") {
        var next = item.next;
        if (!next || next.data.type !== "Operator") {
          this.remove(item);
        }
      }
    }
  }));
  list.each((function(node3, item) {
    if (node3.type === "WhiteSpace") {
      if (!item.prev || !item.next || item.next.data.type === "WhiteSpace") {
        this.remove(item);
      }
    }
  }));
  if (list.isEmpty()) {
    list.insert(list.createItem({ type: "Identifier", name: "normal" }));
  }
};
var fontWeight = function compressFontWeight(node2) {
  var value = node2.children.head.data;
  if (value.type === "Identifier") {
    switch (value.name) {
      case "normal":
        node2.children.head.data = { type: "Number", loc: value.loc, value: "400" };
        break;
      case "bold":
        node2.children.head.data = { type: "Number", loc: value.loc, value: "700" };
        break;
    }
  }
};
var List$5 = csstree_min.exports.List;
var background = function compressBackground(node2) {
  function lastType() {
    if (buffer.length) {
      return buffer[buffer.length - 1].type;
    }
  }
  function flush() {
    if (lastType() === "WhiteSpace") {
      buffer.pop();
    }
    if (!buffer.length) {
      buffer.unshift({ type: "Number", loc: null, value: "0" }, { type: "WhiteSpace", value: " " }, { type: "Number", loc: null, value: "0" });
    }
    newValue.push.apply(newValue, buffer);
    buffer = [];
  }
  var newValue = [];
  var buffer = [];
  node2.children.each((function(node3) {
    if (node3.type === "Operator" && node3.value === ",") {
      flush();
      newValue.push(node3);
      return;
    }
    if (node3.type === "Identifier") {
      if (node3.name === "transparent" || node3.name === "none" || node3.name === "repeat" || node3.name === "scroll") {
        return;
      }
    }
    if (node3.type === "WhiteSpace" && (!buffer.length || lastType() === "WhiteSpace")) {
      return;
    }
    buffer.push(node3);
  }));
  flush();
  node2.children = new List$5().fromArray(newValue);
};
function removeItemAndRedundantWhiteSpace(list, item) {
  var prev = item.prev;
  var next = item.next;
  if (next !== null) {
    if (next.data.type === "WhiteSpace" && (prev === null || prev.data.type === "WhiteSpace")) {
      list.remove(next);
    }
  } else if (prev !== null && prev.data.type === "WhiteSpace") {
    list.remove(prev);
  }
  list.remove(item);
}
var border = function compressBorder(node2) {
  node2.children.each((function(node3, item, list) {
    if (node3.type === "Identifier" && node3.name.toLowerCase() === "none") {
      if (list.head === list.tail) {
        item.data = { type: "Number", loc: node3.loc, value: "0" };
      } else {
        removeItemAndRedundantWhiteSpace(list, item);
      }
    }
  }));
};
var resolveName = csstree_min.exports.property;
var handlers$1 = { font, "font-weight": fontWeight, background, border, outline: border };
var Value = function compressValue(node2) {
  if (!this.declaration) {
    return;
  }
  var property2 = resolveName(this.declaration.property);
  if (handlers$1.hasOwnProperty(property2.basename)) {
    handlers$1[property2.basename](node2);
  }
};
var _Number = { exports: {} };
var OMIT_PLUSSIGN = /^(?:\+|(-))?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
var KEEP_PLUSSIGN = /^([\+\-])?0*(\d*)(?:\.0*|(\.\d*?)0*)?$/;
var unsafeToRemovePlusSignAfter = { Dimension: true, Hash: true, Identifier: true, Number: true, Raw: true, UnicodeRange: true };
function packNumber$3(value, item) {
  var regexp = item && item.prev !== null && unsafeToRemovePlusSignAfter.hasOwnProperty(item.prev.data.type) ? KEEP_PLUSSIGN : OMIT_PLUSSIGN;
  value = String(value).replace(regexp, "$1$2$3");
  if (value === "" || value === "-") {
    value = "0";
  }
  return value;
}
_Number.exports = function(node2, item) {
  node2.value = packNumber$3(node2.value, item);
};
_Number.exports.pack = packNumber$3;
var packNumber$2 = _Number.exports.pack;
var MATH_FUNCTIONS = { calc: true, min: true, max: true, clamp: true };
var LENGTH_UNIT = { px: true, mm: true, cm: true, in: true, pt: true, pc: true, em: true, ex: true, ch: true, rem: true, vh: true, vw: true, vmin: true, vmax: true, vm: true };
var Dimension = function compressDimension(node2, item) {
  var value = packNumber$2(node2.value, item);
  node2.value = value;
  if (value === "0" && this.declaration !== null && this.atrulePrelude === null) {
    var unit = node2.unit.toLowerCase();
    if (!LENGTH_UNIT.hasOwnProperty(unit)) {
      return;
    }
    if (this.declaration.property === "-ms-flex" || this.declaration.property === "flex") {
      return;
    }
    if (this.function && MATH_FUNCTIONS.hasOwnProperty(this.function.name)) {
      return;
    }
    item.data = { type: "Number", loc: node2.loc, value };
  }
};
var lexer$1 = csstree_min.exports.lexer;
var packNumber$1 = _Number.exports.pack;
var blacklist = /* @__PURE__ */ new Set(["width", "min-width", "max-width", "height", "min-height", "max-height", "flex", "-ms-flex"]);
var Percentage = function compressPercentage(node2, item) {
  node2.value = packNumber$1(node2.value, item);
  if (node2.value === "0" && this.declaration && !blacklist.has(this.declaration.property)) {
    item.data = { type: "Number", loc: node2.loc, value: node2.value };
    if (!lexer$1.matchDeclaration(this.declaration).isType(item.data, "length")) {
      item.data = node2;
    }
  }
};
var _String = function(node2) {
  var value = node2.value;
  value = value.replace(/\\(\r\n|\r|\n|\f)/g, "");
  node2.value = value;
};
var UNICODE = "\\\\[0-9a-f]{1,6}(\\r\\n|[ \\n\\r\\t\\f])?";
var ESCAPE = "(" + UNICODE + "|\\\\[^\\n\\r\\f0-9a-fA-F])";
var NONPRINTABLE = "\0\b\v-\x7F";
var SAFE_URL = new RegExp("^(" + ESCAPE + `|[^"'\\(\\)\\\\\\s` + NONPRINTABLE + "])*$", "i");
var Url = function(node2) {
  var value = node2.value;
  if (value.type !== "String") {
    return;
  }
  var quote = value.value[0];
  var url = value.value.substr(1, value.value.length - 2);
  url = url.replace(/\\\\/g, "/");
  if (SAFE_URL.test(url)) {
    node2.value = { type: "Raw", loc: node2.value.loc, value: url };
  } else {
    node2.value.value = url.indexOf('"') === -1 ? '"' + url + '"' : quote + url + quote;
  }
};
var lexer = csstree_min.exports.lexer;
var packNumber = _Number.exports.pack;
var NAME_TO_HEX = { aliceblue: "f0f8ff", antiquewhite: "faebd7", aqua: "0ff", aquamarine: "7fffd4", azure: "f0ffff", beige: "f5f5dc", bisque: "ffe4c4", black: "000", blanchedalmond: "ffebcd", blue: "00f", blueviolet: "8a2be2", brown: "a52a2a", burlywood: "deb887", cadetblue: "5f9ea0", chartreuse: "7fff00", chocolate: "d2691e", coral: "ff7f50", cornflowerblue: "6495ed", cornsilk: "fff8dc", crimson: "dc143c", cyan: "0ff", darkblue: "00008b", darkcyan: "008b8b", darkgoldenrod: "b8860b", darkgray: "a9a9a9", darkgrey: "a9a9a9", darkgreen: "006400", darkkhaki: "bdb76b", darkmagenta: "8b008b", darkolivegreen: "556b2f", darkorange: "ff8c00", darkorchid: "9932cc", darkred: "8b0000", darksalmon: "e9967a", darkseagreen: "8fbc8f", darkslateblue: "483d8b", darkslategray: "2f4f4f", darkslategrey: "2f4f4f", darkturquoise: "00ced1", darkviolet: "9400d3", deeppink: "ff1493", deepskyblue: "00bfff", dimgray: "696969", dimgrey: "696969", dodgerblue: "1e90ff", firebrick: "b22222", floralwhite: "fffaf0", forestgreen: "228b22", fuchsia: "f0f", gainsboro: "dcdcdc", ghostwhite: "f8f8ff", gold: "ffd700", goldenrod: "daa520", gray: "808080", grey: "808080", green: "008000", greenyellow: "adff2f", honeydew: "f0fff0", hotpink: "ff69b4", indianred: "cd5c5c", indigo: "4b0082", ivory: "fffff0", khaki: "f0e68c", lavender: "e6e6fa", lavenderblush: "fff0f5", lawngreen: "7cfc00", lemonchiffon: "fffacd", lightblue: "add8e6", lightcoral: "f08080", lightcyan: "e0ffff", lightgoldenrodyellow: "fafad2", lightgray: "d3d3d3", lightgrey: "d3d3d3", lightgreen: "90ee90", lightpink: "ffb6c1", lightsalmon: "ffa07a", lightseagreen: "20b2aa", lightskyblue: "87cefa", lightslategray: "789", lightslategrey: "789", lightsteelblue: "b0c4de", lightyellow: "ffffe0", lime: "0f0", limegreen: "32cd32", linen: "faf0e6", magenta: "f0f", maroon: "800000", mediumaquamarine: "66cdaa", mediumblue: "0000cd", mediumorchid: "ba55d3", mediumpurple: "9370db", mediumseagreen: "3cb371", mediumslateblue: "7b68ee", mediumspringgreen: "00fa9a", mediumturquoise: "48d1cc", mediumvioletred: "c71585", midnightblue: "191970", mintcream: "f5fffa", mistyrose: "ffe4e1", moccasin: "ffe4b5", navajowhite: "ffdead", navy: "000080", oldlace: "fdf5e6", olive: "808000", olivedrab: "6b8e23", orange: "ffa500", orangered: "ff4500", orchid: "da70d6", palegoldenrod: "eee8aa", palegreen: "98fb98", paleturquoise: "afeeee", palevioletred: "db7093", papayawhip: "ffefd5", peachpuff: "ffdab9", peru: "cd853f", pink: "ffc0cb", plum: "dda0dd", powderblue: "b0e0e6", purple: "800080", rebeccapurple: "639", red: "f00", rosybrown: "bc8f8f", royalblue: "4169e1", saddlebrown: "8b4513", salmon: "fa8072", sandybrown: "f4a460", seagreen: "2e8b57", seashell: "fff5ee", sienna: "a0522d", silver: "c0c0c0", skyblue: "87ceeb", slateblue: "6a5acd", slategray: "708090", slategrey: "708090", snow: "fffafa", springgreen: "00ff7f", steelblue: "4682b4", tan: "d2b48c", teal: "008080", thistle: "d8bfd8", tomato: "ff6347", turquoise: "40e0d0", violet: "ee82ee", wheat: "f5deb3", white: "fff", whitesmoke: "f5f5f5", yellow: "ff0", yellowgreen: "9acd32" };
var HEX_TO_NAME = { 8e5: "maroon", 800080: "purple", 808e3: "olive", 808080: "gray", "00ffff": "cyan", f0ffff: "azure", f5f5dc: "beige", ffe4c4: "bisque", "000000": "black", "0000ff": "blue", a52a2a: "brown", ff7f50: "coral", ffd700: "gold", "008000": "green", "4b0082": "indigo", fffff0: "ivory", f0e68c: "khaki", "00ff00": "lime", faf0e6: "linen", "000080": "navy", ffa500: "orange", da70d6: "orchid", cd853f: "peru", ffc0cb: "pink", dda0dd: "plum", f00: "red", ff0000: "red", fa8072: "salmon", a0522d: "sienna", c0c0c0: "silver", fffafa: "snow", d2b48c: "tan", "008080": "teal", ff6347: "tomato", ee82ee: "violet", f5deb3: "wheat", ffffff: "white", ffff00: "yellow" };
function hueToRgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l, a) {
  var r;
  var g2;
  var b;
  if (s === 0) {
    r = g2 = b = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g2 = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }
  return [Math.round(r * 255), Math.round(g2 * 255), Math.round(b * 255), a];
}
function toHex(value) {
  value = value.toString(16);
  return value.length === 1 ? "0" + value : value;
}
function parseFunctionArgs(functionArgs, count, rgb) {
  var cursor = functionArgs.head;
  var args = [];
  var wasValue = false;
  while (cursor !== null) {
    var node2 = cursor.data;
    var type = node2.type;
    switch (type) {
      case "Number":
      case "Percentage":
        if (wasValue) {
          return;
        }
        wasValue = true;
        args.push({ type, value: Number(node2.value) });
        break;
      case "Operator":
        if (node2.value === ",") {
          if (!wasValue) {
            return;
          }
          wasValue = false;
        } else if (wasValue || node2.value !== "+") {
          return;
        }
        break;
      default:
        return;
    }
    cursor = cursor.next;
  }
  if (args.length !== count) {
    return;
  }
  if (args.length === 4) {
    if (args[3].type !== "Number") {
      return;
    }
    args[3].type = "Alpha";
  }
  if (rgb) {
    if (args[0].type !== args[1].type || args[0].type !== args[2].type) {
      return;
    }
  } else {
    if (args[0].type !== "Number" || args[1].type !== "Percentage" || args[2].type !== "Percentage") {
      return;
    }
    args[0].type = "Angle";
  }
  return args.map((function(arg) {
    var value = Math.max(0, arg.value);
    switch (arg.type) {
      case "Number":
        value = Math.min(value, 255);
        break;
      case "Percentage":
        value = Math.min(value, 100) / 100;
        if (!rgb) {
          return value;
        }
        value = 255 * value;
        break;
      case "Angle":
        return (value % 360 + 360) % 360 / 360;
      case "Alpha":
        return Math.min(value, 1);
    }
    return Math.round(value);
  }));
}
function compressFunction(node2, item, list) {
  var functionName = node2.name;
  var args;
  if (functionName === "rgba" || functionName === "hsla") {
    args = parseFunctionArgs(node2.children, 4, functionName === "rgba");
    if (!args) {
      return;
    }
    if (functionName === "hsla") {
      args = hslToRgb.apply(null, args);
      node2.name = "rgba";
    }
    if (args[3] === 0) {
      var scopeFunctionName = this.function && this.function.name;
      if (args[0] === 0 && args[1] === 0 && args[2] === 0 || !/^(?:to|from|color-stop)$|gradient$/i.test(scopeFunctionName)) {
        item.data = { type: "Identifier", loc: node2.loc, name: "transparent" };
        return;
      }
    }
    if (args[3] !== 1) {
      node2.children.each((function(node3, item2, list2) {
        if (node3.type === "Operator") {
          if (node3.value !== ",") {
            list2.remove(item2);
          }
          return;
        }
        item2.data = { type: "Number", loc: node3.loc, value: packNumber(args.shift(), null) };
      }));
      return;
    }
    functionName = "rgb";
  }
  if (functionName === "hsl") {
    args = args || parseFunctionArgs(node2.children, 3, false);
    if (!args) {
      return;
    }
    args = hslToRgb.apply(null, args);
    functionName = "rgb";
  }
  if (functionName === "rgb") {
    args = args || parseFunctionArgs(node2.children, 3, true);
    if (!args) {
      return;
    }
    var next = item.next;
    if (next && next.data.type !== "WhiteSpace") {
      list.insert(list.createItem({ type: "WhiteSpace", value: " " }), next);
    }
    item.data = { type: "Hash", loc: node2.loc, value: toHex(args[0]) + toHex(args[1]) + toHex(args[2]) };
    compressHex(item.data, item);
  }
}
function compressIdent(node2, item) {
  if (this.declaration === null) {
    return;
  }
  var color2 = node2.name.toLowerCase();
  if (NAME_TO_HEX.hasOwnProperty(color2) && lexer.matchDeclaration(this.declaration).isType(node2, "color")) {
    var hex = NAME_TO_HEX[color2];
    if (hex.length + 1 <= color2.length) {
      item.data = { type: "Hash", loc: node2.loc, value: hex };
    } else {
      if (color2 === "grey") {
        color2 = "gray";
      }
      node2.name = color2;
    }
  }
}
function compressHex(node2, item) {
  var color2 = node2.value.toLowerCase();
  if (color2.length === 6 && color2[0] === color2[1] && color2[2] === color2[3] && color2[4] === color2[5]) {
    color2 = color2[0] + color2[2] + color2[4];
  }
  if (HEX_TO_NAME[color2]) {
    item.data = { type: "Identifier", loc: node2.loc, name: HEX_TO_NAME[color2] };
  } else {
    node2.value = color2;
  }
}
var color = { compressFunction, compressIdent, compressHex };
var walk$9 = csstree_min.exports.walk;
var handlers = { Atrule, AttributeSelector, Value, Dimension, Percentage, Number: _Number.exports, String: _String, Url, Hash: color.compressHex, Identifier: color.compressIdent, Function: color.compressFunction };
var replace$1 = function(ast2) {
  walk$9(ast2, { leave: function(node2, item, list) {
    if (handlers.hasOwnProperty(node2.type)) {
      handlers[node2.type].call(this, node2, item, list);
    }
  } });
};
var generate$5 = csstree_min.exports.generate;
function Index() {
  this.seed = 0;
  this.map = /* @__PURE__ */ Object.create(null);
}
Index.prototype.resolve = function(str) {
  var index = this.map[str];
  if (!index) {
    index = ++this.seed;
    this.map[str] = index;
  }
  return index;
};
var createDeclarationIndexer$1 = function createDeclarationIndexer() {
  var ids = new Index();
  return function markDeclaration(node2) {
    var id = generate$5(node2);
    node2.id = ids.resolve(id);
    node2.length = id.length;
    node2.fingerprint = null;
    return node2;
  };
};
var generate$4 = csstree_min.exports.generate;
var specificity$1 = specificity$4;
var nonFreezePseudoElements = { "first-letter": true, "first-line": true, after: true, before: true };
var nonFreezePseudoClasses = { link: true, visited: true, hover: true, active: true, "first-letter": true, "first-line": true, after: true, before: true };
var processSelector$1 = function freeze(node2, usageData) {
  var pseudos2 = /* @__PURE__ */ Object.create(null);
  var hasPseudo = false;
  node2.prelude.children.each((function(simpleSelector) {
    var tagName = "*";
    var scope = 0;
    simpleSelector.children.each((function(node3) {
      switch (node3.type) {
        case "ClassSelector":
          if (usageData && usageData.scopes) {
            var classScope = usageData.scopes[node3.name] || 0;
            if (scope !== 0 && classScope !== scope) {
              throw new Error("Selector can't has classes from different scopes: " + generate$4(simpleSelector));
            }
            scope = classScope;
          }
          break;
        case "PseudoClassSelector":
          var name2 = node3.name.toLowerCase();
          if (!nonFreezePseudoClasses.hasOwnProperty(name2)) {
            pseudos2[":" + name2] = true;
            hasPseudo = true;
          }
          break;
        case "PseudoElementSelector":
          var name2 = node3.name.toLowerCase();
          if (!nonFreezePseudoElements.hasOwnProperty(name2)) {
            pseudos2["::" + name2] = true;
            hasPseudo = true;
          }
          break;
        case "TypeSelector":
          tagName = node3.name.toLowerCase();
          break;
        case "AttributeSelector":
          if (node3.flags) {
            pseudos2["[" + node3.flags.toLowerCase() + "]"] = true;
            hasPseudo = true;
          }
          break;
        case "WhiteSpace":
        case "Combinator":
          tagName = "*";
          break;
      }
    }));
    simpleSelector.compareMarker = specificity$1(simpleSelector).toString();
    simpleSelector.id = null;
    simpleSelector.id = generate$4(simpleSelector);
    if (scope) {
      simpleSelector.compareMarker += ":" + scope;
    }
    if (tagName !== "*") {
      simpleSelector.compareMarker += "," + tagName;
    }
  }));
  node2.pseudoSignature = hasPseudo && Object.keys(pseudos2).sort().join(",");
};
var resolveKeyword$2 = csstree_min.exports.keyword;
var walk$8 = csstree_min.exports.walk;
var generate$3 = csstree_min.exports.generate;
var createDeclarationIndexer2 = createDeclarationIndexer$1;
var processSelector = processSelector$1;
var prepare$1 = function prepare(ast2, options) {
  var markDeclaration = createDeclarationIndexer2();
  walk$8(ast2, { visit: "Rule", enter: function processRule2(node2) {
    node2.block.children.each(markDeclaration);
    processSelector(node2, options.usage);
  } });
  walk$8(ast2, { visit: "Atrule", enter: function(node2) {
    if (node2.prelude) {
      node2.prelude.id = null;
      node2.prelude.id = generate$3(node2.prelude);
    }
    if (resolveKeyword$2(node2.name).basename === "keyframes") {
      node2.block.avoidRulesMerge = true;
      node2.block.children.each((function(rule) {
        rule.prelude.children.each((function(simpleselector) {
          simpleselector.compareMarker = simpleselector.id;
        }));
      }));
    }
  } });
  return { declaration: markDeclaration };
};
var List$4 = csstree_min.exports.List;
var resolveKeyword$1 = csstree_min.exports.keyword;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var walk$7 = csstree_min.exports.walk;
function addRuleToMap(map2, item, list, single) {
  var node2 = item.data;
  var name2 = resolveKeyword$1(node2.name).basename;
  var id = node2.name.toLowerCase() + "/" + (node2.prelude ? node2.prelude.id : null);
  if (!hasOwnProperty$1.call(map2, name2)) {
    map2[name2] = /* @__PURE__ */ Object.create(null);
  }
  if (single) {
    delete map2[name2][id];
  }
  if (!hasOwnProperty$1.call(map2[name2], id)) {
    map2[name2][id] = new List$4();
  }
  map2[name2][id].append(list.remove(item));
}
function relocateAtrules(ast2, options) {
  var collected = /* @__PURE__ */ Object.create(null);
  var topInjectPoint = null;
  ast2.children.each((function(node2, item, list) {
    if (node2.type === "Atrule") {
      var name2 = resolveKeyword$1(node2.name).basename;
      switch (name2) {
        case "keyframes":
          addRuleToMap(collected, item, list, true);
          return;
        case "media":
          if (options.forceMediaMerge) {
            addRuleToMap(collected, item, list, false);
            return;
          }
          break;
      }
      if (topInjectPoint === null && name2 !== "charset" && name2 !== "import") {
        topInjectPoint = item;
      }
    } else {
      if (topInjectPoint === null) {
        topInjectPoint = item;
      }
    }
  }));
  for (var atrule in collected) {
    for (var id in collected[atrule]) {
      ast2.children.insertList(collected[atrule][id], atrule === "media" ? null : topInjectPoint);
    }
  }
}
function isMediaRule(node2) {
  return node2.type === "Atrule" && node2.name === "media";
}
function processAtrule(node2, item, list) {
  if (!isMediaRule(node2)) {
    return;
  }
  var prev = item.prev && item.prev.data;
  if (!prev || !isMediaRule(prev)) {
    return;
  }
  if (node2.prelude && prev.prelude && node2.prelude.id === prev.prelude.id) {
    prev.block.children.appendList(node2.block.children);
    list.remove(item);
  }
}
var _1MergeAtrule = function rejoinAtrule(ast2, options) {
  relocateAtrules(ast2, options);
  walk$7(ast2, { visit: "Atrule", reverse: true, enter: processAtrule });
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
function isEqualSelectors(a, b) {
  var cursor1 = a.head;
  var cursor2 = b.head;
  while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
    cursor1 = cursor1.next;
    cursor2 = cursor2.next;
  }
  return cursor1 === null && cursor2 === null;
}
function isEqualDeclarations(a, b) {
  var cursor1 = a.head;
  var cursor2 = b.head;
  while (cursor1 !== null && cursor2 !== null && cursor1.data.id === cursor2.data.id) {
    cursor1 = cursor1.next;
    cursor2 = cursor2.next;
  }
  return cursor1 === null && cursor2 === null;
}
function compareDeclarations(declarations1, declarations2) {
  var result = { eq: [], ne1: [], ne2: [], ne2overrided: [] };
  var fingerprints = /* @__PURE__ */ Object.create(null);
  var declarations2hash = /* @__PURE__ */ Object.create(null);
  for (var cursor = declarations2.head; cursor; cursor = cursor.next) {
    declarations2hash[cursor.data.id] = true;
  }
  for (var cursor = declarations1.head; cursor; cursor = cursor.next) {
    var data = cursor.data;
    if (data.fingerprint) {
      fingerprints[data.fingerprint] = data.important;
    }
    if (declarations2hash[data.id]) {
      declarations2hash[data.id] = false;
      result.eq.push(data);
    } else {
      result.ne1.push(data);
    }
  }
  for (var cursor = declarations2.head; cursor; cursor = cursor.next) {
    var data = cursor.data;
    if (declarations2hash[data.id]) {
      if (!hasOwnProperty.call(fingerprints, data.fingerprint) || !fingerprints[data.fingerprint] && data.important) {
        result.ne2.push(data);
      }
      result.ne2overrided.push(data);
    }
  }
  return result;
}
function addSelectors(dest, source) {
  source.each((function(sourceData) {
    var newStr = sourceData.id;
    var cursor = dest.head;
    while (cursor) {
      var nextStr = cursor.data.id;
      if (nextStr === newStr) {
        return;
      }
      if (nextStr > newStr) {
        break;
      }
      cursor = cursor.next;
    }
    dest.insert(dest.createItem(sourceData), cursor);
  }));
  return dest;
}
function hasSimilarSelectors(selectors1, selectors2) {
  var cursor1 = selectors1.head;
  while (cursor1 !== null) {
    var cursor2 = selectors2.head;
    while (cursor2 !== null) {
      if (cursor1.data.compareMarker === cursor2.data.compareMarker) {
        return true;
      }
      cursor2 = cursor2.next;
    }
    cursor1 = cursor1.next;
  }
  return false;
}
function unsafeToSkipNode(node2) {
  switch (node2.type) {
    case "Rule":
      return hasSimilarSelectors(node2.prelude.children, this);
    case "Atrule":
      if (node2.block) {
        return node2.block.children.some(unsafeToSkipNode, this);
      }
      break;
    case "Declaration":
      return false;
  }
  return true;
}
var utils$3 = { isEqualSelectors, isEqualDeclarations, compareDeclarations, addSelectors, hasSimilarSelectors, unsafeToSkipNode };
var walk$6 = csstree_min.exports.walk;
var utils$2 = utils$3;
function processRule$5(node2, item, list) {
  var selectors = node2.prelude.children;
  var declarations = node2.block.children;
  list.prevUntil(item.prev, (function(prev) {
    if (prev.type !== "Rule") {
      return utils$2.unsafeToSkipNode.call(selectors, prev);
    }
    var prevSelectors = prev.prelude.children;
    var prevDeclarations = prev.block.children;
    if (node2.pseudoSignature === prev.pseudoSignature) {
      if (utils$2.isEqualSelectors(prevSelectors, selectors)) {
        prevDeclarations.appendList(declarations);
        list.remove(item);
        return true;
      }
      if (utils$2.isEqualDeclarations(declarations, prevDeclarations)) {
        utils$2.addSelectors(prevSelectors, selectors);
        list.remove(item);
        return true;
      }
    }
    return utils$2.hasSimilarSelectors(selectors, prevSelectors);
  }));
}
var _2InitialMergeRuleset = function initialMergeRule(ast2) {
  walk$6(ast2, { visit: "Rule", enter: processRule$5 });
};
var List$3 = csstree_min.exports.List;
var walk$5 = csstree_min.exports.walk;
function processRule$4(node2, item, list) {
  var selectors = node2.prelude.children;
  while (selectors.head !== selectors.tail) {
    var newSelectors = new List$3();
    newSelectors.insert(selectors.remove(selectors.head));
    list.insert(list.createItem({ type: "Rule", loc: node2.loc, prelude: { type: "SelectorList", loc: node2.prelude.loc, children: newSelectors }, block: { type: "Block", loc: node2.block.loc, children: node2.block.children.copy() }, pseudoSignature: node2.pseudoSignature }), item);
  }
}
var _3DisjoinRuleset = function disjoinRule(ast2) {
  walk$5(ast2, { visit: "Rule", reverse: true, enter: processRule$4 });
};
var List$2 = csstree_min.exports.List;
var generate$2 = csstree_min.exports.generate;
var walk$4 = csstree_min.exports.walk;
var REPLACE = 1;
var REMOVE = 2;
var TOP = 0;
var RIGHT = 1;
var BOTTOM = 2;
var LEFT = 3;
var SIDES = ["top", "right", "bottom", "left"];
var SIDE = { "margin-top": "top", "margin-right": "right", "margin-bottom": "bottom", "margin-left": "left", "padding-top": "top", "padding-right": "right", "padding-bottom": "bottom", "padding-left": "left", "border-top-color": "top", "border-right-color": "right", "border-bottom-color": "bottom", "border-left-color": "left", "border-top-width": "top", "border-right-width": "right", "border-bottom-width": "bottom", "border-left-width": "left", "border-top-style": "top", "border-right-style": "right", "border-bottom-style": "bottom", "border-left-style": "left" };
var MAIN_PROPERTY = { margin: "margin", "margin-top": "margin", "margin-right": "margin", "margin-bottom": "margin", "margin-left": "margin", padding: "padding", "padding-top": "padding", "padding-right": "padding", "padding-bottom": "padding", "padding-left": "padding", "border-color": "border-color", "border-top-color": "border-color", "border-right-color": "border-color", "border-bottom-color": "border-color", "border-left-color": "border-color", "border-width": "border-width", "border-top-width": "border-width", "border-right-width": "border-width", "border-bottom-width": "border-width", "border-left-width": "border-width", "border-style": "border-style", "border-top-style": "border-style", "border-right-style": "border-style", "border-bottom-style": "border-style", "border-left-style": "border-style" };
function TRBL(name2) {
  this.name = name2;
  this.loc = null;
  this.iehack = void 0;
  this.sides = { top: null, right: null, bottom: null, left: null };
}
TRBL.prototype.getValueSequence = function(declaration, count) {
  var values = [];
  var iehack = "";
  var hasBadValues = declaration.value.type !== "Value" || declaration.value.children.some((function(child) {
    var special = false;
    switch (child.type) {
      case "Identifier":
        switch (child.name) {
          case "\\0":
          case "\\9":
            iehack = child.name;
            return;
          case "inherit":
          case "initial":
          case "unset":
          case "revert":
            special = child.name;
            break;
        }
        break;
      case "Dimension":
        switch (child.unit) {
          case "rem":
          case "vw":
          case "vh":
          case "vmin":
          case "vmax":
          case "vm":
            special = child.unit;
            break;
        }
        break;
      case "Hash":
      case "Number":
      case "Percentage":
        break;
      case "Function":
        if (child.name === "var") {
          return true;
        }
        special = child.name;
        break;
      case "WhiteSpace":
        return false;
      default:
        return true;
    }
    values.push({ node: child, special, important: declaration.important });
  }));
  if (hasBadValues || values.length > count) {
    return false;
  }
  if (typeof this.iehack === "string" && this.iehack !== iehack) {
    return false;
  }
  this.iehack = iehack;
  return values;
};
TRBL.prototype.canOverride = function(side, value) {
  var currentValue = this.sides[side];
  return !currentValue || value.important && !currentValue.important;
};
TRBL.prototype.add = function(name2, declaration) {
  function attemptToAdd() {
    var sides = this.sides;
    var side = SIDE[name2];
    if (side) {
      if (side in sides === false) {
        return false;
      }
      var values = this.getValueSequence(declaration, 1);
      if (!values || !values.length) {
        return false;
      }
      for (var key in sides) {
        if (sides[key] !== null && sides[key].special !== values[0].special) {
          return false;
        }
      }
      if (!this.canOverride(side, values[0])) {
        return true;
      }
      sides[side] = values[0];
      return true;
    } else if (name2 === this.name) {
      var values = this.getValueSequence(declaration, 4);
      if (!values || !values.length) {
        return false;
      }
      switch (values.length) {
        case 1:
          values[RIGHT] = values[TOP];
          values[BOTTOM] = values[TOP];
          values[LEFT] = values[TOP];
          break;
        case 2:
          values[BOTTOM] = values[TOP];
          values[LEFT] = values[RIGHT];
          break;
        case 3:
          values[LEFT] = values[RIGHT];
          break;
      }
      for (var i = 0; i < 4; i++) {
        for (var key in sides) {
          if (sides[key] !== null && sides[key].special !== values[i].special) {
            return false;
          }
        }
      }
      for (var i = 0; i < 4; i++) {
        if (this.canOverride(SIDES[i], values[i])) {
          sides[SIDES[i]] = values[i];
        }
      }
      return true;
    }
  }
  if (!attemptToAdd.call(this)) {
    return false;
  }
  if (!this.loc) {
    this.loc = declaration.loc;
  }
  return true;
};
TRBL.prototype.isOkToMinimize = function() {
  var top2 = this.sides.top;
  var right = this.sides.right;
  var bottom2 = this.sides.bottom;
  var left = this.sides.left;
  if (top2 && right && bottom2 && left) {
    var important = top2.important + right.important + bottom2.important + left.important;
    return important === 0 || important === 4;
  }
  return false;
};
TRBL.prototype.getValue = function() {
  var result = new List$2();
  var sides = this.sides;
  var values = [sides.top, sides.right, sides.bottom, sides.left];
  var stringValues = [generate$2(sides.top.node), generate$2(sides.right.node), generate$2(sides.bottom.node), generate$2(sides.left.node)];
  if (stringValues[LEFT] === stringValues[RIGHT]) {
    values.pop();
    if (stringValues[BOTTOM] === stringValues[TOP]) {
      values.pop();
      if (stringValues[RIGHT] === stringValues[TOP]) {
        values.pop();
      }
    }
  }
  for (var i = 0; i < values.length; i++) {
    if (i) {
      result.appendData({ type: "WhiteSpace", value: " " });
    }
    result.appendData(values[i].node);
  }
  if (this.iehack) {
    result.appendData({ type: "WhiteSpace", value: " " });
    result.appendData({ type: "Identifier", loc: null, name: this.iehack });
  }
  return { type: "Value", loc: null, children: result };
};
TRBL.prototype.getDeclaration = function() {
  return { type: "Declaration", loc: this.loc, important: this.sides.top.important, property: this.name, value: this.getValue() };
};
function processRule$3(rule, shorts, shortDeclarations, lastShortSelector) {
  var declarations = rule.block.children;
  var selector = rule.prelude.children.first().id;
  rule.block.children.eachRight((function(declaration, item) {
    var property2 = declaration.property;
    if (!MAIN_PROPERTY.hasOwnProperty(property2)) {
      return;
    }
    var key = MAIN_PROPERTY[property2];
    var shorthand;
    var operation;
    if (!lastShortSelector || selector === lastShortSelector) {
      if (key in shorts) {
        operation = REMOVE;
        shorthand = shorts[key];
      }
    }
    if (!shorthand || !shorthand.add(property2, declaration)) {
      operation = REPLACE;
      shorthand = new TRBL(key);
      if (!shorthand.add(property2, declaration)) {
        lastShortSelector = null;
        return;
      }
    }
    shorts[key] = shorthand;
    shortDeclarations.push({ operation, block: declarations, item, shorthand });
    lastShortSelector = selector;
  }));
  return lastShortSelector;
}
function processShorthands(shortDeclarations, markDeclaration) {
  shortDeclarations.forEach((function(item) {
    var shorthand = item.shorthand;
    if (!shorthand.isOkToMinimize()) {
      return;
    }
    if (item.operation === REPLACE) {
      item.item.data = markDeclaration(shorthand.getDeclaration());
    } else {
      item.block.remove(item.item);
    }
  }));
}
var _4RestructShorthand = function restructBlock(ast2, indexer) {
  var stylesheetMap = {};
  var shortDeclarations = [];
  walk$4(ast2, { visit: "Rule", reverse: true, enter: function(node2) {
    var stylesheet = this.block || this.stylesheet;
    var ruleId = (node2.pseudoSignature || "") + "|" + node2.prelude.children.first().id;
    var ruleMap;
    var shorts;
    if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
      ruleMap = { lastShortSelector: null };
      stylesheetMap[stylesheet.id] = ruleMap;
    } else {
      ruleMap = stylesheetMap[stylesheet.id];
    }
    if (ruleMap.hasOwnProperty(ruleId)) {
      shorts = ruleMap[ruleId];
    } else {
      shorts = {};
      ruleMap[ruleId] = shorts;
    }
    ruleMap.lastShortSelector = processRule$3.call(this, node2, shorts, shortDeclarations, ruleMap.lastShortSelector);
  } });
  processShorthands(shortDeclarations, indexer.declaration);
};
var resolveProperty = csstree_min.exports.property;
var resolveKeyword = csstree_min.exports.keyword;
var walk$3 = csstree_min.exports.walk;
var generate$1 = csstree_min.exports.generate;
var fingerprintId = 1;
var dontRestructure = { src: 1 };
var DONT_MIX_VALUE = { display: /table|ruby|flex|-(flex)?box$|grid|contents|run-in/i, "text-align": /^(start|end|match-parent|justify-all)$/i };
var SAFE_VALUES = { cursor: ["auto", "crosshair", "default", "move", "text", "wait", "help", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "pointer", "progress", "not-allowed", "no-drop", "vertical-text", "all-scroll", "col-resize", "row-resize"], overflow: ["hidden", "visible", "scroll", "auto"], position: ["static", "relative", "absolute", "fixed"] };
var NEEDLESS_TABLE = { "border-width": ["border"], "border-style": ["border"], "border-color": ["border"], "border-top": ["border"], "border-right": ["border"], "border-bottom": ["border"], "border-left": ["border"], "border-top-width": ["border-top", "border-width", "border"], "border-right-width": ["border-right", "border-width", "border"], "border-bottom-width": ["border-bottom", "border-width", "border"], "border-left-width": ["border-left", "border-width", "border"], "border-top-style": ["border-top", "border-style", "border"], "border-right-style": ["border-right", "border-style", "border"], "border-bottom-style": ["border-bottom", "border-style", "border"], "border-left-style": ["border-left", "border-style", "border"], "border-top-color": ["border-top", "border-color", "border"], "border-right-color": ["border-right", "border-color", "border"], "border-bottom-color": ["border-bottom", "border-color", "border"], "border-left-color": ["border-left", "border-color", "border"], "margin-top": ["margin"], "margin-right": ["margin"], "margin-bottom": ["margin"], "margin-left": ["margin"], "padding-top": ["padding"], "padding-right": ["padding"], "padding-bottom": ["padding"], "padding-left": ["padding"], "font-style": ["font"], "font-variant": ["font"], "font-weight": ["font"], "font-size": ["font"], "font-family": ["font"], "list-style-type": ["list-style"], "list-style-position": ["list-style"], "list-style-image": ["list-style"] };
function getPropertyFingerprint(propertyName, declaration, fingerprints) {
  var realName = resolveProperty(propertyName).basename;
  if (realName === "background") {
    return propertyName + ":" + generate$1(declaration.value);
  }
  var declarationId = declaration.id;
  var fingerprint = fingerprints[declarationId];
  if (!fingerprint) {
    switch (declaration.value.type) {
      case "Value":
        var vendorId = "";
        var iehack = "";
        var special = {};
        var raw = false;
        declaration.value.children.each((function walk2(node2) {
          switch (node2.type) {
            case "Value":
            case "Brackets":
            case "Parentheses":
              node2.children.each(walk2);
              break;
            case "Raw":
              raw = true;
              break;
            case "Identifier":
              var name2 = node2.name;
              if (!vendorId) {
                vendorId = resolveKeyword(name2).vendor;
              }
              if (/\\[09]/.test(name2)) {
                iehack = RegExp.lastMatch;
              }
              if (SAFE_VALUES.hasOwnProperty(realName)) {
                if (SAFE_VALUES[realName].indexOf(name2) === -1) {
                  special[name2] = true;
                }
              } else if (DONT_MIX_VALUE.hasOwnProperty(realName)) {
                if (DONT_MIX_VALUE[realName].test(name2)) {
                  special[name2] = true;
                }
              }
              break;
            case "Function":
              var name2 = node2.name;
              if (!vendorId) {
                vendorId = resolveKeyword(name2).vendor;
              }
              if (name2 === "rect") {
                var hasComma = node2.children.some((function(node3) {
                  return node3.type === "Operator" && node3.value === ",";
                }));
                if (!hasComma) {
                  name2 = "rect-backward";
                }
              }
              special[name2 + "()"] = true;
              node2.children.each(walk2);
              break;
            case "Dimension":
              var unit = node2.unit;
              if (/\\[09]/.test(unit)) {
                iehack = RegExp.lastMatch;
              }
              switch (unit) {
                case "rem":
                case "vw":
                case "vh":
                case "vmin":
                case "vmax":
                case "vm":
                  special[unit] = true;
                  break;
              }
              break;
          }
        }));
        fingerprint = raw ? "!" + fingerprintId++ : "!" + Object.keys(special).sort() + "|" + iehack + vendorId;
        break;
      case "Raw":
        fingerprint = "!" + declaration.value.value;
        break;
      default:
        fingerprint = generate$1(declaration.value);
    }
    fingerprints[declarationId] = fingerprint;
  }
  return propertyName + fingerprint;
}
function needless(props, declaration, fingerprints) {
  var property2 = resolveProperty(declaration.property);
  if (NEEDLESS_TABLE.hasOwnProperty(property2.basename)) {
    var table = NEEDLESS_TABLE[property2.basename];
    for (var i = 0; i < table.length; i++) {
      var ppre = getPropertyFingerprint(property2.prefix + table[i], declaration, fingerprints);
      var prev = props.hasOwnProperty(ppre) ? props[ppre] : null;
      if (prev && (!declaration.important || prev.item.data.important)) {
        return prev;
      }
    }
  }
}
function processRule$2(rule, item, list, props, fingerprints) {
  var declarations = rule.block.children;
  declarations.eachRight((function(declaration, declarationItem) {
    var property2 = declaration.property;
    var fingerprint = getPropertyFingerprint(property2, declaration, fingerprints);
    var prev = props[fingerprint];
    if (prev && !dontRestructure.hasOwnProperty(property2)) {
      if (declaration.important && !prev.item.data.important) {
        props[fingerprint] = { block: declarations, item: declarationItem };
        prev.block.remove(prev.item);
      } else {
        declarations.remove(declarationItem);
      }
    } else {
      var prev = needless(props, declaration, fingerprints);
      if (prev) {
        declarations.remove(declarationItem);
      } else {
        declaration.fingerprint = fingerprint;
        props[fingerprint] = { block: declarations, item: declarationItem };
      }
    }
  }));
  if (declarations.isEmpty()) {
    list.remove(item);
  }
}
var _6RestructBlock = function restructBlock2(ast2) {
  var stylesheetMap = {};
  var fingerprints = /* @__PURE__ */ Object.create(null);
  walk$3(ast2, { visit: "Rule", reverse: true, enter: function(node2, item, list) {
    var stylesheet = this.block || this.stylesheet;
    var ruleId = (node2.pseudoSignature || "") + "|" + node2.prelude.children.first().id;
    var ruleMap;
    var props;
    if (!stylesheetMap.hasOwnProperty(stylesheet.id)) {
      ruleMap = {};
      stylesheetMap[stylesheet.id] = ruleMap;
    } else {
      ruleMap = stylesheetMap[stylesheet.id];
    }
    if (ruleMap.hasOwnProperty(ruleId)) {
      props = ruleMap[ruleId];
    } else {
      props = {};
      ruleMap[ruleId] = props;
    }
    processRule$2.call(this, node2, item, list, props, fingerprints);
  } });
};
var walk$2 = csstree_min.exports.walk;
var utils$1 = utils$3;
function processRule$1(node2, item, list) {
  var selectors = node2.prelude.children;
  var declarations = node2.block.children;
  var nodeCompareMarker = selectors.first().compareMarker;
  var skippedCompareMarkers = {};
  list.nextUntil(item.next, (function(next, nextItem) {
    if (next.type !== "Rule") {
      return utils$1.unsafeToSkipNode.call(selectors, next);
    }
    if (node2.pseudoSignature !== next.pseudoSignature) {
      return true;
    }
    var nextFirstSelector = next.prelude.children.head;
    var nextDeclarations = next.block.children;
    var nextCompareMarker = nextFirstSelector.data.compareMarker;
    if (nextCompareMarker in skippedCompareMarkers) {
      return true;
    }
    if (selectors.head === selectors.tail) {
      if (selectors.first().id === nextFirstSelector.data.id) {
        declarations.appendList(nextDeclarations);
        list.remove(nextItem);
        return;
      }
    }
    if (utils$1.isEqualDeclarations(declarations, nextDeclarations)) {
      var nextStr = nextFirstSelector.data.id;
      selectors.some((function(data, item2) {
        var curStr = data.id;
        if (nextStr < curStr) {
          selectors.insert(nextFirstSelector, item2);
          return true;
        }
        if (!item2.next) {
          selectors.insert(nextFirstSelector);
          return true;
        }
      }));
      list.remove(nextItem);
      return;
    }
    if (nextCompareMarker === nodeCompareMarker) {
      return true;
    }
    skippedCompareMarkers[nextCompareMarker] = true;
  }));
}
var _7MergeRuleset = function mergeRule(ast2) {
  walk$2(ast2, { visit: "Rule", enter: processRule$1 });
};
var List$1 = csstree_min.exports.List;
var walk$1 = csstree_min.exports.walk;
var utils = utils$3;
function calcSelectorLength(list) {
  var length = 0;
  list.each((function(data) {
    length += data.id.length + 1;
  }));
  return length - 1;
}
function calcDeclarationsLength(tokens) {
  var length = 0;
  for (var i = 0; i < tokens.length; i++) {
    length += tokens[i].length;
  }
  return length + tokens.length - 1;
}
function processRule(node2, item, list) {
  var avoidRulesMerge = this.block !== null ? this.block.avoidRulesMerge : false;
  var selectors = node2.prelude.children;
  var block2 = node2.block;
  var disallowDownMarkers = /* @__PURE__ */ Object.create(null);
  var allowMergeUp = true;
  var allowMergeDown = true;
  list.prevUntil(item.prev, (function(prev, prevItem) {
    var prevBlock = prev.block;
    var prevType = prev.type;
    if (prevType !== "Rule") {
      var unsafe = utils.unsafeToSkipNode.call(selectors, prev);
      if (!unsafe && prevType === "Atrule" && prevBlock) {
        walk$1(prevBlock, { visit: "Rule", enter: function(node3) {
          node3.prelude.children.each((function(data) {
            disallowDownMarkers[data.compareMarker] = true;
          }));
        } });
      }
      return unsafe;
    }
    var prevSelectors = prev.prelude.children;
    if (node2.pseudoSignature !== prev.pseudoSignature) {
      return true;
    }
    allowMergeDown = !prevSelectors.some((function(selector) {
      return selector.compareMarker in disallowDownMarkers;
    }));
    if (!allowMergeDown && !allowMergeUp) {
      return true;
    }
    if (allowMergeUp && utils.isEqualSelectors(prevSelectors, selectors)) {
      prevBlock.children.appendList(block2.children);
      list.remove(item);
      return true;
    }
    var diff = utils.compareDeclarations(block2.children, prevBlock.children);
    if (diff.eq.length) {
      if (!diff.ne1.length && !diff.ne2.length) {
        if (allowMergeDown) {
          utils.addSelectors(selectors, prevSelectors);
          list.remove(prevItem);
        }
        return true;
      } else if (!avoidRulesMerge) {
        if (diff.ne1.length && !diff.ne2.length) {
          var selectorLength = calcSelectorLength(selectors);
          var blockLength = calcDeclarationsLength(diff.eq);
          if (allowMergeUp && selectorLength < blockLength) {
            utils.addSelectors(prevSelectors, selectors);
            block2.children = new List$1().fromArray(diff.ne1);
          }
        } else if (!diff.ne1.length && diff.ne2.length) {
          var selectorLength = calcSelectorLength(prevSelectors);
          var blockLength = calcDeclarationsLength(diff.eq);
          if (allowMergeDown && selectorLength < blockLength) {
            utils.addSelectors(selectors, prevSelectors);
            prevBlock.children = new List$1().fromArray(diff.ne2);
          }
        } else {
          var newSelector = { type: "SelectorList", loc: null, children: utils.addSelectors(prevSelectors.copy(), selectors) };
          var newBlockLength = calcSelectorLength(newSelector.children) + 2;
          var blockLength = calcDeclarationsLength(diff.eq);
          if (blockLength >= newBlockLength) {
            var newItem = list.createItem({ type: "Rule", loc: null, prelude: newSelector, block: { type: "Block", loc: null, children: new List$1().fromArray(diff.eq) }, pseudoSignature: node2.pseudoSignature });
            block2.children = new List$1().fromArray(diff.ne1);
            prevBlock.children = new List$1().fromArray(diff.ne2overrided);
            if (allowMergeUp) {
              list.insert(newItem, prevItem);
            } else {
              list.insert(newItem, item);
            }
            return true;
          }
        }
      }
    }
    if (allowMergeUp) {
      allowMergeUp = !prevSelectors.some((function(prevSelector) {
        return selectors.some((function(selector) {
          return selector.compareMarker === prevSelector.compareMarker;
        }));
      }));
    }
    prevSelectors.each((function(data) {
      disallowDownMarkers[data.compareMarker] = true;
    }));
  }));
}
var _8RestructRuleset = function restructRule(ast2) {
  walk$1(ast2, { visit: "Rule", reverse: true, enter: processRule });
};
var prepare2 = prepare$1;
var mergeAtrule = _1MergeAtrule;
var initialMergeRuleset = _2InitialMergeRuleset;
var disjoinRuleset = _3DisjoinRuleset;
var restructShorthand = _4RestructShorthand;
var restructBlock3 = _6RestructBlock;
var mergeRuleset = _7MergeRuleset;
var restructRuleset = _8RestructRuleset;
var restructure$1 = function(ast2, options) {
  var indexer = prepare2(ast2, options);
  options.logger("prepare", ast2);
  mergeAtrule(ast2, options);
  options.logger("mergeAtrule", ast2);
  initialMergeRuleset(ast2);
  options.logger("initialMergeRuleset", ast2);
  disjoinRuleset(ast2);
  options.logger("disjoinRuleset", ast2);
  restructShorthand(ast2, indexer);
  options.logger("restructShorthand", ast2);
  restructBlock3(ast2);
  options.logger("restructBlock", ast2);
  mergeRuleset(ast2);
  options.logger("mergeRuleset", ast2);
  restructRuleset(ast2);
  options.logger("restructRuleset", ast2);
};
var List = csstree_min.exports.List;
var clone = csstree_min.exports.clone;
var usageUtils = usage;
var clean = clean$1;
var replace = replace$1;
var restructure = restructure$1;
var walk = csstree_min.exports.walk;
function readChunk(children, specialComments) {
  var buffer = new List();
  var nonSpaceTokenInBuffer = false;
  var protectedComment;
  children.nextUntil(children.head, (function(node2, item, list) {
    if (node2.type === "Comment") {
      if (!specialComments || node2.value.charAt(0) !== "!") {
        list.remove(item);
        return;
      }
      if (nonSpaceTokenInBuffer || protectedComment) {
        return true;
      }
      list.remove(item);
      protectedComment = node2;
      return;
    }
    if (node2.type !== "WhiteSpace") {
      nonSpaceTokenInBuffer = true;
    }
    buffer.insert(list.remove(item));
  }));
  return { comment: protectedComment, stylesheet: { type: "StyleSheet", loc: null, children: buffer } };
}
function compressChunk(ast2, firstAtrulesAllowed, num2, options) {
  options.logger("Compress block #" + num2, null, true);
  var seed = 1;
  if (ast2.type === "StyleSheet") {
    ast2.firstAtrulesAllowed = firstAtrulesAllowed;
    ast2.id = seed++;
  }
  walk(ast2, { visit: "Atrule", enter: function markScopes(node2) {
    if (node2.block !== null) {
      node2.block.id = seed++;
    }
  } });
  options.logger("init", ast2);
  clean(ast2, options);
  options.logger("clean", ast2);
  replace(ast2);
  options.logger("replace", ast2);
  if (options.restructuring) {
    restructure(ast2, options);
  }
  return ast2;
}
function getCommentsOption(options) {
  var comments = "comments" in options ? options.comments : "exclamation";
  if (typeof comments === "boolean") {
    comments = comments ? "exclamation" : false;
  } else if (comments !== "exclamation" && comments !== "first-exclamation") {
    comments = false;
  }
  return comments;
}
function getRestructureOption(options) {
  if ("restructure" in options) {
    return options.restructure;
  }
  return "restructuring" in options ? options.restructuring : true;
}
function wrapBlock(block2) {
  return new List().appendData({ type: "Rule", loc: null, prelude: { type: "SelectorList", loc: null, children: new List().appendData({ type: "Selector", loc: null, children: new List().appendData({ type: "TypeSelector", loc: null, name: "x" }) }) }, block: block2 });
}
var compress$1 = function compress(ast2, options) {
  ast2 = ast2 || { type: "StyleSheet", loc: null, children: new List() };
  options = options || {};
  var compressOptions = { logger: typeof options.logger === "function" ? options.logger : function() {
  }, restructuring: getRestructureOption(options), forceMediaMerge: Boolean(options.forceMediaMerge), usage: options.usage ? usageUtils.buildIndex(options.usage) : false };
  var specialComments = getCommentsOption(options);
  var firstAtrulesAllowed = true;
  var input;
  var output = new List();
  var chunk;
  var chunkNum = 1;
  var chunkChildren;
  if (options.clone) {
    ast2 = clone(ast2);
  }
  if (ast2.type === "StyleSheet") {
    input = ast2.children;
    ast2.children = output;
  } else {
    input = wrapBlock(ast2);
  }
  do {
    chunk = readChunk(input, Boolean(specialComments));
    compressChunk(chunk.stylesheet, firstAtrulesAllowed, chunkNum++, compressOptions);
    chunkChildren = chunk.stylesheet.children;
    if (chunk.comment) {
      if (!output.isEmpty()) {
        output.insert(List.createItem({ type: "Raw", value: "\n" }));
      }
      output.insert(List.createItem(chunk.comment));
      if (!chunkChildren.isEmpty()) {
        output.insert(List.createItem({ type: "Raw", value: "\n" }));
      }
    }
    if (firstAtrulesAllowed && !chunkChildren.isEmpty()) {
      var lastRule = chunkChildren.last();
      if (lastRule.type !== "Atrule" || lastRule.name !== "import" && lastRule.name !== "charset") {
        firstAtrulesAllowed = false;
      }
    }
    if (specialComments !== "exclamation") {
      specialComments = false;
    }
    output.appendList(chunkChildren);
  } while (!input.isEmpty());
  return { ast: ast2 };
};
var name = "csso";
var version = "4.2.0";
var description = "CSS minifier with structural optimisations";
var homepage = "https://github.com/css/csso";
var author = "Sergey Kryzhanovsky <skryzhanovsky@ya.ru> (https://github.com/afelix)";
var maintainers = [{ name: "Roman Dvornov", email: "rdvornov@gmail.com", "github-username": "lahmatiy" }];
var license = "MIT";
var repository = "css/csso";
var bugs = { url: "https://github.com/css/csso/issues" };
var keywords = ["css", "compress", "minifier", "minify", "optimise", "optimisation", "csstree"];
var main = "./lib/index";
var scripts = { test: "mocha --reporter dot", lint: "eslint lib test", "lint-and-test": "npm run lint && npm test", build: "rollup --config && terser dist/csso.js --compress --mangle -o dist/csso.min.js", coverage: "nyc npm test", coveralls: "nyc report --reporter=text-lcov | coveralls", travis: "nyc npm run lint-and-test && npm run coveralls", hydrogen: "node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/csso --stat -o /dev/null", prepublishOnly: "npm run build" };
var dependencies = { "css-tree": "^1.1.2" };
var browser = { "css-tree": "css-tree/dist/csstree.min.js" };
var devDependencies = { "@rollup/plugin-commonjs": "^11.0.1", "@rollup/plugin-json": "^4.0.1", "@rollup/plugin-node-resolve": "^7.0.0", coveralls: "^3.0.11", eslint: "^6.8.0", mocha: "^7.1.1", nyc: "^15.0.0", rollup: "^1.29.0", "source-map": "^0.6.1", terser: "^4.6.3" };
var engines = { node: ">=8.0.0" };
var files = ["dist", "lib"];
var require$$2 = { name, version, description, homepage, author, maintainers, license, repository, bugs, keywords, main, scripts, dependencies, browser, devDependencies, engines, files };
var csstree$2 = csstree_min.exports;
var parse = csstree$2.parse;
var compress2 = compress$1;
var generate = csstree$2.generate;
function debugOutput(name2, options, startTime, data) {
  if (options.debug) {
    console.error("## " + name2 + " done in %d ms\n", Date.now() - startTime);
  }
  return data;
}
function createDefaultLogger(level) {
  var lastDebug;
  return function logger(title, ast2) {
    var line = title;
    if (ast2) {
      line = "[" + ((Date.now() - lastDebug) / 1e3).toFixed(3) + "s] " + line;
    }
    if (level > 1 && ast2) {
      var css = generate(ast2);
      if (level === 2 && css.length > 256) {
        css = css.substr(0, 256) + "...";
      }
      line += "\n  " + css + "\n";
    }
    console.error(line);
    lastDebug = Date.now();
  };
}
function copy(obj) {
  var result = {};
  for (var key in obj) {
    result[key] = obj[key];
  }
  return result;
}
function buildCompressOptions(options) {
  options = copy(options);
  if (typeof options.logger !== "function" && options.debug) {
    options.logger = createDefaultLogger(options.debug);
  }
  return options;
}
function runHandler(ast2, options, handlers2) {
  if (!Array.isArray(handlers2)) {
    handlers2 = [handlers2];
  }
  handlers2.forEach((function(fn) {
    fn(ast2, options);
  }));
}
function minify(context, source, options) {
  options = options || {};
  var filename = options.filename || "<unknown>";
  var result;
  var ast2 = debugOutput("parsing", options, Date.now(), parse(source, { context, filename, positions: Boolean(options.sourceMap) }));
  if (options.beforeCompress) {
    debugOutput("beforeCompress", options, Date.now(), runHandler(ast2, options, options.beforeCompress));
  }
  var compressResult = debugOutput("compress", options, Date.now(), compress2(ast2, buildCompressOptions(options)));
  if (options.afterCompress) {
    debugOutput("afterCompress", options, Date.now(), runHandler(compressResult, options, options.afterCompress));
  }
  if (options.sourceMap) {
    result = debugOutput("generate(sourceMap: true)", options, Date.now(), (function() {
      var tmp = generate(compressResult.ast, { sourceMap: true });
      tmp.map._file = filename;
      tmp.map.setSourceContent(filename, source);
      return tmp;
    })());
  } else {
    result = debugOutput("generate", options, Date.now(), { css: generate(compressResult.ast), map: null });
  }
  return result;
}
function minifyStylesheet(source, options) {
  return minify("stylesheet", source, options);
}
function minifyBlock(source, options) {
  return minify("declarationList", source, options);
}
var lib = { version: require$$2.version, minify: minifyStylesheet, minifyBlock, syntax: Object.assign({ compress: compress2 }, csstree$2) };
var csso = lib;
minifyStyles$1.type = "visitor";
minifyStyles$1.name = "minifyStyles";
minifyStyles$1.active = true;
minifyStyles$1.description = "minifies styles and removes unused styles based on usage data";
minifyStyles$1.fn = (_root, _a) => {
  var _b = _a, { usage: usage2 } = _b, params = __objRest(_b, ["usage"]);
  let enableTagsUsage = true;
  let enableIdsUsage = true;
  let enableClassesUsage = true;
  let forceUsageDeoptimized = false;
  if (typeof usage2 === "boolean") {
    enableTagsUsage = usage2;
    enableIdsUsage = usage2;
    enableClassesUsage = usage2;
  } else if (usage2) {
    enableTagsUsage = usage2.tags == null ? true : usage2.tags;
    enableIdsUsage = usage2.ids == null ? true : usage2.ids;
    enableClassesUsage = usage2.classes == null ? true : usage2.classes;
    forceUsageDeoptimized = usage2.force == null ? false : usage2.force;
  }
  const styleElements = [];
  const elementsWithStyleAttributes = [];
  let deoptimized = false;
  const tagsUsage = /* @__PURE__ */ new Set();
  const idsUsage = /* @__PURE__ */ new Set();
  const classesUsage = /* @__PURE__ */ new Set();
  return { element: { enter: (node2) => {
    if (node2.name === "script") {
      deoptimized = true;
    }
    for (const name2 of Object.keys(node2.attributes)) {
      if (name2.startsWith("on")) {
        deoptimized = true;
      }
    }
    tagsUsage.add(node2.name);
    if (node2.attributes.id != null) {
      idsUsage.add(node2.attributes.id);
    }
    if (node2.attributes.class != null) {
      for (const className of node2.attributes.class.split(/\s+/)) {
        classesUsage.add(className);
      }
    }
    if (node2.name === "style" && node2.children.length !== 0) {
      styleElements.push(node2);
    } else if (node2.attributes.style != null) {
      elementsWithStyleAttributes.push(node2);
    }
  } }, root: { exit: () => {
    const cssoUsage = {};
    if (deoptimized === false || forceUsageDeoptimized === true) {
      if (enableTagsUsage && tagsUsage.size !== 0) {
        cssoUsage.tags = Array.from(tagsUsage);
      }
      if (enableIdsUsage && idsUsage.size !== 0) {
        cssoUsage.ids = Array.from(idsUsage);
      }
      if (enableClassesUsage && classesUsage.size !== 0) {
        cssoUsage.classes = Array.from(classesUsage);
      }
    }
    for (const node2 of styleElements) {
      if (node2.children[0].type === "text" || node2.children[0].type === "cdata") {
        const cssText = node2.children[0].value;
        const minified = csso.minify(cssText, __spreadProps(__spreadValues({}, params), { usage: cssoUsage })).css;
        if (cssText.indexOf(">") >= 0 || cssText.indexOf("<") >= 0) {
          node2.children[0].type = "cdata";
          node2.children[0].value = minified;
        } else {
          node2.children[0].type = "text";
          node2.children[0].value = minified;
        }
      }
    }
    for (const node2 of elementsWithStyleAttributes) {
      const elemStyle = node2.attributes.style;
      node2.attributes.style = csso.minifyBlock(elemStyle, __spreadValues({}, params)).css;
    }
  } } };
};
var cleanupIDs$1 = {};
var { visitSkip: visitSkip$3 } = xast;
var { referencesProps: referencesProps$3 } = _collections;
cleanupIDs$1.type = "visitor";
cleanupIDs$1.name = "cleanupIDs";
cleanupIDs$1.active = true;
cleanupIDs$1.description = "removes unused IDs and minifies used";
var regReferencesUrl = /\burl\(("|')?#(.+?)\1\)/;
var regReferencesHref = /^#(.+?)$/;
var regReferencesBegin = /(\w+)\./;
var generateIDchars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var maxIDindex = generateIDchars.length - 1;
var hasStringPrefix = (string, prefixes) => {
  for (const prefix of prefixes) {
    if (string.startsWith(prefix)) {
      return true;
    }
  }
  return false;
};
var generateID = (currentID) => {
  if (currentID == null) {
    return [0];
  }
  currentID[currentID.length - 1] += 1;
  for (let i = currentID.length - 1; i > 0; i--) {
    if (currentID[i] > maxIDindex) {
      currentID[i] = 0;
      if (currentID[i - 1] !== void 0) {
        currentID[i - 1]++;
      }
    }
  }
  if (currentID[0] > maxIDindex) {
    currentID[0] = 0;
    currentID.unshift(0);
  }
  return currentID;
};
var getIDstring = (arr, prefix) => prefix + arr.map(((i) => generateIDchars[i])).join("");
cleanupIDs$1.fn = (_root, params) => {
  const { remove = true, minify: minify2 = true, prefix = "", preserve = [], preservePrefixes = [], force = false } = params;
  const preserveIDs = new Set(Array.isArray(preserve) ? preserve : preserve ? [preserve] : []);
  const preserveIDPrefixes = Array.isArray(preservePrefixes) ? preservePrefixes : preservePrefixes ? [preservePrefixes] : [];
  const nodeById = /* @__PURE__ */ new Map();
  const referencesById = /* @__PURE__ */ new Map();
  let deoptimized = false;
  return { element: { enter: (node2) => {
    if (force == false) {
      if ((node2.name === "style" || node2.name === "script") && node2.children.length !== 0) {
        deoptimized = true;
        return;
      }
      if (node2.name === "svg") {
        let hasDefsOnly = true;
        for (const child of node2.children) {
          if (child.type !== "element" || child.name !== "defs") {
            hasDefsOnly = false;
            break;
          }
        }
        if (hasDefsOnly) {
          return visitSkip$3;
        }
      }
    }
    for (const [name2, value] of Object.entries(node2.attributes)) {
      if (name2 === "id") {
        const id = value;
        if (nodeById.has(id)) {
          delete node2.attributes.id;
        } else {
          nodeById.set(id, node2);
        }
      } else {
        let id = null;
        if (referencesProps$3.includes(name2)) {
          const match = value.match(regReferencesUrl);
          if (match != null) {
            id = match[2];
          }
        }
        if (name2 === "href" || name2.endsWith(":href")) {
          const match = value.match(regReferencesHref);
          if (match != null) {
            id = match[1];
          }
        }
        if (name2 === "begin") {
          const match = value.match(regReferencesBegin);
          if (match != null) {
            id = match[1];
          }
        }
        if (id != null) {
          let refs = referencesById.get(id);
          if (refs == null) {
            refs = [];
            referencesById.set(id, refs);
          }
          refs.push({ element: node2, name: name2, value });
        }
      }
    }
  } }, root: { exit: () => {
    if (deoptimized) {
      return;
    }
    const isIdPreserved = (id) => preserveIDs.has(id) || hasStringPrefix(id, preserveIDPrefixes);
    let currentID = null;
    for (const [id, refs] of referencesById) {
      const node2 = nodeById.get(id);
      if (node2 != null) {
        if (minify2 && isIdPreserved(id) === false) {
          let currentIDString = null;
          do {
            currentID = generateID(currentID);
            currentIDString = getIDstring(currentID, prefix);
          } while (isIdPreserved(currentIDString));
          node2.attributes.id = currentIDString;
          for (const { element, name: name2, value } of refs) {
            if (value.includes("#")) {
              element.attributes[name2] = value.replace(`#${id}`, `#${currentIDString}`);
            } else {
              element.attributes[name2] = value.replace(`${id}.`, `${currentIDString}.`);
            }
          }
        }
        nodeById.delete(id);
      }
    }
    if (remove) {
      for (const [id, node2] of nodeById) {
        if (isIdPreserved(id) === false) {
          delete node2.attributes.id;
        }
      }
    }
  } } };
};
var removeUselessDefs$1 = {};
var { detachNodeFromParent: detachNodeFromParent$e } = xast;
var { elemsGroups: elemsGroups$4 } = _collections;
removeUselessDefs$1.type = "visitor";
removeUselessDefs$1.name = "removeUselessDefs";
removeUselessDefs$1.active = true;
removeUselessDefs$1.description = "removes elements in <defs> without id";
removeUselessDefs$1.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (node2.name === "defs") {
    const usefulNodes = [];
    collectUsefulNodes(node2, usefulNodes);
    if (usefulNodes.length === 0) {
      detachNodeFromParent$e(node2, parentNode);
    }
    for (const usefulNode of usefulNodes) {
      usefulNode.parentNode = node2;
    }
    node2.children = usefulNodes;
  } else if (elemsGroups$4.nonRendering.includes(node2.name) && node2.attributes.id == null) {
    detachNodeFromParent$e(node2, parentNode);
  }
} } });
var collectUsefulNodes = (node2, usefulNodes) => {
  for (const child of node2.children) {
    if (child.type === "element") {
      if (child.attributes.id != null || child.name === "style") {
        usefulNodes.push(child);
      } else {
        collectUsefulNodes(child, usefulNodes);
      }
    }
  }
};
var cleanupNumericValues$1 = {};
var tools = {};
tools.encodeSVGDatauri = (str, type) => {
  var prefix = "data:image/svg+xml";
  if (!type || type === "base64") {
    prefix += ";base64,";
    str = prefix + Buffer.from(str).toString("base64");
  } else if (type === "enc") {
    str = prefix + "," + encodeURIComponent(str);
  } else if (type === "unenc") {
    str = prefix + "," + str;
  }
  return str;
};
tools.decodeSVGDatauri = (str) => {
  var regexp = /data:image\/svg\+xml(;charset=[^;,]*)?(;base64)?,(.*)/;
  var match = regexp.exec(str);
  if (!match) return str;
  var data = match[3];
  if (match[2]) {
    str = Buffer.from(data, "base64").toString("utf8");
  } else if (data.charAt(0) === "%") {
    str = decodeURIComponent(data);
  } else if (data.charAt(0) === "<") {
    str = data;
  }
  return str;
};
tools.cleanupOutData = (data, params, command) => {
  let str = "";
  let delimiter;
  let prev;
  data.forEach(((item, i) => {
    delimiter = " ";
    if (i == 0) delimiter = "";
    if (params.noSpaceAfterFlags && (command == "A" || command == "a")) {
      var pos = i % 7;
      if (pos == 4 || pos == 5) delimiter = "";
    }
    const itemStr = params.leadingZero ? removeLeadingZero$3(item) : item.toString();
    if (params.negativeExtraSpace && delimiter != "" && (item < 0 || itemStr.charAt(0) === "." && prev % 1 !== 0)) {
      delimiter = "";
    }
    prev = item;
    str += delimiter + itemStr;
  }));
  return str;
};
var removeLeadingZero$3 = (num2) => {
  var strNum = num2.toString();
  if (0 < num2 && num2 < 1 && strNum.charAt(0) === "0") {
    strNum = strNum.slice(1);
  } else if (-1 < num2 && num2 < 0 && strNum.charAt(1) === "0") {
    strNum = strNum.charAt(0) + strNum.slice(2);
  }
  return strNum;
};
tools.removeLeadingZero = removeLeadingZero$3;
var { removeLeadingZero: removeLeadingZero$2 } = tools;
cleanupNumericValues$1.name = "cleanupNumericValues";
cleanupNumericValues$1.type = "visitor";
cleanupNumericValues$1.active = true;
cleanupNumericValues$1.description = "rounds numeric values to the fixed precision, removes default \u2018px\u2019 units";
var regNumericValues$3 = /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/;
var absoluteLengths$1 = { cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 4 / 3, pc: 16, px: 1 };
cleanupNumericValues$1.fn = (_root, params) => {
  const { floatPrecision = 3, leadingZero = true, defaultPx = true, convertToPx = true } = params;
  return { element: { enter: (node2) => {
    if (node2.attributes.viewBox != null) {
      const nums = node2.attributes.viewBox.split(/\s,?\s*|,\s*/g);
      node2.attributes.viewBox = nums.map(((value) => {
        const num2 = Number(value);
        return Number.isNaN(num2) ? value : Number(num2.toFixed(floatPrecision));
      })).join(" ");
    }
    for (const [name2, value] of Object.entries(node2.attributes)) {
      if (name2 === "version") {
        continue;
      }
      const match = value.match(regNumericValues$3);
      if (match) {
        let num2 = Number(Number(match[1]).toFixed(floatPrecision));
        let matchedUnit = match[3] || "";
        let units = matchedUnit;
        if (convertToPx && units !== "" && units in absoluteLengths$1) {
          const pxNum = Number((absoluteLengths$1[units] * Number(match[1])).toFixed(floatPrecision));
          if (pxNum.toString().length < match[0].length) {
            num2 = pxNum;
            units = "px";
          }
        }
        let str;
        if (leadingZero) {
          str = removeLeadingZero$2(num2);
        } else {
          str = num2.toString();
        }
        if (defaultPx && units === "px") {
          units = "";
        }
        node2.attributes[name2] = str + units;
      }
    }
  } } };
};
var convertColors$1 = {};
var collections = _collections;
convertColors$1.type = "visitor";
convertColors$1.name = "convertColors";
convertColors$1.active = true;
convertColors$1.description = "converts colors: rgb() to #rrggbb and #rrggbb to #rgb";
var rNumber = "([+-]?(?:\\d*\\.\\d+|\\d+\\.?)%?)";
var rComma = "\\s*,\\s*";
var regRGB = new RegExp("^rgb\\(\\s*" + rNumber + rComma + rNumber + rComma + rNumber + "\\s*\\)$");
var regHEX = /^#(([a-fA-F0-9])\2){3}$/;
var convertRgbToHex = ([r, g2, b]) => {
  const hexNumber = (256 + r << 8 | g2) << 8 | b;
  return "#" + hexNumber.toString(16).slice(1).toUpperCase();
};
convertColors$1.fn = (_root, params) => {
  const { currentColor = false, names2hex = true, rgb2hex = true, shorthex = true, shortname = true } = params;
  return { element: { enter: (node2) => {
    for (const [name2, value] of Object.entries(node2.attributes)) {
      if (collections.colorsProps.includes(name2)) {
        let val = value;
        if (currentColor) {
          let matched;
          if (typeof currentColor === "string") {
            matched = val === currentColor;
          } else if (currentColor instanceof RegExp) {
            matched = currentColor.exec(val) != null;
          } else {
            matched = val !== "none";
          }
          if (matched) {
            val = "currentColor";
          }
        }
        if (names2hex) {
          const colorName = val.toLowerCase();
          if (collections.colorsNames[colorName] != null) {
            val = collections.colorsNames[colorName];
          }
        }
        if (rgb2hex) {
          let match = val.match(regRGB);
          if (match != null) {
            let nums = match.slice(1, 4).map(((m) => {
              let n;
              if (m.indexOf("%") > -1) {
                n = Math.round(parseFloat(m) * 2.55);
              } else {
                n = Number(m);
              }
              return Math.max(0, Math.min(n, 255));
            }));
            val = convertRgbToHex(nums);
          }
        }
        if (shorthex) {
          let match = val.match(regHEX);
          if (match != null) {
            val = "#" + match[0][1] + match[0][3] + match[0][5];
          }
        }
        if (shortname) {
          const colorName = val.toLowerCase();
          if (collections.colorsShortNames[colorName] != null) {
            val = collections.colorsShortNames[colorName];
          }
        }
        node2.attributes[name2] = val;
      }
    }
  } } };
};
var removeUnknownsAndDefaults$1 = {};
var style = {};
var stable = stable$3.exports;
var csstree$1 = csstree_min.exports;
var specificity2 = specificity$4;
var { visit: visit$3, matches } = xast;
var { attrsGroups: attrsGroups$3, inheritableAttrs: inheritableAttrs$3, presentationNonInheritableGroupAttrs: presentationNonInheritableGroupAttrs$2 } = _collections;
var csstreeWalkSkip = csstree$1.walk.skip;
var parseRule = (ruleNode, dynamic) => {
  let selectors;
  let selectorsSpecificity;
  const declarations = [];
  csstree$1.walk(ruleNode, ((cssNode) => {
    if (cssNode.type === "SelectorList") {
      selectorsSpecificity = specificity2(cssNode);
      const newSelectorsNode = csstree$1.clone(cssNode);
      csstree$1.walk(newSelectorsNode, ((pseudoClassNode, item, list) => {
        if (pseudoClassNode.type === "PseudoClassSelector") {
          dynamic = true;
          list.remove(item);
        }
      }));
      selectors = csstree$1.generate(newSelectorsNode);
      return csstreeWalkSkip;
    }
    if (cssNode.type === "Declaration") {
      declarations.push({ name: cssNode.property, value: csstree$1.generate(cssNode.value), important: cssNode.important === true });
      return csstreeWalkSkip;
    }
  }));
  if (selectors == null || selectorsSpecificity == null) {
    throw Error("assert");
  }
  return { dynamic, selectors, specificity: selectorsSpecificity, declarations };
};
var parseStylesheet = (css, dynamic) => {
  const rules = [];
  const ast2 = csstree$1.parse(css, { parseValue: false, parseAtrulePrelude: false });
  csstree$1.walk(ast2, ((cssNode) => {
    if (cssNode.type === "Rule") {
      rules.push(parseRule(cssNode, dynamic || false));
      return csstreeWalkSkip;
    }
    if (cssNode.type === "Atrule") {
      if (cssNode.name === "keyframes") {
        return csstreeWalkSkip;
      }
      csstree$1.walk(cssNode, ((ruleNode) => {
        if (ruleNode.type === "Rule") {
          rules.push(parseRule(ruleNode, dynamic || true));
          return csstreeWalkSkip;
        }
      }));
      return csstreeWalkSkip;
    }
  }));
  return rules;
};
var parseStyleDeclarations = (css) => {
  const declarations = [];
  const ast2 = csstree$1.parse(css, { context: "declarationList", parseValue: false });
  csstree$1.walk(ast2, ((cssNode) => {
    if (cssNode.type === "Declaration") {
      declarations.push({ name: cssNode.property, value: csstree$1.generate(cssNode.value), important: cssNode.important === true });
    }
  }));
  return declarations;
};
var computeOwnStyle = (stylesheet, node2) => {
  const computedStyle = {};
  const importantStyles = /* @__PURE__ */ new Map();
  for (const [name2, value] of Object.entries(node2.attributes)) {
    if (attrsGroups$3.presentation.includes(name2)) {
      computedStyle[name2] = { type: "static", inherited: false, value };
      importantStyles.set(name2, false);
    }
  }
  for (const { selectors, declarations, dynamic } of stylesheet.rules) {
    if (matches(node2, selectors)) {
      for (const { name: name2, value, important } of declarations) {
        const computed = computedStyle[name2];
        if (computed && computed.type === "dynamic") {
          continue;
        }
        if (dynamic) {
          computedStyle[name2] = { type: "dynamic", inherited: false };
          continue;
        }
        if (computed == null || important === true || importantStyles.get(name2) === false) {
          computedStyle[name2] = { type: "static", inherited: false, value };
          importantStyles.set(name2, important);
        }
      }
    }
  }
  const styleDeclarations = node2.attributes.style == null ? [] : parseStyleDeclarations(node2.attributes.style);
  for (const { name: name2, value, important } of styleDeclarations) {
    const computed = computedStyle[name2];
    if (computed && computed.type === "dynamic") {
      continue;
    }
    if (computed == null || important === true || importantStyles.get(name2) === false) {
      computedStyle[name2] = { type: "static", inherited: false, value };
      importantStyles.set(name2, important);
    }
  }
  return computedStyle;
};
var compareSpecificity = (a, b) => {
  for (var i = 0; i < 4; i += 1) {
    if (a[i] < b[i]) {
      return -1;
    } else if (a[i] > b[i]) {
      return 1;
    }
  }
  return 0;
};
var collectStylesheet$5 = (root) => {
  const rules = [];
  const parents = /* @__PURE__ */ new Map();
  visit$3(root, { element: { enter: (node2, parentNode) => {
    parents.set(node2, parentNode);
    if (node2.name === "style") {
      const dynamic = node2.attributes.media != null && node2.attributes.media !== "all";
      if (node2.attributes.type == null || node2.attributes.type === "" || node2.attributes.type === "text/css") {
        const children = node2.children;
        for (const child of children) {
          if (child.type === "text" || child.type === "cdata") {
            rules.push(...parseStylesheet(child.value, dynamic));
          }
        }
      }
    }
  } } });
  stable.inplace(rules, ((a, b) => compareSpecificity(a.specificity, b.specificity)));
  return { rules, parents };
};
style.collectStylesheet = collectStylesheet$5;
var computeStyle$5 = (stylesheet, node2) => {
  const { parents } = stylesheet;
  const computedStyles = computeOwnStyle(stylesheet, node2);
  let parent = parents.get(node2);
  while (parent != null && parent.type !== "root") {
    const inheritedStyles = computeOwnStyle(stylesheet, parent);
    for (const [name2, computed] of Object.entries(inheritedStyles)) {
      if (computedStyles[name2] == null && inheritableAttrs$3.includes(name2) === true && presentationNonInheritableGroupAttrs$2.includes(name2) === false) {
        computedStyles[name2] = __spreadProps(__spreadValues({}, computed), { inherited: true });
      }
    }
    parent = parents.get(parent);
  }
  return computedStyles;
};
style.computeStyle = computeStyle$5;
var { visitSkip: visitSkip$2, detachNodeFromParent: detachNodeFromParent$d } = xast;
var { collectStylesheet: collectStylesheet$4, computeStyle: computeStyle$4 } = style;
var { elems, attrsGroups: attrsGroups$2, elemsGroups: elemsGroups$3, attrsGroupsDefaults: attrsGroupsDefaults$1, presentationNonInheritableGroupAttrs: presentationNonInheritableGroupAttrs$1 } = _collections;
removeUnknownsAndDefaults$1.type = "visitor";
removeUnknownsAndDefaults$1.name = "removeUnknownsAndDefaults";
removeUnknownsAndDefaults$1.active = true;
removeUnknownsAndDefaults$1.description = "removes unknown elements content and attributes, removes attrs with default values";
var allowedChildrenPerElement = /* @__PURE__ */ new Map();
var allowedAttributesPerElement = /* @__PURE__ */ new Map();
var attributesDefaultsPerElement = /* @__PURE__ */ new Map();
for (const [name2, config2] of Object.entries(elems)) {
  const allowedChildren = /* @__PURE__ */ new Set();
  if (config2.content) {
    for (const elementName of config2.content) {
      allowedChildren.add(elementName);
    }
  }
  if (config2.contentGroups) {
    for (const contentGroupName of config2.contentGroups) {
      const elemsGroup = elemsGroups$3[contentGroupName];
      if (elemsGroup) {
        for (const elementName of elemsGroup) {
          allowedChildren.add(elementName);
        }
      }
    }
  }
  const allowedAttributes = /* @__PURE__ */ new Set();
  if (config2.attrs) {
    for (const attrName of config2.attrs) {
      allowedAttributes.add(attrName);
    }
  }
  const attributesDefaults = /* @__PURE__ */ new Map();
  if (config2.defaults) {
    for (const [attrName, defaultValue] of Object.entries(config2.defaults)) {
      attributesDefaults.set(attrName, defaultValue);
    }
  }
  for (const attrsGroupName of config2.attrsGroups) {
    const attrsGroup = attrsGroups$2[attrsGroupName];
    if (attrsGroup) {
      for (const attrName of attrsGroup) {
        allowedAttributes.add(attrName);
      }
    }
    const groupDefaults = attrsGroupsDefaults$1[attrsGroupName];
    if (groupDefaults) {
      for (const [attrName, defaultValue] of Object.entries(groupDefaults)) {
        attributesDefaults.set(attrName, defaultValue);
      }
    }
  }
  allowedChildrenPerElement.set(name2, allowedChildren);
  allowedAttributesPerElement.set(name2, allowedAttributes);
  attributesDefaultsPerElement.set(name2, attributesDefaults);
}
removeUnknownsAndDefaults$1.fn = (root, params) => {
  const { unknownContent = true, unknownAttrs = true, defaultAttrs = true, uselessOverrides = true, keepDataAttrs = true, keepAriaAttrs = true, keepRoleAttr = false } = params;
  const stylesheet = collectStylesheet$4(root);
  return { element: { enter: (node2, parentNode) => {
    if (node2.name.includes(":")) {
      return;
    }
    if (node2.name === "foreignObject") {
      return visitSkip$2;
    }
    if (unknownContent && parentNode.type === "element") {
      const allowedChildren = allowedChildrenPerElement.get(parentNode.name);
      if (allowedChildren == null || allowedChildren.size === 0) {
        if (allowedChildrenPerElement.get(node2.name) == null) {
          detachNodeFromParent$d(node2, parentNode);
          return;
        }
      } else {
        if (allowedChildren.has(node2.name) === false) {
          detachNodeFromParent$d(node2, parentNode);
          return;
        }
      }
    }
    const allowedAttributes = allowedAttributesPerElement.get(node2.name);
    const attributesDefaults = attributesDefaultsPerElement.get(node2.name);
    const computedParentStyle = parentNode.type === "element" ? computeStyle$4(stylesheet, parentNode) : null;
    for (const [name2, value] of Object.entries(node2.attributes)) {
      if (keepDataAttrs && name2.startsWith("data-")) {
        continue;
      }
      if (keepAriaAttrs && name2.startsWith("aria-")) {
        continue;
      }
      if (keepRoleAttr && name2 === "role") {
        continue;
      }
      if (name2 === "xmlns") {
        continue;
      }
      if (name2.includes(":")) {
        const [prefix] = name2.split(":");
        if (prefix !== "xml" && prefix !== "xlink") {
          continue;
        }
      }
      if (unknownAttrs && allowedAttributes && allowedAttributes.has(name2) === false) {
        delete node2.attributes[name2];
      }
      if (defaultAttrs && node2.attributes.id == null && attributesDefaults && attributesDefaults.get(name2) === value) {
        if (computedParentStyle == null || computedParentStyle[name2] == null) {
          delete node2.attributes[name2];
        }
      }
      if (uselessOverrides && node2.attributes.id == null) {
        const style2 = computedParentStyle == null ? null : computedParentStyle[name2];
        if (presentationNonInheritableGroupAttrs$1.includes(name2) === false && style2 != null && style2.type === "static" && style2.value === value) {
          delete node2.attributes[name2];
        }
      }
    }
  } } };
};
var removeNonInheritableGroupAttrs$1 = {};
removeNonInheritableGroupAttrs$1.name = "removeNonInheritableGroupAttrs";
removeNonInheritableGroupAttrs$1.type = "perItem";
removeNonInheritableGroupAttrs$1.active = true;
removeNonInheritableGroupAttrs$1.description = "removes non-inheritable group\u2019s presentational attributes";
var { inheritableAttrs: inheritableAttrs$2, attrsGroups: attrsGroups$1, presentationNonInheritableGroupAttrs } = _collections;
removeNonInheritableGroupAttrs$1.fn = function(item) {
  if (item.type === "element" && item.name === "g") {
    for (const name2 of Object.keys(item.attributes)) {
      if (attrsGroups$1.presentation.includes(name2) === true && inheritableAttrs$2.includes(name2) === false && presentationNonInheritableGroupAttrs.includes(name2) === false) {
        delete item.attributes[name2];
      }
    }
  }
};
var removeUselessStrokeAndFill$1 = {};
var { visit: visit$2, visitSkip: visitSkip$1, detachNodeFromParent: detachNodeFromParent$c } = xast;
var { collectStylesheet: collectStylesheet$3, computeStyle: computeStyle$3 } = style;
var { elemsGroups: elemsGroups$2 } = _collections;
removeUselessStrokeAndFill$1.type = "visitor";
removeUselessStrokeAndFill$1.name = "removeUselessStrokeAndFill";
removeUselessStrokeAndFill$1.active = true;
removeUselessStrokeAndFill$1.description = "removes useless stroke and fill attributes";
removeUselessStrokeAndFill$1.fn = (root, params) => {
  const { stroke: removeStroke = true, fill: removeFill = true, removeNone = false } = params;
  let hasStyleOrScript = false;
  visit$2(root, { element: { enter: (node2) => {
    if (node2.name === "style" || node2.name === "script") {
      hasStyleOrScript = true;
    }
  } } });
  if (hasStyleOrScript) {
    return null;
  }
  const stylesheet = collectStylesheet$3(root);
  return { element: { enter: (node2, parentNode) => {
    if (node2.attributes.id != null) {
      return visitSkip$1;
    }
    if (elemsGroups$2.shape.includes(node2.name) == false) {
      return;
    }
    const computedStyle = computeStyle$3(stylesheet, node2);
    const stroke = computedStyle.stroke;
    const strokeOpacity = computedStyle["stroke-opacity"];
    const strokeWidth = computedStyle["stroke-width"];
    const markerEnd = computedStyle["marker-end"];
    const fill = computedStyle.fill;
    const fillOpacity = computedStyle["fill-opacity"];
    const computedParentStyle = parentNode.type === "element" ? computeStyle$3(stylesheet, parentNode) : null;
    const parentStroke = computedParentStyle == null ? null : computedParentStyle.stroke;
    if (removeStroke) {
      if (stroke == null || stroke.type === "static" && stroke.value == "none" || strokeOpacity != null && strokeOpacity.type === "static" && strokeOpacity.value === "0" || strokeWidth != null && strokeWidth.type === "static" && strokeWidth.value === "0") {
        if (strokeWidth != null && strokeWidth.type === "static" && strokeWidth.value === "0" || markerEnd == null) {
          for (const name2 of Object.keys(node2.attributes)) {
            if (name2.startsWith("stroke")) {
              delete node2.attributes[name2];
            }
          }
          if (parentStroke != null && parentStroke.type === "static" && parentStroke.value !== "none") {
            node2.attributes.stroke = "none";
          }
        }
      }
    }
    if (removeFill) {
      if (fill != null && fill.type === "static" && fill.value === "none" || fillOpacity != null && fillOpacity.type === "static" && fillOpacity.value === "0") {
        for (const name2 of Object.keys(node2.attributes)) {
          if (name2.startsWith("fill-")) {
            delete node2.attributes[name2];
          }
        }
        if (fill == null || fill.type === "static" && fill.value !== "none") {
          node2.attributes.fill = "none";
        }
      }
    }
    if (removeNone) {
      if ((stroke == null || node2.attributes.stroke === "none") && (fill != null && fill.type === "static" && fill.value === "none" || node2.attributes.fill === "none")) {
        detachNodeFromParent$c(node2, parentNode);
      }
    }
  } } };
};
var removeViewBox$1 = {};
removeViewBox$1.type = "visitor";
removeViewBox$1.name = "removeViewBox";
removeViewBox$1.active = true;
removeViewBox$1.description = "removes viewBox attribute when possible";
var viewBoxElems = ["svg", "pattern", "symbol"];
removeViewBox$1.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (viewBoxElems.includes(node2.name) && node2.attributes.viewBox != null && node2.attributes.width != null && node2.attributes.height != null) {
    if (node2.name === "svg" && parentNode.type !== "root") {
      return;
    }
    const nums = node2.attributes.viewBox.split(/[ ,]+/g);
    if (nums[0] === "0" && nums[1] === "0" && node2.attributes.width.replace(/px$/, "") === nums[2] && node2.attributes.height.replace(/px$/, "") === nums[3]) {
      delete node2.attributes.viewBox;
    }
  }
} } });
var cleanupEnableBackground$1 = {};
var { visit: visit$1 } = xast;
cleanupEnableBackground$1.type = "visitor";
cleanupEnableBackground$1.name = "cleanupEnableBackground";
cleanupEnableBackground$1.active = true;
cleanupEnableBackground$1.description = "remove or cleanup enable-background attribute when possible";
cleanupEnableBackground$1.fn = (root) => {
  const regEnableBackground = /^new\s0\s0\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)\s([-+]?\d*\.?\d+([eE][-+]?\d+)?)$/;
  let hasFilter = false;
  visit$1(root, { element: { enter: (node2) => {
    if (node2.name === "filter") {
      hasFilter = true;
    }
  } } });
  return { element: { enter: (node2) => {
    if (node2.attributes["enable-background"] == null) {
      return;
    }
    if (hasFilter) {
      if ((node2.name === "svg" || node2.name === "mask" || node2.name === "pattern") && node2.attributes.width != null && node2.attributes.height != null) {
        const match = node2.attributes["enable-background"].match(regEnableBackground);
        if (match != null && node2.attributes.width === match[1] && node2.attributes.height === match[3]) {
          if (node2.name === "svg") {
            delete node2.attributes["enable-background"];
          } else {
            node2.attributes["enable-background"] = "new";
          }
        }
      }
    } else {
      delete node2.attributes["enable-background"];
    }
  } } };
};
var removeHiddenElems$1 = {};
var path = {};
var argsCountPerCommand = { M: 2, m: 2, Z: 0, z: 0, L: 2, l: 2, H: 1, h: 1, V: 1, v: 1, C: 6, c: 6, S: 4, s: 4, Q: 4, q: 4, T: 2, t: 2, A: 7, a: 7 };
var isCommand = (c) => c in argsCountPerCommand;
var isWsp = (c) => {
  const codePoint = c.codePointAt(0);
  return codePoint === 32 || codePoint === 9 || codePoint === 13 || codePoint === 10;
};
var isDigit = (c) => {
  const codePoint = c.codePointAt(0);
  if (codePoint == null) {
    return false;
  }
  return 48 <= codePoint && codePoint <= 57;
};
var readNumber = (string, cursor) => {
  let i = cursor;
  let value = "";
  let state = "none";
  for (; i < string.length; i += 1) {
    const c = string[i];
    if (c === "+" || c === "-") {
      if (state === "none") {
        state = "sign";
        value += c;
        continue;
      }
      if (state === "e") {
        state = "exponent_sign";
        value += c;
        continue;
      }
    }
    if (isDigit(c)) {
      if (state === "none" || state === "sign" || state === "whole") {
        state = "whole";
        value += c;
        continue;
      }
      if (state === "decimal_point" || state === "decimal") {
        state = "decimal";
        value += c;
        continue;
      }
      if (state === "e" || state === "exponent_sign" || state === "exponent") {
        state = "exponent";
        value += c;
        continue;
      }
    }
    if (c === ".") {
      if (state === "none" || state === "sign" || state === "whole") {
        state = "decimal_point";
        value += c;
        continue;
      }
    }
    if (c === "E" || c == "e") {
      if (state === "whole" || state === "decimal_point" || state === "decimal") {
        state = "e";
        value += c;
        continue;
      }
    }
    break;
  }
  const number = Number.parseFloat(value);
  if (Number.isNaN(number)) {
    return [cursor, null];
  } else {
    return [i - 1, number];
  }
};
var parsePathData$3 = (string) => {
  const pathData = [];
  let command = null;
  let args = [];
  let argsCount = 0;
  let canHaveComma = false;
  let hadComma = false;
  for (let i = 0; i < string.length; i += 1) {
    const c = string.charAt(i);
    if (isWsp(c)) {
      continue;
    }
    if (canHaveComma && c === ",") {
      if (hadComma) {
        break;
      }
      hadComma = true;
      continue;
    }
    if (isCommand(c)) {
      if (hadComma) {
        return pathData;
      }
      if (command == null) {
        if (c !== "M" && c !== "m") {
          return pathData;
        }
      } else {
        if (args.length !== 0) {
          return pathData;
        }
      }
      command = c;
      args = [];
      argsCount = argsCountPerCommand[command];
      canHaveComma = false;
      if (argsCount === 0) {
        pathData.push({ command, args });
      }
      continue;
    }
    if (command == null) {
      return pathData;
    }
    let newCursor = i;
    let number = null;
    if (command === "A" || command === "a") {
      const position = args.length;
      if (position === 0 || position === 1) {
        if (c !== "+" && c !== "-") {
          [newCursor, number] = readNumber(string, i);
        }
      }
      if (position === 2 || position === 5 || position === 6) {
        [newCursor, number] = readNumber(string, i);
      }
      if (position === 3 || position === 4) {
        if (c === "0") {
          number = 0;
        }
        if (c === "1") {
          number = 1;
        }
      }
    } else {
      [newCursor, number] = readNumber(string, i);
    }
    if (number == null) {
      return pathData;
    }
    args.push(number);
    canHaveComma = true;
    hadComma = false;
    i = newCursor;
    if (args.length === argsCount) {
      pathData.push({ command, args });
      if (command === "M") {
        command = "L";
      }
      if (command === "m") {
        command = "l";
      }
      args = [];
    }
  }
  return pathData;
};
path.parsePathData = parsePathData$3;
var stringifyNumber = (number, precision2) => {
  if (precision2 != null) {
    const ratio2 = 10 ** precision2;
    number = Math.round(number * ratio2) / ratio2;
  }
  return number.toString().replace(/^0\./, ".").replace(/^-0\./, "-.");
};
var stringifyArgs = (command, args, precision2, disableSpaceAfterFlags) => {
  let result = "";
  let prev = "";
  for (let i = 0; i < args.length; i += 1) {
    const number = args[i];
    const numberString = stringifyNumber(number, precision2);
    if (disableSpaceAfterFlags && (command === "A" || command === "a") && (i % 7 === 4 || i % 7 === 5)) {
      result += numberString;
    } else if (i === 0 || numberString.startsWith("-")) {
      result += numberString;
    } else if (prev.includes(".") && numberString.startsWith(".")) {
      result += numberString;
    } else {
      result += ` ${numberString}`;
    }
    prev = numberString;
  }
  return result;
};
var stringifyPathData$2 = ({ pathData, precision: precision2, disableSpaceAfterFlags }) => {
  let combined = [];
  for (let i = 0; i < pathData.length; i += 1) {
    const { command, args } = pathData[i];
    if (i === 0) {
      combined.push({ command, args });
    } else {
      const last = combined[combined.length - 1];
      if (i === 1) {
        if (command === "L") {
          last.command = "M";
        }
        if (command === "l") {
          last.command = "m";
        }
      }
      if (last.command === command && last.command !== "M" && last.command !== "m" || last.command === "M" && command === "L" || last.command === "m" && command === "l") {
        last.args = [...last.args, ...args];
      } else {
        combined.push({ command, args });
      }
    }
  }
  let result = "";
  for (const { command, args } of combined) {
    result += command + stringifyArgs(command, args, precision2, disableSpaceAfterFlags);
  }
  return result;
};
path.stringifyPathData = stringifyPathData$2;
var { querySelector, closestByName, detachNodeFromParent: detachNodeFromParent$b } = xast;
var { collectStylesheet: collectStylesheet$2, computeStyle: computeStyle$2 } = style;
var { parsePathData: parsePathData$2 } = path;
removeHiddenElems$1.name = "removeHiddenElems";
removeHiddenElems$1.type = "visitor";
removeHiddenElems$1.active = true;
removeHiddenElems$1.description = "removes hidden elements (zero sized, with absent attributes)";
removeHiddenElems$1.fn = (root, params) => {
  const { isHidden = true, displayNone = true, opacity0 = true, circleR0 = true, ellipseRX0 = true, ellipseRY0 = true, rectWidth0 = true, rectHeight0 = true, patternWidth0 = true, patternHeight0 = true, imageWidth0 = true, imageHeight0 = true, pathEmptyD = true, polylineEmptyPoints = true, polygonEmptyPoints = true } = params;
  const stylesheet = collectStylesheet$2(root);
  return { element: { enter: (node2, parentNode) => {
    const computedStyle = computeStyle$2(stylesheet, node2);
    if (isHidden && computedStyle.visibility && computedStyle.visibility.type === "static" && computedStyle.visibility.value === "hidden" && querySelector(node2, "[visibility=visible]") == null) {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (displayNone && computedStyle.display && computedStyle.display.type === "static" && computedStyle.display.value === "none" && node2.name !== "marker") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (opacity0 && computedStyle.opacity && computedStyle.opacity.type === "static" && computedStyle.opacity.value === "0" && closestByName(node2, "clipPath") == null) {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (circleR0 && node2.name === "circle" && node2.children.length === 0 && node2.attributes.r === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (ellipseRX0 && node2.name === "ellipse" && node2.children.length === 0 && node2.attributes.rx === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (ellipseRY0 && node2.name === "ellipse" && node2.children.length === 0 && node2.attributes.ry === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (rectWidth0 && node2.name === "rect" && node2.children.length === 0 && node2.attributes.width === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (rectHeight0 && rectWidth0 && node2.name === "rect" && node2.children.length === 0 && node2.attributes.height === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (patternWidth0 && node2.name === "pattern" && node2.attributes.width === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (patternHeight0 && node2.name === "pattern" && node2.attributes.height === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (imageWidth0 && node2.name === "image" && node2.attributes.width === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (imageHeight0 && node2.name === "image" && node2.attributes.height === "0") {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (pathEmptyD && node2.name === "path") {
      if (node2.attributes.d == null) {
        detachNodeFromParent$b(node2, parentNode);
        return;
      }
      const pathData = parsePathData$2(node2.attributes.d);
      if (pathData.length === 0) {
        detachNodeFromParent$b(node2, parentNode);
        return;
      }
      if (pathData.length === 1 && computedStyle["marker-start"] == null && computedStyle["marker-end"] == null) {
        detachNodeFromParent$b(node2, parentNode);
        return;
      }
      return;
    }
    if (polylineEmptyPoints && node2.name === "polyline" && node2.attributes.points == null) {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
    if (polygonEmptyPoints && node2.name === "polygon" && node2.attributes.points == null) {
      detachNodeFromParent$b(node2, parentNode);
      return;
    }
  } } };
};
var removeEmptyText$1 = {};
var { detachNodeFromParent: detachNodeFromParent$a } = xast;
removeEmptyText$1.name = "removeEmptyText";
removeEmptyText$1.type = "visitor";
removeEmptyText$1.active = true;
removeEmptyText$1.description = "removes empty <text> elements";
removeEmptyText$1.fn = (root, params) => {
  const { text = true, tspan = true, tref = true } = params;
  return { element: { enter: (node2, parentNode) => {
    if (text && node2.name === "text" && node2.children.length === 0) {
      detachNodeFromParent$a(node2, parentNode);
    }
    if (tspan && node2.name === "tspan" && node2.children.length === 0) {
      detachNodeFromParent$a(node2, parentNode);
    }
    if (tref && node2.name === "tref" && node2.attributes["xlink:href"] == null) {
      detachNodeFromParent$a(node2, parentNode);
    }
  } } };
};
var convertShapeToPath$1 = {};
var { stringifyPathData: stringifyPathData$1 } = path;
var { detachNodeFromParent: detachNodeFromParent$9 } = xast;
convertShapeToPath$1.name = "convertShapeToPath";
convertShapeToPath$1.type = "visitor";
convertShapeToPath$1.active = true;
convertShapeToPath$1.description = "converts basic shapes to more compact path form";
var regNumber = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
convertShapeToPath$1.fn = (root, params) => {
  const { convertArcs = false, floatPrecision: precision2 } = params;
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "rect" && node2.attributes.width != null && node2.attributes.height != null && node2.attributes.rx == null && node2.attributes.ry == null) {
      const x = Number(node2.attributes.x || "0");
      const y = Number(node2.attributes.y || "0");
      const width = Number(node2.attributes.width);
      const height = Number(node2.attributes.height);
      if (Number.isNaN(x - y + width - height)) return;
      const pathData = [{ command: "M", args: [x, y] }, { command: "H", args: [x + width] }, { command: "V", args: [y + height] }, { command: "H", args: [x] }, { command: "z", args: [] }];
      node2.name = "path";
      node2.attributes.d = stringifyPathData$1({ pathData, precision: precision2 });
      delete node2.attributes.x;
      delete node2.attributes.y;
      delete node2.attributes.width;
      delete node2.attributes.height;
    }
    if (node2.name === "line") {
      const x1 = Number(node2.attributes.x1 || "0");
      const y1 = Number(node2.attributes.y1 || "0");
      const x2 = Number(node2.attributes.x2 || "0");
      const y2 = Number(node2.attributes.y2 || "0");
      if (Number.isNaN(x1 - y1 + x2 - y2)) return;
      const pathData = [{ command: "M", args: [x1, y1] }, { command: "L", args: [x2, y2] }];
      node2.name = "path";
      node2.attributes.d = stringifyPathData$1({ pathData, precision: precision2 });
      delete node2.attributes.x1;
      delete node2.attributes.y1;
      delete node2.attributes.x2;
      delete node2.attributes.y2;
    }
    if ((node2.name === "polyline" || node2.name === "polygon") && node2.attributes.points != null) {
      const coords = (node2.attributes.points.match(regNumber) || []).map(Number);
      if (coords.length < 4) {
        detachNodeFromParent$9(node2, parentNode);
        return;
      }
      const pathData = [];
      for (let i = 0; i < coords.length; i += 2) {
        pathData.push({ command: i === 0 ? "M" : "L", args: coords.slice(i, i + 2) });
      }
      if (node2.name === "polygon") {
        pathData.push({ command: "z", args: [] });
      }
      node2.name = "path";
      node2.attributes.d = stringifyPathData$1({ pathData, precision: precision2 });
      delete node2.attributes.points;
    }
    if (node2.name === "circle" && convertArcs) {
      const cx = Number(node2.attributes.cx || "0");
      const cy = Number(node2.attributes.cy || "0");
      const r = Number(node2.attributes.r || "0");
      if (Number.isNaN(cx - cy + r)) {
        return;
      }
      const pathData = [{ command: "M", args: [cx, cy - r] }, { command: "A", args: [r, r, 0, 1, 0, cx, cy + r] }, { command: "A", args: [r, r, 0, 1, 0, cx, cy - r] }, { command: "z", args: [] }];
      node2.name = "path";
      node2.attributes.d = stringifyPathData$1({ pathData, precision: precision2 });
      delete node2.attributes.cx;
      delete node2.attributes.cy;
      delete node2.attributes.r;
    }
    if (node2.name === "ellipse" && convertArcs) {
      const ecx = Number(node2.attributes.cx || "0");
      const ecy2 = Number(node2.attributes.cy || "0");
      const rx2 = Number(node2.attributes.rx || "0");
      const ry = Number(node2.attributes.ry || "0");
      if (Number.isNaN(ecx - ecy2 + rx2 - ry)) {
        return;
      }
      const pathData = [{ command: "M", args: [ecx, ecy2 - ry] }, { command: "A", args: [rx2, ry, 0, 1, 0, ecx, ecy2 + ry] }, { command: "A", args: [rx2, ry, 0, 1, 0, ecx, ecy2 - ry] }, { command: "z", args: [] }];
      node2.name = "path";
      node2.attributes.d = stringifyPathData$1({ pathData, precision: precision2 });
      delete node2.attributes.cx;
      delete node2.attributes.cy;
      delete node2.attributes.rx;
      delete node2.attributes.ry;
    }
  } } };
};
var convertEllipseToCircle$1 = {};
convertEllipseToCircle$1.name = "convertEllipseToCircle";
convertEllipseToCircle$1.type = "visitor";
convertEllipseToCircle$1.active = true;
convertEllipseToCircle$1.description = "converts non-eccentric <ellipse>s to <circle>s";
convertEllipseToCircle$1.fn = () => ({ element: { enter: (node2) => {
  if (node2.name === "ellipse") {
    const rx2 = node2.attributes.rx || "0";
    const ry = node2.attributes.ry || "0";
    if (rx2 === ry || rx2 === "auto" || ry === "auto") {
      node2.name = "circle";
      const radius = rx2 === "auto" ? ry : rx2;
      delete node2.attributes.rx;
      delete node2.attributes.ry;
      node2.attributes.r = radius;
    }
  }
} } });
var moveElemsAttrsToGroup$1 = {};
var { visit } = xast;
var { inheritableAttrs: inheritableAttrs$1, pathElems: pathElems$2 } = _collections;
moveElemsAttrsToGroup$1.type = "visitor";
moveElemsAttrsToGroup$1.name = "moveElemsAttrsToGroup";
moveElemsAttrsToGroup$1.active = true;
moveElemsAttrsToGroup$1.description = "Move common attributes of group children to the group";
moveElemsAttrsToGroup$1.fn = (root) => {
  let deoptimizedWithStyles = false;
  visit(root, { element: { enter: (node2) => {
    if (node2.name === "style") {
      deoptimizedWithStyles = true;
    }
  } } });
  return { element: { exit: (node2) => {
    if (node2.name !== "g" || node2.children.length <= 1) {
      return;
    }
    if (deoptimizedWithStyles) {
      return;
    }
    const commonAttributes = /* @__PURE__ */ new Map();
    let initial = true;
    let everyChildIsPath = true;
    for (const child of node2.children) {
      if (child.type === "element") {
        if (pathElems$2.includes(child.name) === false) {
          everyChildIsPath = false;
        }
        if (initial) {
          initial = false;
          for (const [name2, value] of Object.entries(child.attributes)) {
            if (inheritableAttrs$1.includes(name2)) {
              commonAttributes.set(name2, value);
            }
          }
        } else {
          for (const [name2, value] of commonAttributes) {
            if (child.attributes[name2] !== value) {
              commonAttributes.delete(name2);
            }
          }
        }
      }
    }
    if (node2.attributes["clip-path"] != null || node2.attributes.mask != null) {
      commonAttributes.delete("transform");
    }
    if (everyChildIsPath) {
      commonAttributes.delete("transform");
    }
    for (const [name2, value] of commonAttributes) {
      if (name2 === "transform") {
        if (node2.attributes.transform != null) {
          node2.attributes.transform = `${node2.attributes.transform} ${value}`;
        } else {
          node2.attributes.transform = value;
        }
      } else {
        node2.attributes[name2] = value;
      }
    }
    for (const child of node2.children) {
      if (child.type === "element") {
        for (const [name2] of commonAttributes) {
          delete child.attributes[name2];
        }
      }
    }
  } } };
};
var moveGroupAttrsToElems$1 = {};
var { pathElems: pathElems$1, referencesProps: referencesProps$2 } = _collections;
moveGroupAttrsToElems$1.name = "moveGroupAttrsToElems";
moveGroupAttrsToElems$1.type = "perItem";
moveGroupAttrsToElems$1.active = true;
moveGroupAttrsToElems$1.description = "moves some group attributes to the content elements";
var pathElemsWithGroupsAndText = [...pathElems$1, "g", "text"];
moveGroupAttrsToElems$1.fn = function(item) {
  if (item.type === "element" && item.name === "g" && item.children.length !== 0 && item.attributes.transform != null && Object.entries(item.attributes).some((([name2, value]) => referencesProps$2.includes(name2) && value.includes("url("))) === false && item.children.every(((inner) => pathElemsWithGroupsAndText.includes(inner.name) && inner.attributes.id == null))) {
    for (const inner of item.children) {
      const value = item.attributes.transform;
      if (inner.attributes.transform != null) {
        inner.attributes.transform = value + " " + inner.attributes.transform;
      } else {
        inner.attributes.transform = value;
      }
    }
    delete item.attributes.transform;
  }
};
var collapseGroups$1 = {};
var { inheritableAttrs, elemsGroups: elemsGroups$1 } = _collections;
collapseGroups$1.type = "visitor";
collapseGroups$1.name = "collapseGroups";
collapseGroups$1.active = true;
collapseGroups$1.description = "collapses useless groups";
var hasAnimatedAttr = (node2, name2) => {
  if (node2.type === "element") {
    if (elemsGroups$1.animation.includes(node2.name) && node2.attributes.attributeName === name2) {
      return true;
    }
    for (const child of node2.children) {
      if (hasAnimatedAttr(child, name2)) {
        return true;
      }
    }
  }
  return false;
};
collapseGroups$1.fn = () => ({ element: { exit: (node2, parentNode) => {
  if (parentNode.type === "root" || parentNode.name === "switch") {
    return;
  }
  if (node2.name !== "g" || node2.children.length === 0) {
    return;
  }
  if (Object.keys(node2.attributes).length !== 0 && node2.children.length === 1) {
    const firstChild = node2.children[0];
    if (firstChild.type === "element" && firstChild.attributes.id == null && node2.attributes.filter == null && (node2.attributes.class == null || firstChild.attributes.class == null) && (node2.attributes["clip-path"] == null && node2.attributes.mask == null || firstChild.name === "g" && node2.attributes.transform == null && firstChild.attributes.transform == null)) {
      for (const [name2, value] of Object.entries(node2.attributes)) {
        if (hasAnimatedAttr(firstChild, name2)) {
          return;
        }
        if (firstChild.attributes[name2] == null) {
          firstChild.attributes[name2] = value;
        } else if (name2 === "transform") {
          firstChild.attributes[name2] = value + " " + firstChild.attributes[name2];
        } else if (firstChild.attributes[name2] === "inherit") {
          firstChild.attributes[name2] = value;
        } else if (inheritableAttrs.includes(name2) === false && firstChild.attributes[name2] !== value) {
          return;
        }
        delete node2.attributes[name2];
      }
    }
  }
  if (Object.keys(node2.attributes).length === 0) {
    for (const child of node2.children) {
      if (child.type === "element" && elemsGroups$1.animation.includes(child.name)) {
        return;
      }
    }
    const index = parentNode.children.indexOf(node2);
    parentNode.children.splice(index, 1, ...node2.children);
    for (const child of node2.children) {
      child.parentNode = parentNode;
    }
  }
} } });
var convertPathData$1 = {};
var _path = {};
var { parsePathData: parsePathData$1, stringifyPathData } = path;
var prevCtrlPoint;
var path2js$2 = (path2) => {
  if (path2.pathJS) return path2.pathJS;
  const pathData = [];
  const newPathData = parsePathData$1(path2.attributes.d);
  for (const { command, args } of newPathData) {
    pathData.push({ command, args });
  }
  if (pathData.length && pathData[0].command == "m") {
    pathData[0].command = "M";
  }
  path2.pathJS = pathData;
  return pathData;
};
_path.path2js = path2js$2;
var convertRelativeToAbsolute = (data) => {
  const newData = [];
  let start = [0, 0];
  let cursor = [0, 0];
  for (let { command, args } of data) {
    args = args.slice();
    if (command === "m") {
      args[0] += cursor[0];
      args[1] += cursor[1];
      command = "M";
    }
    if (command === "M") {
      cursor[0] = args[0];
      cursor[1] = args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
    }
    if (command === "h") {
      args[0] += cursor[0];
      command = "H";
    }
    if (command === "H") {
      cursor[0] = args[0];
    }
    if (command === "v") {
      args[0] += cursor[1];
      command = "V";
    }
    if (command === "V") {
      cursor[1] = args[0];
    }
    if (command === "l") {
      args[0] += cursor[0];
      args[1] += cursor[1];
      command = "L";
    }
    if (command === "L") {
      cursor[0] = args[0];
      cursor[1] = args[1];
    }
    if (command === "c") {
      args[0] += cursor[0];
      args[1] += cursor[1];
      args[2] += cursor[0];
      args[3] += cursor[1];
      args[4] += cursor[0];
      args[5] += cursor[1];
      command = "C";
    }
    if (command === "C") {
      cursor[0] = args[4];
      cursor[1] = args[5];
    }
    if (command === "s") {
      args[0] += cursor[0];
      args[1] += cursor[1];
      args[2] += cursor[0];
      args[3] += cursor[1];
      command = "S";
    }
    if (command === "S") {
      cursor[0] = args[2];
      cursor[1] = args[3];
    }
    if (command === "q") {
      args[0] += cursor[0];
      args[1] += cursor[1];
      args[2] += cursor[0];
      args[3] += cursor[1];
      command = "Q";
    }
    if (command === "Q") {
      cursor[0] = args[2];
      cursor[1] = args[3];
    }
    if (command === "t") {
      args[0] += cursor[0];
      args[1] += cursor[1];
      command = "T";
    }
    if (command === "T") {
      cursor[0] = args[0];
      cursor[1] = args[1];
    }
    if (command === "a") {
      args[5] += cursor[0];
      args[6] += cursor[1];
      command = "A";
    }
    if (command === "A") {
      cursor[0] = args[5];
      cursor[1] = args[6];
    }
    if (command === "z" || command === "Z") {
      cursor[0] = start[0];
      cursor[1] = start[1];
      command = "z";
    }
    newData.push({ command, args });
  }
  return newData;
};
_path.js2path = function(path2, data, params) {
  path2.pathJS = data;
  const pathData = [];
  for (const item of data) {
    if (pathData.length !== 0 && (item.command === "M" || item.command === "m")) {
      const last = pathData[pathData.length - 1];
      if (last.command === "M" || last.command === "m") {
        pathData.pop();
      }
    }
    pathData.push({ command: item.command, args: item.args });
  }
  path2.attributes.d = stringifyPathData({ pathData, precision: params.floatPrecision, disableSpaceAfterFlags: params.noSpaceAfterFlags });
};
function set(dest, source) {
  dest[0] = source[source.length - 2];
  dest[1] = source[source.length - 1];
  return dest;
}
_path.intersects = function(path1, path2) {
  const points1 = gatherPoints(convertRelativeToAbsolute(path1));
  const points2 = gatherPoints(convertRelativeToAbsolute(path2));
  if (points1.maxX <= points2.minX || points2.maxX <= points1.minX || points1.maxY <= points2.minY || points2.maxY <= points1.minY || points1.list.every(((set1) => points2.list.every(((set2) => set1.list[set1.maxX][0] <= set2.list[set2.minX][0] || set2.list[set2.maxX][0] <= set1.list[set1.minX][0] || set1.list[set1.maxY][1] <= set2.list[set2.minY][1] || set2.list[set2.maxY][1] <= set1.list[set1.minY][1]))))) return false;
  const hullNest1 = points1.list.map(convexHull);
  const hullNest2 = points2.list.map(convexHull);
  return hullNest1.some((function(hull1) {
    if (hull1.list.length < 3) return false;
    return hullNest2.some((function(hull2) {
      if (hull2.list.length < 3) return false;
      var simplex = [getSupport(hull1, hull2, [1, 0])], direction = minus(simplex[0]);
      var iterations = 1e4;
      while (true) {
        if (iterations-- == 0) {
          console.error("Error: infinite loop while processing mergePaths plugin.");
          return true;
        }
        simplex.push(getSupport(hull1, hull2, direction));
        if (dot(direction, simplex[simplex.length - 1]) <= 0) return false;
        if (processSimplex(simplex, direction)) return true;
      }
    }));
  }));
  function getSupport(a, b, direction) {
    return sub(supportPoint(a, direction), supportPoint(b, minus(direction)));
  }
  function supportPoint(polygon, direction) {
    var index = direction[1] >= 0 ? direction[0] < 0 ? polygon.maxY : polygon.maxX : direction[0] < 0 ? polygon.minX : polygon.minY, max = -Infinity, value;
    while ((value = dot(polygon.list[index], direction)) > max) {
      max = value;
      index = ++index % polygon.list.length;
    }
    return polygon.list[(index || polygon.list.length) - 1];
  }
};
function processSimplex(simplex, direction) {
  if (simplex.length == 2) {
    let a = simplex[1], b = simplex[0], AO = minus(simplex[1]), AB = sub(b, a);
    if (dot(AO, AB) > 0) {
      set(direction, orth(AB, a));
    } else {
      set(direction, AO);
      simplex.shift();
    }
  } else {
    let a = simplex[2], b = simplex[1], c = simplex[0], AB = sub(b, a), AC = sub(c, a), AO = minus(a), ACB = orth(AB, AC), ABC = orth(AC, AB);
    if (dot(ACB, AO) > 0) {
      if (dot(AB, AO) > 0) {
        set(direction, ACB);
        simplex.shift();
      } else {
        set(direction, AO);
        simplex.splice(0, 2);
      }
    } else if (dot(ABC, AO) > 0) {
      if (dot(AC, AO) > 0) {
        set(direction, ABC);
        simplex.splice(1, 1);
      } else {
        set(direction, AO);
        simplex.splice(0, 2);
      }
    } else return true;
  }
  return false;
}
function minus(v) {
  return [-v[0], -v[1]];
}
function sub(v1, v2) {
  return [v1[0] - v2[0], v1[1] - v2[1]];
}
function dot(v1, v2) {
  return v1[0] * v2[0] + v1[1] * v2[1];
}
function orth(v, from) {
  var o = [-v[1], v[0]];
  return dot(o, minus(from)) < 0 ? minus(o) : o;
}
function gatherPoints(pathData) {
  const points = { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 };
  const addPoint = (path2, point) => {
    if (!path2.list.length || point[1] > path2.list[path2.maxY][1]) {
      path2.maxY = path2.list.length;
      points.maxY = points.list.length ? Math.max(point[1], points.maxY) : point[1];
    }
    if (!path2.list.length || point[0] > path2.list[path2.maxX][0]) {
      path2.maxX = path2.list.length;
      points.maxX = points.list.length ? Math.max(point[0], points.maxX) : point[0];
    }
    if (!path2.list.length || point[1] < path2.list[path2.minY][1]) {
      path2.minY = path2.list.length;
      points.minY = points.list.length ? Math.min(point[1], points.minY) : point[1];
    }
    if (!path2.list.length || point[0] < path2.list[path2.minX][0]) {
      path2.minX = path2.list.length;
      points.minX = points.list.length ? Math.min(point[0], points.minX) : point[0];
    }
    path2.list.push(point);
  };
  for (let i = 0; i < pathData.length; i += 1) {
    const pathDataItem = pathData[i];
    let subPath = points.list.length === 0 ? { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 } : points.list[points.list.length - 1];
    let prev = i === 0 ? null : pathData[i - 1];
    let basePoint = subPath.list.length === 0 ? null : subPath.list[subPath.list.length - 1];
    let data = pathDataItem.args;
    let ctrlPoint = basePoint;
    const toAbsolute = (n, i2) => n + (basePoint == null ? 0 : basePoint[i2 % 2]);
    switch (pathDataItem.command) {
      case "M":
        subPath = { list: [], minX: 0, minY: 0, maxX: 0, maxY: 0 };
        points.list.push(subPath);
        break;
      case "H":
        if (basePoint != null) {
          addPoint(subPath, [data[0], basePoint[1]]);
        }
        break;
      case "V":
        if (basePoint != null) {
          addPoint(subPath, [basePoint[0], data[0]]);
        }
        break;
      case "Q":
        addPoint(subPath, data.slice(0, 2));
        prevCtrlPoint = [data[2] - data[0], data[3] - data[1]];
        break;
      case "T":
        if (basePoint != null && prev != null && (prev.command == "Q" || prev.command == "T")) {
          ctrlPoint = [basePoint[0] + prevCtrlPoint[0], basePoint[1] + prevCtrlPoint[1]];
          addPoint(subPath, ctrlPoint);
          prevCtrlPoint = [data[0] - ctrlPoint[0], data[1] - ctrlPoint[1]];
        }
        break;
      case "C":
        if (basePoint != null) {
          addPoint(subPath, [0.5 * (basePoint[0] + data[0]), 0.5 * (basePoint[1] + data[1])]);
        }
        addPoint(subPath, [0.5 * (data[0] + data[2]), 0.5 * (data[1] + data[3])]);
        addPoint(subPath, [0.5 * (data[2] + data[4]), 0.5 * (data[3] + data[5])]);
        prevCtrlPoint = [data[4] - data[2], data[5] - data[3]];
        break;
      case "S":
        if (basePoint != null && prev != null && (prev.command == "C" || prev.command == "S")) {
          addPoint(subPath, [basePoint[0] + 0.5 * prevCtrlPoint[0], basePoint[1] + 0.5 * prevCtrlPoint[1]]);
          ctrlPoint = [basePoint[0] + prevCtrlPoint[0], basePoint[1] + prevCtrlPoint[1]];
        }
        if (ctrlPoint != null) {
          addPoint(subPath, [0.5 * (ctrlPoint[0] + data[0]), 0.5 * (ctrlPoint[1] + data[1])]);
        }
        addPoint(subPath, [0.5 * (data[0] + data[2]), 0.5 * (data[1] + data[3])]);
        prevCtrlPoint = [data[2] - data[0], data[3] - data[1]];
        break;
      case "A":
        if (basePoint != null) {
          var curves = a2c.apply(0, basePoint.concat(data));
          for (var cData; (cData = curves.splice(0, 6).map(toAbsolute)).length; ) {
            if (basePoint != null) {
              addPoint(subPath, [0.5 * (basePoint[0] + cData[0]), 0.5 * (basePoint[1] + cData[1])]);
            }
            addPoint(subPath, [0.5 * (cData[0] + cData[2]), 0.5 * (cData[1] + cData[3])]);
            addPoint(subPath, [0.5 * (cData[2] + cData[4]), 0.5 * (cData[3] + cData[5])]);
            if (curves.length) addPoint(subPath, basePoint = cData.slice(-2));
          }
        }
        break;
    }
    if (data.length >= 2) addPoint(subPath, data.slice(-2));
  }
  return points;
}
function convexHull(points) {
  points.list.sort((function(a, b) {
    return a[0] == b[0] ? a[1] - b[1] : a[0] - b[0];
  }));
  var lower = [], minY = 0, bottom2 = 0;
  for (let i = 0; i < points.list.length; i++) {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], points.list[i]) <= 0) {
      lower.pop();
    }
    if (points.list[i][1] < points.list[minY][1]) {
      minY = i;
      bottom2 = lower.length;
    }
    lower.push(points.list[i]);
  }
  var upper = [], maxY = points.list.length - 1, top2 = 0;
  for (let i = points.list.length; i--; ) {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], points.list[i]) <= 0) {
      upper.pop();
    }
    if (points.list[i][1] > points.list[maxY][1]) {
      maxY = i;
      top2 = upper.length;
    }
    upper.push(points.list[i]);
  }
  upper.pop();
  lower.pop();
  const hullList = lower.concat(upper);
  const hull = { list: hullList, minX: 0, maxX: lower.length, minY: bottom2, maxY: (lower.length + top2) % hullList.length };
  return hull;
}
function cross(o, a, b) {
  return (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
}
var a2c = (x1, y1, rx2, ry, angle2, large_arc_flag, sweep_flag, x2, y2, recursive) => {
  const _120 = Math.PI * 120 / 180;
  const rad = Math.PI / 180 * (+angle2 || 0);
  let res = [];
  const rotateX = (x3, y3, rad2) => x3 * Math.cos(rad2) - y3 * Math.sin(rad2);
  const rotateY = (x3, y3, rad2) => x3 * Math.sin(rad2) + y3 * Math.cos(rad2);
  if (!recursive) {
    x1 = rotateX(x1, y1, -rad);
    y1 = rotateY(x1, y1, -rad);
    x2 = rotateX(x2, y2, -rad);
    y2 = rotateY(x2, y2, -rad);
    var x = (x1 - x2) / 2, y = (y1 - y2) / 2;
    var h = x * x / (rx2 * rx2) + y * y / (ry * ry);
    if (h > 1) {
      h = Math.sqrt(h);
      rx2 = h * rx2;
      ry = h * ry;
    }
    var rx22 = rx2 * rx2;
    var ry2 = ry * ry;
    var k = (large_arc_flag == sweep_flag ? -1 : 1) * Math.sqrt(Math.abs((rx22 * ry2 - rx22 * y * y - ry2 * x * x) / (rx22 * y * y + ry2 * x * x)));
    var cx = k * rx2 * y / ry + (x1 + x2) / 2;
    var cy = k * -ry * x / rx2 + (y1 + y2) / 2;
    var f1 = Math.asin(Number(((y1 - cy) / ry).toFixed(9)));
    var f2 = Math.asin(Number(((y2 - cy) / ry).toFixed(9)));
    f1 = x1 < cx ? Math.PI - f1 : f1;
    f2 = x2 < cx ? Math.PI - f2 : f2;
    f1 < 0 && (f1 = Math.PI * 2 + f1);
    f2 < 0 && (f2 = Math.PI * 2 + f2);
    if (sweep_flag && f1 > f2) {
      f1 = f1 - Math.PI * 2;
    }
    if (!sweep_flag && f2 > f1) {
      f2 = f2 - Math.PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }
  var df = f2 - f1;
  if (Math.abs(df) > _120) {
    var f2old = f2, x2old = x2, y2old = y2;
    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx2 * Math.cos(f2);
    y2 = cy + ry * Math.sin(f2);
    res = a2c(x2, y2, rx2, ry, angle2, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }
  df = f2 - f1;
  var c1 = Math.cos(f1), s1 = Math.sin(f1), c2 = Math.cos(f2), s2 = Math.sin(f2), t = Math.tan(df / 4), hx = 4 / 3 * rx2 * t, hy = 4 / 3 * ry * t, m = [-hx * s1, hy * c1, x2 + hx * s2 - x1, y2 - hy * c2 - y1, x2 - x1, y2 - y1];
  if (recursive) {
    return m.concat(res);
  } else {
    res = m.concat(res);
    var newres = [];
    for (var i = 0, n = res.length; i < n; i++) {
      newres[i] = i % 2 ? rotateY(res[i - 1], res[i], rad) : rotateX(res[i], res[i + 1], rad);
    }
    return newres;
  }
};
var _applyTransforms = {};
var _transforms = {};
var regTransformTypes = /matrix|translate|scale|rotate|skewX|skewY/;
var regTransformSplit = /\s*(matrix|translate|scale|rotate|skewX|skewY)\s*\(\s*(.+?)\s*\)[\s,]*/;
var regNumericValues$2 = /[-+]?(?:\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
_transforms.transform2js = (transformString) => {
  const transforms = [];
  let current = null;
  for (const item of transformString.split(regTransformSplit)) {
    var num2;
    if (item) {
      if (regTransformTypes.test(item)) {
        current = { name: item, data: [] };
        transforms.push(current);
      } else {
        while (num2 = regNumericValues$2.exec(item)) {
          num2 = Number(num2);
          if (current != null) {
            current.data.push(num2);
          }
        }
      }
    }
  }
  return current == null || current.data.length == 0 ? [] : transforms;
};
_transforms.transformsMultiply = (transforms) => {
  const matrixData = transforms.map(((transform) => {
    if (transform.name === "matrix") {
      return transform.data;
    }
    return transformToMatrix(transform);
  }));
  const matrixTransform = { name: "matrix", data: matrixData.length > 0 ? matrixData.reduce(multiplyTransformMatrices) : [] };
  return matrixTransform;
};
var mth = { rad: (deg2) => deg2 * Math.PI / 180, deg: (rad) => rad * 180 / Math.PI, cos: (deg2) => Math.cos(mth.rad(deg2)), acos: (val, floatPrecision) => Number(mth.deg(Math.acos(val)).toFixed(floatPrecision)), sin: (deg2) => Math.sin(mth.rad(deg2)), asin: (val, floatPrecision) => Number(mth.deg(Math.asin(val)).toFixed(floatPrecision)), tan: (deg2) => Math.tan(mth.rad(deg2)), atan: (val, floatPrecision) => Number(mth.deg(Math.atan(val)).toFixed(floatPrecision)) };
_transforms.matrixToTransform = (transform, params) => {
  let floatPrecision = params.floatPrecision;
  let data = transform.data;
  let transforms = [];
  let sx = Number(Math.hypot(data[0], data[1]).toFixed(params.transformPrecision));
  let sy = Number(((data[0] * data[3] - data[1] * data[2]) / sx).toFixed(params.transformPrecision));
  let colsSum = data[0] * data[2] + data[1] * data[3];
  let rowsSum = data[0] * data[1] + data[2] * data[3];
  let scaleBefore = rowsSum != 0 || sx == sy;
  if (data[4] || data[5]) {
    transforms.push({ name: "translate", data: data.slice(4, data[5] ? 6 : 5) });
  }
  if (!data[1] && data[2]) {
    transforms.push({ name: "skewX", data: [mth.atan(data[2] / sy, floatPrecision)] });
  } else if (data[1] && !data[2]) {
    transforms.push({ name: "skewY", data: [mth.atan(data[1] / data[0], floatPrecision)] });
    sx = data[0];
    sy = data[3];
  } else if (!colsSum || sx == 1 && sy == 1 || !scaleBefore) {
    if (!scaleBefore) {
      sx = (data[0] < 0 ? -1 : 1) * Math.hypot(data[0], data[2]);
      sy = (data[3] < 0 ? -1 : 1) * Math.hypot(data[1], data[3]);
      transforms.push({ name: "scale", data: [sx, sy] });
    }
    var angle2 = Math.min(Math.max(-1, data[0] / sx), 1), rotate = [mth.acos(angle2, floatPrecision) * ((scaleBefore ? 1 : sy) * data[1] < 0 ? -1 : 1)];
    if (rotate[0]) transforms.push({ name: "rotate", data: rotate });
    if (rowsSum && colsSum) transforms.push({ name: "skewX", data: [mth.atan(colsSum / (sx * sx), floatPrecision)] });
    if (rotate[0] && (data[4] || data[5])) {
      transforms.shift();
      var cos = data[0] / sx, sin = data[1] / (scaleBefore ? sx : sy), x = data[4] * (scaleBefore ? 1 : sy), y = data[5] * (scaleBefore ? 1 : sx), denom = (Math.pow(1 - cos, 2) + Math.pow(sin, 2)) * (scaleBefore ? 1 : sx * sy);
      rotate.push(((1 - cos) * x - sin * y) / denom);
      rotate.push(((1 - cos) * y + sin * x) / denom);
    }
  } else if (data[1] || data[2]) {
    return [transform];
  }
  if (scaleBefore && (sx != 1 || sy != 1) || !transforms.length) transforms.push({ name: "scale", data: sx == sy ? [sx] : [sx, sy] });
  return transforms;
};
var transformToMatrix = (transform) => {
  if (transform.name === "matrix") {
    return transform.data;
  }
  switch (transform.name) {
    case "translate":
      return [1, 0, 0, 1, transform.data[0], transform.data[1] || 0];
    case "scale":
      return [transform.data[0], 0, 0, transform.data[1] || transform.data[0], 0, 0];
    case "rotate":
      var cos = mth.cos(transform.data[0]), sin = mth.sin(transform.data[0]), cx = transform.data[1] || 0, cy = transform.data[2] || 0;
      return [cos, sin, -sin, cos, (1 - cos) * cx + sin * cy, (1 - cos) * cy - sin * cx];
    case "skewX":
      return [1, 0, mth.tan(transform.data[0]), 1, 0, 0];
    case "skewY":
      return [1, mth.tan(transform.data[0]), 0, 1, 0, 0];
    default:
      throw Error(`Unknown transform ${transform.name}`);
  }
};
_transforms.transformArc = (cursor, arc, transform) => {
  const x = arc[5] - cursor[0];
  const y = arc[6] - cursor[1];
  let a = arc[0];
  let b = arc[1];
  const rot = arc[2] * Math.PI / 180;
  const cos = Math.cos(rot);
  const sin = Math.sin(rot);
  if (a > 0 && b > 0) {
    let h = Math.pow(x * cos + y * sin, 2) / (4 * a * a) + Math.pow(y * cos - x * sin, 2) / (4 * b * b);
    if (h > 1) {
      h = Math.sqrt(h);
      a *= h;
      b *= h;
    }
  }
  const ellipse = [a * cos, a * sin, -b * sin, b * cos, 0, 0];
  const m = multiplyTransformMatrices(transform, ellipse);
  const lastCol = m[2] * m[2] + m[3] * m[3];
  const squareSum = m[0] * m[0] + m[1] * m[1] + lastCol;
  const root = Math.hypot(m[0] - m[3], m[1] + m[2]) * Math.hypot(m[0] + m[3], m[1] - m[2]);
  if (!root) {
    arc[0] = arc[1] = Math.sqrt(squareSum / 2);
    arc[2] = 0;
  } else {
    const majorAxisSqr = (squareSum + root) / 2;
    const minorAxisSqr = (squareSum - root) / 2;
    const major = Math.abs(majorAxisSqr - lastCol) > 1e-6;
    const sub2 = (major ? majorAxisSqr : minorAxisSqr) - lastCol;
    const rowsSum = m[0] * m[2] + m[1] * m[3];
    const term1 = m[0] * sub2 + m[2] * rowsSum;
    const term2 = m[1] * sub2 + m[3] * rowsSum;
    arc[0] = Math.sqrt(majorAxisSqr);
    arc[1] = Math.sqrt(minorAxisSqr);
    arc[2] = ((major ? term2 < 0 : term1 > 0) ? -1 : 1) * Math.acos((major ? term1 : term2) / Math.hypot(term1, term2)) * 180 / Math.PI;
  }
  if (transform[0] < 0 !== transform[3] < 0) {
    arc[4] = 1 - arc[4];
  }
  return arc;
};
var multiplyTransformMatrices = (a, b) => [a[0] * b[0] + a[2] * b[1], a[1] * b[0] + a[3] * b[1], a[0] * b[2] + a[2] * b[3], a[1] * b[2] + a[3] * b[3], a[0] * b[4] + a[2] * b[5] + a[4], a[1] * b[4] + a[3] * b[5] + a[5]];
var { transformsMultiply: transformsMultiply$1, transform2js: transform2js$1, transformArc } = _transforms;
var { removeLeadingZero: removeLeadingZero$1 } = tools;
var { referencesProps: referencesProps$1, attrsGroupsDefaults } = _collections;
var regNumericValues$1 = /[-+]?(\d*\.\d+|\d+\.?)(?:[eE][-+]?\d+)?/g;
var defaultStrokeWidth = attrsGroupsDefaults.presentation["stroke-width"];
var applyTransforms$1 = (elem, pathData, params) => {
  if (elem.attributes.transform == null || elem.attributes.transform === "" || elem.attributes.style != null || Object.entries(elem.attributes).some((([name2, value]) => referencesProps$1.includes(name2) && value.includes("url(")))) {
    return;
  }
  const matrix = transformsMultiply$1(transform2js$1(elem.attributes.transform));
  const stroke = elem.computedAttr("stroke");
  const id = elem.computedAttr("id");
  const transformPrecision = params.transformPrecision;
  if (stroke && stroke != "none") {
    if (!params.applyTransformsStroked || (matrix.data[0] != matrix.data[3] || matrix.data[1] != -matrix.data[2]) && (matrix.data[0] != -matrix.data[3] || matrix.data[1] != matrix.data[2])) return;
    if (id) {
      let idElem = elem;
      let hasStrokeWidth = false;
      do {
        if (idElem.attributes["stroke-width"]) {
          hasStrokeWidth = true;
        }
      } while (idElem.attributes.id !== id && !hasStrokeWidth && (idElem = idElem.parentNode));
      if (!hasStrokeWidth) return;
    }
    const scale = +Math.sqrt(matrix.data[0] * matrix.data[0] + matrix.data[1] * matrix.data[1]).toFixed(transformPrecision);
    if (scale !== 1) {
      const strokeWidth = elem.computedAttr("stroke-width") || defaultStrokeWidth;
      if (elem.attributes["vector-effect"] == null || elem.attributes["vector-effect"] !== "non-scaling-stroke") {
        if (elem.attributes["stroke-width"] != null) {
          elem.attributes["stroke-width"] = elem.attributes["stroke-width"].trim().replace(regNumericValues$1, ((num2) => removeLeadingZero$1(num2 * scale)));
        } else {
          elem.attributes["stroke-width"] = strokeWidth.replace(regNumericValues$1, ((num2) => removeLeadingZero$1(num2 * scale)));
        }
        if (elem.attributes["stroke-dashoffset"] != null) {
          elem.attributes["stroke-dashoffset"] = elem.attributes["stroke-dashoffset"].trim().replace(regNumericValues$1, ((num2) => removeLeadingZero$1(num2 * scale)));
        }
        if (elem.attributes["stroke-dasharray"] != null) {
          elem.attributes["stroke-dasharray"] = elem.attributes["stroke-dasharray"].trim().replace(regNumericValues$1, ((num2) => removeLeadingZero$1(num2 * scale)));
        }
      }
    }
  } else if (id) {
    return;
  }
  applyMatrixToPathData(pathData, matrix.data);
  delete elem.attributes.transform;
  return;
};
_applyTransforms.applyTransforms = applyTransforms$1;
var transformAbsolutePoint = (matrix, x, y) => {
  const newX = matrix[0] * x + matrix[2] * y + matrix[4];
  const newY = matrix[1] * x + matrix[3] * y + matrix[5];
  return [newX, newY];
};
var transformRelativePoint = (matrix, x, y) => {
  const newX = matrix[0] * x + matrix[2] * y;
  const newY = matrix[1] * x + matrix[3] * y;
  return [newX, newY];
};
var applyMatrixToPathData = (pathData, matrix) => {
  const start = [0, 0];
  const cursor = [0, 0];
  for (const pathItem of pathData) {
    let { command, args } = pathItem;
    if (command === "M") {
      cursor[0] = args[0];
      cursor[1] = args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
      const [x, y] = transformAbsolutePoint(matrix, args[0], args[1]);
      args[0] = x;
      args[1] = y;
    }
    if (command === "m") {
      cursor[0] += args[0];
      cursor[1] += args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
      const [x, y] = transformRelativePoint(matrix, args[0], args[1]);
      args[0] = x;
      args[1] = y;
    }
    if (command === "H") {
      command = "L";
      args = [args[0], cursor[1]];
    }
    if (command === "h") {
      command = "l";
      args = [args[0], 0];
    }
    if (command === "V") {
      command = "L";
      args = [cursor[0], args[0]];
    }
    if (command === "v") {
      command = "l";
      args = [0, args[0]];
    }
    if (command === "L") {
      cursor[0] = args[0];
      cursor[1] = args[1];
      const [x, y] = transformAbsolutePoint(matrix, args[0], args[1]);
      args[0] = x;
      args[1] = y;
    }
    if (command === "l") {
      cursor[0] += args[0];
      cursor[1] += args[1];
      const [x, y] = transformRelativePoint(matrix, args[0], args[1]);
      args[0] = x;
      args[1] = y;
    }
    if (command === "C") {
      cursor[0] = args[4];
      cursor[1] = args[5];
      const [x1, y1] = transformAbsolutePoint(matrix, args[0], args[1]);
      const [x2, y2] = transformAbsolutePoint(matrix, args[2], args[3]);
      const [x, y] = transformAbsolutePoint(matrix, args[4], args[5]);
      args[0] = x1;
      args[1] = y1;
      args[2] = x2;
      args[3] = y2;
      args[4] = x;
      args[5] = y;
    }
    if (command === "c") {
      cursor[0] += args[4];
      cursor[1] += args[5];
      const [x1, y1] = transformRelativePoint(matrix, args[0], args[1]);
      const [x2, y2] = transformRelativePoint(matrix, args[2], args[3]);
      const [x, y] = transformRelativePoint(matrix, args[4], args[5]);
      args[0] = x1;
      args[1] = y1;
      args[2] = x2;
      args[3] = y2;
      args[4] = x;
      args[5] = y;
    }
    if (command === "S") {
      cursor[0] = args[2];
      cursor[1] = args[3];
      const [x2, y2] = transformAbsolutePoint(matrix, args[0], args[1]);
      const [x, y] = transformAbsolutePoint(matrix, args[2], args[3]);
      args[0] = x2;
      args[1] = y2;
      args[2] = x;
      args[3] = y;
    }
    if (command === "s") {
      cursor[0] += args[2];
      cursor[1] += args[3];
      const [x2, y2] = transformRelativePoint(matrix, args[0], args[1]);
      const [x, y] = transformRelativePoint(matrix, args[2], args[3]);
      args[0] = x2;
      args[1] = y2;
      args[2] = x;
      args[3] = y;
    }
    if (command === "Q") {
      cursor[0] = args[2];
      cursor[1] = args[3];
      const [x1, y1] = transformAbsolutePoint(matrix, args[0], args[1]);
      const [x, y] = transformAbsolutePoint(matrix, args[2], args[3]);
      args[0] = x1;
      args[1] = y1;
      args[2] = x;
      args[3] = y;
    }
    if (command === "q") {
      cursor[0] += args[2];
      cursor[1] += args[3];
      const [x1, y1] = transformRelativePoint(matrix, args[0], args[1]);
      const [x, y] = transformRelativePoint(matrix, args[2], args[3]);
      args[0] = x1;
      args[1] = y1;
      args[2] = x;
      args[3] = y;
    }
    if (command === "T") {
      cursor[0] = args[0];
      cursor[1] = args[1];
      const [x, y] = transformAbsolutePoint(matrix, args[0], args[1]);
      args[0] = x;
      args[1] = y;
    }
    if (command === "t") {
      cursor[0] += args[0];
      cursor[1] += args[1];
      const [x, y] = transformRelativePoint(matrix, args[0], args[1]);
      args[0] = x;
      args[1] = y;
    }
    if (command === "A") {
      transformArc(cursor, args, matrix);
      cursor[0] = args[5];
      cursor[1] = args[6];
      if (Math.abs(args[2]) > 80) {
        const a = args[0];
        const rotation = args[2];
        args[0] = args[1];
        args[1] = a;
        args[2] = rotation + (rotation > 0 ? -90 : 90);
      }
      const [x, y] = transformAbsolutePoint(matrix, args[5], args[6]);
      args[5] = x;
      args[6] = y;
    }
    if (command === "a") {
      transformArc([0, 0], args, matrix);
      cursor[0] += args[5];
      cursor[1] += args[6];
      if (Math.abs(args[2]) > 80) {
        const a = args[0];
        const rotation = args[2];
        args[0] = args[1];
        args[1] = a;
        args[2] = rotation + (rotation > 0 ? -90 : 90);
      }
      const [x, y] = transformRelativePoint(matrix, args[5], args[6]);
      args[5] = x;
      args[6] = y;
    }
    if (command === "z" || command === "Z") {
      cursor[0] = start[0];
      cursor[1] = start[1];
    }
    pathItem.command = command;
    pathItem.args = args;
  }
};
var { collectStylesheet: collectStylesheet$1, computeStyle: computeStyle$1 } = style;
var { pathElems } = _collections;
var { path2js: path2js$1, js2path: js2path$1 } = _path;
var { applyTransforms } = _applyTransforms;
var { cleanupOutData: cleanupOutData$1 } = tools;
convertPathData$1.name = "convertPathData";
convertPathData$1.type = "visitor";
convertPathData$1.active = true;
convertPathData$1.description = "optimizes path data: writes in shorter form, applies transformations";
convertPathData$1.params = { applyTransforms: true, applyTransformsStroked: true, makeArcs: { threshold: 2.5, tolerance: 0.5 }, straightCurves: true, lineShorthands: true, curveSmoothShorthands: true, floatPrecision: 3, transformPrecision: 5, removeUseless: true, collapseRepeated: true, utilizeAbsolute: true, leadingZero: true, negativeExtraSpace: true, noSpaceAfterFlags: false, forceAbsolutePath: false };
var roundData;
var precision;
var error;
var arcThreshold;
var arcTolerance;
convertPathData$1.fn = (root, params) => {
  const stylesheet = collectStylesheet$1(root);
  return { element: { enter: (node2) => {
    if (pathElems.includes(node2.name) && node2.attributes.d != null) {
      const computedStyle = computeStyle$1(stylesheet, node2);
      precision = params.floatPrecision;
      error = precision !== false ? +Math.pow(0.1, precision).toFixed(precision) : 0.01;
      roundData = precision > 0 && precision < 20 ? strongRound : round$1;
      if (params.makeArcs) {
        arcThreshold = params.makeArcs.threshold;
        arcTolerance = params.makeArcs.tolerance;
      }
      const hasMarkerMid = computedStyle["marker-mid"] != null;
      const maybeHasStroke = computedStyle.stroke && (computedStyle.stroke.type === "dynamic" || computedStyle.stroke.value !== "none");
      const maybeHasLinecap = computedStyle["stroke-linecap"] && (computedStyle["stroke-linecap"].type === "dynamic" || computedStyle["stroke-linecap"].value !== "butt");
      const maybeHasStrokeAndLinecap = maybeHasStroke && maybeHasLinecap;
      var data = path2js$1(node2);
      if (data.length) {
        if (params.applyTransforms) {
          applyTransforms(node2, data, params);
        }
        convertToRelative(data);
        data = filters(data, params, { maybeHasStrokeAndLinecap, hasMarkerMid });
        if (params.utilizeAbsolute) {
          data = convertToMixed(data, params);
        }
        js2path$1(node2, data, params);
      }
    }
  } } };
};
var convertToRelative = (pathData) => {
  let start = [0, 0];
  let cursor = [0, 0];
  let prevCoords = [0, 0];
  for (let i = 0; i < pathData.length; i += 1) {
    const pathItem = pathData[i];
    let { command, args } = pathItem;
    if (command === "m") {
      cursor[0] += args[0];
      cursor[1] += args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
    }
    if (command === "M") {
      if (i !== 0) {
        command = "m";
      }
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      cursor[0] += args[0];
      cursor[1] += args[1];
      start[0] = cursor[0];
      start[1] = cursor[1];
    }
    if (command === "l") {
      cursor[0] += args[0];
      cursor[1] += args[1];
    }
    if (command === "L") {
      command = "l";
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      cursor[0] += args[0];
      cursor[1] += args[1];
    }
    if (command === "h") {
      cursor[0] += args[0];
    }
    if (command === "H") {
      command = "h";
      args[0] -= cursor[0];
      cursor[0] += args[0];
    }
    if (command === "v") {
      cursor[1] += args[0];
    }
    if (command === "V") {
      command = "v";
      args[0] -= cursor[1];
      cursor[1] += args[0];
    }
    if (command === "c") {
      cursor[0] += args[4];
      cursor[1] += args[5];
    }
    if (command === "C") {
      command = "c";
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      args[2] -= cursor[0];
      args[3] -= cursor[1];
      args[4] -= cursor[0];
      args[5] -= cursor[1];
      cursor[0] += args[4];
      cursor[1] += args[5];
    }
    if (command === "s") {
      cursor[0] += args[2];
      cursor[1] += args[3];
    }
    if (command === "S") {
      command = "s";
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      args[2] -= cursor[0];
      args[3] -= cursor[1];
      cursor[0] += args[2];
      cursor[1] += args[3];
    }
    if (command === "q") {
      cursor[0] += args[2];
      cursor[1] += args[3];
    }
    if (command === "Q") {
      command = "q";
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      args[2] -= cursor[0];
      args[3] -= cursor[1];
      cursor[0] += args[2];
      cursor[1] += args[3];
    }
    if (command === "t") {
      cursor[0] += args[0];
      cursor[1] += args[1];
    }
    if (command === "T") {
      command = "t";
      args[0] -= cursor[0];
      args[1] -= cursor[1];
      cursor[0] += args[0];
      cursor[1] += args[1];
    }
    if (command === "a") {
      cursor[0] += args[5];
      cursor[1] += args[6];
    }
    if (command === "A") {
      command = "a";
      args[5] -= cursor[0];
      args[6] -= cursor[1];
      cursor[0] += args[5];
      cursor[1] += args[6];
    }
    if (command === "Z" || command === "z") {
      cursor[0] = start[0];
      cursor[1] = start[1];
    }
    pathItem.command = command;
    pathItem.args = args;
    pathItem.base = prevCoords;
    pathItem.coords = [cursor[0], cursor[1]];
    prevCoords = pathItem.coords;
  }
  return pathData;
};
function filters(path2, params, { maybeHasStrokeAndLinecap, hasMarkerMid }) {
  var stringify2 = data2Path.bind(null, params), relSubpoint = [0, 0], pathBase = [0, 0], prev = {};
  path2 = path2.filter((function(item, index, path3) {
    let command = item.command;
    let data = item.args;
    let next = path3[index + 1];
    if (command !== "Z" && command !== "z") {
      var sdata = data, circle;
      if (command === "s") {
        sdata = [0, 0].concat(data);
        if (command === "c" || command === "s") {
          var pdata = prev.args, n = pdata.length;
          sdata[0] = pdata[n - 2] - pdata[n - 4];
          sdata[1] = pdata[n - 1] - pdata[n - 3];
        }
      }
      if (params.makeArcs && (command == "c" || command == "s") && isConvex(sdata) && (circle = findCircle(sdata))) {
        var r = roundData([circle.radius])[0], angle2 = findArcAngle(sdata, circle), sweep = sdata[5] * sdata[0] - sdata[4] * sdata[1] > 0 ? 1 : 0, arc = { command: "a", args: [r, r, 0, 0, sweep, sdata[4], sdata[5]], coords: item.coords.slice(), base: item.base }, output = [arc], relCenter = [circle.center[0] - sdata[4], circle.center[1] - sdata[5]], relCircle = { center: relCenter, radius: circle.radius }, arcCurves = [item], hasPrev = 0, suffix = "", nextLonghand;
        if (prev.command == "c" && isConvex(prev.args) && isArcPrev(prev.args, circle) || prev.command == "a" && prev.sdata && isArcPrev(prev.sdata, circle)) {
          arcCurves.unshift(prev);
          arc.base = prev.base;
          arc.args[5] = arc.coords[0] - arc.base[0];
          arc.args[6] = arc.coords[1] - arc.base[1];
          var prevData = prev.command == "a" ? prev.sdata : prev.args;
          var prevAngle = findArcAngle(prevData, { center: [prevData[4] + circle.center[0], prevData[5] + circle.center[1]], radius: circle.radius });
          angle2 += prevAngle;
          if (angle2 > Math.PI) arc.args[3] = 1;
          hasPrev = 1;
        }
        for (var j = index; (next = path3[++j]) && ~"cs".indexOf(next.command); ) {
          var nextData = next.args;
          if (next.command == "s") {
            nextLonghand = makeLonghand({ command: "s", args: next.args.slice() }, path3[j - 1].args);
            nextData = nextLonghand.args;
            nextLonghand.args = nextData.slice(0, 2);
            suffix = stringify2([nextLonghand]);
          }
          if (isConvex(nextData) && isArc(nextData, relCircle)) {
            angle2 += findArcAngle(nextData, relCircle);
            if (angle2 - 2 * Math.PI > 1e-3) break;
            if (angle2 > Math.PI) arc.args[3] = 1;
            arcCurves.push(next);
            if (2 * Math.PI - angle2 > 1e-3) {
              arc.coords = next.coords;
              arc.args[5] = arc.coords[0] - arc.base[0];
              arc.args[6] = arc.coords[1] - arc.base[1];
            } else {
              arc.args[5] = 2 * (relCircle.center[0] - nextData[4]);
              arc.args[6] = 2 * (relCircle.center[1] - nextData[5]);
              arc.coords = [arc.base[0] + arc.args[5], arc.base[1] + arc.args[6]];
              arc = { command: "a", args: [r, r, 0, 0, sweep, next.coords[0] - arc.coords[0], next.coords[1] - arc.coords[1]], coords: next.coords, base: arc.coords };
              output.push(arc);
              j++;
              break;
            }
            relCenter[0] -= nextData[4];
            relCenter[1] -= nextData[5];
          } else break;
        }
        if ((stringify2(output) + suffix).length < stringify2(arcCurves).length) {
          if (path3[j] && path3[j].command == "s") {
            makeLonghand(path3[j], path3[j - 1].args);
          }
          if (hasPrev) {
            var prevArc = output.shift();
            roundData(prevArc.args);
            relSubpoint[0] += prevArc.args[5] - prev.args[prev.args.length - 2];
            relSubpoint[1] += prevArc.args[6] - prev.args[prev.args.length - 1];
            prev.command = "a";
            prev.args = prevArc.args;
            item.base = prev.coords = prevArc.coords;
          }
          arc = output.shift();
          if (arcCurves.length == 1) {
            item.sdata = sdata.slice();
          } else if (arcCurves.length - 1 - hasPrev > 0) {
            path3.splice.apply(path3, [index + 1, arcCurves.length - 1 - hasPrev].concat(output));
          }
          if (!arc) return false;
          command = "a";
          data = arc.args;
          item.coords = arc.coords;
        }
      }
      if (precision !== false) {
        if (command === "m" || command === "l" || command === "t" || command === "q" || command === "s" || command === "c") {
          for (var i = data.length; i--; ) {
            data[i] += item.base[i % 2] - relSubpoint[i % 2];
          }
        } else if (command == "h") {
          data[0] += item.base[0] - relSubpoint[0];
        } else if (command == "v") {
          data[0] += item.base[1] - relSubpoint[1];
        } else if (command == "a") {
          data[5] += item.base[0] - relSubpoint[0];
          data[6] += item.base[1] - relSubpoint[1];
        }
        roundData(data);
        if (command == "h") relSubpoint[0] += data[0];
        else if (command == "v") relSubpoint[1] += data[0];
        else {
          relSubpoint[0] += data[data.length - 2];
          relSubpoint[1] += data[data.length - 1];
        }
        roundData(relSubpoint);
        if (command === "M" || command === "m") {
          pathBase[0] = relSubpoint[0];
          pathBase[1] = relSubpoint[1];
        }
      }
      if (params.straightCurves) {
        if (command === "c" && isCurveStraightLine(data) || command === "s" && isCurveStraightLine(sdata)) {
          if (next && next.command == "s") makeLonghand(next, data);
          command = "l";
          data = data.slice(-2);
        } else if (command === "q" && isCurveStraightLine(data)) {
          if (next && next.command == "t") makeLonghand(next, data);
          command = "l";
          data = data.slice(-2);
        } else if (command === "t" && prev.command !== "q" && prev.command !== "t") {
          command = "l";
          data = data.slice(-2);
        } else if (command === "a" && (data[0] === 0 || data[1] === 0)) {
          command = "l";
          data = data.slice(-2);
        }
      }
      if (params.lineShorthands && command === "l") {
        if (data[1] === 0) {
          command = "h";
          data.pop();
        } else if (data[0] === 0) {
          command = "v";
          data.shift();
        }
      }
      if (params.collapseRepeated && hasMarkerMid === false && (command === "m" || command === "h" || command === "v") && prev.command && command == prev.command.toLowerCase() && (command != "h" && command != "v" || prev.args[0] >= 0 == data[0] >= 0)) {
        prev.args[0] += data[0];
        if (command != "h" && command != "v") {
          prev.args[1] += data[1];
        }
        prev.coords = item.coords;
        path3[index] = prev;
        return false;
      }
      if (params.curveSmoothShorthands && prev.command) {
        if (command === "c") {
          if (prev.command === "c" && data[0] === -(prev.args[2] - prev.args[4]) && data[1] === -(prev.args[3] - prev.args[5])) {
            command = "s";
            data = data.slice(2);
          } else if (prev.command === "s" && data[0] === -(prev.args[0] - prev.args[2]) && data[1] === -(prev.args[1] - prev.args[3])) {
            command = "s";
            data = data.slice(2);
          } else if (prev.command !== "c" && prev.command !== "s" && data[0] === 0 && data[1] === 0) {
            command = "s";
            data = data.slice(2);
          }
        } else if (command === "q") {
          if (prev.command === "q" && data[0] === prev.args[2] - prev.args[0] && data[1] === prev.args[3] - prev.args[1]) {
            command = "t";
            data = data.slice(2);
          } else if (prev.command === "t" && data[2] === prev.args[0] && data[3] === prev.args[1]) {
            command = "t";
            data = data.slice(2);
          }
        }
      }
      if (params.removeUseless && !maybeHasStrokeAndLinecap) {
        if ((command === "l" || command === "h" || command === "v" || command === "q" || command === "t" || command === "c" || command === "s") && data.every((function(i2) {
          return i2 === 0;
        }))) {
          path3[index] = prev;
          return false;
        }
        if (command === "a" && data[5] === 0 && data[6] === 0) {
          path3[index] = prev;
          return false;
        }
      }
      item.command = command;
      item.args = data;
      prev = item;
    } else {
      relSubpoint[0] = pathBase[0];
      relSubpoint[1] = pathBase[1];
      if (prev.command === "Z" || prev.command === "z") return false;
      prev = item;
    }
    return true;
  }));
  return path2;
}
function convertToMixed(path2, params) {
  var prev = path2[0];
  path2 = path2.filter((function(item, index) {
    if (index == 0) return true;
    if (item.command === "Z" || item.command === "z") {
      prev = item;
      return true;
    }
    var command = item.command, data = item.args, adata = data.slice();
    if (command === "m" || command === "l" || command === "t" || command === "q" || command === "s" || command === "c") {
      for (var i = adata.length; i--; ) {
        adata[i] += item.base[i % 2];
      }
    } else if (command == "h") {
      adata[0] += item.base[0];
    } else if (command == "v") {
      adata[0] += item.base[1];
    } else if (command == "a") {
      adata[5] += item.base[0];
      adata[6] += item.base[1];
    }
    roundData(adata);
    var absoluteDataStr = cleanupOutData$1(adata, params), relativeDataStr = cleanupOutData$1(data, params);
    if (params.forceAbsolutePath || absoluteDataStr.length < relativeDataStr.length && !(params.negativeExtraSpace && command == prev.command && prev.command.charCodeAt(0) > 96 && absoluteDataStr.length == relativeDataStr.length - 1 && (data[0] < 0 || /^0\./.test(data[0]) && prev.args[prev.args.length - 1] % 1))) {
      item.command = command.toUpperCase();
      item.args = adata;
    }
    prev = item;
    return true;
  }));
  return path2;
}
function isConvex(data) {
  var center = getIntersection([0, 0, data[2], data[3], data[0], data[1], data[4], data[5]]);
  return center && data[2] < center[0] == center[0] < 0 && data[3] < center[1] == center[1] < 0 && data[4] < center[0] == center[0] < data[0] && data[5] < center[1] == center[1] < data[1];
}
function getIntersection(coords) {
  var a1 = coords[1] - coords[3], b1 = coords[2] - coords[0], c1 = coords[0] * coords[3] - coords[2] * coords[1], a2 = coords[5] - coords[7], b2 = coords[6] - coords[4], c2 = coords[4] * coords[7] - coords[5] * coords[6], denom = a1 * b2 - a2 * b1;
  if (!denom) return;
  var cross2 = [(b1 * c2 - b2 * c1) / denom, (a1 * c2 - a2 * c1) / -denom];
  if (!isNaN(cross2[0]) && !isNaN(cross2[1]) && isFinite(cross2[0]) && isFinite(cross2[1])) {
    return cross2;
  }
}
function strongRound(data) {
  for (var i = data.length; i-- > 0; ) {
    if (data[i].toFixed(precision) != data[i]) {
      var rounded = +data[i].toFixed(precision - 1);
      data[i] = +Math.abs(rounded - data[i]).toFixed(precision + 1) >= error ? +data[i].toFixed(precision) : rounded;
    }
  }
  return data;
}
function round$1(data) {
  for (var i = data.length; i-- > 0; ) {
    data[i] = Math.round(data[i]);
  }
  return data;
}
function isCurveStraightLine(data) {
  var i = data.length - 2, a = -data[i + 1], b = data[i], d = 1 / (a * a + b * b);
  if (i <= 1 || !isFinite(d)) return false;
  while ((i -= 2) >= 0) {
    if (Math.sqrt(Math.pow(a * data[i] + b * data[i + 1], 2) * d) > error) return false;
  }
  return true;
}
function makeLonghand(item, data) {
  switch (item.command) {
    case "s":
      item.command = "c";
      break;
    case "t":
      item.command = "q";
      break;
  }
  item.args.unshift(data[data.length - 2] - data[data.length - 4], data[data.length - 1] - data[data.length - 3]);
  return item;
}
function getDistance(point1, point2) {
  return Math.hypot(point1[0] - point2[0], point1[1] - point2[1]);
}
function getCubicBezierPoint(curve, t) {
  var sqrT = t * t, cubT = sqrT * t, mt = 1 - t, sqrMt = mt * mt;
  return [3 * sqrMt * t * curve[0] + 3 * mt * sqrT * curve[2] + cubT * curve[4], 3 * sqrMt * t * curve[1] + 3 * mt * sqrT * curve[3] + cubT * curve[5]];
}
function findCircle(curve) {
  var midPoint = getCubicBezierPoint(curve, 1 / 2), m1 = [midPoint[0] / 2, midPoint[1] / 2], m2 = [(midPoint[0] + curve[4]) / 2, (midPoint[1] + curve[5]) / 2], center = getIntersection([m1[0], m1[1], m1[0] + m1[1], m1[1] - m1[0], m2[0], m2[1], m2[0] + (m2[1] - midPoint[1]), m2[1] - (m2[0] - midPoint[0])]), radius = center && getDistance([0, 0], center), tolerance = Math.min(arcThreshold * error, arcTolerance * radius / 100);
  if (center && radius < 1e15 && [1 / 4, 3 / 4].every((function(point) {
    return Math.abs(getDistance(getCubicBezierPoint(curve, point), center) - radius) <= tolerance;
  }))) return { center, radius };
}
function isArc(curve, circle) {
  var tolerance = Math.min(arcThreshold * error, arcTolerance * circle.radius / 100);
  return [0, 1 / 4, 1 / 2, 3 / 4, 1].every((function(point) {
    return Math.abs(getDistance(getCubicBezierPoint(curve, point), circle.center) - circle.radius) <= tolerance;
  }));
}
function isArcPrev(curve, circle) {
  return isArc(curve, { center: [circle.center[0] + curve[4], circle.center[1] + curve[5]], radius: circle.radius });
}
function findArcAngle(curve, relCircle) {
  var x1 = -relCircle.center[0], y1 = -relCircle.center[1], x2 = curve[4] - relCircle.center[0], y2 = curve[5] - relCircle.center[1];
  return Math.acos((x1 * x2 + y1 * y2) / Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2)));
}
function data2Path(params, pathData) {
  return pathData.reduce((function(pathString, item) {
    var strData = "";
    if (item.args) {
      strData = cleanupOutData$1(roundData(item.args.slice()), params);
    }
    return pathString + item.command + strData;
  }), "");
}
var convertTransform$2 = {};
var { cleanupOutData } = tools;
var { transform2js, transformsMultiply, matrixToTransform } = _transforms;
convertTransform$2.type = "visitor";
convertTransform$2.name = "convertTransform";
convertTransform$2.active = true;
convertTransform$2.description = "collapses multiple transformations and optimizes it";
convertTransform$2.fn = (_root, params) => {
  const { convertToShorts: convertToShorts2 = true, degPrecision, floatPrecision = 3, transformPrecision = 5, matrixToTransform: matrixToTransform2 = true, shortTranslate = true, shortScale = true, shortRotate = true, removeUseless: removeUseless2 = true, collapseIntoOne = true, leadingZero = true, negativeExtraSpace = false } = params;
  const newParams = { convertToShorts: convertToShorts2, degPrecision, floatPrecision, transformPrecision, matrixToTransform: matrixToTransform2, shortTranslate, shortScale, shortRotate, removeUseless: removeUseless2, collapseIntoOne, leadingZero, negativeExtraSpace };
  return { element: { enter: (node2) => {
    if (node2.attributes.transform != null) {
      convertTransform$1(node2, "transform", newParams);
    }
    if (node2.attributes.gradientTransform != null) {
      convertTransform$1(node2, "gradientTransform", newParams);
    }
    if (node2.attributes.patternTransform != null) {
      convertTransform$1(node2, "patternTransform", newParams);
    }
  } } };
};
var convertTransform$1 = (item, attrName, params) => {
  let data = transform2js(item.attributes[attrName]);
  params = definePrecision(data, params);
  if (params.collapseIntoOne && data.length > 1) {
    data = [transformsMultiply(data)];
  }
  if (params.convertToShorts) {
    data = convertToShorts(data, params);
  } else {
    data.forEach(((item2) => roundTransform(item2, params)));
  }
  if (params.removeUseless) {
    data = removeUseless(data);
  }
  if (data.length) {
    item.attributes[attrName] = js2transform(data, params);
  } else {
    delete item.attributes[attrName];
  }
};
var definePrecision = (data, _a) => {
  var newParams = __objRest(_a, []);
  const matrixData = [];
  for (const item of data) {
    if (item.name == "matrix") {
      matrixData.push(...item.data.slice(0, 4));
    }
  }
  let significantDigits = newParams.transformPrecision;
  if (matrixData.length) {
    newParams.transformPrecision = Math.min(newParams.transformPrecision, Math.max.apply(Math, matrixData.map(floatDigits)) || newParams.transformPrecision);
    significantDigits = Math.max.apply(Math, matrixData.map(((n) => n.toString().replace(/\D+/g, "").length)));
  }
  if (newParams.degPrecision == null) {
    newParams.degPrecision = Math.max(0, Math.min(newParams.floatPrecision, significantDigits - 2));
  }
  return newParams;
};
var degRound = (data, params) => {
  if (params.degPrecision != null && params.degPrecision >= 1 && params.floatPrecision < 20) {
    return smartRound(params.degPrecision, data);
  } else {
    return round(data);
  }
};
var floatRound = (data, params) => {
  if (params.floatPrecision >= 1 && params.floatPrecision < 20) {
    return smartRound(params.floatPrecision, data);
  } else {
    return round(data);
  }
};
var transformRound = (data, params) => {
  if (params.transformPrecision >= 1 && params.floatPrecision < 20) {
    return smartRound(params.transformPrecision, data);
  } else {
    return round(data);
  }
};
var floatDigits = (n) => {
  const str = n.toString();
  return str.slice(str.indexOf(".")).length - 1;
};
var convertToShorts = (transforms, params) => {
  for (var i = 0; i < transforms.length; i++) {
    var transform = transforms[i];
    if (params.matrixToTransform && transform.name === "matrix") {
      var decomposed = matrixToTransform(transform, params);
      if (js2transform(decomposed, params).length <= js2transform([transform], params).length) {
        transforms.splice(i, 1, ...decomposed);
      }
      transform = transforms[i];
    }
    roundTransform(transform, params);
    if (params.shortTranslate && transform.name === "translate" && transform.data.length === 2 && !transform.data[1]) {
      transform.data.pop();
    }
    if (params.shortScale && transform.name === "scale" && transform.data.length === 2 && transform.data[0] === transform.data[1]) {
      transform.data.pop();
    }
    if (params.shortRotate && transforms[i - 2] && transforms[i - 2].name === "translate" && transforms[i - 1].name === "rotate" && transforms[i].name === "translate" && transforms[i - 2].data[0] === -transforms[i].data[0] && transforms[i - 2].data[1] === -transforms[i].data[1]) {
      transforms.splice(i - 2, 3, { name: "rotate", data: [transforms[i - 1].data[0], transforms[i - 2].data[0], transforms[i - 2].data[1]] });
      i -= 2;
    }
  }
  return transforms;
};
var removeUseless = (transforms) => transforms.filter(((transform) => {
  if (["translate", "rotate", "skewX", "skewY"].indexOf(transform.name) > -1 && (transform.data.length == 1 || transform.name == "rotate") && !transform.data[0] || transform.name == "translate" && !transform.data[0] && !transform.data[1] || transform.name == "scale" && transform.data[0] == 1 && (transform.data.length < 2 || transform.data[1] == 1) || transform.name == "matrix" && transform.data[0] == 1 && transform.data[3] == 1 && !(transform.data[1] || transform.data[2] || transform.data[4] || transform.data[5])) {
    return false;
  }
  return true;
}));
var js2transform = (transformJS, params) => {
  var transformString = "";
  transformJS.forEach(((transform) => {
    roundTransform(transform, params);
    transformString += (transformString && " ") + transform.name + "(" + cleanupOutData(transform.data, params) + ")";
  }));
  return transformString;
};
var roundTransform = (transform, params) => {
  switch (transform.name) {
    case "translate":
      transform.data = floatRound(transform.data, params);
      break;
    case "rotate":
      transform.data = [...degRound(transform.data.slice(0, 1), params), ...floatRound(transform.data.slice(1), params)];
      break;
    case "skewX":
    case "skewY":
      transform.data = degRound(transform.data, params);
      break;
    case "scale":
      transform.data = transformRound(transform.data, params);
      break;
    case "matrix":
      transform.data = [...transformRound(transform.data.slice(0, 4), params), ...floatRound(transform.data.slice(4), params)];
      break;
  }
  return transform;
};
var round = (data) => data.map(Math.round);
var smartRound = (precision2, data) => {
  for (var i = data.length, tolerance = +Math.pow(0.1, precision2).toFixed(precision2); i--; ) {
    if (Number(data[i].toFixed(precision2)) !== data[i]) {
      var rounded = +data[i].toFixed(precision2 - 1);
      data[i] = +Math.abs(rounded - data[i]).toFixed(precision2 + 1) >= tolerance ? +data[i].toFixed(precision2) : rounded;
    }
  }
  return data;
};
var removeEmptyAttrs$1 = {};
var { attrsGroups } = _collections;
removeEmptyAttrs$1.type = "visitor";
removeEmptyAttrs$1.name = "removeEmptyAttrs";
removeEmptyAttrs$1.active = true;
removeEmptyAttrs$1.description = "removes empty attributes";
removeEmptyAttrs$1.fn = () => ({ element: { enter: (node2) => {
  for (const [name2, value] of Object.entries(node2.attributes)) {
    if (value === "" && attrsGroups.conditionalProcessing.includes(name2) === false) {
      delete node2.attributes[name2];
    }
  }
} } });
var removeEmptyContainers$1 = {};
var { detachNodeFromParent: detachNodeFromParent$8 } = xast;
var { elemsGroups } = _collections;
removeEmptyContainers$1.type = "visitor";
removeEmptyContainers$1.name = "removeEmptyContainers";
removeEmptyContainers$1.active = true;
removeEmptyContainers$1.description = "removes empty container elements";
removeEmptyContainers$1.fn = () => ({ element: { exit: (node2, parentNode) => {
  if (node2.name === "svg" || elemsGroups.container.includes(node2.name) === false || node2.children.length !== 0) {
    return;
  }
  if (node2.name === "pattern" && Object.keys(node2.attributes).length !== 0) {
    return;
  }
  if (node2.name === "g" && node2.attributes.filter != null) {
    return;
  }
  if (node2.name === "mask" && node2.attributes.id != null) {
    return;
  }
  detachNodeFromParent$8(node2, parentNode);
} } });
var mergePaths$1 = {};
var { detachNodeFromParent: detachNodeFromParent$7 } = xast;
var { collectStylesheet, computeStyle } = style;
var { path2js, js2path, intersects: intersects$1 } = _path;
mergePaths$1.type = "visitor";
mergePaths$1.name = "mergePaths";
mergePaths$1.active = true;
mergePaths$1.description = "merges multiple paths in one if possible";
mergePaths$1.fn = (root, params) => {
  const { force = false, floatPrecision, noSpaceAfterFlags = false } = params;
  const stylesheet = collectStylesheet(root);
  return { element: { enter: (node2) => {
    let prevChild = null;
    for (const child of node2.children) {
      if (prevChild == null || prevChild.type !== "element" || prevChild.name !== "path" || prevChild.children.length !== 0 || prevChild.attributes.d == null) {
        prevChild = child;
        continue;
      }
      if (child.type !== "element" || child.name !== "path" || child.children.length !== 0 || child.attributes.d == null) {
        prevChild = child;
        continue;
      }
      const computedStyle = computeStyle(stylesheet, child);
      if (computedStyle["marker-start"] || computedStyle["marker-mid"] || computedStyle["marker-end"]) {
        prevChild = child;
        continue;
      }
      const prevChildAttrs = Object.keys(prevChild.attributes);
      const childAttrs = Object.keys(child.attributes);
      let attributesAreEqual = prevChildAttrs.length === childAttrs.length;
      for (const name2 of childAttrs) {
        if (name2 !== "d") {
          if (prevChild.attributes[name2] == null || prevChild.attributes[name2] !== child.attributes[name2]) {
            attributesAreEqual = false;
          }
        }
      }
      const prevPathJS = path2js(prevChild);
      const curPathJS = path2js(child);
      if (attributesAreEqual && (force || !intersects$1(prevPathJS, curPathJS))) {
        js2path(prevChild, prevPathJS.concat(curPathJS), { floatPrecision, noSpaceAfterFlags });
        detachNodeFromParent$7(child, node2);
        continue;
      }
      prevChild = child;
    }
  } } };
};
var removeUnusedNS$1 = {};
removeUnusedNS$1.type = "visitor";
removeUnusedNS$1.name = "removeUnusedNS";
removeUnusedNS$1.active = true;
removeUnusedNS$1.description = "removes unused namespaces declaration";
removeUnusedNS$1.fn = () => {
  const unusedNamespaces = /* @__PURE__ */ new Set();
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "svg" && parentNode.type === "root") {
      for (const name2 of Object.keys(node2.attributes)) {
        if (name2.startsWith("xmlns:")) {
          const local = name2.slice("xmlns:".length);
          unusedNamespaces.add(local);
        }
      }
    }
    if (unusedNamespaces.size !== 0) {
      if (node2.name.includes(":")) {
        const [ns] = node2.name.split(":");
        if (unusedNamespaces.has(ns)) {
          unusedNamespaces.delete(ns);
        }
      }
      for (const name2 of Object.keys(node2.attributes)) {
        if (name2.includes(":")) {
          const [ns] = name2.split(":");
          unusedNamespaces.delete(ns);
        }
      }
    }
  }, exit: (node2, parentNode) => {
    if (node2.name === "svg" && parentNode.type === "root") {
      for (const name2 of unusedNamespaces) {
        delete node2.attributes[`xmlns:${name2}`];
      }
    }
  } } };
};
var sortDefsChildren$1 = {};
sortDefsChildren$1.type = "visitor";
sortDefsChildren$1.name = "sortDefsChildren";
sortDefsChildren$1.active = true;
sortDefsChildren$1.description = "Sorts children of <defs> to improve compression";
sortDefsChildren$1.fn = () => ({ element: { enter: (node2) => {
  if (node2.name === "defs") {
    const frequencies = /* @__PURE__ */ new Map();
    for (const child of node2.children) {
      if (child.type === "element") {
        const frequency = frequencies.get(child.name);
        if (frequency == null) {
          frequencies.set(child.name, 1);
        } else {
          frequencies.set(child.name, frequency + 1);
        }
      }
    }
    node2.children.sort(((a, b) => {
      if (a.type !== "element" || b.type !== "element") {
        return 0;
      }
      const aFrequency = frequencies.get(a.name);
      const bFrequency = frequencies.get(b.name);
      if (aFrequency != null && bFrequency != null) {
        const frequencyComparison = bFrequency - aFrequency;
        if (frequencyComparison !== 0) {
          return frequencyComparison;
        }
      }
      const lengthComparison = b.name.length - a.name.length;
      if (lengthComparison !== 0) {
        return lengthComparison;
      }
      if (a.name !== b.name) {
        return a.name > b.name ? -1 : 1;
      }
      return 0;
    }));
  }
} } });
var removeTitle$1 = {};
var { detachNodeFromParent: detachNodeFromParent$6 } = xast;
removeTitle$1.name = "removeTitle";
removeTitle$1.type = "visitor";
removeTitle$1.active = true;
removeTitle$1.description = "removes <title>";
removeTitle$1.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (node2.name === "title") {
    detachNodeFromParent$6(node2, parentNode);
  }
} } });
var removeDesc$1 = {};
var { detachNodeFromParent: detachNodeFromParent$5 } = xast;
removeDesc$1.name = "removeDesc";
removeDesc$1.type = "visitor";
removeDesc$1.active = true;
removeDesc$1.description = "removes <desc>";
var standardDescs = /^(Created with|Created using)/;
removeDesc$1.fn = (root, params) => {
  const { removeAny = true } = params;
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "desc") {
      if (removeAny || node2.children.length === 0 || node2.children[0].type === "text" && standardDescs.test(node2.children[0].value)) {
        detachNodeFromParent$5(node2, parentNode);
      }
    }
  } } };
};
var { createPreset } = plugins;
var removeDoctype = removeDoctype$1;
var removeXMLProcInst = removeXMLProcInst$1;
var removeComments = removeComments$1;
var removeMetadata = removeMetadata$1;
var removeEditorsNSData = removeEditorsNSData$1;
var cleanupAttrs = cleanupAttrs$1;
var mergeStyles = mergeStyles$1;
var inlineStyles = inlineStyles$1;
var minifyStyles = minifyStyles$1;
var cleanupIDs = cleanupIDs$1;
var removeUselessDefs = removeUselessDefs$1;
var cleanupNumericValues = cleanupNumericValues$1;
var convertColors = convertColors$1;
var removeUnknownsAndDefaults = removeUnknownsAndDefaults$1;
var removeNonInheritableGroupAttrs = removeNonInheritableGroupAttrs$1;
var removeUselessStrokeAndFill = removeUselessStrokeAndFill$1;
var removeViewBox = removeViewBox$1;
var cleanupEnableBackground = cleanupEnableBackground$1;
var removeHiddenElems = removeHiddenElems$1;
var removeEmptyText = removeEmptyText$1;
var convertShapeToPath = convertShapeToPath$1;
var convertEllipseToCircle = convertEllipseToCircle$1;
var moveElemsAttrsToGroup = moveElemsAttrsToGroup$1;
var moveGroupAttrsToElems = moveGroupAttrsToElems$1;
var collapseGroups = collapseGroups$1;
var convertPathData = convertPathData$1;
var convertTransform = convertTransform$2;
var removeEmptyAttrs = removeEmptyAttrs$1;
var removeEmptyContainers = removeEmptyContainers$1;
var mergePaths = mergePaths$1;
var removeUnusedNS = removeUnusedNS$1;
var sortDefsChildren = sortDefsChildren$1;
var removeTitle = removeTitle$1;
var removeDesc = removeDesc$1;
var presetDefault = createPreset({ name: "presetDefault", plugins: [removeDoctype, removeXMLProcInst, removeComments, removeMetadata, removeEditorsNSData, cleanupAttrs, mergeStyles, inlineStyles, minifyStyles, cleanupIDs, removeUselessDefs, cleanupNumericValues, convertColors, removeUnknownsAndDefaults, removeNonInheritableGroupAttrs, removeUselessStrokeAndFill, removeViewBox, cleanupEnableBackground, removeHiddenElems, removeEmptyText, convertShapeToPath, convertEllipseToCircle, moveElemsAttrsToGroup, moveGroupAttrsToElems, collapseGroups, convertPathData, convertTransform, removeEmptyAttrs, removeEmptyContainers, mergePaths, removeUnusedNS, sortDefsChildren, removeTitle, removeDesc] });
var presetDefault_1 = presetDefault;
var addAttributesToSVGElement = {};
addAttributesToSVGElement.name = "addAttributesToSVGElement";
addAttributesToSVGElement.type = "visitor";
addAttributesToSVGElement.active = false;
addAttributesToSVGElement.description = "adds attributes to an outer <svg> element";
var ENOCLS$1 = `Error in plugin "addAttributesToSVGElement": absent parameters.
It should have a list of "attributes" or one "attribute".
Config example:

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attribute: "mySvg"
    }
  }
]

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: ["mySvg", "size-big"]
    }
  }
]

plugins: [
  {
    name: 'addAttributesToSVGElement',
    params: {
      attributes: [
        {
          focusable: false
        },
        {
          'data-image': icon
        }
      ]
    }
  }
]
`;
addAttributesToSVGElement.fn = (root, params) => {
  if (!Array.isArray(params.attributes) && !params.attribute) {
    console.error(ENOCLS$1);
    return null;
  }
  const attributes2 = params.attributes || [params.attribute];
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "svg" && parentNode.type === "root") {
      for (const attribute of attributes2) {
        if (typeof attribute === "string") {
          if (node2.attributes[attribute] == null) {
            node2.attributes[attribute] = void 0;
          }
        }
        if (typeof attribute === "object") {
          for (const key of Object.keys(attribute)) {
            if (node2.attributes[key] == null) {
              node2.attributes[key] = attribute[key];
            }
          }
        }
      }
    }
  } } };
};
var addClassesToSVGElement = {};
addClassesToSVGElement.name = "addClassesToSVGElement";
addClassesToSVGElement.type = "visitor";
addClassesToSVGElement.active = false;
addClassesToSVGElement.description = "adds classnames to an outer <svg> element";
var ENOCLS = `Error in plugin "addClassesToSVGElement": absent parameters.
It should have a list of classes in "classNames" or one "className".
Config example:

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      className: "mySvg"
    }
  }
]

plugins: [
  {
    name: "addClassesToSVGElement",
    params: {
      classNames: ["mySvg", "size-big"]
    }
  }
]
`;
addClassesToSVGElement.fn = (root, params) => {
  if (!(Array.isArray(params.classNames) && params.classNames.some(String)) && !params.className) {
    console.error(ENOCLS);
    return null;
  }
  const classNames = params.classNames || [params.className];
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "svg" && parentNode.type === "root") {
      const classList = new Set(node2.attributes.class == null ? null : node2.attributes.class.split(" "));
      for (const className of classNames) {
        if (className != null) {
          classList.add(className);
        }
      }
      node2.attributes.class = Array.from(classList).join(" ");
    }
  } } };
};
var cleanupListOfValues = {};
var { removeLeadingZero } = tools;
cleanupListOfValues.name = "cleanupListOfValues";
cleanupListOfValues.type = "visitor";
cleanupListOfValues.active = false;
cleanupListOfValues.description = "rounds list of values to the fixed precision";
var regNumericValues = /^([-+]?\d*\.?\d+([eE][-+]?\d+)?)(px|pt|pc|mm|cm|m|in|ft|em|ex|%)?$/;
var regSeparator = /\s+,?\s*|,\s*/;
var absoluteLengths = { cm: 96 / 2.54, mm: 96 / 25.4, in: 96, pt: 4 / 3, pc: 16, px: 1 };
cleanupListOfValues.fn = (_root, params) => {
  const { floatPrecision = 3, leadingZero = true, defaultPx = true, convertToPx = true } = params;
  const roundValues = (lists) => {
    const roundedList = [];
    for (const elem of lists.split(regSeparator)) {
      const match = elem.match(regNumericValues);
      const matchNew = elem.match(/new/);
      if (match) {
        let num2 = Number(Number(match[1]).toFixed(floatPrecision));
        let matchedUnit = match[3] || "";
        let units = matchedUnit;
        if (convertToPx && units && units in absoluteLengths) {
          const pxNum = Number((absoluteLengths[units] * Number(match[1])).toFixed(floatPrecision));
          if (pxNum.toString().length < match[0].length) {
            num2 = pxNum;
            units = "px";
          }
        }
        let str;
        if (leadingZero) {
          str = removeLeadingZero(num2);
        } else {
          str = num2.toString();
        }
        if (defaultPx && units === "px") {
          units = "";
        }
        roundedList.push(str + units);
      } else if (matchNew) {
        roundedList.push("new");
      } else if (elem) {
        roundedList.push(elem);
      }
    }
    return roundedList.join(" ");
  };
  return { element: { enter: (node2) => {
    if (node2.attributes.points != null) {
      node2.attributes.points = roundValues(node2.attributes.points);
    }
    if (node2.attributes["enable-background"] != null) {
      node2.attributes["enable-background"] = roundValues(node2.attributes["enable-background"]);
    }
    if (node2.attributes.viewBox != null) {
      node2.attributes.viewBox = roundValues(node2.attributes.viewBox);
    }
    if (node2.attributes["stroke-dasharray"] != null) {
      node2.attributes["stroke-dasharray"] = roundValues(node2.attributes["stroke-dasharray"]);
    }
    if (node2.attributes.dx != null) {
      node2.attributes.dx = roundValues(node2.attributes.dx);
    }
    if (node2.attributes.dy != null) {
      node2.attributes.dy = roundValues(node2.attributes.dy);
    }
    if (node2.attributes.x != null) {
      node2.attributes.x = roundValues(node2.attributes.x);
    }
    if (node2.attributes.y != null) {
      node2.attributes.y = roundValues(node2.attributes.y);
    }
  } } };
};
var convertStyleToAttrs = {};
convertStyleToAttrs.name = "convertStyleToAttrs";
convertStyleToAttrs.type = "perItem";
convertStyleToAttrs.active = false;
convertStyleToAttrs.description = "converts style to attributes";
convertStyleToAttrs.params = { keepImportant: false };
var stylingProps = _collections.attrsGroups.presentation;
var rEscape = "\\\\(?:[0-9a-f]{1,6}\\s?|\\r\\n|.)";
var rAttr = "\\s*(" + g("[^:;\\\\]", rEscape) + "*?)\\s*";
var rSingleQuotes = "'(?:[^'\\n\\r\\\\]|" + rEscape + ")*?(?:'|$)";
var rQuotes = '"(?:[^"\\n\\r\\\\]|' + rEscape + ')*?(?:"|$)';
var rQuotedString = new RegExp("^" + g(rSingleQuotes, rQuotes) + "$");
var rParenthesis = "\\(" + g(`[^'"()\\\\]+`, rEscape, rSingleQuotes, rQuotes) + "*?\\)";
var rValue = "\\s*(" + g(`[^!'"();\\\\]+?`, rEscape, rSingleQuotes, rQuotes, rParenthesis, "[^;]*?") + "*?)";
var rDeclEnd = "\\s*(?:;\\s*|$)";
var rImportant = "(\\s*!important(?![-(\\w]))?";
var regDeclarationBlock = new RegExp(rAttr + ":" + rValue + rImportant + rDeclEnd, "ig");
var regStripComments = new RegExp(g(rEscape, rSingleQuotes, rQuotes, "/\\*[^]*?\\*/"), "ig");
convertStyleToAttrs.fn = function(item, params) {
  if (item.type === "element" && item.attributes.style != null) {
    let styles = [];
    const newAttributes = {};
    const styleValue = item.attributes.style.replace(regStripComments, ((match) => match[0] == "/" ? "" : match[0] == "\\" && /[-g-z]/i.test(match[1]) ? match[1] : match));
    regDeclarationBlock.lastIndex = 0;
    for (var rule; rule = regDeclarationBlock.exec(styleValue); ) {
      if (!params.keepImportant || !rule[3]) {
        styles.push([rule[1], rule[2]]);
      }
    }
    if (styles.length) {
      styles = styles.filter((function(style2) {
        if (style2[0]) {
          var prop2 = style2[0].toLowerCase(), val = style2[1];
          if (rQuotedString.test(val)) {
            val = val.slice(1, -1);
          }
          if (stylingProps.includes(prop2)) {
            newAttributes[prop2] = val;
            return false;
          }
        }
        return true;
      }));
      Object.assign(item.attributes, newAttributes);
      if (styles.length) {
        item.attributes.style = styles.map(((declaration) => declaration.join(":"))).join(";");
      } else {
        delete item.attributes.style;
      }
    }
  }
};
function g() {
  return "(?:" + Array.prototype.join.call(arguments, "|") + ")";
}
var prefixIds = {};
var csstree = csstree_min.exports;
var { referencesProps } = _collections;
prefixIds.type = "visitor";
prefixIds.name = "prefixIds";
prefixIds.active = false;
prefixIds.description = "prefix IDs";
var getBasename = (path2) => {
  const matched = path2.match(/[/\\]?([^/\\]+)$/);
  if (matched) {
    return matched[1];
  }
  return "";
};
var escapeIdentifierName = (str) => str.replace(/[. ]/g, "_");
var unquote = (string) => {
  if (string.startsWith('"') && string.endsWith('"') || string.startsWith("'") && string.endsWith("'")) {
    return string.slice(1, -1);
  }
  return string;
};
var prefixId = (prefix, value) => {
  if (value.startsWith(prefix)) {
    return value;
  }
  return prefix + value;
};
var prefixReference = (prefix, value) => {
  if (value.startsWith("#")) {
    return "#" + prefixId(prefix, value.slice(1));
  }
  return null;
};
prefixIds.fn = (_root, params, info) => {
  const { delim = "__", prefixIds: prefixIds2 = true, prefixClassNames = true } = params;
  return { element: { enter: (node2) => {
    let prefix = "prefix" + delim;
    if (typeof params.prefix === "function") {
      prefix = params.prefix(node2, info) + delim;
    } else if (typeof params.prefix === "string") {
      prefix = params.prefix + delim;
    } else if (params.prefix === false) {
      prefix = "";
    } else if (info.path != null && info.path.length > 0) {
      prefix = escapeIdentifierName(getBasename(info.path)) + delim;
    }
    if (node2.name === "style") {
      if (node2.children.length === 0) {
        return;
      }
      let cssText = "";
      if (node2.children[0].type === "text" || node2.children[0].type === "cdata") {
        cssText = node2.children[0].value;
      }
      let cssAst = null;
      try {
        cssAst = csstree.parse(cssText, { parseValue: true, parseCustomProperty: false });
      } catch (e) {
        return;
      }
      csstree.walk(cssAst, ((node3) => {
        if (prefixIds2 && node3.type === "IdSelector" || prefixClassNames && node3.type === "ClassSelector") {
          node3.name = prefixId(prefix, node3.name);
          return;
        }
        if (node3.type === "Url" && node3.value.value && node3.value.value.length > 0) {
          const prefixed = prefixReference(prefix, unquote(node3.value.value));
          if (prefixed != null) {
            node3.value.value = prefixed;
          }
        }
      }));
      if (node2.children[0].type === "text" || node2.children[0].type === "cdata") {
        node2.children[0].value = csstree.generate(cssAst);
      }
      return;
    }
    if (prefixIds2 && node2.attributes.id != null && node2.attributes.id.length !== 0) {
      node2.attributes.id = prefixId(prefix, node2.attributes.id);
    }
    if (prefixClassNames && node2.attributes.class != null && node2.attributes.class.length !== 0) {
      node2.attributes.class = node2.attributes.class.split(/\s+/).map(((name2) => prefixId(prefix, name2))).join(" ");
    }
    for (const name2 of ["href", "xlink:href"]) {
      if (node2.attributes[name2] != null && node2.attributes[name2].length !== 0) {
        const prefixed = prefixReference(prefix, node2.attributes[name2]);
        if (prefixed != null) {
          node2.attributes[name2] = prefixed;
        }
      }
    }
    for (const name2 of referencesProps) {
      if (node2.attributes[name2] != null && node2.attributes[name2].length !== 0) {
        node2.attributes[name2] = node2.attributes[name2].replace(/url\((.*?)\)/gi, ((match, url) => {
          const prefixed = prefixReference(prefix, url);
          if (prefixed == null) {
            return match;
          }
          return `url(${prefixed})`;
        }));
      }
    }
    for (const name2 of ["begin", "end"]) {
      if (node2.attributes[name2] != null && node2.attributes[name2].length !== 0) {
        const parts = node2.attributes[name2].split(/\s*;\s+/).map(((val) => {
          if (val.endsWith(".end") || val.endsWith(".start")) {
            const [id, postfix] = val.split(".");
            return `${prefixId(prefix, id)}.${postfix}`;
          }
          return val;
        }));
        node2.attributes[name2] = parts.join("; ");
      }
    }
  } } };
};
var removeAttributesBySelector = {};
var { querySelectorAll } = xast;
removeAttributesBySelector.name = "removeAttributesBySelector";
removeAttributesBySelector.type = "visitor";
removeAttributesBySelector.active = false;
removeAttributesBySelector.description = "removes attributes of elements that match a css selector";
removeAttributesBySelector.fn = (root, params) => {
  const selectors = Array.isArray(params.selectors) ? params.selectors : [params];
  for (const { selector, attributes: attributes2 } of selectors) {
    const nodes = querySelectorAll(root, selector);
    for (const node2 of nodes) {
      if (node2.type === "element") {
        if (Array.isArray(attributes2)) {
          for (const name2 of attributes2) {
            delete node2.attributes[name2];
          }
        } else {
          delete node2.attributes[attributes2];
        }
      }
    }
  }
  return {};
};
var removeAttrs = {};
removeAttrs.name = "removeAttrs";
removeAttrs.type = "visitor";
removeAttrs.active = false;
removeAttrs.description = "removes specified attributes";
var DEFAULT_SEPARATOR = ":";
var ENOATTRS = `Warning: The plugin "removeAttrs" requires the "attrs" parameter.
It should have a pattern to remove, otherwise the plugin is a noop.
Config example:

plugins: [
  {
    name: "removeAttrs",
    params: {
      attrs: "(fill|stroke)"
    }
  }
]
`;
removeAttrs.fn = (root, params) => {
  if (typeof params.attrs == "undefined") {
    console.warn(ENOATTRS);
    return null;
  }
  const elemSeparator = typeof params.elemSeparator == "string" ? params.elemSeparator : DEFAULT_SEPARATOR;
  const preserveCurrentColor = typeof params.preserveCurrentColor == "boolean" ? params.preserveCurrentColor : false;
  const attrs = Array.isArray(params.attrs) ? params.attrs : [params.attrs];
  return { element: { enter: (node2) => {
    for (let pattern of attrs) {
      if (pattern.includes(elemSeparator) === false) {
        pattern = [".*", elemSeparator, pattern, elemSeparator, ".*"].join("");
      } else if (pattern.split(elemSeparator).length < 3) {
        pattern = [pattern, elemSeparator, ".*"].join("");
      }
      const list = pattern.split(elemSeparator).map(((value) => {
        if (value === "*") {
          value = ".*";
        }
        return new RegExp(["^", value, "$"].join(""), "i");
      }));
      if (list[0].test(node2.name)) {
        for (const [name2, value] of Object.entries(node2.attributes)) {
          const isFillCurrentColor = preserveCurrentColor && name2 == "fill" && value == "currentColor";
          const isStrokeCurrentColor = preserveCurrentColor && name2 == "stroke" && value == "currentColor";
          if (!isFillCurrentColor && !isStrokeCurrentColor && list[1].test(name2) && list[2].test(value)) {
            delete node2.attributes[name2];
          }
        }
      }
    }
  } } };
};
var removeDimensions = {};
removeDimensions.name = "removeDimensions";
removeDimensions.type = "perItem";
removeDimensions.active = false;
removeDimensions.description = "removes width and height in presence of viewBox (opposite to removeViewBox, disable it first)";
removeDimensions.fn = function(item) {
  if (item.type === "element" && item.name === "svg") {
    if (item.attributes.viewBox != null) {
      delete item.attributes.width;
      delete item.attributes.height;
    } else if (item.attributes.width != null && item.attributes.height != null && Number.isNaN(Number(item.attributes.width)) === false && Number.isNaN(Number(item.attributes.height)) === false) {
      const width = Number(item.attributes.width);
      const height = Number(item.attributes.height);
      item.attributes.viewBox = `0 0 ${width} ${height}`;
      delete item.attributes.width;
      delete item.attributes.height;
    }
  }
};
var removeElementsByAttr = {};
var { detachNodeFromParent: detachNodeFromParent$4 } = xast;
removeElementsByAttr.name = "removeElementsByAttr";
removeElementsByAttr.type = "visitor";
removeElementsByAttr.active = false;
removeElementsByAttr.description = "removes arbitrary elements by ID or className (disabled by default)";
removeElementsByAttr.fn = (root, params) => {
  const ids = params.id == null ? [] : Array.isArray(params.id) ? params.id : [params.id];
  const classes = params.class == null ? [] : Array.isArray(params.class) ? params.class : [params.class];
  return { element: { enter: (node2, parentNode) => {
    if (node2.attributes.id != null && ids.length !== 0) {
      if (ids.includes(node2.attributes.id)) {
        detachNodeFromParent$4(node2, parentNode);
      }
    }
    if (node2.attributes.class && classes.length !== 0) {
      const classList = node2.attributes.class.split(" ");
      for (const item of classes) {
        if (classList.includes(item)) {
          detachNodeFromParent$4(node2, parentNode);
          break;
        }
      }
    }
  } } };
};
var removeOffCanvasPaths = {};
var { visitSkip, detachNodeFromParent: detachNodeFromParent$3 } = xast;
var { parsePathData } = path;
var { intersects } = _path;
removeOffCanvasPaths.type = "visitor";
removeOffCanvasPaths.name = "removeOffCanvasPaths";
removeOffCanvasPaths.active = false;
removeOffCanvasPaths.description = "removes elements that are drawn outside of the viewbox (disabled by default)";
removeOffCanvasPaths.fn = () => {
  let viewBoxData = null;
  return { element: { enter: (node2, parentNode) => {
    if (node2.name === "svg" && parentNode.type === "root") {
      let viewBox = "";
      if (node2.attributes.viewBox != null) {
        viewBox = node2.attributes.viewBox;
      } else if (node2.attributes.height != null && node2.attributes.width != null) {
        viewBox = `0 0 ${node2.attributes.width} ${node2.attributes.height}`;
      }
      viewBox = viewBox.replace(/[,+]|px/g, " ").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
      const m = /^(-?\d*\.?\d+) (-?\d*\.?\d+) (\d*\.?\d+) (\d*\.?\d+)$/.exec(viewBox);
      if (m == null) {
        return;
      }
      const left = Number.parseFloat(m[1]);
      const top2 = Number.parseFloat(m[2]);
      const width = Number.parseFloat(m[3]);
      const height = Number.parseFloat(m[4]);
      viewBoxData = { left, top: top2, right: left + width, bottom: top2 + height, width, height };
    }
    if (node2.attributes.transform != null) {
      return visitSkip;
    }
    if (node2.name === "path" && node2.attributes.d != null && viewBoxData != null) {
      const pathData = parsePathData(node2.attributes.d);
      let visible = false;
      for (const pathDataItem of pathData) {
        if (pathDataItem.command === "M") {
          const [x, y] = pathDataItem.args;
          if (x >= viewBoxData.left && x <= viewBoxData.right && y >= viewBoxData.top && y <= viewBoxData.bottom) {
            visible = true;
          }
        }
      }
      if (visible) {
        return;
      }
      if (pathData.length === 2) {
        pathData.push({ command: "z", args: [] });
      }
      const { left, top: top2, width, height } = viewBoxData;
      const viewBoxPathData = [{ command: "M", args: [left, top2] }, { command: "h", args: [width] }, { command: "v", args: [height] }, { command: "H", args: [left] }, { command: "z", args: [] }];
      if (intersects(viewBoxPathData, pathData) === false) {
        detachNodeFromParent$3(node2, parentNode);
      }
    }
  } } };
};
var removeRasterImages = {};
var { detachNodeFromParent: detachNodeFromParent$2 } = xast;
removeRasterImages.name = "removeRasterImages";
removeRasterImages.type = "visitor";
removeRasterImages.active = false;
removeRasterImages.description = "removes raster images (disabled by default)";
removeRasterImages.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (node2.name === "image" && node2.attributes["xlink:href"] != null && /(\.|image\/)(jpg|png|gif)/.test(node2.attributes["xlink:href"])) {
    detachNodeFromParent$2(node2, parentNode);
  }
} } });
var removeScriptElement = {};
var { detachNodeFromParent: detachNodeFromParent$1 } = xast;
removeScriptElement.name = "removeScriptElement";
removeScriptElement.type = "visitor";
removeScriptElement.active = false;
removeScriptElement.description = "removes <script> elements (disabled by default)";
removeScriptElement.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (node2.name === "script") {
    detachNodeFromParent$1(node2, parentNode);
  }
} } });
var removeStyleElement = {};
var { detachNodeFromParent } = xast;
removeStyleElement.name = "removeStyleElement";
removeStyleElement.type = "visitor";
removeStyleElement.active = false;
removeStyleElement.description = "removes <style> element (disabled by default)";
removeStyleElement.fn = () => ({ element: { enter: (node2, parentNode) => {
  if (node2.name === "style") {
    detachNodeFromParent(node2, parentNode);
  }
} } });
var removeXMLNS = {};
removeXMLNS.name = "removeXMLNS";
removeXMLNS.type = "perItem";
removeXMLNS.active = false;
removeXMLNS.description = "removes xmlns attribute (for inline svg, disabled by default)";
removeXMLNS.fn = function(item) {
  if (item.type === "element" && item.name === "svg") {
    delete item.attributes.xmlns;
    delete item.attributes["xmlns:xlink"];
  }
};
var reusePaths = {};
var JSAPI$2 = jsAPI;
reusePaths.type = "visitor";
reusePaths.name = "reusePaths";
reusePaths.active = false;
reusePaths.description = "Finds <path> elements with the same d, fill, and stroke, and converts them to <use> elements referencing a single <path> def.";
reusePaths.fn = () => {
  const paths = /* @__PURE__ */ new Map();
  return { element: { enter: (node2) => {
    if (node2.name === "path" && node2.attributes.d != null) {
      const d = node2.attributes.d;
      const fill = node2.attributes.fill || "";
      const stroke = node2.attributes.stroke || "";
      const key = d + ";s:" + stroke + ";f:" + fill;
      let list = paths.get(key);
      if (list == null) {
        list = [];
        paths.set(key, list);
      }
      list.push(node2);
    }
  }, exit: (node2, parentNode) => {
    if (node2.name === "svg" && parentNode.type === "root") {
      const rawDefs = { type: "element", name: "defs", attributes: {}, children: [] };
      const defsTag = new JSAPI$2(rawDefs, node2);
      let index = 0;
      for (const list of paths.values()) {
        if (list.length > 1) {
          const rawPath = { type: "element", name: "path", attributes: __spreadValues({}, list[0].attributes), children: [] };
          delete rawPath.attributes.transform;
          let id;
          if (rawPath.attributes.id == null) {
            id = "reuse-" + index;
            index += 1;
            rawPath.attributes.id = id;
          } else {
            id = rawPath.attributes.id;
            delete list[0].attributes.id;
          }
          const reusablePath = new JSAPI$2(rawPath, defsTag);
          defsTag.children.push(reusablePath);
          for (const pathNode of list) {
            pathNode.name = "use";
            pathNode.attributes["xlink:href"] = "#" + id;
            delete pathNode.attributes.d;
            delete pathNode.attributes.stroke;
            delete pathNode.attributes.fill;
          }
        }
      }
      if (defsTag.children.length !== 0) {
        if (node2.attributes["xmlns:xlink"] == null) {
          node2.attributes["xmlns:xlink"] = "http://www.w3.org/1999/xlink";
        }
        node2.children.unshift(defsTag);
      }
    }
  } } };
};
var sortAttrs = {};
sortAttrs.type = "visitor";
sortAttrs.name = "sortAttrs";
sortAttrs.active = false;
sortAttrs.description = "Sort element attributes for better compression";
sortAttrs.fn = (_root, params) => {
  const { order: order2 = ["id", "width", "height", "x", "x1", "x2", "y", "y1", "y2", "cx", "cy", "r", "fill", "stroke", "marker", "d", "points"], xmlnsOrder = "front" } = params;
  const getNsPriority = (name2) => {
    if (xmlnsOrder === "front") {
      if (name2 === "xmlns") {
        return 3;
      }
      if (name2.startsWith("xmlns:")) {
        return 2;
      }
    }
    if (name2.includes(":")) {
      return 1;
    }
    return 0;
  };
  const compareAttrs = ([aName], [bName]) => {
    const aPriority = getNsPriority(aName);
    const bPriority = getNsPriority(bName);
    const priorityNs = bPriority - aPriority;
    if (priorityNs !== 0) {
      return priorityNs;
    }
    const [aPart] = aName.split("-");
    const [bPart] = bName.split("-");
    if (aPart !== bPart) {
      const aInOrderFlag = order2.includes(aPart) ? 1 : 0;
      const bInOrderFlag = order2.includes(bPart) ? 1 : 0;
      if (aInOrderFlag === 1 && bInOrderFlag === 1) {
        return order2.indexOf(aPart) - order2.indexOf(bPart);
      }
      const priorityOrder = bInOrderFlag - aInOrderFlag;
      if (priorityOrder !== 0) {
        return priorityOrder;
      }
    }
    return aName < bName ? -1 : 1;
  };
  return { element: { enter: (node2) => {
    const attrs = Object.entries(node2.attributes);
    attrs.sort(compareAttrs);
    const sortedAttributes = {};
    for (const [name2, value] of attrs) {
      sortedAttributes[name2] = value;
    }
    node2.attributes = sortedAttributes;
  } } };
};
(function(exports) {
  exports["preset-default"] = presetDefault_1;
  exports.addAttributesToSVGElement = addAttributesToSVGElement;
  exports.addClassesToSVGElement = addClassesToSVGElement;
  exports.cleanupAttrs = cleanupAttrs$1;
  exports.cleanupEnableBackground = cleanupEnableBackground$1;
  exports.cleanupIDs = cleanupIDs$1;
  exports.cleanupListOfValues = cleanupListOfValues;
  exports.cleanupNumericValues = cleanupNumericValues$1;
  exports.collapseGroups = collapseGroups$1;
  exports.convertColors = convertColors$1;
  exports.convertEllipseToCircle = convertEllipseToCircle$1;
  exports.convertPathData = convertPathData$1;
  exports.convertShapeToPath = convertShapeToPath$1;
  exports.convertStyleToAttrs = convertStyleToAttrs;
  exports.convertTransform = convertTransform$2;
  exports.mergeStyles = mergeStyles$1;
  exports.inlineStyles = inlineStyles$1;
  exports.mergePaths = mergePaths$1;
  exports.minifyStyles = minifyStyles$1;
  exports.moveElemsAttrsToGroup = moveElemsAttrsToGroup$1;
  exports.moveGroupAttrsToElems = moveGroupAttrsToElems$1;
  exports.prefixIds = prefixIds;
  exports.removeAttributesBySelector = removeAttributesBySelector;
  exports.removeAttrs = removeAttrs;
  exports.removeComments = removeComments$1;
  exports.removeDesc = removeDesc$1;
  exports.removeDimensions = removeDimensions;
  exports.removeDoctype = removeDoctype$1;
  exports.removeEditorsNSData = removeEditorsNSData$1;
  exports.removeElementsByAttr = removeElementsByAttr;
  exports.removeEmptyAttrs = removeEmptyAttrs$1;
  exports.removeEmptyContainers = removeEmptyContainers$1;
  exports.removeEmptyText = removeEmptyText$1;
  exports.removeHiddenElems = removeHiddenElems$1;
  exports.removeMetadata = removeMetadata$1;
  exports.removeNonInheritableGroupAttrs = removeNonInheritableGroupAttrs$1;
  exports.removeOffCanvasPaths = removeOffCanvasPaths;
  exports.removeRasterImages = removeRasterImages;
  exports.removeScriptElement = removeScriptElement;
  exports.removeStyleElement = removeStyleElement;
  exports.removeTitle = removeTitle$1;
  exports.removeUnknownsAndDefaults = removeUnknownsAndDefaults$1;
  exports.removeUnusedNS = removeUnusedNS$1;
  exports.removeUselessDefs = removeUselessDefs$1;
  exports.removeUselessStrokeAndFill = removeUselessStrokeAndFill$1;
  exports.removeViewBox = removeViewBox$1;
  exports.removeXMLNS = removeXMLNS;
  exports.removeXMLProcInst = removeXMLProcInst$1;
  exports.reusePaths = reusePaths;
  exports.sortAttrs = sortAttrs;
  exports.sortDefsChildren = sortDefsChildren$1;
})(plugins$1);
var pluginsMap = plugins$1;
var pluginsOrder = ["removeDoctype", "removeXMLProcInst", "removeComments", "removeMetadata", "removeXMLNS", "removeEditorsNSData", "cleanupAttrs", "mergeStyles", "inlineStyles", "minifyStyles", "convertStyleToAttrs", "cleanupIDs", "prefixIds", "removeRasterImages", "removeUselessDefs", "cleanupNumericValues", "cleanupListOfValues", "convertColors", "removeUnknownsAndDefaults", "removeNonInheritableGroupAttrs", "removeUselessStrokeAndFill", "removeViewBox", "cleanupEnableBackground", "removeHiddenElems", "removeEmptyText", "convertShapeToPath", "convertEllipseToCircle", "moveElemsAttrsToGroup", "moveGroupAttrsToElems", "collapseGroups", "convertPathData", "convertTransform", "removeEmptyAttrs", "removeEmptyContainers", "mergePaths", "removeUnusedNS", "sortAttrs", "sortDefsChildren", "removeTitle", "removeDesc", "removeDimensions", "removeAttrs", "removeAttributesBySelector", "removeElementsByAttr", "addClassesToSVGElement", "removeStyleElement", "removeScriptElement", "addAttributesToSVGElement", "removeOffCanvasPaths", "reusePaths"];
var defaultPlugins$1 = pluginsOrder.filter(((name2) => pluginsMap[name2].active));
config$1.defaultPlugins = defaultPlugins$1;
var extendDefaultPlugins$1 = (plugins2) => {
  console.warn(`
"extendDefaultPlugins" utility is deprecated.
Use "preset-default" plugin with overrides instead.
For example:
{
  name: 'preset-default',
  params: {
    overrides: {
      // customize plugin options
      convertShapeToPath: {
        convertArcs: true
      },
      // disable plugins
      convertPathData: false
    }
  }
}
`);
  const extendedPlugins = pluginsOrder.map(((name2) => ({ name: name2, active: pluginsMap[name2].active })));
  for (const plugin of plugins2) {
    const resolvedPlugin = resolvePluginConfig$1(plugin);
    const index = pluginsOrder.indexOf(resolvedPlugin.name);
    if (index === -1) {
      extendedPlugins.push(plugin);
    } else {
      extendedPlugins[index] = plugin;
    }
  }
  return extendedPlugins;
};
config$1.extendDefaultPlugins = extendDefaultPlugins$1;
var resolvePluginConfig$1 = (plugin) => {
  let configParams = {};
  if (typeof plugin === "string") {
    const pluginConfig = pluginsMap[plugin];
    if (pluginConfig == null) {
      throw Error(`Unknown builtin plugin "${plugin}" specified.`);
    }
    return __spreadProps(__spreadValues({}, pluginConfig), { name: plugin, active: true, params: __spreadValues(__spreadValues({}, pluginConfig.params), configParams) });
  }
  if (typeof plugin === "object" && plugin != null) {
    if (plugin.name == null) {
      throw Error(`Plugin name should be specified`);
    }
    if (plugin.fn) {
      return __spreadProps(__spreadValues({ active: true }, plugin), { params: __spreadValues(__spreadValues({}, configParams), plugin.params) });
    } else {
      const pluginConfig = pluginsMap[plugin.name];
      if (pluginConfig == null) {
        throw Error(`Unknown builtin plugin "${plugin.name}" specified.`);
      }
      return __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, pluginConfig), { active: true }), plugin), { params: __spreadValues(__spreadValues(__spreadValues({}, pluginConfig.params), configParams), plugin.params) });
    }
  }
  return null;
};
config$1.resolvePluginConfig = resolvePluginConfig$1;
var parser = {};
var sax = {};
(function(exports) {
  (function(sax2) {
    sax2.parser = function(strict, opt) {
      return new SAXParser(strict, opt);
    };
    sax2.SAXParser = SAXParser;
    sax2.MAX_BUFFER_LENGTH = 64 * 1024;
    var buffers = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];
    sax2.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"];
    function SAXParser(strict, opt) {
      if (!(this instanceof SAXParser)) {
        return new SAXParser(strict, opt);
      }
      var parser2 = this;
      clearBuffers(parser2);
      parser2.q = parser2.c = "";
      parser2.bufferCheckPosition = sax2.MAX_BUFFER_LENGTH;
      parser2.opt = opt || {};
      parser2.opt.lowercase = parser2.opt.lowercase || parser2.opt.lowercasetags;
      parser2.looseCase = parser2.opt.lowercase ? "toLowerCase" : "toUpperCase";
      parser2.tags = [];
      parser2.closed = parser2.closedRoot = parser2.sawRoot = false;
      parser2.tag = parser2.error = null;
      parser2.strict = !!strict;
      parser2.noscript = !!(strict || parser2.opt.noscript);
      parser2.state = S.BEGIN;
      parser2.strictEntities = parser2.opt.strictEntities;
      parser2.ENTITIES = parser2.strictEntities ? Object.create(sax2.XML_ENTITIES) : Object.create(sax2.ENTITIES);
      parser2.attribList = [];
      if (parser2.opt.xmlns) {
        parser2.ns = Object.create(rootNS);
      }
      parser2.trackPosition = parser2.opt.position !== false;
      if (parser2.trackPosition) {
        parser2.position = parser2.line = parser2.column = 0;
      }
      emit(parser2, "onready");
    }
    if (!Object.create) {
      Object.create = function(o) {
        function F() {
        }
        F.prototype = o;
        var newf = new F();
        return newf;
      };
    }
    if (!Object.keys) {
      Object.keys = function(o) {
        var a = [];
        for (var i in o) if (o.hasOwnProperty(i)) a.push(i);
        return a;
      };
    }
    function checkBufferLength(parser2) {
      var maxAllowed = Math.max(sax2.MAX_BUFFER_LENGTH, 10);
      var maxActual = 0;
      for (var i = 0, l = buffers.length; i < l; i++) {
        var len = parser2[buffers[i]].length;
        if (len > maxAllowed) {
          switch (buffers[i]) {
            case "textNode":
              closeText(parser2);
              break;
            case "cdata":
              emitNode(parser2, "oncdata", parser2.cdata);
              parser2.cdata = "";
              break;
            case "script":
              emitNode(parser2, "onscript", parser2.script);
              parser2.script = "";
              break;
            default:
              error2(parser2, "Max buffer length exceeded: " + buffers[i]);
          }
        }
        maxActual = Math.max(maxActual, len);
      }
      var m = sax2.MAX_BUFFER_LENGTH - maxActual;
      parser2.bufferCheckPosition = m + parser2.position;
    }
    function clearBuffers(parser2) {
      for (var i = 0, l = buffers.length; i < l; i++) {
        parser2[buffers[i]] = "";
      }
    }
    function flushBuffers(parser2) {
      closeText(parser2);
      if (parser2.cdata !== "") {
        emitNode(parser2, "oncdata", parser2.cdata);
        parser2.cdata = "";
      }
      if (parser2.script !== "") {
        emitNode(parser2, "onscript", parser2.script);
        parser2.script = "";
      }
    }
    SAXParser.prototype = { end: function() {
      end(this);
    }, write, resume: function() {
      this.error = null;
      return this;
    }, close: function() {
      return this.write(null);
    }, flush: function() {
      flushBuffers(this);
    } };
    var CDATA = "[CDATA[";
    var DOCTYPE = "DOCTYPE";
    var XML_NAMESPACE = "http://www.w3.org/XML/1998/namespace";
    var XMLNS_NAMESPACE = "http://www.w3.org/2000/xmlns/";
    var rootNS = { xml: XML_NAMESPACE, xmlns: XMLNS_NAMESPACE };
    var nameStart = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var nameBody = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    var entityStart = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;
    var entityBody = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
    function isWhitespace2(c) {
      return c === " " || c === "\n" || c === "\r" || c === "	";
    }
    function isQuote(c) {
      return c === '"' || c === "'";
    }
    function isAttribEnd(c) {
      return c === ">" || isWhitespace2(c);
    }
    function isMatch(regex, c) {
      return regex.test(c);
    }
    function notMatch(regex, c) {
      return !isMatch(regex, c);
    }
    var S = 0;
    sax2.STATE = { BEGIN: S++, BEGIN_WHITESPACE: S++, TEXT: S++, TEXT_ENTITY: S++, OPEN_WAKA: S++, SGML_DECL: S++, SGML_DECL_QUOTED: S++, DOCTYPE: S++, DOCTYPE_QUOTED: S++, DOCTYPE_DTD: S++, DOCTYPE_DTD_QUOTED: S++, COMMENT_STARTING: S++, COMMENT: S++, COMMENT_ENDING: S++, COMMENT_ENDED: S++, CDATA: S++, CDATA_ENDING: S++, CDATA_ENDING_2: S++, PROC_INST: S++, PROC_INST_BODY: S++, PROC_INST_ENDING: S++, OPEN_TAG: S++, OPEN_TAG_SLASH: S++, ATTRIB: S++, ATTRIB_NAME: S++, ATTRIB_NAME_SAW_WHITE: S++, ATTRIB_VALUE: S++, ATTRIB_VALUE_QUOTED: S++, ATTRIB_VALUE_CLOSED: S++, ATTRIB_VALUE_UNQUOTED: S++, ATTRIB_VALUE_ENTITY_Q: S++, ATTRIB_VALUE_ENTITY_U: S++, CLOSE_TAG: S++, CLOSE_TAG_SAW_WHITE: S++, SCRIPT: S++, SCRIPT_ENDING: S++ };
    sax2.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" };
    sax2.ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, int: 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830 };
    Object.keys(sax2.ENTITIES).forEach((function(key) {
      var e = sax2.ENTITIES[key];
      var s2 = typeof e === "number" ? String.fromCharCode(e) : e;
      sax2.ENTITIES[key] = s2;
    }));
    for (var s in sax2.STATE) {
      sax2.STATE[sax2.STATE[s]] = s;
    }
    S = sax2.STATE;
    function emit(parser2, event, data) {
      parser2[event] && parser2[event](data);
    }
    function emitNode(parser2, nodeType, data) {
      if (parser2.textNode) closeText(parser2);
      emit(parser2, nodeType, data);
    }
    function closeText(parser2) {
      parser2.textNode = textopts(parser2.opt, parser2.textNode);
      if (parser2.textNode) emit(parser2, "ontext", parser2.textNode);
      parser2.textNode = "";
    }
    function textopts(opt, text) {
      if (opt.trim) text = text.trim();
      if (opt.normalize) text = text.replace(/\s+/g, " ");
      return text;
    }
    function error2(parser2, reason) {
      closeText(parser2);
      const message = reason + "\nLine: " + parser2.line + "\nColumn: " + parser2.column + "\nChar: " + parser2.c;
      const error3 = new Error(message);
      error3.reason = reason;
      error3.line = parser2.line;
      error3.column = parser2.column;
      parser2.error = error3;
      emit(parser2, "onerror", error3);
      return parser2;
    }
    function end(parser2) {
      if (parser2.sawRoot && !parser2.closedRoot) strictFail(parser2, "Unclosed root tag");
      if (parser2.state !== S.BEGIN && parser2.state !== S.BEGIN_WHITESPACE && parser2.state !== S.TEXT) {
        error2(parser2, "Unexpected end");
      }
      closeText(parser2);
      parser2.c = "";
      parser2.closed = true;
      emit(parser2, "onend");
      SAXParser.call(parser2, parser2.strict, parser2.opt);
      return parser2;
    }
    function strictFail(parser2, message) {
      if (typeof parser2 !== "object" || !(parser2 instanceof SAXParser)) {
        throw new Error("bad call to strictFail");
      }
      if (parser2.strict) {
        error2(parser2, message);
      }
    }
    function newTag(parser2) {
      if (!parser2.strict) parser2.tagName = parser2.tagName[parser2.looseCase]();
      var parent = parser2.tags[parser2.tags.length - 1] || parser2;
      var tag = parser2.tag = { name: parser2.tagName, attributes: {} };
      if (parser2.opt.xmlns) {
        tag.ns = parent.ns;
      }
      parser2.attribList.length = 0;
      emitNode(parser2, "onopentagstart", tag);
    }
    function qname(name2, attribute) {
      var i = name2.indexOf(":");
      var qualName = i < 0 ? ["", name2] : name2.split(":");
      var prefix = qualName[0];
      var local = qualName[1];
      if (attribute && name2 === "xmlns") {
        prefix = "xmlns";
        local = "";
      }
      return { prefix, local };
    }
    function attrib(parser2) {
      if (!parser2.strict) {
        parser2.attribName = parser2.attribName[parser2.looseCase]();
      }
      if (parser2.attribList.indexOf(parser2.attribName) !== -1 || parser2.tag.attributes.hasOwnProperty(parser2.attribName)) {
        parser2.attribName = parser2.attribValue = "";
        return;
      }
      if (parser2.opt.xmlns) {
        var qn = qname(parser2.attribName, true);
        var prefix = qn.prefix;
        var local = qn.local;
        if (prefix === "xmlns") {
          if (local === "xml" && parser2.attribValue !== XML_NAMESPACE) {
            strictFail(parser2, "xml: prefix must be bound to " + XML_NAMESPACE + "\nActual: " + parser2.attribValue);
          } else if (local === "xmlns" && parser2.attribValue !== XMLNS_NAMESPACE) {
            strictFail(parser2, "xmlns: prefix must be bound to " + XMLNS_NAMESPACE + "\nActual: " + parser2.attribValue);
          } else {
            var tag = parser2.tag;
            var parent = parser2.tags[parser2.tags.length - 1] || parser2;
            if (tag.ns === parent.ns) {
              tag.ns = Object.create(parent.ns);
            }
            tag.ns[local] = parser2.attribValue;
          }
        }
        parser2.attribList.push([parser2.attribName, parser2.attribValue]);
      } else {
        parser2.tag.attributes[parser2.attribName] = parser2.attribValue;
        emitNode(parser2, "onattribute", { name: parser2.attribName, value: parser2.attribValue });
      }
      parser2.attribName = parser2.attribValue = "";
    }
    function openTag(parser2, selfClosing) {
      if (parser2.opt.xmlns) {
        var tag = parser2.tag;
        var qn = qname(parser2.tagName);
        tag.prefix = qn.prefix;
        tag.local = qn.local;
        tag.uri = tag.ns[qn.prefix] || "";
        if (tag.prefix && !tag.uri) {
          strictFail(parser2, "Unbound namespace prefix: " + JSON.stringify(parser2.tagName));
          tag.uri = qn.prefix;
        }
        var parent = parser2.tags[parser2.tags.length - 1] || parser2;
        if (tag.ns && parent.ns !== tag.ns) {
          Object.keys(tag.ns).forEach((function(p) {
            emitNode(parser2, "onopennamespace", { prefix: p, uri: tag.ns[p] });
          }));
        }
        for (var i = 0, l = parser2.attribList.length; i < l; i++) {
          var nv = parser2.attribList[i];
          var name2 = nv[0];
          var value = nv[1];
          var qualName = qname(name2, true);
          var prefix = qualName.prefix;
          var local = qualName.local;
          var uri = prefix === "" ? "" : tag.ns[prefix] || "";
          var a = { name: name2, value, prefix, local, uri };
          if (prefix && prefix !== "xmlns" && !uri) {
            strictFail(parser2, "Unbound namespace prefix: " + JSON.stringify(prefix));
            a.uri = prefix;
          }
          parser2.tag.attributes[name2] = a;
          emitNode(parser2, "onattribute", a);
        }
        parser2.attribList.length = 0;
      }
      parser2.tag.isSelfClosing = !!selfClosing;
      parser2.sawRoot = true;
      parser2.tags.push(parser2.tag);
      emitNode(parser2, "onopentag", parser2.tag);
      if (!selfClosing) {
        if (!parser2.noscript && parser2.tagName.toLowerCase() === "script") {
          parser2.state = S.SCRIPT;
        } else {
          parser2.state = S.TEXT;
        }
        parser2.tag = null;
        parser2.tagName = "";
      }
      parser2.attribName = parser2.attribValue = "";
      parser2.attribList.length = 0;
    }
    function closeTag(parser2) {
      if (!parser2.tagName) {
        strictFail(parser2, "Weird empty close tag.");
        parser2.textNode += "</>";
        parser2.state = S.TEXT;
        return;
      }
      if (parser2.script) {
        if (parser2.tagName !== "script") {
          parser2.script += "</" + parser2.tagName + ">";
          parser2.tagName = "";
          parser2.state = S.SCRIPT;
          return;
        }
        emitNode(parser2, "onscript", parser2.script);
        parser2.script = "";
      }
      var t = parser2.tags.length;
      var tagName = parser2.tagName;
      if (!parser2.strict) {
        tagName = tagName[parser2.looseCase]();
      }
      var closeTo = tagName;
      while (t--) {
        var close = parser2.tags[t];
        if (close.name !== closeTo) {
          strictFail(parser2, "Unexpected close tag");
        } else {
          break;
        }
      }
      if (t < 0) {
        strictFail(parser2, "Unmatched closing tag: " + parser2.tagName);
        parser2.textNode += "</" + parser2.tagName + ">";
        parser2.state = S.TEXT;
        return;
      }
      parser2.tagName = tagName;
      var s2 = parser2.tags.length;
      while (s2-- > t) {
        var tag = parser2.tag = parser2.tags.pop();
        parser2.tagName = parser2.tag.name;
        emitNode(parser2, "onclosetag", parser2.tagName);
        var x = {};
        for (var i in tag.ns) {
          x[i] = tag.ns[i];
        }
        var parent = parser2.tags[parser2.tags.length - 1] || parser2;
        if (parser2.opt.xmlns && tag.ns !== parent.ns) {
          Object.keys(tag.ns).forEach((function(p) {
            var n = tag.ns[p];
            emitNode(parser2, "onclosenamespace", { prefix: p, uri: n });
          }));
        }
      }
      if (t === 0) parser2.closedRoot = true;
      parser2.tagName = parser2.attribValue = parser2.attribName = "";
      parser2.attribList.length = 0;
      parser2.state = S.TEXT;
    }
    function parseEntity(parser2) {
      var entity = parser2.entity;
      var entityLC = entity.toLowerCase();
      var num2;
      var numStr = "";
      if (parser2.ENTITIES[entity]) {
        return parser2.ENTITIES[entity];
      }
      if (parser2.ENTITIES[entityLC]) {
        return parser2.ENTITIES[entityLC];
      }
      entity = entityLC;
      if (entity.charAt(0) === "#") {
        if (entity.charAt(1) === "x") {
          entity = entity.slice(2);
          num2 = parseInt(entity, 16);
          numStr = num2.toString(16);
        } else {
          entity = entity.slice(1);
          num2 = parseInt(entity, 10);
          numStr = num2.toString(10);
        }
      }
      entity = entity.replace(/^0+/, "");
      if (isNaN(num2) || numStr.toLowerCase() !== entity) {
        strictFail(parser2, "Invalid character entity");
        return "&" + parser2.entity + ";";
      }
      return String.fromCodePoint(num2);
    }
    function beginWhiteSpace(parser2, c) {
      if (c === "<") {
        parser2.state = S.OPEN_WAKA;
        parser2.startTagPosition = parser2.position;
      } else if (!isWhitespace2(c)) {
        strictFail(parser2, "Non-whitespace before first tag.");
        parser2.textNode = c;
        parser2.state = S.TEXT;
      }
    }
    function charAt(chunk, i) {
      var result = "";
      if (i < chunk.length) {
        result = chunk.charAt(i);
      }
      return result;
    }
    function write(chunk) {
      var parser2 = this;
      if (this.error) {
        throw this.error;
      }
      if (parser2.closed) {
        return error2(parser2, "Cannot write after close. Assign an onready handler.");
      }
      if (chunk === null) {
        return end(parser2);
      }
      if (typeof chunk === "object") {
        chunk = chunk.toString();
      }
      var i = 0;
      var c = "";
      while (true) {
        c = charAt(chunk, i++);
        parser2.c = c;
        if (!c) {
          break;
        }
        if (parser2.trackPosition) {
          parser2.position++;
          if (c === "\n") {
            parser2.line++;
            parser2.column = 0;
          } else {
            parser2.column++;
          }
        }
        switch (parser2.state) {
          case S.BEGIN:
            parser2.state = S.BEGIN_WHITESPACE;
            if (c === "\uFEFF") {
              continue;
            }
            beginWhiteSpace(parser2, c);
            continue;
          case S.BEGIN_WHITESPACE:
            beginWhiteSpace(parser2, c);
            continue;
          case S.TEXT:
            if (parser2.sawRoot && !parser2.closedRoot) {
              var starti = i - 1;
              while (c && c !== "<" && c !== "&") {
                c = charAt(chunk, i++);
                if (c && parser2.trackPosition) {
                  parser2.position++;
                  if (c === "\n") {
                    parser2.line++;
                    parser2.column = 0;
                  } else {
                    parser2.column++;
                  }
                }
              }
              parser2.textNode += chunk.substring(starti, i - 1);
            }
            if (c === "<" && !(parser2.sawRoot && parser2.closedRoot && !parser2.strict)) {
              parser2.state = S.OPEN_WAKA;
              parser2.startTagPosition = parser2.position;
            } else {
              if (!isWhitespace2(c) && (!parser2.sawRoot || parser2.closedRoot)) {
                strictFail(parser2, "Text data outside of root node.");
              }
              if (c === "&") {
                parser2.state = S.TEXT_ENTITY;
              } else {
                parser2.textNode += c;
              }
            }
            continue;
          case S.SCRIPT:
            if (c === "<") {
              parser2.state = S.SCRIPT_ENDING;
            } else {
              parser2.script += c;
            }
            continue;
          case S.SCRIPT_ENDING:
            if (c === "/") {
              parser2.state = S.CLOSE_TAG;
            } else {
              parser2.script += "<" + c;
              parser2.state = S.SCRIPT;
            }
            continue;
          case S.OPEN_WAKA:
            if (c === "!") {
              parser2.state = S.SGML_DECL;
              parser2.sgmlDecl = "";
            } else if (isWhitespace2(c)) ;
            else if (isMatch(nameStart, c)) {
              parser2.state = S.OPEN_TAG;
              parser2.tagName = c;
            } else if (c === "/") {
              parser2.state = S.CLOSE_TAG;
              parser2.tagName = "";
            } else if (c === "?") {
              parser2.state = S.PROC_INST;
              parser2.procInstName = parser2.procInstBody = "";
            } else {
              strictFail(parser2, "Unencoded <");
              if (parser2.startTagPosition + 1 < parser2.position) {
                var pad = parser2.position - parser2.startTagPosition;
                c = new Array(pad).join(" ") + c;
              }
              parser2.textNode += "<" + c;
              parser2.state = S.TEXT;
            }
            continue;
          case S.SGML_DECL:
            if ((parser2.sgmlDecl + c).toUpperCase() === CDATA) {
              emitNode(parser2, "onopencdata");
              parser2.state = S.CDATA;
              parser2.sgmlDecl = "";
              parser2.cdata = "";
            } else if (parser2.sgmlDecl + c === "--") {
              parser2.state = S.COMMENT;
              parser2.comment = "";
              parser2.sgmlDecl = "";
            } else if ((parser2.sgmlDecl + c).toUpperCase() === DOCTYPE) {
              parser2.state = S.DOCTYPE;
              if (parser2.doctype || parser2.sawRoot) {
                strictFail(parser2, "Inappropriately located doctype declaration");
              }
              parser2.doctype = "";
              parser2.sgmlDecl = "";
            } else if (c === ">") {
              emitNode(parser2, "onsgmldeclaration", parser2.sgmlDecl);
              parser2.sgmlDecl = "";
              parser2.state = S.TEXT;
            } else if (isQuote(c)) {
              parser2.state = S.SGML_DECL_QUOTED;
              parser2.sgmlDecl += c;
            } else {
              parser2.sgmlDecl += c;
            }
            continue;
          case S.SGML_DECL_QUOTED:
            if (c === parser2.q) {
              parser2.state = S.SGML_DECL;
              parser2.q = "";
            }
            parser2.sgmlDecl += c;
            continue;
          case S.DOCTYPE:
            if (c === ">") {
              parser2.state = S.TEXT;
              emitNode(parser2, "ondoctype", parser2.doctype);
              parser2.doctype = true;
            } else {
              parser2.doctype += c;
              if (c === "[") {
                parser2.state = S.DOCTYPE_DTD;
              } else if (isQuote(c)) {
                parser2.state = S.DOCTYPE_QUOTED;
                parser2.q = c;
              }
            }
            continue;
          case S.DOCTYPE_QUOTED:
            parser2.doctype += c;
            if (c === parser2.q) {
              parser2.q = "";
              parser2.state = S.DOCTYPE;
            }
            continue;
          case S.DOCTYPE_DTD:
            parser2.doctype += c;
            if (c === "]") {
              parser2.state = S.DOCTYPE;
            } else if (isQuote(c)) {
              parser2.state = S.DOCTYPE_DTD_QUOTED;
              parser2.q = c;
            }
            continue;
          case S.DOCTYPE_DTD_QUOTED:
            parser2.doctype += c;
            if (c === parser2.q) {
              parser2.state = S.DOCTYPE_DTD;
              parser2.q = "";
            }
            continue;
          case S.COMMENT:
            if (c === "-") {
              parser2.state = S.COMMENT_ENDING;
            } else {
              parser2.comment += c;
            }
            continue;
          case S.COMMENT_ENDING:
            if (c === "-") {
              parser2.state = S.COMMENT_ENDED;
              parser2.comment = textopts(parser2.opt, parser2.comment);
              if (parser2.comment) {
                emitNode(parser2, "oncomment", parser2.comment);
              }
              parser2.comment = "";
            } else {
              parser2.comment += "-" + c;
              parser2.state = S.COMMENT;
            }
            continue;
          case S.COMMENT_ENDED:
            if (c !== ">") {
              strictFail(parser2, "Malformed comment");
              parser2.comment += "--" + c;
              parser2.state = S.COMMENT;
            } else {
              parser2.state = S.TEXT;
            }
            continue;
          case S.CDATA:
            if (c === "]") {
              parser2.state = S.CDATA_ENDING;
            } else {
              parser2.cdata += c;
            }
            continue;
          case S.CDATA_ENDING:
            if (c === "]") {
              parser2.state = S.CDATA_ENDING_2;
            } else {
              parser2.cdata += "]" + c;
              parser2.state = S.CDATA;
            }
            continue;
          case S.CDATA_ENDING_2:
            if (c === ">") {
              if (parser2.cdata) {
                emitNode(parser2, "oncdata", parser2.cdata);
              }
              emitNode(parser2, "onclosecdata");
              parser2.cdata = "";
              parser2.state = S.TEXT;
            } else if (c === "]") {
              parser2.cdata += "]";
            } else {
              parser2.cdata += "]]" + c;
              parser2.state = S.CDATA;
            }
            continue;
          case S.PROC_INST:
            if (c === "?") {
              parser2.state = S.PROC_INST_ENDING;
            } else if (isWhitespace2(c)) {
              parser2.state = S.PROC_INST_BODY;
            } else {
              parser2.procInstName += c;
            }
            continue;
          case S.PROC_INST_BODY:
            if (!parser2.procInstBody && isWhitespace2(c)) {
              continue;
            } else if (c === "?") {
              parser2.state = S.PROC_INST_ENDING;
            } else {
              parser2.procInstBody += c;
            }
            continue;
          case S.PROC_INST_ENDING:
            if (c === ">") {
              emitNode(parser2, "onprocessinginstruction", { name: parser2.procInstName, body: parser2.procInstBody });
              parser2.procInstName = parser2.procInstBody = "";
              parser2.state = S.TEXT;
            } else {
              parser2.procInstBody += "?" + c;
              parser2.state = S.PROC_INST_BODY;
            }
            continue;
          case S.OPEN_TAG:
            if (isMatch(nameBody, c)) {
              parser2.tagName += c;
            } else {
              newTag(parser2);
              if (c === ">") {
                openTag(parser2);
              } else if (c === "/") {
                parser2.state = S.OPEN_TAG_SLASH;
              } else {
                if (!isWhitespace2(c)) {
                  strictFail(parser2, "Invalid character in tag name");
                }
                parser2.state = S.ATTRIB;
              }
            }
            continue;
          case S.OPEN_TAG_SLASH:
            if (c === ">") {
              openTag(parser2, true);
              closeTag(parser2);
            } else {
              strictFail(parser2, "Forward-slash in opening tag not followed by >");
              parser2.state = S.ATTRIB;
            }
            continue;
          case S.ATTRIB:
            if (isWhitespace2(c)) {
              continue;
            } else if (c === ">") {
              openTag(parser2);
            } else if (c === "/") {
              parser2.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              parser2.attribName = c;
              parser2.attribValue = "";
              parser2.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser2, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_NAME:
            if (c === "=") {
              parser2.state = S.ATTRIB_VALUE;
            } else if (c === ">") {
              strictFail(parser2, "Attribute without value");
              parser2.attribValue = parser2.attribName;
              attrib(parser2);
              openTag(parser2);
            } else if (isWhitespace2(c)) {
              parser2.state = S.ATTRIB_NAME_SAW_WHITE;
            } else if (isMatch(nameBody, c)) {
              parser2.attribName += c;
            } else {
              strictFail(parser2, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_NAME_SAW_WHITE:
            if (c === "=") {
              parser2.state = S.ATTRIB_VALUE;
            } else if (isWhitespace2(c)) {
              continue;
            } else {
              strictFail(parser2, "Attribute without value");
              parser2.tag.attributes[parser2.attribName] = "";
              parser2.attribValue = "";
              emitNode(parser2, "onattribute", { name: parser2.attribName, value: "" });
              parser2.attribName = "";
              if (c === ">") {
                openTag(parser2);
              } else if (isMatch(nameStart, c)) {
                parser2.attribName = c;
                parser2.state = S.ATTRIB_NAME;
              } else {
                strictFail(parser2, "Invalid attribute name");
                parser2.state = S.ATTRIB;
              }
            }
            continue;
          case S.ATTRIB_VALUE:
            if (isWhitespace2(c)) {
              continue;
            } else if (isQuote(c)) {
              parser2.q = c;
              parser2.state = S.ATTRIB_VALUE_QUOTED;
            } else {
              strictFail(parser2, "Unquoted attribute value");
              parser2.state = S.ATTRIB_VALUE_UNQUOTED;
              parser2.attribValue = c;
            }
            continue;
          case S.ATTRIB_VALUE_QUOTED:
            if (c !== parser2.q) {
              if (c === "&") {
                parser2.state = S.ATTRIB_VALUE_ENTITY_Q;
              } else {
                parser2.attribValue += c;
              }
              continue;
            }
            attrib(parser2);
            parser2.q = "";
            parser2.state = S.ATTRIB_VALUE_CLOSED;
            continue;
          case S.ATTRIB_VALUE_CLOSED:
            if (isWhitespace2(c)) {
              parser2.state = S.ATTRIB;
            } else if (c === ">") {
              openTag(parser2);
            } else if (c === "/") {
              parser2.state = S.OPEN_TAG_SLASH;
            } else if (isMatch(nameStart, c)) {
              strictFail(parser2, "No whitespace between attributes");
              parser2.attribName = c;
              parser2.attribValue = "";
              parser2.state = S.ATTRIB_NAME;
            } else {
              strictFail(parser2, "Invalid attribute name");
            }
            continue;
          case S.ATTRIB_VALUE_UNQUOTED:
            if (!isAttribEnd(c)) {
              if (c === "&") {
                parser2.state = S.ATTRIB_VALUE_ENTITY_U;
              } else {
                parser2.attribValue += c;
              }
              continue;
            }
            attrib(parser2);
            if (c === ">") {
              openTag(parser2);
            } else {
              parser2.state = S.ATTRIB;
            }
            continue;
          case S.CLOSE_TAG:
            if (!parser2.tagName) {
              if (isWhitespace2(c)) {
                continue;
              } else if (notMatch(nameStart, c)) {
                if (parser2.script) {
                  parser2.script += "</" + c;
                  parser2.state = S.SCRIPT;
                } else {
                  strictFail(parser2, "Invalid tagname in closing tag.");
                }
              } else {
                parser2.tagName = c;
              }
            } else if (c === ">") {
              closeTag(parser2);
            } else if (isMatch(nameBody, c)) {
              parser2.tagName += c;
            } else if (parser2.script) {
              parser2.script += "</" + parser2.tagName;
              parser2.tagName = "";
              parser2.state = S.SCRIPT;
            } else {
              if (!isWhitespace2(c)) {
                strictFail(parser2, "Invalid tagname in closing tag");
              }
              parser2.state = S.CLOSE_TAG_SAW_WHITE;
            }
            continue;
          case S.CLOSE_TAG_SAW_WHITE:
            if (isWhitespace2(c)) {
              continue;
            }
            if (c === ">") {
              closeTag(parser2);
            } else {
              strictFail(parser2, "Invalid characters in closing tag");
            }
            continue;
          case S.TEXT_ENTITY:
          case S.ATTRIB_VALUE_ENTITY_Q:
          case S.ATTRIB_VALUE_ENTITY_U:
            var returnState;
            var buffer;
            switch (parser2.state) {
              case S.TEXT_ENTITY:
                returnState = S.TEXT;
                buffer = "textNode";
                break;
              case S.ATTRIB_VALUE_ENTITY_Q:
                returnState = S.ATTRIB_VALUE_QUOTED;
                buffer = "attribValue";
                break;
              case S.ATTRIB_VALUE_ENTITY_U:
                returnState = S.ATTRIB_VALUE_UNQUOTED;
                buffer = "attribValue";
                break;
            }
            if (c === ";") {
              var parsedEntity = parseEntity(parser2);
              if (parser2.state === S.TEXT_ENTITY && !sax2.ENTITIES[parser2.entity] && parsedEntity !== "&" + parser2.entity + ";") {
                chunk = chunk.slice(0, i) + parsedEntity + chunk.slice(i);
              } else {
                parser2[buffer] += parsedEntity;
              }
              parser2.entity = "";
              parser2.state = returnState;
            } else if (isMatch(parser2.entity.length ? entityBody : entityStart, c)) {
              parser2.entity += c;
            } else {
              strictFail(parser2, "Invalid character in entity name");
              parser2[buffer] += "&" + parser2.entity + c;
              parser2.entity = "";
              parser2.state = returnState;
            }
            continue;
          default:
            throw new Error(parser2, "Unknown state: " + parser2.state);
        }
      }
      if (parser2.position >= parser2.bufferCheckPosition) {
        checkBufferLength(parser2);
      }
      return parser2;
    }
  })(exports);
})(sax);
var SAX = sax;
var JSAPI$1 = jsAPI;
var { textElems: textElems$1 } = _collections;
var SvgoParserError = class _SvgoParserError extends Error {
  constructor(message, line, column, source, file) {
    super(message);
    this.name = "SvgoParserError";
    this.message = `${file || "<input>"}:${line}:${column}: ${message}`;
    this.reason = message;
    this.line = line;
    this.column = column;
    this.source = source;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, _SvgoParserError);
    }
  }
  toString() {
    const lines = this.source.split(/\r?\n/);
    const startLine = Math.max(this.line - 3, 0);
    const endLine = Math.min(this.line + 2, lines.length);
    const lineNumberWidth = String(endLine).length;
    const startColumn = Math.max(this.column - 54, 0);
    const endColumn = Math.max(this.column + 20, 80);
    const code = lines.slice(startLine, endLine).map(((line, index) => {
      const lineSlice = line.slice(startColumn, endColumn);
      let ellipsisPrefix = "";
      let ellipsisSuffix = "";
      if (startColumn !== 0) {
        ellipsisPrefix = startColumn > line.length - 1 ? " " : "\u2026";
      }
      if (endColumn < line.length - 1) {
        ellipsisSuffix = "\u2026";
      }
      const number = startLine + 1 + index;
      const gutter = ` ${number.toString().padStart(lineNumberWidth)} | `;
      if (number === this.line) {
        const gutterSpacing = gutter.replace(/[^|]/g, " ");
        const lineSpacing = (ellipsisPrefix + line.slice(startColumn, this.column - 1)).replace(/[^\t]/g, " ");
        const spacing = gutterSpacing + lineSpacing;
        return `>${gutter}${ellipsisPrefix}${lineSlice}${ellipsisSuffix}
 ${spacing}^`;
      }
      return ` ${gutter}${ellipsisPrefix}${lineSlice}${ellipsisSuffix}`;
    })).join("\n");
    return `${this.name}: ${this.message}

${code}
`;
  }
};
var entityDeclaration = /<!ENTITY\s+(\S+)\s+(?:'([^']+)'|"([^"]+)")\s*>/g;
var config = { strict: true, trim: false, normalize: false, lowercase: true, xmlns: true, position: true };
var parseSvg$1 = (data, from) => {
  const sax2 = SAX.parser(config.strict, config);
  const root = new JSAPI$1({ type: "root", children: [] });
  let current = root;
  const stack = [root];
  const pushToContent = (node2) => {
    const wrapped = new JSAPI$1(node2, current);
    current.children.push(wrapped);
    return wrapped;
  };
  sax2.ondoctype = (doctype) => {
    const node2 = { type: "doctype", name: "svg", data: { doctype } };
    pushToContent(node2);
    const subsetStart = doctype.indexOf("[");
    if (subsetStart >= 0) {
      entityDeclaration.lastIndex = subsetStart;
      let entityMatch = entityDeclaration.exec(data);
      while (entityMatch != null) {
        sax2.ENTITIES[entityMatch[1]] = entityMatch[2] || entityMatch[3];
        entityMatch = entityDeclaration.exec(data);
      }
    }
  };
  sax2.onprocessinginstruction = (data2) => {
    const node2 = { type: "instruction", name: data2.name, value: data2.body };
    pushToContent(node2);
  };
  sax2.oncomment = (comment) => {
    const node2 = { type: "comment", value: comment.trim() };
    pushToContent(node2);
  };
  sax2.oncdata = (cdata) => {
    const node2 = { type: "cdata", value: cdata };
    pushToContent(node2);
  };
  sax2.onopentag = (data2) => {
    let element = { type: "element", name: data2.name, attributes: {}, children: [] };
    for (const [name2, attr] of Object.entries(data2.attributes)) {
      element.attributes[name2] = attr.value;
    }
    element = pushToContent(element);
    current = element;
    stack.push(element);
  };
  sax2.ontext = (text) => {
    if (current.type === "element") {
      if (textElems$1.includes(current.name)) {
        const node2 = { type: "text", value: text };
        pushToContent(node2);
      } else if (/\S/.test(text)) {
        const node2 = { type: "text", value: text.trim() };
        pushToContent(node2);
      }
    }
  };
  sax2.onclosetag = () => {
    stack.pop();
    current = stack[stack.length - 1];
  };
  sax2.onerror = (e) => {
    const error2 = new SvgoParserError(e.reason, e.line + 1, e.column, data, from);
    if (e.message.indexOf("Unexpected end") === -1) {
      throw error2;
    }
  };
  sax2.write(data).close();
  return root;
};
parser.parseSvg = parseSvg$1;
var stringifier = {};
var { textElems } = _collections;
var encodeEntity = (char) => entities[char];
var defaults = { doctypeStart: "<!DOCTYPE", doctypeEnd: ">", procInstStart: "<?", procInstEnd: "?>", tagOpenStart: "<", tagOpenEnd: ">", tagCloseStart: "</", tagCloseEnd: ">", tagShortStart: "<", tagShortEnd: "/>", attrStart: '="', attrEnd: '"', commentStart: "<!--", commentEnd: "-->", cdataStart: "<![CDATA[", cdataEnd: "]]>", textStart: "", textEnd: "", indent: 4, regEntities: /[&'"<>]/g, regValEntities: /[&"<>]/g, encodeEntity, pretty: false, useShortTags: true, eol: "lf", finalNewline: false };
var entities = { "&": "&amp;", "'": "&apos;", '"': "&quot;", ">": "&gt;", "<": "&lt;" };
var stringifySvg$1 = (data, userOptions = {}) => {
  const config2 = __spreadValues(__spreadValues({}, defaults), userOptions);
  const indent = config2.indent;
  let newIndent = "    ";
  if (typeof indent === "number" && Number.isNaN(indent) === false) {
    newIndent = indent < 0 ? "	" : " ".repeat(indent);
  } else if (typeof indent === "string") {
    newIndent = indent;
  }
  const state = { width: void 0, height: void 0, indent: newIndent, textContext: null, indentLevel: 0 };
  const eol = config2.eol === "crlf" ? "\r\n" : "\n";
  if (config2.pretty) {
    config2.doctypeEnd += eol;
    config2.procInstEnd += eol;
    config2.commentEnd += eol;
    config2.cdataEnd += eol;
    config2.tagShortEnd += eol;
    config2.tagOpenEnd += eol;
    config2.tagCloseEnd += eol;
    config2.textEnd += eol;
  }
  let svg = stringifyNode(data, config2, state);
  if (config2.finalNewline && svg.length > 0 && svg[svg.length - 1] !== "\n") {
    svg += eol;
  }
  return { data: svg, info: { width: state.width, height: state.height } };
};
stringifier.stringifySvg = stringifySvg$1;
var stringifyNode = (data, config2, state) => {
  let svg = "";
  state.indentLevel += 1;
  for (const item of data.children) {
    if (item.type === "element") {
      svg += stringifyElement(item, config2, state);
    }
    if (item.type === "text") {
      svg += stringifyText(item, config2, state);
    }
    if (item.type === "doctype") {
      svg += stringifyDoctype(item, config2);
    }
    if (item.type === "instruction") {
      svg += stringifyInstruction(item, config2);
    }
    if (item.type === "comment") {
      svg += stringifyComment(item, config2);
    }
    if (item.type === "cdata") {
      svg += stringifyCdata(item, config2, state);
    }
  }
  state.indentLevel -= 1;
  return svg;
};
var createIndent = (config2, state) => {
  let indent = "";
  if (config2.pretty && state.textContext == null) {
    indent = state.indent.repeat(state.indentLevel - 1);
  }
  return indent;
};
var stringifyDoctype = (node2, config2) => config2.doctypeStart + node2.data.doctype + config2.doctypeEnd;
var stringifyInstruction = (node2, config2) => config2.procInstStart + node2.name + " " + node2.value + config2.procInstEnd;
var stringifyComment = (node2, config2) => config2.commentStart + node2.value + config2.commentEnd;
var stringifyCdata = (node2, config2, state) => createIndent(config2, state) + config2.cdataStart + node2.value + config2.cdataEnd;
var stringifyElement = (node2, config2, state) => {
  if (node2.name === "svg" && node2.attributes.width != null && node2.attributes.height != null) {
    state.width = node2.attributes.width;
    state.height = node2.attributes.height;
  }
  if (node2.children.length === 0) {
    if (config2.useShortTags) {
      return createIndent(config2, state) + config2.tagShortStart + node2.name + stringifyAttributes(node2, config2) + config2.tagShortEnd;
    } else {
      return createIndent(config2, state) + config2.tagShortStart + node2.name + stringifyAttributes(node2, config2) + config2.tagOpenEnd + config2.tagCloseStart + node2.name + config2.tagCloseEnd;
    }
  } else {
    let tagOpenStart = config2.tagOpenStart;
    let tagOpenEnd = config2.tagOpenEnd;
    let tagCloseStart = config2.tagCloseStart;
    let tagCloseEnd = config2.tagCloseEnd;
    let openIndent = createIndent(config2, state);
    let closeIndent = createIndent(config2, state);
    if (state.textContext) {
      tagOpenStart = defaults.tagOpenStart;
      tagOpenEnd = defaults.tagOpenEnd;
      tagCloseStart = defaults.tagCloseStart;
      tagCloseEnd = defaults.tagCloseEnd;
      openIndent = "";
    } else if (textElems.includes(node2.name)) {
      tagOpenEnd = defaults.tagOpenEnd;
      tagCloseStart = defaults.tagCloseStart;
      closeIndent = "";
      state.textContext = node2;
    }
    const children = stringifyNode(node2, config2, state);
    if (state.textContext === node2) {
      state.textContext = null;
    }
    return openIndent + tagOpenStart + node2.name + stringifyAttributes(node2, config2) + tagOpenEnd + children + closeIndent + tagCloseStart + node2.name + tagCloseEnd;
  }
};
var stringifyAttributes = (node2, config2) => {
  let attrs = "";
  for (const [name2, value] of Object.entries(node2.attributes)) {
    if (value !== void 0) {
      const encodedValue = value.toString().replace(config2.regValEntities, config2.encodeEntity);
      attrs += " " + name2 + config2.attrStart + encodedValue + config2.attrEnd;
    } else {
      attrs += " " + name2;
    }
  }
  return attrs;
};
var stringifyText = (node2, config2, state) => createIndent(config2, state) + config2.textStart + node2.value.replace(config2.regEntities, config2.encodeEntity) + (state.textContext ? "" : config2.textEnd);
var { defaultPlugins, resolvePluginConfig, extendDefaultPlugins } = config$1;
var { parseSvg } = parser;
var { stringifySvg } = stringifier;
var { invokePlugins } = plugins;
var JSAPI = jsAPI;
var { encodeSVGDatauri } = tools;
var extendDefaultPlugins_1 = svgo.extendDefaultPlugins = extendDefaultPlugins;
var optimize = (input, config2) => {
  if (config2 == null) {
    config2 = {};
  }
  if (typeof config2 !== "object") {
    throw Error("Config should be an object");
  }
  const maxPassCount = config2.multipass ? 10 : 1;
  let prevResultSize = Number.POSITIVE_INFINITY;
  let svgjs = null;
  const info = {};
  if (config2.path != null) {
    info.path = config2.path;
  }
  for (let i = 0; i < maxPassCount; i += 1) {
    info.multipassCount = i;
    try {
      svgjs = parseSvg(input, config2.path);
    } catch (error2) {
      return { error: error2.toString(), modernError: error2 };
    }
    if (svgjs.error != null) {
      if (config2.path != null) {
        svgjs.path = config2.path;
      }
      return svgjs;
    }
    const plugins2 = config2.plugins || defaultPlugins;
    if (Array.isArray(plugins2) === false) {
      throw Error("Invalid plugins list. Provided 'plugins' in config should be an array.");
    }
    const resolvedPlugins = plugins2.map(resolvePluginConfig);
    const globalOverrides = {};
    if (config2.floatPrecision != null) {
      globalOverrides.floatPrecision = config2.floatPrecision;
    }
    svgjs = invokePlugins(svgjs, info, resolvedPlugins, null, globalOverrides);
    svgjs = stringifySvg(svgjs, config2.js2svg);
    if (svgjs.data.length < prevResultSize) {
      input = svgjs.data;
      prevResultSize = svgjs.data.length;
    } else {
      if (config2.datauri) {
        svgjs.data = encodeSVGDatauri(svgjs.data, config2.datauri);
      }
      if (config2.path != null) {
        svgjs.path = config2.path;
      }
      return svgjs;
    }
  }
  return svgjs;
};
var optimize_1 = svgo.optimize = optimize;
var createContentItem = (data) => new JSAPI(data);
var createContentItem_1 = svgo.createContentItem = createContentItem;
export {
  createContentItem_1 as createContentItem,
  svgo as default,
  extendDefaultPlugins_1 as extendDefaultPlugins,
  optimize_1 as optimize
};
