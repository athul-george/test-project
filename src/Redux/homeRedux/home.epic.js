import { ofType } from "redux-observable";
import { GET_DATA ,REQUEST_CANCEL} from "./home.type";
import {ajax} from 'rxjs/ajax'
import { switchMap,map,takeUntil } from "rxjs/operators";
import { getDataRes } from "./home.action";
const homeEpic ={}


homeEpic.getData = (action$) =>
  action$.pipe(
    ofType(GET_DATA),
    switchMap((action) =>
      ajax({
        url: 'https://reqres.in/api/users',
        method: 'GET',
      }).pipe(
        map(
          (response) => getDataRes(response),
          takeUntil(action$.pipe(ofType(REQUEST_CANCEL))),
        ),
      ),
    ),
  )
export default homeEpic