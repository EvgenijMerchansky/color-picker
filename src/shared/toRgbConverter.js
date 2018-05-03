const convertHex = (hex) => {
  const updatedHex = hex.replace('#','');
  const r = parseInt(updatedHex.substring(0,2), 16),
        g = parseInt(updatedHex.substring(2,4), 16),
        b = parseInt(updatedHex.substring(4,6), 16);
  
  return [r,g,b];
};

export default convertHex;