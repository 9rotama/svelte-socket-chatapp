import type { Infer } from 'sveltekit-superforms';
import { object, string, email, pipe, minLength } from 'valibot';

export const signInFormSchema = object({
	username: pipe(string('入力してください'), email('メールアドレスを入力してください')),
	password: pipe(string(), minLength(1, '入力してください'))
});

export type SignInFormValues = Infer<typeof signInFormSchema>;
