import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "../components/WelcomePage";
import LoginPage from "../components/LoginPage";
import Register from "../components/Register";
import DashBoard from "../components/DashBoard";
import AddExpensePopup from "../components/AddExpensePopup.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element:<WelcomePage />
    },

    {
        path:"/welcome_page",
        element: <WelcomePage />
    },

    {
        path:"/login",
        element: <LoginPage />
    },

    {
        path:"/register",
        element: <Register />
    },

    {
        path:"/dashboard",
        element: <DashBoard />
    },
    {
        path:"/addExpense",
        element: <AddExpensePopup />
    }
]);

export default router;