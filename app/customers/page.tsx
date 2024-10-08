"use client"

import { EmptyState } from "@/components/empty-state"

export default function CustomersPage() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Customers</h1>
      </div>
      <EmptyState
        title="No customers yet"
        description="Start adding customers to your list"
        actionLabel="Add Customer"
        onAction={() => console.log("Add customer clicked")}
      />
    </>
  )
}