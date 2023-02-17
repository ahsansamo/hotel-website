import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// Components
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
// Scroll Top Component
import ScrollToTop from "../components/ScrollToTop";

// Context
import { RoomContext } from "../context/RoomContext";
// Icons
import { FaCheck } from "react-icons/fa";

const RoomDetails = () => {
  const { rooms } = useContext(RoomContext);
  const { id } = useParams();
  // Get Room
  const room = rooms.find((room) => {
    return room.id === Number(id);
  });

  // Destructuring Room
  const { name, description, facilities, imageLg, price } = room;

  return (
    <section>
      <ScrollToTop />
      {/* Banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* Overlay */}
        <div className="absolute w-full h-full bg-black/70 "></div>
        {/* Title */}
        <h1 className="text-6xl text-white z-20 font-primary text-center">
          {" "}
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* Left */}
          <div className="w-full h-full lg:w-[60%] px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            {/* Facilities */}
            <div className="mt-12">
              <h3 className="h3 mb-3">Room Facilities</h3>
              <p className="mb-12">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, eum. Modi voluptate quidem debitis illo dolorum, odio
                distinctio accusamus saepe et deserunt incidunt sequi expedita
                aliquam aperiam explicabo ab voluptatum!
              </p>
              {/* Grid */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {facilities.map((facility, index) => {
                  // Destructuring Facility
                  const { name, icon } = facility;
                  return (
                    <div
                      className="flex items-center gap-x-3 flex-1"
                      key={index}
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-base text-accent">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-full h-full lg:w-[40%]">
            {/* Reservation */}
            <div className="py-8 px-6 bg-accent/20 mb-12">
              <div className="flex flex-col space-y-4 mb-4">
                <h3>Your Reservation</h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
                <button className="btn btn-lg btn-primary w-full">
                  Book Now For ${price}
                </button>
              </div>
            </div>
            {/* Rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident deserunt nostrum corrupti. Laudantium at, repudiandae
                voluptas pariatur vel excepturi totam.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-In: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  Check-Out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                   No Pets
                </li>
                <li className="flex items-center gap-x-4">
                  <FaCheck className="text-accent" />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
