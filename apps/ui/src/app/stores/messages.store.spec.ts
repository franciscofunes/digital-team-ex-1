import { BehaviorSubject } from 'rxjs';
import { MessagesStore } from './messages.store';

describe('Message Store', () => {
  let store: MessagesStore;

  const createStore = () => {
    store = new MessagesStore();
  };

  beforeEach(() => {
    createStore();
  });

  test('create', () => {
    expect(store).toBeTruthy();
  });

  test('Update message', () => {
    // arrange
    store.messageSource$.next = jest.fn();

    // act
    store.updateMessage('test');

    // assert
    expect(store.messageSource$.next).toHaveBeenLastCalledWith('test');
  });

  test('get message', () => {
    // arrange
    store.messageSource$ = new BehaviorSubject('');

    // act
    const message = store.getMessage();

    // assert
    expect(message).toBe(store.messageSource$);
  });
});
