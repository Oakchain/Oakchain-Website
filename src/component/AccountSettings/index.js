import React, { useState, useRef } from 'react'
import { Modal } from 'reactstrap'
import upload from '../../assets/images/userP/upload.svg'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fatimes from '../../assets/images/userP/fatimes.svg'
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
const AccountSettings = ({ isOpen, toggle }) => {
  const fileInputRef = useRef(null); // Reference to the file input

  // State to hold the image URL
  const [imageURL, setImageURL] = useState('');

  // Function to handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first selected file
    if (file) {
      // Read the file as a data URL and set the image URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to trigger file input click when the custom button is clicked
  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Modal
      isOpen={isOpen}
      toggle={toggle} className='modal-dialog-centered'
      modalClassName='oak-modal__card'
    >
      <section className='desktopView'> <div className='accountTop'>
        <h3>Account Settings</h3>
        <button onClick={toggle}>
          <img src={fatimes} alt='times' />
        </button>
      </div>
        <div className='accountBody'>
          <h1 className='upLoad'>Upload Avatar</h1>
          <div className='profileImage'>
            {/* Display the image */}
            <img src={imageURL} alt="" />

            {/* Hidden file input, will be triggered by the custom button */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*" // Specify accepted file types (images only)
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the file input
            />

            {/* Custom button that visually looks like a file input */}
            <button className='uBtn' onClick={handleClick}><img src={upload} alt=''></img></button>
          </div>
          <h1 className='recomm'>Recommended size is 256x256px</h1>
          <h1 className='username'>Username</h1>
          <input id='inPut' placeholder='Enter your username'></input>
          <h1 className='username'>Ethereum address</h1>
          <input id='eth' placeholder='0x1B191b208666Dd7584fE3A04556Ff195Fe14FFEf'></input>
          <div className='socialCon'><h1>Twitter</h1>  <FontAwesomeIcon className='brands' icon={faTwitter} /></div>
          <div className='socialConne'><input placeholder='Connect your Twitter to access all campaigns'></input> <button>Connect</button></div>

          <div className='socialCon'><h1>Discord</h1>  <FontAwesomeIcon className='brands' icon={faDiscord} /></div>
          <div className='socialConne'><input placeholder='Connect your Discord to access all campaigns'></input> <button>Connect</button></div>

          <h1 className='delete'>Delete Account</h1>
          <div className='deleteCon'><h1>This action cannot be undone. This will permanently delete
            your entire account on this platform</h1> <button>Delete Account</button></div>
        </div></section>


      <section className='mobileView'>

        <div className='accountTop'>
          <h3>Account Settings</h3>
          <button onClick={toggle}>
            <img src={fatimes} alt='times' />
          </button>
        </div>
        <div className='accountBody'>
          <h1 className='upLoad'>Upload Avatar</h1>
          <div className='profileImage'>
            {/* Display the image */}
            <img src={imageURL} alt="" />

            {/* Hidden file input, will be triggered by the custom button */}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*" // Specify accepted file types (images only)
              onChange={handleImageChange}
              style={{ display: 'none' }} // Hide the file input
            />

            {/* Custom button that visually looks like a file input */}
            <button className='uBtn' onClick={handleClick}><img src={upload} alt=''></img></button>
          </div>
          <h1 className='recomm'>Recommended size is 256x256px</h1>
          <h1 className='username'>Username</h1>
          <input id='inPut' placeholder='Enter your username'></input>
          <h1 className='username'>Ethereum address</h1>
          <input id='eth' placeholder='0x1B191b208666Dd7584fE3A04556Ff195Fe14FFEf'></input>
          <div className='socialCon'><h1>Twitter</h1>  <FontAwesomeIcon className='brands' icon={faTwitter} /></div>
          <div className='socialConne'><input placeholder='Connect your Twitter to access all campaigns'></input> <button>Connect</button></div>

          <div className='socialCon'><h1>Discord</h1>  <FontAwesomeIcon className='brands' icon={faDiscord} /></div>
          <div className='socialConne'><input placeholder='Connect your Discord to access all campaigns'></input> <button>Connect</button></div>

          <h1 className='delete'>Delete Account</h1>
          <div className='deleteCon'><h1>This action cannot be undone. This will permanently delete
            your entire account on this platform</h1> <button>Delete Account</button></div>
        </div>
      </section>

    </Modal >
  )
}

export default AccountSettings