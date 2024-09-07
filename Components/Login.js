import { useState } from "react"
import { Button, Image, ImageBackground, Text, TextInput, View } from "react-native"

const Login=()=>{
    const[username, setUsername]= useState("")
    const[password, setPassword]= useState("")
    return(
        <View style={{flex:1}}>
            <ImageBackground
            source={{uri:"https://i.pinimg.com/736x/50/c0/5e/50c05e306ccc8b4a5f513a733c0737a2.jpg"}}
            style={{flex:1}}
            >
                <Image 
                    source={{uri: "https://images6.alphacoders.com/638/thumb-1920-638835.jpg"}}
                    style={{width: 300, height: 300, alignSelf: 'center', margin: 10, marginTop:150}}
                />

                <View style={{flex:3}}>
                    <Text style={{fontWeight:"bold",color:"black",fontSize:20,margin:20,marginBottom:10}}>
                    REGISTER
                    </Text>
                    <View style={{backgroundColor:"#00000070",margin:20,marginTop:0}}>
                        <TextInput 
                        style={{fontSize:15,fontWeight:"bold"}}
                        onChangeText={setUsername}
                        value={username}
                        keyboardType="default"
                        placeholder="USERNAME"
                        />
                        <TextInput 
                        style={{fontSize:15,fontWeight:"bold"}}
                        onChangeText={setPassword}
                        value={password}
                        keyboardType="default"
                        placeholder="PASSWORD"
                        secureTextEntry={true}
                        />
                        <Button 
                        style={{backgroundColor:"red"}}
                        title="LOGIN"
                        onPress={()=>{
                            alert(`Registration completed \n \n ${username} \n ${password}`)
                            setUsername("")
                            setPassword("")
                        }}
                        />
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Login