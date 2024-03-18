const lenis = new Lenis()

lenis.on('scroll', (e) => {
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



let top1 = gsap.timeline();
top1.to(".top", {


    onStart: function () {
        const top = document.querySelector(".top")
        var h1 = document.querySelector(".timer h1");
        let count = 0;
        top.classList.add("loader")
        setInterval(() => {
            if (count < 100) {
                count++;
                // num.innerHTML=count;
                h1.textContent = count;
            } else {
                h1.textContent = count;
            }
        }, 20);


    },

})
top1.to(".top", {
    y: "-100%",
    duration: 2,
})
top1.to(".first,.second", {
    paddingTop: "0",
    opacity: 1,
    stagger: .2,
})
document.addEventListener("mousemove", e => {
    gsap.to(".imgbx", {
        x: e.clientX,
        y: e.clientY,
        stagger: -0.1,
        opacity: 1,
    });
    setTimeout(() => {
        gsap.to(".imgbx img", {
            y: "100px",
            stagger: .4,
            opacity: 0,
        })
    }, 4000);
});






// // Event listener for custom "mousestop" event
// document.addEventListener("mousestop", (e) => {
//     gsap.to(".imgbx img", {
//         y: window.innerHeight,
//         // x: - e.clientX - 100 + "%",
//         stagger: .4,
//         opacity: 0,
//     });
// });


let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".animationwrapper",
        start: "0% top",
        end: "100% 40%",
        snap: true,
    }
});

tl.to(".animation img", {
    scale: 1,
    duration: 1,
    ease: "power2.inOut"
}, "a");

tl.to(".eutadiv img", {
    transform: "scale(1) translate(0%, 4%)",
    duration: 1,
    ease: "power2.inOut"
}, "a");

let t2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".lside",
        start: "0% 40%",
        end: "78% 40%",
        // ,
        pin: true,
        scrub: true,
    }
});

let t3 = gsap.timeline();
let maindiv = document.querySelector(".div")
// let helpdiv = document.querySelector(".helpdiv")
const div = gsap.utils.toArray(".div")
console.log(div)


// Function to handle mouse enter

// Function to handle mouse enter
function onMouseEnter(event) {
    const helpdiv = event.target.firstElementChild
    const secondChildDiv = event.target.querySelector('div:nth-child(2)');
    const thirdChildDiv = event.target.querySelector('div:nth-child(3)');
    gsap.to(helpdiv, { width: "100%", duration: .3 });
    secondChildDiv.style.color = "black";
    thirdChildDiv.style.color = "black";
    gsap.to(event.target, {
        paddingLeft: "5%",
    })

}

// Function to handle mouse leave
function onMouseLeave(event) {
    const helpdiv = event.target.firstElementChild

    const secondChildDiv = event.target.querySelector('div:nth-child(2)');
    const thirdChildDiv = event.target.querySelector('div:nth-child(3)');
    gsap.to(helpdiv, { width: "0%", duration: 0.3 });
    secondChildDiv.style.color = "white";
    thirdChildDiv.style.color = "white";
    gsap.to(event.target, {
        paddingLeft: "3%"
    })
    // event.target.style.paddingLeft = "0";
}

// Add event listeners to each hoverable element
div.forEach(element => {
    element.addEventListener('mouseenter', onMouseEnter);
    element.addEventListener('mouseleave', onMouseLeave);
});



gsap.to(".arrow img", {
    height: "100%",
    repeat: Infinity,
    yoyo: true,
    duration: 1.4,
    ease: "linear",
})


let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page3",
        start: "0% 0%",
        end: "350% 50%",
        // ,
        pin: true,
        scrub: true,
        // snap: true,
    }
});

