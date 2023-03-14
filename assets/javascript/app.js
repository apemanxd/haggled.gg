class _app {
  id = 0;
  videoElement = null;
  audioElement = null;
  musicVolume = 0.2;
  musicFadeIn = 4000;
  skippedIntro = false;
  backgroundToggler = false;
  shouldIgnoreVideo = false;
  effects = [
    "bounce",
    "flash",
    "pulse",
    "rubberBand",
    "shake",
    "swing",
    "tada",
    "wobble",
    "jello",
  ];
  brandDescription = [
    "apeman#0001",
    "u mad!",
    "♿YOU",
    "apes together strong",
    "( ͡~ ͜ʖ ͡°)",
    "I'm just better",
    "𝕡𝕣𝕚𝕟𝕔𝕚𝕡𝕖♔",
    "<a href='http://www.apeman.gg'>apeman.gg</a>",
  ];

  titleChanger = (text, delay) => {
    if (!text) return;

    delay = delay || 500;

    let counter = 0;

    setInterval(() => {
      if (counter < text.length) document.title = text[counter++];
      else document.title = text[(counter = 0)];
    }, delay);
  };

  iconChanger = (urls, delay) => {
    if (!urls) return;

    delay = delay || 2000;

    let counter = 0;

    setInterval(() => {
      if (counter < urls.length) {
        const link =
          document.querySelector("link[rel*='icon']") ||
          document.createElement("link");

        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = urls[counter];

        document.getElementsByTagName("head")[0].appendChild(link);
      } else counter = 0;

      ++counter;
    }, delay);
  };
}

const app = new _app();
