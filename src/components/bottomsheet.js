import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import { Colors } from "../utils";
import AppText from "./text";


export const BottomSheet = React.forwardRef((props, ref) => (
        <RBSheet
            ref={ref} 
            height={props.height}
            closeOnDragDown={true} closeOnPressMask={props.closeOnPressMask? props.closeOnPressMask :true}
            animationType={'fade'} dragFromTopOnly={true}
            customStyles={{
            container: { padding: 10, borderTopRightRadius: 20, borderTopLeftRadius: 20,backgroundColor:'#121212' },
            draggableIcon: { backgroundColor: Colors.primary }
            }}>
            {props.customHeader && props.customHeader}
            
            {props.heading && <AppText bold style={{ padding: 5, fontSize: 18, color: Colors.primary, }}>{props.heading}</AppText>}
        
            {props.description && <AppText style={{ padding: 5, fontSize: 14, color: 'grey', marginBottom:10 }}>{props.description}</AppText>}
        
        {props.children}
        </RBSheet>
    ))
