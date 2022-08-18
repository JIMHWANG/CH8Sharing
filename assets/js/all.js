"use strict";

function exampleWordAndCss(labelFor) {
  for (var i = 0; i < exampleAll.length; i++) {
    for (var y = 0; y < exampleAll[i].previousElementSibling.childNodes.length; y++) {
      if (exampleAll[i].previousElementSibling.childNodes[y].childNodes[1]) {
        if (exampleAll[i].previousElementSibling.childNodes[y].childNodes[1].htmlFor === labelFor) {
          return [exampleAll[i].childNodes[1], exampleAll[i].childNodes[3]];
        }
      }
    }
  }
}

function color(colorLabelFor, colorInputTextValue) {
  if (/RGB/.test(colorLabelFor)) {
    colorInputTextValue = "rgba(".concat(colorInputTextValue, ")");
  }

  var colorFindExample = exampleWordAndCss(colorLabelFor);

  if (/BG/.test(colorLabelFor)) {
    colorFindExample[0].style = "background-color:".concat(colorInputTextValue);
    colorFindExample[1].innerHTML = "background-color:".concat(colorInputTextValue, ";");
  } else {
    colorFindExample[0].style = "color:".concat(colorInputTextValue);
    colorFindExample[1].innerHTML = "color:".concat(colorInputTextValue, ";");
  }
} // function opacity(opacityLabelFor, opacityInputTextValue) {
//   const opacityFindExample = exampleWordAndCss(opacityLabelFor);
//   opacityFindExample[0].style = `opacity:${opacityInputTextValue}`;
//   opacityFindExample[1].innerHTML = `opacity:${opacityInputTextValue};`;
// }


function fontSize(fontSizeLabelFor, fontSizeInputTextValue) {
  var opacityFindExample = exampleWordAndCss(fontSizeLabelFor);
  opacityFindExample[0].style = "font-size:".concat(fontSizeInputTextValue);
  opacityFindExample[1].innerHTML = "font-size:".concat(fontSizeInputTextValue, ";");
}

function findInput(value, inputLabelFor) {
  var InputTextAll = document.querySelectorAll('.InputText');
  var inputString = '';

  for (var i = 0; i < InputTextAll.length; i++) {
    if (InputTextAll[i].id === inputLabelFor) {
      if (InputTextAll[i].id === "textDecoration") {
        InputTextAll[i].value += inputString + " " + value;
        inputString = InputTextAll[i].value;
      } else {
        InputTextAll[i].value = '';
        InputTextAll[i].value = value;
      }
    }
  }
}

function findInputSuffix(suffixLabelFor) {
  var inputSuffixAll = document.querySelectorAll('.inputSuffix');

  for (var i = 0; i < inputSuffixAll.length; i++) {
    if (inputSuffixAll[i].htmlFor === suffixLabelFor) {
      return inputSuffixAll[i].textContent;
    }
  }
} // function addInputSuffix(suffixLabelFor) {
//   let inputSuffixAll = document.querySelectorAll('.inputSuffix');
//   for (let i = 0; i < inputSuffixAll.length; i++) {
//     if (inputSuffixAll[i].htmlFor === suffixLabelFor) {
//       return inputSuffixAll[i];
//     }
//   }
// }
// function addInputSuffixOrFindInputFor(suffixRadioFor) {
//   let inputSuffixAll = document.querySelectorAll('.inputSuffix');
//   let addInputSuffixMatcher;
//   for (let i = 0; i < inputSuffixAll.length; i++) {
//     addInputSuffixMatcher = new RegExp(inputSuffixAll[i].htmlFor, "g");
//     if (addInputSuffixMatcher.test(suffixRadioFor)) {
//       // console.log(inputSuffixAll[i]);
//       return [inputSuffixAll[i], inputSuffixAll[i].htmlFor];
//     }
//   }
// }


function FindInputId(RadioFor) {
  // console.log(RadioFor + "123");
  var InputTextAll = document.querySelectorAll('.InputText');
  var InputTextAllatcher;

  for (var i = 0; i < InputTextAll.length; i++) {
    InputTextAllatcher = new RegExp(InputTextAll[i].id, "g");

    if (InputTextAllatcher.test(RadioFor)) {
      // console.log(InputTextAll[i].id);
      return InputTextAll[i].id;
    }
  }
}

