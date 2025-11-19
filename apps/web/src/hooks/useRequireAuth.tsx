"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

export function useRequireAuth(redirectTo = "/login") {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push(redirectTo);
    }
  }, [isPending, session, router, redirectTo]);

  return { session, isPending } as const;
}

export default useRequireAuth;
