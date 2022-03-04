import { of } from 'rxjs';
import { RandomNumberService } from '../shared/services/randomNumber.service';
import { RandomNumbersStore } from './randomNumbers.store';

describe('Random Number Store', () => {
  let store: RandomNumbersStore;
  let randomNumberService: RandomNumberService;
  const mockFn = jest.fn();

  const createStore = () => {
    randomNumberService = new mockFn();
    store = new RandomNumbersStore(randomNumberService);
  };

  beforeEach(() => {
    createStore();
  });

  test('create', () => {
    expect(store).toBeTruthy();
  });

  test('Fetch Random Number', () => {
    // arrange
    randomNumberService.getRandomNumber = jest.fn().mockReturnValue(of(2));
    // act
    store.fetchRandomNumber();
    // assert
    expect(randomNumberService.getRandomNumber).toHaveBeenCalled();
    expect(store.getRandomNumber().value).toBe('10');
  });

  test('Get Random Number', () => {
    // arrange
    randomNumberService.getRandomNumber = jest.fn().mockReturnValue(of(2));

    // act
    const randomNumber = store.getRandomNumber();

    // assert
    expect(randomNumber).toBe(store.randomNumber$);
  });
});
