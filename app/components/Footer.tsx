import Image from "next/image";
import edge from "@/public/edge.png";
import folder from "@/public/folder.png";
import windows from "@/public/windows.png";
import internet from "@/public/internet.png";
export default function Footer() {
  return (
    <div className="fixed bottom-0 bg-black opacity-100 w-full justify-between  p-2 text-white flex object-cover items-center">
      <Image
        src={windows}
        alt="windows"
        className="grayscale h-8 w-8 object-cover "
      />
      <div className="flex justify-center items-center">
        <Image src={folder} alt="edge" className="h-8 w-8" />
        <Image src={edge} alt="edge" />
      </div>

      <div className="flex justify-center items-center">
        <Image src={internet} alt="edge" />
      </div>
    </div>
  );
}
