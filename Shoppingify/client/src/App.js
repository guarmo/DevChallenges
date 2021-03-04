import "./tailwind.output.css";
import "./app.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import Items from "./components/items/Items";
import History from "./components/history/History";
import Statistics from "./components/statistics/Statistics";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen max-h-screen flex">
        <Router>
          <LeftSidebar />
          <Switch>
            <Route exact path="/" component={Items}></Route>
            <Route exact path="/history" component={History}></Route>
            <Route exact path="/statistics" component={Statistics}></Route>
          </Switch>
        </Router>
        <RightSidebar />
      </div>
    </Provider>
  );
}

export default App;
