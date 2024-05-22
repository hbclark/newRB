import { IoIosInformationCircle } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import clsx from "clsx";
import { motion } from "framer-motion";

export default function PriceCard({
  memberType,
  borderColor,
  ageRestriction,
  clubRestriction,
  memberPrice,
}) {

    
  return (
    <>
      <motion.div
        className={`w-72 h-[550px]  border rounded-md border-t-8 ${borderColor} rounded-t-md shadow-xl hover:-translate-y-1
        transition-transform `}
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5,ease: "easeInOut"}}
        whileHover={{ scale: 1.05 }}
      >
        {/* Title */}
        <div className={`mx-4 mb-8 border-b-4 ${borderColor}`}>
          <h2
            className={`flex items-center h-48 text-3xl font-semibold uppercase tracking-light text-center  py-4 px-4  `}
          >
            {" "}
            {memberType}
          </h2>
          <p className=" text-xl text-center pb-4">{ageRestriction}</p>
        </div>
        {/* Card Body */}
        <div className="px-4">
          <p className="flex justify-between items-algin mb-5">
            <span className="flex">
              <FaLocationDot className="mr-2 mt-[2px]"/>
              Club Access
            </span>
            <span className="text-red-600">{clubRestriction}</span>
          </p>
          <p className="flex mb-5">
            <IoIosInformationCircle className="mr-2 mt-[2px]" /><span>Price Per Year Below</span> 
          </p>
          <p className="text-center mb-4">Limited time only starting from</p>
          <p className="text-center text-xl font-bold mb-2">${memberPrice}</p>
          <p className="flex justify-center items-center">
            <button className=" px-5 py-3 border-2  border-red-600 rounded-xl text-red-600
            hover:text-white hover:bg-red-600 hover:outline-red-600 hover:-translate-y-[2px] transition-transform capitalize">
              View {memberType} Clubs{" "}
            </button>
          </p>
        </div>
      </motion.div>
    </>
  );
}
