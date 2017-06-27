export default (defaultStyles, mergeStyles) => {
  const {...styles} = defaultStyles;
  if(!mergeStyles) return styles;
  for(const i in defaultStyles) {
    if(mergeStyles[i]) {
      styles[i] += ` ${mergeStyles[i]}`;
    }
  }
  return styles;
};
