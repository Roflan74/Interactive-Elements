const btnOpen = document.querySelector('.btn--open');
const modal = document.querySelector('.modal');
consoleDebug("btnOpen", btnOpen);
consoleDebug("modal", modal);

const modalViewHandler = () => {
    modal.classList.toggle('modal--open');
};

btnOpen.addEventListener('click', modalViewHandler);
modal.addEventListener('click', modalViewHandler);

function consoleDebug(objName, obj) {
    if (obj != null) {
        console.log(objName + " " + obj);
    } else {
        console.log(objName + " [null]");
    }
}