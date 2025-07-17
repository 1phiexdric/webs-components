/*
Preloader con efecto de escritura de texto
como usar:
1 - crea un div, dentro un parrafo con el id 'preloader_text' y el texto de tu preferencia
2 - darle estilos a tu gusto
3 - llama a showPreloader() cuando lo necesites
*/
 
 let preloaderIntervalId
 function showPreloader(){
    const textPreloader = document.getElementById('preloader_text')
    const padre = textPreloader.parentElement
    padre.style.display = 'block'
    let valor = textPreloader.textContent
    textPreloader.textContent=""
    let i = 0
    preloaderIntervalId = setInterval(() => {
        textPreloader.textContent += valor[i]
        i++
        if(textPreloader.textContent == valor){
            textPreloader.textContent = ""
            i = 0
        }
    }, 200);
 }
 
 function hidePreloader(){
    const padre = document.getElementById('preloader_text').parentElement;
    if (preloaderIntervalId) {
        clearInterval(preloaderIntervalId);
        preloaderIntervalId = null; 
    }
    if (padre) {
        padre.style.display = 'none';
    }
 }