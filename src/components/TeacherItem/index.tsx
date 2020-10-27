import React from 'react';
import { View, Image, Text } from 'react-native';
import {RectButton} from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: 'https://pbs.twimg.com/profile_images/532661239529230336/7g5Oglgi_400x400.jpeg'}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Fernando Naruto</Text>
          <Text style={styles.subject}>Química</Text>
        </View>
      </View>

      <Text style={styles.bio} >
        Fernadninho das melhores fernandagens de fernandagem avançada
        {'\n'}{'\n'}
        Apaixonado por fernandar coisas em laboratórios e por mudar a vida das pessoas através de memes
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}> Entrar em contato </Text>
          </RectButton>
        </View>
      </View>

    </View>
  )
}

export default TeacherItem;