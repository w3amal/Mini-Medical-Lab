"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getUser, type AuthUser } from "@/lib/auth/storage";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const savedUser = getUser();

    if (!savedUser) {
      router.replace("/login");
      return;
    }

    setUser(savedUser);
    setIsChecking(false);
  }, [router]);

  if (isChecking) {
    return <p>Checking authentication...</p>;
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}