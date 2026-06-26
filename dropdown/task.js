const dropdowns = document.querySelectorAll('.dropdown');
const activeDrop = document.querySelector('.dropdown__list_active')

dropdowns.forEach(dropdown => {
    const value = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');

    dropdown.addEventListener('click', (e) => {
        e.preventDefault();
         value.textContent = dropdownList.textContent;
         dropdownList.classList.remove('dropdown__list_active');
        })
        
    });

window.addEventListener('click', (event) => {
    if (!activeDrop.contains(event.target) && !dropdownList.contains(event.target)) {
        dropdownList.style.display = 'none';
    }
})