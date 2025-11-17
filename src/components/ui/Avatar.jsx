import avatarImg from '../../assets/himanshu.jpeg';

export default function Avatar() {
  return (
    <div className="flex items-center gap-3 px-4 pt-5 pb-4">
      <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#e5e7eb]">
        <img
          src={avatarImg}
          alt="Himanshu Kumar"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[14px] regular text-[#232e3e]">Himanshu Kumar</span>
      </div>
    </div>
  );
}
