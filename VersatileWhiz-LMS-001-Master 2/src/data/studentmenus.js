import {faFlipboard , faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef
} from "@fortawesome/free-solid-svg-icons";



const initMenu = [
    {
      label: "Student Dashboard",
      path: "/",
      icon: faFlipboard,
    },
    {
      label: "Exam",
      path: "/std_exam",
      icon: faTable,
    },
    {
      label: "Result",
      path: "/std_result",
      icon: faNoteSticky,
    },
      // {
      //   label: "Settings",
      //   path: "/form",
      //   icon: faPage4,
      // },
      // {
      // label: "Help",
      // path: "/blank",
      // icon: faWindows,
      // },
];


  
export default initMenu