const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-purple-50">
            {/* Large colorful blob shapes - background layer */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Pink blob - top right */}
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cth-pink/20 to-cth-magenta/20 rounded-full blur-3xl"></div>
                {/* Blue blob - bottom left */}
                <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-br from-cth-blue/15 to-cth-green/15 rounded-full blur-3xl"></div>
                {/* Orange blob - center */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cth-orange/10 rounded-full blur-3xl"></div>
            </div>

            {/* Hand-drawn doodles - bolder */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-25">
                <svg className="absolute top-32 right-32 w-24 h-24" viewBox="0 0 100 100">
                    <path d="M10 50 Q 30 20, 50 50 T 90 50" stroke="#E91E8C" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
                <svg className="absolute bottom-40 left-20 w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="#F7941D" strokeWidth="2.5">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg className="absolute top-1/3 left-1/4 w-10 h-10" viewBox="0 0 50 50">
                    <circle cx="25" cy="25" r="20" fill="none" stroke="#00A1DE" strokeWidth="3" />
                </svg>
            </div>

            {/* Decorative illustrations - strategically placed */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Sunflower - top left */}
                {/* Sunflower - top left - BIGGER */}
                {/* <img
                    src="/images/sunflower.png"
                    alt=""
                    className="absolute top-10 left-10 w-28 h-28 lg:w-36 lg:h-36 opacity-90 rotate-12"
                /> */}

                {/* Balloons - top right - BIGGER */}
                <img
                    src="/images/balloons.png"
                    alt=""
                    className="absolute top-20 right-16 w-24 h-24 lg:w-32 lg:h-32 opacity-85"
                />

                {/* Rainbow with clouds - bottom right - BIGGER */}
                <img
                    src="/images/rainbow-clouds2.png"
                    alt=""
                    className="absolute bottom-32 right-10 w-40 h-40 lg:w-48 lg:h-48 opacity-80"
                />

                {/* Heart - bottom left - BIGGER */}
                {/* <img
                    src="/images/heart.png"
                    alt=""
                    className="absolute bottom-20 left-20 w-20 h-20 lg:w-24 lg:h-24 opacity-85"
                /> */}
                {/* Water/wave illustration - floating */}
                <img
                    src="/images/water.png"
                    alt="water"
                    className="absolute top-1/2 right-1/4 w-20 h-20 opacity-80"
                />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT SIDE - Text Content */}
                    <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
                        {/* Logo */}
                        <div className="space-y-4">
                            <img
                                src="/logo.png"
                                alt="Christ The Hope"
                                className="h-24 sm:h-28 lg:h-32 mx-auto lg:mx-0 drop-shadow-xl"
                            />
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight">
                                Children's Center
                            </h1>
                        </div>

                        {/* Mission */}
                        <p className="text-lg sm:text-xl text-gray-600 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                            A community-driven solution empowering disadvantaged children with basic needs to{' '}
                            <span className="relative inline-block">
                                <span className="text-cth-purple font-bold">thrive</span>
                                <svg className="absolute -bottom-1 left-0 w-full h-2" preserveAspectRatio="none" viewBox="0 0 100 8">
                                    <path d="M0 6 Q 50 0, 100 6" stroke="#7B2E7F" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                </svg>
                            </span>
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="#get-involved"
                                className="group px-8 py-3.5 bg-cth-blue hover:bg-cth-blue/90 text-white rounded-full font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                            >
                                Get Involved
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>

                            <a
                                href="#about"
                                className="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-700 rounded-full font-semibold text-base transition-all duration-300 shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-cth-purple"
                            >
                                Learn More
                            </a>
                        </div>

                        {/* Stats - horizontal row */}
                        <div className="pt-8">
                            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cth-purple to-cth-magenta flex flex-col items-center justify-center text-white shadow-xl hover:scale-105 transition-transform">
                                    <div className="text-xl font-black">50+</div>
                                    <div className="text-[9px] font-bold uppercase">Kids</div>
                                </div>

                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cth-green to-cth-blue flex flex-col items-center justify-center text-white shadow-xl hover:scale-105 transition-transform">
                                    <div className="text-xl font-black">100%</div>
                                    <div className="text-[9px] font-bold uppercase">Love</div>
                                </div>

                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cth-orange to-cth-pink flex flex-col items-center justify-center text-white shadow-xl hover:scale-105 transition-transform">
                                    <div className="text-xl font-black">∞</div>
                                    <div className="text-[9px] font-bold uppercase">Hope</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE - Overlapping Image Frames */}
                    <div className="relative h-[500px] lg:h-[600px] order-1 lg:order-2">
                        {/* Large abstract blob behind frames */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cth-pink/30 to-cth-blue/20 rounded-[3rem] transform rotate-6 scale-110 blur-2xl"></div>

                        {/* Frame 1 - Rotated left, behind */}
                        <div className="absolute top-8 left-0 w-72 h-80 lg:w-80 lg:h-96 transform -rotate-6 transition-transform hover:rotate-0 duration-500">
                            <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                                <img
                                    src="/images/hero_1.jpeg"
                                    alt="Children at Christ The Hope"
                                    className="w-full h-full object-cover"
                                />
                                {/* Decorative corner sticker */}
                                <div className="absolute -top-3 -right-3 w-12 h-12 bg-cth-orange rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    ✨
                                </div>
                            </div>
                        </div>

                        {/* Frame 2 - Rotated right, in front */}
                        <div className="absolute bottom-8 right-0 w-72 h-80 lg:w-80 lg:h-96 transform rotate-6 transition-transform hover:rotate-0 duration-500 z-10">
                            <div className="relative w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-white">
                                <img
                                    src="/images/hero_2.jpeg"
                                    alt="Community support at Christ The Hope"
                                    className="w-full h-full object-cover"
                                />
                                {/* Decorative corner sticker */}
                                <div className="absolute -top-3 -left-3 w-12 h-12 bg-cth-green rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                                    ❤️
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
                <a href="#about" className="text-gray-400 hover:text-cth-purple transition-colors">
                    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>

            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 80" fill="none" className="w-full h-auto">
                    <path d="M0,40 C320,60 640,20 960,40 C1120,50 1280,60 1440,40 L1440,80 L0,80 Z" fill="#F9FAFB" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
