import http from '@/util/http'

const module = {
    namespaced: true, //命名空间开启
    state: {
        cinemaListStore: [],
    },
    mutations: {

        setCinemaList(state, cinemaList) {
            state.cinemaListStore = cinemaList;
        },
        clearCinemaList(state) {
            state.cinemaListStore = [];
        },
    },
    actions: {
        getCinemaList(store, cityid) {
            // !!!!注意这里return出去了一个promise对象
            return http({
                url: `/gateway?cityId=${cityid}&ticketFlag=1&k=8453710`,
                headers: {
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res => {
                // console.log(res.data);
                store.commit("setCinemaList", res.data.data.cinemas)
            });
        }
    }
}
export default module