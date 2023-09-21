import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Pages/Pages.css";

import Router from "./routes";

function App() {
  // console.log(process.env.REACT_APP_API_KEY);

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
