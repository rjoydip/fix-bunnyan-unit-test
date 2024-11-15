import bunyan from 'bunyan';

describe('exampleFunction', () => {
  let logger: bunyan;

  beforeAll(() => {
    logger = bunyan.createLogger({
      name: 'test',
      serializers: bunyan.stdSerializers,
    });
  });

  beforeEach(() => {
    // Clear previous mock calls before each test
    jest.clearAllMocks();
  });

  afterAll(() => {
    // Restore original logger methods after all tests are done
    jest.restoreAllMocks();
  });

  it('should log an info message', () => {
    // Mock the logger.info method
    const infoSpy = jest.spyOn(logger, 'info');

    logger.info('Info log');

    // Verify that logger.info was called with the expected message
    expect(infoSpy).toHaveBeenCalledWith('Info log');
  });

  it('should log an debug message', () => {
    // Mock the logger.debug method
    const debugSpy = jest.spyOn(logger, 'debug');

    logger.debug('Debug log');

    // Verify that logger.debug was called with the expected message
    expect(debugSpy).toHaveBeenCalledWith('Debug log');
  });

  it('should log an trace message', () => {
    // Mock the logger.trace method
    const traceSpy = jest.spyOn(logger, 'trace');

    logger.trace('Trace log');

    // Verify that logger.trace was called with the expected message
    expect(traceSpy).toHaveBeenCalledWith('Trace log');
  });

  it('should log an fatal message', () => {
    // Mock the logger.fatal method
    const fatalSpy = jest.spyOn(logger, 'fatal');

    logger.fatal('Fatal log');

    // Verify that logger.fatal was called with the expected message
    expect(fatalSpy).toHaveBeenCalledWith('Fatal log');
  });

  it('should log an warn message', () => {
    // Mock the logger.warn method
    const warnSpy = jest.spyOn(logger, 'warn');

    logger.warn('Warn log');

    // Verify that logger.warn was called with the expected message
    expect(warnSpy).toHaveBeenCalledWith('Warn log');
  });

  it('should log an error message', () => {
    // Mock the logger.error method
    const errorSpy = jest.spyOn(logger, 'error');

    logger.error('Error log');

    // Verify that logger.error was called with the expected message
    expect(errorSpy).toHaveBeenCalledWith('Error log');
  });
});
