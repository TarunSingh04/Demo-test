import React from "react";
import styles from "./styles.module.scss";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaTasks } from "react-icons/fa";
import { GrScorecard } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
import { PiCertificateThin } from "react-icons/pi";
import { LuShoppingCart } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";  // Import usePathname

const SidebarTabs = [
  {
    tabName: "Dashboard",
    tagNavigate: "/pages/dashboard",
    tabIcon: <LuLayoutDashboard className={styles.sidebarIcon} />,
  },
  {
    tabName: "My Tasks",
    tagNavigate: "/pages/mytasks",
    tabIcon: <FaTasks className={styles.sidebarIcon} />,
  },
  {
    tabName: "Scorecard",
    tagNavigate: "/pages/scorecard",
    tabIcon: <GrScorecard className={styles.sidebarIcon} />,
  },
  {
    tabName: "Reports",
    tagNavigate: "/pages/reports",
    tabIcon: <TbReportAnalytics className={styles.sidebarIcon} />,
  },
  {
    tabName: "Sustainability Badge",
    tagNavigate: "/pages/sustainability-badge",
    tabIcon: <SlBadge className={styles.sidebarIcon} />,
  },
  {
    tabName: "Certificates",
    tagNavigate: "/pages/certificates",
    tabIcon: <PiCertificateThin className={styles.sidebarIcon} />,
  },
  {
    tabName: "Utlities",
    tagNavigate: "/pages/utilities",
    tabIcon: <HiOutlineWrenchScrewdriver className={styles.sidebarIcon} />,
  },
  {
    tabName: "Marketplace",
    tagNavigate: "/pages/marketplace",
    tabIcon: <LuShoppingCart className={styles.sidebarIcon} />,
  },
  {
    tabName: "E-learning modules",
    tagNavigate: "/pages/learning",
    tabIcon: <LuBookMarked className={styles.sidebarIcon} />,
  },
  {
    tabName: "ESG News",
    tagNavigate: "/pages/esgnews",
    tabIcon: <IoNewspaperOutline className={styles.sidebarIcon} />,
  },
];

interface SidebarProps {
  defaultRoute: string; // Accept the route as a prop
}

const Sidebar: React.FC<SidebarProps> = ({ defaultRoute }) => {  
  const navigate = useRouter();

  const navigateTo = (tabpath: string) => {
    navigate.push(tabpath);
  };

  return (
    <div className={styles.Sidebar}>
      <div className={styles.upperSection}>
        <div className={styles.SidebarHeader}>
          <div className={styles.AuthHeader}>
            <p>
              Impakter <span>PRO</span>
            </p>
          </div>
          {/* <div className={styles.searchBox}>
            <input type="text" placeholder="Search..." />
            <FaSearch className={styles.searchIcon} />
          </div> */}
        </div>
        <div className={styles.Menu}>
          {SidebarTabs.map((tabs, index) => {
            return (
              <div
                className={defaultRoute === tabs.tagNavigate ? styles.tabActivate : styles.tabs}
                key={index}
                onClick={() => {
                  navigateTo(tabs.tagNavigate || defaultRoute);
                }}
              >
                {tabs.tabIcon}
                <p className={styles.tabName}>{tabs.tabName}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.SidebarFooter}>©2024 IMPAKTER Limited</div>
    </div>
  );
};

export default Sidebar;
