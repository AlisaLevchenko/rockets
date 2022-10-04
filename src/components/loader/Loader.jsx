import { ThreeDots } from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Loader() {
  return (
    <div className={s.dots}>
      <ThreeDots
        color="#5d8aa8"
        height={100}
        width={100}
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
