const socket = io();

function main(evt) {
  const player1 = document.querySelector('.racer.player1');
  const player2 = document.querySelector('.racer.player2');

  document.querySelector('.player1Btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    socket.emit('click', 'player1');
  });

  document.querySelector('.player2Btn').addEventListener('click', (evt) => {
    evt.preventDefault();
    socket.emit('click', 'player2');
  });

  socket.on('move', (data) => {
    if (data === 'player1') {
      const left = player1.style['left'].replace('px', '');
      const newLeft = Number(left) + 5;
      player1.style['left'] =  newLeft + 'px';
    }

    if (data === 'player2') {
      const left = player2.style.left.replace('px', '');
      const newLeft = Number(left) + 5;
      player2.style.left = newLeft + 'px';
    }
  });
}

 document.addEventListener('DOMContentLoaded', main);