const filtered = (allowed, items) => {
  return Object.keys(items)
    .filter(key => allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = items[key];
      return obj;
    }, 
  {});
}

export default filtered;