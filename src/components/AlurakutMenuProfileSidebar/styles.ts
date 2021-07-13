import styled from "styled-components";

interface MenuProfileSidebarProps {
  isMenuOpen: boolean;
}

export const MenuProfileSidebar = styled.div<MenuProfileSidebarProps>`
  background: white;
  position: fixed;
  z-index: 100;
  padding: 46px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 48px;
  transition: .3s;
  pointer-events: ${({ isMenuOpen }) => isMenuOpen ? 'all' : 'none'};
  opacity: ${({ isMenuOpen }) => isMenuOpen ? '1' : '0'};
  transform: ${({ isMenuOpen }) => isMenuOpen ? 'translateY(0)' : 'translateY(calc(-100% - 48px))'};
  @media(min-width: 860px) {
    display: none;
  }
  > div {
    max-width: 400px;
    margin: auto;
  }
  a {
    font-size: 18px;
  }
  .boxLink {
    font-size: 18px;
    color: #2E7BB4;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 800;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
`