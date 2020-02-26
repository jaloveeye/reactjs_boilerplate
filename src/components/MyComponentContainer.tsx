
import React from 'react'
import styled from 'styled-components';
import MyComponent from './MyComponent';

interface MyComponentContainerProps {
    datas: any;
}

const MyComponentContainer : React.FunctionComponent<MyComponentContainerProps> = props => {

    return (
        <>
            <CONTAINER_DIV_2>
            {
                props.datas.map(
                    (data: any) => {
                        const isFirst = data.id === 0 ? true : false;

                        if (data.id === 0) return <MyComponent key={data.id} index={data.id} isFirst={isFirst} title={data.title} count={data.count} />
                        else return null
                    }
                )
            }
            </CONTAINER_DIV_2>
            <CONTAINER_DIV>
                {
                    props.datas.map(
                        (data: any) => {
                            const isFirst = data.id === 0 ? true : false;

                            if (data.id > 0) return <MyComponent key={data.id} index={data.id} isFirst={isFirst} title={data.title} count={data.count} />
                            else return null
                        }
                    )
                }
            </CONTAINER_DIV>
        </>
    )    
}

export default MyComponentContainer;

const CONTAINER_DIV = styled.div`
    background: #ffffff;
    align-items: center;
    margin-top: 10px;
    margin-left: 15px;
    margin-right: 15px;
    padding-bottom: 20px;
    display: flex;
`

const CONTAINER_DIV_2 = styled.div`
    background: #ffffff;
    align-items: center;
    margin-top: 20px;
    margin-left: 15px;
`

