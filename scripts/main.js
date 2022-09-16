const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

// Select tab content item
function selectItem() {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	const tabContentItem = document.querySelectorAll(`#${this.id}-content`);
	tabContentItem.forEach(item => item.classList.add('show'));
}
// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
	});
}

function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

