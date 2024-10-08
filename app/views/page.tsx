"use client"

import { EmptyState } from "@/components/empty-state"

export default function ViewsPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Views</h1>
      </div>
      <EmptyState
        title="No custom views created"
        description="Create your first custom view to organize your data"
        actionLabel="Create View"
        onAction={() => console.log("Create view clicked")}
      />
    </>
  )
}