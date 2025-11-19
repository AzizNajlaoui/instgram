import { getTest } from "@/eden/api";
import { useQuery } from "@tanstack/react-query";

export default function useGetTest() {
  return useQuery({
    queryKey: ["test"],
    queryFn: getTest,
  });
}
