export interface Services {
  title: string;
  text: string;
  number: number;
}

export interface Props {
  title: string;
  text: string;
  services: Services[];
}

export default function Services({ text, services }: Props) {
  return (
    <div className="bg-[#263424] py-20">
      <div className="container">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-8xl text-white">
            Professional <span className="block font-bold">Service</span>
          </h2>
          <p className="text-white">{text}</p>
        </div>
        <ul className="grid grid-cols-2">
          {services.map((service, index) => (
            <li key={index} className={`border-b border-zinc-200`}>
              <a
                href="/"
                className="flex flex-col justify-between p-8 min-h-80 min-w-80"
              >
                <div>
                  <h3 className="text-white">{service.title}</h3>
                </div>
                <div className="flex justify-end items-center gap-4">
                  <p className="text-white m-0">{service.text}</p>
                  <span className="text-white text-8xl font-bold">
                    {service.number}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
