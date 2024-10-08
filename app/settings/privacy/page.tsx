"use client"

import { EmptyState } from "@/components/empty-state"

export default function PrivacySettingsPage() {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Privacy and Security</h1>
      </div>
      <div className="flex-1">
        <EmptyState
          title="Privacy settings not configured"
          description="Manage your privacy and security preferences"
          actionLabel="Configure Privacy"
          onAction={() => console.log("Configure privacy clicked")}
        />
      </div>
    </div>
  )
}