import { ChakraProvider, theme } from "@redpanda-data/ui";
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
import GroupDemo from "./GroupDemo.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} resetCSS={false}>
      {/* <App /> */}
      <GroupDemo />
    </ChakraProvider>
  </React.StrictMode>
);
