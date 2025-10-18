<script lang="ts">
   import ServicesInfo from "$lib/components/ServicesInfo.svelte";  
   import Posts from "$lib/components/Posts.svelte";

   let expandedView: 'left' | 'middle' | 'right' | 'user' | 'chat' | null = null;

    function toggleView(view: 'left' | 'middle' | 'right' | 'user' | 'chat') {
        expandedView = expandedView === view ? null : view;
    }

    function resetView() {
        expandedView = null;
    }

</script>

<main>
    <header>
        <div class="header-flexbox">
            <div class="top-logo-icon">
                <img src="src/lib/assets/images/logo.png" alt="logo" on:click={resetView}/>
            </div>
            <h1 class="main-heading">Mighka CarePlus+</h1>
            <div class="top-user-icon">
                <img src="src/lib/assets/images/user.png" alt="user icon" on:click={() => toggleView('user')}/>
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
                <div class="section-content">
                    <Posts/>
                </div>
            </div>

            <div class="user-section">
                <div class="section-content">
                    <p>User Information Panel</p>
                </div>
            </div>

            <div class="chat-section">
                <div class="section-content">
                    <p>Chat Panel</p>
                </div>
            </div>
        </div>

    </section>
    <footer>
        <div class="footer-flexbox">
            <div class="whatsapp-icon">
                <a 
                    href="https://wa.me/260776203534" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Chat on WhatsApp"
                 >
                                <img src="src/lib/assets/images/whatsapp.png" alt="whatsapp icon"/>
            </a>
            </div>
            <h4 class="footer-heading">Guest</h4>
            <div class="chat-icon">
                <img src="src/lib/assets/images/chat.png" alt="chat icon" on:click={() => toggleView('chat')}/>
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
        transition: all 0.4s ease-in-out;
        scroll-behavior: smooth;
    }
    .section-content {
        flex: 1;          /* fill remaining space */
        overflow-y: auto; /* scrollable content */
        height: 100%;
        margin-top: 5%;
        box-sizing: border-box;
        background-color: rgba(28, 25, 25, 0.6);
        transition: flex 0.4s ease-in-out, opacity 0.7s ease;
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
        min-height: 80%;
        height: 100%;
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
        min-height: 40%;
        height: 100%;
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */
        transition: flex 0.3s ease;
    }
    .user-section{
        display: none;
        background-color: rgba(1, 7, 16, 0.729);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        flex: 4;
        min-width: 0;
        min-height: 40%;
        height: 100%;
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */
        transition: flex 0.3s ease;
    }
    .chat-section{
        display: none;
        background-color: rgba(27, 2, 1, 0.637);
        border-radius: 10px;
        padding: 1rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        flex: 1.5;
        min-width: 0;
        min-height: 40%;
        height: 100%;
        justify-content: center; /* horizontal centering */
        align-items: center;     /* vertical centering */
        transition: flex 0.3s ease;
    }

    /* Adjust section widths based on expandedView state */

    /* Left panel expanded styles */
    .main-content-flexbox.expanded-left .services-section{
        flex: 4;
        min-height: 100%;
    }
    .main-content-flexbox.expanded-left .section-content{
        width: 70%;
        margin: 0 auto;
    }
    .main-content-flexbox.expanded-left .posts-section{
        flex: 0;
        padding:0%

    }
    .main-content-flexbox.expanded-left .schedule-section{
        flex: 0;
        padding:0%
    }
    /* Middle panel expanded styles */
    .main-content-flexbox.expanded-middle .schedule-section{
        flex: 4;
        min-height: 100%;
    }
    .main-content-flexbox.expanded-middle .section-content{
        width: 80%;
        margin: 0 auto;
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
    /* Right panel expanded styles */
    .main-content-flexbox.expanded-right .posts-section{
        flex: 4;
        min-height: 100%;
    }
    .main-content-flexbox.expanded-right .section-content{
        width: 70%;
        margin: 0 auto;
    }
    .main-content-flexbox.expanded-right .schedule-section{
        flex: 0;
        padding:0%;
    }
    .main-content-flexbox.expanded-right .services-section{
        flex: 0;
        padding:0%
    }
    .main-content-flexbox.expanded-right .services-section .section-resize {
    display: none;
    }
    /* User panel expanded styles */
    .main-content-flexbox.expanded-user .user-section{
        display: block;
        flex: 4;
        min-height: 100%;
    }
    .main-content-flexbox.expanded-user .section-content{
        width: 80%;
        margin: 0 auto;
    }
    .main-content-flexbox.expanded-user .schedule-section{
       display: none;
    }
    .main-content-flexbox.expanded-user .posts-section{
       display: none;
    }
    .main-content-flexbox.expanded-user .services-section{
       display: none;
    }
    .main-content-flexbox.expanded-user .services-section .section-resize {
       display: none;
    }
    /* Chat panel expanded styles */
    .main-content-flexbox.expanded-chat .chat-section{
        display: block;
        flex: 4;
        min-height: 100%;
    }
    .main-content-flexbox.expanded-chat .section-content{
       display: none;
    }
    .main-content-flexbox.expanded-chat .posts-section{
        display: none;
    }
    .main-content-flexbox.expanded-chat .schedule-section{
        display: none;
    }
    .main-content-flexbox.expanded-chat .services-section{
        display: none;
    }
    .main-content-flexbox.expanded-chat .services-section .section-resize {
    display: none;
    }


    /*Mobile device adjustments*/
    @media(max-width: 1024px){
        .main-content-flexbox{
            flex-direction: column;
            align-items: center;
            height: 100%;
            overflow-y: auto;
        }
        .services-section{
            display: none;
        }
        .schedule-section, .posts-section{
            max-width: 100%;
            margin-bottom: 1rem;
        }

        /* Adjust section heights when expanded on mobile */
        .main-content-flexbox.expanded-middle .schedule-section{
            flex: 4;
            min-width: 100%;
        }
            .main-content-flexbox.expanded-middle .section-content{
            width: 95%;
            margin: 0 auto;
         }
        .main-content-flexbox.expanded-middle .posts-section{
            flex: 0;
            padding: 0%;
            display:none;
        }
        .main-content-flexbox.expanded-middle .services-section{
            flex: 0;
            padding: 0%;
            display: none;
        }
        .main-content-flexbox.expanded-middle .services-section .section-resize {
            display: none;
        }


        .main-content-flexbox.expanded-right .posts-section{
            flex: 4;
            min-height: 100%;
        }
            .main-content-flexbox.expanded-right .section-content{
            width: 95%;
            margin: 0 auto;
         }
        .main-content-flexbox.expanded-right .schedule-section{
            flex: 0;
            padding:0%;
            display: none;
        }
        .main-content-flexbox.expanded-right .services-section{
            flex: 0;
            padding:0%;
            display: none;
        }
        .main-content-flexbox.expanded-right .services-section .section-resize {
            display: none;
        }
    }   

    .section-resize{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding: 0%;
        margin: 0%;
        height: 15px;
        flex-shrink: 0;
        cursor: pointer;
    }
    .section-resize img{
        height: 1.3rem;
        width: auto;
        opacity: 0.7;
        margin: 0;
        padding: 0%;
    }
    .section-resize img:hover{
        opacity: 1;
    }
    .section-content {
        flex: 1;          /* fill remaining space */
        overflow-y: auto; /* scrollable content */
        padding: 1rem;
        padding-top: 0%;
        margin-top: 1%;
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
