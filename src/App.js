import { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import logo from "./logo.svg";
import "./App.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Hello Victor",
      monsters: [],
      searchField:''
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monster react demo app</h1>
        <SearchBox placeholder='Seach for the name of the monster.' handleChange={this.handleChange}/>
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}

export default App;
