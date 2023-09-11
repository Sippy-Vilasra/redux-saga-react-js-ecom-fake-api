import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import { productList, loadUsers } from '../redux/action';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
// import {UsersWithReduxSaga} from "Loading"

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  let loading = useSelector((state) => state.loadingProduct)

  console.warn("loadingProduct data component", loading);
  // setIsLoading()
  // console.log(isLoading, 'WWWWWWWWWWW')
  useEffect(() => {
    dispatch(productList(), loadUsers())
  }, [])


  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      <div className='product-container'>
        {
          data.map((item) => <div className='product-item'>
            <img src={item.image} style={{ height: 200, width: 150 }} alt="" />
            <div>Name : {item.title} </div>
            <div>Color : {item.description} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : A1</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))} >Add to Cart</button>
              <button onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</button>

            </div>
          </div>)
        }
      </div>
    </>
  )
}


export default Main;
