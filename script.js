// This code is used to create a modal window for displaying larger images.

document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnails img');
    const modal = document.getElementById('myModal');
    const modalImg = document.querySelector('.modal-content img');
    const span = document.getElementsByClassName("close")[0];

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const largeSrc = this.getAttribute('data-large-src');
            modal.style.display = 'block';
            modalImg.src = largeSrc;
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});