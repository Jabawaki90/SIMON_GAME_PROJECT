const colors = ['green','red','yellow','blue'];
let sequence = [];
let humanSequence = [];
let level =0;




const randomColor =()=>{
  let random = Math.floor(Math.random()*4)
  let color = colors[random];
  return color
}


const newRoundAnim = ()=>{
  sequence.push(randomColor());
  for(let i =0; i<sequence.length; i++){
    const button = $(`#${sequence[i]}`).addClass('pressed');
    const audio = new Audio(`./sounds/${sequence[i]}.mp3`)
    audio.play()
    setTimeout(()=> button.removeClass('pressed'), 500)

  }

}

const gameStart=()=>{
  let latestLevel = level +1
  $(document).on('keydown', (e)=> {
    if(e.key === 'a'){
    $('h1').text(`Level `+ latestLevel)
    newRoundAnim()
  }
  console.log(sequence.length)
} )

}

const clickAnim = ()=>{
  $('.btn').on('click', (e)=> {
    humanSequence.push(e.target.id);
    console.log(`hSequence: `+humanSequence)
    if(e.target.id){
      const audio = new Audio(`./sounds/${e.target.id}.mp3`)
      audio.play()
      const button = $(`#${e.target.id}`).addClass('pressed')
      setTimeout(()=> button.removeClass('pressed'), 100)
      compare()
    }else{
      return
    }
  }
  )
}

const compare = ()=>{
  const latestSequence = []
  for(let i=0; i<sequence.length; i++){
    if(sequence[i]===humanSequence[i]){
      latestSequence.push(humanSequence[i])
      if(sequence.length === humanSequence.length){
        sequence.push(latestSequence);
        humanSequence = []
        console.log('proceed next level')
      }else{
        return;
      }
    }else{
      console.log('game over, restart')
    }
  }
 
}

const playerClick = ()=>{
    clickAnim()
    // compare()
    console.log(`sequence: ${sequence}`)
    console.log(`humanSequence: ${humanSequence}`)
}



gameStart()
playerClick()

