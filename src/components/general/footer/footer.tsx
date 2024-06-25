import Image from "next/image";
import logo from "@/assets/general/logo_2.png";
import DonateButton from "@/components/general/donateButton/donateButton";

export default function footer() {
  return (
    <div className="bg-yellow/60 rounded-t-3xl">
      <div className="container mx-auto md:pt-24 pt-12 pb-8 px-8 lg:px-4">
        
          <Image
            src={logo}
            alt="Picture of the author"
            className="md:w-36 w-24"

            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
      
        <div className="mt-4 md:mt-8 font-palanquin flex md:flex-row flex-col justify-between ">
          <div className="">
            <p className="font-palanquin text-p-lg md:text-h-md text-darkblue">
              Kontakt
            </p>
            <p>iSTEP</p>
            <a href="mailto:info@istep.ch">info@istep.ch</a>
          </div>
          <div className="flex flex-col md:items-end items-start md:mt-0 mt-4">
            <p className="text-right mb-4">Danke für deine Spenden</p>

            <DonateButton />
          </div>
        </div>
        <hr className="h-0.5 my-4 w-full border-0 dark:bg-darkblue mr-2" />
        <div className="mt-4 md:mt-8 font-palanquin flex md:flex-row flex-col justify-between">
          <div  >
         
            <p>© 2023 iStep. All rights reserved.</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex items-center cursor-pointer">
            <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
            <p className="mr-2">Statuten</p>
            </div>
           <div className="flex items-center cursor-pointer">
           <hr className="h-0.5 my-4 w-4 border-0 dark:bg-darkblue mr-2" />
           <p>Impressum</p>
           </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}
