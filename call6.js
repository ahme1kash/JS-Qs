function SetUsername(username) {
    // complex DB calls
    this.username = username;
    return username;
  }
  
  function createUser(username, email, password) {
    SetUsername.call(this, username); // Using call
  
    this.email = email;
    this.password = password;
  }
  
  const user = {};
  
  const setUsernameBound = SetUsername.bind(user); // Using bind
  
  setUsernameBound("chai");
  // console.log(user); // Output: { username: "chai" }
  
  createUser.call(user,'John', "john@example.com", "password");
  console.log(user); // Output: { username: "john", email: "john@example.com", password: "password" }
  