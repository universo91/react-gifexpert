import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2) {
            setCategories(cats => [ inputValue, ...cats] );
            setInputValue('');
        }
    }       

    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type="text" 
                onChange = { handleInputChange } 
                value = { inputValue }
                placeholder="Ingrese su temino a buscar, pe: peliculas"
            />
        </ form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory
