"use client"

import { EmptyState } from "@/components/empty-state"

export default function NotificationSettingsPage() {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Notification Settings</h1>
      </div>
      <div className="flex-1">
        <EmptyState
          title="No notification preferences set"
          description="Customize how and when you receive notifications"
          actionLabel="Set Preferences"
          onAction={() => console.log("Set notification preferences clicked")}
        />
      </div>
    </div>
  )
}