"use client"

import { EmptyState } from "@/components/empty-state"

export default function ConversationBuilderPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Conversation Builder</h1>
      </div>
      <EmptyState
        title="No conversations created"
        description="Start building your first conversation flow"
        actionLabel="Create Conversation"
        onAction={() => console.log("Create conversation clicked")}
      />
    </>
  )
}