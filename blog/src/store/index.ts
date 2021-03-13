import { Post } from '@/types';
import { reactive } from '@vue/reactivity';

interface PostsState {
  ids: string[];
  // 转换类型: 将string转换为Post类型
  all: Record<string, Post>;
  loaded: boolean;
}

interface State {
  posts: PostsState;
}

const initialPostsState = (): PostsState => {
  return {
    ids: [],
    all: {},
    loaded: false
  }
}

const initialState = (): State => ({
  posts: initialPostsState()
})

class Store {
  private state: State;

  constructor(initialState: State) {
    this.state = reactive(initialState);
  }

  public getState(): State {
    return this.state;
  }
}

// initialState()
const store = new Store(initialState());

export default store;

