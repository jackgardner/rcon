module.exports = (x) => {

  var _data = {};

  return {
    add: (key, data) => {

      _data[key] = data;
      console.log(_data);
    },
    get: (key) => {
    	return _data[key];
    }
  }
}
