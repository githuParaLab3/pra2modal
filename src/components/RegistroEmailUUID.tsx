import ModalScreen from "@/src/components/ModalScreen";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "./Button";
import { useState } from "react";
import * as Crypto from "expo-crypto";
import { ThemedText } from "./ThemedText";


type Props = {
    isVisible: boolean;
    onClose: () => void;
};

export default function RegistroEmailUUID({ isVisible, onClose }: Props) {
    const [UUIDgerado, setUUID] = useState<String>("");

    const GeradorDeUUID = () => {
        const uuid = Crypto.randomUUID(); 
        setUUID(uuid);
    };
    return (
        <ModalScreen isVisible={isVisible} onClose={onClose}>
            <ThemedText>Insira um email:</ThemedText>
            <TextInput></TextInput>
            <Button label="Gerar UUID" onPress={GeradorDeUUID} />
            <ThemedText>UUID: {UUIDgerado}</ThemedText>
        </ModalScreen>
    );
};