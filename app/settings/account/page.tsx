"use client"

import { EmptyState } from "@/components/empty-state"

export default function AccountSettingsPage() {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Account Settings</h1>
      </div>
      <div className="flex-1">
        <EmptyState
          title="Your account settings are not configured"
          description="Set up your account preferences and personal information"
          actionLabel="Configure Account"
          onAction={() => console.log("Configure account clicked")}
        />
      </div>
    </div>
  )
}