import ModalScreen from "@/src/components/ModalScreen";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "./Button";
import { useState } from "react";
import { ThemedText } from "./ThemedText";

type Props = {
    isVisible: boolean;
    onClose: () => void;
};

export default function RegistroEmailUUID({ isVisible, onClose }: Props) {
    const [email, setEmail] = useState<string>("");
    const [UUIDgerado, setUUID] = useState<string>("");

    const GeradorDeUUID = () => {
        const generatedUUID = crypto.randomUUID();
        setUUID(generatedUUID);
    };

    return (
        <ModalScreen isVisible={isVisible} onClose={onClose}>
            <ThemedText style={{ color: "#fff" }}>Insira um email:</ThemedText>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#ddd"
                style={{
                    color: "#fff",
                    borderColor: "#ccc",
                }}
            />
            <Button label="Gerar UUID" onPress={GeradorDeUUID} />
            <ThemedText style={{ color: "#fff" }}>
                E-mail cadastrado: {email}
            </ThemedText>
            <ThemedText style={{ color: "#fff" }}>
                Seu UUID gerado é: {UUIDgerado}
            </ThemedText>
        </ModalScreen>
    );
}
