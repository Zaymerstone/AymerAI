import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://jebkixelquiawyufngop.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplYmtpeGVscXVpYXd5dWZuZ29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0NjM3ODQsImV4cCI6MjA4NzAzOTc4NH0.jE90NGkZlKTp0tbbDViau1KbeOHHqcVF3wow7qap7nY";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  },
});

