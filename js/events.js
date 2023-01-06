import { 
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonSoundOn,
  ButtonSoundOff,
} from "./elements.js"

export default function({controls, timer, sound}) {
 
  ButtonSoundOn.addEventListener('click', function() {
    ButtonSoundOn.classList.add('hide')
    ButtonSoundOff.classList.remove('hide')
    sound.bgAudio.pause()
  })
  
  
  ButtonSoundOff.addEventListener('click', function() {
    ButtonSoundOn.classList.remove('hide')
    ButtonSoundOff.classList.add('hide')
    sound.bgAudio.play()
  })
  
  
  ButtonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })
  
  ButtonPause.addEventListener('click', function() {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })
  
  ButtonStop.addEventListener('click', resetAll)
  
  function resetAll(){
    controls.reset()
    timer.reset()
    sound.pressButton()
  }
  
  
  ButtonSet.addEventListener('click', function(){
    let newMinutes = controls.getMinutes()
    
    if(!newMinutes) {
      timer.reset()
      return
    }
    
  
    timer.updateDisplay(newMinutes,0)
    timer.updateMinutes(newMinutes)
  })
}