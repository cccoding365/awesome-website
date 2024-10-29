import AwMainContainer from "@/components/AwMainContainer"
import AwSidebar from "@/components/AwSidebar"
import AwNavbar from "@/components/AwNavbar"

export default function Home() {
    return (
        <div className="flex">
            <AwSidebar></AwSidebar>
            <div>
                <AwNavbar></AwNavbar>
                <AwMainContainer></AwMainContainer>
            </div>
        </div>
    )
}
