import React from "react";

export default class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <div className="contai flex w-full px-10 mb-8 bg-cyan-400 justify-between items-center py-4">
                    <div>
                        <a href="#home" className="text-2xl font-bold text-gray-800">News Exa</a>
                    </div>
                </div>
            </nav>
        )
    }
}