import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/admin1')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/admin"! </div>
}
