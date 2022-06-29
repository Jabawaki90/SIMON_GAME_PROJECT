// const playerDetail ={level:[]}

// const leveling = (i)=>{
    

// }

// const answer = (i)=>{

//     const latest = [];
//     latest.push(i.target.id)
//     if(latest === playerDetail.level[playerDetail.level.length -1]){
//         console.log('true')
//     }else{
//         console.log('false')
//     }
//     console.log(latest)
// }

// const newRandomButton = ()=>{
//     const random = Math.floor(Math.random()*4)
//     let randomButton = $('.btn')[random].id
//     playerDetail.level.push(randomButton)
//     $(`#${randomButton}`).addClass('pressed')
//     setTimeout(()=> $(`#${randomButton}`).removeClass('pressed'), 500)
    
// }

// const gameStart = (i)=>{
//     if(i.key === "a"){
//         if(playerDetail.level.length===0){
//         $('h1').text('Game Start')
//         newRandomButton()
//         }else{
//             return
//         }
//     }else{
//         return
//     }
// }

// const buttonPressed = (i)=>{
//     $(`#${i.target.id}`).addClass('pressed')
//     setTimeout(()=>$(`#${i.target.id}`).removeClass('pressed'), 100)
// }

// const selectColor = (i)=>{
//     switch (i.target.id) {
//         case "green":
//             console.log('green')
//             buttonPressed(i)
//             answer(i)
//             console.log(playerDetail.level)
//             break;
//         case "red":
//             console.log('red')
//             buttonPressed(i)
//             answer(i)
//             console.log(playerDetail.level)
//             break
//         case 'yellow':
//             console.log('yellow')
//             buttonPressed(i)
//             answer(i)
//             console.log(playerDetail.level)
//             break
//         case 'blue':
//             console.log('blue')
//             buttonPressed(i)
//             answer(i)
//             console.log(playerDetail.level)
//             break
//         default:
//             break;
//     }
// }



// $(document).on('keydown', (e)=> gameStart(e))
// $(document).on('click', (e)=> {selectColor(e)})

// console.log()

const level = []
const nextLevel = []

const randomGenerator = ()=>{
     const random = Math.floor(Math.random()*4)
     return random
}

const buttonClickAnimation =(i)=>{
    $(`#${i}`).addClass('pressed')
    const remove = ()=> $(`#${i}`).removeClass('pressed')
    setTimeout(remove, 100)
}

const buttonAutoClickAnimation = (i)=>{
    i.removeClass('pressed');
}

const initialButton = (i)=>{
    const firstButtonColor = $('.btn')[i].id
    const firstColor = [firstButtonColor]
    const style = $(`#${firstButtonColor}`).addClass('pressed')
    setTimeout(()=> buttonAutoClickAnimation(style), 300)
    level.push(firstColor)
    console.log(level)
}

const startGame = (i)=>{
    const randomIndex = randomGenerator()
    if(i==="a" && level.length ===0){
        $('h1').text('game start')
        initialButton(randomIndex)
    }else{
        return
    }
    
}

const compare = ()=>{

    
    
}

const addNewColorArray = (color)=>{
    nextLevel.push(color)
}

const levelingUp = (input)=>{
    switch (input) {
        case 'green':
            buttonClickAnimation(input)
            nextLevel.push(input)
            console.log(input)
            console.log(nextLevel)
            break;
        case 'red':
            buttonClickAnimation(input)
            nextLevel.push(input)
            console.log(input)
            console.log(nextLevel)
            break;
        case 'yellow':
            buttonClickAnimation(input)
            nextLevel.push(input)
            console.log(input)
            console.log(nextLevel)
            break;
        case 'blue':
            buttonClickAnimation(input)
            nextLevel.push(input)
            console.log(input)
            console.log(nextLevel)
            break;
        default:
            break;
    }
}


$(document).on('keydown',(e)=>startGame(e.key))
$('.btn').on('click', (e)=> levelingUp(e.target.id))

console.log(nextLevel)