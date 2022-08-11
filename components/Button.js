import { View, Text, TouchableOpacity, Image } from 'react-native'


import {COLORS, SIZES, FONTS, SHADOWS} from '../constants'


export const CircleButton = ( {imgURL, handlePress, ...props} ) => {
  return (
 <TouchableOpacity
 style={{
     width: 40,
     height: 40,
     backgroundColor: COLORS.white,
     position: 'absolute',
     borderRadius: SIZES.extraLarge,
     alignItems: 'center',
     justifyContent:'center',
     ...SHADOWS.light,
     ...props
 }}
 onPress={handlePress}
 >
     <Image
     source={imgURL}
     resizeMode="contain"
     style={{width: 24, height: 24}} />
 </TouchableOpacity>
  )
}

export const RectButton = (minWidth, fontSize, handlePress, ...props) => {
    return (
      <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: 120,
        padding: SIZES.small,
        ...props
    }}
    onPress={handlePress}
      >
         <Text style={{
           fontFamily: FONTS.semiBold,
           fontSize: SIZES.font,
           color: COLORS.white,
           textAlign: 'center'
         }}>
           Faça um lance
         </Text>
      </TouchableOpacity>
    )
  }
  
