import React from 'react';

// This component has a logo on the lefthand side of the screen. it takes in its UI data as props

function LeftLogoNav(props) {

  return (
    <div style={{"display":"flex"}}>
      <p>Logo Left</p>
      <h3>App Header</h3>
      <p>Hamburger nav</p>

    </div>
  )
}

export default LeftLogoNav;