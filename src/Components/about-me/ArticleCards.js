export default function ArticleCards(props) {
  return (
    <article key={props.key}>
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
}
