'use client';
import LoadingBar from "@/components/LoadingBar";
import { useAuth } from "@/hooks/useAuth";




export default function Register() {
  const { register, error, loading } = useAuth();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      const password_confirmation = document.querySelector("#password_confirmation").value;
      const formData = {
        name, email, password, password_confirmation
      }
      const data = await register(formData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800  object-cover relative p-6 mt-12">
      <div className="absolute inset-0">
        <img src="https://cdn.pixabay.com/photo/2018/08/15/13/10/galaxy-3608029_1280.jpg" alt="Background Image" className="object-cover object-center w-full h-full opacity-50" />
      </div>
      <div className="z-10 max-w-md w-full p-6 bg-[#3f808f62]  border-2 rounded-lg shadow text-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Register at Blogverse</h2>
        <form>
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 border rounded text-black" type="text" id="name" name="name" placeholder="Enter your name" required/>
          </div>
          <input type="text" id="_token" className="invisible" />
          <div className="mb-4">
            <label className="block font-bold mb-1" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border rounded text-black" type="email" id="email" name="email" placeholder="Enter your email" required/>
            <p className="text-[#f11515d4]">{error?.errors?.email ? error.errors.email[0] : ""}</p>
          </div>
          <div className="mb-6">
            <label className="block font-bold mb-1" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border rounded text-black" type="password" id="password" name="password" placeholder="Enter your password" required/>
            <p className="text-[#f11515d4]">{error?.errors?.password ? error.errors.password[0] : ""}</p>
          </div>
          <div className="mb-6">
            <label className="block font-bold mb-1" htmlFor="password_confirmation">Confirm Password</label>
            <input className="w-full px-3 py-2 border rounded text-black" type="password" id="password_confirmation" name="password" placeholder="Confirm Password" required/>
            <p className="text-[#f11515d4]">{error?.errors?.password ? error.errors.password[0] : ""}</p>
          </div>
          <div className="text-center">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600" type="submit" onClick={registerUser}>
              {
                !loading ? "Register" :
                  <LoadingBar />
              }
            </button>
          </div>
        </form>
      </div>
      <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
    </div>
  )
}