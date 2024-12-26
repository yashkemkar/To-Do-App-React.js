export function Header() {
    return (
        <header>
            <h1 className="text-gradient"> You have {number_of_open_tasks} open tasks.</h1>
        </header>
    )
}

let number_of_open_tasks = 3