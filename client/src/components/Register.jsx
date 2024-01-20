import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto  rounded-md shadow-md lg:max-w-xl">
            <h1 className="text-3xl font-semibold text-center text-white-700">Register</h1>
            <form className="space-y-4">
                <div>
                    <label className="label">
                        <span className="text-base label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" className="w-full input input-bordered input-primary" required />
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" required/>
                </div>
                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password"
                        className="w-full input input-bordered input-primary"  required/>
                </div>
                <div className="p-3">
                    <button className="btn btn-block btn-primary" type="submit">Sign Up</button>
                </div>
                <span className="mt-1">Already have an account ?
                    <Link to="/login" className="text-blue-600 hover:text-blue-800 hover:underline"> Login</Link></span>
            </form>
        </div>
    </div>
  )
}

export default Register