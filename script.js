const translations ={
    en: {
        NAV: {
            HOME: "Home",
            ABOUT: "About",
            SERVICES: "Services",
            HOW_IT_WORKS: "How does it work?",
            PRICES: "Prices",
            REVIEWS: "Reviews",
            CONTACT: "Contact us",
            LOGIN: "Login"
        },
        ABOUT: {
            TAGLINE: "Our Mission",
            TITLE: "Created for a fairer and more transparent coexistence.",
            DESCRIPTION: "SplitEasy was born to eliminate stress and arguments about money at home. Our goal is to offer a simple and powerful tool that promotes financial equity, regardless of income differences, so you can focus on what really matters: enjoying time with the people you love.",
            BENEFIT_1_TITLE: "Proportional Distribution",
            BENEFIT_1_TEXT: "Distribute expenses according to each person's income.",
            BENEFIT_2_TITLE: "Total Transparency",
            BENEFIT_2_TEXT: "All members see expenses and debts in real time.",
            BENEFIT_3_TITLE: "Less Stress, More Harmony",
            BENEFIT_3_TEXT: "We calculate who owes whom to avoid uncomfortable conversations."
        },
        HERO: {
            TITLE: "The easy and fair way to divide expenses at home.",
            DESCRIPTION: "Forget spreadsheets and arguments. SplitEasy calculates who owes what so your relationship is always transparent.",
            REGISTER_BUTTON: "Get started for free",
            HOW_IT_WORKS: "See how it works"
        },
        HOW_IT_WORKS: {
            TITLE: "How does SplitEasy work?",
            LEAD_TEXT: "We have a path for every type of user. Choose your role and discover how easy it is to get started.",
            TABS: {
                REP: "I am a Household Representative",
                MEMBER: "I am a Household Member"
                },
            REP: {
                STEP_1_TITLE: "Sign Up",
                STEP_1_TEXT: "Create your account in minutes and access it from any device.",
                STEP_2_TITLE: "Create your household",
                STEP_2_TEXT: "Add members and define your family or shared group.",
                STEP_3_TITLE: "Assign contributions",
                STEP_3_TEXT: "Define how much each person contributes based on their monthly income.",
                STEP_4_TITLE: "Take control of your finances",
                STEP_4_TEXT: "View expenses, balances, and alerts easily."
                },
            MEMBER: {
            STEP_1_TITLE: "Register",
            STEP_1_TEXT: "Create your personal account to join a household.",
            STEP_2_TITLE: "Join with a Code",
            STEP_2_TEXT: "Use the invitation code sent to you by the representative.",
            STEP_3_TITLE: "Record your Contributions",
            STEP_3_TEXT: "Add the money you earn to the household fund.",
            STEP_4_TITLE: "Monitor Expenses",
            STEP_4_TEXT: "Review all transactions and the balance transparently."
            }
        },
        MEMBER: {
            HEADER: "If you are a member of the household",
            SIGNUP_TITLE: "Sign up",
            SIGNUP_TEXT: "Create your account with your email or favorite social network.",
            JOIN_TITLE: "Join a household",
            JOIN_TEXT: "Enter the household ID provided by your representative.",
            INCOME_TITLE: "Declare your income",
            INCOME_TEXT: "Declare your monthly income to automatically calculate your contribution.",
            MONITOR_TITLE: "Monitor your contributions",
            MONITOR_TEXT: "Check your contributions and stay on top of your financial responsibilities."
        },
        PRICES: {
            TITLE: "A Plan for Every Need",
            LEAD_TEXT: "Start for free or choose Premium to unlock the full potential of SplitEasy.",
            MONTHLY: "Monthly",
            YEARLY: "Annual",
            YEARLY_SAVE: "Save 2 months",
            RECOMMENDED_BADGE: "Recommended",
            FREE: {
            TITLE: "Free",
            PRICE_MONTHLY: "$0",
            PRICE_YEARLY: "$0",
            PERIOD: "/ month",
            FEATURES: [
                "1 household",
                "Up to 3 members",
                "Basic expense tracking",
                "Community support"
            ],
            CTA: "Start for free"
            },
            PREMIUM: {
            TITLE: "Premium",
            PRICE_MONTHLY: "S/ 9.90",
            PRICE_YEARLY: "S/ 99",
            PERIOD: "/ month",
            PERIOD_YEARLY: "/ year",
            FEATURES: [
                "Unlimited Households",
                "Unlimited Members",
                "Graphical Expense Display",
                "Smart Notifications and Reminders",
                "Priority Email Support"
            ],
            CTA: "Choose Premium"
            }
        },
        REVIEWS: {
            TITLE: "What our users say",
            LEAD_TEXT: "The trust of our community is our greatest achievement. This is how SplitEasy is improving their daily lives.",
            ITEMS: [
                {
                    NAME: "María López",
                    ROLE: "Graphic Designer",
                    TEXT: "SplitEasy has helped me a lot when splitting expenses with my roommates. Everything is clear and there are no more arguments!",
                    IMAGE_URL: "assets/images/random1.png",
                    RATING: 5
                },
                {
                    NAME: "Carlos Fernández",
                    ROLE: "Engineering Student",
                    TEXT: "The app makes it very easy to share expenses in my apartment. Highly recommended for anyone who lives with friends.",
                    IMAGE_URL: "assets/images/random2.png",
                    RATING: 5
                },
                {
                    NAME: "José Ramírez",
                    ROLE: "Family Guy",
                    TEXT: "Thanks to SplitEasy, I can see how much each member of my family contributes. It's fair, transparent, and very easy to use.",
                    IMAGE_URL: "assets/images/random3.png",
                    RATING: 4
                }
            ]
        },
        CTA: {
            TITLE: "Start Organizing Your Expenses Today",
            SUBTITLE: "Join thousands of people who have simplified their financial lives. It's free to get started and only takes a minute.",
            BUTTON: "Create My Free Account"
        },
        SERVICES: {
            TITLE: "Our Services",
            LEAD_TEXT: "Designed to give you full control of your shared finances with simple and powerful tools.",
            SERVICE1: {
                TITLE: "Proportional Calculus",
                DESCRIPTION: "Automatically divide expenses based on each household member's income, promoting equity."
            },
            SERVICE2: {
                TITLE: "Expense Tracking",
                DESCRIPTION: "Easily see how much you've contributed and how your household spends money."
            },
            SERVICE3: {
                TITLE: "Transparency and Collaboration",
                DESCRIPTION: "Promotes communication and fair agreements between household members."
            },
            SERVICE4: {
                TITLE: "Multi-device access",
                DESCRIPTION: "Manage your finances from your phone, tablet, or computer without losing functionality."
            }
        },
        FOOTER: {
            FOLLOW_US: "Follow us",
            TAGLINE: "Fair expenses, harmonious home!",
            LEGAL: {
                TITLE: "Legal information",
                LEGAL_NOTICE: "Legal notice",
                PRIVACY: "Privacy Policy",
                COOKIES: "Cookies policy",
                FAQ: "Frequently asked questions"
            },
            SUPPORT: {
                TITLE: "Support",
                CONTACT: "Contact support",
                HELP: "Help Center"
            },
            RIGHTS: "All rights reserved."
        },
        FORGOT: {
            TITLE: "Verify Your Account",
            DESCRIPTION: "Enter the email address associated with your account to confirm your identity. If the email is valid, we'll take you directly to the next step to reset your password.",
            EMAIL_LABEL: "Registered email address",
            BUTTON: "Verify & Continue",
            BACK_TO_LOGIN: "Back to Sign In"
        },
    },
    es: {
        NAV: {
            HOME: "Inicio",
            ABOUT: "Acerca de",
            SERVICES: "Servicios",
            HOW_IT_WORKS: "¿Cómo funciona?",
            PRICES: "Precios",
            REVIEWS: "Opiniones",
            CONTACT: "Contáctanos",
            LOGIN: "Iniciar sesión"
        },
        ABOUT: {
            TAGLINE: "Nuestra Misión",
            TITLE: "Creado para una convivencia más justa y transparente.",
            DESCRIPTION: "SplitEasy nació para eliminar el estrés y las discusiones sobre dinero en casa. Nuestra meta es ofrecer una herramienta simple y poderosa que promueva la equidad financiera, sin importar las diferencias de ingresos, para que puedas enfocarte en lo que de verdad importa: disfrutar con la gente que quieres.",
            BENEFIT_1_TITLE: "Reparto Proporcional",
            BENEFIT_1_TEXT: "Distribuye los gastos según el ingreso de cada persona.",
            BENEFIT_2_TITLE: "Transparencia Total",
            BENEFIT_2_TEXT: "Todos los miembros ven los gastos y deudas en tiempo real.",
            BENEFIT_3_TITLE: "Menos Estrés, Más Armonía",
            BENEFIT_3_TEXT: "Calculamos quién debe a quién para evitar conversaciones incómodas."
        },
        HERO: {
            TITLE: "La forma fácil y justa de dividir los gastos en casa.",
            DESCRIPTION: "Olvídate de las hojas de cálculo y las discusiones. SplitEasy calcula quién debe qué para que la convivencia sea siempre transparente.",
            REGISTER_BUTTON: "Empieza Gratis",
            HOW_IT_WORKS: "Ver cómo funciona"
        },
        HOW_IT_WORKS: {
            TITLE: "¿Cómo funciona SplitEasy?",
            LEAD_TEXT: "Tenemos un camino para cada tipo de usuario. Elige tu rol y descubre lo fácil que es empezar.",
            TABS: {
                REP: "Soy Representante del Hogar",
                MEMBER: "Soy Miembro del Hogar"
            },
            REP: {
                STEP_1_TITLE: "Regístrate",
                STEP_1_TEXT: "Crea tu cuenta en minutos y accede desde cualquier dispositivo.",
                STEP_2_TITLE: "Crea tu hogar",
                STEP_2_TEXT: "Agrega miembros y define tu grupo familiar o compartido.",
                STEP_3_TITLE: "Asigna contribuciones",
                STEP_3_TEXT: "Define cuánto aporta cada persona según sus ingresos mensuales.",
                STEP_4_TITLE: "Controla tus finanzas",
                STEP_4_TEXT: "Visualiza gastos, saldos y alertas de forma sencilla."
            },
            MEMBER: {
                STEP_1_TITLE: "Regístrate",
                STEP_1_TEXT: "Crea tu cuenta personal para unirte a un hogar.",
                STEP_2_TITLE: "Únete con un Código",
                STEP_2_TEXT: "Usa el código de invitación que te envíe el representante.",
                STEP_3_TITLE: "Registra tus Aportes",
                STEP_3_TEXT: "Añade el dinero que ingresas al fondo común del hogar.",
                STEP_4_TITLE: "Monitorea los Gastos",
                STEP_4_TEXT: "Revisa todos los movimientos y el balance de forma transparente."
            }
        },
        MEMBER: {
            HEADER: "Si eres miembro del hogar",
            SIGNUP_TITLE: "Regístrate",
            SIGNUP_TEXT: "Crea tu cuenta con tu correo electrónico o red social favorita.",
            JOIN_TITLE: "Únete a un hogar",
            JOIN_TEXT: "Ingresa el ID del hogar proporcionado por tu representante.",
            INCOME_TITLE: "Declara tus ingresos",
            INCOME_TEXT: "Declara tus ingresos mensuales para calcular automáticamente tu contribución.",
            MONITOR_TITLE: "Monitorea tus aportes",
            MONITOR_TEXT: "Consulta tus aportes y mantente al día con tus responsabilidades financieras."
        },
        PRICES: {
            TITLE: "Un Plan Para Cada Necesidad",
            LEAD_TEXT: "Empieza gratis o elige Premium para desbloquear todo el potencial de SplitEasy.",
            MONTHLY: "Mensual",
            YEARLY: "Anual",
            YEARLY_SAVE: "Ahorra 2 meses",
            RECOMMENDED_BADGE: "Recomendado",
            FREE: {
                TITLE: "Gratis",
                PRICE_MONTHLY: "S/ 0",
                PRICE_YEARLY: "S/ 0",
                PERIOD: "/ mes",
                FEATURES: [
                    "1 hogar",
                    "Hasta 3 miembros",
                    "Registro básico de gastos",
                    "Soporte por comunidad"
                ],
                CTA: "Comenzar Gratis"
            },
            PREMIUM: {
                TITLE: "Premium",
                PRICE_MONTHLY: "S/ 9.90",
                PRICE_YEARLY: "S/ 99",
                PERIOD: "/ mes",
                PERIOD_YEARLY: "/ año",
                FEATURES: [
                    "Hogares ilimitados",
                    "Miembros ilimitados",
                    "Visualización gráfica de gastos",
                    "Notificaciones inteligentes y recordatorios",
                    "Soporte prioritario por correo"
                ],
                CTA: "Elegir Premium"
            }
        },
        REVIEWS: {
            TITLE: "Lo que dicen nuestros usuarios",
            LEAD_TEXT: "La confianza de nuestra comunidad es nuestro mayor logro. Así es como SplitEasy está mejorando su día a día.",
            ITEMS: [
                {
                    NAME: "María López",
                    ROLE: "Diseñadora Gráfica",
                    TEXT: "SplitEasy me ha ayudado muchísimo para dividir gastos con mis compañeras de cuarto. ¡Todo es claro y ya no hay discusiones!",
                    IMAGE_URL: "assets/images/random1.png",
                    RATING: 5
                },
                {
                    NAME: "Carlos Fernández",
                    ROLE: "Estudiante de Ingeniería",
                    TEXT: "La app hace muy fácil compartir gastos en mi departamento. Altamente recomendada para cualquiera que viva con amigos.",
                    IMAGE_URL: "assets/images/random2.png",
                    RATING: 5
                },
                {
                    NAME: "José Ramírez",
                    ROLE: "Padre de Familia",
                    TEXT: "Gracias a SplitEasy puedo ver cuánto aporta cada miembro de mi familia. Es justo, transparente y muy fácil de usar.",
                    IMAGE_URL: "assets/images/random3.png",
                    RATING: 4
                }
            ]
        },
        SERVICES: {
            TITLE: "Nuestros Servicios",
            LEAD_TEXT: "Diseñado para darte el control total de tus finanzas compartidas con herramientas simples y potentes.",
            SERVICE1: {
                TITLE: "Cálculo Proporcional",
                DESCRIPTION: "Divide automáticamente los gastos según los ingresos de cada miembro del hogar, promoviendo la equidad."
            },
            SERVICE2: {
                TITLE: "Seguimiento de Gastos",
                DESCRIPTION: "Visualiza fácilmente cuánto has aportado y cómo se gasta el dinero en tu hogar."
            },
            SERVICE3: {
                TITLE: "Transparencia y Colaboración",
                DESCRIPTION: "Promueve la comunicación y acuerdos justos entre los miembros del hogar."
            },
            SERVICE4: {
                TITLE: "Acceso Multidispositivo",
                DESCRIPTION: "Administra tus finanzas desde tu celular, tablet o computadora sin perder funcionalidad."
            }
        },
        FOOTER: {
            FOLLOW_US: "Síguenos",
            TAGLINE: "¡Gastos justos, hogar en armonía!",
            LEGAL: {
                TITLE: "Información legal",
                LEGAL_NOTICE: "Aviso legal",
                PRIVACY: "Política de privacidad",
                COOKIES: "Política de cookies",
                FAQ: "Preguntas frecuentes"
            },
            SUPPORT: {
                TITLE: "Soporte",
                CONTACT: "Contacto de soporte",
                HELP: "Centro de ayuda"
            },
            RIGHTS: "Todos los derechos reservados."
        }
    }
}

