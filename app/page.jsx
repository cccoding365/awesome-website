import AwMainContainer from "@/app/components/AwMainContainer"
import AwSidebar from "@/app/components/AwSidebar"
import AwNavbar from "@/app/components/AwNavbar"

export default function Home() {
    return (
        <div className="flex">
            <AwSidebar></AwSidebar>
            <div className="flex-1">
                <AwNavbar></AwNavbar>
                <AwMainContainer></AwMainContainer>
            </div>
        </div>
    )
}
