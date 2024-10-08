"use client";
import React, { useState, ComponentType } from "react";
import styles from "./styles.module.scss";
import { IoNotifications } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import Sidebar from "./sidebar/Sidebar";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import chatbotBgm from "../assets/chatbotbgm.png";
import { usePathname, useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

const withDashboardLayout = (WrappedComponent: any, route: string) => {
  const DashboardLayout: React.FC = () => {
    const navigate = useRouter();
    const pathname = usePathname();  
    const [NavItemsShow, setNavItemsShow] = useState<boolean>(false);
    const [chatbotShow, setChatbotShow] = useState<boolean>(false);

    const navigateTo = (pathname:any)=>{
      navigate.push(`/pages/${pathname}`);
    }
    return (
      <div className={styles.dashboardPage}>
        {/* <div className={styles.chatBotDisplay}>
          <Image src={chatbotBgm} width={1000} height={1000} alt="none" className={styles.chatBotImg}/>
        </div> */}
        <Sidebar defaultRoute={route}/>
        <div className={styles.siderbarSpace}></div>
        <div className={styles.Content}>
          <div className={styles.navbar}>
            <div className={styles.NavItems}>
              <div className={styles.searchBox}>
                <input type="text" placeholder="Search..." />
                <FaSearch className={styles.searchIcon} />
              </div> 
              {/* <BsThreeDotsVertical className={styles.navIcons} onClick={()=>{setNavItemsShow(!NavItemsShow)}}/> */}
              <div className={styles.navIconscont}>
              <p><FaUser className={styles.NavIconsHeader} onClick={()=>{navigateTo('profile-info')}}/></p>
              <p><IoNotifications className={styles.NavIconsHeader}/></p>
              <p><FiLogOut className={styles.NavIconsHeader} onClick={()=>{navigate.push("/pages/login-user")}}/></p>
              </div>
            </div>
          </div>
          <div className={NavItemsShow ? styles.Navmenu : styles.NavmenuHide}>
            <p><FaUser className={styles.NavIcons}/>Profile</p>
            <p><IoNotifications className={styles.NavIcons}/>Notifications</p>
            <p><FiLogOut className={styles.NavIcons}/>Logout</p>
          </div>
          {/* Render the passed component based on the route */}
          <WrappedComponent />
          <MdMessage className={styles.chatbot} onClick={() => setChatbotShow(true)} />
        </div>
      </div>
    );
  };

  return DashboardLayout;
};

export default withDashboardLayout;
