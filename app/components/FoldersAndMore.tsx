import Image from "next/image";
import folder from "@/public/folder.png";
export default function FoldersAndMore() {
  return (
    <div className="flex justify-normal relative">
      <div className="absolute w-32 hover:bg-gray-400 hover:opacity-75 hover:border-2 border-gray-600 text-white flex flex-col justify-center items-center cursor-default ">
        <Image src={folder} alt="folder" />
        <p className="text-xs">Windows Project</p>
      </div>

      <div className="absolute end-4 md:end-96 top-64 w-32 hover:bg-gray-400 hover:opacity-75 hover:border-2 border-gray-600 text-white flex flex-col justify-center items-center cursor-default ">
        <Image src={folder} alt="folder" />
        <p className="text-xs">Games</p>
      </div>
    </div>
  );
}
