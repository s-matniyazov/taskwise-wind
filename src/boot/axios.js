import Axios from 'axios'
import {useRouter} from "vue-router";
import {useUserStore} from "@/store/user-store.js";
import {ServerConfigs} from "@/utils/UriConstants.js";


const userStore = useUserStore()
const router = useRouter();

const apiClient = Axios.create({
    baseURL: ServerConfigs.SERVER_URL, // Access Vite's environment variable
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: ServerConfigs.SERVER_TIMEOUT, // Example: Set timeout,
});

apiClient.interceptors.request.use(function (request) {
    if (userStore.$state.user !== null) {
        alert("hello Jaska")
        // token salip jivariladi
        // request.headers.Authorization = `Bearer ${store.state.user.token}`;
    }
    // request.headers['Language'] = store.getters.getCurLocale;  -- lang berip jivariw
    return request;
}, function (error) {
    return Promise.reject(error);
});

apiClient.interceptors.response.use((response) => {
    // some actions of every response
    return response;
}, (error) => {
    // some actions of every request
    if (!error.response) {
        return Promise.reject({
            errorDescription: "", errorMessage: "http.base_error"
        });
    }
    if (!error.response.data) {
        return Promise.reject({
            errorDescription: "", errorMessage: "http.base_error"
        });
    }
    if (error.response.status === 401 || error.response.data.ERROR.status === 401) {
        // clear user details
        router.push('/login');
    }
    return Promise.reject({
        errorDescription: "response error details", errorMessage: "response error message"
    });

});
export default apiClient;



