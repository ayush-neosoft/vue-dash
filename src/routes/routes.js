import DashboardLayout from "@/pages/Dashboard/Layout/DashboardLayout.vue";
import AuthLayout from "@/pages/Dashboard/Pages/AuthLayout.vue";

// Dashboard pages
import Dashboard from "@/pages/Dashboard/Dashboard.vue";

// Pages
import User from "@/pages/Dashboard/Pages/UserProfile.vue";
import Welcome from "@/pages/Dashboard/Pages/Welcome.vue";
import RegisterLicense from "@/pages/Dashboard/Pages/RegisterLicense.vue";
import DashboardPlan from "@/pages/Dashboard/Layout/DashboardPlan.vue";

// Components pages
import Buttons from "@/pages/Dashboard/Components/Buttons.vue";
import GridSystem from "@/pages/Dashboard/Components/GridSystem.vue";
import Panels from "@/pages/Dashboard/Components/Panels.vue";
import SweetAlert from "@/pages/Dashboard/Components/SweetAlert.vue";
import Notifications from "@/pages/Dashboard/Components/Notifications.vue";
import Icons from "@/pages/Dashboard/Components/Icons.vue";
import Typography from "@/pages/Dashboard/Components/Typography.vue";

// Forms pages
import RegularForms from "@/pages/Dashboard/Forms/RegularForms.vue";
import ExtendedForms from "@/pages/Dashboard/Forms/ExtendedForms.vue";
import ValidationForms from "@/pages/Dashboard/Forms/ValidationForms.vue";
import Wizard from "@/pages/Dashboard/Forms/Wizard.vue";

// TableList pages
import RegularTables from "@/pages/Dashboard/Tables/RegularTables.vue";
import ExtendedTables from "@/pages/Dashboard/Tables/ExtendedTables.vue";
import PaginatedTables from "@/pages/Dashboard/Tables/PaginatedTables.vue";

// Maps pages
import GoogleMaps from "@/pages/Dashboard/Maps/GoogleMaps.vue";
import FullScreenMap from "@/pages/Dashboard/Maps/FullScreenMap.vue";
import VectorMaps from "@/pages/Dashboard/Maps/VectorMaps.vue";

// Calendar
import Calendar from "@/pages/Dashboard/Calendar.vue";
// Charts
import Charts from "@/pages/Dashboard/Charts.vue";
import Widgets from "@/pages/Dashboard/Widgets.vue";

let componentsMenu = {
  path: "/components",
  component: DashboardLayout,
  redirect: "/components/buttons",
  name: "Components",
  children: [
    {
      path: "buttons",
      name: "Buttons",
      components: { default: Buttons }
    },
    {
      path: "grid-system",
      name: "Grid System",
      components: { default: GridSystem }
    },
    {
      path: "panels",
      name: "Panels",
      components: { default: Panels }
    },
    {
      path: "sweet-alert",
      name: "Sweet Alert",
      components: { default: SweetAlert }
    },
    {
      path: "notifications",
      name: "Notifications",
      components: { default: Notifications }
    },
    {
      path: "icons",
      name: "Icons",
      components: { default: Icons }
    },
    {
      path: "typography",
      name: "Typography",
      components: { default: Typography }
    }
  ]
};
let formsMenu = {
  path: "/forms",
  component: DashboardLayout,
  redirect: "/forms/regular",
  name: "Forms",
  children: [
    {
      path: "regular",
      name: "Regular Forms",
      components: { default: RegularForms }
    },
    {
      path: "extended",
      name: "Extended Forms",
      components: { default: ExtendedForms }
    },
    {
      path: "validation",
      name: "Validation Forms",
      components: { default: ValidationForms }
    },
    {
      path: "wizard",
      name: "Wizard",
      components: { default: Wizard }
    }
  ]
};
let AccountMenu = {
  path: "/account",
  component: DashboardLayout,
  name: "Account",
  children: [
    {
      path: "/", name: "Account",
      component: () => import('@/pages/Dashboard/Account/Index')
    },
    {
      path: "change-email", name: "Change Email",
      component: () => import('@/pages/Dashboard/Account/ChangeEmail')
    },
    {
      path: "change-password", name: "Change Password",
      component: () => import('@/pages/Dashboard/Account/ChangePassword')
    },
    {
      path: "transfer-license", name: "Transfer License",
      component: () => import('@/pages/Dashboard/Account/TransferLicense')
    }
  ]
};

