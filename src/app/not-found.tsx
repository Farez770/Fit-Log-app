import notfounimg from "@/assets/404-notFound.jpg";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <Image
        src={notfounimg}
        alt="not found"
        width={450}
        className="rounded-lg"
      />
      <h1 className="text-7xl font-extrabold text-[#C2F800]">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-white">Workout Not Found</h2>
      <p className="mt-2 text-[#8A92A0]">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
