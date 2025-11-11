import { fail, redirect } from '@sveltejs/kit';

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

