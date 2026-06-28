"use client";

import { useRouter } from "next/navigation";

import { ProtectedRoute } from "@/components/layout/protected-route";
import { Button } from "@/components/ui/button";
import { clearUser } from "@/lib/auth/storage";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  function handleLogout() {
    clearUser();
    router.push("/login");
  }

  return (
    <ProtectedRoute>
      <main className="min-h-screen bg-slate-100">
        <div className="flex items-center justify-between border-b bg-white px-6 py-4">
          <h1 className="font-semibold">Mini Lab</h1>

          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        <div className="p-6">{children}</div>
      </main>
    </ProtectedRoute>
  );
}