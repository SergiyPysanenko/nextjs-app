import s from './Footer.module.css';
import cn from 'classnames';
import { FooterProps } from './Footer.props';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, s.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} всі права захищені</div>
      <a href="#" target="_blank">
        Згода користувача
      </a>
      <a href="#" target="_blank">
        Політика конфіденційності
      </a>
    </footer>
  );
};
