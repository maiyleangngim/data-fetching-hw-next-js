import { NextResponse } from "next/server";

export async function GET(){
   // Logic of fetching data
    const response = await fetch(process.env.BASE_ISHOP_API_URL + '/product');
    const data = await response.json();
    if(response?.ok){
        return NextResponse.json({
            success: true,
            data
        })
    }
    return NextResponse.json({error: "Sorry fetching error"},
        {status: 500}
    )
}