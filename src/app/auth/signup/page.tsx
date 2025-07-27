"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";
export default function Signin() {
  const userRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <a
          href="#"
          className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
        >
          <div>
            <div className="px-10">
              <div className="text-3xl font-extrabold">Sign up</div>
            </div>
            <div className="pt-2">
              <div>
                <label className="block mb-2 text-sm text-black font-semibold pt-4">
                  Username
                </label>
                <input
                  type={"text"}
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={"harkirat@gmail.com"}
                  required
                  ref={userRef}
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-black font-semibold pt-4">
                  Password
                </label>
                <input
                  type={"password"}
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={"123456"}
                  required
                  ref={passRef}
                />
              </div>
              <button
                type="button"
                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={async () => {
                  await axios.post("/api/v1/signup", {
                    username: userRef.current?.value,
                    password: passRef.current?.value,
                  });
                  router.push("/auth/login");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
