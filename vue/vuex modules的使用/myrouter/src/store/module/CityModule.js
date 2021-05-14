const module = {
    namespaced: true, //命名空间开启
    state: {
        cityId: '110100',
        cityName: '北京',
    },
    mutations: {
        changeCityName(state, cityname) {
            state.cityName = cityname;
        },
        changeCityId(state, cityid) {
            state.cityId = cityid;
        },
    },
    actions: {}
}
export default module