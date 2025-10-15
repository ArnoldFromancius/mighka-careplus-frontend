
<main>
    <header>
        <h1 class="main-heading">Mighka CarePlus+</h1>
    </header>
    <section>

    </section>
    <footer>
        <h4 class="footer-heading">Footer</h4>
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
    .main-heading{
        margin: 0;
        font-size: 1.5rem;
    }   
    .footer-heading{
        margin: 0;
        font-size: 1.2rem;
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
