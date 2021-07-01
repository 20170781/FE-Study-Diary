import Box from "./Box.js";

export default class ResultSection {
  constructor({ $target, data }) {
    this.data = data;

    this.divSection = document.createElement("div");
    this.divSection.className = "result-section";

    $target.appendChild(this.divSection);
    this.target = $target;
    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.divSection.innerHTML = "";

    const boxContainer = document.createElement("div");
    boxContainer.className = "result-section__container";

    //h3.month 구현 필요

    const boxList = document.createElement("div");
    boxList.className = "result-section__boxes";

    this.data.map((box) => {
      new Box({
        $target: boxList,
        data: box,
      });
    });

    boxContainer.appendChild(boxList);
    this.divSection.appendChild(boxContainer);
  }
}
