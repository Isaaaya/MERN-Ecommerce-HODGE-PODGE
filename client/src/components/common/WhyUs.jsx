import { Wave } from "assets/icons";
import { Container } from "layout";
import { whyUsValues } from "utils/constants";

const WhyUs = () => {
  return (
    <section className="text-[#131313]">
      <Wave />
      <div className="flex flex-col text-white bg-[#1e1d1d] -mt-2 py-10">
        <Container extraStyles="space-y-10">
          <p className="text-3xl font-semibold text-center capitalize ">
            Our products are...
          </p>
          <div className="grid items-start grid-cols-1 gap-10 text-center text-white pt-7 md:grid-cols-3">
            {whyUsValues.map((value) => (
              <div
                key={value.caption}
                className="flex flex-col items-center h-full gap-4 text-center"
              >
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold tracking-wider text-[#b063a8] font-headerCurved">
                    {value.caption}
                  </h2>
                  <p className="text-lg text-white/[0.9] w-60">
                    {value.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

export default WhyUs;
