import Link from "next/link";
import { RiHome2Line } from "react-icons/ri";

const NotFound = () => {
  return (
    <div className="gap-3 text-center">
      <h2 className="text-8xl font-semibold text-red-400">Not Found</h2>
      <p className="text-2xl text-zinc-500">
        Could not find requested resource
      </p>
      <button className="bg-zinc-800 hover:bg-zinc-900 text-zinc-100 px-10 py-2 rounded-full text-lg mt-4">
        <Link href="/" className="flex items-center space-x-3">
          <RiHome2Line className="inline-block text-2xl" />
          <span>Return Home</span>
        </Link>
      </button>
    </div>
  );
};

export default NotFound;
