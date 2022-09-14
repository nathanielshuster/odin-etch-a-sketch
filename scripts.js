function createGrid() {
  let container = document.querySelector('.grid-container');

  for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'flex-container');
    
    for (let i = 0; i < 16; i++) {
      const col = document.createElement('div');
      col.setAttribute('class', 'box');
      div.appendChild(col);
    }

    container.appendChild(div);
  }
}

createGrid();