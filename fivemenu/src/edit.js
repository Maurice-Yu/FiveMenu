/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
// import { useBlockProps, RichText } from '@wordpress/block-editor';
import './editor.scss';
// import Inspector from './inspector';
const { InspectorControls } = wp.blockEditor;
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
//from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import {PanelBody,ColorPallette,TextControl} from '@wordpress/components';
import { RichText } from '@wordpress/block-editor';
// import { RadioGroup, Radio } from '@wordpress/components';
import { MediaUpload } from '@wordpress/block-editor';
import {
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';
const {Fragment} = wp.element;
import {AlignmentToolbar } from '@wordpress/block-editor';

import { ColorPicker } from '@wordpress/components';
import { SelectControl,RangeControl } from '@wordpress/components';
export default function Edit({attributes,setAttributes}) {
	console.log("hello world1");
	const [backgroundImage, setBackgroundImage] = useState(attributes.backgroundImage);
	const [backgroundImage2, setBackgroundImage2] = useState(attributes.backgroundImage2);
  const [backgroundImage3, setBackgroundImage3] = useState(attributes.backgroundImage3);
  const [backgroundImage4, setBackgroundImage4] = useState(attributes.backgroundImage4);
  const [backgroundImage5, setBackgroundImage5] = useState(attributes.backgroundImage5);
	const {ItemCatagory1} = attributes;
	const {ItemCatagory2} = attributes;
	const {ItemCatagory3} = attributes;
	const {ItemCatagory4} = attributes;
	const {ItemCatagory5} = attributes;
	console.log("hello world");
  const [ checked, setChecked ] = useState( 'catagory1' );
  const MyControlledRadioRadioGroup = () => {

    return (
      
        <RadioGroup label="Width" onChange={ setChecked } checked={ checked }>
            <Radio value="catagory1">Catagory 1</Radio>
            <Radio value="catagory2">Catagory 2</Radio>
            <Radio value="catagory3">Catagory 3</Radio>
            <Radio value="catagory4">Catagory 4</Radio>
            <Radio value="catagory5">Catagory 5</Radio>
        </RadioGroup>
    );}

    const handleStyleChange = (newStyle) => {
      setAttributes({ blockStyle: newStyle });
      
    };
    
    const handleColorChange = (newColor) => {
      setAttributes({ backgroundColor: newColor });
    };
    const handleCatagoryColorChange = (newColor) => {
      setAttributes({ catagoryColor: newColor });
    };
    const handleTextColorChange = (newColor) => {
      setAttributes({ textColor: newColor });
    };
  const addItem = () => {
    
    const newItem = ['New Item','0.00','0.00']; // Replace with your logic to get the new item value\
    let newMyItems = Object.assign({}, attributes.myItems);
    if(checked==="catagory1")
    {
      newMyItems.catagory1 = [...attributes.myItems.catagory1, newItem];
    }
    if(checked==="catagory2")
    {
      newMyItems.catagory2 = [...attributes.myItems.catagory2, newItem];
    }
    if(checked==="catagory3")
    {
      newMyItems.catagory3 = [...attributes.myItems.catagory3, newItem];
    }
    if(checked==="catagory4")
    {
      newMyItems.catagory4 = [...attributes.myItems.catagory4, newItem];
    }
    if(checked==="catagory5")
    {
      newMyItems.catagory5 = [...attributes.myItems.catagory5, newItem];
    }
    setAttributes({ myItems: newMyItems });
  };

  const removeLastItem = () => {
 
      let newMyItems = Object.assign({}, attributes.myItems);

      if(checked==="catagory1")
    {
      newMyItems.catagory1 = newMyItems.catagory1.slice(0,-1);
    }
    if(checked==="catagory2")
    {
      newMyItems.catagory2 = newMyItems.catagory2.slice(0,-1);
    }
    if(checked==="catagory3")
    {
      newMyItems.catagory3 = newMyItems.catagory3.slice(0,-1);
    }
    if(checked==="catagory4")
    {
      newMyItems.catagory4 = newMyItems.catagory4.slice(0,-1);
    }
    if(checked==="catagory5")
    {
      newMyItems.catagory5 = newMyItems.catagory5.slice(0,-1);
    }
      setAttributes({myItems:newMyItems});
  };

  const listStyle = {
    listStyleType: 'none', // Remove default list item marker
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin
  };
  const imageStyle = {
    backgroundImage: attributes.backgroundImage ? `url(${attributes.backgroundImage})` : 'none',
    backgroundSize: 'cover',
    width: '25%', // Adjust the width of the image as needed
    height: '25%', // Adjust the height of the image as needed
  };
 
  const styles = {
    // ... (your styles for different blockStyle values)
  };

  const selectedStyle = styles[attributes.blockStyle] || {};

  const blockStyle = {
    ...selectedStyle,
    backgroundColor: attributes.backgroundColor, // Apply the selected background color
    color: attributes.textColor,
    fontFamily: attributes.fontFamily,
    textAlign: attributes.alignment,
    fontSize: attributes.fontSize,
    // tableLayout: "fixed",
    width:"100%"
  };
  const handleFontSizeChange = (newFontSize) => {
    setAttributes({ fontSize: newFontSize });
  };
  const handleAlignmentChange = (newAlignment) => {
    setAttributes({ alignment: newAlignment });
  };
  const handleFontChange = (newFont) => {
    setAttributes({ fontFamily: newFont });
  };
  const handleImageSizeChange = (newSize) => {
    setAttributes({ imageSize: newSize });
  };
  const handleSmallImageSizeChange = (newSize) => {
    setAttributes({ imageSizeSmall: newSize });
  };
  const imageStyleCatagory0 = {
  
    backgroundSize: 'cover',
        width: `${attributes.imageSize}%`, // Adjust the width of the image as needed
        height: 'auto', // Adjust the height of the image as needed
        display: 'block',
        margin: '0 auto',
     
      };
  const popularFonts = [
    'Arial, sans-serif',
    'Times New Roman, serif',
    'Helvetica, sans-serif',
    'Verdana, sans-serif',
    'Tahoma, sans-serif',
  'Courier New, monospace',
  'Georgia, serif',
  'Palatino Linotype, serif',
  'Lucida Sans Unicode, sans-serif',
  'Trebuchet MS, sans-serif',
  'Arial Black, sans-serif',
  'Impact, sans-serif',
  'Comic Sans MS, cursive',
  'Garamond, serif',
  'Webdings, sans-serif',
  'Wingdings, sans-serif',
  'Symbol, sans-serif',
  'Lucida Console, monospace',
  'MS Sans Serif, sans-serif',
  'MS Serif, serif',

  ];
  const catagoryColor = {
    color: attributes.catagoryColor,
  };
  const imageStyleCatagory1 = {
  
    backgroundSize: 'cover',
        width: `${attributes.imageSizeSmall}%`, // Adjust the width of the image as needed
        height: 'auto', // Adjust the height of the image as needed
        display: 'block',
        margin: '0 auto',
     
      };
  return (
    <Fragment>
     <div>
      
      <InspectorControls>
      <RangeControl
        label="Image Size"
        value={attributes.imageSize}
        onChange={handleImageSizeChange}
        min={10}
        max={100}
        step={1}
      />
       <RangeControl
        label="Image Size for catagories"
        value={attributes.imageSizeSmall}
        onChange={handleSmallImageSizeChange}
        min={10}
        max={200}
        step={1}
      />
      <RangeControl
          label="Font Size"
          value={attributes.fontSize}
          onChange={handleFontSizeChange}
          min={12}
          max={60}
          step={1}
        />
      <AlignmentToolbar
          value={attributes.alignment}
          onChange={handleAlignmentChange}
        />
      <MediaUpload
          onSelect={(media) => {
            setBackgroundImage(media.url);
            setAttributes({ backgroundImage: media.url });
          }}
          type="image"
          value={backgroundImage}
          render={({ open }) => (
            <Button onClick={open}>
              {backgroundImage ? 'Change Image' : 'Upload Image'}
            </Button>
          )}
        />
          <MediaUpload
          onSelect={(media) => {
            setBackgroundImage(media.url);
            setAttributes({ backgroundImage2: media.url });
          }}
          type="image"
          value={backgroundImage2}
          render={({ open }) => (
            <Button onClick={open}>
              {backgroundImage2 ? 'Change Image Catagory 2' : 'Upload Image Catagory 2'}
            </Button>
          )}
        />
             <MediaUpload
          onSelect={(media) => {
            setBackgroundImage(media.url);
            setAttributes({ backgroundImage3: media.url });
          }}
          type="image"
          value={backgroundImage3}
          render={({ open }) => (
            <Button onClick={open}>
              {backgroundImage3 ? 'Change Image Catagory 3' : 'Upload Image Catagory 3'}
            </Button>
          )}
        />
             <MediaUpload
          onSelect={(media) => {
            setBackgroundImage(media.url);
            setAttributes({ backgroundImage4: media.url });
          }}
          type="image"
          value={backgroundImage4}
          render={({ open }) => (
            <Button onClick={open}>
              {backgroundImage4 ? 'Change Image Catagory 4' : 'Upload Image Catagory 4'}
            </Button>
          )}
        />
             <MediaUpload
          onSelect={(media) => {
            setBackgroundImage(media.url);
            setAttributes({ backgroundImage5: media.url });
          }}
          type="image"
          value={backgroundImage5}
          render={({ open }) => (
            <Button onClick={open}>
              {backgroundImage5 ? 'Change Image Catagory 5' : 'Upload Image Catagory 5'}
            </Button>
          )}
        />
         <ColorPicker
          label="Background Color"
          color={attributes.backgroundColor}
          onChangeComplete={(value) => handleColorChange(value.hex)}
        />
         <ColorPicker
          label="text Color"
          color={attributes.textColor}
          onChangeComplete={(value) => handleTextColorChange(value.hex)}
        />
          <ColorPicker
          label="catagory Color"
          color={attributes.catagoryColor}
          onChangeComplete={(value) => handleCatagoryColorChange(value.hex)}
        />
        
        <SelectControl
          label="Font Family"
          value={attributes.fontFamily}
          options={popularFonts.map((font) => ({ value: font, label: font }))}
          onChange={handleFontChange}
        />
      {/* <MyControlledRadioRadioGroup /> */}
      <MyControlledRadioRadioGroup />
        <Button onClick={addItem}>Add Item</Button>
        {
          <Button onClick={removeLastItem}>Remove Last Item</Button>
        }
      </InspectorControls>
      
    </div>
  {/* //to change style add inline style that takes a style={function to grab attribute style} */}

{/* 
<div>
  <h2>Menu</h2>
  <table className="menu-table" style={blockStyle}>
    <tbody>
      <tr className="menu-category">
        <td colSpan="2" style={{ textAlign: 'center' }}>
          <img
            src={attributes.backgroundImage}
            alt="Image"
            style={imageStyleCatagory1}
          />
          <strong style={catagoryColor}>{ItemCatagory1}</strong>
          <ul style={listStyle}>
        {attributes.myItems.catagory1.map((item, index) => (
          <li key={index}>
           
            <RichText
              tagName="span"
              value={item[0]}
              onChange={(newItem) => {
                const updatedItems = [...attributes.myItems.catagory1];
                updatedItems[index][0] = newItem;
                setAttributes({ myItems: { ...attributes.myItems, catagory1: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Menu Item"
            />
            {' '}
          
            <RichText
              tagName="span"
              value={item[1]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory1];
                updatedItems[index][1] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory1: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price"
            />
               <RichText
              tagName="span"
              value={item[2]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory1];
                updatedItems[index][2] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory1: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price 2"
            />
          </li>
        ))}
      </ul>
        </td>
      </tr>
      <tr>
        <td>
          <table className="menu-category">
            <tbody>
              <tr>
                <td>
                  <strong style={catagoryColor}>{ItemCatagory2}</strong>
                  <ul style={listStyle}>
        {attributes.myItems.catagory2.map((item, index) => (
          <li key={index}>
           
            <RichText
              tagName="span"
              value={item[0]}
              onChange={(newItem) => {
                const updatedItems = [...attributes.myItems.catagory2];
                updatedItems[index][0] = newItem;
                setAttributes({ myItems: { ...attributes.myItems, catagory2: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Menu Item"
            />
            {' '}
        
            <RichText
              tagName="span"
              value={item[1]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory2];
                updatedItems[index][1] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory2: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price"
            />
            <RichText
              tagName="span"
              value={item[2]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory2];
                updatedItems[index][2] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory2: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price 2"
            />
          </li>
        ))}
      </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td>
          <table className="menu-category">
            <tbody>
              <tr>
                <td>
                  <strong style={catagoryColor}>{ItemCatagory3}</strong>
                  <ul style={listStyle}>
        {attributes.myItems.catagory3.map((item, index) => (
          <li key={index}>
           
            <RichText
              tagName="span"
              value={item[0]}
              onChange={(newItem) => {
                const updatedItems = [...attributes.myItems.catagory3];
                updatedItems[index][0] = newItem;
                setAttributes({ myItems: { ...attributes.myItems, catagory3: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Menu Item"
            />
            {' '}
         
            <RichText
              tagName="span"
              value={item[1]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory3];
                updatedItems[index][1] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory3: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price"
            />
            <RichText
              tagName="span"
              value={item[2]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory3];
                updatedItems[index][2] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory3: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price 2"
            />
          </li>
        ))}
      </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table className="menu-category">
            <tbody>
              <tr>
                <td>
                  <strong style={catagoryColor}>{ItemCatagory4}</strong>
                  <ul style={listStyle}>
        {attributes.myItems.catagory4.map((item, index) => (
          <li key={index}>
        
            <RichText
              tagName="span"
              value={item[0]}
              onChange={(newItem) => {
                const updatedItems = [...attributes.myItems.catagory4];
                updatedItems[index][0] = newItem;
                setAttributes({ myItems: { ...attributes.myItems, catagory4: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Menu Item"
            />
            {' '}
        
            <RichText
              tagName="span"
              value={item[1]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory4];
                updatedItems[index][1] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory4: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price"
            />
            <RichText
              tagName="span"
              value={item[2]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory4];
                updatedItems[index][2] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory4: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price 2"
            />
          </li>
        ))}
      </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
        <td>
          <table className="menu-category">
            <tbody>
              <tr>
                <td>
                  <strong style={catagoryColor}>{ItemCatagory5}</strong>
                  <ul style={listStyle}>
        {attributes.myItems.catagory5.map((item, index) => (
          <li key={index}>
         
            <RichText
              tagName="span"
              value={item[0]}
              onChange={(newItem) => {
                const updatedItems = [...attributes.myItems.catagory5];
                updatedItems[index][0] = newItem;
                setAttributes({ myItems: { ...attributes.myItems, catagory5: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Menu Item"
            />
            {' '}
           
            <RichText
              tagName="span"
              value={item[1]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory5];
                updatedItems[index][1] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory5: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price"
            />
               <RichText
              tagName="span"
              value={item[2]}
              onChange={(newPrice) => {
                const updatedItems = [...attributes.myItems.catagory5];
                updatedItems[index][2] = newPrice;
                setAttributes({ myItems: { ...attributes.myItems, catagory5: updatedItems } });
              }}
              formattingControls={[]}
              placeholder="Price 2"
            />
          </li>
        ))}
      </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div> */}
<div className="scrollwrapper">
  <h2>Menu</h2>
  <div className="menuContainer">
  <table className="menu-table"  style={blockStyle}>
    <tbody>
      <tr className="menu-category">
        <td colSpan="2" style={{ textAlign: 'center' }}>
          <img
            src={attributes.backgroundImage}
            alt="Image"
            style={imageStyleCatagory0}
          />
          <strong style={catagoryColor}>{ItemCatagory1}</strong>
          </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
            <table align="center">
            {attributes.myItems.catagory1.map((item, index) => (
              <tr key={index}>
                <td>{item[0]}</td> <td>{item[1]}</td> <td>{item[2]}</td>
              </tr>
            ))}
            </table>
          </td>
          </tr>
        
      <tr >
        <td width="50%" >
          <table className="menu-category"  >
            <tbody>


            <tr><td> <strong style={catagoryColor}>{ItemCatagory2}</strong></td><td>  
              <img
            src={attributes.backgroundImage2}
            alt="Image"
            style={imageStyleCatagory1}
          />
          </td></tr>

                    {attributes.myItems.catagory2.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
 
    
     
            </tbody>
          </table>
        </td>
        <td width="50%" >
        <table className="menu-category">
            <tbody>
            <tr><td><strong style={catagoryColor}>{ItemCatagory3}</strong></td><td>
              <img
            src={attributes.backgroundImage3}
            alt="Image"
            style={imageStyleCatagory1}
          />
          </td></tr>
                    {attributes.myItems.catagory3.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </td>
      </tr>
      <tr >
        <td width="50%" >
        <table className="menu-category">
            <tbody>
            <tr><td><strong style={catagoryColor}>{ItemCatagory4}</strong></td><td>
            <img
            src={attributes.backgroundImage4}
            alt="Image"
            style={imageStyleCatagory1}
          />
          </td></tr>

                    {attributes.myItems.catagory4.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </td>
        <td width="50%" >
        <table className="menu-category">
            <tbody>
            <tr><td><strong style={catagoryColor}>{ItemCatagory5}</strong></td><td>
            <img
            src={attributes.backgroundImage5}
            alt="Image"
            style={imageStyleCatagory1}
          />
          </td></tr>

                    {attributes.myItems.catagory5.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
  </div>
</div>
  <InspectorControls>
  <PanelBody
    title={__('Panel Title', 'fivemenu')}
    initialOpen={true}
  >
    
    
    <TextControl
    label={__("click to change item catagory 1", "fivemenu")}
    value={ItemCatagory1}
    onChange={(newText) => setAttributes({ ItemCatagory1: newText })}
    >
    </TextControl>
    <TextControl
    label={__("click to change item catagory 2", "fivemenu")}
    value={ItemCatagory2}
    onChange={(newText) => setAttributes({ ItemCatagory2: newText })}
    >
    </TextControl>
    <TextControl
    label={__("click to change item catagory 3", "fivemenu")}
    value={ItemCatagory3}
    onChange={(newText) => setAttributes({ ItemCatagory3: newText })}
    >
    </TextControl>
    <TextControl
    label={__("click to change item catagory 4", "fivemenu")}
    value={ItemCatagory4}
    onChange={(newText) => setAttributes({ ItemCatagory4: newText })}
    >
    </TextControl>
    <TextControl
    label={__("click to change item catagory 5", "fivemenu")}
    value={ItemCatagory5}
    onChange={(newText) => setAttributes({ ItemCatagory5: newText })}
    >
    </TextControl>
    </PanelBody>
    </InspectorControls>
    <InspectorControls>
    <PanelBody
    title={__('item catagory 1', 'item catagory 1')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory1.map((item, index) => (
        <div key={index}>
            
 
 
          <TextControl
          label={__("item name ", "item catagory 1")}
            value={item[0]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory1[index][0] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
           <TextControl
           label={__("item price", "item catagory 1")}
            value={item[1]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory1[index][1] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
            <TextControl
           label={__("item price 2", "item catagory 1")}
            value={item[2]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory1[index][2] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        

        </div>
      ))}
      </div>
    </PanelBody>
    </InspectorControls>
    <InspectorControls>
    <PanelBody
    title={__('item catagory 2', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory2.map((item, index) => (
        <div key={index}>
          
 
 
          <TextControl
          label={__("item name", "item catagory 2")}
            value={item[0]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory2[index][0] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
           <TextControl
           label={__("item price", "item catagory 2")}
            value={item[1]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory2[index][1] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
     <TextControl
           label={__("item price 2", "item catagory 2")}
            value={item[2]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory2[index][2] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </div>
      ))}
      </div>
    </PanelBody>
    </InspectorControls>
    <InspectorControls>
    <PanelBody
    title={__('item catagory 3', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory3.map((item, index) => (
        <div key={index}>
           
 
 
           <TextControl
          label={__("item name", "item catagory 3")}
            value={item[0]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory3[index][0] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
           <TextControl
           label={__("item price", "item catagory 3")}
            value={item[1]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory3[index][1] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
          <TextControl
           label={__("item price 2", "item catagory 3")}
            value={item[2]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory3[index][2] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </div>
      ))}
      </div>
    </PanelBody>
    </InspectorControls>
    <InspectorControls>
    <PanelBody
    title={__('item catagory 4', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory4.map((item, index) => (
        <div key={index}>
           
 
 
           <TextControl
          label={__("item name", "item catagory 4")}
            value={item[0]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory4[index][0] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
           <TextControl
           label={__("item price", "item catagory 4")}
            value={item[1]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory4[index][1] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
            <TextControl
           label={__("item price 2", "item catagory 4")}
            value={item[2]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory4[index][2] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
     
        </div>
      ))}
      </div>
    </PanelBody>
    </InspectorControls>
    <InspectorControls>
    <PanelBody
    title={__('item catagory 5', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory5.map((item, index) => (
        <div key={index}>
           
 
 
           <TextControl
          label={__("item name", "item catagory 5")}
            value={item[0]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory5[index][0] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
           <TextControl
           label={__("item price", "item catagory 5")}
            value={item[1]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory5[index][1] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
      <TextControl
           label={__("item price 2", "item catagory 5")}
            value={item[2]}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory5[index][2] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </div>
      ))}
      </div>
    </PanelBody>
    </InspectorControls>
   
          
          
          
 



    </Fragment>
  );
        
			

} 


