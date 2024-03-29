import GlobalNavbar from "@/components/globalnavbar";
import Carousel from "@/components/carousel";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';
import Breadcrumb from "@/components/breadcrumbs";
import { RangeSlider } from "@/components/slider";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const images = [
    'https://cdn.pixabay.com/photo/2016/07/05/16/53/leaves-1498985__340.jpg',
];

type Item = {
    id: number;
    image: string;
    text: string;
    brand: string;
    price: number;
};

const items: Item[] = [
    {
        id: 1,
        image: "https://source.unsplash.com/random/400x400?sig=1",
        text: "Item 1",
        brand: "Brand A",
        price: 100,
    },
    {
        id: 2,
        image: "https://source.unsplash.com/random/400x400?sig=2",
        text: "Item 2",
        brand: "Brand A",
        price: 200,
    },
    {
        id: 3,
        image: "https://source.unsplash.com/random/400x400?sig=3",
        text: "Item 3",
        brand: "Brand B",
        price: 300,
    },
    {
        id: 4,
        image: "https://source.unsplash.com/random/400x400?sig=4",
        text: "Item 4",
        brand: "Brand C",
        price: 400,
    },
    {
        id: 5,
        image: "https://source.unsplash.com/random/400x400?sig=5",
        text: "Item 5",
        brand: "Brand A",
        price: 500,
    },
    {
        id: 6,
        image: "https://source.unsplash.com/random/400x400?sig=6",
        text: "Item 6",
        brand: "Brand B",
        price: 600,
    },
    {
        id: 7,
        image: "https://source.unsplash.com/random/400x400?sig=7",
        text: "Item 7",
        brand: "Brand C",
        price: 700,
    },
    {
        id: 8,
        image: 'https://source.unsplash.com/random/400x400?sig=8',
        text: 'Item 8',
        brand: 'Brand C',
        price: 800,
    },
    {
        id: 9,
        image: 'https://source.unsplash.com/random/400x400?sig=9',
        text: 'Item 9',
        brand: 'Brand B',
        price: 900,
    },
    {
        id: 10,
        image: 'https://source.unsplash.com/random/400x400?sig=10',
        text: 'Item 10',
        brand: 'Brand A',
        price: 1000,
    },
    {
        id: 11,
        image: 'https://source.unsplash.com/random/400x400?sig=11',
        text: 'Item 11',
        brand: 'Brand B',
        price: 150,
    },
    {
        id: 12,
        image: 'https://source.unsplash.com/random/400x400?sig=12',
        text: 'Item 12',
        brand: 'Brand C',
        price: 250,
    },
    // add more items here
];

const breadcrumbItems = [
    { label: 'เลือกประเภทกีฬา', href: '/sport' },
    { label: 'เลือกอุปกรณ์กีฬา' },
];

export default function sport() {

    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(1000);

    const router = useRouter();
    const currentPath = router.asPath;

    // filtering function
    const filtered = items.filter(item => {
        // check if item's brand is included in selected brands or if no brand is selected
        const brandIncluded = selectedBrands.length === 0 || selectedBrands.includes(item.brand);
        // check if item's price is within the selected price range
        const priceInRange = item.price >= minPrice && item.price <= maxPrice;
        return brandIncluded && priceInRange;
    });

    const filteredItems = filtered;

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
                                <h1 className="text-6xl font-bold text-white">เลือกอุปกรณ์กีฬา</h1>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <Breadcrumb breadcrumb={breadcrumbItems} />
            <div className="grid grid-cols-6">
                <div className="bg-gray-200">
                    <div className="grid grid-rows-3 gap-4 py-8 px-8">
                        <div>
                            <h1 className="text-3xl text-black">ตัวกรอง</h1>
                        </div>
                        <div>
                            <h1 className="text-3xl text-black">ราคา</h1>
                            <div className="pt-4">
                                <RangeSlider
                                    min={0}
                                    max={1000}
                                    minPrice={minPrice}
                                    maxPrice={maxPrice}
                                    onChange={(minValue, maxValue) => {
                                        setMinPrice(minValue);
                                        setMaxPrice(maxValue);
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-3xl text-black">ยี่ห้อ</h1>
                            <div className="flex flex-col gap-2 py-2">
                                <div>
                                    <FormControlLabel
                                        label="Brand A"
                                        value="Brand A"
                                        control={<Checkbox
                                            color="success"
                                            id="brandA"
                                            name="brandA"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedBrands([...selectedBrands, e.target.value]);
                                                } else {
                                                    setSelectedBrands(selectedBrands.filter((brand) => brand !== e.target.value));
                                                }
                                            }}
                                            checked={selectedBrands.includes('Brand A')}
                                            defaultChecked
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />}
                                        sx={{ typography: 'h6', color: 'black' }}
                                    />
                                </div>
                                <div>
                                    <FormControlLabel
                                        label="Brand B"
                                        value="Brand B"
                                        control={<Checkbox
                                            color="success"
                                            id="brandB"
                                            name="brandB"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedBrands([...selectedBrands, e.target.value]);
                                                } else {
                                                    setSelectedBrands(selectedBrands.filter((brand) => brand !== e.target.value));
                                                }
                                            }}
                                            checked={selectedBrands.includes('Brand B')}
                                            defaultChecked
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />}
                                        sx={{ typography: 'h6', color: 'black' }}
                                    />
                                </div>
                                <div>
                                    <FormControlLabel
                                        label="Brand C"
                                        value="Brand C"
                                        control={<Checkbox
                                            color="success"
                                            id="brandC"
                                            name="brandC"
                                            onChange={(e) => {
                                                if (e.target.checked) {
                                                    setSelectedBrands([...selectedBrands, e.target.value]);
                                                } else {
                                                    setSelectedBrands(selectedBrands.filter((brand) => brand !== e.target.value));
                                                }
                                            }}
                                            checked={selectedBrands.includes('Brand C')}
                                            defaultChecked
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                        />}
                                        sx={{ typography: 'h6', color: 'black' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-5 bg-white">
                    <div className="container mx-auto px-4 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredItems.map((item) => (
                                <Link href={`/${currentPath}/${item.id}`} key={item.id} className="block border rounded-lg overflow-hidden hover:shadow-md">
                                    <img src={item.image} alt={item.text} className="w-full" />
                                    <div className="p-4">
                                        <h2 className="text-xl font-bold mb-2 text-black">{item.text}</h2>
                                        <p className="text-gray-600">{item.price}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
