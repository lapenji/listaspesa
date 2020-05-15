import React from 'react';
import styled from 'styled-components';
import ListItem from '../ListItem/ListItem'

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;
    width: 300px;
    padding: 0;
    padding-inline-start: 0px;
`


const List = ({lista, handleDone, handleDelete}) => {
    return(
        <Div>
            {lista.map(item => {
                return <ListItem item={item} handleDone={handleDone} handleDelete={handleDelete}/>
            })}
        </Div>
    )
}

export default List
