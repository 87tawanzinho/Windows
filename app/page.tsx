import Image from "next/image";
import Footer from "./components/Footer";
import FoldersAndMore from "./components/FoldersAndMore";

export default function Home() {
  return (
    <main>
      <FoldersAndMore />
      <Footer />
    </main>
  );
}
