window.addEventListener("scroll", function () {
  const nav = document.querySelector(".main-nav");

  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

AOS.init({
  duration: 900, 
  easing: "ease-in-out",
  once: true,    
});

// عداد الأرقام المتزايدة
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const current = +counter.innerText;

    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  // تشغيل العد عند دخول العنصر للشاشة
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(counter);
      }
    });
  });

  observer.observe(counter);
});
