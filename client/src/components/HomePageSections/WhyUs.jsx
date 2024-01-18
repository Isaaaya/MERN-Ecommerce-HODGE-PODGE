import { Wave } from "components/Icons";
import { Container } from "components/Wrappers";
import { whyUsValues } from "utils/constants";

const WhyUs = () => {
  return (
    <section className="text-[#131313]">
      <Wave />
      <div className="flex flex-col text-white bg-[#131313] -mt-2 py-10">
        <Container>
          <p className="text-3xl font-semibold text-center capitalize ">
            Our products are...
          </p>
          <div className="grid items-start grid-cols-1 gap-10 text-center text-white pt-7 md:grid-cols-3">
            {whyUsValues.map((value) => (
              <div
                key={value.caption}
                className="flex flex-col items-center h-full gap-4 text-center"
              >
                <div className="hidden w-24 aspect-ratio md:block brightness-90">
                  {value?.icon && (
                    <img src={value?.icon} alt={value?.iconReference} />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-4xl font-extrabold tracking-wider text-[#d04c90] font-headerCurved">
                    {value.caption}
                  </h3>
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
