import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Customer = () => {
    const {id} = useParams()
    const [customer, setCustomer] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(true)

    useEffect(() => {
            const fetchData = async () => {
                //Getting customer data
                // const {data} = await axios.get(`http://localhost:5000/api/customers`)
                const {data} = await axios.get(`http://sv-vault.herokuapp/customers`)
                setData(data)
                console.log(data)
                const c = data.find(c => c.id === id);
                setCustomer(c)
                setLoaded(true)
            }
            fetchData()
            return() => {
                //
            }
    },[update])

    const [amount, setAmount] = useState("")

    const changeHandler = (e) => {
        setAmount(e.target.value)
    }

    
    const updateDatabase = async (x, rID) => {
        const data1 = await axios.patch(`http://sv-vault.herokuapp/customers/${rID}`, {x: x, add: true})
        const data2 = await axios.patch(`http://sv-vault.herokuapp/customers/${id}`, {x: x, add: false})
        console.log(data1.data, data2.data)
        setUpdate(!update)
    }
    
    const clickHandler = (e) => {
        e.target.style.transform = "scale(0.9)"
        setTimeout(() => {
            e.target.style.transform = "scale(1)"
            e.target.blur()
        }, 300)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        let x = e.target.sendAmount.value
        let rID = e.target.receiver.value
        if(x >= 1 && x <= customer.balance-1){
            updateDatabase(x, rID)
        }
    }


    const [sendto, setSendto] = useState("")
    return (
        <div className="cstm-holder">
            {
                loaded ? 
                <div className="cstm-container">
                    <div className="cstm-img-container"><img src={customer.img} className="cstm-img" alt={customer.name}/></div>
                    <div className="cstm-content-container">
                        <label><strong>Name:</strong> <div>{customer.name}</div></label><br/>
                        <label><strong>Account No:</strong> {customer.id}</label><br/>
                        <label><strong>Balance:  </strong>&#8377;{customer.balance}</label><br/>
                        <form onSubmit={submitHandler} className="cstm-form">
                            <label>
                                <strong>Enter Amount:</strong>
                                <input type="number" name="sendAmount" value={amount} onChange={changeHandler} min={1} max={customer.balance-1}/>
                            </label>
                            <label>
                                <strong>Transfer to:</strong>
                                <select name="receiver" value={sendto} onChange={(e) => setSendto(e.target.value)}>
                                    {
                                        data.map(ele => ele.id === id ? null : <option value={ele.id}>{ele.name}</option>)
                                    }
                                </select>
                            </label>
                            <button className="cstm-btn" onClick={clickHandler}>Send Money</button>
                        </form>
                    </div>
                </div>
                :
                "Loading...."
            
            }
        </div>
    )
}

export default Customer














//Getting random user image from api
// const imgData = await axios.get("https://randomuser.me/api/")
// console.log(imgData.data.results)