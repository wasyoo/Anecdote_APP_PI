const Input = ({ label, data, textarea }) => (
  <form>
    <div className="mb-3">
      <label className="form-label">{label} :</label>
      {textarea ? (
        <textarea {...data} className="form-control" rows="5" cols="33" />
      ) : (
        <input {...data} className="form-control" />
      )}
    </div>
  </form>
);

export default Input;
