import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/current-user')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/currentUser"!</div>
}
