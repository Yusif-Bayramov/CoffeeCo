// let dropdown = document.querySelector(".dropbtn");
// let mydropdown = document.querySelector(".dropdown-content");

// dropdown.addEventListener("click", () => {
//     mydropdown.classList.toggle("show")
//     dropdown.classList.toggle("active")
// });
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");

menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    cancelBtn.style.color = "#ff3d00"
    form.classList.remove("active");
}
searchBtn.onclick = () => {
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}
const coffee_cup_loading = document.querySelector(".coffee_cup_loading");

setTimeout(() => {
    coffee_cup_loading.style.display = "none"
}, 2000);

let preveiwContainer = document.querySelector('.products-preview')
let previewBox = preveiwContainer?.querySelectorAll('.preview')


document.querySelectorAll('.card-item').forEach((product) => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex'
        let name = product.getAttribute('data-name')
        previewBox.forEach((preview) => {
            let target = preview.getAttribute('data-target')
            if (name == target) {
                preview.classList.add('active')
            }
        })
    }
})

previewBox?.forEach((close) => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active')
        preveiwContainer.style.display = 'none'
    }
})
window.onclick = function(event) {
    let preveiwContainer = document.querySelector('.products-preview')
    var modal = document?.getElementById("myModal");
    if (event.target == preveiwContainer) {
        previewBox.forEach((close) => {
            close.classList.remove('active')
            preveiwContainer.style.display = 'none'
        })
    }
    if (event.target == modal) {
        modal.style.display = "none";
    }

}
var langArray = [];
$(".vodiapicker option").each(function () {
  var img = $(this).attr("data-thumbnail");
  var text = this.innerText;
  var value = $(this).val();
  var item =
    '<li><img src="' +
    img +
    '" alt="" value="' +
    value +
    '"/><span>' +
    text +
    "</span></li>";
  langArray.push(item);
});

$("#a").html(langArray);

//Set the button value to the first el of the array
$(".btn-select").html(langArray[0]);
$(".btn-select").attr("value", "en");

//change button stuff on click
$("#a li").click(function () {
  var img = $(this).find("img").attr("src");
  var value = $(this).find("img").attr("value");
  var text = this.innerText;
  var item =
    '<li><img src="' + img + '" alt="" /><span>' + text + "</span></li>";
  $(".btn-select").html(item);
  $(".btn-select").attr("value", value);
  $(".b").toggle();
  //console.log(value);
});

$(".btn-select").click(function () {
  $(".b").toggle();
});
$(".fa-chevron-down").click(function () {
  $(".b").toggle();
  this.classList.toggle("active");
});
//check local storage for the lang
var sessionLang = localStorage.getItem("lang");
if (sessionLang) {
  //find an item with value of sessionLang
  var langIndex = langArray.indexOf(sessionLang);
  $(".btn-select").html(langArray[langIndex]);
  $(".btn-select").attr("value", sessionLang);
} else {
  var langIndex = langArray.indexOf("ch");
  console.log(langIndex);
  $(".btn-select").html(langArray[langIndex]);
  //$('.btn-select').attr('value', 'en');
}
