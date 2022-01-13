import React from 'react'

const FormLongLat = ({onGet}) => {
    const [longitude, setLongitude] = React.useState('')
    const [latitude, setLatitude] = React.useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        onGet(longitude)
        onGet(latitude)
    }

    return (
        <form className='form-control' onSubmit={onSubmit}>
            <label>Latitude</label>
            <input type='text' placeholder='type latitude' value={latitude} onChange={(e) =>{
                setLatitude(e.target.value)
                console.log(latitude)
            }}></input>
            <label>Longitude</label>
            <input type='text' placeholder='type longitude' value={longitude} onChange={(e) =>{
                setLongitude(e.target.value)
                console.log(longitude)
            }}></input>
            <input type='submit' value='Find Property'></input>
        </form>
    )
}

export default FormLongLat