t4.to(".image", {
    clipPath: "circle(12% at 55% 25%)",
    opacity: 1,
    duration: 1,
    delay: .8,
})
t4.to(".paraone", {
    y: -10,
    opacity: 1,
    delay: -.1,
})
t4.to(".paraone", {

    opacity: 0,
    delay: .6,
})
t4.to(".image", {
    clipPath: "circle(12% at 50% 65%)",
    duration: 1,
    ease: "Power4.in",
    delay: .8,



})
t4.to(".paratwo", {
    y: -10,
    opacity: 1,
})
t4.to(".paratwo", {

    opacity: 0,
    delay: .6,
})
t4.to(".image", {
    clipPath: " circle(12% at 27% 63%)",
    duration: 1,
    ease: "Power4.in",
    delay: .8,



})
t4.to(".parathree", {
    y: -10,
    opacity: 1,
})
t4.to(".parathree", {
    opacity: 0,
    delay: .6,
})
t4.to(".image", {
    clipPath: "circle(14% at 62% 65%)",
    duration: 1,
    ease: "Power4.in",
    delay: .8,



})
t4.to(".parafour", {
    y: -10,
    opacity: 1,
})
t4.to(".parafour", {

    opacity: 0,
    delay: .6,
})
t4.to(".image", {
    clipPath: "circle(10% at 47% 38%)",
    duration: 1,
    delay: .8,



})
t4.to(".parafive", {
    y: -10,
    opacity: 1,
})
t4.to(".parafive", {
    opacity: 0,
    delay: .6,
})
t4.to(".image", {
    clipPath: "circle(13% at 15% 60%)",
    duration: 1,
    delay: .8,



})
t4.to(".parasix", {
    y: -10,
    opacity: 1,
})
t4.to(".image", {
    clipPath: "circle(200% at 15% 60%)",
    duration: 6,
    stagger: 1,
    delay: 1


})

let tpage4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".page4",
        start: "0% 40%",
        end: "10% bottom",
        

    }
});
tpage4.to(".hero1,.hero2", {
    paddingTop: "0",
    opacity: 1,
    stagger: .2,
})
let t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".history .lside",
        start: "0% 40%",
        end: "83% 40%",

        pin: true,
        scrub: true,
    }
});
let t6 = gsap.timeline({
    scrollTrigger: {
        trigger: " .img-wrapper",
        start: "-16% 40%",
        end: "70% 40%",
        
        scrub: true,
    }
});

t6.to(".img-wrapper img", {
    scaleX: 1.2,
    scaleY: 1,
    ease: 'linear',
    duration: 2,
});
let tauthor = gsap.timeline({
    scrollTrigger: {
        trigger: "#author",
        start: "0% 40%",
        end: "10% bottom",

    }
});
tauthor.to("#hero1,#hero2,#hero3", {
    paddingTop: "0",
    opacity: 1,
    stagger: .2,
})
let twork = gsap.timeline({
    scrollTrigger: {
        trigger: "#work",
        start: "0% 40%",
        end: "10% bottom",

    }
});
twork.to("#workhero1,#workhero2", {
    paddingTop: "0",
    opacity: 1,
    stagger: .2,
})

let t7 = gsap.timeline({
    scrollTrigger: {
        trigger: ".authordet .lside",
        start: "0% 40%",
        end: "70% 40%",
        
        pin: true,
        scrub: true,
    }
});
let t8 = gsap.timeline({
    scrollTrigger: {
        trigger: ".workdet .lside",
        start: "0% 40%",
        end: "80% 40%",
     
        pin: true,
        scrub: true,
    }
});


let t9 = gsap.timeline({
    scrollTrigger: {
        trigger: ".funal",
        start: "20% 40%",
        end: "70% 40%",
      
        scrub: true,
    }
});

t9.to(".funal-wrapper", {
    clipPath: "polygon(0px 0px, 100% 0px, 58% 70%, 58% 100%, 42% 100%, 42% 70%)",

    ease: "power1.inOut"

}, "image")

t9.to(".funal-wrapper img", {
    scale: 1,
}, "image")

