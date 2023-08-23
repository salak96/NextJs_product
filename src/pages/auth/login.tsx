/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useRouter } from 'next/router';
const LoginPage = () => {
    const { push } = useRouter();
    const handleLogin = () => {
        push('/product');
    };
    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={() => handleLogin()}>Login Pagge</button>
            <p>
                Belum punya akun ? registrasi <Link href={'/auth/register'}>Disini</Link>
            </p>
        </div>
    );
};

export default LoginPage;
