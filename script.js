const RESUME_FILE = "./assets/JarelTanghal_Resume.pdf";
const RESUME_FILENAME = "JarelTanghal_Resume.pdf";
const PAGE_LOADER_DURATION_MS = 3300;
const PAGE_LOADER_FADE_MS = 300;
const PAGE_LOADER_PROGRESS_MS = PAGE_LOADER_DURATION_MS - PAGE_LOADER_FADE_MS;
const RESUME_MIN_LOADING_MS = 4000;
const IMAGE_SPINNER_DELAY_MS = 180;

function resetToStart() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  window.scrollTo(0, 0);
}

function scheduleResetToStart() {
  resetToStart();
  requestAnimationFrame(() => {
    resetToStart();
    requestAnimationFrame(resetToStart);
  });
  setTimeout(resetToStart, 120);
}

scheduleResetToStart();
window.addEventListener("load", scheduleResetToStart);
window.addEventListener("pageshow", scheduleResetToStart);
window.addEventListener("beforeunload", () => window.scrollTo(0, 0));

const TYPING_TEXT = `// MISSION_STATEMENT
const developer = {
  name: "Jarel Rendy Tanghal",
  role: "Frontend Web Developer",
  degree: "BSIT Graduate",
  focus: [
    "Angular Applications",
    "UI Design",
    "Responsive Systems"
  ],
  status: "Ready to build."
};`;

const ROLES = ["Website Developer", "Frontend Developer", "Full Stack Developer", "UI Designer", "Problem Solver"];

const STAT_CARDS = [
  { icon: "code-slash-outline", title: "Frontend Dev", desc: "Angular · Tailwind CSS · Ionic" },
  { icon: "server-outline", title: "Backend Dev", desc: "PHP · Python · MySQL · REST APIs" },
  { icon: "globe-outline", title: "Website Developer", desc: "Business Sites · Landing Pages · SEO" },
  { icon: "layers-outline", title: "Full Stack", desc: "End-to-end Web Systems" },
  { icon: "person-outline", title: "UI Designer", desc: "Tailwind · Responsive" },
  { icon: "briefcase-outline", title: "BSIT Graduate", desc: "Dean's Lister · 600hrs OJT" },
];

const EXPERIENCES = [
  {
    title: "Web Developer – Frontend (Internship / OJT)",
    company: "Wyntap IT Solution Incorporation",
    period: "Dec 2025 – April 2026",
    role: "Frontend Developer / OJT",
    description:
      "Completed a comprehensive frontend development internship focused on architecting and maintaining modern, highly responsive applications using Angular (v21) and Ionic. Managed the UI development and structure for key systems including VEENPOS and SyncFlow Payroll, with a strong emphasis on minimal and user-focused designs. Structured complex routing logic, integrated real-time data functions, and utilized Tailwind CSS to refine layout spacing, animations, and mobile accessibility for functional dashboards and inventory management systems.",
    highlights: [
      "Engineered minimal and highly responsive user interfaces for VEENPOS and SyncFlow Payroll utilizing Angular (v21) and Ionic.",
      "Translated complex project requirements into clean, reusable frontend components using Tailwind CSS.",
      "Developed robust, functional dashboards and comprehensive inventory management screens tailored for seamless real-time data integration.",
      "Optimized mobile accessibility, precise layout spacing, and interactive animations to deliver a highly polished user experience.",
      "Structured efficient UI routing logic to ensure smooth navigation across different modules of the application.",
      "Collaborated directly with backend developers and QA teams to test features, debug code, and resolve complex data-integration issues.",
    ],
    tags: ["Angular v21", "Ionic", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Office Administrator / Operations Support",
    company: "Electro Power Link",
    period: "Sept 2024 – Jan 2025",
    role: "Operations Support / Process Automation",
    description:
      "Provided comprehensive administrative and operational support, specializing in daily team coordination, precise job costing, and business process automation. Streamlined manual workflows by developing a Python-based automation script to synchronize real-time clock-in and clock-out data between operational platforms. Managed complex expense approvals, ensured the accurate categorization of corporate card transactions, and facilitated seamless communication between management and field teams to keep daily operations highly organized.",
    highlights: [
      "Developed and implemented a Python-based backend script to automate the synchronization of real-time clock-in, break, and clock-out data between operational platforms like ServiceTitan and Paylocity.",
      "Managed comprehensive job costing workflows, successfully identifying and resolving high-value double-costing discrepancies on major project invoices.",
      "Streamlined project labeling logistics by strictly categorizing mobilization expenses (such as fuel and vehicle rentals) and procurement costs (including meals and site disposal services) for accurate financial tracking.",
      "Calculated and reported precise daily progress metrics, optimizing data logic to ensure that corporate card reviews were excluded from overall project completion percentages.",
      "Coordinated multi-tiered expense approvals, precise payroll deductions, and continuous document sharing across management and cross-functional field teams.",
      "Maintained meticulous operational records, ensuring that dynamic technician schedules and client service bookings were handled with absolute accuracy.",
    ],
    tags: ["Python", "Process Automation", "Job Costing", "ServiceTitan", "Paylocity", "Operations"],
  },
  {
    title: "Content Creator",
    company: "Le'Ray Aesthetic and Wellness Center",
    period: "June 2023 – Oct 2024",
    role: "Digital Content / Brand Support",
    description:
      "Strategized, designed, and optimized engaging digital content across social media platforms, ensuring strict alignment with the brand's visual identity, tone, and core messaging. Actively monitored emerging digital trends, audience analytics, and engagement metrics to iterate and improve campaigns. Implemented practical, data-informed content strategies that significantly boosted user engagement, enhanced the promotion of key services, and drove the steady, organic growth of the brand's online community.",
    highlights: [
      "Conceptualized and produced high-quality digital assets tailored to social media platforms to strengthen visual identity and brand messaging.",
      "Formulated data-driven content strategies by analyzing engagement metrics and monitoring emerging platform trends.",
      "Designed visually cohesive promotional materials that effectively highlighted aesthetic and wellness services to target audiences.",
      "Managed campaign calendars and scheduled consistent posts to ensure steady, organic growth of the brand's online community.",
      "Developed a strong foundation in visual communication and user-centric design, seamlessly translating these principles into modern UI/UX development.",
    ],
    tags: ["Content Strategy", "Social Media", "Branding", "Engagement"],
  },
  {
    title: "Service Crew & Kitchen",
    company: "McDonald's Corporation",
    period: "May 2022 – Jan 2023",
    role: "Service Operations",
    description:
      "Consistently demonstrated exceptional operational resilience and efficiency while working under pressure in a highly demanding, fast-paced culinary environment. Cultivated a strong foundation in collaborative teamwork, precise time management, and rapid multitasking. Adhered strictly to rigorous service standards and safety protocols, playing a crucial role in maintaining consistent product quality and achieving high customer satisfaction rates during peak operational shifts.",
    highlights: [
      "Executed operational tasks with high efficiency and precision within a demanding, high-volume, and fast-paced environment.",
      "Fostered strong, dependable teamwork and developed critical time-management habits to consistently meet strict operational deadlines.",
      "Balanced multiple rapid-fire responsibilities simultaneously without compromising strict service quality or safety standards.",
      "Demonstrated exceptional operational resilience and adaptability, ensuring maximum customer satisfaction during peak business hours.",
      "Cultivated a strong sense of professional discipline and work ethic that directly translates into reliable technical project delivery.",
    ],
    tags: ["Operations", "Team Work", "Time Management", "Efficiency"],
  },
];

const TIMESHEET_NAV_COMPANY_MASK = [4.2, 3.6, 15.7, 4.2];
const TIMESHEET_NAV_PROFILE_MASKS = [
  [83.8, 2.6, 3.5, 4.8],
  [87.1, 2.6, 6.8, 4.8],
];
const TIMESHEET_FOOTER_COMPANY_MASK = [7.7, 96.2, 11.8, 2.7];
const TIMESHEET_APP_SHELL_MASKS = [
  TIMESHEET_NAV_COMPANY_MASK,
  ...TIMESHEET_NAV_PROFILE_MASKS,
  TIMESHEET_FOOTER_COMPANY_MASK,
];
const TIMESHEET_PROFILE_HEADER_MASKS = [
  [27, 29.7, 4.8, 8.8],
  [32.5, 29, 13.4, 5.8],
  [32.5, 35, 12.8, 4.1],
  [45.4, 35, 10.8, 4.1],
  [56.3, 35, 5, 4.1],
];
const TIMESHEET_SCROLLED_PROFILE_HEADER_MASKS = [
  [27, 9.7, 4.8, 6.2],
  [32.5, 8.8, 13.4, 5.8],
  [32.5, 12.4, 12.8, 4.1],
  [45.4, 12.4, 10.8, 4.1],
  [56.3, 12.4, 5, 4.1],
];
const TIMESHEET_DASHBOARD_VALUE_MASKS = [
  [13.8, 69.6, 4.2, 5.2],
  [33.1, 69.6, 8.1, 5.2],
  [71.2, 69.6, 5.2, 5.2],
];
const TIMESHEET_EXPORT_AUTHOR_MASKS = [
  [46.1, 27.4, 6.8, 2.7],
  [46.1, 35.7, 6.8, 2.7],
  [46.1, 44, 6.8, 2.7],
  [46.1, 52.3, 6.8, 2.7],
  [46.1, 60.6, 6.8, 2.7],
  [46.1, 68.9, 6.8, 2.7],
  [46.1, 77.2, 6.8, 2.7],
  [46.1, 85.5, 6.8, 2.7],
];
const TIMESHEET_PRIVACY_MASKS = {
  "01-sign-in.png": [
    [22.8, 48.2, 16.2, 3.2],
    [48.6, 39.2, 27.4, 6],
  ],
  "02-forgot-password.png": [[48.6, 52.4, 27.4, 6]],
  "03-authorized-access.png": [[41.6, 48.4, 16.2, 4.6]],
  "04-create-account.png": [[24.3, 51.7, 13.8, 3.1]],
  "05-email-verification.png": [[39.7, 44.2, 16.3, 4.7]],
  "06-registration-submitted.png": [[43.4, 48.2, 13.2, 6.2]],
  "07-awaiting-approval.png": [[42.7, 68.2, 14.6, 7.2]],
  "08-dashboard.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [12.5, 19.1, 19.6, 3.7],
    ...TIMESHEET_DASHBOARD_VALUE_MASKS,
    [52.1, 72.2, 7.8, 4.5],
    [13.8, 94.2, 4.2, 4.5],
    [33.1, 94.2, 8.1, 4.5],
    [52.1, 94.2, 7.8, 4.5],
    [71.2, 94.2, 5.2, 4.5],
  ],
  "09-export-history-modal.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [12.5, 19.1, 19.6, 3.7],
    ...TIMESHEET_DASHBOARD_VALUE_MASKS,
    ...TIMESHEET_EXPORT_AUTHOR_MASKS,
  ],
  "10-how-it-works.png": [...TIMESHEET_APP_SHELL_MASKS],
  "11-user-management.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [21.2, 24.1, 18.5, 3.1],
    [22.3, 49.4, 20.4, 7.2],
    [22.3, 57.5, 20.4, 7.2],
    [22.3, 65.6, 20.4, 7.2],
    [22.3, 73.7, 20.4, 7.2],
    [22.3, 81.8, 20.4, 7.2],
    [22.3, 89.9, 20.4, 7.2],
    [22.3, 96.1, 20.4, 3.9],
  ],
  "12-user-details.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [28.7, 29.4, 5.2, 13.6],
    [34.1, 29.4, 11.8, 7.2],
    [34.1, 36.8, 17.1, 6.2],
    [21.3, 52.8, 56.8, 8.5],
    [68.2, 66.2, 9.2, 31.5],
  ],
  "13-add-employee.png": [...TIMESHEET_APP_SHELL_MASKS, [38.9, 49.7, 22.5, 4.7]],
  "14-api-configurations.png": [...TIMESHEET_APP_SHELL_MASKS, [36.2, 39, 25.5, 38]],
  "15-account-requests.png": [
    [24.5, 12.5, 12.5, 4.2],
    [13.4, 48.1, 25.6, 6.6],
    [13.4, 56.1, 25.6, 6.6],
    [13.4, 64.1, 25.6, 6.6],
    [13.4, 72.1, 25.6, 6.6],
    [13.4, 80.1, 25.6, 6.6],
    [13.4, 88.1, 25.6, 6.6],
    [13.4, 96.1, 25.6, 3.9],
  ],
  "16-my-profile.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    ...TIMESHEET_PROFILE_HEADER_MASKS,
    [27.1, 59.8, 21.9, 6.7],
    [50.4, 59.8, 21.9, 6.7],
    [27.1, 70.7, 21.9, 6.7],
    [50.4, 70.7, 21.9, 6.7],
    [27.1, 81.4, 21.9, 6.7],
    [50.4, 81.4, 21.9, 6.7],
  ],
  "17-profile-security.png": [...TIMESHEET_APP_SHELL_MASKS, ...TIMESHEET_PROFILE_HEADER_MASKS],
  "18-profile-security-session.png": [...TIMESHEET_APP_SHELL_MASKS, ...TIMESHEET_SCROLLED_PROFILE_HEADER_MASKS, [35.2, 80.2, 29.6, 8.5]],
  "20-profile-preferences.png": [...TIMESHEET_APP_SHELL_MASKS, ...TIMESHEET_PROFILE_HEADER_MASKS],
  "21-profile-activity.png": [...TIMESHEET_APP_SHELL_MASKS, ...TIMESHEET_PROFILE_HEADER_MASKS],
  "22-servicetitan-date-range.png": [...TIMESHEET_APP_SHELL_MASKS],
  "23-calendar-picker.png": [...TIMESHEET_APP_SHELL_MASKS],
  "24-servicetitan-timesheets.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [16, 62, 12.8, 24.5],
  ],
  "25-servicetitan-breakdown.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [39.6, 18.1, 8.8, 3.8],
    [16.8, 43.1, 6.2, 3.2],
    [16.8, 48.4, 6.2, 3.2],
    [16.8, 53.7, 6.2, 3.2],
    [16.8, 59, 6.2, 3.2],
    [16.8, 64.3, 6.2, 3.2],
  ],
  "26-confirm-export.png": [...TIMESHEET_APP_SHELL_MASKS, [37.8, 43.1, 24.4, 8.2]],
  "27-sending-timesheet.png": [[33.2, 55.1, 33.4, 6.2]],
  "28-timedoctor-timesheets.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [16, 58.2, 12.8, 27.5],
  ],
  "29-timedoctor-breakdown.png": [
    ...TIMESHEET_APP_SHELL_MASKS,
    [39.5, 14.1, 10.2, 4],
    [16.8, 52, 8.2, 3.2],
    [16.8, 57.5, 8.2, 3.2],
    [16.8, 63, 8.2, 3.2],
    [16.8, 68.5, 8.2, 3.2],
    [16.8, 74, 8.2, 3.2],
  ],
  "30-paylocity-success.png": [[36.5, 49.2, 27.2, 12.5]],
  "31-access-denied.png": [[43.6, 40.4, 13.3, 4.8], [35.2, 54.2, 18.2, 4.5]],
};

