/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import { useBlockProps, RichText } from '@wordpress/block-editor';

// import Inspector from './inspector';
const {
  InspectorControls
} = wp.blockEditor;
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//from '@wordpress/block-editor';




// import { RadioGroup, Radio } from '@wordpress/components';


const {
  Fragment
} = wp.element;



function Edit({
  attributes,
  setAttributes
}) {
  console.log("hello world1");
  const [backgroundImage, setBackgroundImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.backgroundImage);
  const [backgroundImage2, setBackgroundImage2] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.backgroundImage2);
  const [backgroundImage3, setBackgroundImage3] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.backgroundImage3);
  const [backgroundImage4, setBackgroundImage4] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.backgroundImage4);
  const [backgroundImage5, setBackgroundImage5] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(attributes.backgroundImage5);
  const {
    ItemCatagory1
  } = attributes;
  const {
    ItemCatagory2
  } = attributes;
  const {
    ItemCatagory3
  } = attributes;
  const {
    ItemCatagory4
  } = attributes;
  const {
    ItemCatagory5
  } = attributes;
  console.log("hello world");
  const [checked, setChecked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('catagory1');
  const MyControlledRadioRadioGroup = () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadioGroup, {
      label: "Width",
      onChange: setChecked,
      checked: checked
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
      value: "catagory1"
    }, "Catagory 1"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
      value: "catagory2"
    }, "Catagory 2"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
      value: "catagory3"
    }, "Catagory 3"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
      value: "catagory4"
    }, "Catagory 4"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalRadio, {
      value: "catagory5"
    }, "Catagory 5"));
  };
  const handleStyleChange = newStyle => {
    setAttributes({
      blockStyle: newStyle
    });
  };
  const handleColorChange = newColor => {
    setAttributes({
      backgroundColor: newColor
    });
  };
  const handleCatagoryColorChange = newColor => {
    setAttributes({
      catagoryColor: newColor
    });
  };
  const handleTextColorChange = newColor => {
    setAttributes({
      textColor: newColor
    });
  };
  const addItem = () => {
    const newItem = ['New Item', '0.00', '0.00']; // Replace with your logic to get the new item value\
    let newMyItems = Object.assign({}, attributes.myItems);
    if (checked === "catagory1") {
      newMyItems.catagory1 = [...attributes.myItems.catagory1, newItem];
    }
    if (checked === "catagory2") {
      newMyItems.catagory2 = [...attributes.myItems.catagory2, newItem];
    }
    if (checked === "catagory3") {
      newMyItems.catagory3 = [...attributes.myItems.catagory3, newItem];
    }
    if (checked === "catagory4") {
      newMyItems.catagory4 = [...attributes.myItems.catagory4, newItem];
    }
    if (checked === "catagory5") {
      newMyItems.catagory5 = [...attributes.myItems.catagory5, newItem];
    }
    setAttributes({
      myItems: newMyItems
    });
  };
  const removeLastItem = () => {
    let newMyItems = Object.assign({}, attributes.myItems);
    if (checked === "catagory1") {
      newMyItems.catagory1 = newMyItems.catagory1.slice(0, -1);
    }
    if (checked === "catagory2") {
      newMyItems.catagory2 = newMyItems.catagory2.slice(0, -1);
    }
    if (checked === "catagory3") {
      newMyItems.catagory3 = newMyItems.catagory3.slice(0, -1);
    }
    if (checked === "catagory4") {
      newMyItems.catagory4 = newMyItems.catagory4.slice(0, -1);
    }
    if (checked === "catagory5") {
      newMyItems.catagory5 = newMyItems.catagory5.slice(0, -1);
    }
    setAttributes({
      myItems: newMyItems
    });
  };
  const listStyle = {
    listStyleType: 'none',
    // Remove default list item marker
    padding: 0,
    // Remove default padding
    margin: 0 // Remove default margin
  };

  const imageStyle = {
    backgroundImage: attributes.backgroundImage ? `url(${attributes.backgroundImage})` : 'none',
    backgroundSize: 'cover',
    width: '25%',
    // Adjust the width of the image as needed
    height: '25%' // Adjust the height of the image as needed
  };

  const styles = {
    // ... (your styles for different blockStyle values)
  };
  const selectedStyle = styles[attributes.blockStyle] || {};
  const blockStyle = {
    ...selectedStyle,
    backgroundColor: attributes.backgroundColor,
    // Apply the selected background color
    color: attributes.textColor,
    fontFamily: attributes.fontFamily,
    textAlign: attributes.alignment,
    fontSize: attributes.fontSize,
    // tableLayout: "fixed",
    width: "100%",
    paddingLeft: "15%",
    paddingRight: "15%"
  };
  const handleFontSizeChange = newFontSize => {
    setAttributes({
      fontSize: newFontSize
    });
  };
  const handleAlignmentChange = newAlignment => {
    setAttributes({
      alignment: newAlignment
    });
  };
  const handleFontChange = newFont => {
    setAttributes({
      fontFamily: newFont
    });
  };
  const handleImageSizeChange = newSize => {
    setAttributes({
      imageSize: newSize
    });
  };
  const handleSmallImageSizeChange = newSize => {
    setAttributes({
      imageSizeSmall: newSize
    });
  };
  const imageStyleCatagory0 = {
    backgroundSize: 'cover',
    width: `${attributes.imageSize}%`,
    // Adjust the width of the image as needed
    height: 'auto',
    // Adjust the height of the image as needed
    display: 'block',
    margin: '0 auto'
  };
  const popularFonts = ['Arial, sans-serif', 'Times New Roman, serif', 'Helvetica, sans-serif', 'Verdana, sans-serif', 'Tahoma, sans-serif', 'Courier New, monospace', 'Georgia, serif', 'Palatino Linotype, serif', 'Lucida Sans Unicode, sans-serif', 'Trebuchet MS, sans-serif', 'Arial Black, sans-serif', 'Impact, sans-serif', 'Comic Sans MS, cursive', 'Garamond, serif', 'Webdings, sans-serif', 'Wingdings, sans-serif', 'Symbol, sans-serif', 'Lucida Console, monospace', 'MS Sans Serif, sans-serif', 'MS Serif, serif'];
  const catagoryColor = {
    color: attributes.catagoryColor
  };
  const imageStyleCatagory1 = {
    backgroundSize: 'cover',
    width: `${attributes.imageSizeSmall}%`,
    // Adjust the width of the image as needed
    height: 'auto',
    // Adjust the height of the image as needed
    display: 'block',
    margin: '0 auto'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Image Size",
    value: attributes.imageSize,
    onChange: handleImageSizeChange,
    min: 10,
    max: 100,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Image Size for catagories",
    value: attributes.imageSizeSmall,
    onChange: handleSmallImageSizeChange,
    min: 10,
    max: 200,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Font Size",
    value: attributes.fontSize,
    onChange: handleFontSizeChange,
    min: 12,
    max: 60,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: attributes.alignment,
    onChange: handleAlignmentChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setBackgroundImage(media.url);
      setAttributes({
        backgroundImage: media.url
      });
    },
    type: "image",
    value: backgroundImage,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open
    }, backgroundImage ? 'Change Image' : 'Upload Image')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setBackgroundImage(media.url);
      setAttributes({
        backgroundImage2: media.url
      });
    },
    type: "image",
    value: backgroundImage2,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open
    }, backgroundImage2 ? 'Change Image Catagory 2' : 'Upload Image Catagory 2')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setBackgroundImage(media.url);
      setAttributes({
        backgroundImage3: media.url
      });
    },
    type: "image",
    value: backgroundImage3,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open
    }, backgroundImage3 ? 'Change Image Catagory 3' : 'Upload Image Catagory 3')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setBackgroundImage(media.url);
      setAttributes({
        backgroundImage4: media.url
      });
    },
    type: "image",
    value: backgroundImage4,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open
    }, backgroundImage4 ? 'Change Image Catagory 4' : 'Upload Image Catagory 4')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: media => {
      setBackgroundImage(media.url);
      setAttributes({
        backgroundImage5: media.url
      });
    },
    type: "image",
    value: backgroundImage5,
    render: ({
      open
    }) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      onClick: open
    }, backgroundImage5 ? 'Change Image Catagory 5' : 'Upload Image Catagory 5')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
    label: "Background Color",
    color: attributes.backgroundColor,
    onChangeComplete: value => handleColorChange(value.hex)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
    label: "text Color",
    color: attributes.textColor,
    onChangeComplete: value => handleTextColorChange(value.hex)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, {
    label: "catagory Color",
    color: attributes.catagoryColor,
    onChangeComplete: value => handleCatagoryColorChange(value.hex)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Font Family",
    value: attributes.fontFamily,
    options: popularFonts.map(font => ({
      value: font,
      label: font
    })),
    onChange: handleFontChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyControlledRadioRadioGroup, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: addItem
  }, "Add Item"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: removeLastItem
  }, "Remove Last Item"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scrollwrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Menu"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "menuContainer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-table",
    style: blockStyle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory2)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory2.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2]))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory3)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory3.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2])))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory4)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory4.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2]))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory5)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory5.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2])))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: "2",
    style: {
      textAlign: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory1))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: "2",
    align: "center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    align: "center"
  }, attributes.myItems.catagory1.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "30%"
  }, item[1]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "30%"
  }, item[2])))))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Panel Title', 'fivemenu'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("click to change item catagory 1", "fivemenu"),
    value: ItemCatagory1,
    onChange: newText => setAttributes({
      ItemCatagory1: newText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("click to change item catagory 2", "fivemenu"),
    value: ItemCatagory2,
    onChange: newText => setAttributes({
      ItemCatagory2: newText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("click to change item catagory 3", "fivemenu"),
    value: ItemCatagory3,
    onChange: newText => setAttributes({
      ItemCatagory3: newText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("click to change item catagory 4", "fivemenu"),
    value: ItemCatagory4,
    onChange: newText => setAttributes({
      ItemCatagory4: newText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("click to change item catagory 5", "fivemenu"),
    value: ItemCatagory5,
    onChange: newText => setAttributes({
      ItemCatagory5: newText
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('item catagory 1', 'item catagory 1'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.myItems.catagory1.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item name ", "item catagory 1"),
    value: item[0],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory1[index][0] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price", "item catagory 1"),
    value: item[1],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory1[index][1] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price 2", "item catagory 1"),
    value: item[2],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory1[index][2] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('item catagory 2', 'fivemenu'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.myItems.catagory2.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item name", "item catagory 2"),
    value: item[0],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory2[index][0] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price", "item catagory 2"),
    value: item[1],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory2[index][1] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price 2", "item catagory 2"),
    value: item[2],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory2[index][2] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('item catagory 3', 'fivemenu'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.myItems.catagory3.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item name", "item catagory 3"),
    value: item[0],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory3[index][0] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price", "item catagory 3"),
    value: item[1],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory3[index][1] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price 2", "item catagory 3"),
    value: item[2],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory3[index][2] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('item catagory 4', 'fivemenu'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.myItems.catagory4.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item name", "item catagory 4"),
    value: item[0],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory4[index][0] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price", "item catagory 4"),
    value: item[1],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory4[index][1] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price 2", "item catagory 4"),
    value: item[2],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory4[index][2] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('item catagory 5', 'fivemenu'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, attributes.myItems.catagory5.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item name", "item catagory 5"),
    value: item[0],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory5[index][0] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price", "item catagory 5"),
    value: item[1],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory5[index][1] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("item price 2", "item catagory 5"),
    value: item[2],
    onChange: newValue => {
      let updatedItems = Object.assign({}, attributes.myItems);
      updatedItems.catagory5[index][2] = newValue;
      setAttributes({
        myItems: updatedItems
      });
    }
  })))))));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save({
  attributes
}) {
  console.log("hello world save");
  const {
    ItemCatagory1
  } = attributes;
  const {
    ItemCatagory2
  } = attributes;
  const {
    ItemCatagory3
  } = attributes;
  const {
    ItemCatagory4
  } = attributes;
  const {
    ItemCatagory5
  } = attributes;
  const imageStyle = {
    backgroundImage: attributes.backgroundImage ? `url(${attributes.backgroundImage})` : 'none',
    backgroundSize: 'cover',
    width: '25%',
    // Adjust the width of the image as needed
    height: '25%' // Adjust the height of the image as needed
  };

  const imageStyleCatagory1 = {
    backgroundSize: 'cover',
    width: `${attributes.imageSizeSmall}%`,
    // Adjust the width of the image as needed
    height: 'auto',
    // Adjust the height of the image as needed
    display: 'block',
    margin: '0 auto'
  };
  const imageStyleCatagory0 = {
    backgroundSize: 'cover',
    width: `${attributes.imageSize}%`,
    // Adjust the width of the image as needed
    height: 'auto',
    // Adjust the height of the image as needed
    display: 'block',
    margin: '0 auto'
  };
  const styles = {
    // ... (your styles for different blockStyle values)
  };
  const selectedStyle = styles[attributes.blockStyle] || {};
  const blockStyle = {
    ...selectedStyle,
    backgroundColor: attributes.backgroundColor,
    // Apply the selected background color
    color: attributes.textColor,
    fontFamily: attributes.fontFamily,
    textAlign: attributes.alignment,
    fontSize: attributes.fontSize,
    // tableLayout: "fixed",
    width: "100%",
    paddingLeft: "15%",
    paddingRight: "15%"
  };
  const listStyle = {
    listStyleType: 'none',
    // Remove default list item marker
    padding: 0,
    // Remove default padding
    margin: 0 // Remove default margin
  };

  const catagoryColor = {
    color: attributes.catagoryColor
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("fragment", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "scrollwrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    style: {
      textAlign: 'center'
    }
  }, "Menu"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "menuContainer"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-table",
    style: blockStyle
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory2)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory2.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2]))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory3)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory3.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2])))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory4)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory4.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2]))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "50%"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory5)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, attributes.myItems.catagory5.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2])))))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "menu-category"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: "2",
    style: {
      textAlign: 'center'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", {
    style: catagoryColor
  }, ItemCatagory1))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    colSpan: "2",
    align: "center"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    align: "center"
  }, attributes.myItems.catagory1.map((item, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, item[0]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[1]), " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    width: "15%"
  }, item[2])))))))))));
}

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/block.json":
/*!************************!*\
  !*** ./src/block.json ***!
  \************************/
