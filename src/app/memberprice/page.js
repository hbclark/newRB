import {Navbar, Footer, PriceCard} from "../../components";

export default function page() {
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
    <Navbar/>
    <div className="flex justify-center flex-row items-center h-60 bg-red-700 p-10" >
        <h1 className="flex  text-4xl font-semibold text-white text-center">$0 Join Fee</h1>
        <p>It's time to embrace a new life!</p>

        
    </div>
    <div className="grid my-20 px-32 gap-10 lg:px-60 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-4">

        {members.map((member, index) => (
            <PriceCard
            key={member.id}
            memberType={member.memberType}
            borderColor={member.borderColor}
            ageRestriction={member.ageRestriction}
            clubRestriction={member.clubRestriction}
            memberPrice={member.memberPrice}
          />
        ))}
    </div>



    
   
    </>

  )
}
