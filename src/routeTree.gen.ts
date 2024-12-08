/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutItemsImport } from './routes/_layout/items'
import { Route as LayoutAdminImport } from './routes/_layout/admin'
import { Route as authSignupImport } from './routes/(auth)/signup'
import { Route as authResetPasswordImport } from './routes/(auth)/reset-password'
import { Route as authRecoverPasswordImport } from './routes/(auth)/recover-password'
import { Route as authLoginImport } from './routes/(auth)/login'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()
const LayoutTestLazyImport = createFileRoute('/_layout/test')()
const LayoutSettingsLazyImport = createFileRoute('/_layout/settings')()
const LayoutProjectLazyImport = createFileRoute('/_layout/project')()
const LayoutCurrentUserLazyImport = createFileRoute('/_layout/current-user')()
const LayoutAppsLazyImport = createFileRoute('/_layout/apps')()
const LayoutAdmin1LazyImport = createFileRoute('/_layout/admin1')()
const demoReducerLazyImport = createFileRoute('/(demo)/reducer')()
const demoIndex1LazyImport = createFileRoute('/(demo)/index1')()
const demoAboutLazyImport = createFileRoute('/(demo)/about')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutTestLazyRoute = LayoutTestLazyImport.update({
  id: '/test',
  path: '/test',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/test.lazy').then((d) => d.Route))

const LayoutSettingsLazyRoute = LayoutSettingsLazyImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/settings.lazy').then((d) => d.Route),
)

const LayoutProjectLazyRoute = LayoutProjectLazyImport.update({
  id: '/project',
  path: '/project',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/project.lazy').then((d) => d.Route),
)

const LayoutCurrentUserLazyRoute = LayoutCurrentUserLazyImport.update({
  id: '/current-user',
  path: '/current-user',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/current-user.lazy').then((d) => d.Route),
)

const LayoutAppsLazyRoute = LayoutAppsLazyImport.update({
  id: '/apps',
  path: '/apps',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/apps.lazy').then((d) => d.Route))

const LayoutAdmin1LazyRoute = LayoutAdmin1LazyImport.update({
  id: '/admin1',
  path: '/admin1',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/admin1.lazy').then((d) => d.Route),
)

const demoReducerLazyRoute = demoReducerLazyImport
  .update({
    id: '/(demo)/reducer',
    path: '/reducer',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(demo)/reducer.lazy').then((d) => d.Route))

const demoIndex1LazyRoute = demoIndex1LazyImport
  .update({
    id: '/(demo)/index1',
    path: '/index1',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(demo)/index1.lazy').then((d) => d.Route))

const demoAboutLazyRoute = demoAboutLazyImport
  .update({
    id: '/(demo)/about',
    path: '/about',
    getParentRoute: () => rootRoute,
  } as any)
  .lazy(() => import('./routes/(demo)/about.lazy').then((d) => d.Route))

const LayoutItemsRoute = LayoutItemsImport.update({
  id: '/items',
  path: '/items',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutAdminRoute = LayoutAdminImport.update({
  id: '/admin',
  path: '/admin',
  getParentRoute: () => LayoutRoute,
} as any)

const authSignupRoute = authSignupImport.update({
  id: '/(auth)/signup',
  path: '/signup',
  getParentRoute: () => rootRoute,
} as any)

const authResetPasswordRoute = authResetPasswordImport.update({
  id: '/(auth)/reset-password',
  path: '/reset-password',
  getParentRoute: () => rootRoute,
} as any)

const authRecoverPasswordRoute = authRecoverPasswordImport.update({
  id: '/(auth)/recover-password',
  path: '/recover-password',
  getParentRoute: () => rootRoute,
} as any)

const authLoginRoute = authLoginImport.update({
  id: '/(auth)/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/login': {
      id: '/(auth)/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof authLoginImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/recover-password': {
      id: '/(auth)/recover-password'
      path: '/recover-password'
      fullPath: '/recover-password'
      preLoaderRoute: typeof authRecoverPasswordImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/reset-password': {
      id: '/(auth)/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof authResetPasswordImport
      parentRoute: typeof rootRoute
    }
    '/(auth)/signup': {
      id: '/(auth)/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof authSignupImport
      parentRoute: typeof rootRoute
    }
    '/_layout/admin': {
      id: '/_layout/admin'
      path: '/admin'
      fullPath: '/admin'
      preLoaderRoute: typeof LayoutAdminImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/items': {
      id: '/_layout/items'
      path: '/items'
      fullPath: '/items'
      preLoaderRoute: typeof LayoutItemsImport
      parentRoute: typeof LayoutImport
    }
    '/(demo)/about': {
      id: '/(demo)/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof demoAboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/(demo)/index1': {
      id: '/(demo)/index1'
      path: '/index1'
      fullPath: '/index1'
      preLoaderRoute: typeof demoIndex1LazyImport
      parentRoute: typeof rootRoute
    }
    '/(demo)/reducer': {
      id: '/(demo)/reducer'
      path: '/reducer'
      fullPath: '/reducer'
      preLoaderRoute: typeof demoReducerLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layout/admin1': {
      id: '/_layout/admin1'
      path: '/admin1'
      fullPath: '/admin1'
      preLoaderRoute: typeof LayoutAdmin1LazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/apps': {
      id: '/_layout/apps'
      path: '/apps'
      fullPath: '/apps'
      preLoaderRoute: typeof LayoutAppsLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/current-user': {
      id: '/_layout/current-user'
      path: '/current-user'
      fullPath: '/current-user'
      preLoaderRoute: typeof LayoutCurrentUserLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/project': {
      id: '/_layout/project'
      path: '/project'
      fullPath: '/project'
      preLoaderRoute: typeof LayoutProjectLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/settings': {
      id: '/_layout/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof LayoutSettingsLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/test': {
      id: '/_layout/test'
      path: '/test'
      fullPath: '/test'
      preLoaderRoute: typeof LayoutTestLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutAdminRoute: typeof LayoutAdminRoute
  LayoutItemsRoute: typeof LayoutItemsRoute
  LayoutAdmin1LazyRoute: typeof LayoutAdmin1LazyRoute
  LayoutAppsLazyRoute: typeof LayoutAppsLazyRoute
  LayoutCurrentUserLazyRoute: typeof LayoutCurrentUserLazyRoute
  LayoutProjectLazyRoute: typeof LayoutProjectLazyRoute
  LayoutSettingsLazyRoute: typeof LayoutSettingsLazyRoute
  LayoutTestLazyRoute: typeof LayoutTestLazyRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutAdminRoute: LayoutAdminRoute,
  LayoutItemsRoute: LayoutItemsRoute,
  LayoutAdmin1LazyRoute: LayoutAdmin1LazyRoute,
  LayoutAppsLazyRoute: LayoutAppsLazyRoute,
  LayoutCurrentUserLazyRoute: LayoutCurrentUserLazyRoute,
  LayoutProjectLazyRoute: LayoutProjectLazyRoute,
  LayoutSettingsLazyRoute: LayoutSettingsLazyRoute,
  LayoutTestLazyRoute: LayoutTestLazyRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/login': typeof authLoginRoute
  '/recover-password': typeof authRecoverPasswordRoute
  '/reset-password': typeof authResetPasswordRoute
  '/signup': typeof authSignupRoute
  '/admin': typeof LayoutAdminRoute
  '/items': typeof LayoutItemsRoute
  '/about': typeof demoAboutLazyRoute
  '/index1': typeof demoIndex1LazyRoute
  '/reducer': typeof demoReducerLazyRoute
  '/admin1': typeof LayoutAdmin1LazyRoute
  '/apps': typeof LayoutAppsLazyRoute
  '/current-user': typeof LayoutCurrentUserLazyRoute
  '/project': typeof LayoutProjectLazyRoute
  '/settings': typeof LayoutSettingsLazyRoute
  '/test': typeof LayoutTestLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/login': typeof authLoginRoute
  '/recover-password': typeof authRecoverPasswordRoute
  '/reset-password': typeof authResetPasswordRoute
  '/signup': typeof authSignupRoute
  '/admin': typeof LayoutAdminRoute
  '/items': typeof LayoutItemsRoute
  '/about': typeof demoAboutLazyRoute
  '/index1': typeof demoIndex1LazyRoute
  '/reducer': typeof demoReducerLazyRoute
  '/admin1': typeof LayoutAdmin1LazyRoute
  '/apps': typeof LayoutAppsLazyRoute
  '/current-user': typeof LayoutCurrentUserLazyRoute
  '/project': typeof LayoutProjectLazyRoute
  '/settings': typeof LayoutSettingsLazyRoute
  '/test': typeof LayoutTestLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/(auth)/login': typeof authLoginRoute
  '/(auth)/recover-password': typeof authRecoverPasswordRoute
  '/(auth)/reset-password': typeof authResetPasswordRoute
  '/(auth)/signup': typeof authSignupRoute
  '/_layout/admin': typeof LayoutAdminRoute
  '/_layout/items': typeof LayoutItemsRoute
  '/(demo)/about': typeof demoAboutLazyRoute
  '/(demo)/index1': typeof demoIndex1LazyRoute
  '/(demo)/reducer': typeof demoReducerLazyRoute
  '/_layout/admin1': typeof LayoutAdmin1LazyRoute
  '/_layout/apps': typeof LayoutAppsLazyRoute
  '/_layout/current-user': typeof LayoutCurrentUserLazyRoute
  '/_layout/project': typeof LayoutProjectLazyRoute
  '/_layout/settings': typeof LayoutSettingsLazyRoute
  '/_layout/test': typeof LayoutTestLazyRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/recover-password'
    | '/reset-password'
    | '/signup'
    | '/admin'
    | '/items'
    | '/about'
    | '/index1'
    | '/reducer'
    | '/admin1'
    | '/apps'
    | '/current-user'
    | '/project'
    | '/settings'
    | '/test'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/login'
    | '/recover-password'
    | '/reset-password'
    | '/signup'
    | '/admin'
    | '/items'
    | '/about'
    | '/index1'
    | '/reducer'
    | '/admin1'
    | '/apps'
    | '/current-user'
    | '/project'
    | '/settings'
    | '/test'
    | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/(auth)/login'
    | '/(auth)/recover-password'
    | '/(auth)/reset-password'
    | '/(auth)/signup'
    | '/_layout/admin'
    | '/_layout/items'
    | '/(demo)/about'
    | '/(demo)/index1'
    | '/(demo)/reducer'
    | '/_layout/admin1'
    | '/_layout/apps'
    | '/_layout/current-user'
    | '/_layout/project'
    | '/_layout/settings'
    | '/_layout/test'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
  authLoginRoute: typeof authLoginRoute
  authRecoverPasswordRoute: typeof authRecoverPasswordRoute
  authResetPasswordRoute: typeof authResetPasswordRoute
  authSignupRoute: typeof authSignupRoute
  demoAboutLazyRoute: typeof demoAboutLazyRoute
  demoIndex1LazyRoute: typeof demoIndex1LazyRoute
  demoReducerLazyRoute: typeof demoReducerLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
  authLoginRoute: authLoginRoute,
  authRecoverPasswordRoute: authRecoverPasswordRoute,
  authResetPasswordRoute: authResetPasswordRoute,
  authSignupRoute: authSignupRoute,
  demoAboutLazyRoute: demoAboutLazyRoute,
  demoIndex1LazyRoute: demoIndex1LazyRoute,
  demoReducerLazyRoute: demoReducerLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout",
        "/(auth)/login",
        "/(auth)/recover-password",
        "/(auth)/reset-password",
        "/(auth)/signup",
        "/(demo)/about",
        "/(demo)/index1",
        "/(demo)/reducer"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/admin",
        "/_layout/items",
        "/_layout/admin1",
        "/_layout/apps",
        "/_layout/current-user",
        "/_layout/project",
        "/_layout/settings",
        "/_layout/test",
        "/_layout/"
      ]
    },
    "/(auth)/login": {
      "filePath": "(auth)/login.tsx"
    },
    "/(auth)/recover-password": {
      "filePath": "(auth)/recover-password.tsx"
    },
    "/(auth)/reset-password": {
      "filePath": "(auth)/reset-password.tsx"
    },
    "/(auth)/signup": {
      "filePath": "(auth)/signup.tsx"
    },
    "/_layout/admin": {
      "filePath": "_layout/admin.tsx",
      "parent": "/_layout"
    },
    "/_layout/items": {
      "filePath": "_layout/items.tsx",
      "parent": "/_layout"
    },
    "/(demo)/about": {
      "filePath": "(demo)/about.lazy.tsx"
    },
    "/(demo)/index1": {
      "filePath": "(demo)/index1.lazy.tsx"
    },
    "/(demo)/reducer": {
      "filePath": "(demo)/reducer.lazy.tsx"
    },
    "/_layout/admin1": {
      "filePath": "_layout/admin1.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/apps": {
      "filePath": "_layout/apps.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/current-user": {
      "filePath": "_layout/current-user.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/project": {
      "filePath": "_layout/project.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/settings": {
      "filePath": "_layout/settings.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/test": {
      "filePath": "_layout/test.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
