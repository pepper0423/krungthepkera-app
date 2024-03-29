import GlobalNavbar from "@/components/globalnavbar";
import Carousel from "@/components/carousel";
import Link from "next/link";
import Breadcrumb from "@/components/breadcrumbs";

const images = [
    'https://cdn.pixabay.com/photo/2016/07/05/16/53/leaves-1498985__340.jpg',
];

type Item = {
    id: number;
    image: string;
    text: string;
};

const items: Item[] = [
    {
        id: 1,
        image: 'https://source.unsplash.com/random/400x400?sig=1',
        text: 'Item 1',
    },
    {
        id: 2,
        image: 'https://source.unsplash.com/random/400x400?sig=2',
        text: 'Item 2',
    },
    {
        id: 3,
        image: 'https://source.unsplash.com/random/400x400?sig=3',
        text: 'Item 3',
    },
    {
        id: 4,
        image: 'https://source.unsplash.com/random/400x400?sig=4',
        text: 'Item 4',
    },
    {
        id: 5,
        image: 'https://source.unsplash.com/random/400x400?sig=5',
        text: 'Item 5',
    },
    {
        id: 6,
        image: 'https://source.unsplash.com/random/400x400?sig=6',
        text: 'Item 6',
    },
    {
        id: 7,
        image: 'https://source.unsplash.com/random/400x400?sig=7',
        text: 'Item 7',
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/400x400?sig=8',
        text: 'Item 8',
    },
    {
        id: 9,
        image: 'https://source.unsplash.com/random/400x400?sig=9',
        text: 'Item 9',
    },
    {
        id: 10,
        image: 'https://source.unsplash.com/random/400x400?sig=10',
        text: 'Item 10',
    },
    {
        id: 11,
        image: 'https://source.unsplash.com/random/400x400?sig=11',
        text: 'Item 11',
    },
    {
        id: 12,
        image: 'https://source.unsplash.com/random/400x400?sig=12',
        text: 'Item 12',
    },
    // add more items here
];

const breadcrumbItems = [
    { label: 'เลือกประเภทกีฬา' },
];

export default function sport() {
    return (
        <>
            <div>
                <GlobalNavbar />
            </div>
            <div className="relative">
                <Carousel>
                    {images.map((image) => (
                        <div key={image} className="relative h-screen">
                            <img src={image} className="h-full brightness-75" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                                <h1 className="text-6xl font-bold text-white">เลือกประเภทกีฬา</h1>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <Breadcrumb breadcrumb={breadcrumbItems} />
            <div className="bg-blue-200">
                <div className="container mx-auto py-6">
                    <div className="grid grid-cols-3 gap-4">
                        {items.map((item: Item) => (
                            <Link key={item.id} href={`/sport/${item.id}`} className="bg-white rounded-lg shadow-md cursor-pointer transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                                <img src={item.image} alt={item.text} className="w-full h-48 object-cover rounded-t-lg" />
                                <div className="p-4 text-center">
                                    <p className="font-bold text-lg text-black">{item.text}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}