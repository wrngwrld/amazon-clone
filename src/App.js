import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header.js";
import Cart from "./components/Cart.js";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { db } from "./firebase";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const getCartItems = () => {
    db.collection("cartitems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));

      setCartItems(tempItems);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  console.log(cartItems);

  return (
    <Router>
      <Container>
        <Header />

        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div``;
