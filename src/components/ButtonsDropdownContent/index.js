import React from 'react';
import './index.css';

/**
 *
 * @dropdown_content
 * items for dropdown color list
 */

const ItemContent = ({
  name,
  color
}) => (
  <div className="drop-down__button-content-wrapper">
    <p className="drop-down__button-content-text">
      {name}
    </p>
    <span
      style={{ backgroundColor: color }}
      className="drop-down__button-content-color"
    />
  </div>
);

export default ItemContent;