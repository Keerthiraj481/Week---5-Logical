`use strict`;

// 11. Write a JavaScript program to find all the unique values in a set of numbers.

const uniqueNum = (arr) => {
  let uniqueArr = [];
  arr.forEach((ele) => {
    if (!uniqueArr.includes(ele)) {
      uniqueArr.push(ele);
    }
  });
  return uniqueArr;
};

console.log(`Problem No. : 11`);
console.log(uniqueNum([1, 2, 2, 3, 4, 4, 5]));
console.log(uniqueNum([1, 2, 3, 4, 5]));
console.log(uniqueNum([1, -2, -2, 3, 4, -5, -6, -5]));

// 12. Write a JavaScript program to check if a given number is positive, negative, or zero.

const checkNumber = (num) => {
  if (num > 0) {
    return "Positive";
  } else if (num === 0) {
    return "Zero";
  } else {
    return "Negative";
  }
};

console.log(`Problem No. : 12`);
console.log(checkNumber(5));
console.log(checkNumber(-2));
console.log(checkNumber(0));

// 13. Write a JavaScript program to find the sum of all the numbers in an array.

const findSum = (arr) => {
  return arr.reduce((acc, ele) => (acc += ele), 0);
};

console.log(`Problem No. : 13\n${findSum([1, 2, 3, 4, 5])}`);

// 14. Write a program that converts a time in 12-hour format to 24-hour format.

const convertTime = (str) => {
  let finalStr = str.slice(2, str.length - 2);
  let numConversion = str.slice(0, 2);
  if (str.includes("PM")) {
    if (numConversion.includes("12")) {
    } else {
      numConversion = Number(numConversion) + 12;
      numConversion = String(numConversion);
    }
  }
  finalStr = numConversion + finalStr;
  return finalStr;
};

console.log(`Problem No. : 14\n${convertTime("03:45 PM")}`);

// 15. Create a &quot;Scroll to Top&quot; button that appears when the user scrolls down and takes them to the top of the page when clicked.

function scrollToTop() {
  document.documentElement.scrollTop = 0;
}

/* 16. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the
results. */
const sortThreeNum = (a, b, c) => {
  let arr = [];
  if (a > b) {
    if (a > c) {
      arr.push(a);
      if (b > c) {
        arr.push(b);
        arr.push(c);
      } else {
        arr.push(c);
        arr.push(b);
      }
    } else if (c > b) {
      arr.push(c);
      arr.push(a);
      arr.push(b);
    }
  } else if (b > c) {
    if (b > a) {
      arr.push(b);
      if (a > c) {
        arr.push(a);
        arr.push(c);
      } else {
        arr.push(c);
        arr.push(a);
      }
    } else if (a > c) {
      arr.push(a);
      arr.push(b);
      arr.push(c);
    }
  } else if (c > a) {
    if (c > b) {
      arr.push(c);
      if (a > b) {
        arr.push(a);
        arr.push(b);
      } else {
        arr.push(b);
        arr.push(a);
      }
    } else if (b > a) {
      arr.push(b);
      arr.push(c);
      arr.push(a);
    }
  }
  return arr;
};

console.log(
  `Problem No. : 11\n${sortThreeNum(
    0,
    -1,
    4
  )}\n
);
alert(Problem No. : 11\n${sortThreeNum(0, -1, 4)}`);

//17. Write a JavaScript program to reverse a string without using the built-in reverse() method.

const reverseString = (str) => {
  let revStr = "";
  for (let i = 0; i < str.length; i++) {
    revStr = str[i] + revStr;
  }
  return revStr;
};
console.log(`Problem No. : 17\n${reverseString("Hello")}`);

// 18. Write a program that takes an object, creates a copy of it, and extends it with new properties using the spread syntax.

const extendObject = (obj) => {
  let copyObj = { ...obj };
  copyObj["city"] = "New York";
  copyObj["profession"] = "Engineer";
  console.log(copyObj);
};
console.log(`Problem No. : 18`);
extendObject({ name: "john", age: 30 });

/* 19. Write a program that validates user input and provides feedback or defaults.. */

function validate() {
  const errorMsg = document.querySelector(".validation-err");
  const id = document.getElementById("user-input");
  if (id.value === "") {
    errorMsg.innerText = `No Valid Input Provided`;
  } else {
    errorMsg.innerText = ``;
  }
}

// 20 Write a JavaScript conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.

const productThreeNo = (one, two, three) => {
  let num = one * two * three;
  if (num > 0) {
    return `The sign is +`;
  } else {
    return `The sign is -`;
  }
};

console.log(`Problem No. : 18\n${productThreeNo(3, -7, 2)}`);