function findExample(exampleFor) {
  var exampleAll = document.querySelectorAll('.example');
  var matcher = new RegExp(exampleFor, "g");

  for (var i = 0; i < exampleAll.length; i++) {
    if (matcher.test(exampleAll[i].id)) {
      return exampleAll[i];
    }
  }
}

var InputTextAll = document.querySelectorAll('.InputText');
var exampleAll = document.querySelectorAll('.example');

var _loop = function _loop(i) {
  InputTextAll[i].addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      if (/Color/.test(InputTextAll[i].id)) {
        if (/English/.test(InputTextAll[i].id)) {
          if (/BG/.test(InputTextAll[i].id)) {
            findExample("EnglishColor").childNodes[1].style = "background-color:".concat(InputTextAll[i].value);
            findExample("EnglishColor").childNodes[3].innerHTML = "background-color:".concat(InputTextAll[i].value);
          } else {
            findExample("EnglishColor").childNodes[1].style = "color:".concat(InputTextAll[i].value);
            findExample("EnglishColor").childNodes[3].innerHTML = "color:".concat(InputTextAll[i].value);
          }
        } else if (/RGB/.test(InputTextAll[i].id)) {
          if (/BG/.test(InputTextAll[i].id)) {
            findExample("RGBColor").childNodes[1].style = "background-color:rgba(".concat(InputTextAll[i].value, ")");
            findExample("RGBColor").childNodes[3].innerHTML = "background-color:rgba(".concat(InputTextAll[i].value, ")");
          } else {
            findExample("RGBColor").childNodes[1].style = "color:rgba(".concat(InputTextAll[i].value, ")");
            findExample("RGBColor").childNodes[3].innerHTML = "color:rgba(".concat(InputTextAll[i].value, ")");
          }
        } else if (/Hex/.test(InputTextAll[i].id)) {
          if (/BG/.test(InputTextAll[i].id)) {
            findExample("HexColor").childNodes[1].style = "background-color:".concat(InputTextAll[i].value);
            findExample("HexColor").childNodes[3].innerHTML = "background-color:".concat(InputTextAll[i].value);
          } else {
            findExample("HexColor").childNodes[1].style = "color:".concat(InputTextAll[i].value);
            findExample("HexColor").childNodes[3].innerHTML = "color:".concat(InputTextAll[i].value);
          }
        }
      } else if (/opacity/.test(InputTextAll[i].id)) {
        findExample("Opacity").childNodes[1].style = "opacity:".concat(InputTextAll[i].value);
        findExample("Opacity").childNodes[3].innerHTML = "font-size:".concat(InputTextAll[i].value);
      } else if (/fontSize/.test(InputTextAll[i].id)) {
        findExample("FontSize").childNodes[1].style = "font-size:".concat(InputTextAll[i].value);
        findExample("FontSize").childNodes[3].innerHTML = "font-size:".concat(InputTextAll[i].value);
      } else if (/fontStyle/.test(InputTextAll[i].id)) {
        findExample("FontStyle").childNodes[1].style = "font-style:".concat(InputTextAll[i].value);
        findExample("FontStyle").childNodes[3].innerHTML = "font-style:".concat(InputTextAll[i].value);
      } else if (/fontWeight/.test(InputTextAll[i].id)) {
        findExample("FontWeight").childNodes[1].style = "font-weight:".concat(InputTextAll[i].value);
        findExample("FontWeight").childNodes[3].innerHTML = "font-weight:".concat(InputTextAll[i].value);
      } else if (/listStyleType/.test(InputTextAll[i].id)) {
        findExample("ListStyleType").childNodes[1].style = "list-style-type:".concat(InputTextAll[i].value);
        findExample("ListStyleType").childNodes[3].innerHTML = "list-style-type:".concat(InputTextAll[i].value);
      } else if (/listStyleImage/.test(InputTextAll[i].id)) {
        findExample("ListStyleImage").childNodes[1].style = "list-style-image:url(".concat(InputTextAll[i].value, ")");
      } else if (/listStylePosition/.test(InputTextAll[i].id)) {
        findExample("ListStylePosition").childNodes[1].style = "list-style-image:url(https://upload.cc/i1/2022/08/07/tnU1YO.png);list-style-position:".concat(InputTextAll[i].value);
        findExample("ListStylePosition").childNodes[3].innerHTML = "list-style-position:".concat(InputTextAll[i].value);
      } else if (/listStyleQuick/.test(InputTextAll[i].id)) {
        findExample("ListStyleQuick").childNodes[1].style = "list-style:".concat(InputTextAll[i].value);
      } else if (/textIndent/.test(InputTextAll[i].id)) {
        findExample("TextIndent").childNodes[1].style = "text-indent:".concat(InputTextAll[i].value);
        findExample("TextIndent").childNodes[3].innerHTML = "text-indent:".concat(InputTextAll[i].value, ";");
      } else if (/textAlign/.test(InputTextAll[i].id)) {
        findExample("TextAlign").childNodes[1].style = "text-align:".concat(InputTextAll[i].value);
        findExample("TextAlign").childNodes[3].innerHTML = "text-align:".concat(InputTextAll[i].value, ";");
      } else if (/letterSpacing/.test(InputTextAll[i].id)) {
        findExample("LetterSpacing").childNodes[1].style = "letter-spacing:".concat(InputTextAll[i].value);
        findExample("LetterSpacing").childNodes[3].innerHTML = "letter-spacing:".concat(InputTextAll[i].value, ";"); // findExample("LetterSpacing").childNodes[1].style = `letter-spacing:${InputTextAll[i].value + findInputSuffix("letterSpacing")}`;
        // findExample("LetterSpacing").childNodes[3].innerHTML = `letter-spacing:${InputTextAll[i].value + findInputSuffix("letterSpacing")};`;
      } else if (/wordSpacing/.test(InputTextAll[i].id)) {
        findExample("WordSpacing").childNodes[1].style = "word-spacing:".concat(InputTextAll[i].value);
        findExample("WordSpacing").childNodes[3].innerHTML = "word-spacing:".concat(InputTextAll[i].value, ";");
      } else if (/textTransform/.test(InputTextAll[i].id)) {
        findExample("TextTransform").childNodes[1].style = "border:none; text-transform:".concat(InputTextAll[i].value);
        findExample("TextTransform").childNodes[3].innerHTML = "text-transform:".concat(InputTextAll[i].value, ";");
      } else if (/whiteSpace/.test(InputTextAll[i].id)) {
        findExample("WhiteSpace").childNodes[1].style = "width:120px; white-space:".concat(InputTextAll[i].value);
        findExample("WhiteSpace").childNodes[3].innerHTML = "white-space:".concat(InputTextAll[i].value, ";");
      } else if (/textShadow/.test(InputTextAll[i].id)) {
        findExample("TextShadow").childNodes[1].style = "width:120px; text-shadow:".concat(InputTextAll[i].value);
        findExample("TextShadow").childNodes[3].innerHTML = "text-shadow:".concat(InputTextAll[i].value, ";");
      } else if (/textDecoration/.test(InputTextAll[i].id)) {
        findExample("TextDecoration").childNodes[1].style = "width:120px; text-decoration:".concat(InputTextAll[i].value);
        findExample("TextDecoration").childNodes[3].innerHTML = "text-decoration:".concat(InputTextAll[i].value, ";");
      }
    }
  }, false);
};

