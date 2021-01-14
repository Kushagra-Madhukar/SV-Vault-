import React, {useState, useEffect} from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import "./Pages.css"


const Homepage = () => {   
       
    return (
        <>
        
            <div className="hm-text-container">
                <h1 className="hm-text-head">Supervillain Vault</h1>
                <p>Are you a supervillain? Have you gotten tired of keeping in check of your finances while fighting with the superheroes? If that's the case then we have news for you.</p>
                <p>"Supervillain vault" is a non profit organisation dedicated to the cause of providing monetary protection to the hard working supervillains of our universe. We provide you with quick money transfer access and a community support of a large number of supervillains who will have your back when your pockets run out of cash. We are trusted by the pioneers in the supervillain community, "Thanos", "Joker", "Ultron" to name a few.</p>
                <p>We also provide funding to new and creative ideas of world dominance/destruction put forward by our fellow members. We are empathetic to the cause of all the supervillains to make the world a better barren place. With your dedication and our support we will succeed one day. </p>
                <p>Our tech team is continuously working on improving the user experience and new updates will be coming in the near future. You can try a demo by clicking on the button below to see how our platform works. </p>
                <Link to = "/customers"><button className="hm-main-btn">View Customers</button></Link>
            </div>
        
        </>

    )
}

export default Homepage
















// import {getNews,getGoogleNews,getGNews} from '../newsApi'
// const [input, setInput] = useState("")
    // const [news, setnews] = useState([])
    // const changeHandler = (Event) => {
    //     setInput(Event.target.value)
    // }
// useEffect(() => {
    // const clickHandler = async () => {
    //     let news_data = await getGNews(input);
    //     // var arr2 = arrNews.slice(0, 5)
    //     console.log(news_data)
    //     setnews(news_data)
    //     // document.querySelector('#api-div').innerHTML = news.map(ele => <li>{ele.Title}</li>)
    // }
    
// }, [])

{/* <button onClick={clickHandler} >GetNews</button> */}
            {/* <input type="text" className="hm-test-inp" value={input} onChange={changeHandler}/> */}
            {/* <div><ul id="api-div">
                    {
                        news != null ?
                        news.slice(0,5).map(ele => <li><a href={ele.Url}>{ele.Title}</a></li>) : null
                    }
            </ul></div> */}