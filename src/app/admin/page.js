import Image from "next/image";
import React from "react";

const Signin = () => {
  return (
    <section className="bg-gray-1 py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white px-10 py-16 text-center sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <a
                  href="/#"
                  className="mx-auto inline-block max-w-[160px]"
                >
                    <Image src={'/logos/CG_logo_01(blue).png'} width={100} height={100} alt="Logo"/>
                </a>
              </div>
              <form>
                <InputBox type="email" name="email" placeholder="Email" />
                <InputBox
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-md border border-CG_Blue bg-CG_Blue px-5 py-3 text-black font-medium text-white transition hover:opacity-90 hover:border-white"
                  />
                </div>
              </form>
              <a
                href="/#"
                className="mb-2 inline-block text-base text-dark hover:text-primary hover:underline "
              >
                Forget Password?
              </a>
              <p className="text-base text-body-color ">
                <span className="pr-0.5">Not a member yet?</span>
                <a
                  href="/#"
                  className="text-primary hover:underline"
                >
                  Sign Up
                </a>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const InputBox = ({ type, placeholder, name }) => {
    return (
    <div className="mb-6">
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full rounded-md border border-stroke bg-transparent px-5 py-3 text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none "
        />
    </div>
  );
};


export default Signin;