for (var i = 0; i < InputTextAll.length; i++) {
  _loop(i);
}

var FontSizeRadioAll = document.getElementsByName('fontSizeRadio');
var SuffixRadioAll = document.getElementsByName('suffixRadio');
var fontSizeLengthSelect = document.querySelector('.fontSizeLengthSelect');
var fontSizeAbsoluteSelect = document.querySelector('.fontSizeAbsoluteSelect');
var fontSizeRelativeSelect = document.querySelector('.fontSizeRelativeSelect');
var fontStyleSelect = document.querySelector('.fontStyleSelect');
var fontWeightSelect = document.querySelector('.fontWeightSelect');
var listStyleTypeSelect = document.querySelector('.listStyleTypeSelect');
var listStyleImageSelect = document.querySelector('.listStyleImageSelect');
var listStylePositionSelect = document.querySelector('.listStylePositionSelect');
var textAlignSelect = document.querySelector('.textAlignSelect');
var letterSpacingSelect = document.querySelector('.letterSpacingSelect');
var wordSpacingSelect = document.querySelector('.wordSpacingSelect');
var textTransformSelect = document.querySelector('.textTransformSelect');
var whiteSpaceSelect = document.querySelector('.whiteSpaceSelect');
var textShadowSelect = document.querySelector('.textShadowSelect');
var textDecorationLineSelect = document.querySelector('.textDecorationLineSelect');
var textDecorationStyleSelect = document.querySelector('.textDecorationStyleSelect');
var textDecorationColorSelect = document.querySelector('.textDecorationColorSelect');
var textIndentSelect = document.querySelector('.textIndentSelect');
var selectionList = [{
  Selector: fontSizeLengthSelect,
  SelectorFor: "fontSize"
}, {
  Selector: fontSizeAbsoluteSelect,
  SelectorFor: "fontSize"
}, {
  Selector: fontSizeRelativeSelect,
  SelectorFor: "fontSize"
}, {
  Selector: fontStyleSelect,
  SelectorFor: "fontStyle"
}, {
  Selector: fontWeightSelect,
  SelectorFor: "fontWeight"
}, {
  Selector: listStyleTypeSelect,
  SelectorFor: "listStyleType"
}, {
  Selector: listStyleImageSelect,
  SelectorFor: "listStyleImage"
}, {
  Selector: listStylePositionSelect,
  SelectorFor: "listStylePosition"
}, {
  Selector: textAlignSelect,
  SelectorFor: "textAlign"
}, {
  Selector: letterSpacingSelect,
  SelectorFor: "letterSpacing"
}, {
  Selector: wordSpacingSelect,
  SelectorFor: "wordSpacing"
}, {
  Selector: textTransformSelect,
  SelectorFor: "textTransform"
}, {
  Selector: whiteSpaceSelect,
  SelectorFor: "whiteSpace"
}, {
  Selector: textShadowSelect,
  SelectorFor: "textShadow"
}, {
  Selector: textDecorationLineSelect,
  SelectorFor: "textDecoration"
}, {
  Selector: textDecorationStyleSelect,
  SelectorFor: "textDecoration"
}, {
  Selector: textDecorationColorSelect,
  SelectorFor: "textDecoration"
}, {
  Selector: textIndentSelect,
  SelectorFor: "textIndent"
}];

