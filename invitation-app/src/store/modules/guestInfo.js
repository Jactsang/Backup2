import axios from "axios";

const state = {
    info: {
        email: null,
        first_name: null,
        last_name: null,
        company: null,
        purpose_of_visit: null,
        email_permission: false,
        privacy_agreement: false,
        UUID_: null,
        photo_path: null,
        image: null
    }
};

const getters = {
    allInfo: (state) => state.info
};

const actions = {
    async fetchInfo({ commit }) {
        // const urlParams = new URLSearchParams(window.location.search);
        // console.log(urlParams.get('userId'));
        // const uuid = urlParams.get('userId');
        const uuid = "717c81bd-258b-4db1-8bf3-4afabad2e921";
        const response = await axios.get(`https://3y3gxg8arc.execute-api.us-east-1.amazonaws.com/dev/api/user/schedules?userId=${uuid}`)

        console.log('response data here: ', response.data[0])
        commit("getInfo", response.data[0])
    },
    saveEmail({ commit }, email) {
        commit("updateEmail", email)
    },
    async saveGuestData({ commit }, data) {
        const response = await axios.post("https://3y3gxg8arc.execute-api.us-east-1.amazonaws.com/dev/api/user/info", {
            first_name: data.first_name,
            last_name: data.last_name,
            company: data.company,
            purpose_of_visit: data.purpose_of_visit,
            email_persmission: data.email_permission,
            privacy_agreement: data.privacy_agreement
        }, {
            headers: {
                "Content-Type": "application/json",
                "userid":"717c81bd-258b-4db1-8bf3-4afabad2e921"
            }
        });

        console.log('added the response data: ', response.data);
        commit("updateGuest", data)
    },
    saveProfilePic({ commit }, data) {
        commit("updateGuest", data)
    }
};

const mutations = {
    getInfo: (state, info) => (state.info = info),
    updateEmail: (state, email) => {
        state.info["email"] = email
    },
    updateGuest: (state, data) => {
        state.info["first_name"] = data.first_name
        state.info["last_name"] = data.last_name;
        state.info["company"] = data.company;
        state.info["purpose_of_visit"] = data.purpose_of_visit;
        state.info["email_permission"] = data.email_permission;
        state.info["privacy_agreement"] = data.privacy_agreement;
        state.info["image"] = data.image
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}