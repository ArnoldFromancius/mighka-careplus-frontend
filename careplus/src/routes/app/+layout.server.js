
import { redirect } from '@sveltejs/kit';

export function load({ cookies }) {
    const session = cookies.get("session");

    // No session = GUEST
    if (!session) {
        return { user: { role: 'guest', name: 'Guest User', isGuest: true } };
    }

    // Parse existing session
    let data;
    try {
        data = JSON.parse(session);
    } catch {
        return {
            user: null,
            role: null,
            isGuest: true
        };
    }

    return {
        user: { id: data.id },
        role: data.role,
        isGuest: false
    };
}

