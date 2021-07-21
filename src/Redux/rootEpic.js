import {combineEpics} from 'redux-observable'
import homeEpic from './homeRedux/home.epic'

const rootEpic = combineEpics(
    homeEpic.getData,
)

export default rootEpic