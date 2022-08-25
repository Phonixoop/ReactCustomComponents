import s from "./text-field.module.scss";

export default function TextField({ id = "", placeHolder = "Blufy" }) {
  return (
    <div className={`${s.wrapper}`}>
      <div className={`${s.icon}`}></div>
      <div className={`${s.inner}`}>
        <input id={id} type="text" />
        <label htmlFor={id}>{placeHolder}</label>
      </div>
      <div className={`${s.right}`}></div>
    </div>
  );
}
