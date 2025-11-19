"use client";

import { Toaster } from "./ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster richColors />
    </QueryClientProvider>
  );
}
