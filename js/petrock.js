var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function () {
  $(".button")
    .on("mouseenter", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".background-circle").css({
        top: relY,
        left: relX
      });
    })
    .on("mouseout", function (e) {
      var parentOffset = $(this).offset(),
        relX = e.pageX - parentOffset.left,
        relY = e.pageY - parentOffset.top;
      $(this).find(".background-circle").css({
        top: relY,
        left: relX
      });
    });
});

// Set image to cover
function drawImageProp(ctx, img, x, y, w, h, offsetX, offsetY) {
  if (arguments.length === 2) {
    x = y = 0;
    w = ctx.canvas.width;
    h = ctx.canvas.height;
  }
  offsetX = typeof offsetX === "number" ? offsetX : 0.5;
  offsetY = typeof offsetY === "number" ? offsetY : 0.5;
  if (offsetX < 0) offsetX = 0;
  if (offsetY < 0) offsetY = 0;
  if (offsetX > 1) offsetX = 1;
  if (offsetY > 1) offsetY = 1;
  var iw = img.width,
    ih = img.height,
    r = Math.min(w / iw, h / ih),
    nw = iw * r,
    nh = ih * r,
    cx,
    cy,
    cw,
    ch,
    ar = 1;
  if (nw < w) ar = w / nw;
  if (Math.abs(ar - 1) < 1e-14 && nh < h) ar = h / nh; // updated
  nw *= ar;
  nh *= ar;
  cw = iw / (nw / w);
  ch = ih / (nh / h);
  cx = (iw - cw) * offsetX;
  cy = (ih - ch) * offsetY;
  if (cx < 0) cx = 0;
  if (cy < 0) cy = 0;
  if (cw > iw) cw = iw;
  if (ch > ih) ch = ih;
  ctx.drawImage(img, cx, cy, cw, ch, x, y, w, h);
}

// Apply interaction to all elements with this class
$(".height-statue-webp").each(function (index) {
  const canvas = $(this).find("canvas")[0];
  const embed = $(this).find(".embed")[0];
  const context = canvas.getContext("2d");
  function setCanvasSize() {
    canvas.width = embed.offsetWidth;
    canvas.height = embed.offsetHeight;
  }
  setCanvasSize();
  const frameCount = $(this).attr("total-frames");
  const urlStart = $(this).attr("url-start");
  const urlEnd = $(this).attr("url-end");
  const floatingZeros = $(this).attr("floating-zeros");
  const currentFrame = (index) =>
    `${urlStart}${(index + 1)
      .toString()
      .padStart(floatingZeros, "0")}${urlEnd}`;
  const images = [];
  const imageFrames = {
    frame: 0
  };
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  gsap.to(imageFrames, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
      trigger: $(this),
      start: $(this).attr("scroll-start"),
      end: "+2000 end",
      scrub: 0
      // markers: true
    },
    onUpdate: render
  });
  images[0].onload = render;
  function render() {
    context.clearRect(0, 0, embed.offsetWidth, embed.offsetHeight);
    drawImageProp(
      context,
      images[imageFrames.frame],
      0,
      0,
      embed.offsetWidth,
      embed.offsetHeight,
      0.5,
      0.5
    );
  }

  // Update canvas size & animation state
  let iOS = !!navigator.platform.match(/iPhone|iPod|iPad/);
  let resizeTimer;
  $(window).on("resize", function (e) {
    if (iOS) {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        setCanvasSize();
        render();
      }, 250);
    } else {
      setCanvasSize();
      render();
    }
  });
});

$(".height-about-and-our-story").each(function (index) {
  const canvas = $(this).find("canvas")[0];
  const embed = $(this).find(".roche")[0];
  const context = canvas.getContext("2d");
  function setCanvasSize() {
    canvas.width = embed.offsetWidth;
    canvas.height = embed.offsetHeight;
  }
  setCanvasSize();
  const frameCount = $(this).attr("total-frames");
  const urlStart = $(this).attr("url-start");
  const urlEnd = $(this).attr("url-end");
  const floatingZeros = $(this).attr("floating-zeros");
  const currentFrame = (index) =>
    `${urlStart}${(index + 1)
      .toString()
      .padStart(floatingZeros, "0")}${urlEnd}`;
  const images = [];
  const imageFrames = {
    frame: 0
  };
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  gsap.to(imageFrames, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    repeat: -1,
    yoyo: true,
    duration: 3,
    // scrollTrigger: {
    //   trigger: $(this),
    //   start: $(this).attr("scroll-start"),
    //   end: "+1500 end",
    //   scrub: 0
    //   // markers: true
    // },
    onUpdate: render
  });
  images[0].onload = render;
  function render() {
    context.clearRect(0, 0, embed.offsetWidth, embed.offsetHeight);
    drawImageProp(
      context,
      images[imageFrames.frame],
      0,
      0,
      embed.offsetWidth,
      embed.offsetHeight,
      0.5,
      0.5
    );
  }
});

