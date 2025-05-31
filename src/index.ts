import { BACKGROUND_COLOURS, TEXT_COLOURS, TEXT_STYLES } from "./constant";

interface ConfigOptions {
  color?: keyof typeof TEXT_COLOURS;
  errorColour ?: keyof typeof TEXT_COLOURS;
  infoColour ?: keyof typeof TEXT_COLOURS;
  warnColour ?: keyof typeof TEXT_COLOURS;
  backgroundColor?: keyof typeof BACKGROUND_COLOURS;
  textStyle?: (keyof typeof TEXT_STYLES)[]; // allow multiple styles
  logRecord?: boolean;
  
}

class LogMux{
    private config : ConfigOptions
    constructor(option : ConfigOptions = {}){
        this.config = {
            color: 
        }
    }
}