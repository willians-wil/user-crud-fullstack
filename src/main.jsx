import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import Home from "./pages/Home";
import { RouterProvider } from "react-router-dom";
import router from "./routes.jsx"; //importar pois é o arquivo aonde está as telas path e name no route.jsx
import { GlobalStyles } from "./styles/GlobalStyles.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router} />{" "}
    {/*Importar o router={router}  após o routerProvider*/}
    <GlobalStyles />
  </StrictMode>
);
