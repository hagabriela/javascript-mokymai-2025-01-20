import React from 'react'

const ZodzioIlgis = () => {
    let zodis = 'saulė'

    const ilgesnis = () => {
        return zodis.length
    }

  return (
    <div>
        <p>{zodis}</p>
        <p>Jis turi {ilgesnis()} raides</p>
    </div>
  )
}

export default ZodzioIlgis