




///

import React, { useState, useEffect, useRef } from "react";
import Autocomplete from 'react-autocomplete';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import useOutsideAlerter from "components/UseHooks/useOutsideAlerter";


function AutoComo(props) {


  useEffect(() => {
  }, [])
  
  var closeRef = useRef(null)
  const history = useHistory();
  const [value, setVal] = useState("")
  const [selectedvalue, setselectedvalue] = useState("")
  const [items, setItems] = useState([])

  useOutsideAlerter(closeRef, setVal, "")
  // var value = ""

  function handleChange(VariableName) {
    setItems([]);
    if (VariableName === "") {

      return
    }


    // implimented the elastic call in the back end. So, This can be deleted/cleaned from here till "query ends"

    var url = 'https://elastic.airesearch.in/economics_v102_test,demographics_v1_test,trade_export_yearly_v1/_search'
    // var url = 'https://elastic.airesearch.in/economics_v102_test,demographics_v1_test,trade_export_yearly_v1,trade_import_yearly_v1/_search'

    var query4 = {
      "_source": ["VariablePath", "HSCodeName", "HSCode", "Country", "VariableName", "VariablePath", "State", "Level1", "Level2"],
      "query": {
        "bool": {
          "must": [
            {
              "query_string": {
                "fields": ["State^3", "HSCode^3", "HSName^2", "HSCodeName^2", "Country", "VariableName^5", "VariablePath", "Level1", "Level2", "Level3", "Level4", "Level5"],
                "query": VariableName + "*",
                "minimum_should_match": 1
              }
            }
          ]
        }
      }
    }

    //   can be cleaned till here "query ends"

    // // var backend_node_url = "http://localhost:5000/UniversalSearch"  
    // var backend_node_url = "http://localhost:5000/UniversalSearch/"+VariableName  

    //     var body = {
    //       VariableName
    //     }

    //     // axios.get(backend_node_url, body)
    //     axios.post(backend_node_url)
    //   .then( result =>{
    //   if(result.status === 200){
    //     // console.log("Mesg From backend")
    //     console.log(result.data.list)
    //     setItems(result.data.list)

    //     // setItems(result.data)
    //   }
    //   else{
    //     console.log('Error from Backend')
    //   }
    // }).catch( error => {
    //   if (error) {
    //     console.log("backend-error")
    //     console.log(error)
    //   }
    //   else{
    //     console.log("Error-backend!");
    //   }
    // });


    // can be removed from here, since the same feature is inplimented in backend

    axios.post(url, query4)
      .then(d => {
        if (d.status === 200) {
          let total_data = d.data.hits.hits

          let list = get_list_from_buckets(total_data)
          console.log("direct elastic call", list)
          setItems(list)
        }
        else {
          console.log("err")
        }
      })
      .catch(error => {
        if (error) {
          console.log(error)
        }
        else {
          console.log("Error!");
        }
      });

    ///// can be deleted till here




  }
  // const classes = useStyles();
  const divStyles = {
    position:"absolute",
    left: "17.5%",
    top: "50px",
    width:"65%",
    margin:"0 auto",
    maxHeight: "200px",
    overflow: "auto",
    backgroundColor:"white",
    borderRadius:"0.15rem",
    boxShadow: "0 10px 10px rgba(0,0,0,.1), 0 10px 5px rgba(0,0,0,.1)",
    zIndex:200
  }

function setValue(){
console.log(value)
  }
  return (
    <>
      <Autocomplete

        renderInput={(params) => (
          <div className="div2" ref={closeRef}>
          <input id="myInput" type="text" {...params} placeholder="Search " value={value}/>
          <button id="myBtn" type="submit" className="newSearchButton" onClick={(e) => {
            if (items.length !== 0) {
              let link = items.filter((item)=>item.title==selectedvalue)
              if(link.length==1)
              window.location.href = link[0].href
            }
            else {
              alert("Select any option..");
            }
          }
          }>
                 Search
              </button>
          </div>
        )}

        getItemValue={(item) => item.title}
        items={items}
        renderItem={(item, isHighlighted) =>
          <div style={{ padding: "0.5rem 1rem", fontSize: "0.85rem",cursor:"pointer"}}>
           {item.title}
          </div>
        }
        value={value}
        onChange={(e) => {handleChange(e.target.value);}}
        renderMenu={(items) => <div style={divStyles} children={items} />}
        onSelect={(e) => { setselectedvalue(e); setVal(e); }}
        wrapperStyle={{display:"block",position:"relative",marginBottom: "6rem"}}

      />
    </>
  )
  // return (
  //   // <div className={classes.root}>
  //   <div>
  //     <a href="/" >home</a>
  //     <br /><br /><br />

  //     <Autocomplete
  //           getItemValue={(item) => item.path}
  //           items={items}
  //           enderItem={(item, isHighlighted) =>
  //             <div className="searchDrop"  style={{background: isHighlighted ? 'lightgray' : 'black' }}>
  //               <Link to={`/${item.path}`}>
  //                {item.label}
  //               </Link>
  //             </div>
  //           }
  //           value={value}
  //           onChange={(e) => {setVal(e.target.value);handleChange(e.target.value)}}
  //           renderMenu={(items) =>  <div style={divStyles} children={items}/>}


  //           // onSelect={(val) => {setVal(val);console.log("val",val)}}
  //       />


  //   </div>
  // );
}



function get_list_from_buckets(buckets) {
  let economics_href = "https://economics.aidatabases.in/"
  let demographics_href = "https://demographics.aidatabases.in/Demographics/"
  let trade_href = "https://trade.aidatabases.in/trade/"

  let list_bucket = buckets.map(item => {
    let index = item._index
    // console.log(index)
    let href = ""
    let title = ""
    // console.log(item._source)

    if (index === "economics_v102_test") {
      // href = economics_href+item._source["VariablePath"]
      href = economics_href + item._source["VariablePath"]
      title = item._source["VariableName"] + "," + item._source["Level1"] + "," + item._source["Level2"] + "(Economics)"
    }
    if (index === "demographics_v1_test") {
      // href = demographics_href+item._source["Variablepath"]
      href = demographics_href + item._source["VariablePath"]
      title = item._source["VariableName"] + "," + item._source["State"] + "," + item._source["Level1"] + "," + item._source["Level2"] + "(Demographics)"
    }
    if (index === "trade_export_yearly_v1") {
      // href = trade_href+item._source.Variablepath
      href = trade_href + item._source["Country"] + "/" + item._source["HSCode"]
      title = item._source["Country"] + "," + item._source["HSCode"] + "," + item._source["HSCodeName"] + "(Trade)"
    }
    if (index === "trade_import_yearly_v1") {
      // href = trade_href+item._source.Variablepath
      href = trade_href + item._source["Country"] + "/" + item._source["HSCode"]
      title = item._source["Country"] + "," + item._source["HSCode"] + "," + item._source["HSCodeName"] + "(Trade)"
    }
    // console.log(index, title)
    return { index: index, title: title, href: href}
  })
  return list_bucket
}



export default AutoComo;