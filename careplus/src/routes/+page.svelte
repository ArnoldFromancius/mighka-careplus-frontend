<script>
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";

  function login() {
    // later this will call backend;
    // for now, redirect to /app so UI continues to work
    goto("/app");
  }
</script>

<div class="login-page">
  <h1>Login</h1>
  <input bind:value={email} placeholder="Email" />
  <input bind:value={password} type="password" placeholder="Password" />
  <button on:click={login}>Sign In</button>
</div>

