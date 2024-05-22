import Image from "next/image";
import Carousel from "@/components/Carousel";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
   <>
   <div className="w-full h-screen">
    <NavBar />  
   <Carousel />
   </div>
   
   </>
  );
}
