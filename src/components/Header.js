import React from 'react'

function Header ({onDarkModeClick, isDark}) {
    
  return (
    <div>
        <h2>Shopster</h2>
        <button  onClick={onDarkModeClick}>{isDark ? "Dark" : "Light"} Mode</button>
    </div>
  )
}

export default Header;