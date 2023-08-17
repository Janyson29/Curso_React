import { useParams } from "react-router-dom"

const Product = () => {
  // 4- rota dinamica
  const {id} = useParams()
  return (
    <div>Product</div>
  )
}

export default Product