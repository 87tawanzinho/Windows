import Image from "next/image";
import edge from "@/public/edge.png";
import folder from "@/public/folder.png";
import windows from "@/public/windows.png";
import internet from "@/public/internet.png";
import vscode from "@/public/vscode.png";
import sound from "@/public/sound.png";
export default function Footer() {
  return (
    <div className="fixed bottom-0 bg-black opacity-100 w-full justify-between   text-white flex object-cover items-center px-4 ">
      <div className="hover:bg-gray-500  hover:bg-opacity-50 p-2">
        <Image
          src={windows}
          alt="windows"
          className="grayscale h-8 w-8 object-cover "
        />
      </div>
      <div className="flex justify-center items-center  gap-0">
        <div className="hover:bg-gray-500  hover:bg-opacity-50 p-2">
          <Image src={edge} alt="edge" />
        </div>
        <div
          className="hover:bg-gray-500 p-2 hover:bg-opacity-
        50"
        >
          <Image
            src={folder}
            alt="folder"
            className="h-8 w-8  hover:bg-opacity-50"
          />
        </div>

        <div className="hover:bg-gray-500  hover:bg-opacity-50 p-2">
          <Image
            src={vscode}
            alt="vscode"
            className="h-8 w-8 border-b-2 border-gray-700 "
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 ">
        <Image src={internet} alt="edge" />
        <Image src={sound} alt="sound" className="invert" />
      </div>
    </div>
  );
}
