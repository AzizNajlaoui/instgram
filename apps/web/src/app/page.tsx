"use client";
import useGetTest from "@/hooks/querys/useGetTest";

export default function page() {
  const { data, error, isLoading } = useGetTest();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred: {error.message}</div>;
  return <div>{data?.message}</div>;
}
