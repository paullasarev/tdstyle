;(function(){
  var $ = window.jQuery;

  var _pixelsToInt = function(val) {
    if (!val)
      return 0;
    return parseInt(val, 10);
  };

  var _fontSize = function(value) {
    return _pixelsToInt(value);
  };

  var _elFontSize = function(el) {
    return _fontSize(el.css("font-size"));
  };
  
  var _elHeight = function(el) {
    return _pixelsToInt(el.css("height"));
  };

  var _elLineHeight = function(el) {
    var value = el.css('line-height');
    if (value === 'normal')
      return _fontSize(el.css("font-size")) * 1.2;

    if (/[0-9]+\.[0-9]/.test(value))
      return parseFloat(val) * _fontSize(el.css("font-size"));

    if (/[0-9]+\%/.test(value))
      return parseInt(value) * _fontSize(el.css("font-size"));

    return _pixelsToInt(value);
  };

  var _format = function(msg, val0, val1) {
    return msg.replace("{0}", val0). replace("{1}", val1);
  };

  var _formatRequired = function(msg0, actual, required) {
    var msg = msg0 + " is '{0}' while required '{1}'";
    return _format(msg, actual, required);
  };

  var _formatUnknown = function(msg, val) {
    return _format("unknown '{0}: {1}'", msg, val);
  };

  var _cssColors = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };

  var _dummy = $('<div/>');

  var _compareColor = function(etalon, value, msg) {
    var adjustedEtalon = _cssColors[etalon.toLowerCase()];
    var adjustedValue = _cssColors[value.toLowerCase()];

    if (adjustedEtalon) 
      etalon = "#" + adjustedEtalon;
    $(_dummy).css('color', etalon);
    adjustedEtalon = $(_dummy).css('color');

    if (adjustedValue)
      value = "#" + adjustedValue;
    $(_dummy).css('color', value);
    adjustedValue = $(_dummy).css('color');

    if (adjustedEtalon !== adjustedValue) {
      throw new Error(_formatRequired(msg, value, etalon));
    }
  };

  var _comparePixels = function(etalon, value, msg) {
    if (_pixelsToInt(etalon) !== _pixelsToInt(value))
      throw new Error(_formatRequired(msg, value, etalon));
  };

  var _compareValues = function(etalon, value, msg) {
    if (etalon !== value)
      throw new Error(_formatRequired(msg, value, etalon));
  };

  var _none = function(value) {
    if (!value)
      return 'none';
    return value;
  };

  var _getBaseSelector = function(selector) {
    var pos = selector.search(":");
    if (pos < 0)
      return selector;

    return selector.substring(0, pos);
  };

  function _isTransparentColor(color)
  {
    return !color || color==='transparent' || color==='#000000' || color==='rgba(0, 0, 0, 0)';
  }

  function _elGetColor(el, colorProperty) {
    var color = el.css(colorProperty);
    if (!_isTransparentColor(color))
      return color;
    return "";
  }

  function _getColor(selector, colorProperty) {
    var el = _getCssAccessor(selector);

    var color = _elGetColor(el, colorProperty);
    if (color)
      return color;

    var sel = _getBaseSelector(selector);
    if (sel != selector) {
      el = $(sel);
      color = _elGetColor(el, colorProperty);
      if (color)
        return color;
    }

    var parents = el.parents();

    for(var i = 0 ; i <parents.length ; i++) {
      var el = parents.eq(i);
      color = _elGetColor(el, colorProperty);
      if (color)
        return color;
    }

    return '#fff';
  }

  function _getInheritProperty(selector, propName)
  {
    var el = _getCssAccessor(selector);

    var value = el.css(propName);
    if (!value)
      return "";
    if (value.toLowerCase() !== "inherit")
      return value;

    var sel = _getBaseSelector(selector);
    if (sel != selector) {
      el = $(sel);

      value = el.css(propName);
      if (!value)
        return "";
      if (value.toLowerCase() !== "inherit")
        return value;
    }

    var parents = el.parents();

    for(var i = 0 ; i <parents.length ; i++) {
      el = parents.eq(i);

      value = el.css(propName);
      if (!value)
        return "";
      if (value.toLowerCase() !== "inherit")
        return value;
    }

    return "";
  }

  function _isOutline(selector, required) {
    var pos = selector.search(":");
    if (pos < 0)
      selector += ":";
    var outline = _parseBorder(required);
    var value;
    if (outline.style) {
      value = _getInheritProperty(selector, "outline-style");
      _compareValues(outline.style, value, "outline-style");
    }
    if (outline.width) {
      value = _getInheritProperty(selector, "outline-width");
      _compareValues(outline.width, value, "outline-width");
    }
    if (outline.color) {
      value = _getInheritProperty(selector, "outline-color");
      _compareValues(outline.color, value, "outline-color");
    }

    return true;
  }

  function _isBorderStyle(val) {
    switch(val){
      case 'none':
      case 'hidden':
      case 'dotted':
      case 'dashed':
      case 'solid':
      case 'double':
      case 'groove':
      case 'ridge':
      case 'inset':
      case 'ridge':
      case 'outset':
        return true;
    }
    return false;
  }

  var _parseBorder = function(border) {
    var result = {};
    var parts = border.split(' ');
    if (_isBorderStyle(parts[0])){
      //solid 5px red
      result.style = parts[0];
      result.width = parts[1];
      result.color = parts[2];
    } else if (_isBorderStyle(parts[1])){
      //5px solid red;
      result.width = parts[0];
      result.style = parts[1];
      result.color = parts[2];
    }
    return result;
  };

  var _normWeight = function(weight) {
    if (weight === '700')
      return 'bold';
    if (weight === '400')
      return 'normal';
    return weight;
  };

  var _getCssPrefix = function() {
    var styles = window.getComputedStyle(document.documentElement, '');
    var prefix = (Array.prototype.slice.call(styles).join('') 
      .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
    )[1];
    return prefix;
  }

  var _camelCase = function(input) { 
    return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
        return group1.toUpperCase();
    });
  };

  var _cssPrefix = _getCssPrefix();

  var _findStyleSheet = function(selector) {
    var i,j;
    for(i = 0; i < document.styleSheets.length; ++i) {
      var styleSheet = document.styleSheets[i];
      var rules = styleSheet.cssRules;
      if (!rules)
        rules = styleSheet.rules;
      if (!rules)
        continue;
      for(j = 0; j < rules.length; ++j) {
        var rule = rules[j];

        if(selector === rule.selectorText) {
          return {
            css: function(property) {
              return rule.style[_camelCase(property)];
            }
          };
        }
      }
    }

    throw new Error(_format("didn't find pseudo selector {0}", selector));  
  };

  var _cssHints = {
    ':placeholder': {
      webkit: "::-webkit-input-placeholder",
      moz: "::-moz-placeholder",
      ms: ":-ms-input-placeholder"
    }
  };

  var _getCssAccessor = function(selector) {
    var pos = selector.search(":");
    if (pos < 0)
      return $(selector);

    var sel = selector.substring(0, pos);
    var pseudo = selector.substring(pos);
    if (pseudo === ':')
      return _findStyleSheet(sel);

    var hints = _cssHints[pseudo]; 
    if (hints) {
      prefix = hints[_cssPrefix];
      if (prefix)
        return _findStyleSheet(sel + prefix);
    }

    return _findStyleSheet(sel + pseudo);
  };

  var _checkBoxBorder = function(el, boxBorder, prefix) {
    var border = _parseBorder(boxBorder);
    if (border.style) {
      value = el.css(prefix + "-style");
      _compareValues(_none(border.style), _none(value), "style");
    }
    if (border.width) {
      value = el.css(prefix + "-width");
      _comparePixels(border.width, value, "width");
    }
    if (border.color) {
      value = el.css(prefix + "-color");
      _compareColor(border.color, value, prefix + "-color");
    }
  }

  function _karmaLoadHtml(path) {
    var fixture = window.__html__[path];
    var id = 'karma-fixture-div';
    var idSel = '#' + id;
    var idDiv = '<div id="' + id + '"></div>';

    if (!$(idSel).length)
      $('body').append(idDiv);

    $(idSel).html(fixture);
  }

  function _karmaLoadCss(path, done) {
    path = 'base/' + path;
    $('style').remove();

    $("<style/>", {
     type: "text/css",
    }).appendTo("head");

    $('style').load(path, function(){
      done();
    });
  }


  var module = {
    getOffsetRect: function(selector) {
      return this.getElementOffsetRect($(selector).get(0));
    },

    getElementOffsetRect: function(elem) {
      var box = elem.getBoundingClientRect();
      var body = document.body;
      var docElem = document.documentElement;
      var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
      var clientTop = docElem.clientTop || body.clientTop || 0;
      var clientLeft = docElem.clientLeft || body.clientLeft || 0;
      var top  = box.top +  scrollTop - clientTop;
      var left = box.left + scrollLeft - clientLeft;
      return { top: Math.round(top), left: Math.round(left), 
        width: Math.round(box.width), height:Math.round(box.height),
        bottom: Math.round(top) + Math.round(box.height),
        right: Math.round(left) + Math.round(box.width),
      };
    },

    isHorisontallyCentered: function (frameSelector, elementSelector) {
      var frameRect=this.getElementOffsetRect($(frameSelector).get(0));
      var elementRect=this.getElementOffsetRect($(elementSelector).get(0));

      var frameCenter = frameRect.left + frameRect.width / 2.0;
      var elementCenter = elementRect.left + elementRect.width / 2.0;

      var offset = Math.abs(frameCenter - elementCenter);
      var success = (offset <= 0.5);

      //http://javascript.ru/ui/offset
      if (!success)
        throw new Error(_formatRequired(_format("horisontal center of '{0}' in '{1}'", elementSelector, frameSelector)
         , elementCenter, frameCenter));

      return true;
    },

    isVerticallyCentered: function (frameSelector, elementSelector) {
      var frameRect=this.getElementOffsetRect($(frameSelector).get(0));
      var elementRect=this.getElementOffsetRect($(elementSelector).get(0));

      var frameCenter = frameRect.top + frameRect.height / 2.0;
      var elementCenter = elementRect.top + elementRect.height / 2.0;

      var offset = Math.abs(frameCenter - elementCenter);
      var success = (offset <= 0.5);

      if (!success)
        throw new Error(_formatRequired(_format("vertical center of '{0}' in '{1}'", elementSelector, frameSelector)
         , elementCenter, frameCenter));

      return true;
    },

    isCentered: function (frameSelector, elementSelector) {
      return this.isHorisontallyCentered(frameSelector, elementSelector)
        && this.isVerticallyCentered(frameSelector, elementSelector);
    },

    isOnTop: function (frameSelector, elementSelector) {
      var frameRect=this.getOffsetRect(frameSelector);
      var elementRect=this.getOffsetRect(elementSelector);

      if (elementRect.top != frameRect.top)
        throw new Error(_formatRequired(_format("top '{0}' in '{1}'", elementSelector, frameSelector)
         , elementRect.top, frameRect.top));

      return true;
    },

    isOnBottom: function (frameSelector, elementSelector) {
      var frameRect=this.getOffsetRect(frameSelector);
      var elementRect=this.getOffsetRect(elementSelector);

      if (elementRect.bottom != frameRect.bottom)
        throw new Error(_formatRequired(_format("bottom '{0}' in '{1}'", elementSelector, frameSelector)
         , elementRect.bottom, frameRect.bottom));

      return true;
    },

    isOnRight: function (frameSelector, elementSelector) {
      var frameRect=this.getOffsetRect(frameSelector);
      var elementRect=this.getOffsetRect(elementSelector);

      if (elementRect.left != frameRect.right)
        throw new Error(_formatRequired(_format(" '{0}' is on right of  '{1}'", elementSelector, frameSelector)
         , elementRect.left, frameRect.right));

      return true;
    },

    areInRaw: function() {
      var top, bottom;
      for (var i = 0 ; i < arguments.length ; ++i) {
        var elRect = this.getOffsetRect(arguments[i]);
        if (!top && !bottom) {
          top = elRect.top;
          bottom = elRect.bottom;
        } else {
          if (elRect.top != top || elRect.bottom != bottom)
            throw new Error(_formatRequired(_format("wrong '{0}' block", arguments[i])
             , String(elRect.top) + "/" + String(elRect.bottom)
             , String(top) + "/" + String(bottom)));
        }
      }
      return true;
    },

    areInCol: function() {
      var left, right;
      for (var i = 0 ; i < arguments.length ; ++i) {
        var elRect = this.getOffsetRect(arguments[i]);
        if (!left && !right) {
          left = elRect.left;
          right = elRect.right;
        } else {
          if (elRect.left != left || elRect.right != right)
            throw new Error(_formatRequired(_format("wrong '{0}' block", arguments[i])
             , String(elRect.left) + "/" + String(elRect.right)
             , String(left) + "/" + String(right)));
        }
      }
      return true;
    },

    isStartOnLeft: function (frameSelector, elementSelector) {
      var frameRect=this.getOffsetRect(frameSelector);
      var elementRect=this.getOffsetRect(elementSelector);

      if (elementRect.left != frameRect.left)
        throw new Error(_formatRequired(_format(" '{0}' is start on left '{1}'", elementSelector, frameSelector)
         , elementRect.left, frameRect.left));

      return true;
    },

    isEndOnRight: function (frameSelector, elementSelector) {
      var frameRect=this.getOffsetRect(frameSelector);
      var elementRect=this.getOffsetRect(elementSelector);

      if (elementRect.right != frameRect.right)
        throw new Error(_formatRequired(_format(" '{0}' is end on right '{1}'", elementSelector, frameSelector)
         , elementRect.right, frameRect.right));

      return true;
    },

    isFitWidth: function (frameSelector, elementSelector) {
      var frameRect=this.getElementOffsetRect($(frameSelector).get(0));
      var elementRect=this.getElementOffsetRect($(elementSelector).get(0));

      if (elementRect.left != frameRect.left || elementRect.right != frameRect.right)
        throw new Error(_formatRequired(_format("fit width '{0}' in '{1}'", elementSelector, frameSelector)
         , String(elementRect.left) + "/" + String(elementRect.right)
         , String(frameRect.left) + "/" + String(frameRect.right)));

      return true;
    },

    isFitHeight: function (frameSelector, elementSelector) {
      var frameRect=this.getOffsetRect(frameSelector);
      var elementRect=this.getOffsetRect(elementSelector);

      if (elementRect.top != frameRect.top || elementRect.bottom != frameRect.bottom)
        throw new Error(_formatRequired(_format("fit height '{0}' in '{1}'", elementSelector, frameSelector)
         , String(elementRect.top) + "/" + String(elementRect.bottom)
         , String(frameRect.top) + "/" + String(frameRect.bottom)));

      return true;
    },

    isUnder: function (frameSelector, elementSelector) {
      var frameRect=this.getElementOffsetRect($(frameSelector).get(0));
      var elementRect=this.getElementOffsetRect($(elementSelector).get(0));

      if (elementRect.top != frameRect.bottom)
        throw new Error(_formatRequired(_format("'{0}' under '{1}'", elementSelector, frameSelector)
         , elementRect.top, frameRect.bottom));

      return true;
    },

    isTextCentered: function (elementSelector) {
      var textAlign = $(elementSelector).css("text-align");
      if (textAlign !== "center")
        throw new Error(_formatRequired("text is not centered", textAlign, 'center'));
      return true;
    },

    isContentOnly: function (selector) {
      var el = $(selector);
      var margin = _pixelsToInt(el.css('margin'));
      var padding = _pixelsToInt(el.css('padding'));
      var border = _pixelsToInt(el.css('border'));
      if (margin === 0 && padding === 0 && border===0)
        return true;
      throw new Error(_formatRequired("content only: margin/padding/border", ""+margin+"/"+padding+"/"+border, "0/0/0"));
    },

    getText: function(selector) {
      return $(selector).text().trim();
    },

    getHeight: function(selector) {
      return this.getOffsetRect(selector).height;
    },

    getWidth: function(selector) {
      return this.getOffsetRect(selector).width;
    },

    isHeight: function(selector, required) {
      var actual = this.getHeight(selector);
      if (actual !== required)
        throw new Error(_formatRequired('height', actual, required));
    },

    isWidth: function(selector, required) {
      var actual = this.getWidth(selector);
      if (actual !== required)
        throw new Error(_formatRequired('width', actual, required));
    },

    isLeft: function(selector, required) {
      var actual = this.getOffsetRect(selector).left;
      if (actual !== required)
        throw new Error(_formatRequired('left', actual, required));
    },

    isRight: function(selector, required) {
      var actual = this.getOffsetRect(selector).right;
      if (actual !== required)
        throw new Error(_formatRequired('right', actual, required));
    },

    isTop: function(selector, required) {
      var actual = this.getOffsetRect(selector).top;
      if (actual !== required)
        throw new Error(_formatRequired('top', actual, required));
    },

    isBottom: function(selector, required) {
      var actual = this.getOffsetRect(selector).bottom;
      if (actual !== required)
        throw new Error(_formatRequired('bottom', actual, required));
    },

    isTextVCentered: function(selector) {
      var el = _getCssAccessor(selector);
      var lineHeight = _elLineHeight(el);
      // var fontSize = _elFontSize(el);
      // if (fontSize < lineHeight)
      //   return true;
      var height = _elHeight(el);
      if (lineHeight >= height)
        return true;

      throw new Error(_format("'Text in '{0}'' is not vertically centered", selector));
    },


    isGenericFontFamily: function(family) {
      return family === "serif" || family === "sans-serif" || family === "monospace"
        || family === "cursive" || family === "fantasy";
    },

    getGenericFontFamily: function(family) {
      if (this.isGenericFontFamily(family))
        return family;
      if (family.search("Times") >= 0
          || family.search("Georgia") >= 0
          || family.search("Palatino") >= 0
        ) 
        return "serif";

      if (family.search("Arial") >= 0
        || family.search("Sans") >= 0
        || family.search("Helvetica") >= 0
        || family.search("Tahoma") >= 0
        || family.search("Geneva") >= 0
        || family.search("Verdana") >= 0
        || family.search("Impact") >= 0
        ) 
        return "sans-serif";

      if (family.search("Courier") >= 0
        || family.search("Console") >= 0
        ) 
        return "monospace";

      throw new Error(_formatUnknown("font generic family", family));
    },

    isFont: function(selector, font) {
      var el = _getCssAccessor(selector);

      var value;
      if (font.size) {
        value = el.css("font-size");
        _comparePixels(font.size, value, "font-size");
      }
      if (font.weight) {
        //font-weight: normal|bold|bolder|lighter|number|initial|inherit;
        value = el.css("font-weight");
        _compareValues(_normWeight(font.weight), _normWeight(value), "font-weight");
      }
      if (font.style) {
        //"style:normal|italic|oblique"
        value = el.css("font-style");
        _compareValues(font.style, value, "font-style");
      }
      if (font.variant) {
        //variant: normal|small-caps|initial|inherit
        value = el.css("font-variant");
        _compareValues(font.variant, value, "font-variant");
      }
      if (font.family) {
        value = el.css("font-family");
        if (this.isGenericFontFamily(font.family)) {
          value = this.getGenericFontFamily(value);
        }
        _compareValues(font.family, value, "font-family");
      }
      if (font.color) {
        value = el.css("color");
        _compareColor(value, font.color, "color");
      }

      return true;
    },

    isColor: function(selector, colorProperty, value) {
      var color = _getColor(selector, colorProperty);
      _compareColor(value, color, colorProperty);
      return true;
    },

    compareColor: function(etalon, value, msg) {
      _compareColor(etalon, value, msg);
      return true;
    },

    haveProperty: function(selector, property) {
      var el = _getCssAccessor(selector);
      var prop = el.css(property);
      if (!prop || prop == 'none')
        throw new Error(_format("selector '{0}' have not CSS property '{1}'", selector, property));

      return true;
    },

    isTag: function(selector, tagName) {
      var value = $(selector).get(0).tagName;
      if (value.toLowerCase() !== tagName.toLowerCase())
        throw new Error(_formatRequired("tag name", value, tagName));

      return true;
    },

    isBox: function(selector, box) {
      var el = _getCssAccessor(selector);

      ['padding', 'padding-left', 'padding-right', 'padding-top', 'padding-bottom']
      .forEach(function(prefix){
        if (box[prefix])
          _comparePixels(box[prefix], el.css(prefix), prefix);
        else if (box[_camelCase(prefix)])
          _comparePixels(box[_camelCase(prefix)], el.css(prefix), prefix);
      });

      ['margin', 'margin-left', 'margin-right', 'margin-top', 'margin-bottom']
      .forEach(function(prefix){
        if (box[prefix]) {
          _comparePixels(box[prefix], el.css(prefix), prefix);
        }
        else if (box[_camelCase(prefix)]) {
          _comparePixels(box[_camelCase(prefix)], el.css(prefix), prefix);
        }
      });

      ['border', 'border-top', 'border-right', 'border-bottom', 'border-left']
      .forEach(function(prefix) {
        if (prefix==='border') { //Firefox cannot get just border
          _checkBoxBorder(el, box[prefix], 'border-top');
          _checkBoxBorder(el, box[prefix], 'border-right');
          _checkBoxBorder(el, box[prefix], 'border-bottom');
          _checkBoxBorder(el, box[prefix], 'border-left');
        } else if (box[prefix])
          _checkBoxBorder(el, box[prefix], prefix);
        else if (box[_camelCase(prefix)])
          _checkBoxBorder(el, box[_camelCase(prefix)], prefix);
      });

      if (box.color)
        _compareColor(box.color, _getColor(selector, "background-color"), "background-color");

      if (box.width)
        this.isWidth(selector, box.width);

      if (box.height)
        this.isHeight(selector, box.height);

      if (box.left)
        this.isLeft(selector, box.left);

      if (box.right)
        this.isRight(selector, box.right);

      if (box.top)
        this.isTop(selector, box.top);

      if (box.bottom)
        this.isBottom(selector, box.bottom);

      if (box.sizing)
        _compareValues(box.sizing, el.css('box-sizing'), 'box-sizing');

      if (box.outline)
        _isOutline(selector, box.outline);

      return true;
    },

    isAttribute: function(selector, attrName, attrValue) {
      var el = $(selector);
      var value = el.attr(attrName);
      _compareValues(attrValue, value, attrName);
    },

    karmaLoadHtmlCss: function(path, html, css, done) {
      if (html)
        _karmaLoadHtml(path + '/' + html);
      if (css)
        _karmaLoadCss(path + '/' + css, done);
      else
        done();
    },

    isThrows: function(func) {
      var thrown = true;
      try {
        func();
        thrown = false;
      } catch(err) {
      }

      if (!thrown)
        throw new Error('not thrown but should');  
      return true;
    },

  };

  window.tdstyle = module;

})();
