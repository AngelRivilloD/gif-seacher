import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Malconm');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} aria-label="form">
            <input
                type="text"
                placeholder="Search GIF..."
                value={inputValue}
                onChange={onInputChange} />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}