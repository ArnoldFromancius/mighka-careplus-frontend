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

<main>
  <div class="overlay">
    <div class="login-page">
      <div class="login_overlay">
        <img src="/assets/images/logo.png" alt="CarePlus Logo" width="250" />
        <h1>Login</h1>
        <input bind:value={email} placeholder="Email" />
        <br>
        <input bind:value={password} type="password" placeholder="Password" />
        <br>
        <button on:click={login}>Sign In</button>
        <p>or</p>
        <a href="/app?guest=true">sign in as guest.</a>
        <div class="whatsapp-icon">
            <a 
              href="https://wa.me/260776203534" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Chat on WhatsApp"
            >
              <img src="/assets/images/whatsapp.png" alt="whatsapp icon"/>
            
            </a>
          </div>
        </div>
    </div>
  </div>
</main>

<style lang="css">
  
  main {
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
    font-family: Arial, sans-serif;
    background-image: url("/assets/images/banner.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    color: white;
    position: relative;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5); /* semi-transparent overlay */
  }

  .login-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0.5%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: rgba(7, 15, 24, 0.437);
    border-radius: 0.5%;
    max-width: 70%;
    margin: auto;  
    color:antiquewhite;
  }
  .login_overlay {
    background-color: rgba(2, 42, 47, 0.5); /* semi-transparent overlay */
    border-radius: 10px;
    padding: 7%;
  }

  img {
    margin-bottom: 20px;
  }
  input {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
  }
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  a{
    color:chocolate;
  }
  a:hover{
    color:darkorange;
  }

  .whatsapp-icon{
        font-size: 1.5rem;
        margin: 0;
        padding-left: 3.5%;
        padding-right: 1.5%;
        height: 2rem;          /* scales with font size / viewport */
        width: auto;
        cursor: pointer;
        position: absolute;
	    	bottom: 5%;
	    	right: 1%;
    }
    .whatsapp-icon img{
        height: 100%;
        width: auto;
        opacity: 0.8;
    }
    .whatsapp-icon img:hover{
        opacity: 1;
    }
  
  @media(max-width: 1024px){
    main{
      height: 100vh;
      overflow: hidden;
    }
    .login-page {
      max-width: 100%;
      height: 95vh;
    } 
    .login_overlay {
      width: 100%;
      height: 90vh;
      position: relative;
    }
    .whatsapp-icon{
      display: none;
    }
    
  }

</style>

