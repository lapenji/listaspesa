import React, {useState} from 'react';
import styled from 'styled-components';



const Form = styled.form`
    margin-bottom: 15px;
`

const TextInput = ({handleAdd}) => {
    const [text, setText] = useState('')

    const handleChange = e => {
        setText(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        handleAdd(text)
        setText('')
    }

    return(
        <Form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange}/>
            <input type="submit" value='ok'/>
        </Form>
    )
}

export default TextInput