import Home from "../pages/Home";
import Following from "../pages/Following";
import Upload from "../pages/Upload";
import HeaderOnly from "../components/Layout/HeaderOnly";

interface publicRoutesType {
  path: string;
  component: JSX.Element;
  layout?: any;
}

const publicRoutes: publicRoutesType[] = [
  { path: "/", component: <Home></Home> },
  { path: "/following", component: <Following></Following> },
  { path: "/upload", component: <Upload></Upload>, layout: HeaderOnly },
];
const privateRoutes: object = [];

export { publicRoutes, privateRoutes };
