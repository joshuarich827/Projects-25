import { FcGoogle } from "react-icons/fc";
import { FaApple, FaGithub } from "react-icons/fa";
import Link from 'next/link';
import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation";
const page = async () => {

  const session = await auth()
  if(session) {
    redirect("/home")
  } 
  

  return (
    <main className='min-h-dvh bg-orange-100/20 flex items-center justify-center'>

      <div className='rounded-lg py-5 px-3 bg-amber-200/10 md:px-5 shadow-xl shadow-orange-100 space-y-2 lg:space-y-4 '>
        <div className='text-center text-gray-800 font-bold text-2xl mb-3 md:mb-5'>
          <h2>Sign in to your Account</h2>
        </div>
            
        <form>

             <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
           Your email
          </label>
          <input type="email" name="email" placeholder='name@email.com' className="w-full px-4 py-1 md:py-3 rounded-lg
           border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-gray-900
           dark:text- focus:ring-2 ring-orange-400 focus:border-transparent transition-colors outline-none"/>
        </div>

        
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
           Your password
          </label>
          <input type="password" name="password" placeholder='.......' className="w-full px-4 md:py-3 py-1 rounded-lg
           border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-background text-gray-900
           dark:text- focus:ring-2 ring-orange-400 focus:border-transparent transition-colors outline-none"/>
        </div>
         
        <button className="ml-12 md:ml-15 mt-3 px-15 text-center text-gray-500 py-2
         hover:text-white w-50 rounded-lg bg-orange-500 hover:bg-orange-700 cursor-pointer">Login</button>
        </form>

        <form
      action={async () => {
        "use server"
        await signIn("google") 
      }}
    >
      <button className='flex items-center justify-center border py-2 px-13 md:px-16 gap-3 border-gray-300 hover:shadow-md rounded-full'>
          <FcGoogle className="text-2xl" />
          <p>Continue with Goggle</p>
        </button>
    </form>

       <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <button className='flex items-center justify-center border py-2 px-13 md:px-16 gap-3 border-gray-300 hover:shadow-md rounded-full'>
          <FaGithub className="text-2xl" />
          <p>Continue with Github</p>
        </button>
    </form>

        <div className='flex items-center justify-center border py-2 gap-3 border-gray-300 hover:shadow-md rounded-full'>
          <FaApple className="text-2xl" />
          <p>Continue with Apple</p>
        </div>
        
        <p className=" mr-15 md:mr-25 text-gray-500 text-center">
          Not registered? <Link href={"/register"}><span className='text-orange-400 hover:underline'>Create account</span></Link>
        </p>

        <p className="text-xs text-gray-500 text-center">
          By signing in, you agree to our terms and privacy policy
        </p>
      </div>
        
    </main>
  )
}

export default page
