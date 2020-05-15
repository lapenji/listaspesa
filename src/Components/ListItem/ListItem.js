import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Li = styled.li`
    list-style: none;
    width: 290px;
    display: flex;
    justify-content: space-between;
    
    margin-bottom: 10px;
    
`

const ListItem = ({item, handleDone, handleDelete}) => {
    let liStyle = {}
    item.done ? liStyle={textDecoration: 'line-through'} : liStyle = {}
    return(
        <Li style={liStyle} key={item.id}>
            <span>
            <input type="checkbox" onClick={()=> handleDone(item.fireId)}/>
            {item.testo}
            </span>
            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(item.fireId)} />
        </Li>
    )
}

export default ListItem