var _loop2 = function _loop2(_i) {
  SuffixRadioAll[_i].addEventListener('change', function () {
    findInput('', FindInputId(SuffixRadioAll[_i].id));

    if (SuffixRadioAll[_i].value === "%") {
      findInput(SuffixRadioAll[_i].value, FindInputId(SuffixRadioAll[_i].id));
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "LengthSelect")).style = "display:none";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "RelativeSelect")).style = "display:none";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "AbsoluteSelect")).style = "display:none";
    } else if (SuffixRadioAll[_i].value === "normal") {
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "Select")).style = "display:none";
      findInput(SuffixRadioAll[_i].value, FindInputId(SuffixRadioAll[_i].id));
    } else if (SuffixRadioAll[_i].value === "absolute") {
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "AbsoluteSelect")).style = "display:inline";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "RelativeSelect")).style = "display:none";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "LengthSelect")).style = "display:none";
    } else if (SuffixRadioAll[_i].value === "relative") {
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "RelativeSelect")).style = "display:inline";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "AbsoluteSelect")).style = "display:none";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "LengthSelect")).style = "display:none";
    } else {
      // console.log(FindInputId(SuffixRadioAll[i].id));
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "LengthSelect")).style = "display:inline";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "RelativeSelect")).style = "display:none";
      eval("".concat(FindInputId(SuffixRadioAll[_i].id), "AbsoluteSelect")).style = "display:none";
    }
  }, false);
};

for (var _i = 0; _i < SuffixRadioAll.length; _i++) {
  _loop2(_i);
}

selectionList.forEach(function (EachSelection) {
  if (EachSelection.Selector) {
    EachSelection.Selector.addEventListener("change", function () {
      findInput(EachSelection.Selector.value, EachSelection.SelectorFor); // if (EachSelection.Selector.id === "letterSpacingSelect" || EachSelection.Selector.id === "wordSpacingSelect") {
      //   let SelectorFor = (EachSelection.Selector.id).replace("Select", "");
      //   // addInputSuffix(SelectorFor).textContent = EachSelection.Selector.value;
      //   findInput(EachSelection.Selector.value, EachSelection.SelectorFor);
      // } else {
      //   findInput(EachSelection.Selector.value, EachSelection.SelectorFor);
      // }
    });

    if (EachSelection.Selector.id === "absolute" || EachSelection.Selector === "relative") {
      absoluteSelect.style = "display:none";
      relativeSelect.style = "display:none";
    }
  }
});
//# sourceMappingURL=all.js.map
