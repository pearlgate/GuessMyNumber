//'use strict';
import * as model from './model';
import headerView from './views/headerView';
import leftView from './views/leftView';
import rightView from './views/rightView';
import { SUCCESS } from './config.js';

console.log(model.state.goal);

const controlInputValue = function (curNum) {
  model.setCurNumAndMessage(curNum);
  // console.log(model.state.results);
  if (model.state.results.message == `${SUCCESS}`) {
    headerView.update(model.state.results);
    headerView.changeBgColor();
    console.log(model.state);
  }

  rightView.update(model.state.results);
};

const renders = function () {
  headerView.render(model.state.results);
  leftView.render();
  rightView.render(model.state.results);
};

const controlAgainBtn = function () {
  model.increaseAgainNum();
  //  console.log(model.state);

  model.updateState();
  headerView.defaultBgColor();
  renders();
};

const init = function () {
  leftView.addHandlerUpdateInputValue(controlInputValue);
  headerView.addHandlerClickAgain(controlAgainBtn);
};

init();
renders();
