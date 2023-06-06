import {FcGoogle} from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai'

export default function Login() {
    return (
        <div className="shadow-xl mt-32 p-10 text-gray-700">
            <h2>Join</h2>
            <div>
                <h3>Sign in man with other company</h3>
            </div>
            <div>
                <button><FcGoogle/>Sign with Google</button>
                <button><AiFillFacebook/>Sign with Facebook</button>
            </div>
        </div>
        
    )
}