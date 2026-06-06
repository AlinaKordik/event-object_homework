
const activeDrop = document.querySelector('.dropdown__list_active')
const value = document.querySelector('.dropdown__value')
const dropdownList = document.getElementById('dropp');
const dropdownLinks = document.querySelectorAll('.dropdown__link');

activeDrop.addEventListener('click', () => {

    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    dropdownLinks.forEach(link =>{
        link.addEventListener('click', (e) => {
            e.preventDefault();
            value.textContent = link.textContent;
            dropdownList.classList.remove('dropdown__list_active');
        })
        
    })
    });

window.addEventListener('click', (event) => {
    if (!activeDrop.contains(event.target) && !dropdownList.contains(event.target)) {
        dropdownList.style.display = 'none';
    }
})