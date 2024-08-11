// document.getElementById("my-p").innerHTML = genRandomStr(10);

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const largeSrc = this.getAttribute('data-large-src');
            modal.style.display = 'block';
            modalContent.src = largeSrc;
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

function genRandomStr(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}