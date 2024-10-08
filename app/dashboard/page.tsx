"use client"

import { EmptyState } from "@/components/empty-state"

export default function DashboardPage() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Dashboard</h1>
      </div>
      <EmptyState
        title="Welcome to your dashboard"
        description="Get started by adding your first widget"
        actionLabel="Add Widget"
        onAction={() => console.log("Add widget clicked")}
      />
    </div>
  )
}