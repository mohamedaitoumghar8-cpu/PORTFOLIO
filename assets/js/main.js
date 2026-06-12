const header = document.querySelector("#site-header");
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");
const navLinks = document.querySelectorAll(".desktop-nav a");
const progressBar = document.querySelector(".scroll-progress span");
const cursorGlow = document.querySelector(".cursor-glow");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const languageButtons = document.querySelectorAll(".language-button");

const spanishTranslations = {
    "About": "Sobre mí",
    "Projects": "Proyectos",
    "Skills": "Habilidades",
    "Experience": "Experiencia",
    "Contact": "Contacto",
    "Core Stack": "Stack Principal",
    "Available for opportunities": "Disponible para oportunidades",
    "Available": "Disponible",
    "Personal Brand / 2026": "Marca Personal / 2026",
    "Open to opportunities": "Abierto a oportunidades",
    "Digital Marketing Specialist": "Especialista en Marketing Digital",
    "I build digital visibility that turns into": "Construyo visibilidad digital que se convierte en",
    "real business growth.": "crecimiento empresarial real.",
    "SEO strategist, WordPress builder, and B2B marketer helping companies become easier to find, trust, and choose.": "Estratega SEO, creador WordPress y especialista en marketing B2B que ayuda a las empresas a ser más fáciles de encontrar, confiar y elegir.",
    "Book a 15-min call": "Reservar llamada de 15 min",
    "Let's talk": "Hablemos",
    "Search Console": "Search Console",
    "AI Workflows": "Flujos con IA",
    "Strategy / Execution / Growth": "Estrategia / Ejecución / Crecimiento",
    "Mohamed Ait Oumghar": "Mohamed Ait Oumghar",
    "Available / 2026": "Disponible / 2026",
    "I turn B2B websites into growth engines through": "Convierto sitios web B2B en motores de crecimiento mediante",
    "SEO, WordPress & Digital Marketing.": "SEO, WordPress y Marketing Digital.",
    "Digital Marketing Specialist based in Toledo, Spain, helping companies improve visibility, generate qualified leads, and build a stronger digital presence.": "Especialista en Marketing Digital en Toledo, España, ayudando a empresas a mejorar su visibilidad, generar leads cualificados y construir una presencia digital más sólida.",
    "View Projects": "Ver proyectos",
    "Download CV": "Descargar CV",
    "Contact Me": "Contactar",
    "Digital growth, made practical.": "Crecimiento digital llevado a la práctica.",
    "Based in": "Ubicación",
    "Toledo, Spain": "Toledo, España",
    "B2B Growth": "Crecimiento B2B",
    "B2B Marketing": "Marketing B2B",
    "Portfolio / 2026": "Portfolio / 2026",
    "Scroll to explore": "Desliza para explorar",
    "Strategy / Visibility / Growth": "Estrategia / Visibilidad / Crecimiento",
    "Clients Managed": "Clientes gestionados",
    "Years Client Management": "Años gestionando clientes",
    "SEO Keywords Mapped": "Palabras clave SEO mapeadas",
    "Languages": "Idiomas",
    "SEO Articles Produced": "Artículos SEO producidos",
    "Digitalization Award": "Premio de digitalización",
    "st": ".er",
    "About me": "Sobre mí",
    "Business instinct.": "Instinto de negocio.",
    "Digital precision.": "Precisión digital.",
    "Before becoming a digital marketer, I spent more than five years managing client portfolios in banking.": "Antes de dedicarme al marketing digital, pasé más de cinco años gestionando carteras de clientes en banca.",
    "That experience shaped the way I approach marketing today: strategy first, results always. Now I combine SEO, WordPress, content, local visibility, and B2B lead generation to help companies grow online.": "Esa experiencia definió mi forma de abordar el marketing: primero la estrategia, siempre los resultados. Hoy combino SEO, WordPress, contenido, visibilidad local y generación de leads B2B para ayudar a las empresas a crecer online.",
    "Why work with me?": "¿Por qué trabajar conmigo?",
    "Business background, not only marketing theory": "Experiencia empresarial, no solo teoría de marketing",
    "SEO + WordPress implementation": "Implementación de SEO + WordPress",
    "B2B and client management experience": "Experiencia B2B y en gestión de clientes",
    "Multilingual communication": "Comunicación multilingüe",
    "Independent execution from strategy to delivery": "Ejecución autónoma desde la estrategia hasta la entrega",
    "Arabic": "Árabe",
    "French": "Francés",
    "English": "Inglés",
    "Spanish": "Español",
    "Selected work": "Proyectos destacados",
    "Projects built around": "Proyectos orientados al",
    "measurable growth.": "crecimiento medible.",
    "Strategy, implementation, and content work focused on making B2B brands easier to find, trust, and choose.": "Estrategia, implementación y contenido para que las marcas B2B sean más fáciles de encontrar, confiar y elegir.",
    "Organic visibility": "Visibilidad orgánica",
    "Growth": "Crecimiento",
    "Managed the digital growth of a B2B workwear and PPE company in Toledo, including website optimization, SEO strategy, Google Business Profile, social media, and content workflows.": "Gestioné el crecimiento digital de una empresa B2B de ropa laboral y EPI en Toledo, incluyendo optimización web, estrategia SEO, Perfil de Empresa de Google, redes sociales y flujos de contenido.",
    "SEO roadmap": "Hoja de ruta SEO",
    "WordPress optimization": "Optimización WordPress",
    "Local visibility": "Visibilidad local",
    "B2B lead generation": "Generación de leads B2B",
    "Featured project": "Proyecto destacado",
    "Core stack": "Stack principal",
    "Four connected systems.": "Cuatro sistemas conectados.",
    "One growth mindset.": "Una mentalidad de crecimiento.",
    "A practical mix of strategy, implementation, and tools built around the full digital customer journey.": "Una combinación práctica de estrategia, implementación y herramientas para todo el recorrido digital del cliente.",
    "SEO & Visibility": "SEO y Visibilidad",
    "Website Creation": "Creación Web",
    "B2B Growth": "Crecimiento B2B",
    "Lead Generation": "Generación de Leads",
    "AI Marketing Ops": "Operaciones de Marketing con IA",
    "Content Systems": "Sistemas de Contenido",
    "Marketing Automation": "Automatización de Marketing",
    "B2B Marketing / SEO / WordPress": "Marketing B2B / SEO / WordPress",
    "Ropa Laboral Guerrero Digital Growth": "Crecimiento Digital de Ropa Laboral Guerrero",
    "SEO Strategy": "Estrategia SEO",
    "SEO Roadmap: 146 Keywords": "Hoja de Ruta SEO: 146 Palabras Clave",
    "Built a structured keyword strategy targeting Toledo, Castilla-La Mancha, and Madrid, organized by search intent and funnel stage.": "Desarrollé una estrategia estructurada de palabras clave para Toledo, Castilla-La Mancha y Madrid, organizada por intención de búsqueda y etapa del embudo.",
    "Commercial keywords": "Palabras clave comerciales",
    "Local SEO": "SEO local",
    "Content planning": "Planificación de contenido",
    "Intent mapping": "Mapeo de intención",
    "commercial": "comercial",
    "local SEO": "SEO local",
    "search intent": "intención de búsqueda",
    "content": "contenido",
    "Internal Tool / Marketing Operations": "Herramienta interna / Operaciones de marketing",
    "Built an internal marketing management app concept for SEO tracking, content planning, competitor analysis, and AI-assisted workflows.": "Desarrollé el concepto de una aplicación interna para seguimiento SEO, planificación de contenido, análisis de competencia y flujos asistidos por IA.",
    "React / Next.js concept": "Concepto React / Next.js",
    "SEO tracking": "Seguimiento SEO",
    "Content calendar": "Calendario de contenido",
    "AI workflow": "Flujo con IA",
    "Content Marketing / B2B Trust": "Marketing de contenidos / Confianza B2B",
    "PPE Regulatory Blog Series": "Serie de artículos sobre normativa EPI",
    "Created regulatory content around Spanish and EU PPE rules to support SEO visibility and build trust with B2B buyers.": "Creé contenido sobre normativa española y europea de EPI para reforzar la visibilidad SEO y generar confianza entre compradores B2B.",
    "SEO articles": "Artículos SEO",
    "Compliance content": "Contenido normativo",
    "B2B trust": "Confianza B2B",
    "Technical copywriting": "Redacción técnica",
    "National result": "Resultado nacional",
    "branches": "sucursales",
    "Business / Digital Transformation": "Negocio / Transformación digital",
    "Banking Digitalization Award": "Premio de Digitalización Bancaria",
    "Led digitalization initiatives during my banking career, contributing to a 1st place national result across 3,407 branches.": "Lideré iniciativas de digitalización durante mi carrera bancaria, contribuyendo a un primer puesto nacional entre 3.407 sucursales.",
    "Client portfolio": "Cartera de clientes",
    "Process improvement": "Mejora de procesos",
    "Digital adoption": "Adopción digital",
    "Performance focus": "Orientación a resultados",
    "My process": "Mi proceso",
    "Clear thinking.": "Ideas claras.",
    "Focused execution.": "Ejecución enfocada.",
    "A practical five-step approach that moves from business context to measurable, ongoing improvement.": "Un proceso práctico de cinco pasos que convierte el contexto de negocio en mejora continua y medible.",
    "Discover": "Descubrir",
    "Understand the business, audience, market, and commercial goals.": "Entender el negocio, la audiencia, el mercado y los objetivos comerciales.",
    "Audit": "Auditar",
    "Find the technical, content, visibility, and conversion gaps.": "Detectar brechas técnicas, de contenido, visibilidad y conversión.",
    "Strategy": "Estrategia",
    "Build a prioritized roadmap around impact and available resources.": "Crear una hoja de ruta priorizada según impacto y recursos disponibles.",
    "Implementation": "Implementación",
    "Turn the plan into pages, content, campaigns, and workflows.": "Convertir el plan en páginas, contenido, campañas y flujos de trabajo.",
    "Measure performance, learn from the data, and improve continuously.": "Medir el rendimiento, aprender de los datos y mejorar continuamente.",
    "Capabilities": "Competencias",
    "Strategy plus the skills": "Estrategia y habilidades",
    "to": "para",
    "ship the work.": "hacerla realidad.",
    "Content Marketing": "Marketing de Contenidos",
    "Social Media": "Redes Sociales",
    "B2B Lead Generation": "Generación de Leads B2B",
    "AI Marketing Workflows": "Flujos de Marketing con IA",
    "A career shaped by": "Una carrera marcada por",
    "people and performance.": "las personas y los resultados.",
    "May 2026 - Present": "Mayo 2026 - Actualidad",
    "ROLE_01": "ROL_01",
    "ROLE_02": "ROL_02",
    "Local Visibility": "Visibilidad Local",
    "Built a 146-keyword SEO roadmap around commercial and local search intent.": "Creé una hoja de ruta SEO de 146 palabras clave basada en intención comercial y búsquedas locales.",
    "Improved website, content, social, and Google Business Profile workflows.": "Mejoré los flujos de trabajo de web, contenido, redes sociales y Perfil de Empresa de Google.",
    "Connected digital visibility with practical B2B lead generation.": "Conecté la visibilidad digital con la generación práctica de leads B2B.",
    "Responsible for SEO, WordPress website optimization, social media, content creation, Google Business Profile, digital strategy, and online visibility.": "Responsable de SEO, optimización web en WordPress, redes sociales, creación de contenido, Perfil de Empresa de Google, estrategia digital y visibilidad online.",
    "September 2018 - September 2023": "Septiembre 2018 - Septiembre 2023",
    "Biougra, Morocco": "Biougra, Marruecos",
    "Account Manager": "Gestor de Clientes",
    "500+ Clients": "Más de 500 clientes",
    "Banking": "Banca",
    "Managed a portfolio of more than 500 individual and business clients.": "Gestioné una cartera de más de 500 clientes particulares y empresas.",
    "Structured financing applications and long-term commercial relationships.": "Estructuré solicitudes de financiación y relaciones comerciales a largo plazo.",
    "Contributed to a first-place national digitalization result across 3,407 branches.": "Contribuí a un primer puesto nacional en digitalización entre 3.407 sucursales.",
    "Managed 500+ individual and business clients, structured loan applications, supported digitalization initiatives, and contributed to a 1st place national digitalization result.": "Gestioné más de 500 clientes particulares y empresas, estructuré solicitudes de crédito, apoyé iniciativas de digitalización y contribuí a un primer puesto nacional en digitalización.",
    "Certifications": "Certificaciones",
    "Expires: 12.06.2027": "Caduca: 12.06.2027",
    "Always learning.": "Siempre aprendiendo.",
    "Always applying.": "Siempre aplicando.",
    "Fundamentals of Digital Marketing": "Fundamentos de Marketing Digital",
    "Digital Marketing Certified": "Certificación en Marketing Digital",
    "Digital Marketing": "Marketing Digital",
    "Google Business Profile": "Perfil de Empresa de Google",
    "Services": "Servicios",
    "Digital solutions designed": "Soluciones digitales diseñadas",
    "to": "para",
    "move businesses forward.": "impulsar negocios.",
    "Focused services that combine strategy and implementation to build visibility, credibility, and sustainable growth.": "Servicios que combinan estrategia e implementación para construir visibilidad, credibilidad y crecimiento sostenible.",
    "SEO and Search Visibility": "SEO y Posicionamiento",
    "Technical, local, and content-led SEO to attract qualified searches and turn visibility into business opportunities.": "SEO técnico, local y de contenidos para atraer búsquedas cualificadas y convertir la visibilidad en oportunidades de negocio.",
    "Website Creation": "Creación de Páginas Web",
    "Fast, responsive WordPress websites built around clear messaging, strong user experience, and conversion.": "Páginas WordPress rápidas y responsive, creadas con mensajes claros, buena experiencia de usuario y foco en conversión.",
    "Practical digital strategies connecting content, social media, local presence, and lead generation.": "Estrategias digitales prácticas que conectan contenido, redes sociales, presencia local y generación de leads.",
    "Plans": "Planes",
    "A clear starting point": "Un punto de partida claro",
    "for": "para",
    "every growth stage.": "cada etapa de crecimiento.",
    "Flexible packages that can be adapted to your goals, market, and current digital maturity.": "Paquetes flexibles adaptables a tus objetivos, mercado y nivel actual de madurez digital.",
    "For a solid start": "Para empezar con bases sólidas",
    "Starter Pack": "Pack Inicio",
    "Build the essential digital foundations for a professional and credible online presence.": "Construye las bases digitales esenciales para una presencia online profesional y creíble.",
    "Digital presence audit": "Auditoría de presencia digital",
    "Essential website setup": "Configuración web esencial",
    "Basic on-page SEO": "SEO on-page básico",
    "Request a quote": "Solicitar presupuesto",
    "Most popular": "Más popular",
    "For sustainable growth": "Para un crecimiento sostenible",
    "Growth Pack": "Pack Crecimiento",
    "A complete roadmap to increase qualified visibility and create consistent demand.": "Una hoja de ruta completa para aumentar la visibilidad cualificada y generar demanda de forma constante.",
    "SEO and competitor audit": "Auditoría SEO y de competencia",
    "Keyword and content strategy": "Estrategia de palabras clave y contenido",
    "Monthly growth reporting": "Informe mensual de crecimiento",
    "For a complete presence": "Para una presencia completa",
    "Total Presence Pack": "Pack Presencia Total",
    "Coordinate your website, search, content, and digital channels as one growth system.": "Coordina tu web, buscadores, contenido y canales digitales como un único sistema de crecimiento.",
    "Website and SEO strategy": "Estrategia web y SEO",
    "Content and social planning": "Planificación de contenido y redes",
    "Local visibility management": "Gestión de visibilidad local",
    "Lead generation workflows": "Flujos de generación de leads",
    "Start a conversation": "Empecemos a hablar",
    "Have a growth challenge?": "¿Tienes un reto de crecimiento?",
    "Let's solve it.": "Vamos a resolverlo.",
    "I'm open to opportunities in digital marketing, SEO, WordPress, content strategy, and B2B growth.": "Estoy abierto a oportunidades en marketing digital, SEO, WordPress, estrategia de contenidos y crecimiento B2B.",
    "Email Me": "Enviar email",
    "Digital Marketing / Toledo, Spain": "Marketing Digital / Toledo, España",
    "Back to top": "Volver arriba",
    "Open menu": "Abrir menú",
    "Close menu": "Cerrar menú",
    "Primary navigation": "Navegación principal",
    "Mobile navigation": "Navegación móvil",
    "Language selector": "Selector de idioma",
    "Career highlights": "Logros profesionales",
    "Languages spoken": "Idiomas hablados"
};

