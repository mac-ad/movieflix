import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Pages/Pages.css";

import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
