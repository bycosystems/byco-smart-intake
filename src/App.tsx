import { createRouter, createRoute, createRootRoute, RouterProvider, Outlet } from '@tanstack/react-router'
import { Landing } from './pages/Landing'
import { Dashboard } from './pages/Dashboard'
import { Intakes } from './pages/Intakes'
import { Customers } from './pages/Customers'
import { DashboardLayout } from './components/layout/DashboardLayout'
import { useBlinkAuth } from '@blinkdotnew/react'
import { LoadingOverlay } from '@blinkdotnew/ui'

// Root route
const rootRoute = createRootRoute({
  component: () => <Outlet />,
})

// Public routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Landing,
})

// Protected routes (Dashboard Layout)
const dashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: 'dashboard-layout',
  component: () => {
    const { user, isLoading } = useBlinkAuth()
    
    if (isLoading) {
      return <LoadingOverlay />
    }
    
    // In a real app, we might redirect to login here if !user
    // For this demo, we'll allow viewing if the user is in the process of building
    return <DashboardLayout />
  },
})

const dashboardRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/dashboard',
  component: Dashboard,
})

const intakesRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/intakes',
  component: Intakes,
})

const customersRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/customers',
  component: Customers,
})

// Add other routes as stubs
const analyticsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/analytics',
  component: () => <div className="p-8">Analytics Stub</div>,
})

const settingsRoute = createRoute({
  getParentRoute: () => dashboardLayoutRoute,
  path: '/settings',
  component: () => <div className="p-8">Settings Stub</div>,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardLayoutRoute.addChildren([
    dashboardRoute,
    intakesRoute,
    customersRoute,
    analyticsRoute,
    settingsRoute,
  ]),
])

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return <RouterProvider router={router} />
}
