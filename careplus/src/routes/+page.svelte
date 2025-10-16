<script lang="ts">
   import ServicesInfo from "$lib/components/ServicesInfo.svelte";  
   
   let expandedView: 'left' | 'middle' | 'right' | null = null;   
    
    function toggleView(view: 'left' | 'middle' | 'right') {
        expandedView = expandedView === view ? null : view;
    }

</script>

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
        <div class="main-content-flexbox {expandedView ? `expanded-${expandedView}` : ''}">
            <div class="services-section">
                <div class="section-resize">
                    <img src="src/lib/assets/images/resize.png" alt="expand/collapse icon" on:click={() => toggleView('left')}/>
                </div>
                <div class="section-content">
                    <ServicesInfo/>
                </div>
            </div>
            <div class="schedule-section">
                <div class="section-resize">
                    <img src="src/lib/assets/images/resize.png" alt="expand/collapse icon" on:click={() => toggleView('middle')}/>
                </div>
            </div>
            <div class="posts-section">
                <div class="section-resize">
                    <img src="src/lib/assets/images/resize.png" alt="expand/collapse icon" on:click={() => toggleView('right')}/>
                </div>
            </div>
        </div>

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

    /* Header styles */
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
        cursor: pointer;
    }
    .top-logo-icon img{
        height: 100%;
        width: auto;
    }   
    .top-logo-icon img:hover{
        scale: 1.2;
    }
    .top-user-icon{
        font-size: 1rem;
        margin: 0;
        padding-right: 5%;
        padding-left: 5%;
        height: 2rem;          /* scales with font size / viewport */
        width: auto;
        cursor: pointer;
    }
    .top-user-icon img{
        height: 100%;
        width: auto;
        border-radius: 50%;
        border: 2px solid antiquewhite;
    }
    .top-user-icon img:hover{
        scale: 1.1;
    }

    /* Main content styles */
    .main-content-flexbox{
        display: flex;
        justify-content: space-around;
        align-items: flex-start;
        gap: 1rem;
        padding: 1rem;
        height: 95%;
        overflow-y: hidden;
        background-color:rgba(0, 0, 0, 0.665);
        scroll-behavior: smooth;
    }
    .section-content {
        flex: 1;          /* fill remaining space */
        overflow-y: auto; /* scrollable content */
        height: 100%;
        margin-top: 5%;
        box-sizing: border-box;
        background-color: rgba(28, 25, 25, 0.6);
        scroll-behavior: smooth;
     }
    .services-section{
        background-color: rgba(23, 59, 58, 0.8);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        flex: 1;
        min-width: 0;
        height: 100%;
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */
        transition: flex 0.5s ease;
        overflow: hidden;
    }
    .schedule-section{
        background-color: rgba(48, 38, 38, 0.8);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        flex: 2.5;
        min-width: 0;
        height: fit-content;
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */
        transition: flex 0.3s ease;
    }
    .posts-section{
        background-color: rgba(44, 11, 33, 0.8);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        flex: 1.5;
        min-width: 0;
        height: fit-content;
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */
        transition: flex 0.3s ease;
    }

    /* Adjust section widths based on expandedView state */
    .main-content-flexbox.expanded-left .services-section{
        flex: 4;
    }
    .main-content-flexbox.expanded-left .posts-section{
        flex: 0;
        padding:0%

    }
    .main-content-flexbox.expanded-left .schedule-section{
        flex: 0;
        padding:0%
    }

    .main-content-flexbox.expanded-middle .schedule-section{
        flex: 4;
    }
    .main-content-flexbox.expanded-middle .posts-section{
        flex: 0;
        padding:0%
    

    }
    .main-content-flexbox.expanded-middle .services-section{
        flex: 0;
        padding:0%
    }
    .main-content-flexbox.expanded-middle .services-section .section-resize {
    display: none;
    }


    .main-content-flexbox.expanded-right .posts-section{
        flex: 4;
    }
    .main-content-flexbox.expanded-right .schedule-section{
        flex: 0;
        padding:0%
    }
    .main-content-flexbox.expanded-right .services-section{
        flex: 0;
        padding:0%
    }
    .main-content-flexbox.expanded-right .services-section .section-resize {
    display: none;
    }



    /*Mobile device adjustments*/
    @media(max-width: 900px){
        .main-content-flexbox{
            flex-direction: column;
            align-items: center;
            overflow-y: hidden;
        }
        .services-section{
            display: none;
        }
        .schedule-section, .posts-section{
            max-width: 100%;
            margin-bottom: 1rem;
        }
    }   

    .section-resize{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-shrink: 0;
        cursor: pointer;
    }
    .section-resize img{
        height: 1.3rem;
        width: auto;
        opacity: 0.7;
    }
    .section-resize img:hover{
        opacity: 1;
    }
    .section-content {
        flex: 1;          /* fill remaining space */
        overflow-y: auto; /* scrollable content */
        padding: 1rem;
        box-sizing: border-box;
    }

    /* Footer styles */
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
        cursor: pointer;
    }
    .whatsapp-icon img{
        height: 100%;
        width: auto;
        opacity: 0.8;
    }
    .whatsapp-icon img:hover{
        opacity: 1;
    }
    
    .chat-icon{
        font-size: 2rem;
        margin: 0;
        padding-left: 3.5%;
        padding-right: 1.5%;
        height: 2rem;          /* scales with font size / viewport */
        width: auto;
        cursor: pointer;
    }
    .chat-icon img{
        height: 100%;
        width: auto;
        opacity: 0.8;
    }
    .chat-icon img:hover{
        opacity: 1;
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
