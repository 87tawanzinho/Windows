"use client";
import Image from "next/image";
import folder from "@/public/folder.png";
import folderInside from "@/public/folder-inside.png";
import { useState } from "react";
export default function FoldersAndMore() {
  const [onFolder, setOnFolder] = useState(false);
  return (
    <div className="relative">
      <div className="absolute w-32 hover:bg-gray-400 hover:opacity-75 hover:border-2 border-gray-600 text-white flex flex-col justify-center items-center cursor-default ">
        <Image src={folder} alt="folder" />
        <p className="text-xs">Windows Project</p>
      </div>

      {onFolder ? (
        <div className="bg-white bg-opacity-10  h-screen w-screen absolute top-0  left-0">
          <div className="flex justify-center items-center flex-col h-full ">
            <div className="bg-zinc-800 h-5/6 lg:h-2/3  w-11/12 lg: w-9/10 relative">
              <p
                onClick={() => setOnFolder(false)}
                className="text-red-400 text-2xl absolute end-0 cursor-pointer w-12 bg-zinc-700 rounded text-center bg-opacity-75 hover:text-red-200 transition-all"
              >
                X
              </p>
              <div className="w-full bg-zinc-900 h-8 flex items-center px-4 font-semibold text-white">
                <p>
                  This PC {">"} Local Disk{"(C:)"} {">"} Documents
                </p>
              </div>
              <div className="flex gap-4 absolute left-2 top-10 lg:left-40 lg:top-40 flex-wrap cursor-default">
                <div className="flex flex-col justify-center items-center text-gray-300  opacity-75  hover:bg-gray-400 w-32">
                  <Image src={folderInside} alt="folder inside" />
                  <p>Program Files</p>
                </div>
                <div className="flex flex-col justify-center items-center text-gray-300 opacity-75  hover:bg-gray-400 w-32">
                  <Image src={folderInside} alt="folder inside" />
                  <p>Records</p>
                </div>
                <div className="flex flex-col justify-center items-center text-gray-300 opacity-75 hover:bg-gray-400 w-32">
                  <Image src={folderInside} alt="folder inside" />
                  <p>UI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setOnFolder(true);
          }}
          className="absolute end-4 md:end-96 top-64 w-32 hover:bg-gray-400 hover:opacity-75 hover:border-2 border-gray-600 text-white flex flex-col justify-center items-center cursor-default "
        >
          <Image src={folder} alt="folder" />
          <p className="text-xs">Documents</p>
        </div>
      )}
    </div>
  );
}
