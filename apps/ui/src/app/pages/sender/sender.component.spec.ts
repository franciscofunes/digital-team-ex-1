import { SenderComponent } from './sender.component';
import { MessagesStore } from '../../stores/messages.store';
import { MESSAGES } from '../../messagesDB';

describe('SenderComponent', () => {
  let component: SenderComponent;
  let messageStoreMock: MessagesStore;
  const mockFn = jest.fn();

  const createComponent = () => {
    messageStoreMock = new mockFn();
    component = new SenderComponent(messageStoreMock);
  };

  beforeEach(() => {
    createComponent();
  });

  test('create', () => {
    expect(component).toBeTruthy();
  });

  test('update Message', () => {
    // arrange
    messageStoreMock.updateMessage = jest.fn();

    // act
    component.updateMessage('test');

    //assertion
    expect(messageStoreMock.updateMessage).toHaveBeenCalledWith('test');
  });

  test('Show first message', () => {
    component.updateMessage = jest.fn();

    component.showFirstMessage();

    expect(component.updateMessage).toHaveBeenCalledWith(MESSAGES[0].content);
  });

  test('Show second message', () => {
    component.updateMessage = jest.fn();

    component.showSecondMessage();

    expect(component.updateMessage).toHaveBeenCalledWith(MESSAGES[1].content);
  });

  test('Show third message', () => {
    component.updateMessage = jest.fn();

    component.showThirdMessage();

    expect(component.updateMessage).toHaveBeenCalledWith(MESSAGES[2].content);
  });
});
