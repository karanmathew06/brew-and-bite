// Analytics receives only product information and form type, never form entries.
function trackEvent(name, parameters) { if (typeof window.gtag === 'function') window.gtag('event', name, parameters); }
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
 document.querySelectorAll('.card[data-category]').forEach(card => {card.hidden = button.dataset.filter !== 'All' && card.dataset.category !== button.dataset.filter;});
 trackEvent('menu_filter', {category:button.dataset.filter});
}));
const details = document.getElementById('details');
document.querySelectorAll('.detail').forEach(button => button.addEventListener('click', () => {
 document.getElementById('detail-title').textContent = button.dataset.name;
 document.getElementById('detail-description').textContent = button.dataset.description;
 document.getElementById('detail-price').textContent = '₹' + button.dataset.price;
 details.showModal();
 trackEvent('select_item', {item_list_id:'cafe_menu',item_list_name:'Café Menu',items:[{item_id:button.dataset.id,item_name:button.dataset.name,price:Number(button.dataset.price)}]});
}));
document.getElementById('close-dialog').addEventListener('click', () => details.close());
document.querySelectorAll('form[data-form]').forEach(form => form.addEventListener('submit', event => {
 event.preventDefault();
 if (!form.reportValidity()) return;
 form.querySelector('.form-status').textContent = 'Demo complete! No message was sent, no subscription was created, and your entries were not saved.';
 trackEvent('demo_form_submit', {form_type:form.dataset.form});
}));
