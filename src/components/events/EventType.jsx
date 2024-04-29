import { HiOutlineStatusOnline } from "react-icons/hi"
import { MdOutlineConnectedTv } from "react-icons/md";
import { BsPersonVideo3 } from "react-icons/bs";

export default function EventType ({ type }) {
    let Icon
    
    if (type == "Online") {
        Icon = <HiOutlineStatusOnline size={20} />
    } else if (type == "In-Person") {
        Icon = <BsPersonVideo3 size={18} />
    } else {
        Icon = <MdOutlineConnectedTv size={20} />
    }

    return (
        <p className="flex gap-2 items-center mb-3 text-sm">{Icon}{type}</p>
    )
}