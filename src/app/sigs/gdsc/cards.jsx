import Card from "../LogoCard"
import rg from "../helpers/radial_gradient"

export default [
    [
        <Card size={69} bg={rg("#00000010")} src="/technologies/next.svg" />,
        <Card size={55} bg={rg("#38bdf825")} src="/technologies/tailwind.svg" />,
        <Card size={75} bg={rg("#d3000125")} src="/technologies/rails.svg" />,
        <Card size={60} bg={rg("#ff3e0020")} src="/technologies/svelte.svg" />,
    ],
    [
        <Card size={50} bg={rg("#45d1fd30")} src="/technologies/flutter.png" />,
        <Card size={40} bg={rg("#9044fb29")} src="/technologies/kotlin.svg" />,
        <Card size={50} bg={rg("#f0513829")} src="/technologies/swift.svg" />,
        <Card size={65} bg={rg("#3ddc8430")} src="/technologies/android.png" />,
    ],
    [
        <Card size={50} bg={rg("#cc324929")} src="/technologies/travisci.png" />,
        <Card size={55} bg={rg("#4c81c325")} src="/technologies/githubactions.png" />,
        <Card size={55} bg={rg("#326de625")} src="/technologies/kubernetes.svg" />,
        <Card size={55} bg={rg("#e2432925")} src="/technologies/gitlab.svg" />,
    ],
    [
        <Card size={50} bg={rg("#c9b3f560")} src="/technologies/ethereum.svg" />,
        <Card size={45} bg={rg("#f5841f30")} src="/technologies/metamask.svg" />,
        <Card size={55} bg={rg("#fff10030")} src="/technologies/hardhat.svg" />,
        <Card size={50} bg={rg("#00000015")} src="/technologies/solidity.svg" />,
    ],
]