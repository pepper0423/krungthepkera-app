import Link from "next/link";

export default function login() {
    return (
        <>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="font-bold text-2xl mb-5 text-center text-black">เข้าสู่ระบบ</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <form className="pt-6 pb-8 mb-4">
                                    <div className="relative">
                                        <label htmlFor="email" className="font-bold text-gray-700 block mb-2">ที่อยู่อีเมล</label>
                                        <input type="email" id="email" name="email" placeholder="you@example.com" autoComplete="email" required className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                    </div>
                                    <div className="mt-4">
                                        <label htmlFor="password" className="font-bold text-gray-700 block mb-2">รหัสผ่าน</label>
                                        <input type="password" id="password" name="password" placeholder="********" autoComplete="current-password" required className="border border-gray-400 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                    </div>
                                    <div className="mt-6 text-center">
                                        <div className="mx-auto">
                                            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 py-2 px-4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400">เข้าสู่ระบบ</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="pt-4 text-base text-center">
                                    <p className='text-black'>ยังไม่มีบัญชี? <Link href="/register" className="font-medium text-indigo-500 hover:text-indigo-600">สมัครสมาชิกที่นี่.</Link></p>
                                </div>
                                <div className="pt-4 text-base text-center">
                                    <Link href="#" className="font-medium text-indigo-500 hover:text-indigo-600">ลืมรหัสผ่าน?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}