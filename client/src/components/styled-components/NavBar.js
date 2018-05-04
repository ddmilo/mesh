import styled from 'styled-components'

export const NavBarContainer = styled.div`
    width: 100vw;
`
export const NavBarWrapper = NavBarContainer.extend`
    width: 100vw;
    height: 9vh;
    background-color: #0085FF;
    box-shadow: 0 8px 6px -6px #999;
    shadow: 0 8px 6px -6px #999;
    shadow: 0 8px 6px -6px #999;
    position: fixed;
    margin-bottom: 50px;
`

export default { NavBarContainer, NavBarWrapper}