/***/ ((module) => {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/fivemenu","version":"0.1.0","title":"Fivemenu","category":"widgets","icon":"smiley","description":"Example block scaffolded with Create Block tool.","supports":{"html":false},"attributes":{"fontFamily":{"type":"string","default":"Arial, sans-serif"},"blockStyle":{"type":"string","default":"style1"},"backgroundColor":{"type":"string","default":"#ffffff"},"textColor":{"type":"string","default":"#0"},"catagoryColor":{"type":"string","default":"#0"},"backgroundImage":{"type":"string","default":""},"backgroundImage2":{"type":"string","default":""},"backgroundImage3":{"type":"string","default":""},"backgroundImage4":{"type":"string","default":""},"backgroundImage5":{"type":"string","default":""},"ItemCatagory1":{"type":"string","default":"click to edit text"},"ItemCatagory2":{"type":"string","default":"click to edit text"},"ItemCatagory3":{"type":"string","default":"click to edit text"},"ItemCatagory4":{"type":"string","default":"click to edit text"},"ItemCatagory5":{"type":"string","default":"click to edit text"},"myItems":{"type":"object","default":{"catagory1":[],"catagory2":[],"catagory3":[],"catagory4":[],"catagory5":[]}},"alignment":{"type":"string","default":"left"},"fontSize":{"type":"number","default":16},"imageSize":{"type":"number","default":50},"imageSizeSmall":{"type":"number","default":50}},"textdomain":"fivemenu","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkfivemenu"] = self["webpackChunkfivemenu"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map