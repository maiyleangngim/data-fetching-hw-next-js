// import { DetailProductModalComponent } from "@/components/modal/DetailProductModalComponent";
// import ProductComponent from "@/components/products/ProductComponent";
// import { ProductType } from "@/lib/product-type/product";
// import { use } from "react";

// // async funciton to get products
// async function getProducts() {
//   try {
//     const res = await fetch('http://localhost:3000/api/product', {
//       cache: 'no-store'
//     })
//     const products = await res?.json();
//     console.log(`Product data: ${products?.content}`)
//     return products;// data fetch api which display


//   } catch (error) {
//     throw new Error(`Fail to fetch: ${error}`)
//   }
// }








// export default function DetailComponentDisplay(){
//       // using use hook to fetch data from server
//     //   const { data: products } = use(getProducts())
//     return (
//      <DetailProductModalComponent uuid={""} thumbnail={""} name={""} priceOut={0}/>
//         // <ProductComponent thumbnail={""} name={""} priceOut={0} uuid={""}/>
        // <div>
        //           {/* display data from api here */}
        //           {products?.content?.map(({ uuid, thumbnail, priceOut, name }: ProductType) => (
        //             <DetailProductModalComponent
        //               uuid={uuid}
        //               key = {uuid}
        //               thumbnail={thumbnail}
        //               name={name}
        //               priceOut={priceOut}
        //             />
        //           ))}
        // </div>
//     )
// }