const PROJECTS = [
  {
    id: 1,
    title: "VEENPOS – Point of Sale System",
    type: "Web App",
    category: "Angular",
    year: "2025–2026",
    ongoing: false,
    contribution:
      "Full Frontend & UI — Sole frontend developer on a 4-person team at Wyntap IT Solution. Designed and built the entire UI layer using Angular v21, Ionic, and Tailwind CSS.",
    image: "project-previews/veenpos/01-login.png",
    demoUrl: "veenpos.wyntap.com",
    previews: [
      "project-previews/veenpos/01-login.png",
      "project-previews/veenpos/02-create-account.png",
      "project-previews/veenpos/03-forgot-password.png",
      "project-previews/veenpos/04-sales-dashboard.png",
      "project-previews/veenpos/05-dashboard-menu.png",
      "project-previews/veenpos/06-receive-orders-error.png",
      "project-previews/veenpos/07-cashier-drawer.png",
    ],
    description:
      "A modern Point of Sale system built during OJT at Wyntap IT Solution Incorporation. Covers terminal sign-in, account creation, sales analytics, navigation, order handling, and cashier drawer workflows for cafes, bakeries, and retail stores.",
    features: [
      "Terminal sign-in, account registration, and password recovery screens",
      "Sales dashboard with KPI cards, revenue chart, category breakdown, and export report action",
      "Main terminal navigation for dashboard, orders, transactions, cash drawer, staff, customers, inventory, reports, and settings",
      "Receive orders screen with search, status filters, live indicator, error state, and retry action",
      "Cashier drawer workflow with opening balance, cash in, cash out, print report, end shift, and cash ledger",
      "Responsive desktop/tablet UI with clean cards, status badges, and polished POS interactions",
    ],
    stack: ["Angular v21", "Ionic", "Tailwind CSS", "TypeScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "El Sinangag – Restaurant POS & Ordering",
    type: "Web App",
    category: "Angular",
    filters: ["Angular", "Full Stack", "Solo Projects"],
    year: "2025",
    ongoing: false,
    contribution:
      "Full Stack — Solo Project. Designed the UI/UX and built the restaurant POS workflow using Angular, Ionic, Tailwind CSS, TypeScript, custom CSS, Python services, and SQL database storage.",
    image: "project-previews/el-sinangag/02-pos-terminal.png",
    demoUrl: "el-sinangag-pos.local",
    previews: [
      "project-previews/el-sinangag/02-pos-terminal.png",
      "project-previews/el-sinangag/09-menu-items.png",
      "project-previews/el-sinangag/01-dashboard.png",
      "project-previews/el-sinangag/03-checkout-modal.png",
      "project-previews/el-sinangag/04-order-history.png",
      "project-previews/el-sinangag/05-receipt-preview.png",
      "project-previews/el-sinangag/06-void-items.png",
      "project-previews/el-sinangag/07-cashier.png",
      "project-previews/el-sinangag/08-end-shift.png",
      "project-previews/el-sinangag/10-add-item-modal.png",
      "project-previews/el-sinangag/11-receipt-editor-customer.png",
      "project-previews/el-sinangag/12-receipt-editor-options.png",
      "project-previews/el-sinangag/13-kitchen-receipt-editor.png",
    ],
    description:
      "A full restaurant POS and ordering system for El Sinangag. It covers dashboard monitoring, menu item management, cashier shift tracking, order checkout, payment handling, order history, void workflow, and editable customer/kitchen receipt templates.",
    features: [
      "Dashboard with shift status, sales totals, recent transactions, top-selling items, and payment breakdown",
      "POS terminal with menu search, category filters, item cards, current order panel, and quantity controls",
      "Checkout modal with discount options, cash/GCash/bank payment methods, cash received, and exact-change shortcut",
      "Order history with searchable records, payment/status badges, receipt preview, and void controls",
      "Customer and kitchen receipt preview with configurable header, footer, store details, and auto-print options",
      "Cashier module for cash in/out, shift activity, end-shift summary, and drawer cash tracking",
      "Menu item management with add/edit/delete actions, category tabs, prices, and availability status",
      "SQL database storage prepared for persistent menu, order, receipt, and cashier shift records",
    ],
    stack: ["Angular", "Ionic", "Tailwind CSS", "TypeScript", "Python", "CSS", "SQL"],
  },
  {
    id: 3,
    title: "Meneses Room Reservation",
    type: "Web App",
    category: "Thesis / School Activity",
    filters: ["Full Stack", "Thesis / School Activity", "School Activity"],
    year: "2025",
    ongoing: false,
    contribution:
      "School Activity — Built a room reservation preview for Meneses Campus, including student login, account registration, password recovery, room browsing, booking requests, calendar views, and an admin approval page.",
    image: "project-previews/meneses-room-reservation/01-login.png",
    demoUrl: "meneses-room-reservation.local",
    previews: [
      "project-previews/meneses-room-reservation/01-login.png",
      "project-previews/meneses-room-reservation/02-home.png",
      "project-previews/meneses-room-reservation/03-my-bookings.png",
      "project-previews/meneses-room-reservation/04-schedule.png",
      "project-previews/meneses-room-reservation/05-profile.png",
      "project-previews/meneses-room-reservation/06-edit-profile.png",
      "project-previews/meneses-room-reservation/07-room-grid.png",
      "project-previews/meneses-room-reservation/08-room-detail.png",
      "project-previews/meneses-room-reservation/09-reserve-form.png",
      "project-previews/meneses-room-reservation/10-empty-schedule.png",
      "project-previews/meneses-room-reservation/11-filled-booking-form.png",
      "project-previews/meneses-room-reservation/12-forgot-password.png",
      "project-previews/meneses-room-reservation/13-admin-dashboard.png",
      "project-previews/meneses-room-reservation/14-admin-menu.png",
      "project-previews/meneses-room-reservation/15-booking-requests.png",
    ],
    description:
      "A school room reservation system for Bulacan State University Meneses Campus. Students can log in, reserve rooms, view booking schedules, and track approvals while admins review and approve booking requests.",
    features: [
      "Student login, account registration, and forgot password preview flow",
      "Room catalog with classroom/laboratory details and image-based cards",
      "Reservation form with date, time, purpose, and optional document upload",
      "My Bookings page with approved calendar and pending/rejected requests",
      "Admin dashboard for booking totals, pending approvals, approved bookings, and user counts",
      "Admin booking request table with approve/reject controls for static preview testing",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    id: 4,
    title: "Timesheet Payroll System",
    type: "Web App",
    category: "Full Stack",
    filters: ["Full Stack", "Solo Projects"],
    year: "2026",
    ongoing: false,
    contribution:
      "Full Stack — Solo Project. Built and presented a client payroll sync workflow covering authentication, account approvals, ServiceTitan/Time Doctor timesheet review, user controls, API setup, and Paylocity export states.",
    image: "project-previews/timesheet-payroll/08-dashboard.png",
    demoUrl: "payroll-sync.local",
    previews: [
      "project-previews/timesheet-payroll/01-sign-in.png",
      "project-previews/timesheet-payroll/02-forgot-password.png",
      "project-previews/timesheet-payroll/03-authorized-access.png",
      "project-previews/timesheet-payroll/04-create-account.png",
      "project-previews/timesheet-payroll/05-email-verification.png",
      "project-previews/timesheet-payroll/06-registration-submitted.png",
      "project-previews/timesheet-payroll/07-awaiting-approval.png",
      "project-previews/timesheet-payroll/08-dashboard.png",
      "project-previews/timesheet-payroll/09-export-history-modal.png",
      "project-previews/timesheet-payroll/10-how-it-works.png",
      "project-previews/timesheet-payroll/11-user-management.png",
      "project-previews/timesheet-payroll/12-user-details.png",
      "project-previews/timesheet-payroll/13-add-employee.png",
      "project-previews/timesheet-payroll/14-api-configurations.png",
      "project-previews/timesheet-payroll/15-account-requests.png",
      "project-previews/timesheet-payroll/16-my-profile.png",
      "project-previews/timesheet-payroll/17-profile-security.png",
      "project-previews/timesheet-payroll/18-profile-security-session.png",
      "project-previews/timesheet-payroll/20-profile-preferences.png",
      "project-previews/timesheet-payroll/21-profile-activity.png",
      "project-previews/timesheet-payroll/22-servicetitan-date-range.png",
      "project-previews/timesheet-payroll/23-calendar-picker.png",
      "project-previews/timesheet-payroll/24-servicetitan-timesheets.png",
      "project-previews/timesheet-payroll/25-servicetitan-breakdown.png",
      "project-previews/timesheet-payroll/26-confirm-export.png",
      "project-previews/timesheet-payroll/27-sending-timesheet.png",
      "project-previews/timesheet-payroll/28-timedoctor-timesheets.png",
      "project-previews/timesheet-payroll/29-timedoctor-breakdown.png",
      "project-previews/timesheet-payroll/30-paylocity-success.png",
      "project-previews/timesheet-payroll/31-access-denied.png",
    ],
    privacyMasks: TIMESHEET_PRIVACY_MASKS,
    description:
      "A private client payroll sync and timesheet management system. It pulls ServiceTitan and Time Doctor records, lets admins review detailed employee time breakdowns, manages users and approvals, then sends verified punch records to Paylocity with clear progress and success states.",
    features: [
      "Secure sign-in, forgot password, account creation, email verification, approval wait states, and blacklist access screen",
      "Dashboard with total employees, weekly hours, pay period, export history, and ServiceTitan/Time Doctor entry points",
      "ServiceTitan and Time Doctor timesheet flows with date range selection, calendar picker, employee search, department filters, and review steps",
      "Detailed employee breakdown modal for working time, paid dispatch, unpaid gaps, idle time, productivity data, app usage, and total paid hours",
      "Paylocity export confirmation, animated sending state, delivered-record success summary, and export history logs",
      "Settings area for user roles, account requests, employee management, API integrations, profile, security, preferences, and activity logs",
    ],
    stack: ["ServiceTitan", "Time Doctor", "SQL", "Python", "Ionic", "CSS", "JavaScript", "Tailwind CSS", "Payroll Sync", "Timekeeping UI", "Paylocity Workflow"],
  },
  {
    id: 5,
    title: "DermaSculpt Booking System – Thesis Project",
    type: "Web App",
    category: "Thesis / School Activity",
    filters: ["Angular", "Thesis / School Activity"],
    year: "2025–2026",
    ongoing: false,
    contribution:
      "Frontend Developer — Designed and built the patient-facing interface and responsive booking journey for DermaSculpt as part of the BSIT thesis project, covering authentication, appointment scheduling, service discovery, messaging, AI-assisted education, and profile management.",
    image: "project-previews/dermasculpt-booking/01-sign-in.png",
    demoUrl: "dermasculpt-booking.local",
    previews: [
      "project-previews/dermasculpt-booking/01-sign-in.png",
      "project-previews/dermasculpt-booking/02-sign-up.png",
      "project-previews/dermasculpt-booking/03-dashboard.png",
      "project-previews/dermasculpt-booking/04-dashboard-appointments.png",
      "project-previews/dermasculpt-booking/05-book-appointment.png",
      "project-previews/dermasculpt-booking/06-appointment-types.png",
      "project-previews/dermasculpt-booking/07-appointment-types-more.png",
      "project-previews/dermasculpt-booking/08-my-appointments.png",
      "project-previews/dermasculpt-booking/09-messages-ai-assistant.png",
      "project-previews/dermasculpt-booking/10-education-hub.png",
      "project-previews/dermasculpt-booking/11-profile-settings.png",
      "project-previews/dermasculpt-booking/12-profile-security.png",
    ],
    description:
      "A thesis-based dermatology booking and patient portal for DermaSculpt Center. The system provides a clear end-to-end experience for account access, specialist appointment scheduling, service exploration, visit management, patient-to-doctor messaging, AI-assisted conversation summaries, health education, and secure profile settings.",
    features: [
      "Patient sign-in and account registration with password visibility, recovery, and session options",
      "Dashboard with upcoming appointments, completed visits, available specialists, and quick-access appointment status tabs",
      "Guided booking calendar with dermatologist selection, available times, and a clear appointment summary",
      "Searchable dermatology service catalog with categories, duration, anesthesia requirements, pricing, and booking actions",
      "My Appointments area for pending, scheduled, completed, and cancelled visits with rescheduling and management support",
      "Patient-to-dermatologist messaging with an AI chat assistant for summaries and appointment-related questions",
      "Health Education Hub with searchable skin-care topics, saved resources, and an AI Tutor panel",
      "Profile settings for personal information, contact details, date of birth, profile editing, and password changes",
    ],
    stack: ["Angular v21", "TypeScript", "Tailwind CSS", "Ionic", "PHP", "MySQL"],
  },
  {
    id: 6,
    title: "Le'Ray – POS (Point of Sale System)",
    type: "Web App",
    category: "Full Stack",
    year: "2026–Present",
    ongoing: true,
    contribution:
      "Ongoing Solo Project — UI and workflow build for Le'Ray Aesthetic and Wellness Center. Presented a POS/business management system covering services, product sales, clients, receipts, inventory, cashier shifts, and reports.",
    image: "project-previews/leray/02-pos-terminal.png",
    demoUrl: "leray-pos-manager.local",
    previews: [
      "project-previews/leray/02-pos-terminal.png",
      "project-previews/leray/01-dashboard.png",
      "project-previews/leray/03-receipt-modal.png",
      "project-previews/leray/04-services.png",
      "project-previews/leray/05-products.png",
      "project-previews/leray/06-clients.png",
      "project-previews/leray/07-transactions.png",
      "project-previews/leray/08-transaction-details.png",
      "project-previews/leray/09-receipt-editor.png",
      "project-previews/leray/10-inventory.png",
      "project-previews/leray/11-shift-history.png",
      "project-previews/leray/12-shift-report.png",
      "project-previews/leray/13-cashiers.png",
    ],
    description:
      "An ongoing POS and business management system for Le'Ray Aesthetic and Wellness Center. The current build presents the core UI flow for selling services/products, tracking clients, printing receipts, managing inventory, viewing transactions, reconciling shifts, and monitoring cashier performance.",
    features: [
      "Dashboard with today sales, transactions, total clients, all-time revenue, payment breakdown, and recent transactions",
      "POS terminal for aesthetic services and retail products with client email, discounts, payment method, notes, and receipt output",
      "Service catalog with categories, durations, pricing, add/edit/delete actions, and searchable service cards",
      "Product catalog and inventory module with stock counts, low-stock warnings, item value, and stock adjustment workflow",
      "Client management with contact details, visits, total spent, and searchable client cards",
      "Transactions table with payment/status filters, receipt preview, transaction detail modal, print actions, and void controls",
      "Receipt editor with store information, logo toggle, footer message, tax settings, and live receipt preview",
      "Shift history, cashier drawer reconciliation, cash/cashless breakdown, short/over reports, and cashier performance cards",
    ],
    stack: ["JavaScript", "Tailwind CSS", "Responsive UI", "POS Workflow"],
  },
  {
    id: 7,
    title: "Timesheet & Clock In/Out — Le'Ray",
    type: "Web App",
    category: "Full Stack",
    year: "2026–Present",
    ongoing: true,
    contribution:
      "Ongoing Solo Project — HR and timekeeping workflow build for Le'Ray Aesthetic and Wellness Center. Designed and presented the clock station, timesheet, employee records, payroll, payslip, leave, holiday, and reporting screens.",
    image: "project-previews/leray-timesheet/02-clock-station.png",
    demoUrl: null,
    previews: [
      "project-previews/leray-timesheet/02-clock-station.png",
      "project-previews/leray-timesheet/01-hr-dashboard.png",
      "project-previews/leray-timesheet/03-timesheet.png",
      "project-previews/leray-timesheet/04-add-timesheet-entry.png",
      "project-previews/leray-timesheet/05-employees.png",
      "project-previews/leray-timesheet/06-edit-employee.png",
      "project-previews/leray-timesheet/07-payroll.png",
      "project-previews/leray-timesheet/08-new-payroll-entry.png",
      "project-previews/leray-timesheet/09-payslip-editor.png",
      "project-previews/leray-timesheet/10-leave-requests.png",
      "project-previews/leray-timesheet/11-new-leave-request.png",
      "project-previews/leray-timesheet/12-holidays.png",
      "project-previews/leray-timesheet/13-reports.png",
    ],
    description:
      "An HR timekeeping and payroll management system for Le'Ray staff. The current build presents the main admin workflow for employee clock in/out, manual timesheet entries, employee profiles, payroll records, payslip templates, leave requests, holiday setup, and monthly reports.",
    features: [
      "HR dashboard with active employee count, clocked-in staff, pending leaves, payroll summary, and quick access to the clock station",
      "Clock station with live time display, logging date, employee search, staff cards, shift schedules, and clock-in actions",
      "Timesheet module with today, weekly, monthly, and all-time filters plus staff filtering and manual entry support",
      "Employee management with staff profiles, daily/hourly rates, shift schedules, leave balance, contact details, and edit modal",
      "Payroll module for pay period entries, days and hours worked, gross pay, statutory deductions, allowances, net pay, and status tracking",
      "Payslip editor with company information, deduction rates, logo toggle, live payslip preview, and print action",
      "Leave request and holiday management screens with status tabs, request modal, and admin controls",
      "Reports section summarizing active employees, monthly hours, pending leaves, gross pay, and leave request totals",
    ],
    stack: ["JavaScript", "Tailwind CSS", "HR Workflow", "Payroll UI"],
  },
];

const CATEGORIES = ["All", "Angular", "Full Stack", "Ongoing", "Solo Projects", "OJT Project", "Thesis / School Activity"];

const SKILL_CATEGORIES = [
  {
    title: "Frontend & Web Development",
    tag: "core",
    skills: [
      { name: "Angular (v21)", level: "Expert", details: "RxJS, State Management, Ionic Integration", icon: "globe-outline" },
      { name: "React", level: "Proficient", details: "Hooks, Component Architecture, SPA", icon: "code-slash-outline" },
      { name: "Ionic", level: "Expert", details: "Hybrid Mobile Apps, Cross-platform UI", icon: "phone-portrait-outline" },
      { name: "TypeScript", level: "Expert", details: "Strict Typing, Interfaces, Generics", icon: "code-slash-outline" },
      { name: "JavaScript", level: "Expert", details: "ES6+, DOM Manipulation, Async", icon: "document-text-outline" },
      { name: "Tailwind CSS", level: "Expert", details: "Utility-first, Responsive Design, Custom Themes", icon: "color-palette-outline" },
      { name: "HTML", level: "Expert", details: "Semantic Markup, Accessibility, SEO", icon: "code-working-outline" },
      { name: "CSS", level: "Expert", details: "Flexbox, Grid, Animations, Media Queries", icon: "document-text-outline" },
      { name: "SCSS / Sass", level: "Familiar", details: "Nested Styles, Variables, Reusable Styling", icon: "color-fill-outline" },
      { name: "Bootstrap", level: "Proficient", details: "Responsive Components, Utility Classes", icon: "albums-outline" },
      { name: "Responsive UI", level: "Expert", details: "Mobile-first Layouts, Breakpoints, Accessibility", icon: "phone-portrait-outline" },
      { name: "Website Development", level: "Advanced", details: "Business Sites, Landing Pages, Responsive UI", icon: "globe-outline" },
      { name: "UI Animation", level: "Advanced", details: "Scroll Reveals, Hover States, Modal Motion", icon: "sparkles-outline" },
    ],
  },
  {
    title: "App Development",
    tag: "app",
    skills: [
      { name: "Ionic Framework", level: "Expert", details: "Hybrid Mobile UI, Angular Integration", icon: "phone-portrait-outline" },
      { name: "Android Development", level: "Familiar", details: "Android Studio, Emulator, Mobile Layouts", icon: "logo-android" },
      { name: "Mobile Responsive Design", level: "Advanced", details: "Touch Targets, Fluid Spacing, Adaptive Cards", icon: "tablet-landscape-outline" },
      { name: "Hybrid App Layouts", level: "Proficient", details: "Mobile Screens, Tabs, Forms, Navigation", icon: "apps-outline" },
      { name: "Touch-Friendly UI", level: "Advanced", details: "Readable Spacing, Buttons, Bottom Sheets", icon: "hand-left-outline" },
    ],
  },
  {
    title: "Backend & Data",
    tag: "backend",
    skills: [
      { name: "PHP", level: "Advanced", details: "Server-side Logic, Form Handling", icon: "server-outline" },
      { name: "SQL", level: "Proficient", details: "Queries, Joins, Database Design", icon: "server-outline" },
      { name: "MySQL", level: "Proficient", details: "Tables, Relationships, Local Databases", icon: "server-outline" },
      { name: "REST APIs", level: "Proficient", details: "Endpoints, Payloads, Frontend Integration", icon: "git-network-outline" },
      { name: "JSON", level: "Advanced", details: "API Data, Configuration", icon: "code-slash-outline" },
      { name: "XML", level: "Familiar", details: "Data Interchange, Parsing", icon: "code-working-outline" },
      { name: "Node.js", level: "Familiar", details: "JavaScript Runtime, Tooling, APIs", icon: "terminal-outline" },
    ],
  },
  {
    title: "Programming Languages",
    tag: "langs",
    skills: [
      { name: "Java", level: "Proficient", details: "OOP, Classes, Basic Application Logic", icon: "code-slash-outline" },
      { name: "Python", level: "Proficient", details: "Scripting, Automation, Basic Data Handling", icon: "terminal-outline" },
      { name: "C#", level: "Proficient", details: "OOP, Desktop/App Fundamentals", icon: "code-working-outline" },
      { name: "C++", level: "Proficient", details: "Programming Fundamentals, Logic Building", icon: "code-slash-outline" },
      { name: "C", level: "Proficient", details: "Syntax Basics, Procedural Programming", icon: "code-slash-outline" },
      { name: "Kotlin", level: "Proficient", details: "Android Concepts, Mobile Syntax", icon: "phone-portrait-outline" },
    ],
  },
  {
    title: "Tools & Platforms",
    tag: "tools",
    skills: [
      { name: "VS Code", level: "Expert", details: "Extensions, Debugging, Workspace Config", icon: "terminal-outline" },
      { name: "Git / GitHub", level: "Expert", details: "Version Control, Branching, PRs", icon: "git-branch-outline" },
      { name: "XAMPP", level: "Advanced", details: "Local Dev Server, MySQL, Apache", icon: "server-outline" },
      { name: "Firebase", level: "Familiar", details: "Auth, Hosting, Firestore (Basic)", icon: "flame-outline" },
      { name: "Postman", level: "Advanced", details: "API Testing, Collections", icon: "git-network-outline" },
      { name: "Android Studio", level: "Familiar", details: "Mobile App Development, Emulators", icon: "phone-portrait-outline" },
      { name: "npm", level: "Proficient", details: "Packages, Scripts, Frontend Tooling", icon: "cube-outline" },
      { name: "Vite", level: "Proficient", details: "Fast Frontend Builds, Dev Server", icon: "flash-outline" },
      { name: "Figma", level: "Advanced", details: "Wireframes, UI References, Design Handoff", icon: "color-palette-outline" },
      { name: "Canva", level: "Advanced", details: "Social Graphics, Visual Content", icon: "brush-outline" },
      { name: "phpMyAdmin", level: "Proficient", details: "Database Tables, Local SQL Admin", icon: "server-outline" },
    ],
  },
  {
    title: "Professional Skills",
    tag: "soft",
    skills: [
      { name: "Team Collaboration", level: "Advanced", icon: "people-outline" },
      { name: "Content Strategy", level: "Advanced", icon: "bulb-outline" },
      { name: "Customer Communication", level: "Advanced", icon: "chatbubbles-outline" },
      { name: "Time Management", level: "Advanced", icon: "time-outline" },
      { name: "Problem Solving", level: "Advanced", icon: "extension-puzzle-outline" },
      { name: "Documentation", level: "Advanced", icon: "document-text-outline" },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Jarel delivered clean and responsive Angular/Ionic frontend work during his OJT, contributing to VEENPOS screens with strong attention to usability, layout consistency, and real POS workflows.",
    name: "Wyntap IT Solution — VEENPOS",
    initials: "WT",
    logo: "references photo/wyntap.png",
  },
  {
    quote:
      "Jarel built a full restaurant POS and ordering system for El Sinangag, including sales flow, receipt support, menu handling, and a practical interface for daily restaurant operations.",
    name: "El Sinangag — Full POS System",
    initials: "ES",
    logo: "references photo/elsinangag.jpg",
  },
  {
    quote:
      "Jarel presented the UI direction for an ongoing Le'Ray system covering timesheet, payroll, and POS workflows. The project is still in progress, with interface screens and user flow already planned.",
    name: "Le'Ray — Ongoing UI Presentation",
    initials: "LR",
    logo: "references photo/le'ray.jpg",
  },
];

const HOBBIES = [
  { icon: "basketball-outline", label: "Playing Basketball", desc: "Pickup games, shooting practice, and keeping active" },
  { icon: "barbell-outline", label: "Gym", desc: "Strength training and building consistency" },
  { icon: "code-slash-outline", label: "Side Projects", desc: "Building tools and experiments" },
  { icon: "cafe-outline", label: "Coffee Brewing", desc: "Pour-over enthusiast" },
  { icon: "game-controller-outline", label: "NBA Games", desc: "Following matchups, players, and standings" },
  { icon: "walk-outline", label: "Active Routine", desc: "Movement, discipline, and daily momentum" },
];

let activeCategory = "All";
let selectedProject = null;
let selectedExperience = null;
let activePreviewIndex = 0;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function icon(name) {
  return `<ion-icon name="${name}" aria-hidden="true"></ion-icon>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getImageFilename(imagePath = "") {
  return imagePath.split("/").pop() || "";
}

function getPrivacyMasks(project, imagePath) {
  return project?.privacyMasks?.[getImageFilename(imagePath)] || [];
}

function setupProtectedImageFrame(frame, image, project, imagePath) {
  if (!frame || !image) return;

  frame._imageLoadCleanup?.();
  frame.classList.remove("is-loading", "show-spinner", "has-image-error");
  frame.removeAttribute("aria-busy");
  $(".privacy-mask-layer", frame)?.remove();

  const masks = getPrivacyMasks(project, imagePath);
  const layer = document.createElement("span");
  layer.className = "privacy-mask-layer";
  layer.setAttribute("aria-hidden", "true");

  masks.forEach((region) => {
    const mask = document.createElement("span");
    mask.className = "privacy-mask";
    mask.dataset.region = region.join(",");
    layer.appendChild(mask);
  });

  if (masks.length) frame.appendChild(layer);

  const positionMasks = () => {
    if (!masks.length || !image.naturalWidth || !frame.clientWidth || !frame.clientHeight) return;

    const imageBoxWidth = image.clientWidth;
    const imageBoxHeight = image.clientHeight;
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    const imageStyle = window.getComputedStyle(image);
    const fit = imageStyle.objectFit;
    const objectPositionY = imageStyle.objectPosition.trim().split(/\s+/)[1] || "50%";
    const alignsToTop = ["top", "0", "0%", "0px"].includes(objectPositionY);
    let renderedWidth = imageBoxWidth;
    let renderedHeight = imageBoxHeight;
    let offsetX = image.offsetLeft;
    let offsetY = image.offsetTop;

    if (fit === "cover" || fit === "contain") {
      const scale = fit === "cover"
        ? Math.max(imageBoxWidth / imageWidth, imageBoxHeight / imageHeight)
        : Math.min(imageBoxWidth / imageWidth, imageBoxHeight / imageHeight);
      renderedWidth = imageWidth * scale;
      renderedHeight = imageHeight * scale;
      offsetX += (imageBoxWidth - renderedWidth) / 2;
      offsetY += alignsToTop ? 0 : (imageBoxHeight - renderedHeight) / 2;
    }

    $$(".privacy-mask", layer).forEach((mask, index) => {
      const [x, y, width, height] = masks[index];
      mask.style.left = `${offsetX + (x / 100) * renderedWidth}px`;
      mask.style.top = `${offsetY + (y / 100) * renderedHeight}px`;
      mask.style.width = `${(width / 100) * renderedWidth}px`;
      mask.style.height = `${(height / 100) * renderedHeight}px`;
    });
  };

  const loadToken = Symbol("image-load");
  frame._imageLoadToken = loadToken;
  let spinnerTimer = 0;
  const source = image.getAttribute("src") || "";

  const cleanup = () => {
    window.clearTimeout(spinnerTimer);
    image.removeEventListener("load", finishLoading);
    image.removeEventListener("error", handleLoadError);
    window.removeEventListener("online", retryLoading);
  };

  const finishLoading = () => {
    if (frame._imageLoadToken !== loadToken) return;
    cleanup();
    frame.classList.remove("is-loading", "show-spinner", "has-image-error");
    frame.removeAttribute("aria-busy");
    positionMasks();
    window.requestAnimationFrame(positionMasks);
    frame._imageLoadCleanup = null;
  };

  const showSpinner = (isError = false) => {
    if (frame._imageLoadToken !== loadToken) return;
    frame.classList.add("is-loading", "show-spinner");
    frame.classList.toggle("has-image-error", isError);
    frame.setAttribute("aria-busy", "true");
  };

  const watchImage = () => {
    image.removeEventListener("load", finishLoading);
    image.removeEventListener("error", handleLoadError);
    image.addEventListener("load", finishLoading, { once: true });
    image.addEventListener("error", handleLoadError, { once: true });
  };

  function handleLoadError() {
    if (frame._imageLoadToken !== loadToken) return;
    window.clearTimeout(spinnerTimer);
    showSpinner(true);
    window.removeEventListener("online", retryLoading);
    window.addEventListener("online", retryLoading, { once: true });
  }

  function retryLoading() {
    if (frame._imageLoadToken !== loadToken || !source) return;
    window.clearTimeout(spinnerTimer);
    frame.classList.remove("has-image-error");
    showSpinner();
    watchImage();
    image.removeAttribute("src");
    window.requestAnimationFrame(() => {
      if (frame._imageLoadToken === loadToken) image.setAttribute("src", source);
    });
  }

  frame._privacyMaskUpdate = positionMasks;

  if (image.complete && image.naturalWidth > 0) {
    finishLoading();
    return;
  }

  frame.setAttribute("aria-busy", "true");
  watchImage();

  if (image.complete) {
    handleLoadError();
    frame._imageLoadCleanup = cleanup;
    return;
  }

  spinnerTimer = window.setTimeout(() => {
    if (frame._imageLoadToken !== loadToken || image.complete) return;
    showSpinner();
  }, IMAGE_SPINNER_DELAY_MS);
  frame._imageLoadCleanup = cleanup;
}

function initStaticImageLoaders(root = document) {
  $$('[data-static-image-frame]', root).forEach((frame) => {
    const image = $("img", frame);
    setupProtectedImageFrame(frame, image, null, image?.getAttribute("src"));
  });
}

function updateFilterScrollIndicator() {
  const filters = $("#projectFilters");
  const track = $("#filterScrollbar");
  const thumb = $("#filterScrollThumb");
  if (!filters || !track || !thumb) return;

  const overflow = filters.scrollWidth > filters.clientWidth + 1;
  track.classList.toggle("is-hidden", !overflow);
  if (!overflow || !track.clientWidth) return;

  const thumbWidth = Math.max(24, track.clientWidth * (filters.clientWidth / filters.scrollWidth));
  const maxScroll = filters.scrollWidth - filters.clientWidth;
  const maxTravel = track.clientWidth - thumbWidth;
  thumb.style.width = `${thumbWidth}px`;
  thumb.style.transform = `translateX(${maxScroll ? (filters.scrollLeft / maxScroll) * maxTravel : 0}px)`;
}

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text);
  }

  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "");
  temp.style.position = "absolute";
  temp.style.left = "-9999px";
  document.body.appendChild(temp);
  temp.select();
  document.execCommand("copy");
  temp.remove();
  return Promise.resolve();
}

function setModalState(isOpen) {
  const anyOpen = isOpen || $(".modal-shell.open");
  document.body.classList.toggle("modal-open", Boolean(anyOpen));
}

function renderTypedCode(text) {
  const escaped = escapeHtml(text);
  return escaped
    .split("\n")
    .map((line) => {
      if (line.trim().startsWith("//")) {
        return `<span class="comment">${line}</span>`;
      }

      return line.replace(/(&quot;[^&]*?&quot;)/g, '<span class="string">$1</span>');
    })
    .join("\n");
}

function startTyping() {
  const target = $("#typedCode");
  if (!target) return;

  let i = 0;

  function typeNext() {
    if (i > TYPING_TEXT.length) return;

    const char = TYPING_TEXT[i] || "";
    target.innerHTML = `${renderTypedCode(TYPING_TEXT.slice(0, i))}<span class="cursor">▎</span>`;
    i += 1;

    const pause =
      char === "\n" ? 280 :
      ["{", "}", "[", "]", ",", ";"].includes(char) ? 120 :
      char === " " ? 34 :
      54 + Math.floor(Math.random() * 58);

    setTimeout(typeNext, pause);
  }

  setTimeout(typeNext, 450);
}

function initNavbar() {
  const nav = $("#siteNav");
  const toggle = $("#mobileToggle");
  const menu = $("#mobileMenu");
  const toggleIcon = $("ion-icon", toggle);

  function handleScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  }

  function closeMenu() {
    menu.classList.remove("open");
    nav.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
    toggleIcon.setAttribute("name", "menu-outline");
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  toggle.addEventListener("click", () => {
    const open = !menu.classList.contains("open");
    menu.classList.toggle("open", open);
    nav.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggleIcon.setAttribute("name", open ? "close-outline" : "menu-outline");
  });

  $$("#mobileMenu a").forEach((link) => link.addEventListener("click", closeMenu));
  $$("#mobileMenu button").forEach((button) => button.addEventListener("click", closeMenu));
}

function initReveal() {
  const items = $$(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (window.__portfolioRevealObserver) {
    window.__portfolioRevealObserver.disconnect();
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const isProjectCard = entry.target.classList.contains("project-scroll-card");

        if (entry.isIntersecting) {
          if (isProjectCard) {
            clearTimeout(entry.target._projectRevealTimer);
            entry.target.classList.remove("project-ready");
          }
          entry.target.classList.add("is-visible");

          if (isProjectCard) {
            const delay = Number(entry.target.dataset.revealDelay || 0);
            entry.target._projectRevealTimer = setTimeout(() => {
              entry.target.classList.add("project-ready");
            }, delay + 850);
          }
        } else {
          if (isProjectCard) {
            clearTimeout(entry.target._projectRevealTimer);
            const rect = entry.boundingClientRect;
            entry.target.dataset.enterFrom = rect.bottom <= 0 || rect.top < 0 ? "top" : "bottom";
            entry.target.classList.remove("project-ready");
          }
          entry.target.classList.remove("is-visible");
        }
      });
    },
    { threshold: 0.12, rootMargin: "-10% 0px -10% 0px" }
  );

  window.__portfolioRevealObserver = observer;
  items.forEach((item) => observer.observe(item));
}

function initScrollProgress() {
  const progress = $("#scrollProgress");
  if (!progress) return;

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    progress.style.width = `${Math.min(100, Math.max(0, value))}%`;
    document.body.classList.toggle("is-scrolling", window.scrollY > 8);
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
}

function initRolePill() {
  const pill = $("#rolePill");
  if (!pill) return;
  const label = $("span", pill);

  let index = 0;
  const cycleRole = () => {
    index = (index + 1) % ROLES.length;
    pill.classList.remove("role-changing");
    void pill.offsetWidth;
    label.textContent = ROLES[index];
    pill.classList.add("role-changing");
    pill.animate(
      [
        { transform: "scale(0.94) rotate(-2deg)", opacity: 0.7 },
        { transform: "scale(1)", opacity: 1 },
      ],
      { duration: 240, easing: "ease-out" }
    );
    window.setTimeout(() => pill.classList.remove("role-changing"), 480);
  };

  pill.addEventListener("click", cycleRole);
  window.setInterval(cycleRole, 2500);
}

function renderStatCards() {
  const grid = $("#statGrid");
  grid.innerHTML = STAT_CARDS.map(
    (card, index) => `
      <article class="stat-card reveal ${index % 2 ? "reveal-right" : "reveal-left"}" style="transition-delay:${index * 70}ms">
        ${icon(card.icon)}
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.desc)}</p>
      </article>
    `
  ).join("");
}

function getExperiencePreview(description) {
  const firstSentence = description.match(/^.*?[.!?](?:\s|$)/);
  return (firstSentence?.[0] || description).trim();
}

function renderExperience() {
  const target = $("#experienceTimeline");
  target.innerHTML = EXPERIENCES.map(
    (item, index) => `
      <div class="timeline-item reveal ${index % 2 ? "reveal-right" : "reveal-left"}" style="transition-delay:${index * 90}ms">
        <span class="timeline-node"></span>
        <article class="experience-card" data-experience-index="${index}" tabindex="0" role="button" aria-label="Open ${escapeHtml(item.title)} details">
          <div class="experience-meta">
            <span>${icon("calendar-outline")}${escapeHtml(item.period)}</span>
            <span>${icon("business-outline")}${escapeHtml(item.company)}</span>
          </div>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(getExperiencePreview(item.description))}</p>
          <div class="tag-list">
            ${item.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="experience-click-row">
            <span class="experience-click-hint">${icon("open-outline")}click card for details</span>
            <button class="experience-details-button" data-experience-button="${index}">
              ${icon("open-outline")} View Work Details
            </button>
          </div>
        </article>
      </div>
    `
  ).join("");

  $$("[data-experience-index]", target).forEach((card) => {
    const open = () => openExperienceModal(Number(card.dataset.experienceIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });

  $$("[data-experience-button]", target).forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      openExperienceModal(Number(button.dataset.experienceButton));
    });
  });
}

function renderProjectFilters() {
  const target = $("#projectFilters");
  target.innerHTML = CATEGORIES.map(
    (category) => `
      <button class="filter-button ${category === activeCategory ? "active" : ""}" data-filter="${escapeHtml(category)}">
        ${escapeHtml(category)}
      </button>
    `
  ).join("");

  $$(".filter-button", target).forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.filter;
      renderProjectFilters();
      renderProjects();
    });
  });

  if (!target.dataset.scrollBound) {
    target.addEventListener("scroll", updateFilterScrollIndicator, { passive: true });
    target.dataset.scrollBound = "true";
  }

  window.requestAnimationFrame(() => {
    const activeButton = $(".filter-button.active", target);
    if (activeButton) {
      const centeredLeft = activeButton.offsetLeft - (target.clientWidth - activeButton.offsetWidth) / 2;
      target.scrollTo({ left: Math.max(0, centeredLeft), behavior: "smooth" });
    }
    updateFilterScrollIndicator();
  });
}

function renderProjects() {
  const target = $("#projectGrid");
  const filtered = PROJECTS.filter((project) => {
    if (activeCategory === "All") return true;
    if (activeCategory === "Ongoing") return project.ongoing;
    if (activeCategory === "Solo Projects") return /Solo Project/i.test(project.contribution);
    if (activeCategory === "OJT Project") return /VEENPOS|OJT/i.test(`${project.title} ${project.contribution}`);
    if (activeCategory === "Thesis / School Activity") {
      return /Thesis|School Activity/i.test(`${project.title} ${project.category} ${project.contribution}`)
        || (project.filters || []).includes(activeCategory);
    }
    return project.category === activeCategory || (project.filters || []).includes(activeCategory);
  });

  target.innerHTML = filtered
    .map((project, index) => {
      const stack = project.stack.slice(0, 3).map((tech) => `<span class="stack-tag">${escapeHtml(tech)}</span>`).join("");
      const hiddenCount = project.stack.length - 3;
      return `
        <article
          class="project-card reveal project-scroll-card"
          data-project-order="${index}"
          data-enter-from="bottom"
          data-reveal-delay="${Math.min(index * 65, 260)}"
          style="--project-delay:${Math.min(index * 65, 260)}ms"
        >
          <button class="project-image-button" data-image-frame data-project-id="${project.id}" aria-label="Open ${escapeHtml(project.title)} details">
            <span class="media-loader" aria-hidden="true"></span>
            <img src="${project.image}" alt="${escapeHtml(project.title)}" loading="lazy" />
            <span class="project-badges">
              <span class="project-badge">${escapeHtml(project.type)}</span>
              ${project.ongoing ? '<span class="ongoing-badge"><span></span>Ongoing</span>' : ""}
            </span>
            <span class="project-arrow">${icon("arrow-up-outline")}</span>
          </button>
          <div class="project-content">
            <button class="project-title-button" data-project-id="${project.id}">
              <p class="project-meta">${escapeHtml(project.category)}</p>
              <h3>${escapeHtml(project.title)}</h3>
            </button>
            <div class="project-rating" aria-label="Featured project rating">
              ${Array.from({ length: 5 }, () => icon("star")).join("")}
            </div>
            <p class="project-description">${escapeHtml(project.description)}</p>
            <div class="project-stack-preview">
              ${stack}
              ${hiddenCount > 0 ? `<span class="more-tag">+${hiddenCount}</span>` : ""}
            </div>
            <button class="details-button" data-project-id="${project.id}">
              ${icon("arrow-up-outline")}
              View Details
            </button>
          </div>
        </article>
      `;
    })
    .join("");

  $$("[data-project-id]", target).forEach((button) => {
    button.addEventListener("click", () => openProjectModal(Number(button.dataset.projectId)));
  });

  $$("[data-image-frame]", target).forEach((frame) => {
    const project = PROJECTS.find((item) => item.id === Number(frame.dataset.projectId));
    setupProtectedImageFrame(frame, $("img", frame), project, project?.image);
  });

  initReveal();
}

function openProjectModal(id) {
  selectedProject = PROJECTS.find((project) => project.id === id);
  activePreviewIndex = 0;
  renderProjectModal();
  $("#projectModal").classList.add("open");
  $("#projectModal").setAttribute("aria-hidden", "false");
  setModalState(true);
}

function closeProjectModal() {
  $("#projectModal").classList.remove("open");
  $("#projectModal").setAttribute("aria-hidden", "true");
  selectedProject = null;
  setModalState(false);
}

function openExperienceModal(index) {
  selectedExperience = EXPERIENCES[index];
  if (!selectedExperience) return;

  $("#experienceModalTitle").textContent = selectedExperience.title;
  $("#experienceModalMeta").innerHTML = `
    <span>${icon("calendar-outline")}${escapeHtml(selectedExperience.period)}</span>
    <span>${icon("business-outline")}${escapeHtml(selectedExperience.company)}</span>
  `;
  $("#experienceModalRole").innerHTML = `
    <p>${icon("person-circle-outline")}role_context</p>
    <div>${escapeHtml(selectedExperience.role || "Work Experience")}</div>
  `;
  $("#experienceModalDescription").textContent = selectedExperience.description;
  $("#experienceModalHighlights").innerHTML = (selectedExperience.highlights || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  $("#experienceModalStack").innerHTML = selectedExperience.tags.map((tag) => `<span class="stack-tag">${escapeHtml(tag)}</span>`).join("");

  $("#experienceModal").classList.add("open");
  $("#experienceModal").setAttribute("aria-hidden", "false");
  setModalState(true);
}

function closeExperienceModal() {
  $("#experienceModal").classList.remove("open");
  $("#experienceModal").setAttribute("aria-hidden", "true");
  selectedExperience = null;
  setModalState(false);
}

function renderProjectModal() {
  if (!selectedProject) return;

  const previews = selectedProject.previews || [];
  const heroFrame = $(".project-modal-hero");
  $("#modalHeroImage").src = selectedProject.image;
  $("#modalHeroImage").alt = selectedProject.title;
  setupProtectedImageFrame(heroFrame, $("#modalHeroImage"), selectedProject, selectedProject.image);
  $("#modalBadges").innerHTML = `
    <span class="project-badge">${escapeHtml(selectedProject.type)}</span>
    ${selectedProject.ongoing ? '<span class="ongoing-badge"><span></span>Ongoing</span>' : ""}
  `;
  $("#projectModalTitle").textContent = selectedProject.title;
  $("#modalMeta").innerHTML = `
    <span>${icon("layers-outline")}${escapeHtml(selectedProject.category)}</span>
  `;
  $("#modalRole").innerHTML = `
    <p>${icon("layers-outline")}my_role</p>
    <div>${escapeHtml(selectedProject.contribution)}</div>
  `;
  $("#modalDescription").textContent = selectedProject.description;
  $("#modalFeatures").innerHTML = selectedProject.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("");
  $("#modalStack").innerHTML = selectedProject.stack.map((tech) => `<span class="stack-tag">${escapeHtml(tech)}</span>`).join("");

  const activeImage = previews[activePreviewIndex] || selectedProject.image;
  $("#modalPreview").innerHTML = previews.length
    ? `
      <p class="preview-title">${icon("desktop-outline")}ui_preview</p>
      <div class="browser-preview">
        <div class="browser-chrome">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="browser-address">${escapeHtml(selectedProject.demoUrl || "localhost:4200")}</span>
        </div>
        <div class="preview-image-wrap" data-image-frame>
          <span class="media-loader" aria-hidden="true"></span>
          <img src="${activeImage}" alt="UI preview ${activePreviewIndex + 1}" />
          ${
            previews.length > 1
              ? `
                <button class="preview-arrow prev" data-preview-prev aria-label="Previous preview">${icon("chevron-back-outline")}</button>
                <button class="preview-arrow next" data-preview-next aria-label="Next preview">${icon("chevron-forward-outline")}</button>
              `
              : ""
          }
        </div>
        ${
          previews.length > 1
            ? `
              <div class="mobile-preview-nav">
                <button data-preview-prev>${icon("chevron-back-outline")}Prev</button>
                <span>${activePreviewIndex + 1} / ${previews.length}</span>
                <button data-preview-next>Next${icon("chevron-forward-outline")}</button>
              </div>
              <div class="preview-dots">
                ${previews
                  .map((_, index) => `<button class="${index === activePreviewIndex ? "active" : ""}" data-preview-index="${index}" aria-label="Open preview ${index + 1}"></button>`)
                  .join("")}
              </div>
            `
            : ""
        }
      </div>
    `
    : "";

  const previewImage = $("#modalPreview .preview-image-wrap img");
  const previewFrame = $("#modalPreview .preview-image-wrap");
  setupProtectedImageFrame(previewFrame, previewImage, selectedProject, activeImage);

  $$("[data-preview-prev]").forEach((button) =>
    button.addEventListener("click", () => {
      activePreviewIndex = (activePreviewIndex - 1 + previews.length) % previews.length;
      renderProjectModal();
    })
  );

  $$("[data-preview-next]").forEach((button) =>
    button.addEventListener("click", () => {
      activePreviewIndex = (activePreviewIndex + 1) % previews.length;
      renderProjectModal();
    })
  );

  $$("[data-preview-index]").forEach((button) =>
    button.addEventListener("click", () => {
      activePreviewIndex = Number(button.dataset.previewIndex);
      renderProjectModal();
    })
  );
}

function initProjectModal() {
  $$("[data-close-project]").forEach((item) => item.addEventListener("click", closeProjectModal));
}

function initExperienceModal() {
  $$("[data-close-experience]").forEach((item) => item.addEventListener("click", closeExperienceModal));
}

function renderSkills() {
  const target = $("#skillsStack");
  target.innerHTML = SKILL_CATEGORIES.map(
    (category, categoryIndex) => `
      <section class="skill-category reveal ${categoryIndex % 2 ? "reveal-right" : "reveal-left"}" style="transition-delay:${categoryIndex * 80}ms">
        <div class="skill-category-head">
          <span>${escapeHtml(category.tag)}</span>
          <h3>${escapeHtml(category.title)}</h3>
        </div>
        <div class="skill-grid">
          ${category.skills
            .map(
              (skill) => `
                <article class="skill-card">
                  <span class="skill-icon">${icon(skill.icon || "code-slash-outline")}</span>
                  <div class="skill-main">
                    <div class="skill-line">
                      <strong>${escapeHtml(skill.name)}</strong>
                      <span class="level ${skill.level.toLowerCase()}">${escapeHtml(skill.level)}</span>
                    </div>
                    ${skill.details ? `<p>${escapeHtml(skill.details)}</p>` : ""}
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    `
  ).join("");
}

function renderTestimonials() {
  const target = $("#testimonialGrid");
  target.innerHTML = TESTIMONIALS.map(
    (item, index) => `
      <article class="testimonial-card reveal ${index % 2 ? "reveal-right" : "reveal-left"}" style="transition-delay:${index * 80}ms">
        <span class="quote-mark">${icon("chatbox-ellipses-outline")}</span>
        <div class="stars">
          ${Array.from({ length: 5 }, () => icon("star")).join("")}
        </div>
        <blockquote>"${escapeHtml(item.quote)}"</blockquote>
        <div class="testimonial-person">
          <span class="initials logo-initials" data-image-frame data-static-image-frame>
            <span class="media-loader" aria-hidden="true"></span>
            <img src="${escapeHtml(item.logo)}" alt="${escapeHtml(item.initials)} logo" loading="lazy" />
          </span>
          <p>${escapeHtml(item.name)}</p>
        </div>
      </article>
    `
  ).join("");
}

function renderHobbies() {
  const target = $("#hobbyGrid");
  target.innerHTML = HOBBIES.map(
    (item, index) => `
      <article class="hobby-card reveal ${index % 2 ? "reveal-right" : "reveal-left"}" style="transition-delay:${index * 50}ms">
        <span class="hobby-icon">${icon(item.icon)}</span>
        <h3>${escapeHtml(item.label)}</h3>
        <p>${escapeHtml(item.desc)}</p>
      </article>
    `
  ).join("");
}

function initContactModal() {
  const modal = $("#contactModal");

  function open() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    setModalState(true);
  }

  function close() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    setModalState(false);
  }

  $$("[data-open-contact]").forEach((button) => button.addEventListener("click", open));
  $$("[data-close-contact]").forEach((button) => button.addEventListener("click", close));

  $$("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", () => {
      copyText("jarelramostanghal@gmail.com").then(() => {
        const status = $("em", button);
        button.classList.add("copied");
        status.innerHTML = `${icon("checkmark-outline")}<small>200 OK</small>`;
        setTimeout(() => {
          button.classList.remove("copied");
          status.innerHTML = `${icon("copy-outline")}<small>copy</small>`;
        }, 2000);
      });
    });
  });

  $$("[data-copy-phone]").forEach((button) => {
    button.addEventListener("click", () => {
      copyText(button.dataset.phone || "+639063408609").then(() => {
        const status = $("em", button);
        button.classList.add("copied");
        status.innerHTML = `${icon("checkmark-outline")}<small>200 OK</small>`;
        setTimeout(() => {
          button.classList.remove("copied");
          status.innerHTML = `${icon("copy-outline")}<small>copy</small>`;
        }, 2000);
      });
    });
  });

  return { close };
}

