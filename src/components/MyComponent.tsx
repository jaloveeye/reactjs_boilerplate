
import React from 'react'
import styled from 'styled-components';
import { useObserver } from "mobx-react";
import RootStore from '../stores/RootStore';
import useStores from '../utils/useStore';


interface MyComponentProps {
    index: number;
    title: string;
    count: number;
    isFirst: boolean;
    rootStore?: RootStore,
}

interface StyledProps {
    isFirst: boolean;
    isSelected: boolean;
    isLocalFirst: boolean;
}


const MyComponent : React.FunctionComponent<MyComponentProps> = props => {

    const { rootStore } = useStores()

    const testStore = rootStore?.testStore!
    const isSelected = rootStore?.testStore!.selectedIndex === props.index ? true : false
    const isLocalFirst = props.index === 1 ? true : false

    return useObserver(() => (
            <TOP_DIV isFirst={props.isFirst} isSelected={isSelected} isLocalFirst={isLocalFirst}>
                <div className='title'>{props.title}</div>
                <div className='count'>{props.count}</div>     
            </TOP_DIV>
        )    
    )
}

export default MyComponent;

const TOP_DIV = styled.div`
    width: 33%;

    background: ${(props: StyledProps) => props.isFirst ? '#FFFFFF': (props: StyledProps) => props.isSelected ? 'rgba(216, 216, 216, 0.18)' : '#FFFFFFFF'}; 
    align-items: center;
    margin-left: ${(props: StyledProps) => props.isFirst ? '0px' : (props: StyledProps) => props.isLocalFirst ? '0px': '10px'}; 
    color: ${(props: StyledProps) => props.isFirst ? '#000000': '#FFFFFF'}; 
    font-family: Regular, sans-serif !important;
    
    & .title {
        margin-top: 5px;
        font-size: 15px;
        color: #999999;
    }

    & .count {
        margin-top: 5px;
        font-size: 21px;
        color: #EF444C;
    }
`