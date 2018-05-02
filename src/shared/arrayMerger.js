const immutableMerge = (value, index, data) => {
  value[index] = data;
  
  return [...value];
};
 
export default immutableMerge;