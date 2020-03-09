import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";
/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {};
    this.state = {
      categories: [],
      products: []
    };
  }
  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
      </AppContext.Provider>
    );
  }
  async componentDidMount() {
    const cats = await axios.get("http://localhost:8000/api/category/");
    const prods = await axios.get("http://localhost:8000/api/product/");
    this.setState({
      categories: cats.data,
      products: prods.data
    });
  }
}