function initContactSection() {
  const emailCard = $("#copyEmailLarge");
  const emailStatus = $("#emailLargeStatus");
  const phoneButton = $("#copyPhoneChip");
  const phoneButtonAlt = $("#copyPhoneChipAlt");
  const phoneStatus = $("#phoneChipStatus");

  emailCard.addEventListener("click", () => {
    copyText("jarelramostanghal@gmail.com").then(() => {
      emailCard.classList.add("copied");
      emailStatus.textContent = "Status: 200 OK — Email Copied";
      setTimeout(() => {
        emailCard.classList.remove("copied");
        emailStatus.textContent = "copy_to_clipboard";
      }, 2500);
    });
  });

  phoneButton.addEventListener("click", () => {
    copyText("+639063408609").then(() => {
      phoneStatus.textContent = "Status: 200 OK — Phone Copied";
      setTimeout(() => {
        phoneStatus.textContent = "";
      }, 2500);
    });
  });

  phoneButtonAlt.addEventListener("click", () => {
    copyText("+639241049592").then(() => {
      phoneStatus.textContent = "Status: 200 OK — Second Phone Copied";
      setTimeout(() => {
        phoneStatus.textContent = "";
      }, 2500);
    });
  });
}

function formatBytes(bytes = 0) {
  if (!bytes) return "0 KB";
  const units = ["B", "KB", "MB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value >= 10 || unitIndex === 0 ? Math.round(value) : value.toFixed(1)} ${units[unitIndex]}`;
}

function setResumeProgress(button, percent, label) {
  const safePercent = Math.min(100, Math.max(0, Math.round(percent)));
  const status = $(".resume-status", button);
  const isCompactHeroButton = Boolean(button.closest(".hero-actions")) && window.matchMedia("(max-width: 767px)").matches;
  button.style.setProperty("--resume-progress", `${safePercent}%`);
  if (status) status.textContent = isCompactHeroButton ? `${safePercent}%` : label || `${safePercent}%`;
}

function downloadBlob(blob, filename) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = objectUrl;
  link.download = filename;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

function directResumeDownload(button) {
  const link = document.createElement("a");
  link.href = button.getAttribute("href") || RESUME_FILE;
  link.download = button.getAttribute("download") || RESUME_FILENAME;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

function waitFor(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function fetchResumeWithProgress(url, onProgress) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "blob";

    request.onprogress = (event) => {
      if (event.lengthComputable) {
        onProgress((event.loaded / event.total) * 100, `${formatBytes(event.loaded)} / ${formatBytes(event.total)}`);
      } else {
        onProgress(45, `${formatBytes(event.loaded)} loaded`);
      }
    };

    request.onload = () => {
      if ((request.status >= 200 && request.status < 300) || (request.status === 0 && request.response)) {
        resolve(request.response);
      } else {
        reject(new Error(`Download failed with status ${request.status}`));
      }
    };

    request.onerror = reject;
    request.send();
  });
}

