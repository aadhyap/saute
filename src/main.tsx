import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "../styles/index.css";
import { AuthProvider } from "@/providers/AuthProvider";
import { AdminProvider } from "@/providers/AdminProvider";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider theme={theme}>
    <Router>
      <AuthProvider>
        <AdminProvider>
          <App />
        </AdminProvider>
      </AuthProvider>
    </Router>
  </ChakraProvider>
);
