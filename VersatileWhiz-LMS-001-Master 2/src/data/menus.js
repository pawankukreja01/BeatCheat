import {faFlipboard ,faUniregistry , faTeamspeak, faStudiovinari , faFirstOrderAlt } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Admin Dashboard",
    path: "/",
    icon: faFlipboard,
  },
  {
    label: "Manage Exams",
    path: "/tch_ex-ls",
    icon: faFirstOrderAlt,
  },
  {
    label: "Manage Teachers",
    path: "/admin-tec",
    icon: faTeamspeak,
  },
  {
    label: "Manage Students",
    path: "/tch_std-ls",
    icon: faStudiovinari,
  },
  {
    label: "View Result",
    path: "/std_result",
    icon: faNoteSticky,
  },
  {
    label: "View Student list",
    path: "/admin-std",
    icon: faNoteSticky,
  },
  {
    label: "View Teachers list",
    path: "/admin-teschers-list",
    icon: faNoteSticky,
  },
  {
    label: "Register Teacher",
    path: "/auth/register",
    icon: faUniregistry,
  },
  {
    label: "Register Student",
    path: "/auth/registerstudent",
    icon: faUniregistry,
  },
  // {
    //   label: 'Halaman'
    // },
  // {
  //   label: "404",
  //   path: "/404",
  //   icon: faNotdef,
  // },

  // {
  //   label: 'Tabel dan Form'
  // },
  // {
  //   label: "Manage User",
  //   path: "/table",
  //   icon: faTable,
  // },

  // {
  //   label: 'Otentikasi'
  // },
  // {
  //   label: "Login",
  //   path: "/auth/login",
  //   icon: faLock,
  // },
  // {
  //   label: "Transactions",
  //   path: "/transactions",
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
  
export default initMenu