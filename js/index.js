/* Problem A: Randomize three integers, each between 0 and 255 (inclusive) */
/* Problem B: Apply an rgb(#,#,#) value to the background-color of the body */
/* Problem C: Capture the click of a button, do something when it happens */ 

// FUNCTION
let setRandomBackgroundColour = () => {

  let colourR = Math.floor(Math.random() * 256)
  let colourG = Math.floor(Math.random() * 256)
  let colourB = Math.floor(Math.random() * 256)

  document.querySelector('body').style.backgroundColor = `rgb(${colourR},${colourG},${colourB})`

  // ADVANCED "FUN":
  // Applying the YIQ contrast method for text colours: https://en.wikipedia.org/wiki/YIQ
  //
  // let fgColour = ((colourR*0.299 + colourG*0.587 + colourB*0.114) > 186) ? `black` : `white`
  // document.querySelector('body').style.color = fgColour
}


// EVENT LISTENER
// 1. Which element are we listening to?
//        document.querySelector('.randomize')
// 2. What are we listening for?
//        'click'
// 3. What do we do when it happens?
//        setRandomBackgroundColour


document.querySelector('.randomize').addEventListener('click', setRandomBackgroundColour)
