import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import Home from "./features/Home";
import Cart from "features/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div id="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />

            <Route component={NotFound} />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
