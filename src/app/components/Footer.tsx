import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    const links = [
        {
            id: 1,
            link: "Giới thiệu",
            src: "/icons/item.png",
        },
        {
            id: 2,
            link: "Chính sách bảo mật",
            src: "/icons/item.png",
        },
        {
            id: 3,
            link: "Tuyển dụng",
            src: "/icons/item.png",
        },
        {
            id: 4,
            link: "Tin tức về ECOGREEN",
            src: "/icons/item.png",
        },
        {
            id: 5,
            link: "Tài liệu bất động sản",
            src: "/icons/item.png",
        },
        {
            id: 6,
            link: "Liên hệ",
            src: "/icons/item.png",
        },
    ];
    const linkSeconds = [
        {
            id: 1,
            link: "Dành cho chủ đầu tư",
            src: "/icons/item.png",
        },
        {
            id: 2,
            link: "Dành cho đại lý bất động sản",
            src: "/icons/item.png",
        },
        {
            id: 3,
            link: "Dành cho môi giới nhà đất",
            src: "/icons/item.png",
        },
    ];
    const linkThirds = [
        {
            id: 1,
            link: "Quản lý chung",
            src: "/icons/item.png",
        },
        {
            id: 2,
            link: "Quản lý văn phòng",
            src: "/icons/item.png",
        },
        {
            id: 3,
            link: "Quản ý khu phức hợp",
            src: "/icons/item.png",
        },
        {
            id: 4,
            link: "Quản lý khu công nghiệp",
            src: "/icons/item.png",
        },
    ];
    return (
        <div className="text-white">
            <div className="bg-sky-800 flex p-10">
                <div className="flex gap-10 items-center justify-center">
                    <div className="flex flex-col w-5/12 gap-3">
                        <Image
                            src="/icons/logo.png"
                            width={109}
                            height={86}
                            alt="Picture of the author"
                        />
                        <p>Phần mềm quản lý bất động sản Landsoft là hệ thống giải pháp được
                            phát triển bởi Công ty cổ phần công nghệ DIP Việt Nam. Với nhiều
                            năm kinh nghiệm đi sâu vào thị trường Việt Nam và các nước Đông
                            Nam Á, chúng tôi hiểu tầm quan trọng của công nghệ ứng dụng
                            trong việc kinh doanh tại các thị trường này.</p>

                    </div>
                    <Image
                        src="/icons/followpage.png"
                        width={459}
                        height={130}
                        alt="Picture of the author"
                    />
                </div>

            </div>
            <div className="bg-sky-900 flex p-10 justify-center">
                <div className="flex flex-col mr-3">
                    <p>SITE MAP</p>
                    <hr className="w-60 h-0.5 mx-auto bg-white-100 border rounded md:my-1 dark:bg-white" />
                    <ul className="flex flex-col">
                        {links.map(({ id, link, src }) => (
                            <li
                                key={id}
                                className="nav-links cursor-pointer capitalize font-medium  hover:scale-105 hover:text-yellow-500 duration-200 link-underline"
                            >
                                <a href={link} className="flex items-center">
                                    <img className="flex-none w-4" src={src} />
                                    <span className="ml-2 text-zinc-400 text-sm truncate" title="Test with a very really long name (resize the browser to see it truncate)">{link}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-col mr-3">
                    <p>QUẢN LÝ KINH DOANH BDS</p>
                    <hr className="w-60 h-0.5 mx-auto bg-white-100 border rounded md:my-1 dark:bg-white" />
                    <ul className="flex flex-col">
                        {linkSeconds.map(({ id, link, src }) => (
                            <li
                                key={id}
                                className="nav-links cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-yellow-500 duration-200 link-underline"
                            >
                                <a href={link} className="flex items-center">
                                    <img className="flex-none w-4" src={src} />
                                    <span className="ml-2 truncate text-zinc-400 text-sm" title="Test with a very really long name (resize the browser to see it truncate)">{link}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col mr-3">
                    <p>QUẢN LÝ VẬN HÀNH BDS</p>
                    <hr className="w-60 h-0.5 mx-auto bg-white-100 border rounded md:my-1 dark:bg-white" />
                    <ul className="flex flex-col">
                        {linkThirds.map(({ id, link, src }) => (
                            <li
                                key={id}
                                className="nav-links cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-yellow-500 duration-200 link-underline"
                            >
                                <a href={link} className="flex items-center">
                                    <img className="flex-none w-4" src={src} />
                                    <span className="ml-2 truncate text-zinc-400 text-sm" title="Test with a very really long name (resize the browser to see it truncate)">{link}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col mr-3">
                    <p>THEO DÕI ECOGREEN</p>
                    <hr className="w-60 h-0.5 mx-auto bg-white-100 border rounded md:my-1 dark:bg-white" />
                    <div className="flex">
                        <Image
                            src="/icons/facebook.png"
                            width={40}
                            height={10}
                            alt="Picture of the author"
                        />
                        <Image
                            src="/icons/google.png"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <Image
                            src="/icons/youtube.png"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                        <Image
                            src="/icons/lidnken.png"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
            </div>
            <hr className="w-full bg-white-100 border-0 rounded h-0.5 dark:bg-gray-700" />
            <div className="bg-sky-900 flex p-5 justify-center">
                <p>@ Trịnh Quốc Công</p>
            </div>
        </div>
    );
}


export default Footer