import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/router')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Outlet/>
}
