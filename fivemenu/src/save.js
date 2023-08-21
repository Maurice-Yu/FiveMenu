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
import { RichText } from '@wordpress/block-editor';
export default function save({attributes}) {
	console.log("hello world save");
	const {ItemCatagory1} = attributes;
	const {ItemCatagory2} = attributes;
	const {ItemCatagory3} = attributes;
	const {ItemCatagory4} = attributes;
	const {ItemCatagory5} = attributes;

const imageStyle = {
    backgroundImage: attributes.backgroundImage ? `url(${attributes.backgroundImage})` : 'none',
    backgroundSize: 'cover',
    width: '25%', // Adjust the width of the image as needed
    height: '25%', // Adjust the height of the image as needed
  };
  const imageStyleCatagory1 = {
  
    backgroundSize: 'cover',
        width: `${attributes.imageSizeSmall}%`, // Adjust the width of the image as needed
        height: 'auto', // Adjust the height of the image as needed
        display: 'block',
        margin: '0 auto',
     
      };
      const imageStyleCatagory0 = {
  
        backgroundSize: 'cover',
            width: `${attributes.imageSize}%`, // Adjust the width of the image as needed
            height: 'auto', // Adjust the height of the image as needed
            display: 'block',
            margin: '0 auto',
         
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
    width:"100%",
    paddingLeft:"15%",
    paddingRight:"15%"
  };
  const listStyle = {
    listStyleType: 'none', // Remove default list item marker
    padding: 0, // Remove default padding
    margin: 0, // Remove default margin
  };
  const catagoryColor = {
    color: attributes.catagoryColor,
  };
	return (
	<fragment>
 <div className="scrollwrapper">
  <h2 style={{ textAlign: 'center' }} >Menu</h2>
  <div className="menuContainer">
  <table className="menu-table"  style={blockStyle}>
    <tbody>
 
        
      <tr className="menu-category">
        <td width="50%" >
          <table className="menu-category"  >
            <tbody>


            <tr><td> <strong style={catagoryColor}>{ItemCatagory2}</strong></td><td>  
              {/* <img
            src={attributes.backgroundImage2}
            alt="Image"
            style={imageStyleCatagory1}
          /> */}
          </td></tr>
          <tr >
                    {attributes.myItems.catagory2.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
 </tr>
    
     
            </tbody>
          </table>
        </td>
        <td width="50%" >
        <table className="menu-category">
            <tbody>
            <tr><td><strong style={catagoryColor}>{ItemCatagory3}</strong></td><td>
              {/* <img
            src={attributes.backgroundImage3}
            alt="Image"
            style={imageStyleCatagory1}
          /> */}
          </td></tr>
          <tr>
                    {attributes.myItems.catagory3.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr  className="menu-category">
        <td width="50%" >
        <table className="menu-category">
            <tbody>
            <tr><td><strong style={catagoryColor}>{ItemCatagory4}</strong></td><td>
            {/* <img
            src={attributes.backgroundImage4}
            alt="Image"
            style={imageStyleCatagory1}
          /> */}
          </td></tr>
          <tr>
                    {attributes.myItems.catagory4.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
                    </tr>
            </tbody>
          </table>
        </td>
        <td width="50%" >
        <table className="menu-category">
            <tbody>
            <tr><td><strong style={catagoryColor}>{ItemCatagory5}</strong></td><td>
            {/* <img
            src={attributes.backgroundImage5}
            alt="Image"
            style={imageStyleCatagory1}
          /> */}
          </td></tr>
          <tr>
                    {attributes.myItems.catagory5.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
                    </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr className="menu-category" >
        <td colSpan="2" style={{ textAlign: 'center' }}>
          {/* <img
            src={attributes.backgroundImage}
            alt="Image"
            style={imageStyleCatagory0}
          /> */}
          <strong style={catagoryColor}>{ItemCatagory1}</strong>
          </td>
          </tr>
          <tr>
            <td colSpan="2" align="center">
            <table align="center">
            {attributes.myItems.catagory1.map((item, index) => (
              <tr key={index}>
                <td>{item[0]}</td> <td width="15%">{item[1]}</td> <td width="15%">{item[2]}</td>
              </tr>
            ))}
            </table>
          </td>
          </tr>
    </tbody>
  </table>
  </div>
</div>
 {/* <div>
  <h2>Menu</h2>
  <table className="menu-table"  style={blockStyle}>
    <tbody>
      <tr className="menu-category">
        <td colSpan="2" style={{ textAlign: 'center' }}>
          <img
            src={attributes.backgroundImage}
            alt="Image"
            style={imageStyleCatagory1}
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
        
      <tr>
        <td>
          <table className="menu-category" width="100%">
            <tbody>


                  <strong style={catagoryColor}>{ItemCatagory2}</strong>

                    {attributes.myItems.catagory2.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
 
    
     
            </tbody>
          </table>
        </td>
        <td>
        <table className="menu-category" width="100%">
            <tbody>
                  <strong style={catagoryColor}>{ItemCatagory3}</strong>
                    {attributes.myItems.catagory3.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td>
        <table className="menu-category">
            <tbody>
                  <strong style={catagoryColor}>{ItemCatagory4}</strong>

                    {attributes.myItems.catagory4.map((item, index) => (
                      <tr key={index}>
                        <td>{item[0]}</td> <td width="15%">{item[1]}</td><td width="15%">{item[2]}</td>
                      </tr>
                    ))}
            </tbody>
          </table>
        </td>
        <td>
        <table className="menu-category">
            <tbody>
                  <strong style={catagoryColor}>{ItemCatagory5}</strong>

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
</div> */}
		 {/* <div>
    <h2>Menu</h2>
    <table className="menu-table" style={blockStyle}>
      <tbody>
        <tr className="menu-category">
          <td  colSpan="2">
            <table>
         
         
         
            
            <tr>
              <tr>
            <img
                  src={attributes.backgroundImage}
                  alt="Image"
                  style={imageStyleCatagory1}

                />
                </tr>
                <tr>
            <strong>{ItemCatagory1}</strong>
             {attributes.myItems.catagory1.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
    ))}
    </tr>

  
   
   
    </tr>
    </table>
          </td>
        
        </tr>
        <tr>
          <td>
            <table className="menu-category">
              <tbody>
              <tr>
              <tr>
                <img
                  src={attributes.backgroundImage}
                  alt="Image"
                  style={imageStyleCatagory1}

                />
                </tr>
                <tr>
                    <strong>{ItemCatagory2}</strong>
                    {attributes.myItems.catagory2.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
    ))}
    </tr>
                
                
                </tr>
        
              </tbody>
            </table>
          </td>
          <td>
          <table className="menu-category">
              <tbody>
              <tr>
              <tr>
                <img
                  src={attributes.backgroundImage}
                  alt="Image"
                  style={imageStyleCatagory1}

                />
                </tr>
                <tr> 
                    <strong>{ItemCatagory3}</strong>
                    {attributes.myItems.catagory3.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
    ))}
                
                </tr>
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
                <img
                  src={attributes.backgroundImage}
                  alt="Image"
                  style={imageStyleCatagory1}

                />
                    <strong>{ItemCatagory4}</strong>
                    {attributes.myItems.catagory4.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
    ))}
                
                
                </tr>
        
              </tbody>
            </table>
          </td>
          <td>
          <table className="menu-category">
              <tbody>
              <tr>
                <img
                  src={attributes.backgroundImage}
                  alt="Image"
                  style={imageStyleCatagory1}

                />
                    <strong>{ItemCatagory5}</strong>
                    {attributes.myItems.catagory5.map((item, index) => (
      <li key={index}>{item[0]} {item[1]}</li>
      
    ))}
                
                
                </tr>
        
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div> */}
		</fragment>
	);
}
