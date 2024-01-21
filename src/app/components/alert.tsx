export default function Alert(props: any) {
  const { message, error } = props;
  return (
    <div
      className={`cookie_card fade-element ${
        error ? `bg-[#EE3D48]` : `bg-[#45D09E] hidden_cookie`
      }  px-6 py-2.5`}
    >
      <div className="flex">
        <p className="text-sm leading-6 text-white">
          <strong className="font-semibold">{message}</strong>
        </p>
      </div>
    </div>
  );
}
