export const Home = () => {
    return (
        // TODO: Do social media buttons with svgs
        <section className="w-screen pt-[200px]">
            <div className="flex flex-col justify-center items-center divide-y-[1px]">
                <h1 className="w-4/5 flex justify-center text-9xl font-bold uppercase pb-[20px]">Uriel Roman</h1>
                <p className="w-4/5 flex justify-center items-center text-5xl font-thin pt-[20px]">Front End Developer</p>
            </div>
            <div className="flex justify-center items-center mt-20">
                <ul className="flex flex-row gap-20">
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </section>
    )
}