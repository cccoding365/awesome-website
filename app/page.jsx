import AwMainContainer from "@/components/AwMainContainer"
import AwSidebar from "@/components/AwSidebar"
import AwNavbar from "@/components/AwNavbar"

export default function Home() {
    return (
        <div className="flex">
            <AwSidebar></AwSidebar>
            <div className="flex flex-col w-full">
                <AwNavbar></AwNavbar>
                <AwMainContainer></AwMainContainer>
            </div>
        </div>
    )
}
