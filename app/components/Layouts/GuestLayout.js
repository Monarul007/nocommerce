import Image from "next/image";

export default function GuestLayout({ children }) {

    return (
        <>
            {/* <!--Simple CSS Waves--> */}
            <div className="header guest-layout-wrapper">
                <div className="logo text-center py-12">
                    <Image
                        src={'/images/cart-64-white.png'}
                        alt="NextShop Logo"
                        width={64}
                        height={64}
                        className="m-auto text-center"
                        priority
                    />
                    <h3 className="text-lg font-semibold">NextShop</h3>
                </div>

                {/* <!--Waves Container--> */}
                <div>
                    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                        <defs>
                            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                        </defs>
                        <g className="parallax">
                            <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
                            <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                            <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                        </g>
                    </svg>
                </div>
                {/* <!--Waves end--> */}

            </div>
            {/* <!--Header ends--> */}

            {/* <!--Content starts--> */}
            <div className="content p-8">
                {children}
            </div>
            {/* <!--Content ends--> */}
        </>
    )
}