import React from 'react'
import { SideBarContainer, 
         All, 
         Family, 
         Friend,
         Date,
         Class,
         Job,
         Network
        } from './styled-components/Containers'
const SideBar = (props) => {
    const findRelation = (relation) => {
        props.findRelation(relation)
    }
    return (
        <SideBarContainer>
            <All onClick={()=>findRelation('')}></All>
            <Friend onClick={()=>findRelation("friend")}></Friend>
            <Family onClick={()=>findRelation("family")}></Family>
            <Date onClick={()=>findRelation("date")}></Date>
            <Class onClick={()=>findRelation("class")}></Class>
            <Job onClick={()=>findRelation("job")}></Job>
            <Network onClick={()=>findRelation("network")}></Network>
        </SideBarContainer>
    )
}
export default SideBar