let currentLang = localStorage.getItem('lang') || 'en';

//Language switcher
function getNestedValue(obj, path) {
    return path.split('.').reduce((cur, key) => (cur ? cur[key] : undefined), obj);
}

function updateContent() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = getNestedValue(translations[currentLang], key);
        if (translation) {
            if(element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });

    //Updtate current language being displayed
    document.getElementById('currentLang').textContent =
        currentLang.toUpperCase();
    
    // Update lang switcher options
    document.querySelectorAll('#langDropdown .menu-item').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });

    // Update HTML lang attribute
    document.documentElement.lang = currentLang;
}

function closeDropdown() {
    const langDropdown = document.getElementById('langDropdown');
    const langButton = document.getElementById('langButton');
    if(!langDropdown.hidden) {
        langDropdown.hidden = true;
        langButton.setAttribute('aria-expanded', 'false');
    }
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    updateContent();

    //Close dropdown after selection
    closeDropdown();
};

//End of language switcher

//Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementsById(sectionId.replace('#', ''));
    if(element) {
        const yOffset = element.offsetTop - document.querySelector('nav').offsetHeight;
        window.scrollTo({
            top: offsetTop, 
            behavior: 'smooth'
        });
    }
}

//Intialize lang switcher and smooth scroll
document.addEventListener('DOMContentLoaded', function() {

    const langButton = document.getElementById('langBtn');
    const langDropdown = document.getElementById('langDropdown');

    //Initial content update
    updateContent();

    //Toggle lang dropdown
    langButton.addEventListener('click', function(e) {
         e.stopPropagation();
         const willOpen = langDropdown.hidden;
        langDropdown.hidden = !willOpen;
        langButton.setAttribute('aria-expanded', String(willOpen));
    });

    //Select Language
    document.querySelectorAll('#langDropdown .menu-item').forEach(option => {
        option.addEventListener('click', function(e) {
            e.preventDefault();
            switchLanguage(this.dataset.lang);
        });
    });
    

    //Click outside to close
    document.addEventListener('click', closeDropdown);

    //Smooth scrolling for anchor links
    document.querySelectorAll('nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault
            scrollToSection(this.getAttribute('href'));
        })
    });
});

