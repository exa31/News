import React from "react";
import Home from "./components";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      search: 'marvel'
    }
  }

  search = (params) => {
    return this.setState({ search: `${params}` })
  }


  render() {
    console.log(this.state.search)
    return (
      <div className="App">
        <Navbar />
        <Search value={this.state.search} handleSearch={this.search} />
        <Home search={this.state.search} />
      </div>
    );
  }
}
