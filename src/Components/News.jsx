import React, { useState, useEffect } from 'react'
import Card from "./Card"
import "./index.css"


const News = () => {
    const [search, setSearch] = useState("india")
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "f13a3a42db29495daaf4ef1d8004a380";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        setNewsData(jsonData.articles)
    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }

    const userInput = (event) => {
        setSearch(event.target.value)

    }
    return (
        <div>
            <nav>
                <div> <h1>Trendy news</h1></div>

                <ul>
                    <a>All News</a>
                    <a>Trending</a>
                </ul>
                <div className='search'>
                    <input type="text" placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData} >Search</button>
                </div>

            </nav>
            <div>
                <p>Stay updated with TrendyNews</p>
            </div>

            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>
            <div>
                {newsData ? <Card data={newsData} /> : null}

            </div>



        </div>
    )
}

export default News
