import { App as Application } from 'vue'

import { registerComponent } from '../../utils/plugins/index'
// @ts-ignore
import C from './SpTxList.vue'

export const Plugin = {
  install(vue: Application): void {
    registerComponent(vue, C)
  }
}

export default C
