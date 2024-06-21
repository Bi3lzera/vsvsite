const Hero = () => {
  return (
    <div className="bg-[#CCF8C6]  mt-4">
      <div className="container grid md:grid-cols-2 ">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-topHeadingSecondary ">
              A <span className="font-bold"> VSV Casa das Portas</span> é uma
              loja de materiais de construção localizada em Ipaussu-sp
            </p>
            <p className="text-topHeadingSecondary ">
              Além da venda de Materiais de Construção, a loja tambem presta
              serviços de planejamento e manufatura de moveis planejados
            </p>
            <a
              className=" inline-block bg-white rounded-md px-6 py-3 hover:bg-greenMain hover:text-white"
              href="#"
            >
              Venha nos Conhecer!
            </a>
          </div>
        </div>

        <div className=" right-[-270px]">
          <img
            className="md:auto"
            src="/hero1.jpg"
            alt="hero"
            width={1200}
            height={1200}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
