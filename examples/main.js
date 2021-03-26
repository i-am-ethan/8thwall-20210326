AFRAME.registerComponent("next-button", {
  init: function () {
    const animationList = ["idle", "pockets", "hiphop", "chicken"];

    const model = document.getElementById("model");
    const nextButton = document.getElementById("nextbutton");

    let idx = 1; // Start with the 2nd animation because the model starts with idle animation
    const nextAnimation = () => {
      model.setAttribute("animation-mixer", {
        clip: animationList[idx],
        loop: "repeat",
      });
      idx = (idx + 1) % animationList.length;
    };

    nextButton.onclick = nextAnimation; // Switch to the next animation when the button is pressed.
  },
});
