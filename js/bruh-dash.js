var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
    // return arr.shift();
    return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    // return arr.pop();
    newArr = arr[arr.length - 1];
    return newArr;
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, pos) {
    // return arr.indexOf(pos);
    for(i = 0; i < arr.length; i++){
      if(arr[i] === pos) {
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, pos) {
    // return arr.lastIndexOf(pos);
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === pos) {
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    arr.pop();
    return arr;
    // for(let i = 0; i < arr.length; i++) {
    //   arr[i] = arr.length;
    //   return arr;
    // }
    
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == 0 || Number.isNaN(arr[i]) || arr[i] == null || arr[i] == false || arr[i] == "" || arr[i] == undefined) {
          arr.splice(i, 1);
          i--;
      }
    }
    return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, ind, end) {
    return arr.slice(ind, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n = 1){
    return arr.splice(n);
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n = 1) {
    return arr.slice(0, arr.length - n);
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n = 1) {
    return arr.slice(0, n);
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n =  1) {
    return arr.splice(arr.length - n);
  },  

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, val, ind, end) {
    if(!ind && !end) {
      arr.fill(val);
    } else {
      for(let i = ind; i < end; i++) {
        arr[i] = val;
      }
    }
    return arr.fill(val, ind, end);
  },

  // removes all given values from an array
  pull: function (arr, ...val) {
    for(let i = 0; i <arr.length; i++) {
      if (val.includes(arr[i])) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr) {
    for(let i = 0; i < 0; i++) {
    }
  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) {
    for(let key in collection) {
      func(collection[key]);
    }
  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
