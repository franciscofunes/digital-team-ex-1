import { RandomNumberService } from './randomNumber.service';

describe('Random Number Service', () => {
  let service: RandomNumberService;
  const HttpClientMock: any = {
    get: jest.fn(),
  };

  const createService = () => {
    service = new RandomNumberService(HttpClientMock);
  };

  beforeEach(() => {
    createService();
  });

  test('create', () => {
    expect(service).toBeTruthy();
  });

  test('Get random numbers', () => {
    // arrange
    const apiUrl = 'http://localhost:3333/api/random/';

    // act
    service.getRandomNumber();

    // assert
    expect(HttpClientMock.get).toHaveBeenCalledWith(apiUrl);
  });

  test('Get random multiple', () => {
    // arrange
    const number = 10;
    const apiUrl = `http://localhost:3333/api/random/multiple/${number}`;

    // act
    service.getRandomMultiple(number);

    // assert
    expect(HttpClientMock.get).toHaveBeenCalledWith(apiUrl);
  });
});
