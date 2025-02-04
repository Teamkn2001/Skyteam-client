import AppRoute from "./routes/AppRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
        <ToastContainer />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
