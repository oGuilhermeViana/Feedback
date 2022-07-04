const notes = document.querySelectorAll('.note li')
const noteOf = document.querySelector('p.noteOf')
const box = document.querySelector('.box')
const thanks = document.querySelector('.thanks')

let feed = 0

const handleClick = (nota) => {
  for (const note of notes) {
    note.classList.remove('selected');
  }
  feed = nota

  notes[nota - 1].classList.add('selected')
}

const handleSubmit = () => {
  noteOf.innerText = 'You selected ' + feed + ' of 5'
  
  box.classList.add('show');
  thanks.classList.add('show');
}



console.log(noteOf)
console.log(notes)
console.log(box)
console.log(thanks)