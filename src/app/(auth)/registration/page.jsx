"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useState } from "react";

const RegistrationPage = () => {
  const router = useRouter();
  const [apiError, setApiError] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // EMAIL REGISTRATION
  const registrationHandler = async (data) => {
    const { name, imageURL, email, password } = data;

    setApiError(null);
    setSuccessMsg(null);

    const { error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: imageURL,
      callbackURL: "/login",
    });

    if (error) {
      setApiError(error.message || "Registration failed!");
      return;
    }

    setSuccessMsg("Registration successful!");
    reset();

    // ❌ prevent auto login
    await authClient.signOut();

    // redirect to login
    router.push("/login");
  };

  // GOOGLE SIGN UP
  const handleGoogleSignUp = async () => {
    setApiError(null);

    const data = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/login",
    });
    console.log(data);
    
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#edd0b9]">
      <Form
        onSubmit={handleSubmit(registrationHandler)}
        className="flex w-96 mt-8 flex-col gap-4 bg-[#63483a] p-6 rounded-xl text-[#edd0b9]"
      >
        {/* Name */}
        <TextField isRequired>
          <Label>Name</Label>
          <Input
            placeholder="John Doe"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
          <p className="text-red-400 text-xs mt-1">{errors.name?.message}</p>
        </TextField>

        {/* Image */}
        <TextField isRequired>
          <Label>Image</Label>
          <Input
            placeholder="https://example.com/image.jpg"
            {...register("imageURL", {
              required: "Image URL is required",
              validate: (value) =>
                value.startsWith("http") || value.startsWith("/")
                  ? true
                  : "Invalid image URL",
            })}
          />
          <p className="text-red-400 text-xs mt-1">
            {errors.imageURL?.message}
          </p>
        </TextField>

        {/* Email */}
        <TextField isRequired>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="john@example.com"
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
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
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

        {/* API ERROR */}
        {apiError && (
          <p className="text-red-400 text-sm text-center">{apiError}</p>
        )}

        {/* SUCCESS */}
        {successMsg && (
          <p className="text-green-400 text-sm text-center">{successMsg}</p>
        )}

        {/* REGISTER BUTTON */}
        <Button type="submit" className="bg-[#edd0b9] text-[#63483a] w-full">
          <Check />
          Register
        </Button>

        {/* GOOGLE BUTTON */}
        <Button
          type="button"
          onClick={handleGoogleSignUp}
          className="bg-white text-black w-full"
        >
          Continue with Google
        </Button>
      </Form>

      {/* LOGIN LINK */}
      <p className="mt-4 text-sm text-[#63483a]">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold underline hover:text-[#4a352b]"
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegistrationPage;
