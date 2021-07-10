import React from 'react'
import { useHomeStyles } from './../pages/Home/useHomeStyles';
import { IconButton } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear'



interface IImageList {
	styles: ReturnType<typeof useHomeStyles>
	images: string[],
	removeImage?: (url: string) => void
}


const ImageList: React.FC<IImageList> = ({ styles, images, removeImage }) => {
	return (
			<div className={styles.imagesList}>
				{images.map((url, index) => (
					<div key={ index } className={styles.imagesListItem}>
							{ removeImage && (
								<IconButton 
								className={ styles.imagesListItemRemove }
								onClick={ ()=> removeImage( url ) }>
									<ClearIcon style={{ fontSize: 15 }} />
								</IconButton>
							) }
						<img src={url} alt="img" />
					</div>
				))}
			</div>
	)
}



export default ImageList
