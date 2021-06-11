import React, { useState } from 'react'

export default function PopUpBox({ popupfadingclass, name, description, link }) {



  const [closePopUpBox, setClosePopUpBox] = useState(null)

  const ClosePopBox = () => {
    console.log("pop");
    let closePopUpBoxclass = "closePopUpBoxclass"

    setClosePopUpBox("closePopUpBoxclass")

  }



  return (

    <main className="main">
      <div className={`center popup ${popupfadingclass} ${closePopUpBox}`}>
        <div className="icon">
          <i className="fas fa-check-square"></i>
        </div>
        <h1>{name}</h1>
        <div className="title">
          <p>{description}</p>
        </div>

        {/* <div className="btn-group">
          <a href={link}>go</a>
          <a onClick={ClosePopBox} className="bt">gooo</a>


        </div> */}<div class="btn-group">
          <a href={link} class="btn btn-primary">TO See</a>
          <a  onClick={ClosePopBox} class="btn btn-primary">Cancel</a>

        </div>


      </div>

    </main>

  )
}

