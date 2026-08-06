const publicEnv = {
  url: process.env.NEXT_PUBLIC_SUPABASE_URL,
  publishableKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
};

export function hasSupabaseEnv() {
  return Boolean(publicEnv.url && publicEnv.publishableKey);
}

export function getSupabaseEnv() {
  if (!publicEnv.url || !publicEnv.publishableKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.",
    );
  }

  return {
    url: publicEnv.url,
    publishableKey: publicEnv.publishableKey,
  };
}
