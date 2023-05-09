import axios from "axios"
import { useEffect, useState } from "react"

export default function Products() {
    const [product, setProduct] = useState([])

    useEffect(() => {
        try {
            axios.get("https://fakestoreapi.com/products?limit=5")
            .then(function(response) {
                console.log(response)
            })
        } catch(error) {
            console.log(error)
        }
    })

    return (
        <div>
        <div>Products:</div>
        <div>{product}</div>
        </div>
    )
}
