
import React, { useEffect } from 'react'
import { useObserver } from "mobx-react";
import RootStore from '../stores/RootStore';
import styled from 'styled-components';
import useStores from '../utils/useStore';
import MyComponentContainer from './MyComponentContainer'


interface RootProps {
    rootStore?: RootStore,
}

const Main : React.FunctionComponent<RootProps> = () => {

    const { rootStore } = useStores()
    const testStore = rootStore?.testStore!
    
    useEffect(() => {
        testStore.fetchData()
    }, [])
    
    return useObserver(() => (
            <>
                {testStore.count}
                <BUTTON onClick={() => testStore.onClick()}>Click</BUTTON>
                <Wrapper>
                    <MyComponentContainer datas={testStore.tempDatas}/>
                </Wrapper>
            </>
        )    
    )
}

export default Main

const Wrapper = styled.div`
    background : #fff;
    padding-top : 15px;
`

const BUTTON = styled.button`
    margin-left: 20px;
`