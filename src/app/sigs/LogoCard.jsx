export default function Card ({ bg="#fbfef9", size=60, src }) {
    return (
        <div className="flex justify-center items-center shadow rounded-lg cursor-pointer hover:-translate-y-1 hover:translate-x-1 duration-200 w-full h-full" style={{background: bg}}>
            <img src={src} alt="" style={{ width: size+"px", height: size+"px" }} />
        </div>
    )
}