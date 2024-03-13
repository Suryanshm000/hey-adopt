import { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SearchParams from "./SearchParams";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Header from './Header';

const App = () => {
  const theme = useState("darkblue");
  
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>  
          <Header />
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<StrictMode> <App /> </StrictMode>, document.getElementById("root"));




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
