/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/router';
import style from './Login.module.scss';
const LoginViews = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push('/product');
    };
    return (
        <div className={style.login}>
            <h1 className='text-3xl'>Login Page</h1>
            <button style={{ color: 'red',borderRadius: '5px',backgroundColor: 'blue' }} onClick={() => handleLogin()}>Login Page</button>
            <p style={{ color: 'red'}}>
                Belum punya akun ? registrasi <Link href={'/auth/register'}>Disini</Link>
            </p>
        </div>
    );
}

export default LoginViews;