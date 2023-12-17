import FormMandarEmail from "../../components/reportar/FormMandarEmail";

const ReportarCaso = (props) => {
  return (
    <section className="pb-28">
      <FormMandarEmail params={props.searchParams} />
    </section>
  );
};

export default ReportarCaso;
