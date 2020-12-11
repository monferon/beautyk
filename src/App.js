import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Calendar from "./components/Calendar/Calendar";
import { BrowserRouter, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/profile" component={Profile}></Route>
          <Route path="/calendar" component={Calendar}></Route>
          <Route path="/settings" component={Settings}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
