import { observable, action } from 'mobx'
import restApiRepository from '../repository/RestApiRepository'
import TempModel from '../models/TempModel';

export default class TestStore {

    @observable
    count: number = 0;

    
    @observable
    tempDatas: any = []

    
    @observable
    selectedIndex: number = 1


    @action
    fetchData = async (type: String) => {
        // const datas: any = await restApiRepository.getDatas(`params1`, `params2`);

        const datas = {
            temp1 : { count : 1},
            temp2 : { count : 2},
            temp3 : { count : 3},
            temp4 : { count : 4},
            temp5 : { count : 5},
        };

        this.tempDatas = new TempModel(datas).tempDatas;
    }

    @action
    onClick = () => {
        this.count = this.count + 1;
    }

    
}