export default class View {
  _data;

  _clear() {
    this._parentElement.innerHTML = '';
  }

  render(data = {}) {
    this._data = data;
    this._clear();
    this._parentElement.innerHTML = this._innerMarkup();
  }

  update(data) {
    this._data = data;
    const newMarkup = this._innerMarkup();

    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));

    const curElements = Array.from(this._parentElement.querySelectorAll('*'));
    //  console.log(newElements, curElements);

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      //   console.log(newEl, curEl, newEl.isEqualNode(curEl));

      //if (!newEl.isEqualNode(curEl)) console.log(newEl.firstChild?.nodeValue);

      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue != null) {
        curEl.textContent = newEl.textContent;
      }

      //   if (
      //     !newEl.isEqualNode(curEl) &&
      //     newEl.firstChild?.nodeValue.trim() !== ''
      //   ) {
      //     curEl.textContent = newEl.textContent;
      //   }

      //   if (!newEl.isEqualNode(curEl)) {
      //     Array.from(newEl.attributes).forEach(attr =>
      //       curEl.setAttribute(attr.name, attr.value)
      //     );
      //   }
    });
  }
}
