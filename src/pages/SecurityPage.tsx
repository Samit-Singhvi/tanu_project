import {SectionTitle} from "../components/SectionTitle";

export function SecurityPage() {
    return (
        <section className='pt-[3.5rem] h-screen'>
            <SectionTitle text='User Security & Responsibilites'/>
            <h2 className='heading-2'>Issue</h2>
            <p className='text-center text-xl'>
                User should maintain our code of conduct and obey to all cares. Lorem ipsum doler sit amet.
            </p>

            <h2 className='heading-2'>Maintenance</h2>
            <p className='text-justify px-7'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </section>
    )
}