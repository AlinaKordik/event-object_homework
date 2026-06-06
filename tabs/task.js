const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content'); 

tabs.forEach((tab, tabIndex) => {
    tab.addEventListener('click', () => {
        
        tabs.forEach(t => t.classList.remove('tab_active'));
        tabContents.forEach(content => content.classList.remove('tab__content_active'));

       
        tab.classList.add('tab_active'); 
        tabContents[tabIndex].classList.add('tab__content_active');
    });
});