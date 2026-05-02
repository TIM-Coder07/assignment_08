"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const loginHandler = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log("Response:", res);
    console.log("Error:", error);

    if (error) {
      alert(error.message || "Log In failed!");
      return;
    }

    alert("Log In successful!");
    reset();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#edd0b9]">
      {/* Login Form */}
      <Form
        onSubmit={handleSubmit(loginHandler)}
        className="flex mt-8 w-96 flex-col gap-4 bg-[#63483a] p-6 rounded-xl text-[#edd0b9]"
      >
        {/* Email */}
        <TextField isRequired>
          <Label className="text-white">Email</Label>

          <input
            type="email"
            placeholder="john@example.com"
            className="w-full p-2 rounded text-black bg-white"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />

          <p className="text-red-400 text-xs mt-1">{errors.email?.message}</p>
        </TextField>

        {/* Password */}
        <TextField isRequired>
          <Label className="text-white">Password</Label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-2 rounded text-black bg-white"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters required",
              },
              validate: {
                hasUpper: (v) =>
                  /[A-Z]/.test(v) || "Must include uppercase letter",
                hasNumber: (v) => /[0-9]/.test(v) || "Must include number",
              },
            })}
          />

          <p className="text-red-400 text-xs mt-1">
            {errors.password?.message}
          </p>
        </TextField>

        {/* Submit */}
        <Button type="submit" className="bg-[#edd0b9] text-[#63483a] w-full">
          <Check />
          Log In
        </Button>
      </Form>

      {/* Register Link */}
      <p className="mt-4 text-sm text-[#63483a]">
        You don’t have an account?{" "}
        <Link
          href="/registration"
          className="font-semibold underline hover:text-[#4a352b]"
        >
          Registration
        </Link>
      </p>
    </div>
  );
};

export default LogInPage;
