"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const router = useRouter();

  const [name, setName] = useState(user?.name || "");
  const [image, setImage] = useState(user?.image || "");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // 🔄 Update Handler
  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        setMessage(error.message || "Update failed!");
        setLoading(false);
        return;
      }

      setMessage("Profile updated successfully ✅");

      setTimeout(() => {
        router.push("/profile");
      }, 1000);
    } catch (err) {
      console.log(err);
      setMessage("Something went wrong!");
    }

    setLoading(false);
  };

  //  No user fallback
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Image Input */}
          <div>
            <label className="block text-sm font-medium mb-1">Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring"
              placeholder="Enter image URL"
            />
          </div>

          {/* Message */}
          {message && (
            <p className="text-center text-sm text-blue-600">{message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
