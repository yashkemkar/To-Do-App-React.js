export function Tabs() {
    const tabs = ['All', 'Open', 'Completed']
    return (
        <nav className = "tab-container">
            {tabs.map((tab,tabIndex) => {
                return (
                    <button className = "button" key={tabIndex}>
                        <h4>{tab}</h4>
                    </button>
                )
            })}
        </nav>
    )
}