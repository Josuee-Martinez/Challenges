let object = {
  name : 'josue', 
  lastName : 'martinez'
}

let newObject = Object.keys(object).reduce((obj, key) => {
  obj[object[key]] = key;
  return obj;
}, {});

console.log(newObject);