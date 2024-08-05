import { loginFormSchema } from "@/lib/components/features/login/schema";
import { message, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import type { Actions, PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import { supabase } from "@/lib/supabase-client";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(loginFormSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(loginFormSchema));

    const { error } = await supabase.auth.signInWithPassword({
      email: form.data.email,
      password: form.data.password,
    });

    if (!error) {
      redirect(303, "/home");
    }
    switch (error.name) {
      case "AuthApiError":
        return message(form, "invalid email or password", { status: 403 });
      default:
        return message(form, "error", { status: 403 });
    }
  },
};
