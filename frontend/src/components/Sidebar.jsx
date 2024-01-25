import React, { useState } from "react";
import Icon from "../Images/Logo.png";
import Small_Icon from "../Images/Small_Logo.png"
import Profile from "../Images/avatar.jpg";
import Dashboard from "../Images/dashboard.svg";
import SidebarBack from "../Images/sidebar-background.jpeg"
import Performance from "../Images/performance.svg";
import Settings from "../Images/settings.svg";
import Support from "../Images/support.svg";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
    const location = useLocation();
    const name = "Ghost"

    const [closeMenu, setCloseMenu] = useState(false);

    const handleCloseMenu = () => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className={closeMenu === false ? "sidebar" : "sidebar active"}>
            
            <div
                className={
                    closeMenu === false
                        ? "logoContainer"
                        : "logoContainer active"
                }
            >
                <img src={closeMenu === false ? Icon : Small_Icon} alt="icon" className="logo"/>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "burgerContainer"
                        : "burgerContainer active"
                }
            >
                <div
                    className="burgerTrigger"
                    onClick={() => {
                        handleCloseMenu();
                    }}
                ></div>
                <div className="burgerMenu"></div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "profileContainer"
                        : "profileContainer active"
                }
            >
                <img src={Profile} alt="profile" className="profile" />
                <div className="profileContents">
                    <p className="name">Hello, {name}</p>
                    <p>Admin</p>
                </div>
            </div>
            <div
                className={
                    closeMenu === false
                        ? "contentsContainer"
                        : "contentsContainer active"
                }
            >
                <ul>
                    <li className={location.pathname === "/dashboard" ? "active" : ""}>
                        <img src={Dashboard} alt="dashboard" />
                        <a href="/dashboard">dashboard</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/phAnalysis"
                                ? "active"
                                : ""
                        }
                    >
                        <img src={Performance} alt="transactions" />
                        <a href="/phAnalysis">pH Analysis</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/ecAnalysis" ? "active" : ""
                        }
                    >
                        <img src={Performance} alt="Performance" />
                        <a href="/ecAnalysis">EC Analysis</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/tempAnalysis" ? "active" : ""
                        }
                    >
                        <img src={Performance} alt="News" />
                        <a href="/tempAnalysis">Temperature</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/summary" ? "active" : ""
                        }
                    >
                        <img src={Settings} alt="Settings" />
                        <a href="/summary">summary</a>
                    </li>
                    <li
                        className={
                            location.pathname === "/myaccount" ? "active" : ""
                        }
                    >
                        <img src={Support} alt="Support" />
                        <a href="/myaccount">my account</a>
                    </li>
                </ul>

                <img src={SidebarBack} alt="icon" className={closeMenu === false ? "sidebar-background" : "close-background"}/>
            </div>
        </div>
    );
};

export default Sidebar;