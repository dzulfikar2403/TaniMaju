const collab = document.querySelector('.collab');

const data = ['Taniku Mart','Sawah Sejahtera','GreenHarvest'];

const collabComponent = (data) => {
  return `
      <p>${data}</p>
  `
}

collab.innerHTML = data.map(el => collabComponent(el)).join('')