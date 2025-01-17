import LoginLayout from "../components/LoginLayout";
import AdminLayout from "../components/AdminLayout";

import Home from "../pages/Home";
import House from "../pages/House";
import HouseDetail from "../pages/HouseDetail";
import Order from "../pages/Order";
import Support from "../pages/Support";
import Login from "../pages/Login";
import Register from "../pages/Register";
import forgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import UserList from "../pages/Admin/UserList";
import HouseList from "../pages/Admin/HouseList";
import OrderList from "../pages/Admin/OrderList";

const adminRoutes = [
  { path: "/", component: UserList, layout: AdminLayout },
  { path: "/house", component: HouseList, layout: AdminLayout },
  {
    path: "/order",
    component: OrderList,
    layout: AdminLayout,
  },
];
const userRoutes = [
  { path: "/", component: Home },
  { path: "/house", component: House },
  { path: "/house/:houseId", component: HouseDetail },
  { path: "/order", component: Order },
  { path: "/support", component: Support },
];
const publicRoutes = [
  { path: "/", component: Login, layout: LoginLayout },
  { path: "/register", component: Register, layout: LoginLayout },
  { path: "/forgotpassword", component: forgotPassword, layout: LoginLayout },
  {
    path: "/resetpassword/:email/:resetToken",
    component: ResetPassword,
    layout: LoginLayout,
  },
];

export { adminRoutes, userRoutes, publicRoutes };
