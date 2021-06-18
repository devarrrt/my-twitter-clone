import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@material-ui/core'


interface IModalBlock {
	visible?: boolean
	onClose: () => void
	children: React.ReactNode
	title?: string
}



const ModalBlock: React.FC<IModalBlock> = ({
	title,
	onClose,
	visible = false,
	children
}) => {

if ( !visible ) {
	return null
}

	return (
		<Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">
				<IconButton onClick={() => onClose()} color="secondary" aria-label="close" >
					<CloseIcon style={{ fontSize: 26 }} color="secondary" />
				</IconButton>
				{title}
			</DialogTitle>
			<DialogContent>
				{children}
			</DialogContent>
		</Dialog>
	)
}



export default ModalBlock
