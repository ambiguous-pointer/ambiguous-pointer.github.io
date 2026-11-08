import { resumeData } from './data.js';
import './components.js'; // 导入并注册所有组件

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. 数据绑定：将数据传递给对应的 Web Components
    document.querySelector('hero-section').data = resumeData.header;
    document.querySelector('education-section').data = resumeData.education;
    document.querySelector('skills-section').data = resumeData.skills;
    document.querySelector('experience-section').data = resumeData.experience;
    document.querySelector('cert-section').data = resumeData.certificates;
    document.querySelector('eval-section').data = resumeData.evaluation;

    // 2. 初始化 IntersectionObserver 滚动动画
    // 注意：因为元素在 Shadow DOM 中，我们需要获取 Shadow root 里的元素
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 元素出现 15% 时触发动画
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target); // 动画只触发一次
            }
        });
    }, observerOptions);

    // 等待一小段时间让 Web Components 渲染完毕，然后绑定动画
    setTimeout(() => {
        // 选取所有的自定义组件
        const components = document.querySelectorAll('hero-section, education-section, skills-section, experience-section, cert-section, eval-section');
        
        components.forEach(comp => {
            // 在它们的 shadowRoot 中寻找带有 reveal-init 类的元素
            if(comp.shadowRoot) {
                const animatableElements = comp.shadowRoot.querySelectorAll('.reveal-init');
                animatableElements.forEach(el => observer.observe(el));
            }
        });
    }, 100);

});