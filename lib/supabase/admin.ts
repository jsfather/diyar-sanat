import "server-only";
import {createClient} from "@supabase/supabase-js";
import type {Database} from "./database.types";
import {getSupabaseEnv} from "./env";
export function createAdminClient(){const secret=process.env.SUPABASE_SECRET_KEY;if(!secret)throw new Error("SUPABASE_SECRET_KEY is not configured");return createClient<Database>(getSupabaseEnv().url,secret,{auth:{autoRefreshToken:false,persistSession:false}})}