let DashboardPlanView = {
  path: "/dashboard-plan",
  component: DashboardPlan,
  name: "DashboardPlan",
  children: [
    {
      path: "/", name: "DashboardPlan",
      component: () => import('@/pages/Dashboard/DashboardPlan/index')
    }
  ]
};

let tablesMenu = {
  path: "/table-list",
  component: DashboardLayout,
  redirect: "/table-list/regular",
  name: "Tables",
  children: [
    {
      path: "regular",
      name: "Regular Tables",
      components: { default: RegularTables }
    },
    {
      path: "extended",
      name: "Extended Tables",
      components: { default: ExtendedTables }
    },
    {
      path: "paginated",
      name: "Pagianted Tables",
      components: { default: PaginatedTables }
    }
  ]
};
let mapsMenu = {
  path: "/maps",
  component: DashboardLayout,
  name: "Maps",
  redirect: "/maps/google",
  children: [
    {
      path: "google",
      name: "Google Maps",
      components: { default: GoogleMaps }
    },
    {
      path: "full-screen",
      name: "Full Screen Map",
      meta: {
        hideContent: true,
        hideFooter: true,
        navbarAbsolute: true
      },
      components: { default: FullScreenMap }
    },
    {
      path: "vector-map",
      name: "Vector Map",
      components: { default: VectorMaps }
    }
  ]
};

let pagesMenu = {
  path: "/pages",
  component: DashboardLayout,
  name: "Pages",
  redirect: "/pages/user",
  children: [
    {
      path: "user",
      name: "User Page",
      components: { default: User }
    },

    // {
    //   path: "timeline",
    //   name: "Timeline Page",
    //   components: { default: TimeLine }
    // },
    // {
    //   path: "rtl",
    //   name: "وحة القيادة",
    //   meta: {
    //     rtlActive: true
    //   },
    //   components: { default: RtlSupport }
    // },
    // {
    //   path: "calendar",
    //   name: "Calendar",
    //   components: { default: Calendar }
    // },
    // {
    //   path: "charts",
    //   name: "Charts",
    //   components: { default: Charts }
    // },
    // {
    //   path: "widgets",
    //   name: "Widgets",
    //   components: { default: Widgets }
    // }
  ]
};

let authPages = {
  path: "/auth",
  component: AuthLayout,
  name: "Authentication",
  children: [
    {
      path: "/login", name: "Login",
      component: () => import('@/pages/Auth/Login')
      // meta: {
      //   middleware: [guest]
      // }
    },
    {
      path: "/register", name: "Register",
      component: () => import('@/pages/Auth/Register')
      // meta: {
      //   middleware: [guest]
      // }
    },
    {
      path: "/checkout",
      name: "RegisterLicense",
      component: RegisterLicense
    },
    {
      path: "/dashboard-plan",
      name: "DashboardPlan",
      component: DashboardPlan
    }
    // {
    //   path: "/pricing",
    //   name: "Pricing",
    //   component: Pricing
    // },
    // {
    //   path: "/lock",
    //   name: "Lock",
    //   component: Lock
    // }
  ]
};

const routes = [
  AccountMenu,
  DashboardPlanView,
  componentsMenu,
  formsMenu,
  tablesMenu,
  mapsMenu,
  pagesMenu,
  authPages,
  {
    path: "/",
    component: DashboardLayout,
    children: [
      {
        path: "dashboard", name: "Dashboard",
        components: { default: Dashboard }
      },
      {
        path: "notifications",
        name: "Notifications",
        component: () => import('@/pages/Dashboard/Notifications')
      },

    ]
  }
];

export default routes;
