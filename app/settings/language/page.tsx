"use client"

import { EmptyState } from "@/components/empty-state"

export default function LanguageSettingsPage() {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Language Settings</h1>
      </div>
      <div className="flex-1">
        <EmptyState
          title="Language preferences not set"
          description="Choose your preferred language for the application"
          actionLabel="Set Language"
          onAction={() => console.log("Set language clicked")}
        />
      </div>
    </div>
  )
}