function startResumeProgressCounter(button) {
  const startedAt = performance.now();
  const timer = setInterval(() => {
    const elapsed = performance.now() - startedAt;
    const percent = Math.min(92, Math.floor((elapsed / RESUME_MIN_LOADING_MS) * 92));
    const current = Number.parseFloat(button.style.getPropertyValue("--resume-progress")) || 0;

    if (percent > current) {
      setResumeProgress(button, percent, `${percent}%`);
    }
  }, 80);

  return () => clearInterval(timer);
}

function initResumeDownload() {
  $$("[data-resume-download]").forEach((button) => {
    const label = $(".resume-label", button);
    const originalLabel = label ? label.textContent : "Download CV";

    button.addEventListener("click", async (event) => {
      event.preventDefault();
      if (button.classList.contains("is-loading")) return;

      const url = button.getAttribute("href") || RESUME_FILE;
      const filename = button.getAttribute("download") || RESUME_FILENAME;
      const loadingStartedAt = performance.now();

      button.classList.add("is-loading");
      button.classList.remove("is-complete");
      button.setAttribute("aria-busy", "true");
      button.setAttribute("aria-disabled", "true");
      if (label) label.textContent = "Preparing CV";
      setResumeProgress(button, 1, "1%");
      const stopProgressCounter = startResumeProgressCounter(button);

      try {
        const blob = await fetchResumeWithProgress(url, (percent, progressLabel) => {
          setResumeProgress(button, Math.min(percent, 92), progressLabel);
        });
        const visibleTime = performance.now() - loadingStartedAt;
        if (visibleTime < RESUME_MIN_LOADING_MS) await waitFor(RESUME_MIN_LOADING_MS - visibleTime);

        stopProgressCounter();
        setResumeProgress(button, 100, `Ready - ${formatBytes(blob.size)}`);
        downloadBlob(blob, filename);
        button.classList.add("is-complete");
        if (label) label.textContent = "Downloaded";
      } catch (error) {
        stopProgressCounter();
        setResumeProgress(button, 100, "Opening download");
        directResumeDownload(button);
        if (label) label.textContent = "Downloading";
      } finally {
        setTimeout(() => {
          button.classList.remove("is-loading", "is-complete");
          button.removeAttribute("aria-busy");
          button.removeAttribute("aria-disabled");
          button.style.removeProperty("--resume-progress");
          if (label) label.textContent = originalLabel;
          const status = $(".resume-status", button);
          if (status) status.textContent = "";
        }, 1600);
      }
    });
  });
}

