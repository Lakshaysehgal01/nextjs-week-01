import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center flex-col gap-4 items-center">
          <div className="text-xl border-b text-gray-500 font-semibold">
                Todo application
          </div>

          <div>
              <Link href={"/auth/signup"}>Go To Signup</Link>
          </div>
    </div>
  );
}
