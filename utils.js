const functions = {
  search: function (array, searchvalue) {
    return array.find((x) => x === searchvalue);
  },

  isPalindrome: function (value) {
    const re = /[\W_]/g;
    const lowRegStr = value.toLowerCase().replace(re, "");
    const reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
  },
};

export default functions;
