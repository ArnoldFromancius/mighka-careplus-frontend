import { redirect, fail } from "@sveltejs/kit";

export const actions = {
    login: async ({ request, cookies }) => {
        const form = await request.formData();
        const email = form.get("email");
        const password = form.get("password");

        const user = await checkUser(email, password);

        if (!user) {
            return fail(400, { error: "Invalid credentials" });
        }

        // 2. Store session cookie
        cookies.set("session", JSON.stringify({
            id: user._id,
            role: user.role
        }), {
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
            httpOnly: true,
            sameSite: "strict"
        });

        // 3. Redirect based on role
        if (user.role === "admin") throw redirect(302, "/app/admin");
        if (user.role === "client") throw redirect(302, "/app/client");

        throw redirect(302, "/app");
    }
};
