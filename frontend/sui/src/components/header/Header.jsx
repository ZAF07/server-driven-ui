import React from "react";

function Header(props) {
  const {title, active, desc, backgroundColor} = props.component
  const headerComponent = (
    <div style={{"backgroundColor":backgroundColor}}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
  return (
    <div>
      { active && headerComponent }

    </div>
  )
}

export default Header;