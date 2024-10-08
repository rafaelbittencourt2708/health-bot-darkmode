import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  title: string
  description: string
  actionLabel: string
  onAction: () => void
}

export function EmptyState({ title, description, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full rounded-lg border border-dashed shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button className="mt-4" onClick={onAction}>{actionLabel}</Button>
      </div>
    </div>
  )
}