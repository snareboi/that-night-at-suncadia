// "use client"
// import { useState } from 'react';
// import { usePathname } from "next/navigation";

export default function WhiteBox({Content}) {
    // const path = usePathname();
    // if(!path.startsWith("/studio")) {
        return (
            <section className="top-0 sticky bg-gray-200 ml-auto mr-auto mt-10 max-w-3xl min-w-1 opacity-90 text-black">
                <div className="max-w-7xl p-8 mx-auto flex-col text-left">
                    {Content}
                </div>
            </section>
        )
//  }    
}
    