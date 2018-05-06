import styled from 'styled-components'

export const NavBarContainer = styled.div`
    width: 100vw;
`
export const NavBarWrapper = NavBarContainer.extend`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0085FF;
    box-shadow: 0 8px 6px -6px #999;
    shadow: 0 8px 6px -6px #999;
    shadow: 0 8px 6px -6px #999;
    position: relative;
`
export const SearchBar = styled.input`
    width: 500px;
    height: 35px;
    background-color: #62B4FF;
    border: 0;
    padding: 5px;
    border-radius: 4px;
    font-size: 1.5em;
    font-family: 'Raleway';
    color: white;
`

export const SearchBarContainer = styled.div`
    display: flex; 
    align-items: center;
    background-color: #62B4FF;
    border-radius: 4px;
`
export default { NavBarContainer, NavBarWrapper, SearchBar, SearchBarContainer}