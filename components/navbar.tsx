export default function Navbar() {
    return (
        <nav className="bg-gray-900">
            <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">หน้าแรก</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">อุปกรณ์กีฬา</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">ติดต่อเรา</a>
                                <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">เกี่ยวกับเรา</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow flex justify-center">
                        <span className="text-white text-md font-medium">ยินดีต้อนรับสู่ ศูนย์เช่ายืมอุปกรณ์กีฬา @สนามกีฬาแห่งชาติ</span>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-md font-medium">Login / Sign up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}