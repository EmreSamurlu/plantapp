import React, {useState} from 'react';
import {
  Alert,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Button, ListingItem, PremiumItem} from '../../components';
import paymentListingItems from '../../constants/payment-listing-items';
import premiumOptions from '../../constants/premium-options';
import {screenHeight, screenWidth} from '../../constants/screenDimensions';
import styles from './PaymentWall.styles';

const PaymentWall = () => {
  const navigation = useNavigation();
  const [selectedItem, setSelectedItem] = useState();

  const handleTryButton = () => {
    if (selectedItem) {
      navigation.navigate('HomeTabs');
    } else {
      Alert.alert('Please Select An Option To Continue');
    }
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={[styles.background, {width: screenWidth, height: screenHeight}]}
        resizeMode="contain"
        imageStyle={{
          top: -screenHeight * 0.2,
        }}
        source={require('../../assets/images/payment-bg.png')}>
        <Pressable
          style={styles.close_container}
          onPress={() => navigation.navigate('HomeTabs')}>
          <Text style={styles.close_label}>X</Text>
        </Pressable>
        <Text style={styles.appname_container}>
          <Text style={styles.appname}>PlantApp</Text>
          <Text style={styles.premium_text}> Premium</Text>
        </Text>
        <Text style={styles.subtext}>Access All Features</Text>
        <View style={styles.payment_container}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.payment_listing}>
            {paymentListingItems.map((item, index) => {
              return (
                <ListingItem
                  key={index}
                  description={item.description}
                  iconName={item.icon_name}
                  title={item.title}
                  iconSize={item.icon_size}
                />
              );
            })}
          </ScrollView>
        </View>
        <View style={styles.premium_selection_box}>
          {premiumOptions.map((item, index) => {
            return (
              <PremiumItem
                key={index}
                isSelected={selectedItem?.title === item.title ? true : false}
                onSelect={() => setSelectedItem(item)}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </View>
        <View style={styles.bottom_container}>
          <Button
            label={'Try free for 3 days'}
            onPress={() => handleTryButton()}
          />
          <Text style={styles.bottom_info}>
            After the 3-day free trial period you’ll be charged ₺274.99 per year
            unless you cancel before the trial expires. Yearly Subscription is
            Auto-Renewable
          </Text>
          <Text style={styles.bottom_terms}>Terms • Privacy • Restore</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default PaymentWall;
