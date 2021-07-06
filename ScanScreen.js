import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'




export default class Scanscreen extends React.Component{


    constructor(){
        super();
        this.state = {

            hasCameraPermisions: null, 
            scanned: false, 
            scannedData: '', 
            buttonState: 'normal', 

        }
    }
    getCameraPermissions = async () => {

        const {status} = await Permissions.askAsync(Permissions.CAMERA)
        this.setState({

            //status === grantedIsTrue status === grantedIsFalse
            hasCameraPermisions: status === 'granted', 
            buttonState: 'clicked',
            scanned: false,

        })
    }

    handleBarCodeScanner = async ({type, data}) => {

        this.setState({

            scanned: true, 
            scanData: data, 
            buttonState: 'normal'

        })
    }


    render(){        
        
        /*const hasCameraPermisions = this.state.hasCameraPermisions;

        const scanned = this.state.scanned; 
        const buttonState = this.state.buttonState;
        */
        
        if(this.state.buttonState === 'clicked' && this.state.hasCameraPermisions){

            return(

                <BarCodeScanner style = {StyleSheet.absoluteFillObject} onBarCodeScanned = {this.state.scanned ? undefined: this.handleBarCodeScan} />

            )
            

        }


        else if(this.state.buttonState === "normal"){
            return(
            <View>
                
                <Image style={styles.image} 
                source={{
                  uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Barcode-scanner.jpg/220px-Barcode-scanner.jpg"
                }}/>

                <Text style = {{fontSize: 30}}>Bar Code Scanner</Text>

                <Text style = {styles.textStyle}>{this.state.hasCameraPermission ? this.state.scanData : "RequestCameraPermission"}</Text>

                <TouchableOpacity
                    onPress = {this.getCameraPermissions}
                    style = {styles.scannerButton}
                ><Text style = {styles.scannerButtonText}>Scan a Code</Text></TouchableOpacity>

            </View>
        );
        }

    }

}


const styles = StyleSheet.create({


    scannerButton:{

        backgroundColor: '#2196F3', 
        padding: 10,
        margin: 10, 

    }, 
    scannerButtonText: {

        fontSize: 15,
        textAlign: 'center',
        marginTop: 10

    }, 
    textStyle: {

        fontSize: 15,
        textAlign: 'center',
        marginTop: 10, 
        marginLeft: 1,

    }, 

    image:{
        width: 150,
        height: 150,
        marginLeft: 6,
        marginTop: 10,
      },


})