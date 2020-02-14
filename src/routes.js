import Home from "./pages/home/Home";
import User from "./pages/user/User";
import Dados from "./pages/dados/Dados";


 const routes = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/user",
        component: User,
        exact: true
    },
    {
        path: "/dados",
        component: Dados,
        exact: true
    }
]
export default routes