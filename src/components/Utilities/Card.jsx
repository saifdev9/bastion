const Card = (props) => {
   return (
      <>
        <section className={props.className}>
         {props.cardTitle && <span className={`text-md  font-sans ${props.titleClasses}`}>{props.cardTitle}</span>}
         {props.children}
        </section>
      </>
   )
};

export default Card;