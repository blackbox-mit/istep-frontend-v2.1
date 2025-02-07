import "../globals.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-palanquin bg-darkblue">
      <h1 className="text-h-md text-white">Not found – 404!</h1>
      <div className="bg-white p-4 rounded-md text-darkblue font-bold text-p-lg mt-4">
        <Link href="/">Go back to Home</Link>
      </div>
    </div>
  );
}
