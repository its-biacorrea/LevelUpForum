import { Text, View, StyleSheet, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-native-paper";

export default function ImagePickerScreen() {
  const [hasCameraPermission, setHasCameraPermission] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const permissionResponse =
        await ImagePicker.requestCameraPermissionsAsync();
      const { status } = permissionResponse;
      if (status === "granted") {
        Alert.alert("A permissão para acessar a câmera foi negada.");
      } else {
        setHasCameraPermission(true);
      }
    })();
  }, []);

  const getImage = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
      aspect: [4, 3],
    });
    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      <Text>Captura de Imagem</Text>
      <Text>{hasCameraPermission ? "Sim" : "Não"}</Text>
      <Button title="Capturar" onPress={getImage} />
      {image && <Image source={{ uri: image }} />}
    </View>
  );
}
