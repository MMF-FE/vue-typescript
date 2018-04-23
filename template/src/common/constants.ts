import { Gender } from 'common/enum'
import util from 'common/util'

let constants = {
    Gender
}

util.deepFreeze(constants)

export default constants
