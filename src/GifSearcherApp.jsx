import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifSearcherApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([...categories, newCategory]);
    }

    return (
        <>
            <h1>Gif Searcher:</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    )
}
