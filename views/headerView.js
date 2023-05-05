import View from './View';

class HeaderView extends View {
  _parentElement = document.querySelector('header');
  _body = document.querySelector('body');

  //   constructor() {
  //     super();
  //     this.render();
  //   }

  addHandlerClickAgain(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.again');
      if (!btn) return;
      const number = this.querySelector('.number');
      number.textContent.trim() != '?' ? handler() : '';
    });
  }

  _innerMarkup() {
    const markup = `<h1>Guess My Number!</h1>
    <p class="between">(Between 1 and 20)</p>
    <button class="btn again">Again!</button>
    <div class="number">${
      this._data.tryNum != 0 ? 20 - this._data.tryNum : '?'
    }</div>`;

    return markup;
  }

  changeBgColor() {
    this._body.style.backgroundColor = '#60b347';
  }

  defaultBgColor() {
    this._body.style.backgroundColor = '#222';
  }
}

export default new HeaderView();
