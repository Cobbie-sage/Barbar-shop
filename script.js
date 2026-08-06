// ===============================
// BARBER SHOP WEBSITE JAVASCRIPT
// ===============================

// Booking Form
const bookingForm = document.querySelector("form");

bookingForm.addEventListener("submit", function(e){
    e.preventDefault();

    const name = bookingForm.querySelector('input[type="text"]').value;
    const phone = bookingForm.querySelector('input[type="tel"]').value;
    const email = bookingForm.querySelector('input[type="email"]').value;
    const service = bookingForm.querySelector("select").value;
    const date = bookingForm.querySelector('input[type="date"]').value;
    const time = bookingForm.querySelector('input[type="time"]').value;

    if(
        name === "" ||
        phone === "" ||
        email === "" ||
        service === "Select Service" ||
        date === "" ||
        time === ""
    ){
        alert("Please complete all fields.");
        return;
    }

    alert(
        "Appointment Booked!\n\n" +
        "Customer: " + name +
        "\nService: " + service +
        "\nDate: " + date +
        "\nTime: " + time
    );

    bookingForm.reset();
});


// ===============================
// LIVE QUEUE
// ===============================

let waitingPeople = 8;

const waiting = document.getElementById("waiting");
const waitTime = document.getElementById("time");

function updateQueue(){

    waiting.innerHTML = waitingPeople;

    waitTime.innerHTML = waitingPeople * 5 + " Minutes";

}

updateQueue();


// Random queue simulation
setInterval(function(){

    let random = Math.random();

    if(random > 0.5){

        waitingPeople++;

    }else{

        if(waitingPeople > 0){

            waitingPeople--;

        }

    }

    updateQueue();

},10000);


// ===============================
// NAVIGATION ACTIVE LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop = section.offsetTop - 150;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});


// ===============================
// SCROLL TO TOP BUTTON
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.padding="15px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.fontSize="22px";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.background="#d4af37";
topButton.style.color="#000";

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// FADE-IN ANIMATION
// ===============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s";

    observer.observe(section);

});


// ===============================
// DIGITAL CLOCK
// ===============================

const clock = document.createElement("div");

clock.style.position="fixed";
clock.style.top="90px";
clock.style.right="20px";
clock.style.background="#000";
clock.style.color="#d4af37";
clock.style.padding="10px 20px";
clock.style.borderRadius="5px";
clock.style.fontWeight="bold";

document.body.appendChild(clock);

function updateClock(){

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();


// ===============================
// BUSINESS STATUS
// ===============================

const status = document.createElement("div");

status.style.position="fixed";
status.style.top="140px";
status.style.right="20px";
status.style.background="green";
status.style.color="white";
status.style.padding="10px";
status.style.borderRadius="5px";

document.body.appendChild(status);

function shopStatus(){

    const hour = new Date().getHours();

    if(hour>=8 && hour<21){

        status.innerHTML="OPEN";

        status.style.background="green";

    }else{

        status.innerHTML="CLOSED";

        status.style.background="red";

    }

}

shopStatus();

setInterval(shopStatus,60000);


// ===============================
// GALLERY IMAGE EFFECT
// ===============================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});


// ===============================
// WELCOME MESSAGE
// ===============================

window.onload=function(){

    setTimeout(()=>{

        alert("Welcome to Elite Barber Shop!");

    },1000);

};