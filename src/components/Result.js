import Box from "./Box.js";

export default class ResultSection {
  constructor({ $target, data }) {
    this.data = data;

    this.divSection = document.createElement("div");
    this.divSection.className = "result-section";

    $target.appendChild(this.divSection);

    this.render();
  }

  setState(data) {
    this.data = data;
    this.render();
  }

  render() {
    this.divSection.innerHTML = "";

    const keyData = Object.keys(this.data);
    keyData.map((key) => {
      let monthData = this.data[key];
      const boxContainer = document.createElement("div");
      boxContainer.className = "result-section__container";

      //h3.month
      const h3Month = document.createElement("h3");
      h3Month.className = "result-section__month";

      if (key === "검색 결과") {
        h3Month.innerText = key;
      } else {
        h3Month.innerText = `${key.slice(0, 4)}년 ${key.slice(5, 7)}월`;
      }

      //boxes
      const boxList = document.createElement("div");
      boxList.className = "result-section__boxes";

      monthData.map((box) => {
        new Box({
          $target: boxList,
          data: box,
        });
      });

      boxContainer.appendChild(h3Month);
      boxContainer.appendChild(boxList);
      this.divSection.appendChild(boxContainer);
    });
  }
}
