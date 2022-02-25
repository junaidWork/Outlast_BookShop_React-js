import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import BookDetails from "./components/bookDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bookDetails/:id">
            <BookDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
