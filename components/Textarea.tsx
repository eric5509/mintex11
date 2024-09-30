type Props = {
    label: string
    placeholder?: string
    height?: string
}

export default function Textarea({ label, placeholder, height }: Props) {
    return (
        <div>
            <p className="text-sm mb-2 text-[#ECEDEE]">{label}</p>
            <div style={{height: `${height}`}} className="h-32 w-full overflow-hidden bg-[#323434] rounded-md relative">
                <textarea placeholder={placeholder} className="h-full p-4 placeholder:text-[#9EA3A9] bg-transparent outline-none w-full">
                </textarea>
            </div>
        </div>
    )
}
