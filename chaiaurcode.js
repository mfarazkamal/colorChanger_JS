const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      default:
        body.style.backgroundColor = 'red';
        break;
    }

    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
  });
});