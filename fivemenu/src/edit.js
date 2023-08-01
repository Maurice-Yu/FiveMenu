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


import {PanelBody,ColorPallette,TextControl} from '@wordpress/components';
const {Fragment} = wp.element;
export default function Edit({attributes,setAttributes}) {
	console.log("hello world1");
	
	const {ItemCatagory1} = attributes;
	const {ItemCatagory2} = attributes;
	const {ItemCatagory3} = attributes;
	const {ItemCatagory4} = attributes;
	const {ItemCatagory5} = attributes;
	console.log("hello world");
	
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Panel Title', 'fivemenu')}
					initialOpen={true}
				>
					sdfsdf
				
					
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
			
    <div>
      <h2>Menu</h2>
      <table className="menu-table">
        <tbody>
          <tr>
            <td colSpan="2">
              <strong>{ItemCatagory1}</strong>
            </td>
          </tr>
          <tr>
            <td>
              <table className="menu-category">
                <tbody>
                  <tr>
                    <td>
                      <strong>{ItemCatagory2}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Item A</li>
                        <li>Item B</li>
                        <li>Item C</li>
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
                        <li>Item X</li>
                        <li>Item Y</li>
                        <li>Item Z</li>
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
                        <li>Item Alpha</li>
                        <li>Item Beta</li>
                        <li>Item Gamma</li>
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
                      <strong>{ItemCatagory5}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <ul>
                        <li>Item One</li>
                        <li>Item Two</li>
                        <li>Item Three</li>
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
		</Fragment>
		
	);
}
