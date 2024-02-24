import React, { useState } from "react";
import styles from "./Home.module.scss";
import Button from "../../components/Button/Button";
import { Popover, paperClasses, popoverClasses } from "@mui/material";

export default function Home() {
  const menuList = [
    { id: "main", title: "الرئيسية" },
    {
      id: "tags",
      title: "التصنيفات",
      children: [
        { id: "tags", title: "التصنيفات" },
        { id: "tags", title: "الرئيسية" },
        { id: "tags", title: "المفضلة" },
        { id: "tags", title: "التصنيفات" },
        { id: "tags", title: "الرئيسية" },
      ],
    },
    { id: "favorite", title: "المفضلة" },
    { id: "contact-us", title: "تواصل معنا" },
  ];

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className={styles.homeContainer}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/018/251/146/non_2x/ramadan-arabic-calligraphy-style-on-transparent-background-free-png.png"
        className={styles.logo}
        alt={"logo"}
      />
      <ul className={styles.menu}>
        {menuList.map(({ id, title, children }) => (
          <>
            <li
              key={id}
              className={styles.menuItem}
              onClick={children && handleClick}
              // onMouseLeave={children && handleClose}
            >
              {title} {children && <i class="fi fi-rr-angle-small-down" />}
            </li>
            {children && (
              <Popover
                id={`${id}-popover`}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{
                  [`& .${paperClasses.root}`]: {
                    borderRadius: "8px",
                    padding: "12px",
                    boxShadow: "0 12px 24px -12px rgba(16,24,40,.16)",
                    border: "1px solid #ebf1f4",
                    top: "70px !important",
                  },
                }}
              >
                {children.map(({ id, title }) => (
                  <div>{title}</div>
                ))}
              </Popover>
            )}
          </>
        ))}
      </ul>
      <div className={styles.subscribe}>
        <Button text="تسجيل الدخول" />
      </div>
    </div>
  );
}
