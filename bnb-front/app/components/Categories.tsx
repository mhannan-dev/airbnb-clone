"use client";

import Image from "next/image";

const Categories = () => {
    console.log("Categories component rendered");
    return (
        <div className="pt-8 mt-16 pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - All"
                    width={40}
                    height={40}
                />
                <span className="text-xs">All</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-200 hover:opacity-100">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Beach"
                    width={40}
                    height={40}
                />
                <span className="text-xs">Beach</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-400 hover:opacity-100">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Villas"
                    width={40}
                    height={40}
                />
                <span className="text-xs">Villas</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-400 hover:opacity-100">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Cabins"
                    width={40}
                    height={40}
                />
                <span className="text-xs">Cabins</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 opacity-60 hover:border-gray-400 hover:opacity-100">
                <Image
                    src="/icn_category_beach.jpeg"
                    alt="Category - Tiny homes"
                    width={40}
                    height={40}
                />
                <span className="text-xs">Tiny homes</span>
            </div>
        </div>
    );
};

export default Categories;
