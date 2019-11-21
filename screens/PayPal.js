import React from "react";
import { View, Text, TouchableOpacity, Modal, SafeAreaView, StyleSheet, Button } from "react-native";
import { WebView } from "react-native-webview"
import {FontAwesome5} from '@expo/vector-icons'

export default class PayPal extends React.Component {
    state = {
        showModal: false,
        status: "Pending"
    };
    handleResponse = data => {
        if (data.title === "success") {
            this.setState({ showModal: false, status: "Complete" });
        } else if (data.title === "cancel") {
            this.setState({ showModal: false, status: "Cancelled" });
        } else {
            return;
        }
    };
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView 
            style={{flex: 1}}>
                <Modal
                    visible={this.state.showModal}
                    onRequestClose={() => this.setState({ showModal: false })}
                >
                    <WebView
                        source={{ uri: "http://localhost:3000" }}
                        onNavigationStateChange={data =>
                            this.handleResponse(data)
                        }
                        injectedJavaScript={`document.f1.submit()`}
                    />
                </Modal>
                <TouchableOpacity
                    style={{ 
                    alignItems: "center",
                    justifyContent: "center",
                    width: 300, 
                    height: 100 }}
                    onPress={() => 
                    this.setState({ showModal: true })}
                >
                <FontAwesome5 name="bars" size={24} color='#161924'/>
                </TouchableOpacity>
                <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text style={styles.text}>{this.props.text} 
                </Text>
                <Text style={styles.text}>
                {this.state.status}
                </Text>
                </View>
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'pink',
    },
    title: {
      fontSize: 50,
      fontFamily: 'Cochin',
      fontWeight: '500',
      color:'#161924'
    },
    text: {
      fontSize: 20,
      fontFamily: 'Cochin',
      fontWeight: 'normal',
      color:'#161924',
      textAlign: 'center',
      padding: 16,
    },
    profile: {
      width: 80,
      height: 80,
      borderRadius: 40,
      borderWidth: 3,
      borderColor: 'white'
  },
  })


// import React from "react";
// import { View, Text, TouchableOpacity, Modal, WebView } from "react-native";

// export default class PayPal extends React.Component {
//     state = {
//         showModal: false,
//         status: "Pending"
//     };
//     handleResponse = data => {
//         if (data.title === "success") {
//             this.setState({ showModal: false, status: "Complete" });
//         } else if (data.title === "cancel") {
//             this.setState({ showModal: false, status: "Cancelled" });
//         } else {
//             return;
//         }
//     };
//     render() {
//         return (
//             <View style={{ marginTop: 100 }}>
//                 <Modal
//                     visible={this.state.showModal}
//                     onRequestClose={() => this.setState({ showModal: false })}
//                 >
//                     <WebView
//                         source={{ uri: "http://localhost:3000" }}
//                         onNavigationStateChange={data =>
//                             this.handleResponse(data)
//                         }
//                         injectedJavaScript={`document.f1.submit()`}
//                     />
//                 </Modal>
//                 <TouchableOpacity
//                     style={{ width: 300, height: 100 }}
//                     onPress={() => this.setState({ showModal: true })}
//                 >
//                     <Text>Pay with Paypal</Text>
//                 </TouchableOpacity>
//                 <Text>Payment Status: {this.state.status}</Text>
//             </View>
//         );
//     }
// }