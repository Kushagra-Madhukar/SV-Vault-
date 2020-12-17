import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
// import Data from "./data"
import "./Pages.css"
import axios from 'axios'

const Customers = () => {

    // const customLink = (id) => {
    //     window.location.href = "/customers/" + id; 
    // }
    const history = useHistory()

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    // const [customer, setCustomer] = useState([])

    // const api = axios.create({
    //     baseURL: 'http://localhost:3030/api/customers'
    // })
    useEffect(() => {
        // fetch('http://localhost:3030/api/customers')
        //     .then(res => res.json())
        //     .then(result => {
        //         console.log(result)
        //         setData(result)
        //         setLoad(true)
        //     })
        // api.get('/').then(res => {
        //     console.log(res)
        //     setData(res)
        //     setLoad(true)
        // })
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/api/customers")
            setData(data)
            console.log(data)
            setLoad(true)
        }
        fetchData()
        return() => {
            //
        }
    },[])

    const clickHandler = (id) => {
        history.push(`/customers/${id}`)
        // console.log(EventTarget)
    }

    return (
        <div className="customers-table-container">
            <table className="customer-table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>AccountId</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                {
                    !load ? "Loading..." :
                    data.map((item, i) => 
                    // onClick={() => history.push(item.id)}
                    // onClick={() => customLink(item.id)}
                    // onClick={() => history.push(`/customers/${item.id}`)}
                    <tr key={item.id} className="customer-row" onClick={() => clickHandler(item.id)}>
                        {/* {console.log("jkjsk", history)} */}
                        <td>{i+1}</td> 
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                        <td>&#8377;{item.balance}</td>
                        {/* <td><Link to = {`/customers/${item.id}`}>link</Link></td> */}
                    </tr>
                    
                   
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Customers
