import Link from 'next/link';
import style from '@/styles/404.module.scss';
const Custom404 = () => {
    return (
        <div className={style.error}>
            <div className='flex flex-col items-center justify-center min-h-screen align-center'>
                <img src='/not_found.png' alt='404' />
                <p className='flex text-gray-600 mb-8 justify-center align-center items-center'>The page you are looking for does not exist.</p>
                <Link href='/'>Home</Link>
            </div>
        </div>
    );
};

export default Custom404;
