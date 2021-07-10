import React, { useEffect } from 'react'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import { IconButton } from '@material-ui/core';
import { useHomeStyles } from './../pages/Home/useHomeStyles';
import ImageList from './ImageList';
import { ImageObj } from './AddTweetForm';


interface IUploadImages {
  images: ImageObj[];
	onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void
}

const UploadImages: React.FC<IUploadImages> = ({ images, onChangeImages}) => {

	const styles = useHomeStyles()
	const inputRef = React.useRef<HTMLInputElement>(null)



	const handleClickImage = () => { //при нажатии на кнопку срабатывает проверка: если есть ссылка на элемент, то на него вешается событие клика. так как инпут скрыт, мы его не видим, однако событие срабатывает 
		if (inputRef.current) {
			inputRef.current.click()
		}
	}

	
  const handleChangeFileInput = React.useCallback((event: Event) => {
    if (event.target) {
      const target = event.target as HTMLInputElement;
      const file = target.files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
        onChangeImages((prev) => [
          ...prev,
          {
            blobUrl: URL.createObjectURL(fileObj),
            file,
          },
        ]);
      }
    }
  }, []);




	useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('change', handleChangeFileInput);
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('change', handleChangeFileInput);
      }
    };
  }, []);


const removeImage = ( url: string ) => {
	onChangeImages ((prev)  => prev.filter( img => img.blobUrl !== url ))
}



	return (
		<div>
			<ImageList
			images = { images.map(( img ) => img.blobUrl )}
			styles = { styles }
			removeImage={ removeImage }
			/>
			<IconButton color="primary" onClick={handleClickImage} >
				<ImageOutlinedIcon />
			</IconButton>
			<input ref={inputRef} type="file" hidden />
		</div>
	)
}

export default UploadImages



