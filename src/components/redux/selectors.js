import { privateApi } from "services/API"

const tokenApi = {
    set(userToken){
        privateApi.defaults.headers.common.Authorization = `Bearer ${userToken}`
    },
    unset(){
        privateApi.defaults.headers.common.Authorization = ""
    }
}

export default tokenApi
