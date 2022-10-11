import React from "react";
import Button from "../Button/Button";

const Header = (props) => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="header">
      <Button onClick={onClose}>Закры13242342424242ть</Button>
      <Button onClick={onClose}>Закры13242342424242ть</Button>
      <span className="username">{tg.initDataUnsafe?.user?.username}</span>
    </div>
  );
};

export default Header;
