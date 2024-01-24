import React, { useState } from 'react';
import Notification from './notification';
const AddBook = () => {

    const [bookData, setBookData] = useState({
        authorName: '',
        bookName: '',
        publishDate: '',
        quantity: '',
        bookPrice: '',
    })

    const [showNotification, setShowNotification] = useState(false);

    const handleChange = (e) => {
        setBookData({
            ...bookData,
            [e.target.name]: e.target.value
        })
    }

    const notification = () => {
        setTimeout(<notification />, 1000);
    }

    const handleBook = (e) => {

        e.preventDefault();

        const { authorName, bookName, publishDate, quantity, bookPrice } = bookData;

        if (!authorName || !bookName || !publishDate || !quantity || !bookPrice) {
            alert("Please fill in all fields before adding the book.");
            return;
        }

        const books = JSON.parse(localStorage.getItem('books')) || [];

        books.push({
            authorName,
            bookName,
            publishDate,
            quantity,
            bookPrice
        })

        localStorage.setItem('books', JSON.stringify(books));
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 1000);

        setBookData({
            authorName: '',
            bookName: '',
            publishDate: '',
            quantity: '',
            bookPrice: '',
        });


    }


    return (

        <div className='bg-blue-100 w-96 p-8 rounded-md shadow-md mx-auto mt-10'>

            <form action="" onSubmit={handleBook}

            >
                <div className="mb-6">
                    <label className="text-xl block text-gray-700" htmlFor="authorName">Author Name:</label>
                    <input
                        className="w-full px-8 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="authorName"
                        name="authorName"
                        value={bookData.authorName || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-xl block text-gray-700" htmlFor="bookName">Book Name:</label>
                    <input
                        className="w-full px-8 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="bookName"
                        name="bookName"
                        value={bookData.bookName || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-xl block text-gray-700" htmlFor="publishDate">Publish Date:</label>
                    <input
                        className="w-full px-8 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="date"
                        id="publishDate"
                        name="publishDate"
                        value={bookData.publishDate || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-xl block text-gray-700" htmlFor="quantity">Quantity:</label>
                    <input
                        className="w-full px-8 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={bookData.quantity || ''}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-6">
                    <label className="text-xl block text-gray-700" htmlFor="bookPrice">Book Price:</label>
                    <input
                        className="w-full px-8 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                        type="text"
                        id="bookPrice"
                        name="bookPrice"
                        value={bookData.bookPrice || ''}
                        onChange={handleChange}
                    />
                </div>
                <button className='bg-green-200 justify-center px-10 py-3 shadow-md' type='submit' onClick={notification}>Add Book</button>
            </form>
        </div>
    );
}

export default AddBook;
