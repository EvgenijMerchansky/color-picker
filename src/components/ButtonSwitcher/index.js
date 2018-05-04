import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

import ItemContent from '../ButtonsDropdownContent';

import toRGB from '../../shared/toRgbConverter';

import './index.css';

/**
 *
 * @dropdown
 * module for choose color in dropped color list
 */

const DropDownButton = ({
  colors,
  
  changeColor,
}) => (
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
);


export default DropDownButton;