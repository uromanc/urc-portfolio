export const Navbar = () => {
    return (
        // TODO: Do SVG logo import
        // TODO: Do anchor tags for menu
        // TODO: Do Dropdown for language button and theme button
        // TODO: Add translates from i18n
        <nav className="w-full mt-3">
            <div className="flex justify-between items-center m-5 gap-[80px]">
                <div className="w-full flex justify-center">
                    <span className="text-4xl font-black">URC</span>
                </div>
                <div className="w-full flex items-center justify-center gap-[10px]">
                    <ul className="flex flex-row gap-[80px] text-xl font-semibold">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Experience</li>
                        <li>Skills</li>
                    </ul>
                </div>
                <div className="w-full flex justify-center">
                    <ul className="flex flex-row gap-5 text-sm font-semibold">
                        <li>Language</li>
                        <li>Theme</li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}