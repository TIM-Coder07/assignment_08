"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Form, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";

const LogInPage = () => {
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    const { email, password } = data;

    setServerError("");

    const { error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    if (error) {
      setServerError(error.message || "Login failed!");
      return;
    }

    reset();
  };

  const handelGoogleLogIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#edd0b9] to-[#f7e6d8] px-4">

      {/* Card */}
      <div className="w-full max-w-md bg-white/40 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-white/30">

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-[#63483a] mb-1">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-[#63483a]/70 mb-6">
          Login to continue your journey
        </p>

        <Form onSubmit={handleSubmit(loginHandler)} className="space-y-4">

          {/* Email */}
          <TextField isRequired>
            <Label className="text-[#63483a] font-medium">Email</Label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full p-3 rounded-lg border border-[#d8b8a0] focus:outline-none focus:ring-2 focus:ring-[#63483a]/40 text-black"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.email?.message}
            </p>
          </TextField>

          {/* Password */}
          <TextField isRequired>
            <Label className="text-[#63483a] font-medium">Password</Label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg border border-[#d8b8a0] focus:outline-none focus:ring-2 focus:ring-[#63483a]/40 text-black"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Minimum 8 characters required",
                },
              })}
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.password?.message}
            </p>
          </TextField>

          {/* Server Error */}
          {serverError && (
            <p className="text-red-500 text-sm text-center">
              {serverError}
            </p>
          )}

          {/* Button */}
          <Button
            type="submit"
            className="w-full bg-[#63483a] hover:bg-[#4a352b] text-white font-semibold py-2 rounded-lg transition"
          >
            <Check /> Log In
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-[#63483a]/20"></div>
          <p className="px-3 text-xs text-[#63483a]/60">OR</p>
          <div className="flex-1 h-px bg-[#63483a]/20"></div>
        </div>

        {/* Google Login */}
        <button
          onClick={handelGoogleLogIn}
          className="w-full flex items-center justify-center gap-2 border border-[#63483a] text-[#63483a] py-2 rounded-lg hover:bg-[#63483a] hover:text-white transition"
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* Register */}
        <p className="mt-6 text-sm text-center text-[#63483a]">
          Don’t have an account?{" "}
          <Link
            href="/registration"
            className="font-semibold underline hover:text-[#4a352b]"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;