module.exports = (x) => {

  var _data = {};

  return {
    add: (key, data) => {
      _data[key] = data;
    },
    get: (key) => {
    	return _data[key];
    },
    all: () => { return _data; }
  }
}
