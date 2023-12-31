import Title_ from "./Title"

interface LayoutProps {
    title: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="`
        flex flex-col w-2/3
        bg-white text-gray-800 rounded-md
        `">
            <Title_>{props.title}</Title_>
            <div className="p-6">
                {props.children}
            </div>

        </div>
    )
}