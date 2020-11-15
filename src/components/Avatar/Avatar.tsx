import React from 'react'
import classes from './Avatar.module.scss';
type AvatarProps = {
  imgUrl?: string;
  letters?: string;
  addClasses?: string;
  size?: 'sm' | 'md' | 'lg';
}
const Avatar:React.FC<AvatarProps> = ({ imgUrl, letters, size, addClasses}) => {
  return (
    <div className={classes.avatar + ' ' + classes[size || 'md'] + ' ' + addClasses}>
      {imgUrl ? (
        <img src={imgUrl} alt="Avatar"/>
      ) : letters }
    </div>
  )
}

export default Avatar
