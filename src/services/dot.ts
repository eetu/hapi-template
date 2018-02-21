function getDot(id: number) {
  return {
    id,
    dots: '.',
  };
}

function insertDot(dot: Dot) {
  return {
    ...dot,
    id: 1,
  };
}

export {
  getDot,
  insertDot,
};
