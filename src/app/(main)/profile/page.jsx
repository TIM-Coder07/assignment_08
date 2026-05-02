"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-3">
        <h2 className="text-xl font-semibold">User not found</h2>
        <Link href="/login" className="text-blue-500 underline">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md text-center">
        {/* Profile Image */}
        <Image
          height={30}
          width={30}
          src={user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full object-cover border"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold mt-4">{user.name}</h2>

        {/* Email */}
        <p className="text-gray-500 mt-1">{user.email}</p>

        {/* Update Button */}
        <Link href="/profile/update">
          <button className="mt-5 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            Update Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
