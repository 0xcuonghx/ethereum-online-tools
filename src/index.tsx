import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page";
import RootPage from "./pages/root-page";
import HomePage from "./pages/home-page";
import PrivateKeyToPublicKey from "./pages/private-key-to-public-key";
import SeedPhraseToPrivateKey from "./pages/seed-phrase-to-private-key";
import GweiCalculator from "./pages/gwei-calculator";
import Keccak256Calculator from "./pages/keccak256-calculator";
import StringToBytes32 from "./pages/string-to-bytes32";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/private-key-to-public-key",
        element: <PrivateKeyToPublicKey />,
      },
      {
        path: "/seed-phrase-to-private-key",
        element: <SeedPhraseToPrivateKey />,
      },
      {
        path: "/gwei-calculator",
        element: <GweiCalculator />,
      },
      {
        path: "/keccak256-calculator",
        element: <Keccak256Calculator />,
      },
      {
        path: "/string-to-bytes32",
        element: <StringToBytes32 />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
