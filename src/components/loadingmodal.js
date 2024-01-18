import { LoadingModal as LoadingModalRaw } from "react-native-loading-modal";


export default function LoadingModal(props) {

    return(
        <LoadingModalRaw  modalVisible={props.modalVisible} darkMode  />
    )
}