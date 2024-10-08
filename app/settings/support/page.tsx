"use client"

import { EmptyState } from "@/components/empty-state"

export default function SupportPage() {
  return (
    <div className="flex flex-col flex-1 h-full">
      <div className="flex items-center mb-4">
        <h1 className="text-lg font-semibold md:text-2xl">Help & Support</h1>
      </div>
      <div className="flex-1">
        <EmptyState
          title="Need assistance?"
          description="Access our help resources or contact support"
          actionLabel="Get Help"
          onAction={() => console.log("Get help clicked")}
        />
      </div>
    </div>
  )
}