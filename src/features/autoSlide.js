export const autoSlide = () => {
    var counter = 1;
    setInterval(function(){
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 2) {
            counter = 1;
        }
    }, 5000)
}

export const autoTextSlide = () => {
    var counter = 1;
    setInterval(function(){
        document.getElementById('textRadio' + counter).checked = true;
        counter++;
        if (counter > 3) {
            counter = 1;
        }
    }, 4000)
}