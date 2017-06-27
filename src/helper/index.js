export default (styles, mergeStyles) => {
  // if(!styles) return null;
  if(!mergeStyles) return styles;
  for(const i in styles) {
    if(mergeStyles[i]) {
      styles[i] += ` ${mergeStyles[i]}`;
    }
  }
  return styles;
};
