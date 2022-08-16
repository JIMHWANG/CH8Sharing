function exampleWordAndCss(labelFor) {
  for (let i = 0; i < exampleAll.length; i++) {
    for (let y = 0; y < exampleAll[i].previousElementSibling.childNodes.length; y++) {
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
    colorInputTextValue = `rgba(${colorInputTextValue})`;
  }

  const colorFindExample = exampleWordAndCss(colorLabelFor);

  if (/BG/.test(colorLabelFor)) {
    colorFindExample[0].style = `background-color:${colorInputTextValue}`;
    colorFindExample[1].innerHTML = `background-color:${colorInputTextValue};`;
  } else {
    colorFindExample[0].style = `color:${colorInputTextValue}`;
    colorFindExample[1].innerHTML = `color:${colorInputTextValue};`;
  }
}

// function opacity(opacityLabelFor, opacityInputTextValue) {
//   const opacityFindExample = exampleWordAndCss(opacityLabelFor);
//   opacityFindExample[0].style = `opacity:${opacityInputTextValue}`;
//   opacityFindExample[1].innerHTML = `opacity:${opacityInputTextValue};`;
// }

function fontSize(fontSizeLabelFor, fontSizeInputTextValue) {
  const opacityFindExample = exampleWordAndCss(fontSizeLabelFor);
  opacityFindExample[0].style = `font-size:${fontSizeInputTextValue}`;
  opacityFindExample[1].innerHTML = `font-size:${fontSizeInputTextValue};`;
}

function findInput(value, inputLabelFor) {
  let InputTextAll = document.querySelectorAll('.InputText');
  let inputString = '';
  for (let i = 0; i < InputTextAll.length; i++) {
    if (InputTextAll[i].id === inputLabelFor) {
      if (InputTextAll[i].id === "textDecoration") {
        InputTextAll[i].value += inputString + " " + value;
        inputString = InputTextAll[i].value;
      }
      else {
        InputTextAll[i].value = '';
        InputTextAll[i].value = value;
      }
    }
  }
}

function findInputSuffix(suffixLabelFor) {
  let inputSuffixAll = document.querySelectorAll('.inputSuffix');
  for (let i = 0; i < inputSuffixAll.length; i++) {
    if (inputSuffixAll[i].htmlFor === suffixLabelFor) {
      return inputSuffixAll[i].textContent;
    }
  }
}

// function addInputSuffix(suffixLabelFor) {
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
  let InputTextAll = document.querySelectorAll('.InputText');
  let InputTextAllatcher;
  for (let i = 0; i < InputTextAll.length; i++) {
    InputTextAllatcher = new RegExp(InputTextAll[i].id, "g");
    if (InputTextAllatcher.test(RadioFor)) {
      // console.log(InputTextAll[i].id);
      return InputTextAll[i].id;

    }
  }
}

function findExample(exampleFor) {
  let exampleAll = document.querySelectorAll('.example');
  let matcher = new RegExp(exampleFor, "g");
  for (let i = 0; i < exampleAll.length; i++) {
    if (matcher.test(exampleAll[i].id)) {
      return exampleAll[i];
    }
  }
}

