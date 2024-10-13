import { faFlipboard ,faPage4, faFirstOrderAlt ,faCreativeCommonsZero} from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef,
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Teacher Dashboard",
    path: "/",
    icon: faFlipboard,
  },

  // {
  //   label: "Students List",
  //   path: "/tch_std-ls",
  //   icon: faAngellist,
  // },

  {
    label: "Create Exam",
    path: "/tch_create-ex",
    icon: faCreativeCommonsZero,
  },
  {
    label: "Check Exams",
    path: "/tch_ex-ls",
    icon: faFirstOrderAlt,
  },
  // {
  //   label: "Manage Exam",
  //   path: "/tch_ex-ls",
  //   icon: faNoteSticky,
  // },
  // {
  //   label: "Settings",
  //   path: "/form",
  //   icon: faPage4,
  // },
  // {
  //   label: "Help",
  //   path: "/blank",
  //   icon: faWindows,
  // },
];

export default initMenu;
