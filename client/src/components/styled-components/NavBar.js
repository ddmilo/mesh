import styled from 'styled-components'

export const NavBarContainer = styled.div`
    width: 100vw;
`
export const NavBarWrapper = NavBarContainer.extend`
    width: 100vw;
    height: 10vh;
    background-color: #0085FF;
    box-shadow: 0 8px 6px -6px #999;
    shadow: 0 8px 6px -6px #999;
    shadow: 0 8px 6px -6px #999;
    position: relative;
`

export default { NavBarContainer, NavBarWrapper}