export const dynamic = 'force-dynamic';
import ProductComponent from "@/components/products/ProductComponent";
import { ProductType } from "@/lib/product-type/product";
import Link from "next/link"
import { Suspense, use } from "react";

// async funciton to get products
async function getProducts() {
  try {
    const res = await fetch('http://localhost:3000/api/product', {
      cache: 'no-store'
    })
    const products = await res?.json();
    console.log(`Product data:`, products?.data || products)
    return products; // data fetch api which display


  } catch (error) {
    throw new Error(`Fail to fetch: ${error}`)
  }
}


// loading suspense
function LoadingSuspenseComponent(){
  return (
    <div className="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
  <span className="sr-only">Loading...</span>
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]" />
  <div className="h-8 w-8 bg-black rounded-full animate-bounce" />
</div>

  )
}
export default function ProductPageRoute() {
  return (
    <div >
         {/* nav bar for create and edit */}
      <div className="flex gap-5">
        <Link href={'/dashboard/create'}>Create</Link>
        <Link href={'/dashboard/edit'}>Edit</Link>
      </div>
      {/* adding suspend */}
      <Suspense fallback={<LoadingSuspenseComponent/>}>
        <ProductRenderingProcess/>
      </Suspense>
    </div>
  )
}

function ProductRenderingProcess() {

  // using use hook to fetch data from server
  const { data: products } = use(getProducts())

  
  return (

    <div>
    
      {/* display data from api here */}
      <div className="grid grid-cols-4 gap-8">
        {
          products?.content?.map(({ uuid, thumbnail, priceOut, name }: ProductType) => (
            <Link key={uuid} href={`/dashboard/products/${uuid}`}>
            <ProductComponent
              uuid={uuid}
              key={uuid}
              thumbnail={thumbnail}
              priceOut={priceOut}
              name={name}
            />
            </Link>

          ))
        }

      </div>

      


    </div>
  )
}