import cs from 'classnames';
import { ReactNode, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Link from '../../../components/Link';
// import './Link.scss';

const baseLeftNavIconStyles = [
  'rounded-full',
  'w-12',
  'h-12',
  'shadow',
  'bg-[#F3F8FA]',
];

const NavLeftLinkChildren = ({
  to,
  children,
}: {
  to: string;
  icon: string;
  children: ReactNode;
}) => {
  const activeRoute = useLocation().pathname.split('/')[1] === to.split('/')[1];
  const textColor = activeRoute ? 'text-bblue-440' : 'text-[#605F5E]';

  return (
    <div className="flex flex-col group pt-6 pb-3 items-center justify-center">
      <div
        className={cs(
          'flex items-center justify-center',
          ...baseLeftNavIconStyles,
          {
            'left-nav-icon-gradient': activeRoute,
          },
        )}
      ></div>
      <p
        className={cs(
          'text-center text-sm group-hover:text-bblue-440',
          textColor,
        )}
      >
        {children}
      </p>
    </div>
  );
};
NavLeftLinkChildren;

const NavLeftLink = ({
  name,
  to,
  icon,
  children,
  onClick = null,
}: {
  name: string;
  to: string;
  icon: string;
  children: ReactNode;
  onClick?: any;
}) => {
  const _onClick = useCallback(
    (event: any) => {
      event.preventDefault();
      onClick();
    },
    [onClick],
  );

  return (
    <Link
      name={`nav-left-${name}`}
      onClick={onClick ? _onClick : null}
      to={onClick ? '#' : to}
    >
      <NavLeftLinkChildren icon={icon} to={to}>
        {children}
      </NavLeftLinkChildren>
    </Link>
  );
};

export default NavLeftLink;
