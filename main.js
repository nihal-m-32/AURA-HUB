// Data
const menuItems = [
    { id: 'tools', title: 'AI Tools', icon: 'zap', color: 'cyan', desc: 'Powerful AI utilities' },
    { id: 'prompts', title: 'Prompts', icon: 'book-open', color: 'purple', desc: 'Premium AI library' },
    { id: 'projects', title: 'Projects', icon: 'layout', color: 'orange', desc: 'My mobile-built work' },
    { id: 'downloads', title: 'Downloads', icon: 'download', color: 'green', desc: 'Free resources' },
    { id: 'about', title: 'About Me', icon: 'user', color: 'blue', desc: 'The story of Nihal' },
    { id: 'contact', title: 'Contact', icon: 'mail', color: 'yellow', desc: 'Get in touch' },
];

const tools = [
    { id: 1, title: "AI Prompt Generator", description: "A tool to create high-quality prompts for various AI models.", category: "AI Tools", icon: "zap" },
    { id: 2, title: "Web App Builder", description: "Build simple web apps directly from your mobile phone.", category: "Web Apps", icon: "layout" },
    { id: 3, title: "Code Optimizer", description: "Clean and optimize your code for better performance.", category: "Developer Tools", icon: "code" }
];

const projects = [
    { id: 1, title: "Aura AI", description: "A personal AI assistant built for mobile developers.", image: "https://picsum.photos/seed/aura/600/400", tags: ["React", "AI", "Mobile"] },
    { id: 2, title: "Promptly", description: "A community-driven prompt sharing platform.", image: "https://picsum.photos/seed/promptly/600/400", tags: ["Next.js", "Community"] },
    { id: 3, title: "MobileDev Kit", description: "Essential resources for developing on the go.", image: "https://picsum.photos/seed/mobile/600/400", tags: ["Resources", "Mobile"] }
];

const prompts = [
    { id: 1, title: "Creative Storyteller", content: "Act as a creative storyteller. Write a story about a world where AI and humans live in perfect harmony...", category: "Creative" },
    { id: 2, title: "Code Debugger", content: "Analyze the following code snippet and identify any potential bugs or performance bottlenecks: [INSERT CODE]", category: "Technical" },
    { id: 3, title: "Marketing Copywriter", content: "Write a compelling marketing copy for a new AI-powered productivity tool targeting young developers.", category: "Marketing" }
];

const downloads = [
    { id: 1, title: "Mobile Dev Guide (PDF)", description: "A comprehensive guide to building apps on your phone. Covers setup, tools, and best practices.", type: "PDF", size: "2.4 MB", version: "v1.2" },
    { id: 2, title: "Aura UI Kit", description: "A set of modern UI components for your next project. Includes buttons, cards, and navbars.", type: "ZIP", size: "15.8 MB", version: "v2.0" },
    { id: 3, title: "Prompt Engineering Cheat Sheet", description: "Quick tips for writing better AI prompts. Optimized for GPT-4 and Claude 3.", type: "PDF", size: "1.1 MB", version: "v1.0" }
];

// State
let currentPage = 'hub';

// DOM Elements
const hubView = document.getElementById('hub-view');
const pageView = document.getElementById('page-view');
const menuGrid = document.getElementById('menu-grid');
const miniNavLinks = document.getElementById('mini-nav-links');
const pageContent = document.getElementById('page-content');
const yearSpan = document.getElementById('year');

// Initialization
function init() {
    yearSpan.textContent = new Date().getFullYear();
    renderHubMenu();
    renderMiniNav();
    lucide.createIcons();
}

