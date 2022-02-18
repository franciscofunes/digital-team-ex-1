import { MessagesComponent } from './messages.component';
import { MessagesStore } from '../../stores/messages.store';

describe('MessagesComponent', () => {
  let component: MessagesComponent;

  let messageStoreMock: MessagesStore;

  const mockFn = jest.fn();

  const DEFAULT_MESSAGE_MOCK = 'Hit that buttons 👊';

  const createComponent = () => {
    messageStoreMock = new mockFn();
    component = new MessagesComponent(messageStoreMock);
  };

  beforeEach(() => {
    createComponent();
  });

  test('create', () => {
    expect(component).toBeTruthy();
  });

  test('ngOnInit', () => {
    // arrange
    messageStoreMock.getMessage = jest.fn();
    messageStoreMock.updateMessage = jest.fn();

    // act
    component.ngOnInit();

    //assertion
    expect(messageStoreMock.getMessage).toHaveBeenCalled();
    expect(messageStoreMock.updateMessage).toHaveBeenCalledWith(
      DEFAULT_MESSAGE_MOCK
    );
  });
});
