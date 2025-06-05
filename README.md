# LogMux

A flexible and customizable logging utility for Node.js applications, supporting both ESM and CommonJS modules, with TypeScript support. LogMux provides a simple way to log messages with customizable colors, timestamps, labels, and file logging capabilities.

## Features

- **Customizable Logging**: Configure log colors, timestamps, and labels.
- **Multiple Log Types**: Supports standard logs (`Log`), error logs (`ErrorLog`), and warning logs (`WarnLog`).
- **Timestamp Formats**: Choose between Unix timestamp or ISO format.
- **File Logging**: Optionally save logs to a file.
- **Color Support**: ANSI color codes for console output.
- **TypeScript Support**: Fully typed with TypeScript definitions.
- **Dual Module Support**: Compatible with both ESM and CommonJS.
- **Configurable Labels**: Include or exclude labels, with optional uppercase formatting.

## Installation

Install LogMux via npm:

```bash
npm install logmux
```

## Usage

### Importing LogMux

#### ESM
```javascript
import LogMux from 'logmux';
```

#### CommonJS
```javascript
const LogMux = require('logmux');
```

### Basic Example

```javascript
const logger = new LogMux({
  textColour: 'blue',
  errorColour: 'red',
  warnColour: 'yellow',
  includeLabel: true,
  includeTimeStamp: true,
  timeStampFormat: 'iso',
  recordFile: true,
  uppercaseLabel: true,
});

// Standard log
await logger.Log('This is an info message');

// Error log
await logger.ErrorLog('This is an error message');

// Warning log
await logger.WarnLog('This is a warning message');
```

### Configuration Options

When creating a `LogMux` instance, you can pass a configuration object with the following properties:

| Option              | Type      | Default       | Description                                                                 |
|---------------------|-----------|---------------|-----------------------------------------------------------------------------|
| `textColour`        | `string`  | `'white'`     | ANSI color for standard logs (e.g., `'blue'`, `'green'`).                   |
| `errorColour`       | `string`  | `'red'`       | ANSI color for error logs.                                                  |
| `warnColour`        | `string`  | `'yellow'`    | ANSI color for warning logs.                                                |
| `includeLabel`      | `boolean` | `true`        | Include a label (e.g., `[INFO]`, `[ERROR]`) in the log.                     |
| `includeTimeStamp`  | `boolean` | `true`        | Include a timestamp in the log.                                             |
| `timeStampFormat`   | `string`  | `'unix'`      | Timestamp format: `'unix'` (milliseconds) or `'iso'` (ISO 8601).            |
| `recordFile`        | `boolean` | `false`       | Save logs to a file (`logs.txt` by default).                                |
| `uppercaseLabel`    | `boolean` | `false`       | Convert labels to uppercase (e.g., `[INFO]` instead of `[info]`).           |

### Example with Custom Configuration

```javascript
const logger = new LogMux({
  textColour: 'cyan',
  timeStampFormat: 'unix',
  recordFile: true,
  uppercaseLabel: true,
});

await logger.Log('Custom log message', 'CUSTOM');
// Output: 1746654321000 [CUSTOM] - Custom log message (in cyan)
await logger.ErrorLog('Something went wrong');
// Output: 1746654321000 [ERROR] - Something went wrong (in red)
```

### TypeScript Usage

LogMux is fully typed and works seamlessly with TypeScript. Here's an example:

```typescript
import LogMux from 'logmux';

const logger = new LogMux({
  textColour: 'green',
  timeStampFormat: 'iso',
  recordFile: true,
});

async function main() {
  await logger.Log('Hello, TypeScript!', 'INFO');
  await logger.WarnLog({ warning: 'Low battery' }, 'BATTERY');
  await logger.ErrorLog(new Error('Critical failure'), 'CRITICAL');
}

main();
```

### File Logging

When `recordFile` is set to `true`, logs are saved to `logs.txt` in the project directory. You can customize the file path by modifying the `logToFile` function in `src/utils.ts` if needed.

## API

### `LogMux` Class

#### Constructor
```javascript
const logger = new LogMux(config);
```

#### Methods
- **`Log(message: any, label?: string): Promise<void>`**
  Logs a standard message with optional custom label.
- **`ErrorLog(message: any, label?: string): Promise<void>`**
  Logs an error message with optional custom label.
- **`WarnLog(message: any, label?: string): Promise<void>`**
  Logs a warning message with optional custom label.

## Supported Colors

LogMux supports the following ANSI colors for console output:

- `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
- `brightBlack`, `brightRed`, `brightGreen`, `brightYellow`, `brightBlue`, `brightMagenta`, `brightCyan`, `brightWhite`

## Development

To contribute to LogMux or build it locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/HarshDev1809/logmux.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the project:
   ```bash
   npm run build
   ```

4. Run tests (if available):
   ```bash
   npm test
   ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on the [GitHub repository](https://github.com/HarshDev1809/logmux.git) for bug reports, feature requests, or suggestions.

## Contact

For questions or support, please open an issue on the [GitHub repository](https://github.com/HarshDev1809/logmux.git) or contact the maintainers.