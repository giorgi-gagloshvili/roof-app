import Services from "@/components/Services";
import Link from "next/link";
import Image from "next/image";
import { TbBrandWhatsapp } from "react-icons/tb";
import Button from "@/components/ui/Button";
import Header from "@/components/header";
import Calculator from "@/components/Calculator";
import AboutUs from "@/components/about-us";

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="">
        <div
          className="relative w-full h-[700px]"
          style={{
            backgroundImage:
              'url("/task_01k93bkrh5f9gaj3b6t69ffkvb_1762123287_img_1.webp")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-center justify-center flex-col h-full gap-4 px-4 lg:px-0">
            <h1 className="text-2xl sm:text-3xl lg:text-5xl text-white font-les-regular font-bold text-shadow-gray-600">
              სახურავის ხელოსანი{" "}
            </h1>
            <h2 className="text-xl lg:text-2xl text-center text-white font-tbc-regular">
              {"დაგვირეკეთ ან მოგვწერეთ WhatsApp-ის საშუალებით"}
            </h2>
            <Link
              href="/"
              className="text-2xl lg:text-3xl lg:mt-6 flex-center gap-x-2 font-les-regular px-8 py-2.5 rounde -skew-x-12 text-white bg-[#25d366] font-bold"
            >
              {/* <TbBrandWhatsapp className="text-[#25d366] text-4xl" /> */}
              <span className="skew-x-12 tracking-wider">551 600060</span>
            </Link>
          </div>
        </div>
        <div className="">
          <AboutUs />
          <Services />
          <Calculator />
        </div>
      </main>
    </div>
  );
}
