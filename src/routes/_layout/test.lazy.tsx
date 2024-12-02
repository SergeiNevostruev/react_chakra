import * as React from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/test')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_layout/test"!</div>
}
