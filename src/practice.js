// // import React from "react";
// // import ReactDOM from "react-dom/client";

// // // var test1 = (
// // //   <div>
// // //     <h1>John Doe</h1>
// // //     <p>Some info about me!</p>
// // //     <ol>
// // //       <li>one</li>
// // //       <li>two</li>
// // //     </ol>
// // //   </div>
// // // );

// // // var user = {
// // //   name: "John Doe",
// // //   age: 21,
// // //   location: "New York",
// // //   job: "Banker",
// // // };
// // // var test2 = (
// // //   <div>
// // //     <h1>{user.name}</h1>
// // //     <p>Age: {user.age}</p>
// // //     <p>Location: {user.location}</p>
// // //     <p>Job: {user.job}</p>
// // //   </div>
// // // );

// // function formatNAme(user) {
// //   return user.firstName + " " + user.secondName;
// // }

// // var user = {
// //   firstName: "John",
// //   secondName: "Doe",
// // };

// // var element = (
// //   <div>
// //     <h2>First Name: {user.firstName}</h2>
// //     <h2>Second Name: {user.secondName}</h2>
// //     <h1>{formatNAme(user)}</h1>
// //   </div>
// // );

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(element);

// // // import React from "react";
// // // import ReactDOM from "react-dom/client";

// // // const square = function (x) {
// // //   return x * x;
// // // };

// // // // const root = ReactDOM.createRoot(document.getElementById("root"));
// // // // root.render(element);
// // // console.log(square(3));

// // // const sqArrow = (x) => {
// // //   return x * x;
// // // };
// // // console.log(sqArrow(4));

// // // const sqEx = (x) => x * x;

// // // console.log(sqEx(5));

// // // const getFirstName = (fullName) => {
// // //   return fullName.split(" ")[0];
// // // };

// // // console.log(getFirstName("John Doe"));

// // const addition = (a, b) => {
// //   return a + b;
// // };
// // console.log(addition(2, 3));

// // const customer = {
// //   name: "John Doe",
// //   cities: ["New York", "Denmark", "Bangalore"],

// //   prinitCitiesLived: function () {
// //     console.log(this.name);
// //     console.log(this.cities);

// //     this.cities.forEach((city) => {
// //       console.log(this.name + " has visited " + city);
// //     });
// //   },
// // };

// // customer.prinitCitiesLived();

// // // class User {
// // //   constructor(name = "anonymous", age = 0) {
// // //     this.name = name;
// // //     this.age = age;
// // //   }
// // //   getGreeting() {
// // //     return `Hello, I am ${this.name}`;
// // //   }
// // //   getInfo() {
// // //     return `${this.name} is ${this.age} years old`;
// // //   }
// // // }

// // // class Employee extends User {
// // //   constructor(name, age, ssn) {
// // //     super(name, age);
// // //     this.ssn = ssn;
// // //   }
// // //   ssnNumber() {
// // //     return `Hello`;
// // //   }
// // //   getInfo() {
// // //     let info = super.getInfo();

// // //     info += ` My SSN is ${this.ssn}`;
// // //     return info;
// // //   }
// // // }

// // // const user1 = new Employee("John Doe", 20, 2345);

// // // console.log(user1.ssnNumber());
// // // console.log(user1.getInfo());

// // // const user2 = new Employee();

// // // console.log(user2.ssnNumber());
// // // console.log(user2.getInfo());

// // import React from "react";
// // // import ReactDOM from "react-dom";

// // // let count = 0;

// // // const add = () => {
// // //   count = count + 1;
// // //   renderApp();
// // // };

// // // const minus = () => {
// // //   count = count - 1;
// // //   renderApp();
// // // };

// // // const root = document.getElementById("root");

// // // const renderApp = () => {
// // //   const countingApp = (
// // //     <div>
// // //       <h1>Count: {count}</h1>
// // //       <button onClick={add}>+1</button>
// // //       <button onClick={minus}>-1</button>
// // //     </div>
// // //   );

// // //   ReactDOM.render(countingApp, root);
// // // };

// // // renderApp();

// // import React from "react";
// // import ReactDOM from "react-dom";

// // function getLocation(location) {
// //   if (location) {
// //     return location;
// //   } else {
// //     return "Unknown";
// //   }
// // }

// // var user = {
// //   name: "John Doe",
// //   age: 21,
// //   location: "New York",
// //   job: "Banker",
// // };

