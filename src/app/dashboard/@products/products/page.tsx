import Link from "next/link"


// // async funciton to get products
// async function getProducts() {
//     try {
//         const res = await fetch('http://localhost:3000/api/product', {
//             cache: 'no-store'
//         })
//         const products = await res?.json();
//         return products?.content; // data fetch api which display
        

//     } catch (error) {
//         throw new Error("Fail to fetch")
//     }
// }

export default function ProductPageRoute() {
  return (
    <div>
        {/* nav bar for create and edit */}
        <div className="flex gap-5">
            <Link href = {'/dashboard/create'}>Create</Link>
            <Link href = {'/dashboard/edit'}>Edit</Link>
        </div>
    </div>
  )
}