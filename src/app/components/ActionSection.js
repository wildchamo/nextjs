import Image from "next/image";

export default function ActionSection({src,text}) {
  return (
    <section className="">
      <div className="flex flex-col justify-center items-center bg-secundary w-20 h-20 p-1 text-white rounded-2xl text-sm">
        <Image alt={text} src={src} width={30} height={30}></Image>
        <p className="text-center text-sm">{text}</p>
      </div>
    </section>
  );
}