let InputTextAll = document.querySelectorAll('.InputText');
let exampleAll = document.querySelectorAll('.example');
for (let i = 0; i < InputTextAll.length; i++) {
  InputTextAll[i].addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      if (/Color/.test(InputTextAll[i].id)) {
        if (/English/.test(InputTextAll[i].id)) {
          if (/BG/.test(InputTextAll[i].id)) {
            findExample("EnglishColor").childNodes[1].style = `background-color:${InputTextAll[i].value}`;
            findExample("EnglishColor").childNodes[3].innerHTML = `background-color:${InputTextAll[i].value}`;
          } else {
            findExample("EnglishColor").childNodes[1].style = `color:${InputTextAll[i].value}`;
            findExample("EnglishColor").childNodes[3].innerHTML = `color:${InputTextAll[i].value}`;
          }
        } else if (/RGB/.test(InputTextAll[i].id)) {
          if (/BG/.test(InputTextAll[i].id)) {
            findExample("RGBColor").childNodes[1].style = `background-color:rgba(${InputTextAll[i].value})`;
            findExample("RGBColor").childNodes[3].innerHTML = `background-color:rgba(${InputTextAll[i].value})`;
          } else {
            findExample("RGBColor").childNodes[1].style = `color:rgba(${InputTextAll[i].value})`;
            findExample("RGBColor").childNodes[3].innerHTML = `color:rgba(${InputTextAll[i].value})`;
          }
        } else if (/Hex/.test(InputTextAll[i].id)) {
          if (/BG/.test(InputTextAll[i].id)) {
            findExample("HexColor").childNodes[1].style = `background-color:${InputTextAll[i].value}`;
            findExample("HexColor").childNodes[3].innerHTML = `background-color:${InputTextAll[i].value}`;
          } else {
            findExample("HexColor").childNodes[1].style = `color:${InputTextAll[i].value}`;
            findExample("HexColor").childNodes[3].innerHTML = `color:${InputTextAll[i].value}`;
          }
        }
      } else if (/opacity/.test(InputTextAll[i].id)) {
        findExample("Opacity").childNodes[1].style = `opacity:${InputTextAll[i].value}`;
        findExample("Opacity").childNodes[3].innerHTML = `font-size:${InputTextAll[i].value}`;
      } else if (/fontSize/.test(InputTextAll[i].id)) {
        findExample("FontSize").childNodes[1].style = `font-size:${InputTextAll[i].value}`;
        findExample("FontSize").childNodes[3].innerHTML = `font-size:${InputTextAll[i].value}`;
      } else if (/fontStyle/.test(InputTextAll[i].id)) {
        findExample("FontStyle").childNodes[1].style = `font-style:${InputTextAll[i].value}`;
        findExample("FontStyle").childNodes[3].innerHTML = `font-style:${InputTextAll[i].value}`;
      } else if (/fontWeight/.test(InputTextAll[i].id)) {
        findExample("FontWeight").childNodes[1].style = `font-weight:${InputTextAll[i].value}`;
        findExample("FontWeight").childNodes[3].innerHTML = `font-weight:${InputTextAll[i].value}`;
      } else if (/listStyleType/.test(InputTextAll[i].id)) {
        findExample("ListStyleType").childNodes[1].style = `list-style-type:${InputTextAll[i].value}`;
        findExample("ListStyleType").childNodes[3].innerHTML = `list-style-type:${InputTextAll[i].value}`;
      } else if (/listStyleImage/.test(InputTextAll[i].id)) {
        findExample("ListStyleImage").childNodes[1].style = `list-style-image:url(${InputTextAll[i].value})`;
        // findExample("ListStyleImage").childNodes[3].innerHTML = `list-style-image:url(${InputTextAll[i].value})`;
      } else if (/listStylePosition/.test(InputTextAll[i].id)) {
        findExample("ListStylePosition").childNodes[1].style = `list-style-image:url(https://upload.cc/i1/2022/08/07/tnU1YO.png);list-style-position:${InputTextAll[i].value}`;
        findExample("ListStylePosition").childNodes[3].innerHTML = `list-style-position:${InputTextAll[i].value}`;
      } else if (/listStyleQuick/.test(InputTextAll[i].id)) {
        findExample("ListStyleQuick").childNodes[1].style = `list-style:${InputTextAll[i].value}`;
        // findExample("ListStyleQuick").childNodes[3].innerHTML = `list-style:${InputTextAll[i].value}`;
        // findExample("ListStyleQuick").childNodes[3].innerHTML = `list-style-position:${InputTextAll[i].value}`;
      } else if (/textIndent/.test(InputTextAll[i].id)) {
        findExample("TextIndent").childNodes[1].style = `text-indent:${InputTextAll[i].value}`;
        findExample("TextIndent").childNodes[3].innerHTML = `text-indent:${InputTextAll[i].value};`;
        // findExample("TextIndent").childNodes[1].style = `text-indent:${InputTextAll[i].value + findInputSuffix("textIndent")}`;
        // findExample("TextIndent").childNodes[3].innerHTML = `text-indent:${InputTextAll[i].value + findInputSuffix("textIndent")};`;
      } else if (/textAlign/.test(InputTextAll[i].id)) {
        findExample("TextAlign").childNodes[1].style = `text-align:${InputTextAll[i].value}`;
        findExample("TextAlign").childNodes[3].innerHTML = `text-align:${InputTextAll[i].value};`;
      } else if (/letterSpacing/.test(InputTextAll[i].id)) {
        findExample("LetterSpacing").childNodes[1].style = `letter-spacing:${InputTextAll[i].value}`;
        findExample("LetterSpacing").childNodes[3].innerHTML = `letter-spacing:${InputTextAll[i].value};`;
        // findExample("LetterSpacing").childNodes[1].style = `letter-spacing:${InputTextAll[i].value + findInputSuffix("letterSpacing")}`;
        // findExample("LetterSpacing").childNodes[3].innerHTML = `letter-spacing:${InputTextAll[i].value + findInputSuffix("letterSpacing")};`;
      } else if (/wordSpacing/.test(InputTextAll[i].id)) {
        findExample("WordSpacing").childNodes[1].style = `word-spacing:${InputTextAll[i].value}`;
        findExample("WordSpacing").childNodes[3].innerHTML = `word-spacing:${InputTextAll[i].value};`;
      } else if (/textTransform/.test(InputTextAll[i].id)) {
        findExample("TextTransform").childNodes[1].style = `border:none; text-transform:${InputTextAll[i].value}`;
        findExample("TextTransform").childNodes[3].innerHTML = `text-transform:${InputTextAll[i].value};`;
      } else if (/whiteSpace/.test(InputTextAll[i].id)) {
        findExample("WhiteSpace").childNodes[1].style = `width:120px; white-space:${InputTextAll[i].value}`;
        findExample("WhiteSpace").childNodes[3].innerHTML = `white-space:${InputTextAll[i].value};`;
      } else if (/textShadow/.test(InputTextAll[i].id)) {
        findExample("TextShadow").childNodes[1].style = `width:120px; text-shadow:${InputTextAll[i].value}`;
        findExample("TextShadow").childNodes[3].innerHTML = `text-shadow:${InputTextAll[i].value};`;
      } else if (/textDecoration/.test(InputTextAll[i].id)) {
        findExample("TextDecoration").childNodes[1].style = `width:120px; text-decoration:${InputTextAll[i].value}`;
        findExample("TextDecoration").childNodes[3].innerHTML = `text-decoration:${InputTextAll[i].value};`;
      }
    }
  }, false);
}

