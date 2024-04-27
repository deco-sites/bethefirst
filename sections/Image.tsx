export interface Props {
   title: string;
   image: {
      src: string;
      alt: string;
   };
}

export default function Image({ title, image }: Props) {
   return (
      <div
         className="bg-cover bg-no-repeat h-screen flex items-end"
         style={`background-image: url('${image.src}')`}
      >
         <h2 className="text-9xl font-bold text-white drop-shadow-xl mb-16 ms-16">{title}</h2>
      </div>
   );
}
