import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
	// Clear any cookies related to authentication
	cookies.delete('session', { path: '/' });
	cookies.delete('token', { path: '/' });
	cookies.delete('role', { path: '/' });

	// Redirect to login
	throw redirect(302, '/');
}

