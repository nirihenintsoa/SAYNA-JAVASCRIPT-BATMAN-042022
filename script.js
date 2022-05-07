document.querySelectorAll(".nl").forEach(
    (item) => {
        item.onmouseover = () => {
            item.style.textDecoration = "underline"
            item.style.color = "white"
            item.style.fontWeight = "bold"

        }
        item.onmouseout = () => {
            item.style.textDecoration = 'none'
            item.style.fontWeight = "lighter"
        }
    }
)

document.querySelectorAll("button").forEach(
    (item) => {
        let initialBgColor = item.style.backgroundColor
        let initialColor = item.style.backgroundColor
        item.onmouseover = () => {
            item.style.backgroundColor = "white"
            item.style.color = "black"

        }
        item.onmouseout = () => {
            item.style.backgroundColor = initialBgColor
            item.style.color = initialColor
        }
    }
)

document.querySelectorAll(".social-media").forEach(
    (item) => {
        item.onmouseover = () => {
            item.style.filter = " sepia(88%) saturate(2804%) hue-rotate(342deg) brightness(99%) contrast(100%)"

        }
        item.onmouseout = () => {
            item.style.filter = "sepia(16%) saturate(7463%) hue-rotate(222deg) brightness(119%) contrast(115%)"
        }
    }
)

document.querySelectorAll("p").forEach(
    (item) => {
        unfade(item)
    }
)
document.querySelectorAll("h1").forEach(
    (item) => {
        unfade(item)
    }
)

function unfade(element) {
    var op = 0;
    var timer = setInterval(function () {
        console.log(op);
        if (op > 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'opacity(' + op * 100 + "%)";
        op += 0.05;
    }, 100);
}

document.onscroll = () => {
    document.querySelector('#h1-aside').style.top = window.pageYOffset + 200
}

function scrollToTop() {
    window.scrollTo(0, -document.body.scrollHeight);
}

function scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}



