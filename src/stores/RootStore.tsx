import TestStore from './TestStore';

export default class RootStore {

    testStore: TestStore

    constructor() {
        this.testStore = new TestStore()
    }
}