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

const workHours = (start, end, meeting, durance) => {
  const totalMinutes = [];

  [start, end, meeting].map((incomeTime) => {
    const arrayNum = incomeTime.split(':').map((item) => Number(item));
    totalMinutes.push(arrayNum[0] * 60 + arrayNum[1]);
  });

  const startMinutesWork = totalMinutes[0],
    endMinutesWork = totalMinutes[1],
    endMinutesMeeting = totalMinutes[2] + durance;

  if (endMinutesMeeting > startMinutesWork && endMinutesMeeting < endMinutesWork) {
    return true;
  }
  return false;
};

workHours('15:30', '18:00', '14:00', 60);

