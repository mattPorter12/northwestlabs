import React from "react";
import axios from "axios";
import AppContext from "./context";
import App from "./App";
import {produce} from 'immer'
/** The context provider for our app */
export default class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.actions = {
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart, 
      getCartCount: this.getCartCount, 
      getCartTotal: this.getCartTotal,
      clearCart: this.clearCart
    };
    this.state = {
      categories: [],
      products: [],
      cart: {}, 
      cartCount: 0,
      cartTotal: 0,
    
    };
  }
  render() {
    return (
      <AppContext.Provider value={{ ...this.state, ...this.actions }}>
        <App />
      </AppContext.Provider>
    );
  }


  addToCart = pid => {
    this.setState(produce(this.state, draft => {
        // set this item in the cart
        draft.cart[pid] = (draft.cart[pid] || 0) + 1

        // count the items in the cart
        let count = 0
        for (const qty of Object.values(draft.cart)) {
            count += qty
        }
        draft.cartCount = count
    }))
}

  removeFromCart = pid => {
    this.setState(state => produce(state, draft => {
      if (draft.cart.hasOwnProperty(pid))
      {
        delete draft.cart[pid]
        draft.cartCount -=1
      }
    }))
  }
  
  getCartCount = pid => {
    this.setState(state => produce(state, draft =>{
 
    let entries = Object.values(draft.cart)
      draft.cartCount = 0;
      for (let item of entries)
      {
        draft.cartCount +=item
      }
    }))
  }

  getCartTotal = () => {
    let total = 0.0
    for (const [pid, qty] of Object.entries(this.state.cart)) {
        const product = this.state.products[pid]
        if (product) {
            total += (qty * product.price)
        }
    }
    return total
  }
  clearCart = () => {
    this.setState({cart: {}}) 
    this.setState({cartCount: 0})
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





























