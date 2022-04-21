

export default function DisplayItem({Icon, header}){
    return(
        <div className="flex text-white bg-[rgba(0,0,0,0.25)] p-4 mb-4 items-center">
            <Icon className="text-[1.5rem]"/>
            <h1 className="mx-auto text-[1rem]">{header}</h1>
        </div>
    )
}