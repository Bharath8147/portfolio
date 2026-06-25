function openProjectTab(tabName, element) {
    // Hide all tab contents
    const contents = document.querySelectorAll('.project-list');
    contents.forEach(content => {
        content.style.display = 'none';
        content.classList.remove('active-tab-content');
    });

    // Deactivate all tabs
    const tabs = document.querySelectorAll('.project-tab-btn');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Show specific content
    const selectedContent = document.getElementById(tabName + '-projects');
    if (selectedContent) {
        selectedContent.style.display = 'grid';
        selectedContent.classList.add('active-tab-content');
    }

    // Activate specific tab button
    if (element) {
        element.classList.add('active');
    }
}

// Initialize default tab (optional, as HTML will have 'active' class on first tab)
document.addEventListener('DOMContentLoaded', () => {
    // Ensure the active tab content is visible if logic requires js initialization
    // But CSS/HTML structure handles initial state mostly.
});
