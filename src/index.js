import React from "react";
import ReactDom from "react-dom";

// import App from "./App";
// import App1 from "./App.1";

// class Main extends React.Component {
//   render() {
//     return <h1 style={{ color: "red", textAlign: "center" }}>Welcome to</h1>;
//   }
// }

// class Second extends React.Component {
//   render() {
//     return (
//       <h1 style={{ color: "blue", textAlign: "center", padding: "1rem" }}>
//         Sakthivel
//       </h1>
//     );
//   }
// }
// class Thrid extends React.Component {
//   render() {
//     return (
//       <div
//         style={{
//           background: "hotpink",
//           border: "none",
//           borderRadius: "15px",
//           boxShadow: "4px 6px 10px 10px black",
//           cursor: "pointer",
//         }}
//       >
//         <App1 name="sasi" city="Namakkal" />
//         <Main />
//         <Second />
//         <App />
//       </div>
//     );
//   }
// }
class Sakthi extends React.Component {
  constructor() {
    super();
    this.state = { name: "counter", count: 10 };
  }
  Change = () => this.setState({ count: this.state.count + 1 });
  reset = () => this.setState({ count: 10 });
  Decress = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          background: "skyblue",
          border: "none",
          boxShadow: "3px 4px 10px black",
          borderRadius: "10px",
        }}
      >
        <h2>wellcome to {this.state.name}</h2>

        <p>Count {this.state.count}</p>
        <br />
        <br />
        <button
          type="button"
          onClick={this.Change}
          style={{
            background: "green",
            fontWeight: "bold",
            padding: "15px",
            borderRadius: "10PX",
            cursor: "pointer",
            border: "none",
          }}
        >
          Incress
        </button>
        <button
          type="button"
          onClick={this.reset}
          style={{
            background: "yellow",
            margin: "1rem",
            fontWeight: "bold",
            padding: "15px",
            borderRadius: "10PX",
            cursor: "pointer",
            border: "none",
          }}
        >
          Reset
        </button>
        <button
          type="button"
          onClick={this.Decress}
          style={{
            background: "red",
            fontWeight: "bold",
            padding: "15px",
            borderRadius: "10PX",
            cursor: "pointer",
            border: "none",
          }}
        >
          Decress
        </button>
      </div>
    );
  }
}

ReactDom.render(<Sakthi />, document.getElementById("root"));
