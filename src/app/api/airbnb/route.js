export async function GET() {
    const data = [
        {
            image: "/images/property/crop_prop3.png",
            title: "Modern luxury family home",
            location: "14 Singila,Mwatate,Taita Tevata",
            rating: 3.5,
            reviews: 40,
            price: 7500
        },
        {
            image: "/images/property/crop_prop1.png",
            title: "Modern luxury family home",
            location: "14 Singila,Mwatate,Taita Tevata",
            rating: 3.5,
            reviews: 40,
            price: 7500
        },
        {
            image: "/images/property/crop_prop2.png",
            title: "Modern luxury family home",
            location: "14 Singila,Mwatate,Taita Tevata",
            rating: 4.5,
            reviews: 40,
            price: 7500
        },
        {
            image: "/images/property/crop_prop4.png",
            title: "Modern luxury family home",
            location: "14 Singila,Mwatate,Taita Tevata",
            rating: 1.5,
            reviews: 40,
            price: 7500
        },
        {
            image: "/images/property/crop_prop5.png",
            title: "Modern luxury family home",
            location: "14 Singila,Mwatate,Taita Tevata",
            rating: 5.0,
            reviews: 40,
            price: 7500
        },
        {
            image: "/images/property/crop_prop6.png",
            title: "Modern luxury family home",
            location: "14 Singila,Mwatate,Taita Tevata",
            rating: 5.0,
            reviews: 40,
            price: 7500
        },
    ];
    try {
        return Response.json({ status: 'success', data });
    } catch (error) {
        return Response.json({ status: 'error', desc: error.message });

    }

}