// // var test2 = (
// //   <div>
// //     <h1>{user.name ? user.name : "Anonymous"}</h1>
// //     <p>Age: {user.age}</p>
// //     <p>Location: {getLocation(user.location)}</p>
// //     <p>Job: {user.job}</p>
// //   </div>
// // );

// // var root = document.getElementById("root");

// // ReactDOM.render(test2, root);

// import React from "react";
// import ReactDOM from "react-dom";
// // import Stateless from "./StatelessApp";
// // import Statefull from "./StatefullApp";
// // // class Books extends React.Component {
// // //   render() {
// // //     return <h1>This is the collection of all the books I have read!</h1>;
// // //   }
// // // }

// // // ReactDOM.render(<Books />, document.getElementById("root"));

// // // class Welcome extends React.Component {
// // //   render() {
// // //     return (
// // //       <h1>
// // //         Hello, {this.props.name} and I am {this.props.age} years old.
// // //       </h1>
// // //     );
// // //   }
// // // }

// // // ReactDOM.render(
// // //   <Welcome name="Lavan" age="20" />,
// // //   document.getElementById("root")
// // // );

// // // class Books extends React.Component {
// // //   constructor() {
// // //     super();
// // //     this.state = {
// // //       author: "J.K. Rowling",
// // //     };
// // //   }
// // //   render() {
// // //     return <h2>The author of all these books are {this.state.author}</h2>;
// // //   }
// // // }

// // // ReactDOM.render(<Books />, document.getElementById("root"));

// // class Books extends React.Component {
// //   render() {
// //     return <h1>My Book collection</h1>;
// //   }
// // }

// // class BookShelf extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>This Book shelf is for</h1>
// //         <Books />
// //       </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<BookShelf />, document.getElementById("root"));

// // ReactDOM.render(<Statefull />, document.getElementById("root"));

// // class Bike extends React.Component {
// //   render() {
// //     return (
// //       <h2>
// //         The manufacturer of my bike is {this.props.brand.maker} and model of my
// //         bike is {this.props.brand.model}
// //       </h2>
// //     );
// //   }
// // }

// // class Collection extends React.Component {
// //   render() {
// //     const bikeinfo = { maker: "Hero", model: "X-Pulse 200" };
// //     return (
// //       <div>
// //         <h1>This is my bike</h1>
// //         <Bike brand={bikeinfo} />
// //       </div>
// //     );
// //   }
// // }

// // const myBook = <Books author="J.K. Rowling" />;

// class Books extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       book: "Harry Potter",
//       author: "J.K. Rowling",
//       pages: "200",
//       year: "1997",
//     };
//   }

//   changeBook = () => {
//     this.setState({ book: "The casual Vacancy", year: "2001", pages: "300" });
//   };

//   render() {
//     return (
//       <div>
//         <h1>This is my book "{this.state.book}" and its details are</h1>
//         <p>
//           Author - {this.state.author}, number of pages - {this.state.pages},
//           Year of release - {this.state.year}
//         </p>
//         <button onClick={this.changeBook}>Change Book</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Books author="J.K. Rowling" />,
//   document.getElementById("root")
// );

// class Clock extends React.Component {
//   //   constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //       date: new Date(),
//   //     };
//   //   }

//   //   componentDidMount() {
//   //     this.timerId = setInterval(() => this.tick(), 1000);
//   //   }
//   //   componentWillUnmount() {
//   //     clearInterval(this.timerId);
//   //   }

//   //   tick() {
//   //     this.setState({
//   //       date: new Date(),
//   //     });
//   //   }
//   //   render() {
//   //     return (
//   //       <div>
//   //         <h1>Hello World!</h1>
//   //         <h2>It is {this.state.date.toLocaleTimeString()}</h2>
//   //       </div>
//   //     );
//   //   }
//   // }

//   // ReactDOM.render(<Clock />, document.getElementById("root"));

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "",
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Your favorite color has been submitted: " + this.state.value);
//     event.preventDefault();
//   }
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite color:
//           <select
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           >
//             <option value="black">Black</option>
//             <option value="blue">Blue</option>
//             <option value="red">Red</option>
//             <option value="white">White</option>
//           </select>
//         </label>
//         <input type="Submit" value="Submit"></input>
//       </form>
//     );
//   }
// }
