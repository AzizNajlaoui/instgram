"use client";
import useGetTest from "@/hooks/querys/useGetTest";
import type { authClient } from "@/lib/auth-client";

export default function Home({
  session,
}: {
  session: typeof authClient.$Infer.Session;
}) {
  const { data: test, isLoading, error } = useGetTest();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error occurred: {error.message}</div>;
  }
  return <div>{test?.message} </div>;
}
