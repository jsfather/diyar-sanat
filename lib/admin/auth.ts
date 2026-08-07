import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { StaffRole } from "@/lib/admin/modules";

export const getStaffUser=cache(async()=>{const supabase=await createClient();const{data:{user}}=await supabase.auth.getUser();if(!user)return null;const{data:profile}=await supabase.from("profiles").select("id,display_name,role,phone,is_active,last_seen_at").eq("id",user.id).maybeSingle();if(!profile?.is_active)return null;return{user,profile:profile as typeof profile&{role:StaffRole}};});
export async function requireStaff(){const staff=await getStaffUser();if(!staff)redirect("/admin/login");return staff;}
