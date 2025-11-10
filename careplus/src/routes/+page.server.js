import { fail, redirect } from '@sveltejs/kit';
import Client from '$lib/models/client.js'; // or your actual model

export const actions = {
  login: async ({ request, cookies }) => {
    const form = await request.formData();
    const email = form.get('email');
    const password = form.get('password');

    // 1. Lookup user in MongoDB
    const user = await Client.findOne({ email });

    if (!user) {
      return fail(400, { error: 'User not found' });
    }

    // 2. Validate password (plain here; later use hashing)
    if (user.password !== password) {
      return fail(400, { error: 'Invalid credentials' });
    }

    // 3. Set session cookie
    cookies.set('session', user._id.toString(), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict',
      secure: false // true if HTTPS
    });

    // 4. Redirect to main app
    throw redirect(302, '/app');
  }
};

