import { useSelector } from "react-redux";
import { selectUserToken, selectLoggedIN,selectUser ,selectLanguage,selectFirstTimeLogin} from "../features/userSlice";


export function UserToken() { return useSelector(selectUserToken) }
export function LoggedIn() { return useSelector(selectLoggedIN) }
export function User() { return useSelector(selectUser) }
export function Language() { return useSelector(selectLanguage) }
export function FirstTimeLogin() { return useSelector(selectFirstTimeLogin) }



