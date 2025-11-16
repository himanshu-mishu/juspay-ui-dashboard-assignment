// src/data/sidebarData.js
export const iconMap = {
  default: "default",
  ecommerce: "ecommerce",
  projects: "projects",
  courses: "courses",
  profile: "profile",
  account: "account",
  corporate: "corporate",
  blog: "blog",
  social: "social",
};

export const navSections = [
  {
    key: "favorites",
    title: "Favorites",
    items: [
      { key: "overview", label: "Overview", href: "/overview" },
      { key: "projects", label: "Projects", href: "/projects" },
    ],
  },
  {
    key: "dashboard",
    title: "Dashboard",
    items: [
      {
        key: "default",
        label: "Default",
        icon: iconMap.default,
        expandable: true,
        subItems: [
          { key: "analytics", label: "Analytics", href: "/default/analytics" },
          { key: "overview", label: "Overview", href: "/default/overview" },
          { key: "trends", label: "Trends", href: "/default/trends" },
        ],
        href: "/default",
      },
      {
        key: "ecommerce",
        label: "eCommerce",
        icon: iconMap.ecommerce,
        expandable: true,
        subItems: [
          { key: "orders", label: "Orders", href: "/ecommerce/orders" },
          { key: "products", label: "Products", href: "/ecommerce/products" },
          {
            key: "reports",
            label: "Sales Reports",
            href: "/ecommerce/reports",
          },
        ],
        href: "/ecommerce",
      },
      {
        key: "projects",
        label: "Projects",
        icon: iconMap.projects,
        expandable: true,
        subItems: [
          { key: "list", label: "Project List", href: "/projects/list" },
          {
            key: "milestones",
            label: "Milestones",
            href: "/projects/milestones",
          },
          { key: "teams", label: "Teams", href: "/projects/teams" },
        ],
        href: "/projects",
      },
      {
        key: "courses",
        label: "Online Courses",
        icon: iconMap.courses,
        expandable: true,
        subItems: [
          { key: "catalog", label: "Course Catalog", href: "/courses/catalog" },
          {
            key: "enrolled",
            label: "Enrolled Courses",
            href: "/courses/enrolled",
          },
          { key: "progress", label: "Progress", href: "/courses/progress" },
        ],
        href: "/courses",
      },
    ],
  },
  {
    key: "pages",
    title: "Pages",
    items: [
      {
        key: "user-profile",
        label: "User Profile",
        icon: iconMap.profile,
        expandable: true,
        subItems: [
          { key: "overview", label: "Overview", href: "/profile/overview" },
          { key: "projects", label: "Projects", href: "/profile/projects" },
          { key: "campaigns", label: "Campaigns", href: "/profile/campaigns" },
          { key: "documents", label: "Documents", href: "/profile/documents" },
          { key: "followers", label: "Followers", href: "/profile/followers" },
        ],
      },
      {
        key: "account",
        label: "Account",
        icon: iconMap.account,
        expandable: true,
        subItems: [
          {
            key: "profile",
            label: "Profile Settings",
            href: "/account/profile",
          },
          { key: "orders", label: "Orders", href: "/account/orders" },
          { key: "saved", label: "Saved Items", href: "/account/saved" },
          {
            key: "billing",
            label: "Billing & Payments",
            href: "/account/billing",
          },
          { key: "logout", label: "Logout", href: "/logout" },
        ],
      },
      {
        key: "corporate",
        label: "Corporate",
        icon: iconMap.corporate,
        expandable: true,
        subItems: [
          { key: "about", label: "About Us", href: "/corporate/about" },
          { key: "careers", label: "Careers", href: "/corporate/careers" },
          {
            key: "investors",
            label: "Investor Relations",
            href: "/corporate/investors",
          },
          { key: "news", label: "Newsroom", href: "/corporate/news" },
          {
            key: "partners",
            label: "Partnerships",
            href: "/corporate/partners",
          },
        ],
      },
      {
        key: "blog",
        label: "Blog",
        icon: iconMap.blog,
        expandable: true,
        subItems: [
          { key: "latest", label: "Latest Articles", href: "/blog/latest" },
          { key: "tech", label: "Tech Updates", href: "/blog/tech" },
          {
            key: "business",
            label: "Business Insights",
            href: "/blog/business",
          },
          {
            key: "case-studies",
            label: "Case Studies",
            href: "/blog/case-studies",
          },
          {
            key: "community",
            label: "Community Stories",
            href: "/blog/community",
          },
        ],
      },
      {
        key: "social",
        label: "Social",
        icon: iconMap.social,
        expandable: true,
        subItems: [
          {
            key: "instagram",
            label: "Instagram",
            href: "https://instagram.com",
          },
          { key: "twitter", label: "Twitter/X", href: "https://twitter.com" },
          { key: "youtube", label: "YouTube", href: "https://youtube.com" },
          { key: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
          { key: "facebook", label: "Facebook", href: "https://facebook.com" },
        ],
      },
    ],
  },
];
