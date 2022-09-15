function createGrid() {
  let container = document.querySelector('.grid-container');

  for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'flex-container');
    
    for (let i = 0; i < 16; i++) {
      const col = document.createElement('div');
      col.setAttribute('class', 'box');
      col.addEventListener('mouseover', changeColor);
      div.appendChild(col);
    }

    container.appendChild(div);
  }
}

function changeColor(e) {
  let box = e.target;
  box.style.backgroundColor = 'purple';
}

function updateGrid(e) {
  let pixels = e.target.value;
  let container = document.querySelector('.grid-container');
  container.textContent = '';
  
  while (container.firstChild) {
    container.removeChild('.flex-container');
  }
  
  for (let i = 0; i < pixels; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'flex-container');
    
    for (let i = 0; i < pixels; i++) {
      const col = document.createElement('div');
      col.setAttribute('class', 'box');
      col.addEventListener('mouseover', changeColor);
      div.appendChild(col);
    }

    container.appendChild(div);
  }
}

createGrid();

const slider = document.querySelector('.slider');
slider.addEventListener('change', updateGrid)