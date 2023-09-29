import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./Pages/Pages.css";

import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./context";
import { GlobalContextProvider } from "./Providers";

const queryClient = new QueryClient();

function App() {
  const { setScrolledToBottom, resetScroll, scrolledToBottom } =
    useContext(GlobalContext);

  useEffect(() => {
    console.log(setScrolledToBottom, resetScroll, scrolledToBottom);
    window.addEventListener("scroll", (e) => {
      console.log("scrolling");
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const innerHeight = window.innerHeight;
      console.log(scrollHeight, Math.floor(scrollTop) + innerHeight);
      if (scrollHeight - (scrollTop + innerHeight) < 1) {
        setScrolledToBottom((prev) => !prev);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
