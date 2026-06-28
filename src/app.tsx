import { Router, Outlet, createMemoryHistory } from '@fluixi/start/router';
import { Suspense } from '@fluixi/core';
import { routes } from 'virtual:fluixi-routes';

function RootLayout() {
  return (
    <Suspense fallback={<div />}>
      <Outlet />
    </Suspense>
  );
}

export const appRoutes = [{ path: '/', component: RootLayout, children: routes as any }];

export default function App(props?: { url?: string }) {
  const history = typeof window === 'undefined' ? createMemoryHistory(props?.url ?? '/') : undefined;
  return <Router routes={appRoutes as any} history={history as any} />;
}
