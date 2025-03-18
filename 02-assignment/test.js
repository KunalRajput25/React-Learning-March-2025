class A {
  // 1  properties/variables

  name; //this is only declration
  surname = " "; // this is declration and initialization
  address = "Ghaziabad"; // this is declration and initialization
  // 2 constructor

  constructor() {
    // the role of the constructor is to initialize the properties
    // this.name
    this.name = "Amit";
    this.surname = "Kumar";
    this.address = "Ghaziabad";
  }

  // 3 methods

  info() {
    console.log(this.name, this.surname, this.address); //this is an internal object
  }
}

let obj = new A();
obj.info();

// class b components

class B extends A {
  // 1  properties/variables
  friend;
  friend2 = "";
  state;
  // 2 constructor

  constructor() {
    super(); // this is used to call the parent class constructor
    this.friend = "Rahul";
    this.friend2 = "Dinesh";
    this.friend3 = "Rohit";
  }

  // 3 methods

  info2() {
    console.log(this.friend, this.friend2, this.friend3); //this is an internal object
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    console.log(this.state);
  }
}

let obj1 = new B();
obj1.info2();
obj1.setState({
  name: "dinkle",
  surname: "khanna",
  address: "mumbai",
});
obj1.getState();
