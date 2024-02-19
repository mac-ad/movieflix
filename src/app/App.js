import { BrowserRouter, Routes, useLocation } from "react-router-dom";
import "./App.css";
import "./Pages/Pages.css";

import Router from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { Suspense, useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context";

import { register } from "swiper/element/bundle";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
const Loading = React.lazy(() => import("./components/Loading"));

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      {/* <QueryClientProvider client={queryClient}> */}
      <ScrollToTop />
      <Router />
      {/* </QueryClientProvider> */}
    </BrowserRouter>
  );
}

export default App;
