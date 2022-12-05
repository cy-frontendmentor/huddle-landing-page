import Image from "next/image";
const page = () => {
  return (
    <div className=" relative z-10 max-w-[1440px] px-9 md:px-[80px] md:pt-16 md:pb-10 ">
      <Image
        src={`/images/bg-mobile.svg`}
        alt=""
        fill
        className=" -z-20 md:hidden"
        objectFit="contain"
        objectPosition="top"
      ></Image>
      <Image
        src={`/images/bg-desktop.svg`}
        alt=""
        fill
        className=" -z-20 hidden md:block"
        objectFit="contain"
        objectPosition="top"
      ></Image>
      <div className="grid md:grid-cols-2 md:items-center md:gap-x-[60px]">
        <header className="mb-[60px] md:mb-0">
          <Image
            src="/images/logo.svg"
            alt=""
            width={120}
            height={19}
            className="mb-[70px] md:hidden "
          ></Image>
          <Image
            src="/images/logo.svg"
            alt=""
            width={200}
            height={32}
            className="mb-[104px] hidden md:block  "
          ></Image>

          <Image
            src="/images/illustration-mockups.svg"
            alt="mockup"
            width={696}
            height={494}
            className="z-40 "
          ></Image>
        </header>
        <main className="mb-16 text-center md:mb-0 md:text-left">
          <h1 className=" mb-4 font-poppins text-2xl font-semibold leading-9 lg:mb-6 lg:text-[40px] lg:leading-[60px]">
            Build The Community Your Fans Will Love
          </h1>
          <p className=" mb-6 text-base lg:text-[18px] lg:leading-[27px]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.{" "}
          </p>
          <button className="rounded-[20px] bg-white py-[11px] px-[75px] font-poppins text-xs leading-[18px] text-violet drop-shadow-[1px_3px_5px_rgba(0,0,0,0.269)] hover:bg-magenta-soft hover:text-white md:rounded-[28px] md:px-16 md:pt-[13px] md:pb-[16px] md:text-[18px] md:leading-[27px] md:drop-shadow-[2px_4px_3px_rgba(0,0,0,0.2586)]">
            Register
          </button>
        </main>

        <footer className="grid justify-center md:col-span-2  md:justify-end">
          <div className="flex justify-center gap-[11px] md:gap-4">
            <div className="group flex h-[31px] w-[31px] cursor-pointer items-center justify-center  rounded-full border border-white hover:border-[#FF52C1] md:h-10 md:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="24"
                viewBox="4 4 18 14"
                className=" fill-white group-hover:fill-[#FF52C1]"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </div>
            <div className="group flex h-[31px] w-[31px] cursor-pointer items-center justify-center rounded-full border border-white hover:border-[#FF52C1] md:h-10 md:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                className=" fill-white group-hover:fill-[#FF52C1]"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </div>
            <div className=" group flex h-[31px] w-[31px] cursor-pointer items-center justify-center rounded-full border border-white hover:border-[#FF52C1] md:h-10 md:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                className=" fill-white group-hover:fill-[#FF52C1]"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default page;
