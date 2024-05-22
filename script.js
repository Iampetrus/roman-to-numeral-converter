const form = document.getElementById('form');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const convertToRoman = num => {
  const romanNumerals = [
    { symbol: 'M', value: 1000 },
    { symbol: 'CM', value: 900 },
    { symbol: 'D', value: 500 },
    { symbol: 'CD', value: 400 },
    { symbol: 'C', value: 100 },
    { symbol: 'XC', value: 90 },
    { symbol: 'L', value: 50 },
    { symbol: 'XL', value: 40 },
    { symbol: 'X', value: 10 },
    { symbol: 'IX', value: 9 },
    { symbol: 'V', value: 5 },
    { symbol: 'IV', value: 4 },
    { symbol: 'I', value: 1 }
  ];

  let result = '';

  for (const { symbol, value } of romanNumerals) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
};

/*
const convertToRoman = num => {
  const ref = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  const res = [];

  ref.forEach(function (arr) {
    while (num >= arr[1]) {
      res.push(arr[0]);
      num -= arr[1];
    }
  });

  return res.join('');
};
*/

const isValid = (str, int) => {
  let errText = '';

  if (!str || str.match(/[e.]/g)) {
    errText = 'Please enter a valid number.';
  } else if (int < 1) {
    errText = 'Please enter a number greater than / equal to 1 (less than / equal to 3999).';
  } else if (int > 3999) {
    errText = 'Please enter a number less than / equal to 3999 (greater than / equal to 1).';
  } else {
    // No errors detected
    return true;
  }

  // Handle error text and output styling
  output.innerText = errText;
  output.classList.add('alert');

  return false;
};

const clearOutput = () => {
  output.innerText = '';
  output.classList.remove('alert');
};

form.addEventListener('submit', e => {
  e.preventDefault();
  updateUI();
});

convertButton.addEventListener('click', () => {
  updateUI();
});

const updateUI = () => {
  const numStr = document.getElementById('number').value;
  const int = parseInt(numStr, 10);

  output.classList.remove('hidden');

  clearOutput();

  if (isValid(numStr, int)) {
    output.innerText = convertToRoman(int);
  }
};


