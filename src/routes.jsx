import { Home, Blog, SignIn, Book } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    icon: ArrowRightOnRectangleIcon,
    name: "Application",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: UserPlusIcon,
    name: "Sign Up",
    path: "/book",
    element: <Book />,
  },
  // {
  //   icon: DocumentTextIcon,
  //   name: "Docs",
  //   href: "https://www.material-tailwind.com/docs/react/installation",
  //   target: "_blank",
  //   element: "",
  // },
];

export default routes;
