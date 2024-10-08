export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col flex-1 h-full">
      {children}
    </div>
  )
}