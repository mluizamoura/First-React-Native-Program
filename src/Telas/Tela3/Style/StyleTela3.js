import { StyleSheet } from "react-native";

const StyleTela3 = StyleSheet.create({

    principal: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        backgroundColor: '#E5E5E5',
        

    },
    container: {
        backgroundColor: '#FFFFFF',
        width: 320,
        height: 150,
        marginTop: 20,
        marginLeft: 45,
        borderRadius: 20,
        
        
    },
    caixa1: {
        width: '100%',
        height: '50%',
        borderRadius: 20,
        
    },
    textoprincipal: { //data e horário 
        textAlign: "center",
        bottom: 35,
        lineHeight: 24,
        fontWeight: '400',
        color: '#ACACAC',
        
    },

    image: {
        width: 57,
        height: 57,
        top: 15,
        left: 15,
        
    },

    textohorario: { //horario   
        height: 60,
        bottom: 80,
        textAlign: "center",
        fontSize: 14,
        lineHeight: 21,
        color: '#ACACAC',
        left: 25,

    },
    caixa2: {
        width: '100%',
        height: '20%',
        flexDirection: "row",
        paddingLeft: 20,
        paddingTop: 5,
        
        
    },

    Iconefesta: {
        top: 50,
        marginLeft: 30,
        

    },

    caixa3: {
        width: '100%',
        height: '30%',
        borderRadius: 20,
        left: 10,
        right: 30,
        
    },
    textorodape: {
        width: 250,
        height: 50,
        color: '#ACACAC',
        marginTop: 10, 
        fontSize: 13,
        paddingLeft: 10,
      
    },

    textoIcone: {
        marginLeft: 20,
        width: '900',   
    },
    ColorText1: {
        color: '#000000',
        marginLeft: 10,
    },
    Ponto: {
        marginTop: 8,
        marginLeft: 10,

    }
});

export default StyleTela3;