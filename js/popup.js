window.onload = function () {
    var popupBtnLinks = document.querySelectorAll(".popup-btn a")
    var popupBtn = document.querySelector(".popup-btn")
    var popupText = document.querySelector(".popup-text")
    // var popupBtnIcons = document.querySelectorAll(".popup-btn i")
    
    popupBtnLinks.forEach(function (link){
        link.addEventListener("click", function (e) {
            e.preventDefault();
        popupBtnLinks.forEach(function (item) {
            item.classList.toggle("active")
        });
        // popupBtnIcons.forEach
        });
    });
    popupBtn.addEventListener("click",function () {
        popupText.style.display = 
            popupText.style.display === "none" ? "block" : "none";
    });
};
