import React from 'react'

function Layout({ photos }) {
    return (
        <>
            <h1>Our Gallery</h1>
            <div className="grid">
                {photos.map(({ photo, _id }) => (
                    <div key={_id} className="grid__item">
                        <div className='grid-img'>
                        <img
                            src={`http://localhost:5000/uploads/${photo}`}
                            alt="grid_image"
                        />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Layout