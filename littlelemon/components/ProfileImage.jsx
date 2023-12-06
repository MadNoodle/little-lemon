import React from 'react';
import {StyleSheet, Image} from 'react-native';
import image from '../assets/profile.png';

const ProfileImage = (props) => {
  return (
    <Image 
    style={{
        width: props.size, 
        height: props.size,
        borderRadius: props.radius, 
        resizeMode: 'cover'
    }
    }
    source={image}
    />
  );
};


export default ProfileImage;
