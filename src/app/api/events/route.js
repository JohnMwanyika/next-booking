export async function GET() {
    const data = [
        {
            image: "/images/events/event1.png",
            title: "Sounds from The East",
            venue: "14 Singila,Mwatate,Taita Tevata",
            startTime: "02:30 pm",
            endTime: "07:00 pm",
            price: 4500.00
        },
        {
            image: "/images/events/event2.png",
            title: "Sounds from The East",
            venue: "14 Singila,Mwatate,Taita Tevata",
            startTime: "02:30 pm",
            endTime: "07:00 pm",
            price: 4500.00
        },
        {
            image: "/images/events/event3.png",
            title: "Sounds from The East",
            venue: "14 Singila,Mwatate,Taita Tevata",
            startTime: "02:30 pm",
            endTime: "07:00 pm",
            price: 4500.00
        },
        {
            image: "/images/events/event4.png",
            title: "Sounds from The East",
            venue: "14 Singila,Mwatate,Taita Tevata",
            startTime: "02:30 pm",
            endTime: "07:00 pm",
            price: 4500.00
        },
        {
            image: "/images/events/event5.png",
            title: "Sounds from The East",
            venue: "14 Singila,Mwatate,Taita Tevata",
            startTime: "02:30 pm",
            endTime: "07:00 pm",
            price: 4500.00
        },
    ];
    try {
        return Response.json({ status: 'success', data });
    } catch (error) {
        return Response.json({ status: 'error', desc: error.message });

    }

}