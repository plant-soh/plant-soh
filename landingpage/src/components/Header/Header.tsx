import Cookies from 'js-cookie';
import { FC } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useLocation } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { ReactComponent as LogoBlack } from '../../assets/svgs/logo-black.svg';
import { ReactComponent as LogoWhite } from '../../assets/svgs/logo-white.svg';
import { Link } from '../../common';
import HamburgerMenu from '../../components/Header/HamburgerMenu';
import { useScreenSize } from '../../hooks/useScreenSize';
import localization from '../../localization';
import { COLORS, FONTS, ROUTES } from '../../shared/constants';
import { ResponsiveLayoutProps, StyledHrefLinkProps } from '../../shared/types';

interface HeaderProps {
  color: 'black' | 'white';
}

const Header: FC<HeaderProps> = ({ color }) => {
  const { isMobile } = useScreenSize();
  const location = useLocation();

  const setLanguage = (language: string) => {
    Cookies.set('language', language);
    // refresh the page
    window.location.reload();
  };
  return (
    <HeaderContainer isMobile={isMobile}>
      <LinkContainer>
        <RouterLink to={ROUTES.LANDING}>
          {color === 'black' ? (
            <StyledLogoBlack color={color} />
          ) : (
            <StyledLogoWhite color={color} />
          )}
        </RouterLink>
        {!isMobile && (
          <>
            <StyledLink
              color={color}
              text={localization['landing.menu.about_us']}
              to={ROUTES.ABOUT_US}
            />
            <StyledLink
              color={color}
              text={localization['landing.menu.careers']}
              to={ROUTES.CAREERS}
            />
            <StyledLink
              color={color}
              text={localization['landing.menu.contact']}
              to={ROUTES.CONTACT_US}
            />
            <StyledHrefLink
              color={color}
              href={'https://dashboard.senjuns.com'}
            >
              Dashboard
            </StyledHrefLink>
          </>
        )}
      </LinkContainer>
      <div style={{ float: 'right' }}>
        <StyledHrefLink color={color} onClick={() => setLanguage('en')}>
          EN
        </StyledHrefLink>
        <StyledHrefLink color={color} onClick={() => setLanguage('de')}>
          DE
        </StyledHrefLink>
        <StyledHrefLink color={color} onClick={() => setLanguage('ptBR')}>
          PT
        </StyledHrefLink>
      </div>

      {isMobile && <HamburgerMenu color={color} current={location.pathname} />}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header<ResponsiveLayoutProps>`
  padding: ${({ isMobile }) => (isMobile ? `50px 20px 20px` : `40px 120px`)};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledLogoWhite = styled(LogoWhite)`
  margin-right: 100px;
`;

const StyledLogoBlack = styled(LogoBlack)`
  margin-right: 100px;
`;

const StyledLink = styled(Link)`
  margin-right: 30px;
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHrefLink = styled.a<StyledHrefLinkProps>`
  font-weight: 600;
  font-size: ${FONTS.body1.size}px;
  text-decoration: none;
  /* color: ${COLORS.white}; */
  color: ${({ color }) => color || COLORS.white};
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    color: ${COLORS.grey5};
  }
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: ${SIZES.xSmall}px;
// `;

export default Header;
