const imgArr = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"]
$("#imgD").css("backgroundImage", `url(img/${imgArr[0]})`);
// let dot = $(".dot")[$("#imgD").css("backgroundImage").slice(31,32)-1]
// dot.attr("style", "background-color: gray;");
// dot.siblings().attr("style", "background-color: ;");
$("#next").click(function () {
    // debugger
    let imgURL = $("#imgD").css("backgroundImage").slice(31, 32)
    let imgIndex = imgArr.indexOf(`${imgURL}.jpg`)
    if (imgIndex == 8) {
        imgIndex = 1
    }
    $("#imgD").fadeTo(200, 0.001);
    setTimeout(() => {
        $("#imgD").attr("style", `background-image:url(img/${imgArr[imgIndex + 1]})`);
    }, 200);
    $("#imgD").fadeTo(200, 1);

});
$("#prev").click(function () {
    // debugger
    let imgURL = $("#imgD").css("backgroundImage").slice(31, 32)
    let imgIndex = imgArr.indexOf(`${imgURL}.jpg`)
    if (imgIndex == 0) {
        imgIndex = 9
    }
    $("#imgD").fadeTo(200, 0.001);
    setTimeout(() => {
        $("#imgD").attr("style", `background-image:url(img/${imgArr[imgIndex - 1]})`);
    }, 200);
    $("#imgD").fadeTo(200, 1);

});
