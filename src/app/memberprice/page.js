"use client"
import {NavBar, Footer, PriceCard} from "../../components";
import {animate,motion,useScroll,useTransform} from "framer-motion";
import Image from "next/image";


export default function MemberPrice() {
    const {scrollY} = useScroll();
    const yText = useTransform(scrollY,[0,50,100],[1,1.3,1.4,])
    const opacityText = useTransform(scrollY,[0,200,300],[1,1,1])
    const MotionPriceCard = motion(PriceCard);
    

    
    const members = [
    {
        id:1,
    
      memberType: "Senior competition",
      borderColor: "border-yellow-400",
      ageRestriction: "Ages 65+",
      clubRestriction: "Home Club",
      memberPrice: "120",
    },
    {
        id:2,
      memberType: "Junior competition ",
      borderColor: "border-blue-400",
      ageRestriction: "Ages 13 -18yo",
      clubRestriction: "All Clubs",
      memberPrice: "80",
    },
    {
        id:3,
      memberType: "DirtMaster competition",
      borderColor: "border-yellow-400",
      ageRestriction: "Ages 3-12yo",
      clubRestriction: "All Clubs",
      memberPrice: "40",
    },
    {
        id:4,
      memberType: "Social / non race",
      borderColor: "border-red-800",
      ageRestriction: "No age Restriction",
      clubRestriction: "All Clubs",
      memberPrice: "55",
    },
    {
        id:5,
      memberType: "CA / BMXA value add option",
      borderColor: "border-red-800",
      ageRestriction: "No age Restriction",
      clubRestriction: "All Clubs",
      memberPrice: "70",
    },
    {
        id:6,
      memberType: "Permit rebate scheme (PRS) Senior",
      borderColor: "border-red-800",
      ageRestriction: "No age Restriction",
      clubRestriction: "All Clubs",
      memberPrice: "90",
    },
    {
        id:7,
      memberType: "Permit rebate scheme (PRS) Junior",
      borderColor: "border-red-800",
      ageRestriction: "No age Restriction",
      clubRestriction: "All Clubs",
      memberPrice: "50",
    },
    {
        id:8,
      memberType: "RWMBC membership only",
      borderColor: "border-red-800",
      ageRestriction: "No age Restriction",
      clubRestriction: "All Clubs",
      memberPrice: "25",
    },
    ]
  return (
    <>
    <NavBar/>
    <div className="flex justify-center flex-row items-center h-60 bg-red-700 p-10" >
        <motion.h1 className="flex  text-7xl font-semibold text-white text-center"
        
        initial={{scale:1,opacity:1}}
            style={{scale:yText,opacity:opacityText}}
            transition={{opacity:{ease: "easeInOut",duration:0.5},scaleY:{ease: "easeInOut",duration:0.5}}}
        >$0 Join Fee</motion.h1>
       

        
    </div>
    <div className="grid my-20 px-32 gap-10 lg:px-60 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4">

        {members.map((member, index) => (
            <MotionPriceCard
            key={member.id}
            memberType={member.memberType}
            borderColor={member.borderColor}
            ageRestriction={member.ageRestriction}
            clubRestriction={member.clubRestriction}
            memberPrice={member.memberPrice}
            
            
           
            

          />
        ))}
    </div>
    <div className="flex  bg-red-700  text-white">
        <div className="p-4">
            <h3 className="text-2xl font-bold mb-3">Join Rock Bike {new Date().getFullYear()}!</h3>
            <p className="mb-4">Ready for an adrenaline-pumping adventure? Gear up for the ultimate rock biking experience at the Rock Bike Rally {new Date().getFullYear()}! </p>
            
            <button className=" px-4 py-2 rounded-xl border border-white font-semibold
            hover:border-none hover:bg-white hover:text-red-700 transition-colors duration-300 ease-in-out
            ">Register Now</button>
        </div>
        <Image src="/images/shots/bike06.jpg" alt="hero" width={1920} height={1080}/>
        

    </div>



    
   
    </>

  )
}
