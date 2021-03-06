import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

/**
 * This form gets all the information necessary information to post a new property in the database
 * @param onGet this function is in charge of posting the new property
 * @return {JSX.Element} the form we want to display
 * @constructor
 */
const FormPost = ({onGet}) => {
    /**
     * The state of all the parameters we want to update
     */
    const [externalId, setExternalId] = useState('')
    const [areaSqm, setAreaSqm] = useState('')
    const [city, setCity] = useState('')
    const [coverImageUrl, setCoverImageUrl] = useState('')
    const [furnish, setFurnish] = useState('Furnished')
    const [longitude, setLongitude] = useState('')
    const [latitude, setLatitude] = useState('')
    const [postalCode, setPostalCode] = useState('')
    const [propertyType, setPropertyType] = useState('Studio')
    const [rent, setRent] = useState('')
    const [title, setTitle] = useState('')
    const [additionalCost, setAdditionalCost] = useState('')
    const [deposit, setDeposit] = useState('')
    const [descriptionTranslated, setDescriptionTranslated] = useState('')
    const [gender, setGender] = useState('Male')
    const [pageDescription, setPageDescription] = useState('')
    const [pageTitle, setPageTitle] = useState('')
    const [pets, setPets] = useState('Yes')
    const [roommates, setRoommates] = useState('')

    const navigate = useNavigate();

    /**
     * This function listens to the click of the button and calls the function to post  a properties
     * @param e the listener
     */
    const onSubmit = (e) => {
        e.preventDefault()
        onGet({
            "externalId": externalId.trim(),
            "areaSqm": areaSqm.trim(),
            "city": city.trim(),
            "coverImageUrl": coverImageUrl.trim(),
            "furnish": furnish.trim(),
            "latitude": latitude.trim(),
            "longitude": longitude.trim(),
            "postalCode": postalCode.trim(),
            "propertyType": propertyType.trim(),
            "rent": rent.trim(),
            "title": title.trim(),
            "additionalCost": additionalCost.trim(),
            "deposit": Number(deposit.trim()),
            "descriptionTranslated": descriptionTranslated.trim(),
            "gender": gender.trim(),
            "isRoomActive": true,
            "pageDescription": pageDescription.trim(),
            "pageTitle": pageTitle.trim(),
            "pets": pets.trim(),
            "roommates": roommates.trim(),
        }).then(() => {
            // redirect to the page (GET request)
            navigate(`/property/${externalId}`)
        });
    }
    /**
     * The JSX of the form
     */
    return (
        <form className='form-control' onSubmit={onSubmit}>
            <label>ExternalID</label>
            <input type='text' placeholder='type ExternalID' value={externalId} onChange={(e) => {
                setExternalId(e.target.value)
            }} required={true}/>

            <label>Area Square Meter</label>
            <input placeholder='type max Area Square Meter' value={areaSqm} onChange={(e) => {
                setAreaSqm(e.target.value)
            }} required={true} type="number" min="0"/>

            <label>City</label>
            <input type='text' placeholder='type City' value={city} onChange={(e) => {
                setCity(e.target.value)
            }} required={true}/>

            <label>Cover Image Url</label>
            <input type='text' placeholder='type Cover Image Url' value={coverImageUrl} onChange={(e) => {
                setCoverImageUrl(e.target.value)
            }} required={true}/>

            <label>Furnish</label>
            <select  name="dropdown" id="dropdown" value={furnish} onChange={(e) => {setFurnish(e.target.value)}} required={true}>
                <option value="Furnished">Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
                <option value="Uncarpeted">Uncarpeted</option>
            </select> 

            <label>Latitude</label>
            <input placeholder='type latitude' value={latitude} onChange={(e) => {
                setLatitude(e.target.value)
            }} required={true} type="number"/>

            <label>Longitude</label>
            <input placeholder='type longitude' value={longitude} onChange={(e) => {
                setLongitude(e.target.value)
            }} required={true} type="number"/>

            <label>Postal Code</label>
            <input type='text' placeholder='type postalCode' value={postalCode} onChange={(e) => {
                setPostalCode(e.target.value)
            }} required={true}/>

            <label>Property Type</label>
            <select  name="dropdown" id="dropdown" value={propertyType} onChange={(e) => {setPropertyType(e.target.value)}} required={true}>
                <option value="Studio">Studio</option>
                <option value="Room">Room</option>
                <option value="Apartment">Apartment</option>
                <option value="Anti-squat">Anti-squat</option>
                <option value="Student residence">Student residence</option>
            </select> 

            <label>Rent</label>
            <input placeholder='type rent' value={rent} onChange={(e) => {
                setRent(e.target.value)
            }} required={true} type="number" min="0"/>

            <label>Title</label>
            <input type='text' placeholder='type title' value={title} onChange={(e) => {
                setTitle(e.target.value)
            }} required={true}/>

            <label>Additional Cost</label>
            <input placeholder='type additionalCost' value={additionalCost} onChange={(e) => {
                setAdditionalCost(e.target.value)
            }} required={true} type="number" min="0"/>

            <label>Deposit</label>
            <input placeholder='type deposit' value={deposit} onChange={(e) => {
                setDeposit(e.target.value)
            }} required={true} type="number" min="0"/>

            <label>Description Translated</label>
            <input type='text' placeholder='type descriptionTranslated' value={descriptionTranslated} onChange={(e) => {
                setDescriptionTranslated(e.target.value)
            }} required={true}/>

            <label>Gender</label>
            <select  name="dropdown" id="dropdown" value={gender} onChange={(e) => {setGender(e.target.value)}} required={true}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Mixed">Mixed</option>
                <option value="Unknown">Unknown</option>
            </select> 

            <label>Page Description</label>
            <input type='text' placeholder='type pageDescription' value={pageDescription} onChange={(e) => {
                setPageDescription(e.target.value)
            }} required={true}/>

            <label>Page Title</label>
            <input type='text' placeholder='type pageTitle' value={pageTitle} onChange={(e) => {
                setPageTitle(e.target.value)
            }} required={true}/>

            <label>Pets</label>
            <select  name="dropdown" id="dropdown" value={pets} onChange={(e) => {setPets(e.target.value)}} required={true}>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
            </select> 

            <label>Roommates</label>
            <input placeholder='type roommates' value={roommates} onChange={(e) => {
                setRoommates(e.target.value)
            }} required={true} type="number" min="0" />

            <button type='submit'>Save Changes</button>
        </form>
    )
}

export default FormPost
