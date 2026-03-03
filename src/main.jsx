import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ProductContext from "./ProductContext.jsx";  // Products provider
import CartContext from "./CartContext.jsx";        // Cart provider
import UIcontext from "./UIContext.jsx";            // UI provider

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductContext>
      <CartContext>
        <UIcontext>
          <App />
        </UIcontext>
      </CartContext>
    </ProductContext>
  </BrowserRouter>
);