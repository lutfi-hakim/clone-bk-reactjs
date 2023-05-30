import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Order from "./pages/order/Order";
import Promo from "./pages/promotion/Promo";
import { Badge, Button, Popover } from "antd";
import { useState } from "react";
import Footer from "./components/Footer/Footer";
function App() {
  const [clicked, setClicked] = useState(false);

  const hide = () => {
    setClicked(false);
  };
  const handleHoverChange = (open) => {
    setClicked(open);
  };

  const clickContent = <div>Your cart is empty.</div>;
  return (
    <div className="App bg-app">
      <Router>
        <nav className="nav-bk">
          <div className="container men">
            <div className="jus-aut">
              <div className="left">
                <div>
                  <Link to="/" style={{ padding: 5 }}>
                    <img
                      src="https://bkdelivery.co.id/static/website/img/logo_2022.38d01a7c7dd3.png"
                      className="logo-bk"
                    />
                  </Link>
                </div>
                <div className="menu-bk">
                  <Link to="/order">
                    <span className="menu-bk-top">Delivery</span>
                    <span className="menu-bk-bt">Order</span>
                  </Link>
                </div>
                <div className="menu-bk">
                  <Link to="/promo">
                    <span className="menu-bk-top">Get Fresh</span>
                    <span className="menu-bk-bt">Promotion</span>
                  </Link>
                </div>
              </div>
              <div className="right">
                <Link to="/login">
                  <span className="menu-bk-bt">Login</span>
                </Link>

                <span className="menu-bk-bt">
                  <Badge count={0} showZero>
                    <Popover
                      style={{
                        width: 800,
                        background: "red",
                      }}
                      content={
                        <div>
                          {clickContent}
                          <a className="btn-cart" onClick={hide}>
                            Order Now
                          </a>
                        </div>
                      }
                      // title="Click title"
                      open={clicked}
                      onOpenChange={handleHoverChange}
                    >
                      <Button type="text" size="small">
                        <img src="https://bkdelivery.co.id/static/website/img/BK_TopCart1x.5b5f4dd7b2a4.png" />
                      </Button>
                    </Popover>
                    {/* <Avatar shape="square" size="large" /> */}
                  </Badge>
                </span>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/promo" element={<Promo />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
