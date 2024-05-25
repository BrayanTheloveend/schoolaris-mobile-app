import { View, Text, Pressable} from 'react-native'
import React, { useState } from 'react'
import COLORS from '../Constant/color'
import * as DocumentPicker from 'expo-document-picker';
import  Ionicons  from 'react-native-vector-icons/Ionicons'

const FilePicker = () => {

    const [file, setFile] = useState()
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        setFile(result)
        console.log(result.uri);
        console.log(result);
    }

  return (
        <Pressable onPress={pickDocument} style={{marginBottom: 12}}>
            <View style={{
                width: '100%',
                height: 50,
                borderColor: file ? COLORS.secondary : COLORS.gray,
                borderWidth: 1,
                borderRadius: 10,
                justifyContent: 'center',
                paddingLeft: 22,
            }}>
                <Text style={{ color :  file ? COLORS.secondary : COLORS.black }}>{file ? 'Document Importée' : 'Importer un document'}</Text>

                <View
                    style={{
                        position: 'absolute',
                        right: 12
                    }}>
                    <Ionicons name='folder-outline' size={16} color={file ? COLORS.secondary : COLORS.black } />
                </View>
            </View>
        </Pressable>
  )
}

export default FilePicker