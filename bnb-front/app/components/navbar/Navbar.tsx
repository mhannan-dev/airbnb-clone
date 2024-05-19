import Image from 'next/image';
import Link from 'next/link';
import Search from './Search';
import AddPropertyButton from './AddPropertyButton';
import UserNav from './UserNav';

const Navbar = () => {
    return (
        <nav className="w-full fixed top-0 left-0 py-4 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="DjangoBnb logo"
                            width={180}
                            height={38}
                        />
                    </Link>
                    <div className="flex space-x-6">
                       <Search/>
                    </div>
                    <div className="flex items-center space-x-6">
                        <AddPropertyButton />
                        <UserNav/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
