import React from "react"
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { signIn } from "@/auth"
import { auth } from "@/auth"

const page = async () => {
    const session = await auth()
    console.log(session);

    return (
        <main className="min-h-dvh flex items-center justify-center">
            <div className="shadow-md p-3 rounded-md space-y-5">
                <h1 className="text-center text-gray-800 font-bold text-2xl 
                mb-6"> Sign in to your Account </h1>

                <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className="border flex items-center justify-center
       gap-3 border-gray-300 py-3 rounded-full w-full">
           <FcGoogle className="text-2xl" />
              <p>Continue with Google</p>
       </button>
    </form>
    
         <button className="border flex items-center justify-center 
                gap-3 border-gray-300 py-3 rounded-full w-full">
                    <FaGithub  className="text-2xl" />
                    <p>Continue with Github</p>
                </button>

                <button className="border flex items-center justify-center
                 gap-3 border-gray-300 py-3 rounded-full w-full">
                    <FaApple className="text-2xl" />
                    <p>Continue with Apple</p>
                </button>

                <p className="text-xs text-gray-500">By signing in, you agree to our terms and privacy policy</p>
            </div>
            

            

        </main>
    );
};


export default page; 
