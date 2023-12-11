const EmailNotRegisteredError = require('./EmailNotRegisteredError');

describe('EmailNotRegisteredError', () => {
  it('should have correct name, message, and details', () => {
    // Arrange
    const email = 'test@example.com';
    
    // Act
    const error = new EmailNotRegisteredError(email);

    // Assert
    expect(error.name).toBe('Error');
    expect(error.message).toBe(`${email} is not registered!`);
    expect(error.details).toEqual({ email });
  });

  it('should have correct toJSON output', () => {
    // Arrange
    const email = 'test@example.com';

    // Act
    const error = new EmailNotRegisteredError(email);
    const toJSONResult = error.toJSON();

    // Assert
    expect(toJSONResult).toEqual({
      error: {
        name: 'Error',
        message: `${email} is not registered!`,
        details: { email },
      },
    });
  });
});
