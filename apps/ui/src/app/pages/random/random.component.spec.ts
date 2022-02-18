import { RandomNumbersStore } from '../../stores/randomNumbers.store';

import { RandomComponent } from './random.component';

describe('RandomComponent', () => {
  let component: RandomComponent;
  let randomNumberStoreMock: RandomNumbersStore;
  const mockFn = jest.fn();

  const createComponent = () => {
    randomNumberStoreMock = new mockFn();
    component = new RandomComponent(randomNumberStoreMock);
  };

  beforeEach(() => {
    createComponent();
  });

  test('create', () => {
    expect(component).toBeTruthy();
  });

  test('Fetch random number', () => {
    // arrange
    randomNumberStoreMock.fetchRandomNumber = jest.fn();

    // act
    component.fetchRandomNumber();

    //assertion
    expect(randomNumberStoreMock.fetchRandomNumber).toHaveBeenCalled();
  });

  test('ngOnInit', () => {
    // arrange
    randomNumberStoreMock.getRandomNumber = jest.fn();

    // act
    component.ngOnInit();

    //assertion
    expect(randomNumberStoreMock.getRandomNumber).toHaveBeenCalled();
  });
});
