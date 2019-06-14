'use strict';

const field = document.getElementById('field');
const ball = document.getElementById('ball');
const minTopPosition = 0;
const minLeftPosition = 0;
const maxTopPosition = field.clientHeight - ball.clientHeight;
const maxLeftPosition = field.clientWidth - ball.clientWidth;

field.onclick = function() {
  const checkedEvent = field.event || event;
  let leftPosition = checkedEvent.clientX - field.offsetLeft
    - field.clientLeft - (ball.clientWidth / 2);
  let topPosition = checkedEvent.clientY - field.offsetTop
    - field.clientTop - (ball.clientHeight / 2);

  if (leftPosition < minLeftPosition) {
    leftPosition = minLeftPosition;
  }
  if (leftPosition > maxLeftPosition) {
    leftPosition = maxLeftPosition;
  }
  ball.style.left = leftPosition + 'px';

  if (topPosition < minTopPosition) {
    topPosition = minTopPosition;
  }
  if (topPosition > maxTopPosition) {
    topPosition = maxTopPosition;
  }
  ball.style.top = topPosition + 'px';
};
