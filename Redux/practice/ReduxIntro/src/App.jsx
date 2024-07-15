import { useState } from "react";
import "./App.css";
import { combineReducers, legacy_createStore } from "redux";

const AddToCart = "AddToCart";
const SET_THEME = "SET_THEME";
const UPDATE_USER = "UPDATE_USER";

// Theme Reducer
function themeReducer(state = "light-mode", { type, payload }) {
  switch (type) {
    case SET_THEME:
      return payload;
    default:
      return state;
  }
}

// Cart Reducer
function cartReducer(state = [], { type, payload }) {
  switch (type) {
    case AddToCart:
      return [...state, payload];
    default:
      return state;
  }
}
const userState = { username: null, loggedIn: false };
// User Reducer
function userReducer(
  state = userState,
  { type, payload }
) {
  switch (type) {
    case UPDATE_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cart: cartReducer,
  theme: themeReducer,
  user: userReducer,
});

const store = legacy_createStore(rootReducer);

const App = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [userName, setUserName] = useState("");
  function addToCart(text) {
    store.dispatch({ type: AddToCart, payload: text });
  }
  function changeTheme(theme) {
    store.dispatch({ type: SET_THEME, payload: theme });
  }
  function login() {
    store.dispatch({
      type: UPDATE_USER,
      payload: { username: userName, loggedIn: true },
    });
    setUserName("");
  }

  function logout() {
    store.dispatch({
      type: UPDATE_USER,
      payload: { username: "", loggedIn: false },
    });
  }

  store.subscribe(() => {
    console.log(store.getState(), count);
    setCount((prevCount) => prevCount + 1);
  });

  return (
    <>
      <div>
        <pre className="sidebar left-sidebar" id="userSidebar">
          {JSON.stringify(store.getState())}
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

/*
   //  ********************for counter****************************************
    
 const updateCount = "updateCount";
 const Reset = "Reset";
 
 function counterReducer(state = 0, { type, payload }) {
   switch (type) {
     case updateCount:
       return payload;
       case Reset:
       return 0;
     default:
       return state;
   }
 }
 const store = legacy_createStore(counterReducer);
 
 
 function App() {
   
   // ******************************************for counter **********************************************
   
 
   const [count, setCount] = useState(0);
   store.subscribe(() => {
     console.log(store.getState());
     setCount(store.getState());
   });
   return (
     <>
     <div>
     <pre className="sidebar left-sidebar" id="userSidebar">
     Counter Count: {count}
     </pre>
         <div className="counter-content">
           <button
             id="incrementBtn"
             onClick={() =>
               store.dispatch({
                 type: updateCount,
                 // convert it into an integer before increasing
                 payload: store.getState() + 1,
               })
             }
             >
             Increase
             </button>
             <button id="resetBtn" onClick={() => store.dispatch({ type: Reset })}>
             Reset
           </button>
           <button
             id="decrementBtn"
             onClick={() =>
               store.dispatch({
                 type: updateCount,
                 payload: store.getState() - 1,
               })
             }
             >
           Dicrease
           </button>
           </div>
           </div>
           </>
           );
           
           */
