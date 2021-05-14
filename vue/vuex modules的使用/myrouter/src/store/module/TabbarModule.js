const module = {
    namespaced: true, //命名空间开启\
    state: {
        isTabbarShow: true,
    },
    mutations: {
        changeTabbarHide(state) {
            state.isTabbarShow = false;
        },
        changeTabbarShow(state) {
            state.isTabbarShow = true;
        },
    },
    actions: {}
}
export default module