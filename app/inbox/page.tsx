"use client"

import { EmptyState } from "@/components/empty-state"

export default function InboxPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>
      <EmptyState
        title="Your inbox is empty"
        description="Messages you receive will appear here"
        actionLabel="Send a Message"
        onAction={() => console.log("Send a message clicked")}
      />
    </>
  )
}