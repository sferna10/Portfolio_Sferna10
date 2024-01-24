import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white 'id='bioButton'>
      <a
      href="./images/Silvia's Resume (1).pdf"
      download="Silvia_resume.pdf"
      target="blank"
    >
      Get my resume
    </a>
   </button>
        
      </div>
    );
  }
}

export default Footer;





