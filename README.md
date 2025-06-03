# LogMux

LogMux is a lightweight, customizable logging utility for Node.js applications. It provides a simple and flexible way to log messages with timestamps, labels, and color-coded output. LogMux supports logging to both the console and files, with configurable options for colors, timestamp formats, and label styling.

## Features

- **Color-coded Logs**: Customize log colors for different log types (Info, Error, Warning).
- **Timestamp Support**: Add timestamps in Unix or ISO format.
- **Label Customization**: Include or exclude labels, with optional uppercase formatting.
- **File Logging**: Optionally log messages to a file.
- **Object Serialization**: Automatically serialize objects to JSON for clean output.
- **Extensible Configuration**: Easily configure logging behavior through a simple options object.

## Installation

Install LogMux via npm:

```bash
npm install logmux
```

## Usage

Here's how to get started with LogMux in your Node.js project:

### Basic Example

```javascript
const { LogMux } = require('logmux');

const logger = new LogMux({
  errorColor: 'red',
  textColor: 'green',
  timeStampFormat: 'iso',
  recordFile: true,
  uppercaseLabel: true
});

logger.Log('This is an info message');
logger.ErrorLog('This is an error message');
logger.WarnLog('This is a warning message');
```

### Example Output

Console output (with colors applied):
```
2025-05-31T18:04:00.000Z [INFO] - This is an info message
2025-05-31T18:04:00.000Z [ERROR] - This is an error message
2025-05-31T18:04:00.000Z [WARNING] - This is a warning message
```

File output (in `logs.txt`):
```
2025-05-31T18:04:00.000Z [INFO] - This is an info message
2025-05-31T18:04:00.000Z [ERROR] - This is an error message
2025-05-31T18:04:00.000Z [WARNING] - This is a warning message
```

### Advanced Example

```javascript
const { LogMux } = require('logmux');

const logger = new LogMux({
  timeStampFormat: 'unix',
  includeLabel: true,
  uppercaseLabel: false,
  recordFile: true,
  textColor: 'cyan',
  errorColor: 'brightRed',
});

// Logging an object
logger.Log({ user: 'John', action: 'login' }, 'AUTH');

// Logging an error with a custom label
logger.ErrorLog('Failed to connect to database', 'DB_ERROR');
```

### Example Output

Console output:
```
1625060640000 [auth] - {"user":"John","action":"login"}
1625060640000 [DB_ERROR] - Failed to connect to database
```

## Configuration Options

When creating a `LogMux` instance, you can pass a configuration object with the following options:

| Option              | Type    | Default Value         | Description                                                                 |
|---------------------|---------|-----------------------|-----------------------------------------------------------------------------|
| `errorColor`        | String  | `red`                 | Color for error logs (from `TEXT_COLOURS`).                                 |
| `textColor`         | String  | `white`               | Color for info logs (from `TEXT_COLOURS`).                                  |
| `warnColor`         | String  | `yellow`              | Color for warning logs (from `TEXT_COLOURS`).                               |
| `includeLabel`      | Boolean | `true`                | Whether to include labels in logs.                                          |
| `includeTimeStamp`  | Boolean | `true`                | Whether to include timestamps in logs.                                      |
| `timeStampFormat`   | String  | `unix`                | Timestamp format (`unix` for milliseconds, `iso` for ISO 8601).             |
| `recordFile`        | Boolean | `false`               | Whether to log messages to a file (`logs.txt` by default).                  |
| `uppercaseLabel`    | Boolean | `false`               | Whether to convert labels to uppercase.                                     |

### Available Colors

LogMux uses ANSI color codes from the `TEXT_COLOURS` constant. Available colors include:

- `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
- `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`

## Methods

- **Log(message, label = "INFO")**: Logs an info message with the specified label.
- **ErrorLog(message, label = "ERROR")**: Logs an error message with the specified label.
- **WarnLog(message, label = "WARNING")**: Logs a warning message with the specified label.

## Dependencies

- Node.js built-in modules: `fs`, `path`

## File Logging

When `recordFile` is set to `true`, logs are written to `logs.txt` in the project directory. The directory is automatically created if it doesn't exist. Ensure proper write permissions for the directory.

## Contributing

Contributions are welcome! Please submit issues or pull requests to the [GitHub repository](https://github.com/your-repo/logmux).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.