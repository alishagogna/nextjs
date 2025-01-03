import React from 'react'

const ProductLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      Featured products Navbar
      {children}
    </div>
  )
}

export default ProductLayout

