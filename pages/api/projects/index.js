import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const supabase = createClient(
    "https://uawklpreginjapghlqym.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVhd2tscHJlZ2luamFwZ2hscXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxMDYwNTIsImV4cCI6MjAyODY4MjA1Mn0.7UD5CBDzyg9si1m5T-v0IRBsuOxPrFpahnVHxVL4RY4"
  );
  const { data, error } = await supabase.from("projects").select();

  res.status(200).json({ projects: data });
}
