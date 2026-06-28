"use client";

import { getUser } from "@/lib/auth/storage";

export default function DashboardPage() {
  const user = getUser();

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Dashboard</h2>

      <p>Welcome, {user?.name}</p>
      <p>Your role: {user?.role}</p>

      {user?.role === "ADMIN" && (
        <div className="rounded-lg border bg-white p-4">
          <h3 className="font-semibold">Admin Section</h3>
          <p className="text-sm text-slate-500">
            Only ADMIN users can see this.
          </p>
        </div>
      )}

      {user?.role === "LAB_TECH" && (
        <div className="rounded-lg border bg-white p-4">
          <h3 className="font-semibold">Lab Technician Section</h3>
          <p className="text-sm text-slate-500">
            Only LAB_TECH users can see this.
          </p>
        </div>
      )}
    </div>
  );
}