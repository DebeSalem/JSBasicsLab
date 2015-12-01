(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        // i will be an integer.
        return i%2 == 0;

        // Return true if it's even, and false if it isn't.
    };

    JS_BASICS.getFileExtension = function(str) {
        // str will be a string, but it may not have a file extension.
        if (str.indexOf('.') != -1)
        return str.split('.').pop();
        else
        return false;
        // Return the file extension (with no period) if it has one, otherwise false
    };

    JS_BASICS.longestString = function(arr) {
        // arr will be an array.


var result = "";
for (var i = 0; i < arr.length; i++) {
    if ((typeof arr[i] === "string") && (arr[i].length > result.length)) {
        result = arr[i];
    }
}
return result;

        // Return the longest string in the array


    };

    JS_BASICS.reverseString = function(str) {
        // str will be an string
        var o = '';
          for (var i = str.length - 1; i >= 0; i--)
            o += str[i];
          return o;
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str) {
        // str will be an string
    var removeChar = str.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    var checkPalindrome = removeChar.split('').reverse().join('');
    if(removeChar === checkPalindrome)
    {
       return true;
    }
    else
    {
       return false;
     }
         // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        return arr.reduce(function fn(a, b) {
           if (Array.isArray(b)) {
               return b.reduce(fn, a);
           } else if (b === Math.round(b)) {
               return a + b;
           }

           return a;
       }, 0);
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));
