import { Post } from '@/types';
import { reactive } from '@vue/reactivity';
import { today, thisWeek, thisMounth } from "@/mock";

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
    ids: [
      today.id.toString(),
      thisWeek.id.toString(),
      thisMounth.id.toString(),
    ],
    all: {
      [today.id]: today,
      [thisWeek.id]: thisWeek,
      [thisMounth.id]: thisMounth
    },
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

