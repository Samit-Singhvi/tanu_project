import {SectionTitle} from "../components/SectionTitle";
import {FaDownload} from "react-icons/fa6";

const noticeData = [
    {
        sl: 1,
        title: "Important Notice",
        uploadDate: "2023-08-15",
        downloadLink: "#",
    },
    {
        sl: 2,
        title: "Upcoming Event",
        uploadDate: "2023-08-20",
        downloadLink: "#",
    },
    {
        sl: 3,
        title: "Holiday Closure",
        uploadDate: "2023-08-25",
        downloadLink: "#",
    },
    {
        sl: 4,
        title: "New Policy Update",
        uploadDate: "2023-08-28",
        downloadLink: "#",
    },
    {
        sl: 5,
        title: "Product Launch",
        uploadDate: "2023-09-05",
        downloadLink: "#",
    },
    {
        sl: 6,
        title: "Maintenance Schedule",
        uploadDate: "2023-09-10",
        downloadLink: "#",
    },
    {
        sl: 7,
        title: "Training Workshop",
        uploadDate: "2023-09-15",
        downloadLink: "#",
    },
    {
        sl: 8,
        title: "System Upgrade",
        uploadDate: "2023-09-20",
        downloadLink: "#",
    },
    {
        sl: 9,
        title: "Call for Volunteers",
        uploadDate: "2023-09-25",
        downloadLink: "#",
    },
    {
        sl: 10,
        title: "Annual General Meeting",
        uploadDate: "2023-09-30",
        downloadLink: "#",
    },
];

export function NoticePage() {
    const reversedNoticeData = [...noticeData].reverse();

    return (
        <section className='pt-[3.5rem]'>
            <SectionTitle text='Notice Board'/>

            <div className='flex justify-center w-full overflow-x-auto'>
                <table className='text-center w-full'>
                    <thead>
                    <tr className='h-[4.5rem] bg-blue-900 text-white font-raleway-500'>
                        <th className='w-[8rem]'>Serial</th>
                        <th className='w-[16rem]'>Title</th>
                        <th className='w-[16rem]'>Upload Date</th>
                        <th className='w-[2rem]'>Download</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        reversedNoticeData.map((data, idx) =>
                            <tr key={idx} className='h-[3.5rem] hover:bg-slate-400 transition-colors duration-300'>
                                <td>{data.sl}</td>
                                <td>{data.title}</td>
                                <td>{data.uploadDate}</td>
                                <td>
                                    <a href={data.downloadLink}
                                       className='btn btn-primary btn-circle text-xl'><FaDownload/></a>
                                </td>
                            </tr>)
                    }
                    </tbody>
                </table>
            </div>
            <div className='py-10'/>

            <div className="pagination flex justify-center pb-3">
                <button className="btn">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M12.2574 5.59165C11.9324 5.26665 11.4074 5.26665 11.0824 5.59165L7.25742 9.41665C6.93242 9.74165 6.93242 10.2667 7.25742 10.5917L11.0824 14.4167C11.4074 14.7417 11.9324 14.7417 12.2574 14.4167C12.5824 14.0917 12.5824 13.5667 12.2574 13.2417L9.02409 9.99998L12.2574 6.76665C12.5824 6.44165 12.5741 5.90832 12.2574 5.59165Z"
                              fill="#969696"/>
                    </svg>
                </button>
                <button className="btn btn-active">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd"
                              d="M7.74375 5.2448C7.41875 5.5698 7.41875 6.0948 7.74375 6.4198L10.9771 9.65314L7.74375 12.8865C7.41875 13.2115 7.41875 13.7365 7.74375 14.0615C8.06875 14.3865 8.59375 14.3865 8.91875 14.0615L12.7437 10.2365C13.0687 9.91147 13.0687 9.38647 12.7437 9.06147L8.91875 5.23647C8.60208 4.9198 8.06875 4.9198 7.74375 5.2448Z"
                              fill="#969696"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}