import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ url: { searchParams: params }, locals: { supabase } }) => {
    if (!params.has("id")) throw redirect(303, "/scouting");

    const id = Number(params.get("id"));

    const [existing] = await Promise.all([
        supabase.from("scouting-data").select().eq("id", id).single()
            .then(({ data, error }) => {
                if (error) throw fail(500, { error: error.message });
                return data;
            })
    ]);

    return { existing, id };

}) satisfies PageServerLoad;