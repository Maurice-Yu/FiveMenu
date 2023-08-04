/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({attributes}) {
	console.log("hello world save");
	const {ItemCatagory1} = attributes;
	const {ItemCatagory2} = attributes;
	const {ItemCatagory3} = attributes;
	const {ItemCatagory4} = attributes;
	const {ItemCatagory5} = attributes;
	return (
	<fragment>
		   <div>
    <h2>Menu</h2>
    <table className="menu-table">
      <tbody>
        <tr className="menu-category">
          <td colSpan="2">
            <strong>{ItemCatagory1}</strong>
            {attributes.myItems.catagory1.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
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
      <li key={index}>{item[0]} {item[1]}</li>
      
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
      <li key={index}>{item[0]} {item[1]}</li>
      
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
            <table className="menu-category" >
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
      <li key={index}>{item[0]} {item[1]}</li>
      
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
                    <strong>{ItemCatagory5}</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <ul>
                    {attributes.myItems.catagory5.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
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
		</fragment>
	);
}
