import { useState } from "react";
import { PopoverProp } from "../interfaces/Interfaces";

const Popover = ({ children }: PopoverProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" onMouseOver={togglePopover}>
      <div onMouseLeave={togglePopover}>{children[0]}</div>

      {isOpen && <div className="absolute z-10">{children[1]}</div>}
    </div>
  );
};

export default Popover;
