import { BACKGROUND_COLOURS, TEXT_COLOURS, TEXT_STYLES } from "./constant.js";
import { formatMessage, logToFile } from "./utils.js";

interface ConfigOptions {
    textColour?: keyof typeof TEXT_COLOURS;
    errorColour?: keyof typeof TEXT_COLOURS;
    warnColour?: keyof typeof TEXT_COLOURS;
    includeLabel?: boolean;
    includeTimeStamp?: boolean;
    timeStampFormat?: 'unix' | 'iso' | string;
    recordFile?: boolean;
    uppercaseLabel?: boolean;
}

class LogMux {
    private config: Required<ConfigOptions>;

    constructor(config: ConfigOptions = {}) {
        this.config = {
            errorColour: TEXT_COLOURS[config.errorColour ?? 'red'],
            textColour: TEXT_COLOURS[config.textColour ?? 'white'],
            warnColour: TEXT_COLOURS[config.warnColour ?? 'yellow'],
            includeLabel: config.includeLabel ?? true,
            includeTimeStamp: config.includeTimeStamp ?? true,
            timeStampFormat: config.timeStampFormat ?? 'unix',
            recordFile: config.recordFile ?? false,
            uppercaseLabel: config.uppercaseLabel ?? false,
        };
    }

    Log = async (message: any, label: string = "INFO"): Promise<void> => {
        let log: string = "";

        if (this.config.includeTimeStamp) {
            if (this.config.timeStampFormat === "unix") {
                log += `${Date.now()} `;
            } else if (this.config.timeStampFormat === "iso") {
                log += `${new Date().toISOString()} `;
            }
        }

        if (this.config.includeLabel) {
            if (this.config.uppercaseLabel) {
                log += `[${label.toUpperCase()}] - `;
            } else {
                log += `[${label.toLowerCase()}] - `;
            }
        }

        log += `${formatMessage(message)}`;
        const finalLog: string = `${this.config.textColour}` + log;
        if (this.config.recordFile) {
            await logToFile(log);
        }
        console.log(finalLog);
    };

    ErrorLog = async(message :any, label :string = "ERROR") :Promise<void> => {
        let log :string = "";
    
        if (this.config.includeTimeStamp) {
          if (this.config.timeStampFormat === "unix") {
            log += `${Date.now()} `;
          } else if (this.config.timeStampFormat === "iso") {
            log += `${new Date().toISOString()} `;
          }
        }
    
        if (this.config.includeLabel) {
          log += `[${label}] - `;
        }
    
        log += `${formatMessage(message)}`;
        const finalLog = `${this.config.errorColour}` + log;
        if (this.config.recordFile) {
          await logToFile(log);
        }
        console.log(finalLog);
      };

       WarnLog = async(message :any, label :string = "WARNING") :Promise<void> => {
          let log :string = "";
      
          if (this.config.includeTimeStamp) {
            if (this.config.timeStampFormat === "unix") {
              log += `${Date.now()} `;
            } else if (this.config.timeStampFormat === "iso") {
              log += `${new Date().toISOString()} `;
            }
          }
      
          if (this.config.includeLabel) {
            log += `[${label}] - `;
          }
      
          log += `${formatMessage(message)}`;
          const finalLog = `${this.config.warnColour}` + log;
          if (this.config.recordFile) {
            await logToFile(log);
          }
          console.log(finalLog);
        };
}

export default LogMux