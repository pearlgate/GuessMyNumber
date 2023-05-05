import View from './View';

class RightView extends View {
  _parentElement = document.querySelector('.right');

  //   constructor() {
  //     super();
  //     this.render();
  //   }

  _innerMarkup() {
    const markup = `<p class="message">${this._data.message}</p>
    <p class="label-score"><span>💯 Score:</span> <span class="score">${
      20 - this._data.tryNum
    }</span></p>
    <p class="label-highscore">
      <span>🥇 Highscore:</span><span class="highscore">${
        this._data.highScore
      }</span>
    </p>`;
    return markup;
  }
}

export default new RightView();
