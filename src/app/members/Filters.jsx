"use client"

export default function Filters ({ selected, select }) {
    return (
        <div className="flex gap-8 justify-center mt-10">
            <Tab select={select} selected={selected} i={0}>All</Tab>
            <Tab select={select} selected={selected} i={1}>Algo</Tab>
            <Tab select={select} selected={selected} i={2}>Intel</Tab>
            <Tab select={select} selected={selected} i={3}>GDSC</Tab>
            <Tab select={select} selected={selected} i={4}>Systems</Tab>
            <Tab select={select} selected={selected} i={5}>Alumni</Tab>
        </div>
    )
}

function Tab ({ children, select, selected, i }) {
    let active = selected == i

    return (
        <div
            className={`py-1 px-8 border border-primary-500 ${active ? "animate-shimmer bg-[linear-gradient(110deg,#016198,45%,#0177BD,55%,#016198_65%)] bg-[length:200%_100%]" : "hover:bg-primary-500/30 duration-200"} transition-colors rounded-md cursor-pointer`}
            onClick = {() => select(i)}
        >
            {children}
        </div>
    )
}
