export const Facts = ({ budget, currency, revenue, language, status }) => {
  return (
    <div className="facts wrapper">
      <h2 className="secondary">Facts</h2>
      <ul>
        <li>
          <p className="secondary">Status</p>
          <span>{status}</span>
        </li>
        <li>
          <p className="secondary">Language</p>
          <span>{language}</span>
        </li>
        <li>
          <p className="secondary">Budget</p>
          <span>
            {currency}
            {budget?.toLocaleString()}
          </span>
        </li>
        <li>
          <p className="secondary">Revenue</p>
          <span>
            {currency}
            {revenue?.toLocaleString()}
          </span>
        </li>
      </ul>
    </div>
  );
};
