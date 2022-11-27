import { 
    createBrowserRouter, 
    RouterProvider, 
    Route, 
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element:<Home />
    },
    {
        path: '/error',
        element: <ErrorPage />
    },
])

