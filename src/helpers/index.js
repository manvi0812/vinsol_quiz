export const arrayAlreadyHasArray = (arr, subarr) => {
  // console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    let checker = false;
    for (var j = 0; j < arr[i].length; j++) {
      // console.log(arr[i][j], subarr[j]);
      if (arr[i][j] === subarr[j]) {
        checker = true;
      } else {
        checker = false;
        break;
      }
    }
    if (checker) {
      return true;
    }
  }
  return false;
};

export const calculate = (a, type, b) => {
  switch (type) {
    case 'Add':
      return a + b;
    case 'Sub':
      return a - b;
    case 'Mul':
      return a * b;
    case 'Div':
      return a / b;
    default:
      return;
  }
};

export const operatorsSign = {
  Add: '+',
  Sub: '-',
  Mul: '*',
  Div: '/'
};
