import { LazyRouteFunction, RouteObject } from 'react-router-dom';

export function lazyLoad(path: string): LazyRouteFunction<RouteObject> {
  return async () => {
    /* @vite-ignore */
    const module = await import(`../${path}`);
    return {
      Component: module.default,
    };
  };
}
