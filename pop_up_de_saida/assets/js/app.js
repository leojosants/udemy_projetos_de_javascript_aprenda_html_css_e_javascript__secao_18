/* */
const popup = document.querySelector('[data_popup]');
const cancel_button = document.querySelector('[data_calcel_button]');

localStorage.removeItem('popup_displayed');

/* */
document.addEventListener('mouseout', (event) => {
    const popup_displayed = localStorage.getItem('popup_displayed');

    if (!popup_displayed && event.relatedTarget === null) {
        popup.style.display = 'block';
    };
});

/* */
cancel_button.addEventListener('click', () => {
    popup.style.display = 'none';
    localStorage.setItem('popup_displayed', true);
});