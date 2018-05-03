import React, {Fragment} from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import toRGB from '../../shared/toRgbConverter';

import './index.css';

export function DropDownButton({
  colors,
  
  changeColor,
}) {
  return (
    <DropdownButton
      className="drop-down__button-caret"
      title={
        <i className="fas fa-caret-down"/>
      }
      id="dropdown-basic"
      bsStyle="default"
    >
      {colors.map(item => ( 
        <MenuItem 
          className="drop-down__button-item" 
          value={item.hex} 
          key={item.luminance} 
          onClick={() => changeColor(toRGB(item.hex))} 
          children={ 
            <ItemContent 
              name={item.name.toUpperCase()} 
              color={item.hex} 
            />
          } 
        />
      ))}
    </DropdownButton>
  )
}

function ItemContent({ name, color }) { // in separate component!
  return (
    <div className="drop-down__button-content-wrapper">
      <p className="drop-down__button-content-text">
        {name}
      </p>
      <span
        style={{ backgroundColor: color }}
        className="drop-down__button-content-color"
      />
    </div>
  )
}

export default DropDownButton;