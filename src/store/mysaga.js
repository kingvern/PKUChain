import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* initList() {
   try {
      const res = yield axios.get('./data.json');
      console.log(res.data)
      yield put({type: "init_list_data", data: res.data});
   } catch (e) {
      console.log(e)
   }
}


function* mySaga() {
  yield takeEvery("init_list", initList);
}


export default mySaga;