import  {React,useEffect,useState} from "react";
import axios from "axios"

const Products = () => {
  const [data,setData] = useState([])
  useEffect(() => {
  
    axios({
      url: "http://localhost:8080/products",
      method: "GET"
    })
    .then(res =>{
      setData(res.data)
    })
    .catch(err =>{

    })
  },[])
  return (

    <div>
      {data.map((item) => (
        <div>
          id: {item.id}
          Name:{item.name}
          Description: {item.description}
        </div>
      ))}
    </div>
  )
};

export default Products;
