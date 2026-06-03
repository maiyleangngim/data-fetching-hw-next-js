import DetailPageModalComponent from "@/components/modal/DetailPageComponent";

const base_url = process.env.NEXT_PUBLIC_BASE_ISHOP_API_URL

// async funciton to get products
async function getProductsById(uuid: string) {
  try {
    const res = await fetch(`${base_url}/products/${uuid}`, {
      cache: "no-store",
    });
    const products = await res?.json();
    console.log(`Product data: ${products?.content}`);
    return products; // data fetch api which display
  } catch (error) {
    throw new Error(`Fail to fetch: ${error}`);
  }
}


export default async function Routeuuid({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductsById(id);
  return (
    <div>
      {/* display data from api here */}
      <h1 className="text-4xl p-8">Here is the Display page details</h1>
          <DetailPageModalComponent
            uuid={product.uuid}
            key={product.uuid}
            thumbnail={product.thumbnail}
            name={product.name}
            priceOut={product.priceOut}
          />
    </div>
  );
}
