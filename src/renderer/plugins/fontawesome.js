import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'
import {
  library
} from '@fortawesome/fontawesome-svg-core'

import {
  faCaretRight,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import Vue from 'vue'

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faCaretDown)
library.add(faCaretRight)