function initLoader() {
  const loader = $("#pageLoader");
  if (!loader) return;
  const bar = $(".loader-bar span", loader);
  const text = $("#loaderText");
  let current = 0;
  let completed = false;
  const startedAt = performance.now();

  function getLoaderLabel(value) {
    if (value < 18) return "booting_portfolio";
    if (value < 42) return "loading_assets";
    if (value < 64) return "binding_events";
    if (value < 86) return "rendering_projects";
    if (value < 100) return "warming_interactions";
    return "portfolio_ready";
  }

  function setProgress(value, label = getLoaderLabel(value)) {
    current = Math.max(current, Math.min(100, Math.round(value)));
    loader.style.setProperty("--loader-progress", `${current}%`);
    if (bar) bar.style.width = `${current}%`;
    if (text) text.textContent = `${label} ${current}%`;
  }

  const hide = () => {
    if (completed) return;
    completed = true;
    setProgress(100, "portfolio_ready");
    document.body.classList.add("site-ready");
    loader.classList.add("done");
    setTimeout(() => loader.remove(), PAGE_LOADER_FADE_MS);
  };

  setProgress(0, "booting_portfolio");

  function tick(now) {
    if (completed) return;

    const elapsed = now - startedAt;
    const progress = Math.min(100, (elapsed / PAGE_LOADER_PROGRESS_MS) * 100);
    setProgress(progress);

    if (progress < 100) {
      requestAnimationFrame(tick);
      return;
    }

    setProgress(100, "portfolio_ready");
    hide();
  }

  requestAnimationFrame(tick);
  setTimeout(hide, PAGE_LOADER_PROGRESS_MS);
}

function initGlobalKeys(contactApi) {
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    if ($("#projectModal").classList.contains("open")) closeProjectModal();
    if ($("#experienceModal").classList.contains("open")) closeExperienceModal();
    if ($("#contactModal").classList.contains("open")) contactApi.close();
  });
}

function initFooterYear() {
  const year = new Date().getFullYear();
  $("#footerYear").textContent = `© ${year} Jarel Rendy R. Tanghal`;
}

function renderAll() {
  renderStatCards();
  renderExperience();
  renderProjectFilters();
  renderProjects();
  renderSkills();
  renderTestimonials();
  renderHobbies();
}

document.addEventListener("DOMContentLoaded", () => {
  scheduleResetToStart();
  renderAll();
  initStaticImageLoaders();
  window.addEventListener("resize", () => {
    updateFilterScrollIndicator();
    $$("[data-image-frame]").forEach((frame) => frame._privacyMaskUpdate?.());
  }, { passive: true });
  initLoader();
  initNavbar();
  initRolePill();
  initScrollProgress();
  initProjectModal();
  initExperienceModal();
  initContactSection();
  initResumeDownload();
  const contactApi = initContactModal();
  initGlobalKeys(contactApi);
  initFooterYear();
  initReveal();
  startTyping();
});
