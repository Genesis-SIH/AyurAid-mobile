import { useSelector } from "react-redux";
import { selectUserToken, selectLoggedIN,selectUser } from "../features/userSlice";


export function UserToken() { return useSelector(selectUserToken) }
export function LoggedIn() { return useSelector(selectLoggedIN) }
export function User() { return useSelector(selectUser) }


