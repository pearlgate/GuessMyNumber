import View from './View';

class LeftView extends View {
  _parentElement = document.querySelector('.left');
  _btn;
  _input;

  //   constructor() {
  //     super();
  //     this.render();
  //   }

  _innerMarkup() {
    const markup = `<input type="number" class="guess" />
    <button class="btn check">Check!</button>`;

    return markup;
  }

  addHandlerUpdateInputValue(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.check');
      if (!btn) return;
      this._input = e.target.parentElement.querySelector('.guess');
      let inputValue = this._input.value;
      if (!inputValue) inputValue = 0;
      handler(inputValue);
    });
  }

  _useInputValue(handler) {}
}

export default new LeftView();
