export default function MenuButton(props) {
  return <div className="toggle" onClick={props.activeTggle}></div>;
}
// (e) => e.target.classList.toggle("active")
