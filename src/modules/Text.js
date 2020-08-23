export const parseTextProp = (type, note) => {
  switch (type) {
    case 'degree':
      return note ? note.d : '';
    case 'pitchClass':
      return note ? note.p : '';
    default:
      return '';
  }
};
