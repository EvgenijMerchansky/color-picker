import React from 'react';
import './index.css';

import toHex from '../../shared/toHexConverter';

export function DropDownField({
  color,
}) {
  return (
    <div className="drop-down__field">
      <h5>{toHex(...color)}</h5>
    </div>
  )
}

export default DropDownField;