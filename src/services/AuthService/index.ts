"use server";
import axiosInstance from "@/src/lib/AxiosInstance";
import { cookies } from "next/headers";
import React from "react";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", userData);

    if (data.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
  } catch (error) {
    throw new Error(error);
  }
};
