const isValidMaxLength = (str, length) => {
  if (str.length <= length) {
    return true;
  }
  return false;
};

isValidMaxLength('dfdfdg', 6);

const isPalindrome = (str) => {
  const normalizeStr = str.replaceAll(' ', '').toLowerCase();
  let result = '';

  for (let i = normalizeStr.length - 1; i >= 0; i--) {
    result += normalizeStr[i];
  }

  if (result === normalizeStr) {
    return true;
  }
  return false;
};

isPalindrome('Довод');

const extractNumber = (str) => {
  str = str.toString();
  const array = [];

  for (let i = 0; i < str.length; i++) {
    const extraction = parseInt(str[i], 10);

    if (!Number.isNaN(extraction)) {
      array.push(extraction);
    }

    if (array.length === 0) {
      return NaN;
    }
  }

  return array.join('');
};

extractNumber('1 кефир, 0.5 батона');
