<script>
    let {projects} = $props()
    /*
    CAMPOS QUE ACEPTA EL COMPONENTE
    let projects = [
        {
        title: "Titulo del proyecto",
        imgUrl: "project.png",
        tecnologies: ["JavaScript", "HTML","CSS", "SVELTE"],
        description: "Una descripción breve y concisa de tu proyecto, destacando sus características principales o el problema que resuelve.",
        linkDemo: "",
        linkGithub: ""
    }
    ]*/
</script>
<div>
    {#each projects as item}
    <div class="main-container">
        <div class="img-container">
            <img src={item.imgUrl} alt="Project thumbnail" class="project-img" />
            <a href="https://barberhero.netlify.app/" class="overlay" target="_blank" rel="noopener noreferrer">
                <p class="overlay-text">Ver</p>
            </a>
        </div>
        <div class="details">
            <h3>{item.title}</h3>
            <div class="divider"></div>
            <div class="tags">
                {#each item.tecnologies as tecnologie }
                    
                <div class="tag">{tecnologie}</div>
                {/each}
            </div>
            <p class="description">{item.description}</p>
            <div class="btn-container">
                <button class="btn"><a href={item.linkDemo}>DEMO</a></button>
                <button class="btn"><a href={item.linkGithub}>GITHUB</a></button>
            </div>
        </div>
    </div>
        
    {/each}
</div>

<style>
    /* Variables CSS para facilitar la personalización */
    :root {
        --primary-color: #129ebd; /* Azul/Cian vibrante */
        --secondary-color: #6366f1; /* Morado suave */
        --text-dark: #2d3748; /* Color de texto oscuro para títulos */
        --text-medium: #4a5568; /* Color de texto para descripciones */
        --text-light: #6b7280; /* Color de texto más claro para tags */
        --bg-light: #f8fafc; /* Fondo claro general (aquí, para elementos internos si se necesitara) */
        --card-bg: #ffffff; /* Fondo de la tarjeta */
        --shadow-light: rgba(30, 41, 59, 0.08); /* Sombra ligera */
        --shadow-medium: rgba(30, 41, 59, 0.15); /* Sombra media */
        --border-radius-card: 16px;
        --border-radius-sm: 8px;
        --transition-speed: 0.3s;
    }

    .main-container {
        max-width: 780px;
        min-width: 300px;
        height: 260px;
        border-radius: var(--border-radius-card);
        margin: 32px auto;
        display: flex;
        overflow: hidden;
        box-shadow: 0 10px 40px var(--shadow-light), 0 3px 10px var(--shadow-light);
        background: var(--card-bg);
        transition: transform var(--transition-speed) ease-out;
        font-family: 'Inter', sans-serif;
    }

    .main-container:hover {
        transform: translateY(-5px);
    }

    .img-container {
        width: 40%;
        min-width: 150px;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        background: linear-gradient(135deg, #e0e7ef 0%, #f8fafc 100%);
    }

    .project-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center top; /* Asegura que la parte superior de la imagen sea visible */
        filter: grayscale(20%) brightness(0.9) contrast(1.05);
        transition: filter 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        transform: scale(1.02);
    }

    .img-container:hover .project-img {
        filter: grayscale(0%) brightness(1.05) contrast(1.1) saturate(1.2);
        transform: scale(1.08);
    }

    .overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(120deg, rgba(18,158,189,0.85) 0%, rgba(30,41,59,0.85) 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.4s ease-out;
        text-decoration: none;
        cursor: pointer;
    }
    .img-container:hover .overlay {
        opacity: 1;
    }

    .overlay-text {
        color: var(--card-bg);
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 1.2px;
        background: rgba(0,0,0,0.25);
        padding: 0.6em 1.8em;
        border-radius: var(--border-radius-sm);
        box-shadow: 0 4px 12px var(--shadow-light);
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
    }
    .img-container:hover .overlay-text {
        opacity: 1;
        transform: translateY(0);
    }

    .details {
        margin: 0;
        width: 60%;
        height: 100%;
        padding: 10px 10px 5px 20px;
        display: flex;
        flex-direction: column;
        /* --- AJUSTES CLAVE AQUÍ --- */
        /* Eliminamos 'gap' para un control más fino del espaciado entre elementos */
        justify-content: space-between; /* Esto empuja los botones al final */
    }
    .details h3 {
        font-size: 1.6rem;
        font-weight: 800;
        color: var(--text-dark);
        margin: 0 0 8px 0; /* Ajustado el margin-bottom */
        letter-spacing: 0.7px;
    }
    .divider {
        height: 3px;
        width: 45px;
        background: linear-gradient(90deg, var(--primary-color) 60%, var(--secondary-color) 100%);
        border-radius: 3px;
        margin-bottom: 12px; /* Mayor espacio después del divisor */
    }
    .tags {
        display: flex;
        gap: 8px; /* Reducir ligeramente el gap entre tags */
        flex-wrap: wrap;
        margin-bottom: 12px; /* Mayor espacio después de los tags */
    }
    .tag {
        padding: 3px 10px; /* Reducir ligeramente el padding del tag */
        border-radius: 20px;
        background: #e0e7ff;
        color: #4338ca;
        font-size: 0.75rem; /* Ligeramente más pequeño */
        font-weight: 600;
        letter-spacing: 0.3px;
        border: 1px solid rgba(99,102,241,0.2);
        box-shadow: 0 1px 3px rgba(99,102,241,0.06);
    }
    .description {
        color: var(--text-medium);
        font-size: 0.92rem; /* Ligeramente más pequeña para más texto */
        line-height: 1.5;
        margin-bottom: 16px; /* Aumentado el espacio para los botones */
        flex: 1; /* Permite que la descripción crezca y empuje los botones hacia abajo */
        overflow: hidden; /* Oculta el texto si se desborda y no cabe */
        text-overflow: ellipsis; /* Añade puntos suspensivos si el texto se recorta */
        display: -webkit-box; /* Para limitar las líneas de texto en webkit browsers */
        -webkit-line-clamp: 3; /* Limita a 3 líneas de texto */
        -webkit-box-orient: vertical;
    }
    .btn-container {
        display: flex;
        gap: 18px;
        justify-content: space-evenly;
        /* margin-top: 10px; -- Eliminado, ya no es necesario con flex: 1 en description */
    }
    .btn {
        border: none;
        padding: 9px 24px;
        border-radius: var(--border-radius-sm);
        background: linear-gradient(90deg, var(--primary-color) 60%, var(--secondary-color) 100%);
        color: var(--card-bg);
        font-weight: 600;
        font-size: 1.05rem;
        cursor: pointer;
        box-shadow: 0 4px 12px var(--shadow-light);
        transition: all 0.3s ease-out;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        width: 40%;
    }
    .btn:hover {
        background: linear-gradient(90deg, var(--secondary-color) 40%, var(--primary-color) 100%);
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 20px var(--shadow-medium);
    }
    .btn:active {
        transform: translateY(0);
        box-shadow: 0 2px 8px var(--shadow-light);
    }

    /* Media Queries para responsividad */
    @media (max-width: 768px) {
        .main-container {
            flex-direction: column;
            height: auto; /* IMPORTANTE: Volver a auto en móvil */
            max-width: 95vw;
            margin: 20px auto;
            padding: 0;
        }
        .img-container {
            width: 100%;
            height: 180px;
            border-top-left-radius: var(--border-radius-card);
            border-top-right-radius: var(--border-radius-card);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        .details {
            width: 100%;
            padding: 20px 20px 18px 20px;
            gap: 10px; /* Restaurar gap general en móvil, o mantener margenes específicos */
        }
        .details h3 {
            font-size: 1.4rem;
            margin-bottom: 6px;
        }
        .divider {
            margin-bottom: 8px;
        }
        .tags {
            gap: 8px;
            margin-bottom: 10px;
        }
        .tag {
            font-size: 0.8rem;
            padding: 4px 12px;
        }
        .description {
            font-size: 0.9rem;
            margin-bottom: 12px;
            -webkit-line-clamp: 4; /* Permitir más líneas en móvil si es necesario */
        }
        .btn-container {
            gap: 10px;
        }
        .btn {
            width: 100%;
            padding: 10px 0;
        }
    }

    @media (max-width: 480px) {
        .details {
            padding: 15px;
        }
        .details h3 {
            font-size: 1.3rem;
        }
        .tags {
            gap: 6px;
        }
        .tag {
            font-size: 0.75rem;
        }
        .description {
            font-size: 0.85rem;
        }
    }
</style>