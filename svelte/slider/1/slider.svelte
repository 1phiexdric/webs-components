<script lang="ts">
    import arrowleft from './assets/arrow-left.svg'
    import arrowrigth from './assets/arrow-rigth.svg'
    import foto1 from './assets/foto.wepb'
    import foto2 from './assets/foto2.wepb'
    import foto3 from './assets/foto3.wepb'
    import user from "./assets/user.png"

    let sliderBody = [
        {
            subtitle: "Hola mi nombre es Jordan alexander",
            reviews: "me encanta el trabajo de Friedrich es muy lindo y hermoso, y no estoy hablando de su trabajo",
            imgUrl: foto1
        },
        {
            subtitle: "Hola mi nombre es pablo gonzales",
            reviews: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique vitae vel, dolorum amet quis odit deserunt nam natus, incidunt, possimus dicta dolores. Quibusdam aliquid eum impedit? Dolore reiciendis amet inventore.",
            imgUrl: foto2
        },
{
    subtitle: "Hola mi nombre es alexander perez",
    reviews: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique vitae vel, dolorum amet quis odit deserunt nam natus, incidunt, possimus dicta dolores. Quibusdam aliquid eum impedit? Dolore reiciendis amet inventore.",
            imgUrl: foto3
},{
    subtitle: "hola pendejo",
    reviews:"bendito pendejo",
    imgUrl: null
}
    ]

    let current = $state(0)
    function changePosition(n:number){
        current = current + n
        if(current >= sliderBody.length){
            current=0
        }
        if(current < 0){
            current = sliderBody.length - 1;
        }
    }

</script>
<div id="main-container">
    <section class="slider">
        <div class="slider_container container">
            <img src="{arrowleft}" alt="flecha izquierda" class="slider_arrow"
            id="before" bind:this={arrowBefore} onclick={()=>changePosition(-1)}>
            {#each sliderBody as item, index}
            <section class="slider_body {index === current ? 'slider_body--show' : ''}">
                <div class="slider_text">
                    <h2 class="subtitle">{item.subtitle}</h2>
                <p class="slider_reviews">
                    {item.reviews}
                </p>
                </div>
                <figure class="slider_picture">
                    <img src="{item.imgUrl ? item.imgUrl: user}" alt="foto" class="slider_img">
                </figure>
            </section>
            
            {/each}

            <img src="{arrowrigth}" alt="flecha derecha" class="slider_arrow" id="then" onclick={()=> changePosition(1)}>
        </div>
    </section>
</div>
<style>

@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

#main-container{
    font-family: "Raleway";
}

.container{
    width: 90%;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}

.slider{
    background-color: #f2f2f2;
    padding: 40px 0;
}

.slider_container{
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    gap: 1em;
}

.slider_body{
    grid-column: 2/3;
    grid-row: 1/2;
    opacity: 0;
    pointer-events: none;
    display: grid;
    background-color: #f2f2f2;
    grid-template-columns: 1fr max-content;
    align-items: center;
    transition: opacity 0.9s;
}

.slider_body--show{
    opacity: 1;
    pointer-events: unset;
}

.slider_text{
    max-width: 600px;
}

.subtitle{
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.slider_reviews{
    font-weight: 300;
    font-size: 20px;
    line-height: 1.7;
}



.slider_img{
    width: 230px;
    height: 230px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin: auto;
}

.slider_arrow{
    cursor: pointer;
    width: 90%;
}

.slider_arrow:nth-of-type(2){
    justify-self: end;
}
@media(width<750px){
    .slider_body{
        grid-template-columns: 1fr;
        grid-template-rows: max-content 1fr;
        gap: 1em;
    }

    .slider_picture{
        grid-row: 1/2;
    }
    .slider_img{
        width: 210px;
        height: 210px;
    }
}

@media(width<425px){
    .slider_container{
        grid-template-columns: 25px 1fr 25px;

    }
    .slider_arrow{
        width: 100%;

    }
    .slider_img{
        width: 180px;
        height: 180px;
    }
    .subtitle{
        text-align: center;
        font-size: 2rem;
        margin-bottom: 15px;
    }
    .slider_reviews{
        font-size: 1rem;
        line-height: 1.6;
    }
}

</style>