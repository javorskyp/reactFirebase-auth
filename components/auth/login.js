import {FcGoogle} from 'react-icons/fc';
import { AiFillFacebook } from 'react-icons/ai'

export default function Login() {
    return (
        <div>
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