function filterEven(arr) {

    if (Array.isArray(arr) && arr.length>0) {

      var lastElement = arr.pop();
      if (lastElement % 2 === 0){

        var filtered = filterEven(arr);

        filtered.push(lastElement);
        return filtered;

      }else{

        return filterEven(arr);
      }
    } else {
      return arr;
    }  
  }
  var res = filterEven([2,12,5,7,90,45,94,5,14]);
  
  console.log(res);
