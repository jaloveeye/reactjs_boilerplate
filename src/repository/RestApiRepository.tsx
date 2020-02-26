import axios from 'axios';

class RestApiRepository {

    restEndpoint: String
    authToken: String | null

    constructor() {
        this.restEndpoint = ''
        this.authToken = ''
    }

    setAccessToken = (token : string | null) => {
        this.authToken = token
    }

    setServer = (server : string | null) => {
        if(server == null) {
            this.restEndpoint = 'https://prod.service.com'
        }else if(server === 'dev'){
            this.restEndpoint = 'https://dev.service.com'
        }else {
            this.restEndpoint = 'https://dev.service.com'
        }
    }


    requestHttpGet = async (url: string, params: any) => {
        const Url = url;

        try {

            let config = {
                headers: { 'Authorization': `Bearer ${this.authToken}` },
                params: params
            }

            const response = await axios.get(Url, config);

            if (response.status === 200) {
                return response.data;
            } else {
                throw Error("error")
            }
        } catch (error) {
            throw error
        }
    }

    getDatas = async (params1: string , params2: string) => {
        const url = this.restEndpoint + `/api/v1/datas`
        let params: any = {}
        params.params1 = params1
        params.params2 = params2
        
        const resultData = await this.requestHttpGet(url, params)
        
        return resultData
    }

}

export default new RestApiRepository()