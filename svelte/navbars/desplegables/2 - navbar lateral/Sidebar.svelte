<script>
    let links = [
        {
            type: '1',
            link: '',
            icon: 'fa-solid fa-house',
            texto: 'Home',
        },
        {
            type: '1',
            link: '',
            icon: 'fa-solid fa-user',
            texto: 'User',
        },
        {
            type: '1',
            link: '',
            icon: 'fa-solid fa-house',
            texto: 'Link',
        },
    ]
    let showMenu = $state(false)
</script>
<div class="main">
<div class="btn-div">
    <button onclick={()=> showMenu =!showMenu} aria-label="Abrir menú lateral">
        <i class="fa-solid fa-bars"></i>
    </button>
</div>
<aside class:open={showMenu}>
    <div class="container">
        {#each links as item }
            <div class="link_container">
                <a href={item.link} class="link" onclick={()=> showMenu =!showMenu}>
                    <i class={item.icon}></i>
                        <p class="link_text" style="color: white;">{item.texto}</p>
                </a>
            </div>            
        {/each}
    </div>
    <div class="container container-two">
        <div class="link_container">
            <a href="/" class="link" onclick={()=> showMenu =!showMenu} >
                <i class="fa-solid fa-gear"></i>
                <p>Ajuste</p>
            </a>
        </div>
    </div>
</aside>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&family=Permanent+Marker&display=swap');

.main{
    overflow: hidden;
}

.btn-div{
    display: none;
}


.btn-div button{
    margin-right: 1rem;
    font-size: 2rem;
    color: white;
}

aside {
    background: linear-gradient(135deg, #232526 0%, #414345 100%);
    height: 100vh;
    width: 60px;
    overflow: hidden;
    transition: width 0.2s cubic-bezier(0.4, 0.2, 0.2, 1);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-right: 2px solid #111;
    box-shadow: 2px 0 16px 0 rgba(0,0,0,0.4);
}

aside:hover {
    width: 280px;
}

.container {
    padding-top: 20px;
}

.link_container {
    border-bottom: 1px solid #333;
    font-size: 2rem;
    transition: all 0.18s cubic-bezier(0.4, 0.2, 0.2, 1);
    position: relative;
    overflow: hidden;
}

.link_container:hover {
    background: linear-gradient(90deg, #ff512f 0%, #dd2476 100%);
    color: #fff;
    box-shadow: 0 4px 24px 0 rgba(255,81,47,0.15);
    transform: translateY(-2px) scale(1.04) rotate(-1deg);
}

.link {
    display: grid;
    grid-template-columns: 60px 1fr;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-family: 'Permanent Marker', cursive;
    letter-spacing: 1px;
    padding: 12px 0 12px 10px;
    transition: color 0.2s;
}

.link i {
    margin: auto;
    font-size: 2.1rem;
    color: #ff512f;
    filter: drop-shadow(0 0 2px #fff2);
    transition: color 0.2s;
}

.link_container:hover .link i {
    color: #fff;
    filter: drop-shadow(0 0 8px #fff8);
}

.link_text {
    margin: 0;
    font-size: 1.2rem;
    font-family: 'Permanent Marker', cursive;
    color: #fff;
    text-shadow: 1px 1px 2px #0008;
    opacity: 0.92;
    letter-spacing: 2px;
}

aside:not(:hover) .link .link_text {
    opacity: 0;
    width: 0;
    overflow: hidden;
    transition: opacity 0.2s, width 0.2s;
}

aside:hover .link .link_text {
    opacity: 1;
    width: auto;
    transition: opacity 0.3s 0.1s, width 0.3s 0.1s;
}



.container-two .link_container {
    border-bottom: none;
    margin-bottom: 20px;
}

.container-two .link_container:hover {
    background: linear-gradient(90deg, #232526 0%, #414345 100%);
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2);
    transform: scale(1.02) rotate(1deg);
}

.container-two .link i {
    color: #fff;
    text-shadow: 0 0 6px #ff512f88;
}

.description{
    font-size: 14px;
    color: white;
}

::-webkit-scrollbar {
    width: 6px;
    background: #232526;
}
::-webkit-scrollbar-thumb {
    background: #ff512f;
    border-radius: 3px;
}


@media (max-width: 720px){
    .btn-div{
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(135deg, #232526 0%, #414345 100%);
    z-index: 1000;
}
    aside .link .link_text {
        opacity: 1 !important;
        width: auto !important;
        transition: opacity 0.3s 0.1s, width 0.3s 0.1s;
    }
    aside{
        width: 100%;
        padding: 40px 0 0 0;
        transform: translateX(-105%);
        height: 100vh;
        border-right: none !important;
        transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
    }
    aside:hover{
        width: inherit;
    }
    .open {
     transform: translateX(0%) !important;
     transition: transform 0.4s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.link_container{
    color: white;
}
}
</style>
