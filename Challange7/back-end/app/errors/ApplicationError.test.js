const ApplicationError = require('./ApplicationError');

describe('ApplicationError', () => {
  it('should create an instance of ApplicationError', () => {
    const error = new ApplicationError('Test error');

    expect(error instanceof ApplicationError).toBe(true);
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Test error');
  });

  it('should have default details', () => {
    const error = new ApplicationError('Test error');

    expect(error.details).toEqual({});
  });

  it('should convert to JSON', () => {
    const error = new ApplicationError('Test error');

    const jsonResult = error.toJSON();

    expect(jsonResult).toEqual({
      error: {
        name: 'Error',
        message: 'Test error',
        details: {},
      }
    });
  });
});
