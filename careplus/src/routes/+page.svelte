
<main>
    <header>
        <div class="header-flexbox">
            <div class="top-logo-icon">
                <img src="src/lib/assets/images/logo.png" alt="logo"/>
            </div>
            <h1 class="main-heading">Mighka CarePlus+</h1>
            <div class="top-user-icon">
                <img src="src/lib/assets/images/user.png" alt="user icon"/>
            </div>
        </div>
        
    </header>
    <section>

    </section>
    <footer>
        <div class="footer-flexbox">
            <div class="whatsapp-icon">
                <img src="src/lib/assets/images/whatsapp.png" alt="whatsapp icon"/>
            </div>
            <h4 class="footer-heading">Connect</h4>
            <div class="chat-icon">
                <img src="src/lib/assets/images/chat.png" alt="chat icon"/>
            </div>
        </div> 
    </footer>
</main>


<style lang="css">
    body{
        margin: 0;
        height: 100%;
        overflow: hidden;
    }
    
    main{
        display: grid;
        grid-template-rows: auto 1fr auto;
        overflow: hidden;
        height: 100vh;
        text-align: center;
        background-image: url("src/lib/assets/images/banner.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    header{
        background-color: #1e1d1db6;
        color: antiquewhite;
        padding: 1rem;
    
    }
    
    .header-flexbox{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .main-heading{
        margin: 0;
        font-size: 1.5rem;
        text-decoration: underline;
        padding: 0.5%;
        background-color: rgba(67, 62, 62, 0.865);
        border-radius: 1%;
    } 
    
    .top-logo-icon{
        font-size: 2rem;
        margin: 0;
        padding-left: 3.5%;
        padding-right: 1.5%;
        height: 2.8rem;          /* scales with font size / viewport */
        width: auto;
    }
    .top-logo-icon img{
        height: 100%;
        width: auto;
    }   

    .top-user-icon{
        font-size: 1rem;
        margin: 0;
        padding-right: 5%;
        padding-left: 5%;
        height: 2rem;          /* scales with font size / viewport */
        width: auto;
    }
    .top-user-icon img{
        height: 100%;
        width: auto;
        border-radius: 50%;
        border: 2px solid antiquewhite;
    }

    .footer-flexbox{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }
    .whatsapp-icon{
        font-size: 1.5rem;
        margin: 0;
        padding-left: 3.5%;
        padding-right: 1.5%;
        height: 2rem;          /* scales with font size / viewport */
        width: auto;
    }
    .whatsapp-icon img{
        height: 100%;
        width: auto;
    }
    .chat-icon{
        font-size: 2rem;
        margin: 0;
        padding-left: 3.5%;
        padding-right: 1.5%;
        height: 2rem;          /* scales with font size / viewport */
        width: auto;
    }
    .chat-icon img{
        height: 100%;
        width: auto;
    } 
    section{
        overflow: auto;
    }

    footer{
        color:antiquewhite;
        background-color: #1e1d1de2;
        padding: 1rem;
    }

</style>
