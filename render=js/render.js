// ========== RENDERING FUNCTIONS ==========

// Render Navigation
export function renderNavbar(container, data) {
    // Logo
    const logoContainer = document.createElement('div');
    logoContainer.className = 'logo-container';

    const logoBars = document.createElement('div');
    logoBars.className = 'logo-bars';
    data.logo.bars.forEach(height => {
        const bar = document.createElement('div');
        bar.className = 'logo-bar';
        bar.style.height = `${height}px`;
        logoBars.appendChild(bar);
    });

    const logoText = document.createElement('span');
    logoText.className = 'logo-text';
    logoText.textContent = data.logo.text;

    logoContainer.appendChild(logoBars);
    logoContainer.appendChild(logoText);

    // Nav Links
    const navLinks = document.createElement('ul');
    navLinks.className = 'nav-links';
    data.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.className = `nav-link ${link.active ? 'active' : ''}`;
        a.textContent = link.text;
        li.appendChild(a);
        navLinks.appendChild(li);
    });

    // Search Icon
    let searchIcon = null;
    if (data.hasSearch) {
        searchIcon = document.createElement('div');
        searchIcon.className = 'search-icon';
        const searchIconElement = document.createElement('i');
        searchIconElement.className = 'fa-solid fa-magnifying-glass';
        searchIcon.appendChild(searchIconElement);
    }

    // Append all to container
    container.appendChild(logoContainer);
    container.appendChild(navLinks);
    if (searchIcon) {
        container.appendChild(searchIcon);
    }
}

// Render Hero Section
export function renderHero(container, data) {
    // Content
    const content = document.createElement('div');
    content.className = 'hero-content';

    const title = document.createElement('h1');
    title.className = 'hero-title';
    const span1 = document.createElement('span');
    span1.className = 'highlight';
    span1.textContent = data.title.part1;
    const span2 = document.createElement('span');
    span2.textContent = ` ${data.title.part2}`;
    title.appendChild(span1);
    title.appendChild(span2);

    const description = document.createElement('p');
    description.className = 'hero-description';
    description.textContent = data.description;

    const button = document.createElement('button');
    button.className = 'cta-button';
    button.textContent = data.button.text;

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(button);

    // Graphics
    const graphics = document.createElement('div');
    graphics.className = 'hero-graphics';

    // Chart bars
    const chartContainer = document.createElement('div');
    chartContainer.className = 'chart-container';
    data.charts.forEach((chart, index) => {
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.height = `${chart.height}px`;
        bar.style.animationDelay = `${index * 0.1}s`;
        chartContainer.appendChild(bar);
    });

    // Geometric shapes
    const square = document.createElement('div');
    square.className = 'geometric-shape shape-square';

    const triangle = document.createElement('div');
    triangle.className = 'geometric-shape shape-triangle';

    const line = document.createElement('div');
    line.className = 'geometric-shape shape-line';

    graphics.appendChild(chartContainer);
    graphics.appendChild(square);
    graphics.appendChild(triangle);
    graphics.appendChild(line);

    container.appendChild(content);
    container.appendChild(graphics);
}

// Render Dashboard Cards
export function renderDashboard(container, cards) {
    const title = document.createElement('h2');
    title.className = 'dashboard-title';
    const span1 = document.createElement('span');
    span1.className = 'highlight';
    span1.textContent = 'Dashboard';
    const span2 = document.createElement('span');
    span2.textContent = ' Overview';
    title.appendChild(span1);
    title.appendChild(span2);

    const grid = document.createElement('div');
    grid.className = 'cards-grid';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'kpi-card';

        const header = document.createElement('div');
        header.className = 'card-header';

        const icon = document.createElement('div');
        icon.className = 'card-icon';
        if (card.icon?.type === "fa") {
            const i = document.createElement('i');
            i.className = card.icon.class;
            icon.appendChild(i);
        }


        const info = document.createElement('div');
        const cardTitle = document.createElement('div');
        cardTitle.className = 'card-title';
        cardTitle.textContent = card.title;

        const cardValue = document.createElement('div');
        cardValue.className = 'card-value';
        cardValue.textContent = card.value;

        info.appendChild(cardTitle);
        info.appendChild(cardValue);

        header.appendChild(icon);
        header.appendChild(info);

        const description = document.createElement('p');
        description.className = 'card-description';
        description.textContent = card.description;

        // SVG Graph
        const graph = document.createElement('div');
        graph.className = 'card-graph';
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '60');
        svg.setAttribute('viewBox', '0 0 200 60');

        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        const points = card.graphData;
        const maxValue = Math.max(...points);
        const minValue = Math.min(...points);
        const range = maxValue - minValue || 1;
        const width = 200;
        const height = 60;
        const stepX = width / (points.length - 1);

        let pathData = `M 0 ${height - ((points[0] - minValue) / range) * height}`;
        points.forEach((point, index) => {
            const x = index * stepX;
            const y = height - ((point - minValue) / range) * height;
            pathData += ` L ${x} ${y}`;
        });

        path.setAttribute('d', pathData);
        path.setAttribute('stroke', card.graphColor);
        path.setAttribute('class', 'graph-line');

        svg.appendChild(path);
        graph.appendChild(svg);

        cardElement.appendChild(header);
        cardElement.appendChild(description);
        cardElement.appendChild(graph);

        grid.appendChild(cardElement);
    });

    container.appendChild(title);
    container.appendChild(grid);
}

// Render Alvanced Analytics
export function renderAdvancedAnalytics(container, data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'advanced-analytics-wrapper';

    // Title
    const title = document.createElement('h2');
    title.className = 'advanced-analytics-title';
    title.textContent = data.title;

    // Cards container
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'advanced-analytics-cards';

    data.AnaCards.forEach(card => {
        const cardEl = document.createElement('div');
        cardEl.className = 'analytics-card';

        const value = document.createElement('div');
        value.className = 'analytics-value';
        value.textContent = card.value;

        const desc = document.createElement('div');
        desc.className = 'analytics-description';
        desc.textContent = card.description;

        cardEl.appendChild(value);
        cardEl.appendChild(desc);
        cardsContainer.appendChild(cardEl);
    });

    wrapper.appendChild(title);
    wrapper.appendChild(cardsContainer);
    container.appendChild(wrapper);
}
