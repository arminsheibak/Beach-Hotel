interface Props {
  title: string;
}

const SectionTitle = ({title}: Props) => {
  return (
    <div className="section-title" >
      <h4>{title}</h4>
      <div></div>
    </div>
  )
}

export default SectionTitle