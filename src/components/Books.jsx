import React, { useEffect, useState } from 'react';

const Book = ({ book }) => {
    return (
        <div className='bg-green-100 w-72 h-80 rounded-md shadow-md mx-4 mb-4'>
            <ul className='text-xl py-5 px-2 flex flex-col justify-start'>
                <li className='py-2'><strong>Book Name:</strong> {book.bookName}</li>
                <li className='py-2'><strong>Author Name:</strong> {book.authorName}</li>
                <li className='py-2'><strong>Book Price:</strong> {book.bookPrice}</li>
                <li className='py-2'><strong>Publish Date:</strong> {book.publishDate}</li>
                <li className='py-2'><strong>Quantity:</strong> {book.quantity}</li>
            </ul>
        </div>

    );
};

const noData = () => {
    return (
        <div className=' ml-60 mt-12 px-10 py-10 justify-center items-center rounded-md shadow-lg bg-red-500'>
            <h1 className='px-4 py-4 text-2xl text-white '>You didnot add any book yet!</h1>
        </div>
    )
}

const Books = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('books'));
        if (storedData) {
            setData(storedData);
        }
    }, []);

    const showData = () => {
        if (!data || data.length === 0) {
            return noData();
        }

        return (
            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {data.map((book, index) => (
                    <Book key={index} book={book} />
                ))}
            </div>
        );
    };

    return (
        <div>
            {showData()}
        </div>
    );
};

export default Books;
