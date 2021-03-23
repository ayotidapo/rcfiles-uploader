import React from 'react'

import { useRcfUploader, UploaderUI } from 'files-uploader-rc'
import 'files-uploader-rc/dist/index.css'

const App = () => {
  const uri = `https://api.cloudinary.com/v1_1/oladapo/upload`

  // TO USE HOOKS ******//////
  const [chosenFiles, setChosenFiles] = React.useState([])

  // eslint-disable-next-line no-unused-vars
  const [files, urls] = useRcfUploader(uri, chosenFiles)

  // console.log(files, urls)

  // onSelectFile will be passed to onChange attr of the HTML input

  // eslint-disable-next-line no-unused-vars
  const onSelectFile = (newFiles) => {
    setChosenFiles(newFiles)
  }

  /// End of TO USE HOOKS  Explanation////

  //*************************************************** */

  // To use UI **********/////

  // eslint-disable-next-line no-unused-vars
  const [returnUrls, setUrls] = React.useState([])

  const getResponseUrls = (returnUrls) => {
    setUrls(returnUrls)
  }

  console.log(returnUrls)
  ///  End of To use UI ////
  return (
    <>
      <UploaderUI
        allowMultiple
        getResponseUrls={getResponseUrls}
        uploadUri={uri}
      />
    </>
  )
}

export default App