const translatedTextNodes = [];
const translatedAttributes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
        const parentTag = node.parentElement?.tagName;
        return parentTag === "SCRIPT" || parentTag === "STYLE" || !node.nodeValue.trim()
            ? NodeFilter.FILTER_REJECT
            : NodeFilter.FILTER_ACCEPT;
    }
});

while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    translatedTextNodes.push({ node, original: node.nodeValue });
}

document.querySelectorAll("[aria-label], [alt], [title]").forEach((element) => {
    ["aria-label", "alt", "title"].forEach((attribute) => {
        if (element.hasAttribute(attribute)) {
            translatedAttributes.push({ element, attribute, original: element.getAttribute(attribute) });
        }
    });
});

function translateValue(value, language) {
    if (language === "en") return value;
    return spanishTranslations[value] || value;
}

function applyLanguage(language) {
    const selectedLanguage = language === "en" ? "en" : "es";
    document.body.classList.add("language-changing");

    translatedTextNodes.forEach(({ node, original }) => {
        const trimmed = original.trim();
        if (!trimmed) return;
        const leadingSpace = original.match(/^\s*/)?.[0] || "";
        const trailingSpace = original.match(/\s*$/)?.[0] || "";
        node.nodeValue = `${leadingSpace}${translateValue(trimmed, selectedLanguage)}${trailingSpace}`;
    });

    translatedAttributes.forEach(({ element, attribute, original }) => {
        element.setAttribute(attribute, translateValue(original, selectedLanguage));
    });

    document.documentElement.lang = selectedLanguage;
    document.title = selectedLanguage === "es"
        ? "Mohamed Ait Oumghar | Especialista en Marketing Digital"
        : "Mohamed Ait Oumghar | Digital Marketing Specialist";

    const description = document.querySelector('meta[name="description"]');
    description.content = selectedLanguage === "es"
        ? "Mohamed Ait Oumghar es especialista en marketing digital en Toledo, España, y ayuda a empresas B2B a crecer con SEO, WordPress, contenido y generación de leads."
        : "Mohamed Ait Oumghar is a Digital Marketing Specialist in Toledo, Spain, helping B2B companies grow through SEO, WordPress, content, and lead generation.";

    languageButtons.forEach((button) => {
        const isActive = button.dataset.lang === selectedLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    try {
        localStorage.setItem("portfolio-language", selectedLanguage);
    } catch (error) {
        // The language still works when browser storage is unavailable.
    }

    document.documentElement.classList.remove("i18n-loading");
    window.setTimeout(() => document.body.classList.remove("language-changing"), 120);
}

let initialLanguage = "es";
try {
    initialLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "es";
} catch (error) {
    initialLanguage = "es";
}

languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

applyLanguage(initialLanguage);

function updatePageState() {
    header.classList.toggle("scrolled", window.scrollY > 24);

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressBar.style.transform = `scaleX(${progress})`;
}

function closeMenu() {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", translateValue("Open menu", document.documentElement.lang));
    document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", translateValue(isOpen ? "Close menu" : "Open menu", document.documentElement.lang));
    document.body.classList.toggle("menu-open", isOpen);
});

mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
});

