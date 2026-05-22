import { AppShell, AppShellSidebar, AppShellMain, MobileSidebarTrigger, SidebarItem, Button, Persona } from '@blinkdotnew/ui'
import { LayoutDashboard, Inbox, Users, BarChart3, Settings, LogOut, Sparkles } from 'lucide-react'
import { Link, Outlet, useLocation } from '@tanstack/react-router'
import { useBlinkAuth } from '@blinkdotnew/react'
import { blink } from '@/blink/client'

export function DashboardLayout() {
  const { user } = useBlinkAuth()
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const handleLogout = () => {
    blink.auth.logout()
  }

  return (
    <AppShell>
      <AppShellSidebar className="shrink-0">
        <div className="flex flex-col h-full w-[16rem] bg-background border-r border-border overflow-hidden">
          <div className="shrink-0 border-b border-border px-6 h-16 flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">ByCo Smart</span>
          </div>
          
          <div className="flex-1 min-h-0 overflow-y-auto px-3 py-4 space-y-1">
            <SidebarItem 
              icon={<LayoutDashboard size={20} />} 
              label="Overview" 
              href="/dashboard" 
              active={isActive('/dashboard')}
            />
            <SidebarItem 
              icon={<Inbox size={20} />} 
              label="Intakes" 
              href="/intakes" 
              active={isActive('/intakes')}
            />
            <SidebarItem 
              icon={<Users size={20} />} 
              label="Customers" 
              href="/customers" 
              active={isActive('/customers')}
            />
            <SidebarItem 
              icon={<BarChart3 size={20} />} 
              label="Analytics" 
              href="/analytics" 
              active={isActive('/analytics')}
            />
            
            <div className="pt-4 pb-2 px-3">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">System</p>
            </div>
            
            <SidebarItem 
              icon={<Settings size={20} />} 
              label="Settings" 
              href="/settings" 
              active={isActive('/settings')}
            />
          </div>
          
          <div className="shrink-0 border-t border-border p-4 space-y-4">
            {user && (
              <Persona 
                name={user.displayName || user.email || 'User'} 
                subtitle={user.email} 
              />
            )}
            <Button 
              variant="ghost" 
              size="sm" 
              className="w-full justify-start gap-2 text-muted-foreground hover:text-foreground"
              onClick={handleLogout}
            >
              <LogOut size={18} />
              <span>Sign out</span>
            </Button>
          </div>
        </div>
      </AppShellSidebar>
      
      <AppShellMain className="bg-background/50">
        <div className="md:hidden flex items-center gap-2 px-4 h-16 border-b border-border bg-background">
          <MobileSidebarTrigger />
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight">ByCo Smart</span>
        </div>
        <Outlet />
      </AppShellMain>
    </AppShell>
  )
}
