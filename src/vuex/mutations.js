/**
 * Created by Lily on 2017/10/26.
 */
/*事件*/
import * as Types from './mutation-types'
export default {
  [Types.ADD_COLLECT](state, book){
    let flag = state.collects.some(item => item.id === book.id);
    if (flag) return;
    state.collects.push(book);
  },
  [Types.REMOVE_COLLECT](state){//删除

  }
}
