"use client"

import { EmptyState } from "@/components/empty-state"

export default function SettingsPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
      </div>
      <EmptyState
        title="No settings configured"
        description="Start customizing your application settings"
        actionLabel="Configure Settings"
        onAction={() => console.log("Configure settings clicked")}
      />
    </>
  )
}