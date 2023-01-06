import Timer from "./timer.js"
import Controls from "./controls.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonSoundOn,
  ButtonSoundOff,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"


const controls = Controls({
  ButtonPlay,
  ButtonPause,
  ButtonSet,
  ButtonStop,
  ButtonSoundOn,
  ButtonSoundOff,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  ButtonSoundOn,
  resetControls: controls.reset,
})

const sound = Sound()

Events({controls, timer, sound})


