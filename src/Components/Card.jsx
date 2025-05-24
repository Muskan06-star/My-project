import React from 'react'

function Card({ data }) {
    console.log(data);

    const readMore = () => {
        window.open()
    }

    return (
        <div className='cardContainer'>
            {data.map((currItem, index) => {
                if (!currItem.urlToImage) {
                    return null
                }
                else {
                    return (
                        <div className='card'>
                            <img src={currItem.urlToImage} alt="" />
                            <div className='content'>
                                <a className='title' onClick={() => window.open(currItem.url)}>{currItem.title}</a>
                                <p>{currItem.description}</p>
                                <button onClick={() => window.open(currItem.url)}>Read More</button>

                            </div>
                        </div>
                    )

                }

            })}
        </div>

    )


}

export default Card
