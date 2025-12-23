// ========== INITIALIZE ==========
import { navData, dashboardCards, advancedAnalyticsCards } from './data.js';
import { renderNavbar, renderDashboard, renderAdvancedAnalytics } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const section2 = document.querySelector('.section-2');
    const section3 = document.querySelector('.section-3');

    renderNavbar(navbar, navData);
    renderDashboard(section2, dashboardCards);
    renderAdvancedAnalytics(section3, advancedAnalyticsCards[0]);
});