let FontSizeRadioAll = document.getElementsByName('fontSizeRadio');
let SuffixRadioAll = document.getElementsByName('suffixRadio');
let absoluteSelect = document.querySelector('.absoluteSelect');
let relativeSelect = document.querySelector('.relativeSelect');
let fontStyleSelect = document.querySelector('.fontStyleSelect')
let fontWeightSelect = document.querySelector('.fontWeightSelect');
let listStyleTypeSelect = document.querySelector('.listStyleTypeSelect');
let listStyleImageSelect = document.querySelector('.listStyleImageSelect');
let listStylePositionSelect = document.querySelector('.listStylePositionSelect');
let textAlignSelect = document.querySelector('.textAlignSelect');
let letterSpacingSelect = document.querySelector('.letterSpacingSelect');
let wordSpacingSelect = document.querySelector('.wordSpacingSelect');
let textTransformSelect = document.querySelector('.textTransformSelect');
let whiteSpaceSelect = document.querySelector('.whiteSpaceSelect');
let textShadowSelect = document.querySelector('.textShadowSelect');
let textDecorationLineSelect = document.querySelector('.textDecorationLineSelect');
let textDecorationStyleSelect = document.querySelector('.textDecorationStyleSelect');
let textDecorationColorSelect = document.querySelector('.textDecorationColorSelect');
let textIndentSelect = document.querySelector('.textIndentSelect');

