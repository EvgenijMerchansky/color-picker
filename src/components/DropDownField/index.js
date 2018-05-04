import React from 'react';
import './index.css';

import toHex from '../../shared/toHexConverter';

/**
 *
 * @text_field
 * module for render color name
 */

export function DropDownField({
  color,
}) {
  return (
    <div className="drop-down__field">
      {toHex(...color)}
    </div>
  )
}

export default DropDownField;