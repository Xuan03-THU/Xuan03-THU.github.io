// document.getElementById("my-p").innerHTML = genRandomStr(10);

// var modal = document.getElementById("myModal");
// var img = document.getElementById("thumbnailButton").querySelector("img");
// var span = document.getElementsByClassName("close")[0];

// // 当用户点击缩略图时，打开模态框
// img.onclick = function() {
//     modal.style.display = "block";
// }

// // 当用户点击 "×" 符号时，关闭模态框
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // 当用户点击任意位置外部时，关闭模态框
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

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
