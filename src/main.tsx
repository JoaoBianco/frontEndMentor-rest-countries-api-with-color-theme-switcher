import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryCliente = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryCliente}>
      <Suspense fallback={"Loading..."}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>
);
