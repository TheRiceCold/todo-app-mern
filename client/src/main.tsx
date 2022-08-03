import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import TodoProvider from "./contexts/TodoProvider";
import App from "./App";
import "./index.css";

const root = document.getElementById("root") as HTMLElement;
const queryClient = new QueryClient();

createRoot(root)
  .render( 
    <StrictMode> 
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false}/>
        <TodoProvider>
          <App /> 
        </TodoProvider>
      </QueryClientProvider>
    </StrictMode>
  );
