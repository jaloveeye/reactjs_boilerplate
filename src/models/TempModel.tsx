import { observable } from 'mobx'

export default class TempModel {

    @observable
    tempDatas: any = []
    
    constructor(datas: any) {

        const tempDatas = [
            {
                id: 0,
                title: `title 1`,
                count: datas.temp1.count,
            },
            {
                id: 1,
                title: `title 2`,
                count: datas.temp2.count,
            },
            {
                id: 2,
                title: `title 3`,
                count: datas.temp3.count,
            },
            {
                id: 3,
                title: `title 4`,
                count: datas.temp4.count,
            },
        ]

        this.tempDatas = tempDatas
    }
}