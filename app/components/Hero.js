export default function Hero() {
    return (
        <div className="hero bg-base-200">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">
                        Hello World!👋
                    </h1>
                    <p className="mb-5">
                        Welcome to my personal website. I&apos;m Yamine Daroueche, a front-end developer.
                    </p>
                    <div role="alert" className="mb-5 alert alert-warning">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>This site is in maintenance, come back later.</span>
                    </div>
                    <button className="btn btn-primary" disabled>Get Started</button>
                </div>
            </div>
        </div>
    );
}