const selectionList = [
  {
    Selector: fontSizeSelect,
    SelectorFor: "fontSize"
  },
  {
    Selector: fontSizeAbsoluteSelect,
    SelectorFor: "fontSize"
  },
  {
    Selector: fontSizeRelativeSelect,
    SelectorFor: "fontSize"
  },
  {
    Selector: fontStyleSelect,
    SelectorFor: "fontStyle"
  },
  {
    Selector: fontWeightSelect,
    SelectorFor: "fontWeight"
  },
  {
    Selector: listStyleTypeSelect,
    SelectorFor: "listStyleType"
  },
  {
    Selector: listStyleImageSelect,
    SelectorFor: "listStyleImage"
  },
  {
    Selector: listStylePositionSelect,
    SelectorFor: "listStylePosition"
  },
  {
    Selector: textAlignSelect,
    SelectorFor: "textAlign"
  },
  {
    Selector: letterSpacingSelect,
    SelectorFor: "letterSpacing"
  },
  {
    Selector: wordSpacingSelect,
    SelectorFor: "wordSpacing"
  },
  {
    Selector: textTransformSelect,
    SelectorFor: "textTransform"
  },
  {
    Selector: whiteSpaceSelect,
    SelectorFor: "whiteSpace"
  },
  {
    Selector: textShadowSelect,
    SelectorFor: "textShadow"
  },
  {
    Selector: textDecorationLineSelect,
    SelectorFor: "textDecoration"
  },
  {
    Selector: textDecorationStyleSelect,
    SelectorFor: "textDecoration"
  },
  {
    Selector: textDecorationColorSelect,
    SelectorFor: "textDecoration"
  },
  {
    Selector: textIndentSelect,
    SelectorFor: "textIndent"
  }
]

for (let i = 0; i < SuffixRadioAll.length; i++) {
  SuffixRadioAll[i].addEventListener('change', function () {
    findInput('', FindInputId(SuffixRadioAll[i].id));
    if (SuffixRadioAll[i].value === "%") {
      findInput(SuffixRadioAll[i].value, FindInputId(SuffixRadioAll[i].id));
      eval(`${FindInputId(SuffixRadioAll[i].id)}Select`).style = `display:none`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}RelativeSelect`).style = `display:none`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}AbsoluteSelect`).style = `display:none`;
    } else if (SuffixRadioAll[i].value === "normal") {
      eval(`${FindInputId(SuffixRadioAll[i].id)}Select`).style = `display:none`;
      findInput(SuffixRadioAll[i].value, FindInputId(SuffixRadioAll[i].id));
    } else if (SuffixRadioAll[i].value === "absolute") {
      eval(`${FindInputId(SuffixRadioAll[i].id)}AbsoluteSelect`).style = `display:inline`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}RelativeSelect`).style = `display:none`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}Select`).style = `display:none`;
    } else if (SuffixRadioAll[i].value === "relative") {
      eval(`${FindInputId(SuffixRadioAll[i].id)}RelativeSelect`).style = `display:inline`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}AbsoluteSelect`).style = `display:none`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}Select`).style = `display:none`;
    } else {
      console.log(FindInputId(SuffixRadioAll[i].id));
      eval(`${FindInputId(SuffixRadioAll[i].id)}Select`).style = `display:inline`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}RelativeSelect`).style = `display:none`;
      eval(`${FindInputId(SuffixRadioAll[i].id)}AbsoluteSelect`).style = `display:none`;
    }
  }, false);
}

selectionList.forEach(EachSelection => {
  if (EachSelection.Selector) {
    EachSelection.Selector.addEventListener("change", function () {
      findInput(EachSelection.Selector.value, EachSelection.SelectorFor);
      // if (EachSelection.Selector.id === "letterSpacingSelect" || EachSelection.Selector.id === "wordSpacingSelect") {
      //   let SelectorFor = (EachSelection.Selector.id).replace("Select", "");
      //   // addInputSuffix(SelectorFor).textContent = EachSelection.Selector.value;
      //   findInput(EachSelection.Selector.value, EachSelection.SelectorFor);
      // } else {
      //   findInput(EachSelection.Selector.value, EachSelection.SelectorFor);
      // }
    })
    if (EachSelection.Selector.id === "absolute" || EachSelection.Selector === "relative") {

      absoluteSelect.style = `display:none`;
      relativeSelect.style = `display:none`;
    }
  }
});





