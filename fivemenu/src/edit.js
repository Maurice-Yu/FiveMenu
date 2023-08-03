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
// import { RadioGroup, Radio } from '@wordpress/components';
import {
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
} from '@wordpress/components';
const {Fragment} = wp.element;


export default function Edit({attributes,setAttributes}) {
	console.log("hello world1");
	
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

  const addItem = () => {
    
    const newItem = 'New Item'; // Replace with your logic to get the new item value\
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
      newMyItems.catagory3 = [...attributes.myItems.catagory2, newItem];
    }
    if(checked==="catagory4")
    {
      newMyItems.catagory4 = [...attributes.myItems.catagory2, newItem];
    }
    if(checked==="catagory5")
    {
      newMyItems.catagory5 = [...attributes.myItems.catagory2, newItem];
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


  return (
    <Fragment>
     <div>
      
      <InspectorControls>
      {/* <MyControlledRadioRadioGroup /> */}
      <MyControlledRadioRadioGroup />
        <Button onClick={addItem}>Add Item</Button>
        {
          <Button onClick={removeLastItem}>Remove Last Item</Button>
        }
      </InspectorControls>
      
    </div>
  {/* //to change style add inline style that takes a style={function to grab attribute style} */}

//from '@wordpress/block-editor';
    <div>
    <h2>Menu</h2>
    <table className="menu-table">
      <tbody>
        <tr className="menu-category">
          <td colSpan="2">
            <strong>{ItemCatagory1}</strong>
            {attributes.myItems.catagory1.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
          </td>
        </tr>
        <tr>
          <td>
            <table className="menu-category">
              <tbody>
                <tr>
                  <td>
                    <strong>{ItemCatagory2}</strong>
                    {attributes.myItems.catagory2.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                  
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
                    <strong>{ItemCatagory3}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                    {attributes.myItems.catagory3.map((item, index) => (
      <li key={index}>{item}</li>
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
                    <strong>{ItemCatagory4}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                    {attributes.myItems.catagory4.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>
            <table className="menu-category" >
              <tbody>
                <tr>
                  <td>
                    <strong>click to edit text</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                    {attributes.myItems.catagory5.map((item, index) => (
      <li key={index}>{item}</li>
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
    <PanelBody
    title={__('item catagory 1', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory1.map((item, index) => (
        <div key={index}>
            <InspectorControls>
 
 
          <TextControl
            value={item}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory1[index] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </InspectorControls>
        </div>
      ))}
      </div>
    </PanelBody>
    <PanelBody
    title={__('item catagory 2', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory2.map((item, index) => (
        <div key={index}>
            <InspectorControls>
 
 
          <TextControl
            value={item}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory2[index] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </InspectorControls>
        </div>
      ))}
      </div>
    </PanelBody>
    <PanelBody
    title={__('item catagory 3', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory3.map((item, index) => (
        <div key={index}>
            <InspectorControls>
 
 
          <TextControl
            value={item}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory3[index] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </InspectorControls>
        </div>
      ))}
      </div>
    </PanelBody>
    <PanelBody
    title={__('item catagory 4', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory4.map((item, index) => (
        <div key={index}>
            <InspectorControls>
 
 
          <TextControl
            value={item}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory4[index] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </InspectorControls>
        </div>
      ))}
      </div>
    </PanelBody>
    
    
    <PanelBody
    title={__('item catagory 5', 'fivemenu')}
    initialOpen={true}
><div>
    {attributes.myItems.catagory4.map((item, index) => (
        <div key={index}>
            <InspectorControls>
 
 
          <TextControl
            value={item}
            onChange={(newValue) => {
              let updatedItems = Object.assign({}, attributes.myItems);
              updatedItems.catagory5[index] = newValue;
              setAttributes({ myItems: updatedItems });
            }}
          />
        </InspectorControls>
        </div>
      ))}
      </div>
    </PanelBody>
   
          
          
          
  </PanelBody>


</InspectorControls>
    </Fragment>
  );
        
			

} 