$(".height-about-and-about-us").each(function (index) {
  const canvas = $(this).find("canvas")[0];
  const embed = $(this).find(".about-us")[0];
  const context = canvas.getContext("2d");
  function setCanvasSize() {
    canvas.width = embed.offsetWidth;
    canvas.height = embed.offsetHeight;
  }
  setCanvasSize();
  const frameCount = $(this).attr("total-frames");
  const urlStart = $(this).attr("url-start");
  const urlEnd = $(this).attr("url-end");
  const floatingZeros = $(this).attr("floating-zeros");
  const currentFrame = (index) =>
    `${urlStart}${(index + 1)
      .toString()
      .padStart(floatingZeros, "0")}${urlEnd}`;
  const images = [];
  const imageFrames = {
    frame: 0
  };
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
    images.push(img);
  }
  gsap.to(imageFrames, {
    frame: frameCount - 1,
    snap: "frame",
    repeat: -1,
    duration: 11,
    ease: "none",
    // scrollTrigger: {
    //   trigger: $(this),
    //   start: $(this).attr("scroll-start"),
    //   end: "+1500 end",
    //   scrub: 0
    //   // markers: true
    // },
    onUpdate: render
  });
  images[0].onload = render;
  function render() {
    context.clearRect(0, 0, embed.offsetWidth, embed.offsetHeight);
    drawImageProp(
      context,
      images[imageFrames.frame],
      0,
      0,
      embed.offsetWidth,
      embed.offsetHeight,
      0.5,
      0.5
    );
  }
});

$("#strategy01").on("inview", function (event, isInView) {
  if (isInView) {
    document.querySelector(".number-pagination").textContent = "01";
    $("#lottie-1").css("display", "block");
  } else {
  }
});

$("#strategy02").on("inview", function (event, isInView) {
  if (isInView) {
    document.querySelector(".number-pagination").textContent = "02";
  } else {
  }
});
$("#strategy03").on("inview", function (event, isInView) {
  if (isInView) {
    document.querySelector(".number-pagination").textContent = "03";
  } else {
  }
});
$("#strategy04").on("inview", function (event, isInView) {
  if (isInView) {
    document.querySelector(".number-pagination").textContent = "04";
  } else {
  }
});

let cmsItem = $(".full-page-product-strategy");
// let cmsItem = $(".full-page-product-strategy");
$(".wrapper-strategy").each(function (index) {
  let targetItem = cmsItem.eq(index);

  // ON SCROLL INTO VIEW
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "-100 top",
      end: "bottom top",
      toggleActions: "restart none none reverse"
    }
  });
  // Apply interaction to all items except the first
  // (index !== 0)

  if (true) {
    tl.from(
      targetItem.find(".block-strategy"),
      {
        duration: 0.5,
        y: 200,
        opacity: 0
      },
      0
    );
  }

  // ON - WHILE SCROLLING
  let tlScrub = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "+300 top",
      end: "bottom top",
      scrub: 1

      // markers: true
    }
  });
});

let cmsItemSide = $(".side-item");
// let cmsItem = $(".full-page-product-strategy");
$(".wrapper-section-grid").each(function (index) {
  let targetItem = cmsItemSide.eq(index);

  // ON SCROLL INTO VIEW
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "-500 top",
      end: "bottom top",
      toggleActions: "restart none none reverse"
    }
  });
  // Apply interaction to all items except the first
  // (index !== 0)

  if (true) {
    tl.from(
      targetItem.find(".word-wrapper"),
      {
        duration: 0.5,
        y: 200,
        opacity: 0
      },
      0
    );
  }

  // ON - WHILE SCROLLING
  let tlScrub = gsap.timeline({
    scrollTrigger: {
      trigger: $(this),
      start: "+100 top",
      end: "bottom top"
      // scrub: 1

      // markers: true
    }
  });
});

let venture = $("#heightventure");
let tlventure = gsap.timeline({
  scrollTrigger: {
    trigger: "#heightventure",
    start: "-400 top",
    end: "bottom top",
    toggleActions: "restart none none reverse"
  }
});
tlventure.from(
  venture.find(".container"),
  {
    duration: 0.5,
    y: 100,
    opacity: 0,
    markers: true
  },
  0
);


}
/*
     FILE ARCHIVED ON 10:07:07 Mar 31, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:49:32 Nov 24, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 80.717
  exclusion.robots: 0.214
  exclusion.robots.policy: 0.193
  cdx.remote: 0.147
  esindex: 0.017
  LoadShardBlock: 48.486 (3)
  PetaboxLoader3.datanode: 68.214 (4)
  load_resource: 87.2
  PetaboxLoader3.resolve: 45.071
*/