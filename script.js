document.querySelector('.dropdown_link').onclick = function (event) {
    event.preventDefault();
    document.querySelector('.top_menu').classList.toggle('open');
}

const gallery_nav = document.querySelector('.gallery_nav');
const gallery_grid = document.querySelector('.gallery_grid');
for (let link of gallery_nav.children) {
    link.onclick = function(event) {
        if (active_link) {
            active_link.classList.remove('active');
        }
        this.classList.add('active');
        gallery_grid.classList.remove('tagged', 'post');
        gallery_grid.classList.add(
            this.getAttribute('data-name')
        );
    }
}
function changeGalleryTab() {
    let subpage = location.hash.substring(1)
    const subpage = ['posts', 'tagged']
}
window.onchange = function(event) {
   let subpage = location.hash.substring(1);
   const link = gallery_nav.querySelector('[href=' + subpage + '');
   
   if (!subpages.includes(subpage)) {
        subpage = 'posts';
   }
   const link = gallery_nav.querySelector('[href="#')
}

