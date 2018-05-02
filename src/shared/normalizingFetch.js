async function normalizingFetch (colors) {
  const mappedColors = colors.map(el => el[0] === '#' ? el.substr(1, 6) : el).join(',');
  const getColors = await fetch(`https://color-names.herokuapp.com/v1/${mappedColors}`);
  
  return await getColors.json();
}

export default normalizingFetch;