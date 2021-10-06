import RemindsPageContainer from "../pages/RemindsPage/RemindsPageContainer/RemindsPageContainer";
import TargetsPage from "../pages/TargetsPageContainer/TargetsPageContainer";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
const routesConfig = [
  {
    path: "/reminds",
    exact: true,
    component: RemindsPageContainer,
  },
  {
    path: "/targets",
    exact: true,
    component: TargetsPage,
  },
  {
    path: "/signUp",
    exact: true,
    component: SignUp,
  },
  {
    path: "/login",
    exact: true,
    component: Login,
  },
];

export default routesConfig;
