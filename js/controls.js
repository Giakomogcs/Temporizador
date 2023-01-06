export default function Controls({
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
}){

  function play() {
    ButtonPlay.classList.toggle('hide')
    ButtonPause.classList.toggle('hide')
    ButtonSet.classList.add('hide')
    ButtonStop.classList.remove('hide')
  }

  function pause() {
    ButtonPlay.classList.toggle('hide')
    ButtonPause.classList.toggle('hide')
  }

  function reset(){
    ButtonPlay.classList.toggle('hide')
    ButtonPause.classList.toggle('hide')
    ButtonSet.classList.toggle('hide')
    ButtonStop.classList.toggle('hide')
  }

  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
  
    if(!newMinutes) {
      return false
    }

    return newMinutes
  }


  return {
    reset,
    play,
    pause,
    stop,
    getMinutes,
  }
}


