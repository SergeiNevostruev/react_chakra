import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/items')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/items"!</div>
}
