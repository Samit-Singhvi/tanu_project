interface Props {
    text: string
}

export function SectionTitle({text}: Props) {
    return (
        <h1 className='text-3xl sm:text-5xl text-center font-semibold py-4 sm:py-5'>
            {text}
        </h1>
    )
}