const CarAlreadyRentedError = require('./CarAlreadyRentedError');
const ApplicationError = require('./ApplicationError');

describe('CarAlreadyRentedError', () => {
  it('should create an instance of CarAlreadyRentedError', () => {
    const car = { id: 1, name: 'Car 1' };
    const error = new CarAlreadyRentedError(car);

    expect(error instanceof CarAlreadyRentedError).toBe(true);
    expect(error instanceof ApplicationError).toBe(true);
    expect(error.name).toBe('Error');
    expect(error.message).toBe('Car 1 is already rented!!');
  });

  it('should have details with the rented car', () => {
    const car = { id: 2, name: 'Car 2' };
    const error = new CarAlreadyRentedError(car);

    expect(error.details).toEqual({ car });
  });

  it('should convert to JSON', () => {
    const car = { id: 3, name: 'Car 3' };
    const error = new CarAlreadyRentedError(car);

    const jsonResult = error.toJSON();

    expect(jsonResult).toEqual({
      error: {
        name: 'Error',
        message: 'Car 3 is already rented!!',
        details: { car: { id: 3, name: 'Car 3' } },
      }
    });
  });
});
