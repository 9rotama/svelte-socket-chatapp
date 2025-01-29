import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
	signout: async (event) => {
		const { error } = await event.locals.supabase.auth.signOut();
		if (error) {
			fail(error.status || 400, { message: 'ログアウトに失敗しました' });
		} else {
			redirect(303, '/sign-in');
		}
	}
} satisfies Actions;
