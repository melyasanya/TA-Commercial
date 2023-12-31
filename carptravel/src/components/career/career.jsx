"use client";
import { useMediaQuery } from "react-responsive";
import CareerForm from "./careerForm";

const Career = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const isDesktopAndTablet = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <div id="career">
      <div className="bg-[url('../../public/Background-Career-mobile.jpg')] bg-center h-full bg-no-repeat bg-cover px-[20px] py-[56px] md:bg-[url('../../public/Background-Career-tablet.jpg')] md:px-[32px] md:py-[64px] xl:bg-[url('../../public/Background-Career-desktop.jpg')] xl:p-[104px]">
        <div className="mb-[36px] md:flex md:justify-between md:mb-[12px] xl:mb-[24px]">
          <h2 className="text-white text-[40px] font-thin leading-[56px] tracking-[-1.6px] uppercase mb-[24px] md:text-[67px] md:tracking-[-2.68px] md:leading-[1.15] md:mb-0 xl:text-[98px] xl:tracking-[-3.92px]">
            Choose <span className="font-medium">us</span>
          </h2>
          <p className="text-white text-[14px] font-extralight leading-[20px] w-[179px] ml-auto md:w-[221px] md:text-[13px] md:text-justify md:ml-0 xl:w-[293px] xl:text-[18px] xl:leading-[24px]">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
        </div>
        <div className="md:flex md:gap-[24px] xl:justify-end">
          <div>
            <p className="text-white text-[30px] font-extralight leading-[1.15] uppercase ml-[100px] mb-[36px] md:ml-[80px] md:mb-[56px] md:w-[141px] xl:w-[170px] xl:text-[36px] xl:leading-[39px] xl:ml-[147px] xl:mb-[45px]">
              Why us &#63;
            </p>
            <div>
              <div className="w-[181px] flex flex-col gap-[16px] md:gap-[24px] md:w-auto">
                <div className="xl:flex xl:gap-[24px] xl:justify-end">
                  <h3 className="text-white text-[14px] font-normal leading-[20px] text-right mb-[8px] md:text-[16px] xl:text-[18px] xl:leading-[24px]">
                    Professional development
                  </h3>
                  <p className="text-[12px] text-white font-extralight leading-[20px] text-right xl:w-[285px] xl:text-left xl:leading-[24px]">
                    We offer growth opportunities and a creative environment to
                    nurture your talents.
                  </p>
                </div>
                <div className="xl:flex xl:gap-[24px] xl:justify-end">
                  <h3 className="text-white text-[14px] font-normal leading-[20px] text-right mb-[8px] md:text-[16px] xl:text-[18px] xl:leading-[24px]">
                    Teamwork
                  </h3>
                  <p className="text-[12px] text-white font-extralight leading-[20px] text-right xl:w-[285px] xl:text-left xl:leading-[24px]">
                    Join our close-knit family, where support and inspiration
                    abound.
                  </p>
                </div>
                <div className="xl:flex xl:gap-[24px] xl:justify-end">
                  <h3 className="text-white text-[14px] font-normal leading-[20px] text-right mb-[8px] md:text-[16px] md:ml-[-4px] md:mb-[28px] xl:text-[18px] xl:leading-[24px]">
                    Stimulating work environment
                  </h3>
                  <p className="text-[12px] text-white font-extralight leading-[20px] text-right xl:w-[285px] xl:text-left xl:leading-[24px]">
                    Flexibility and remote options for a comfortable experience.
                  </p>
                </div>
                <div className="xl:flex xl:gap-[24px] xl:justify-end">
                  <h3 className="text-white text-[14px] font-normal leading-[20px] text-right mb-[8px] md:text-[16px] xl:text-[18px] xl:leading-[24px]">
                    Exciting challenges
                  </h3>
                  <p className="text-[12px] text-white font-extralight leading-[20px] text-right xl:w-[285px] xl:text-left xl:leading-[24px]">
                    Unleash your potential through unforgettable projects
                    showcasing Carpathian beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>{isDesktopAndTablet && <CareerForm />}</div>
        </div>
      </div>
      {isMobile && <CareerForm />}
    </div>
  );
};

export default Career;
