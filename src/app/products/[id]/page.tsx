const Product = async({params}: {params:{id:string}}) => {
  const {id} =  await params;// if not done it would throw an error, it should wait for the promise
  return (
    <div>
      Product page {id}
    </div>
  )
}
 
export default Product

