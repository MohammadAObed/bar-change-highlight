const links = document.querySelectorAll('.nav-bar > p');
const content = document.querySelectorAll('.content-container > div');
const contentContainer = document.querySelector('.content-container');

changeContent(links,links[0]);

window.addEventListener('DOMContentLoaded', ()=>{
        
    changeLinkStyle(links[0], "rgba(0, 233, 202, 0.185)", "rgba(0, 233, 202, 9.185)", '5px solid rgba(0, 233, 202)');

    links.forEach(link => {
        link.addEventListener('click', () => {
        
            links.forEach(l => {
                changeLinkStyle(l, 'transparent', '#fff', '5px solid #ffffff99');
            });

            changeLinkStyle(link, "rgba(0, 233, 202, 0.185)", "rgba(0, 233, 202, 9.185)", '5px solid rgba(0, 233, 202)');

            changeContent(links,link);
           
        });
    });
});


function changeLinkStyle(link, bgcolor, color, borderleft) {
    link.style.backgroundColor = bgcolor;
    link.style.color = color;
    link.style.borderLeft = borderleft;
}


function changeContent(links,link) {
    contentContainer.innerHTML = `<div class="content">${content[Array.from(links).indexOf(link)].innerHTML}</div>`;
    
}