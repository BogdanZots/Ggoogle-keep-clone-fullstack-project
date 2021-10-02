import RemindsPageContainer from "../pages/RemindsPage/RemindsPageContainer/RemindsPageContainer";
import TargetsPage from "../pages/TargetsPageContainer/TargetsPageContainer";

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
];

export default routesConfig;
