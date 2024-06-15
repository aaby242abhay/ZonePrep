import React from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'

const  additionalStyle = {
  marginLeft : '5px',
  width : '80%',
  height : '30px',
  marginTop : '15px',
  background : '#3ba55d',
}

export default function AddFriendButton() {
  const handleOpenAddFriendDialog = () => {
    console.log('Add Friend Button Clicked')
  }
  return (
    <>
        <CustomPrimaryButton 
          additinalStyes={additionalStyle}
          label = 'Add Friend'
          onClick={handleOpenAddFriendDialog}
        >
        
        </CustomPrimaryButton>
    </>
  )
}
