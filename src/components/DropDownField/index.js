import React from 'react';
import './index.css';

export function DropDownField({
  color,
  defaultColor
}) {
  return (
    <div className="drop-down__field">
      <h5>{color.hex || defaultColor[0].hex}</h5>
    </div>
  )
}

export default DropDownField;