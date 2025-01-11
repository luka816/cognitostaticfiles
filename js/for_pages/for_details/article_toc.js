function ToggleSidebar(element) {
    const ArticleMain = document.getElementById('article-main');
    const ArticleSidebarBtn = document.getElementById('toc-toggle-btn');
    const ArticleSidebarBtnImg = document.getElementById('toc-toggle-btn-img');
    ArticleMain.classList.toggle('sidebar-hidden')
    ArticleSidebarBtn.classList.toggle('toc-btn-hidden')

    if (ArticleMain.classList.contains('sidebar-hidden')) {
        ArticleSidebarBtnImg.src = showSidebarImage
    } else {
        ArticleSidebarBtnImg.src = hideSidebarImage
    }

}

document.addEventListener("DOMContentLoaded", function () {
    const toc = document.getElementById('article-toc');
    const articleText = document.getElementById('article-text');
    const headings = articleText.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const offset = 70; // Adjust this value as needed (positive for extra space, negative for less)

    // Function to apply smooth scroll behavior to links with an offset
    function addSmoothScroll(link, targetId) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump
            const targetElement = document.getElementById(targetId);
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    }

    // Loop through all headings and create TOC links dynamically
    headings.forEach((heading, index) => {
        let headingId = `heading-${index}`;
        heading.id = headingId;

        let tocItem = document.createElement('li');
        let tocLink = document.createElement('a');
        tocLink.href = `#${headingId}`;
        tocLink.textContent = heading.textContent;

        // Apply smooth scroll to new TOC links
        addSmoothScroll(tocLink, headingId);

        tocItem.appendChild(tocLink);
        toc.appendChild(tocItem);
    });

    // Apply smooth scroll to any existing TOC links that are already in the DOM
    const existingLinks = toc.querySelectorAll('a');
    existingLinks.forEach(link => {
        let targetId = link.getAttribute('href').substring(1);
        addSmoothScroll(link, targetId);
    });
});

