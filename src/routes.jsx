import {
  HomeIcon,
} from "@heroicons/react/24/solid";
import { Home  } from "@/pages";
import Transaction from "./pages/admin/transaction";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "admin",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard",
        element: <Home />,
      },
    ],
  },
];

export default routes;
