// src/routes/app/+layout.server.js
import { redirect } from '@sveltejs/kit';
/*
export const load = async ({ cookies, url }) => {
	let user = cookies.get('user');

	//Allow guest users via ?guest=true
	if (url.searchParams.get('guest') === 'true') {
		return { user: { role: 'guest', name: 'Guest User' } };
	}

	if (!user) {
		throw redirect(303, '/');
	}

	return { user: JSON.parse(user) };
};
*/

export function load({ cookies }) {
    const session = cookies.get("session");
    if (!session) throw redirect(302, "/");

    const user = JSON.parse(session);

    if (user.role !== "admin") throw redirect(302, "/app");

    return { user };
}
