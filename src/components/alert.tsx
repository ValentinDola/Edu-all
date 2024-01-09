export default function Alert(props: any) {
  const { message } = props;
  return (
    <div className="relative isolate flex justify-center items-center bg-[#45D09E] px-6 py-2.5">
      <div className="flex">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">{message}</strong>
        </p>
      </div>
    </div>
  );
}
