module.exports = (manager) => {
  return {
      testing: (data) => {
	    console.log("Hit test function and got:");
	    console.log(data);
	    manager.add("testing");
	  }
  }
}
