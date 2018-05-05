import React from 'react'
import { SideBarContainer, SortButton } from './styled-components/Containers'
const SideBar = (props) => {
    const findRelation = (relation) => {
        props.findRelation(relation)
    }
    return (
        <SideBarContainer>
            <SortButton onClick={()=>findRelation('')}><p>All</p></SortButton>
            <SortButton onClick={()=>findRelation("friend")}><p>Family</p></SortButton>
            <SortButton onClick={()=>findRelation("family")}><p>Friends</p></SortButton>
            <SortButton onClick={()=>findRelation("date")}><p>Dates</p></SortButton>
            <SortButton onClick={()=>findRelation("class")}><p>Classmates</p></SortButton>
            <SortButton onClick={()=>findRelation("job")}><p>Co-workers</p></SortButton>
            <SortButton onClick={()=>findRelation("network")}><p>Networks</p></SortButton>
            <SortButton onClick={()=>findRelation("other")}><p>Other</p></SortButton>
        </SideBarContainer>
    )
}
export default SideBar