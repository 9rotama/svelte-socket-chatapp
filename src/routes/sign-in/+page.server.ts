import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { signInFormSchema, type SignInFormValues } from '../../lib/features/auth/models/schema';
import { fail, redirect } from '@sveltejs/kit';
import { message } from 'sveltekit-superforms';
import type { Actions } from './$types';

export const load = async () => {
	const form = await superValidate<SignInFormValues>(valibot(signInFormSchema));

	return { form };
};

export const actions = {
	signin: async (event) => {
		const form = await superValidate<SignInFormValues>(event, valibot(signInFormSchema));
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		const { username, password } = form.data;

		const { error } = await event.locals.supabase.auth.signInWithPassword({
			email: username,
			password
		});
		if (error) {
			console.error(error);
			return message(form, { text: 'ログインに失敗しました', type: 'error' });
		} else {
			redirect(303, '/chat');
		}
	}
} satisfies Actions;
