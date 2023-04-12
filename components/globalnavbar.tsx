import Link from "next/link";

export default function GlobalNavbar() {
    return (
        <nav className="bg-gray-900">
            <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-md font-medium">หน้าแรก</Link>
                                <Link href="/" className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-md font-medium">หน้าแรก</Link>
                                <Link href="/sport" className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-md font-medium">อุปกรณ์กีฬา</Link>
                                <Link href="/contact" className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-md font-medium">ติดต่อเรา</Link>
                                <Link href="/aboutus" className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-md font-medium">เกี่ยวกับเรา</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Link href="/login" className="text-gray-300 hover:text-green-600 px-3 py-2 rounded-md text-md font-medium">Login / Sign up</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}