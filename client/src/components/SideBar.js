import React from 'react'
import { SideBarContainer, SortButton } from './styled-components/Containers'
const SideBar = (props) => {
    return (
        <SideBarContainer>
            <SortButton id='family'><p>Family</p></SortButton>
            <SortButton id='friend'><p>Friends</p></SortButton>
            <SortButton id='date'><p>Dates</p></SortButton>
            <SortButton id='class'><p>Classmates</p></SortButton>
            <SortButton id='job'><p>Co-workers</p></SortButton>
            <SortButton id='network'><p>Networks</p></SortButton>
            <SortButton id='other'><p>Other</p></SortButton>
        </SideBarContainer>
    )
}
export default SideBar