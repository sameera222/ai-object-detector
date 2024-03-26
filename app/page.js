import Image from "next/image";
import ObjectDetection from "./components/object-detection";

export default function Home() {
  return (
    <main className="flex items-center p-8 min-h-screen flex-col" >
     <h1 className="font-extrabold text-3xl md:text-6xl lg:text-8xl gradient-title gradient tracking-tighter md:px-6 text-center">Thief Detection Alarm</h1>
     <ObjectDetection/>
    </main>
  );
}
