window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    } else {
        document.getElementById("header").style.backgroundColor = "#0f0f0f";
    }
}



document.addEventListener("DOMContentLoaded", function () {

    var words = ["Front End Developer", "Designer", "Back End", "Siswa"];
    var i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 15,
        speed = 90,
        part = '';

    function typingtext() {
        const CWAutoTyping = document.querySelector(".codewheel-auto-typing");
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            } else {
                offset--;
                if (offset == 0) {
                    forwards = true;
                    offset = 0;
                    i = (i + 1) % len;
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                }
            }
            CWAutoTyping.textContent = part;
        }, speed);
    }
    typingtext();
});

function show1() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('text-about')
        .style.display = "block";
   document.getElementById('SkillBos')
        .style.display = "none";
        document.getElementById('AchivementBos')
        .style.display = "none";
}

function show2() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('SkillBos')
        .style.display = "block";
   document.getElementById('text-about')
        .style.display = "none";
        document.getElementById('AchivementBos')
        .style.display = "none";
}

function show3() {
    /* Access image by id and change 
    the display property to block*/
    document.getElementById('AchivementBos')
        .style.display = "block";
   document.getElementById('text-about')
        .style.display = "none";
        document.getElementById('SkillBos')
        .style.display = "none";
}


const container = document.getElementById("projectContainer");

// Simulasi data baru
let projectCounter = 4;
function loadMoreProjects() {
    for (let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        div.className = "foto-project";
        div.textContent = "Project " + projectCounter++;
        container.appendChild(div);
    }
}

container.addEventListener("scroll", () => {
    const nearEnd = container.scrollWidth - container.scrollLeft - container.clientWidth < 100;

    if (nearEnd) {
        loadMoreProjects();
    }
});