/*import { fail, redirect } from '@sveltejs/kit';

export const actions = {
  login: async ({ request, cookies }) => {
    try {
      //Get form data
      const form = await request.formData();
      const email = form.get('email');
      const password = form.get('password');

      if (!email || !password) {
        return fail(400, { error: 'Email and password are required' });
      }

      //Call backend API
      const res = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      //Handle login failure
      if (!res.ok) {
        return fail(400, { error: data.error || 'Login failed' });
      }

      //Save session cookie returned from backend
      cookies.set('session', data.session, {
        path: '/',
        httpOnly: true,
        sameSite: 'strict',
        secure: false // set true if HTTPS
      });

      //Redirect to main app
      throw redirect(302, '/app');

    } catch (err) {
      console.error('Login error:', err);
      return fail(500, { error: 'Server error during login' });
    }
  }
};
*/

import { redirect, fail } from "@sveltejs/kit";

export async function actions({ request, cookies }) {
    const form = await request.formData();
    const email = form.get("email");
    const password = form.get("password");

    // 1. Validate credentials in database
    const user = await checkUser(email, password);

    if (!user) {
        return fail(400, { error: "Invalid credentials" });
    }

    // 2. Store session cookie (or jwt)
    cookies.set("session", JSON.stringify({
        id: user._id,
        role: user.role
    }), {
        path: "/",
        maxAge: 60 * 60 * 24 * 7
    });

    // 3. Redirect by role
    if (user.role === "admin") throw redirect(302, "/app/admin");
    if (user.role === "client") throw redirect(302, "/app/client");

    // fallback
    throw redirect(302, "/app");
}

