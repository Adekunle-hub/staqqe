import React from "react";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopHeader />
      </div>
      <div className="lg:hidden block">
        <MobileHeader />
      </div>
    </>
  );
};

export default Header;
