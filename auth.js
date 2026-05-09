import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const supabaseUrl = "https://arewzgemzqmokinlylhu.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZXd6Z2VtenFtb2tpbmx5bGh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgyMzgyNzQsImV4cCI6MjA5MzgxNDI3NH0.vBh00PCILcjrcGynLto-5Ce7zfRvjTXMUDqzG1PWGMw";

const supabase = createClient(supabaseUrl, supabaseKey);

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector('[name="name"]').value;
  const email = document.querySelector('[name="email"]').value;
  const password = document.querySelector('[name="password"]').value;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }
    }
  });

  if (error) {
    alert(error.message);
    return;
  }

  alert("Compte créé !");
});
