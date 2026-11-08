// 通用基础组件：自动添加 Apple 风格的卡片阴影与滚动出现类
class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    // 返回通用的卡片式 CSS 和滚动动画 CSS
    getBaseStyle() {
        return `
            <style>
                .apple-card {
                    background: rgba(255, 255, 255, 0.6);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255,255,255,0.4);
                    border-radius: 20px;
                    padding: 30px;
                    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04);
                    margin-bottom: 25px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .apple-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
                }
                h3 { color: #1d1d1f; margin-top: 0; font-size: 20px;}
                p, li { color: #515154; line-height: 1.6; font-size: 15px;}
                ul { padding-left: 20px; margin-top: 10px;}
                li { margin-bottom: 8px;}
            </style>
        `;
    }
}

// 1. 悬浮导航栏组件 (类似 Apple 岛屿 / 底部 Docker)
export class FloatingNav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .nav-container {
                    position: fixed;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    background: rgba(255, 255, 255, 0.7);
                    backdrop-filter: blur(15px);
                    -webkit-backdrop-filter: blur(15px);
                    padding: 10px 20px;
                    border-radius: 30px;
                    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
                    display: flex;
                    gap: 15px;
                    z-index: 1000;
                    border: 1px solid rgba(255,255,255,0.5);
                }
                a {
                    text-decoration: none;
                    color: #1d1d1f;
                    font-size: 14px;
                    font-weight: 600;
                    padding: 8px 16px;
                    border-radius: 20px;
                    transition: background 0.3s, color 0.3s;
                }
                a:hover, a.active {
                    background: #1d1d1f;
                    color: #fff;
                }
            </style>
            <div class="nav-container">
                <a href="#hero">基本</a>
                <a href="#skills">技能</a>
                <a href="#experience">项目</a>
                <a href="#certificates">奖项</a>
            </div>
        `;
    }
}

// 2. 头部信息组件 (超大字体 Apple 风格)
export class HeroSection extends BaseComponent {
    set data(data) {
        this.shadowRoot.innerHTML = `
            <style>
                .hero {
                    text-align: center;
                    padding: 80px 0 40px 0;
                }
                .name {
                    font-size: 64px;
                    font-weight: 800;
                    background: linear-gradient(90deg, #1d1d1f, #86868b);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    margin-bottom: 10px;
                }
                .intent { font-size: 24px; color: #1d1d1f; font-weight: 600; margin-bottom: 30px;}
                .info-grid {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    color: #515154;
                    font-size: 16px;
                }
                .info-item span { font-weight: bold; color: #1d1d1f;}
            </style>
            <div class="hero reveal-init">
                <div class="name">${data.name}</div>
                <div class="intent">${data.intentions}</div>
                <div class="info-grid">
                    ${data.basicInfo.map(info => `<div class="info-item"><span>${info.label}：</span>${info.value}</div>`).join('')}
                </div>
            </div>
        `;
    }
}

// 3. 教育背景组件
export class EducationSection extends BaseComponent {
    set data(data) {
        this.shadowRoot.innerHTML = `
            ${this.getBaseStyle()}
            <style>
                .edu-content { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; }
                .edu-content strong { font-size: 18px; color: #1d1d1f;}
                .tag { background: #e8e8ed; padding: 5px 12px; border-radius: 12px; font-size: 13px; font-weight: bold;}
            </style>
            <div class="apple-card reveal-init">
                <div class="edu-content">
                    <div><strong>${data.school}</strong> <span style="margin-left: 10px;">${data.major}</span></div>
                    <div><span class="tag">${data.gpa}</span> <span class="tag">${data.rank}</span></div>
                </div>
            </div>
        `;
    }
}

// 4. 技能组件
export class SkillsSection extends BaseComponent {
    set data(data) {
        let html = `${this.getBaseStyle()}`;
        data.forEach(skill => {
            html += `
                <div class="apple-card reveal-init">
                    <h3>${skill.category}</h3>
                    <p>${skill.desc}</p>
                </div>
            `;
        });
        this.shadowRoot.innerHTML = html;
    }
}

// 5. 工作经历组件 (复杂的卡片与标签设计)
export class ExperienceSection extends BaseComponent {
    set data(data) {
        let html = `${this.getBaseStyle()}
            <style>
                .company-header { border-bottom: 1px solid #d2d2d7; padding-bottom: 15px; margin-bottom: 20px; }
                .company-name { font-size: 22px; font-weight: bold; color: #1d1d1f; }
                .meta { color: #86868b; font-size: 14px; display: flex; justify-content: space-between; margin-top: 5px;}
                .project { margin-bottom: 30px; }
                .proj-name { font-size: 18px; font-weight: 600; color: #2997ff; margin-bottom: 10px;}
                .tech-stack { font-size: 13px; font-family: monospace; background: #f5f5f7; padding: 8px; border-radius: 8px; margin: 10px 0;}
            </style>
        `;
        data.forEach(job => {
            html += `<div class="apple-card reveal-init">
                        <div class="company-header">
                            <div class="company-name">${job.company}</div>
                            <div class="meta"><span>${job.role}</span><span>${job.date}</span></div>
                        </div>`;
            job.projects.forEach(proj => {
                html += `
                    <div class="project">
                        <div class="proj-name">${proj.name}</div>
                        <p><strong>核心职责：</strong>${proj.responsibilities}</p>
                        ${proj.tech ? `<div class="tech-stack">${proj.tech}</div>` : ''}
                        <ul>
                            ${proj.details.map(d => `<li>${d}</li>`).join('')}
                        </ul>
                    </div>
                `;
            });
            html += `</div>`;
        });
        this.shadowRoot.innerHTML = html;
    }
}

// 6. 证书奖项组件 (网格布局)
export class CertSection extends BaseComponent {
    set data(data) {
        let html = `${this.getBaseStyle()}
            <style>
                .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;}
            </style>
            <div class="grid">
        `;
        data.forEach(cert => {
            html += `
                <div class="apple-card reveal-init">
                    <h3>${cert.title}</h3>
                    <ul>${cert.items.map(item => `<li>${item}</li>`).join('')}</ul>
                </div>
            `;
        });
        html += `</div>`;
        this.shadowRoot.innerHTML = html;
    }
}

// 7. 自我评价组件
export class EvalSection extends BaseComponent {
    set data(data) {
        let html = `${this.getBaseStyle()}<div class="apple-card reveal-init">`;
        data.forEach(p => {
            html += `<p style="text-indent: 2em; margin-bottom: 10px;">${p}</p>`;
        });
        html += `</div>`;
        this.shadowRoot.innerHTML = html;
    }
}

// 注册所有的 Web Components
customElements.define('floating-nav', FloatingNav);
customElements.define('hero-section', HeroSection);
customElements.define('education-section', EducationSection);
customElements.define('skills-section', SkillsSection);
customElements.define('experience-section', ExperienceSection);
customElements.define('cert-section', CertSection);
customElements.define('eval-section', EvalSection);