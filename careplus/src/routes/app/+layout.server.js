import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies }) => {
  const session = cookies.get('session');

  // If no session cookie, redirect to login
  if (!session) {
    throw redirect(302, '/');
  }

  // Optionally, you can fetch user info from DB
  // const user = await Client.findById(session);
  // return { user };

  return { userId: session }; // minimal info for the layout or pages
};

