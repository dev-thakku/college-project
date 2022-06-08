const formatType = (type) => {
  switch (type) {
    case 'notes':
      return 'Notes';

    case 'lab-manual':
      return 'Lab Manual';

    case 'questions':
      return 'Question Papers';

    default:
      return type;
  }
};

const formater = { formatType };

export default formater;