// Navigation
function navigateTo(page) {
    currentPage = page;
    
    if (page === 'hub') {
        hubView.classList.add('active');
        pageView.classList.remove('active');
    } else {
        hubView.classList.remove('active');
        pageView.classList.add('active');
        renderPage(page);
        updateActiveNav(page);
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    lucide.createIcons();
}

function updateActiveNav(page) {
    const buttons = miniNavLinks.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        if (btn.getAttribute('onclick').includes(`'${page}'`)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Rendering
function renderHubMenu() {
    menuGrid.innerHTML = menuItems.map(item => `
        <div class="glass-card" onclick="navigateTo('${item.id}')">
            <div class="card-header">
                <div class="card-icon-wrapper">
                    <i data-lucide="${item.icon}"></i>
                </div>
                <i data-lucide="chevron-right" class="chevron"></i>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.desc}</p>
        </div>
    `).join('');
}

function renderMiniNav() {
    miniNavLinks.innerHTML = menuItems.map(item => `
        <button class="nav-btn" onclick="navigateTo('${item.id}')">${item.title}</button>
    `).join('');
}

function renderPage(pageId) {
    let html = '';
    
    switch(pageId) {
        case 'tools':
            html = `
                <button class="back-btn" onclick="navigateTo('hub')"><i data-lucide="chevron-left"></i> Back to Hub</button>
                <h1 class="page-title">AI <span class="glow-text">TOOLS</span></h1>
                <p class="page-subtitle">Powerful AI utilities designed for mobile efficiency.</p>
                <div class="content-grid">
                    ${tools.map(tool => `
                        <div class="tool-card">
                            <div class="card-icon-wrapper" style="color: var(--brand-primary)"><i data-lucide="${tool.icon}"></i></div>
                            <h3 class="card-title">${tool.title}</h3>
                            <p class="card-desc" style="margin-bottom: 1.5rem">${tool.description}</p>
                            <span class="tag">${tool.category}</span>
                        </div>
                    `).join('')}
                </div>
            `;
            break;
            
        case 'prompts':
            html = `
                <button class="back-btn" onclick="navigateTo('hub')"><i data-lucide="chevron-left"></i> Back to Hub</button>
                <h1 class="page-title">PREMIUM <span class="glow-text">PROMPTS</span></h1>
                <p class="page-subtitle">A curated library of high-performance AI prompts.</p>
                <div class="content-grid">
                    ${prompts.map(prompt => `
                        <div class="prompt-card">
                            <span class="tag" style="color: var(--brand-primary)">${prompt.category}</span>
                            <h3 class="card-title" style="margin-top: 0.5rem">${prompt.title}</h3>
                            <div class="prompt-content">"${prompt.content}"</div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        case 'projects':
            html = `
                <button class="back-btn" onclick="navigateTo('hub')"><i data-lucide="chevron-left"></i> Back to Hub</button>
                <h1 class="page-title">FEATURED <span class="glow-text">PROJECTS</span></h1>
                <p class="page-subtitle">A showcase of my best work, all developed on mobile.</p>
                <div class="content-grid">
                    ${projects.map(project => `
                        <div class="project-card">
                            <div class="project-img-wrapper">
                                <img src="${project.image}" class="project-img" alt="${project.title}">
                            </div>
                            <div class="project-info">
                                <div class="tag-list">
                                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                                <h3 class="card-title">${project.title}</h3>
                                <p class="card-desc">${project.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        case 'downloads':
            html = `
                <button class="back-btn" onclick="navigateTo('hub')"><i data-lucide="chevron-left"></i> Back to Hub</button>
                <h1 class="page-title">RESOURCE <span class="glow-text">DOWNLOADS</span></h1>
                <p class="page-subtitle">Access all my tools, guides, and assets in one place.</p>
                <div class="content-grid">
                    ${downloads.map(d => `
                        <div class="tool-card">
                            <div class="card-icon-wrapper" style="color: var(--brand-primary)"><i data-lucide="download"></i></div>
                            <h3 class="card-title">${d.title}</h3>
                            <p class="card-desc" style="margin-bottom: 1.5rem">${d.description}</p>
                            <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--white-40)">
                                <span>${d.type} • ${d.size}</span>
                                <span>${d.version}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            break;

        case 'about':
            html = `
                <button class="back-btn" onclick="navigateTo('hub')"><i data-lucide="chevron-left"></i> Back to Hub</button>
                <h1 class="page-title">ABOUT <span class="glow-text">NIHAL</span></h1>
                <div class="glass-card" style="padding: 3rem; flex-direction: row; gap: 3rem; align-items: center; cursor: default">
                    <img src="https://picsum.photos/seed/nihal/400/400" style="width: 12rem; height: 12rem; border-radius: 50%; border: 4px solid var(--brand-primary)" alt="Nihal">
                    <div>
                        <h2 style="font-size: 2.5rem; font-weight: 900; margin-bottom: 1rem">The Story</h2>
                        <p style="color: var(--white-50); font-size: 1.125rem; line-height: 1.8">
                            I'm a young developer passionate about AI and mobile-first development. I believe that you don't need a high-end PC to build amazing things. Everything you see here was conceptualized, designed, and coded using only a smartphone.
                        </p>
                    </div>
                </div>
            `;
            break;

        case 'contact':
            html = `
                <button class="back-btn" onclick="navigateTo('hub')"><i data-lucide="chevron-left"></i> Back to Hub</button>
                <h1 class="page-title">GET IN <span class="glow-text">TOUCH</span></h1>
                <div class="content-grid" style="grid-template-columns: 1fr 1fr">
                    <div>
                        <p class="page-subtitle">Have a question or want to collaborate? Drop me a message.</p>
                        <div style="display: flex; flex-direction: column; gap: 1.5rem">
                            <div style="display: flex; align-items: center; gap: 1rem; color: var(--white-50)">
                                <div class="logo-icon" style="background: var(--white-05); color: var(--brand-primary)"><i data-lucide="mail"></i></div>
                                nihal@aura.hub
                            </div>
                            <div style="display: flex; align-items: center; gap: 1rem; color: var(--white-50)">
                                <div class="logo-icon" style="background: var(--white-05); color: var(--brand-primary)"><i data-lucide="map-pin"></i></div>
                                Digital Nomad / Remote
                            </div>
                        </div>
                    </div>
                    <div class="glass-card" style="cursor: default">
                        <form style="display: flex; flex-direction: column; gap: 1.5rem" onsubmit="event.preventDefault()">
                            <input type="text" placeholder="Name" style="background: var(--white-05); border: 1px solid var(--white-10); padding: 1rem; border-radius: 1rem; color: white; outline: none">
                            <input type="email" placeholder="Email" style="background: var(--white-05); border: 1px solid var(--white-10); padding: 1rem; border-radius: 1rem; color: white; outline: none">
                            <textarea placeholder="Message" rows="5" style="background: var(--white-05); border: 1px solid var(--white-10); padding: 1rem; border-radius: 1rem; color: white; outline: none"></textarea>
                            <button style="background: var(--brand-primary); color: black; font-weight: 900; padding: 1rem; border-radius: 1rem; border: none; cursor: pointer">SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            `;
            break;
    }
    
    pageContent.innerHTML = html;
}

// Start
init();
window.navigateTo = navigateTo;
