"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronLeft, User, Bell, Lock, HelpCircle, Languages } from "lucide-react"

interface SettingsMenuProps {
  onBack: () => void
}

export function SettingsMenu({ onBack }: SettingsMenuProps) {
  const pathname = usePathname()

  const menuItems = [
    { icon: User, label: "Account", href: "/settings/account" },
    { icon: Bell, label: "Notifications", href: "/settings/notifications" },
    { icon: Lock, label: "Privacy and Security", href: "/settings/privacy" },
    { icon: Languages, label: "Language", href: "/settings/language" },
    { icon: HelpCircle, label: "Help & Support", href: "/settings/support" },
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <button onClick={onBack} className="flex items-center gap-2 font-semibold">
          <ChevronLeft className="h-6 w-6" />
          <span className="">Settings</span>
        </button>
      </div>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2">
          {menuItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                pathname === item.href
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:text-primary"
              } transition-all ${index === 0 ? "mt-0" : "mt-1"}`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}