const revealElements = document.querySelectorAll(".reveal");

if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("visible"));
} else {
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1, rootMargin: "0px 0px -35px" }
    );

    revealElements.forEach((element, index) => {
        element.style.transitionDelay = `${Math.min(index % 4, 3) * 55}ms`;
        revealObserver.observe(element);
    });
}

function animateCounter(element) {
    const target = Number(element.dataset.target);
    const duration = reduceMotion ? 0 : 1200;
    const startTime = performance.now();

    function updateCount(currentTime) {
        const progress = duration === 0 ? 1 : Math.min((currentTime - startTime) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        element.textContent = Math.floor(target * easedProgress);

        if (progress < 1) {
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }

    requestAnimationFrame(updateCount);
}

const counters = document.querySelectorAll(".counter");

if ("IntersectionObserver" in window) {
    const counterObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.6 }
    );
    counters.forEach((counter) => counterObserver.observe(counter));
} else {
    counters.forEach((counter) => {
        counter.textContent = counter.dataset.target;
    });
}

const sections = document.querySelectorAll("section[id]");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    navLinks.forEach((link) => {
                        link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
                    });
                }
            });
        },
        { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll(".optional-image").forEach((image) => {
    const fallbackParent = image.closest(image.dataset.fallbackParent);

    const showImage = () => {
        if (image.naturalWidth > 0 && fallbackParent) {
            fallbackParent.classList.add("has-image");
        }
    };

    const hideImage = () => {
        if (fallbackParent) fallbackParent.classList.remove("has-image");
        image.hidden = true;
    };

    if (image.complete) {
        image.naturalWidth > 0 ? showImage() : hideImage();
    } else {
        image.addEventListener("load", showImage, { once: true });
        image.addEventListener("error", hideImage, { once: true });
    }
});

if (window.matchMedia("(pointer: fine)").matches && !reduceMotion) {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;

    window.addEventListener("pointermove", (event) => {
        targetX = event.clientX;
        targetY = event.clientY;
        cursorGlow.classList.add("active");
    }, { passive: true });

    document.documentElement.addEventListener("mouseleave", () => cursorGlow.classList.remove("active"));

    function renderGlow() {
        currentX += (targetX - currentX) * 0.12;
        currentY += (targetY - currentY) * 0.12;
        cursorGlow.style.left = `${currentX}px`;
        cursorGlow.style.top = `${currentY}px`;
        requestAnimationFrame(renderGlow);
    }

    requestAnimationFrame(renderGlow);
} else {
    cursorGlow.hidden = true;
}

let scrollTicking = false;
window.addEventListener("scroll", () => {
    if (!scrollTicking) {
        requestAnimationFrame(() => {
            updatePageState();
            scrollTicking = false;
        });
        scrollTicking = true;
    }
}, { passive: true });

window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMenu();
    updatePageState();
});

document.querySelector("#year").textContent = new Date().getFullYear();
updatePageState();
