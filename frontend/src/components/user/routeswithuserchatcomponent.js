import { Outlet } from "react-router-dom"
import UserChatComponent from "./userchatcomponent"

const RoutesWithUserChatComponent = () => {
    return (
        <>
            <UserChatComponent />
            <Outlet />
        </>
    )
}

export default RoutesWithUserChatComponent