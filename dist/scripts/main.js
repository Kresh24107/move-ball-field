'use strict';

const field = document.getElementById('field');
const ball = document.getElementById('ball');
const minTop = 0;
const minLeft = 0;
const maxTop = field.clientHeight - ball.clientHeight;
const maxLeft = field.clientWidth - ball.clientWidth;

field.onclick = function(e) {
  const evt = field.event || e;
  let leftP = evt.clientX - field.offsetLeft
  - field.clientLeft - (ball.clientWidth / 2);
  let topP = evt.clientY - field.offsetTop
  - field.clientTop - (ball.clientHeight / 2);

  if (leftP < minLeft) {
    leftP = minLeft;
  }
  if (leftP > maxLeft) {
    leftP = maxLeft;
  }
  ball.style.left = leftP + 'px';

  if (topP < minTop) {
    topP = minTop;
  }
  if (topP > maxTop) {
    topP = maxTop;
  }
  ball.style.top = topP + 'px';
};
