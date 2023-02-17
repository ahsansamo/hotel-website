import React, { useContext } from "react";
// Room Context
import { RoomContext } from "../context/RoomContext";
// Headless Li Menu
import { Menu } from "@headlessui/react";
// Icons
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "0 Kids" },
  { name: "1 Kid" },
  { name: "2 Kids" },
  { name: "3 Kids" },
  { name: "4 Kids" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(RoomContext);

  return (
    <Menu as="div" className="w-full h-full bg-white relative">
      {/* Button */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids === "0 Kids" ? "No Kids" : kids}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>
      {/* Items */}
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setKids(li.name)}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full flex justify-center items-center cursor-pointer"
              key={index}
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default KidsDropdown;
