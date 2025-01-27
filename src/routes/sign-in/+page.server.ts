import { superValidate } from 'sveltekit-superforms';
import { valibot } from 'sveltekit-superforms/adapters';
import { signInFormSchema } from '../../lib/features/auth/models/schema';
import { fail } from '@sveltejs/kit';

export const load = async () => {
	const form = await superValidate(valibot(signInFormSchema));

	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, valibot(signInFormSchema));
		console.log(form.data);
		if (!form.valid) {
			return fail(400, {
				form
			});
		}
		return {
			form
		};
	}
};
