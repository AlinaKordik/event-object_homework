const tabsContainer = document.getElementById('tabs1');
const tabContents = document.querySelectorAll('.tab__content'); 

tabsContainer.addEventListener('click', (e) => {
    
    const currentTab = e.target.closest('.tab'); 
    
    if (!currentTab) return;

    const allTabs = tabsContainer.querySelectorAll('.tab'); 
    allTabs.forEach(t => t.classList.remove('tab_active'));
    
    tabContents.forEach(content => content.classList.remove('tab__content_active'));

    currentTab.classList.add('tab_active'); 

    const currentIndex = Array.from(allTabs).indexOf(currentTab);
    
    if (tabContents[currentIndex]) {
        tabContents[currentIndex].classList.add('tab__content_active');
    }
});
