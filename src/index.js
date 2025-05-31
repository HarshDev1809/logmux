const { TEXT_COLOURS } = require("./constanst");
const { formatMessage, logToFile } = require("./utils");

class LogMux {
  constructor(config = {}) {
    this.config = {
      errorColor:TEXT_COLOURS[config.errorColor] ?? TEXT_COLOURS.red,
      textColor: TEXT_COLOURS[config.textColor] ?? TEXT_COLOURS.white,
      warnColor: TEXT_COLOURS.yellow,
      includeLabel: true,
      includeTimeStamp: true,
      timeStampFormat: "unix",
      recordFile: false,
      uppercaseLabel : config.uppercaseLabel && true
    };
  }

  Log = (message, label = "INFO") => {
    let log = "";

    if (this.config.includeTimeStamp) {
      if (this.config.timeStampFormat === "unix") {
        log += `${Date.now()} `;
      } else if (this.config.timeStampFormat === "iso") {
        log += `${new Date().toISOString()} `;
      }
    }

    if (this.config.includeLabel) {
        if(this.config.uppercaseLabel){
            log += `[${label.toUpperCase()}] - `;
        }else{
            log += `[${label.toLowerCase()}] - `;
        }
    }

    log += `${formatMessage(message)}`;
    const finalLog = `${this.config.textColor}` + log;
    if (this.config.recordFile) {
      logToFile(log);
    }
    console.log(finalLog);
  };

   ErrorLog = (message, label = "ERROR") => {
    let log = "";

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
    const finalLog = `${this.config.errorColor}` + log;
    if (this.config.recordFile) {
      logToFile(log);
    }
    console.log(finalLog);
  };

  WarnLog = (message, label = "WARNING") => {
    let log = "";

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
    const finalLog = `${this.config.warnColor}` + log;
    if (this.config.recordFile) {
      logToFile(log);
    }
    console.log(finalLog);
  };
}

module.exports = {
  LogMux,
};
