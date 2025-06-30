<section id="hero" class={"min-h-screen flex flex-col px-4 background"}>
<div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">
<div class="flex flex-col gap-10 flex-1 items-center justify-center pb-10 md:pb-14 mt-[70px]">
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px]
      mx-auto w-full text-center font-semibold text-white">
      Titulo
    </h1>
    <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full text-white">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere voluptas veritatis dignissimos eum quia nostrum ut, 
   <span class="italic">temporibus nam fuga sapiente iste, eius </span>, inventore cumque corporis aliquam!
</p>
        <a class="CTAs" href="https://youtu.be/dQw4w9WgXcQ?si=48X8Nc8DbBZPeGro" target="_blank"><p class="text-base sm:text-lg md:text-xl">¡CTAs! &rArr;</p></a>
    </div>
    </div>
</section>

<style>
  .background {
        height: 100vh;
        background-image:
            linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url('background.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        color: white;
    }

    .CTAs {
      background: linear-gradient(90deg, #fff 0%, #f3f3f3 100%);
      color: #111;
      border-radius: 8px;
      min-width: 9rem;
      padding: 12px 24px;
      cursor: pointer;
      text-align: center;
      border: 1px solid transparent;
      box-shadow: 0 4px 16px rgba(0,0,0,0.08);
      font-weight: 600;
      font-size: 1.15rem;
      letter-spacing: 0.02em;
      transition: 
      background 0.2s,
      color 0.2s,
      border 0.2s,
      box-shadow 0.2s;
      outline: none;
      display: inline-block;
    }
    .CTAs:hover, .CTAs:focus {
      background: linear-gradient(90deg, #e0e7ff 0%, #fff 100%);
      color: black;
      border: 1px solid black;
      box-shadow: 0 8px 24px rgba( 0, 0, 0,0.12);
      text-decoration: none;
    }
</style>