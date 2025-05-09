import type { MiddlewareHandler } from 'astro';
import { authService } from '../services/auth';

export const authMiddleware: MiddlewareHandler = async ({ request }) => {
  if (request.url.includes('/dashboard')) {
    try {
      const isAuthenticated = await authService.isAuthenticated();
      if (!isAuthenticated) {
        return Response.redirect('/login', 302);
      }
    } catch (error) {
      return Response.redirect('/login', 302);
    }
  }
  return new Response(null, { status: 200 });
}; 