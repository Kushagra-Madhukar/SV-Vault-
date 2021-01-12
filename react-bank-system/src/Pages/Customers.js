import React, {useEffect, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./Pages.css"
import axios from 'axios'

const Customers = () => {
    const history = useHistory()

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    
    useEffect(() => {
        
        const fetchData = async () => {
            const {data} = await axios.get("/api/customers")
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
                    <tr key={item.id} className="customer-row" onClick={() => clickHandler(item.id)}>
                        <td>{i+1}</td> 
                        <td>{item.name}</td>
                        <td>{item.id}</td>
                        <td>&#8377;{item.balance}</td>
                    </tr>
                    
                   
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default Customers
















// const customLink = (id) => {
    //     window.location.href = "/customers/" + id; 
    // }

    // const [customer, setCustomer] = useState([])

    // const api = axios.create({
    //     baseURL: 'http://localhost:3030/api/customers'
    // })

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

         // console.log(EventTarget)

          // onClick={() => history.push(item.id)}
                    // onClick={() => customLink(item.id)}
                    // onClick={() => history.push(`/customers/${item.id}`)}

                    {/* {console.log("jkjsk", history)} */}
                        

                     {/* <td><Link to = {`/customers/${item.id}`}>link</Link></td> */}
                    