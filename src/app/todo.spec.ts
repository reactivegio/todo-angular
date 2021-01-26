import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      id: 1,
      title: 'My first todo test',
      isCompleted: true
    });
    expect(todo.title).toEqual('My first todo test');
    expect(todo.isCompleted).toEqual(true);
  });
});
