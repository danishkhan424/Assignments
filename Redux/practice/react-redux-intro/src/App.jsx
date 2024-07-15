import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = "AddToCart";
const SET_THEME = "SET_THEME";
const UPDATE_USER = "UPDATE_USER";

const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  function addToCart(text) {
    dispatch({ type: AddToCart, payload: text });
  }
  function changeTheme(theme) {
    dispatch({ type: SET_THEME, payload: theme });
  }
  function login() {
    dispatch({
      type: UPDATE_USER,
      payload: { username: userName, loggedIn: true },
    });
    setUserName("");
  }

  function logout() {
    dispatch({
      type: UPDATE_USER,
      payload: { username: "", loggedIn: false },
    });
  }

  return (
    <>
      <div>
        <pre className="sidebar left-sidebar" id="userSidebar">
          {JSON.stringify(state)}
        </pre>
        <div className="main-content">
          <div className="theme-switcher">
            <button
              id="lightModeBtn"
              onClick={() => {
                changeTheme("light-mode");
              }}
            >
              Light Mode
            </button>
            <button
              id="darkModeBtn"
              onClick={() => {
                changeTheme("dark-mode");
              }}
            >
              Dark Mode
            </button>
          </div>
          <div className="cart-adder">
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => addToCart(input)}>Add to cart</button>
          </div>
          <div className="login-logout">
            <input
              type="text"
              placeholder="Login"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <button id="loginBtn" onClick={login}>
              Login
            </button>
            <button id="logoutBtn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
