const countElements = document.querySelectorAll(".count-element");

countElements.forEach(function (element) {
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px",
  };

  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        return;
      } else {
        element.classList.add("count-element-visible");
        let counter = 0;
        const targetCount = parseInt(element.innerText);

        const countInterval = setInterval(function () {
          if (counter < targetCount) {
            counter += Math.ceil(targetCount / 50);
            element.innerText = counter;
          } else {
            clearInterval(countInterval);
          }
        }, 40);
      }
    });
  },
  appearOptions);

  appearOnScroll.observe(element);
});





