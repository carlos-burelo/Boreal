var slider = new KeenSlider("#my-keen-slider", {
    created: function(instance) {
      document.getElementById("arrow-left").addEventListener("click", function() {
          instance.prev();
        });

      document.getElementById("arrow-right").addEventListener("click", function() {
          instance.next();
        });
      var dots_wrapper = document.getElementById("dots");
      var slides = document.querySelectorAll(".keen-slider__slide");
      slides.forEach(function(t, idx) {
        var dot = document.createElement("button");
        dot.classList.add("dot");
        dots_wrapper.appendChild(dot);
        dot.addEventListener("click", function() {
          instance.moveToSlide(idx);
        });
      });
      updateClasses(instance);
    },
    slideChanged(instance) {
      updateClasses(instance);
    }
  });

  var sliderElement = document.getElementById("my-keen-slider");
  var interval = 0;
  function autoplay(run) {
    clearInterval(interval);
    interval = setInterval(() => {
      if (run && slider) {
        slider.next();
      }
    }, 4000); //Tiempo que se queda estatico
  }

  var slider = new KeenSlider(sliderElement, {
    loop: true,
    duration: 2000, //Tiempo que tarda la animacion
    dragStart: () => {
      autoplay(false);
    },
    dragEnd: () => {
      autoplay(true);
    }
  });

  sliderElement.addEventListener("mouseover", () => {
    autoplay(false);
  });
  sliderElement.addEventListener("mouseout", () => {
    autoplay(true);
  });
  autoplay(true);

  function updateClasses(instance) {
    var slide = instance.details().relativeSlide;
    var arrowLeft = document.getElementById("arrow-left");
    var arrowRight = document.getElementById("arrow-right");
    slide === 0 ? arrowLeft.classList.add("arrow--disabled") : arrowLeft.classList.remove("arrow--disabled");
    slide === instance.details().size - 1 ? arrowRight.classList.add("arrow--disabled") : arrowRight.classList.remove("arrow--disabled");

    var dots = document.querySelectorAll(".dot");
    dots.forEach(function(dot, idx) {
      idx === slide ? dot.classList.add("dot--active") : dot.classList.remove("dot--active");
    });
  }



  