import { FAIL_LOW, FAIL_HIGH, SUCCESS, INITIAL } from './config.js';

const makeGoal = function () {
  return Math.floor(Math.random() * 20) + 1;
};

export const state = {
  goal: makeGoal(),
  curNum: 0,
  results: {
    tryNum: 0,
    highScore: 0,
    againNum: 0,
    message: `${INITIAL}`,
  },
};

export function setCurNumAndMessage(curNum) {
  state.curNum = curNum;
  state.results.tryNum++;

  setMessage(state.goal, curNum);
}

function setMessage(goal, cur) {
  goal > cur
    ? (state.results.message = `${FAIL_LOW}`)
    : goal == cur
    ? (state.results.message = `${SUCCESS}`)
    : (state.results.message = `${FAIL_HIGH}`);
  if (state.results.message == `${SUCCESS}`)
    setHighScore(state.results.highScore, state.results.tryNum);
}

export function increaseAgainNum() {
  state.results.againNum++;
}

function setHighScore(prev, cur) {
  prev == 0
    ? (state.results.highScore = 20 - cur)
    : prev >= 20 - cur
    ? (state.results.highScore = prev)
    : (state.results.highScore = 20 - cur);
}

export function updateState() {
  state.goal = makeGoal();
  state.curNum = 0;
  state.results.tryNum = 0;
  state.results.message = `${INITIAL}`;
}
