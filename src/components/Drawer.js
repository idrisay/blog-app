import { BsPlusSquareFill } from "react-icons/bs";
import React from "react";

const Drawer = ({ children, isOpen, setIsOpen }) => {
  return (
    <div>
      <div className="absolute top-2 right-2">
        <BsPlusSquareFill
          className="cursor-pointer"
          size={32}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div>{isOpen ? <div>{children}</div> : null}</div>
    </div>
  );
};

export default Drawer;
