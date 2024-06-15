import React,{useState} from 'react'
import CustomPrimaryButton from '../../shared/components/CustomPrimaryButton'
import AddFriendDialog from './AddFriendDialouge'

const  additionalStyle = {
  marginLeft : '5px',
  width : '80%',
  height : '30px',
  marginTop : '15px',
  background : '#3ba55d',
}

export default function AddFriendButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  }
  const handleCloseAddFriendDialog = () =>{
    setIsDialogOpen(false);
  }
  return (
    <>
        <CustomPrimaryButton 
          additinalStyes={additionalStyle}
          label = 'Add Friend'
          onClick={handleOpenAddFriendDialog}
        />
        <AddFriendDialog
          isDialogOpen={isDialogOpen}
          closeDialogHandler = {handleCloseAddFriendDialog}
        >
        </AddFriendDialog>
    </>
  )
}
