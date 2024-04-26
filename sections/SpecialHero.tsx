export interface Props {
   title: string;
   text: string;
   image: string;
 }
 
 export default function SpecialHero({ title, text, image }: Props) {
   return (
     <div
       className="bg-cover bg-no-repeat h-screen"
       style={`background-image: url('${image}')`}
     >
       <div className="flex flex-col items-center">
         <h1 className="text-8xl font-bold">{title}</h1>
         <p className="text-4xl">{text}</p>
       </div>
     </div>
   );
 }