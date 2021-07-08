import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { State} from './store'
// 模块扩展  this.$store的强类型支持 配置
declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store:Store<State>
	}
}