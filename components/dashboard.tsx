"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Bell,
  CircleUser,
  Home,
  Inbox,
  Layers,
  Menu,
  MessageSquarePlus,
  Package2,
  Search,
  Settings,
  Users,
  ChevronRight,
  Bot
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { SettingsMenu } from "@/components/settings-menu"
import { ModeToggle } from "@/components/mode-toggle"

export function Dashboard({ children }: { children: React.ReactNode }) {
  const [showSettings, setShowSettings] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleSettingsClick = () => {
    setShowSettings(true)
    router.push('/settings/account')
  }

  useEffect(() => {
    setShowSettings(pathname.startsWith('/settings'))
  }, [pathname])

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col">
          <div className="relative overflow-hidden flex-grow" style={{ height: 'calc(100% - 60px)' }}>
            <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${showSettings ? '-translate-x-full' : 'translate-x-0'}`}>
              <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <Bot className="h-6 w-6" />
                  <span className="">Health Bot</span>
                </Link>
              </div>
              <div className="flex flex-col justify-between h-[calc(100%-60px)]">
                <nav className="grid items-start px-2 text-sm font-medium lg:px-4 pt-2">
                  <Link
                    href="/dashboard"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === "/dashboard"
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    } transition-all`}
                  >
                    <Home className="h-4 w-4" />
                    Dashboard
                  </Link>
                  <Link
                    href="/inbox"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === "/inbox"
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    } transition-all`}
                  >
                    <Inbox className="h-4 w-4" />
                    Inbox
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      6
                    </Badge>
                  </Link>
                  <Link
                    href="/conversation-builder"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === "/conversation-builder"
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    } transition-all`}
                  >
                    <MessageSquarePlus className="h-4 w-4" />
                    Conversation Builder
                  </Link>
                  <div className="mt-4 mb-2 px-3 text-xs font-semibold text-muted-foreground">
                    Customer Relationship
                  </div>
                  <Link
                    href="/customers"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === "/customers"
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    } transition-all`}
                  >
                    <Users className="h-4 w-4" />
                    Customers
                  </Link>
                  <Link
                    href="/views"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                      pathname === "/views"
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    } transition-all`}
                  >
                    <Layers className="h-4 w-4" />
                    Views
                  </Link>
                </nav>
                <div className="px-2 lg:px-4 pb-4">
                  <button
                    onClick={handleSettingsClick}
                    className={`flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm w-full ${
                      pathname.startsWith("/settings")
                        ? "bg-muted text-primary"
                        : "text-muted-foreground hover:text-primary"
                    } transition-all`}
                  >
                    <div className="flex items-center gap-3">
                      <Settings className="h-4 w-4" />
                      Settings
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className={`absolute inset-0 transition-transform duration-300 ease-in-out ${showSettings ? 'translate-x-0' : 'translate-x-full'}`}>
              <SettingsMenu onBack={() => {
                setShowSettings(false)
                router.push('/dashboard')
              }} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Bot className="h-6 w-6" />
                  <span className="">Health Bot</span>
                </Link>
                <Link
                  href="/dashboard"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/inbox"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Inbox className="h-5 w-5" />
                  Inbox
                  <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                    6
                  </Badge>
                </Link>
                <Link
                  href="/conversation-builder"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <MessageSquarePlus className="h-5 w-5" />
                  Conversation Builder
                </Link>
                <Link
                  href="/customers"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="/views"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Layers className="h-5 w-5" />
                  Views
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}